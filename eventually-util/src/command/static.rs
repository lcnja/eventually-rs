use async_trait::async_trait;

use eventually_core::aggregate::{Aggregate, EventOf, StateOf};
use eventually_core::command::{Handler as CommandHandler, Result};

#[async_trait]
pub trait Handler {
    type Command;
    type Aggregate: Aggregate;
    type Error;

    fn as_handler() -> AsHandler<Self>
    where
        Self: Sized,
    {
        AsHandler(std::marker::PhantomData)
    }

    async fn handle(
        state: &StateOf<Self::Aggregate>,
        command: Self::Command,
    ) -> Result<EventOf<Self::Aggregate>, Self::Error>;
}

pub struct AsHandler<T>(std::marker::PhantomData<T>);

#[async_trait]
impl<T: Handler> CommandHandler for AsHandler<T>
where
    T: Send + Sync,
    T::Command: Send + Sync,
    StateOf<T::Aggregate>: Send + Sync,
{
    type Command = T::Command;
    type Aggregate = T::Aggregate;
    type Error = T::Error;

    async fn handle(
        &self,
        state: &StateOf<Self::Aggregate>,
        command: Self::Command,
    ) -> Result<EventOf<Self::Aggregate>, Self::Error> {
        T::handle(state, command).await
    }
}