use std::collections::HashMap;
use std::fmt::Debug;
use std::hash::Hash;
use std::sync::{Arc, RwLock};

use async_stream::try_stream;

use async_trait::async_trait;

use futures::stream::{empty, BoxStream};

use crate::eventstore::{EventStore, PersistedEvent, PersistedEvents, Select, Version};
use crate::Events;

#[derive(Debug, Clone)]
pub struct InMemoryEventStore<Id, Evt> {
    events: Arc<RwLock<HashMap<Id, PersistedEvents<Id, Evt>>>>,
}

impl<Id, Evt> Default for InMemoryEventStore<Id, Evt> {
    #[inline]
    fn default() -> Self {
        Self {
            events: Arc::new(RwLock::new(HashMap::new())),
        }
    }
}

#[derive(Debug, thiserror::Error)]
#[error("conflict error, last version committed: `{last_committed_version}`, caller provided: `{provided}`")]
pub struct ConflictError {
    last_committed_version: u32,
    provided: u32,
}

impl crate::eventstore::ConflictError for ConflictError {
    #[inline]
    fn is_conflict(&self) -> bool {
        true
    }
}

#[async_trait]
impl<Id, Evt> EventStore<Id, Evt> for InMemoryEventStore<Id, Evt>
where
    Id: Eq + Hash + Clone + Send + Sync + Unpin,
    Evt: Clone + Send + Sync + Unpin,
{
    type AppendError = ConflictError;
    type StreamError = std::convert::Infallible;

    async fn append(
        &mut self,
        id: &Id,
        version: Version,
        events: Events<Evt>,
    ) -> Result<u32, Self::AppendError> {
        let last_committed_version = self
            .events
            .read()
            .unwrap()
            .get(id)
            .and_then(|events| events.last())
            .map(PersistedEvent::version)
            .unwrap_or_default();

        if let Version::Exact(version) = version {
            if version != last_committed_version {
                return Err(ConflictError {
                    last_committed_version,
                    provided: version,
                });
            }
        }

        let new_version = last_committed_version + (events.len() as u32);

        let new_events = events
            .into_iter()
            .enumerate()
            .map(|(i, event)| PersistedEvent {
                stream_id: id.clone(),
                version: (last_committed_version + 1) + (i as u32),
                event,
            });

        self.events
            .write()
            .unwrap()
            .entry(id.clone())
            .and_modify(|events| events.extend(new_events.clone()))
            .or_insert_with(|| new_events.collect());

        Ok(new_version)
    }

    fn stream(
        &self,
        id: &Id,
        select: Select,
    ) -> BoxStream<Result<PersistedEvent<Id, Evt>, Self::StreamError>> {
        let events = self.events.read().unwrap();
        let events = events.get(id);

        let no_events = events.map(Vec::is_empty).unwrap_or(true);
        if no_events {
            return Box::pin(empty());
        }

        let events = events.cloned().expect("should have events");

        Box::pin(try_stream! {
            for event in events {
                match select {
                    Select::All => yield event,
                    Select::From(version) if event.version() >= version => yield event,
                    _ => ()
                };
            }
        })
    }
}