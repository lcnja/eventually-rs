(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRootBuilder.html\" title=\"struct eventually_core::aggregate::AggregateRootBuilder\">AggregateRootBuilder</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::aggregate::AggregateRootBuilder"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRoot.html\" title=\"struct eventually_core::aggregate::AggregateRoot\">AggregateRoot</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Id\" title=\"type eventually_core::aggregate::Aggregate::Id\">Id</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_core::aggregate::Aggregate::State\">State</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::aggregate::AggregateRoot"]},{"text":"impl&lt;A, S&gt; Freeze for <a class=\"enum\" href=\"eventually_core/repository/enum.Error.html\" title=\"enum eventually_core::repository::Error\">Error</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::repository::Error"]},{"text":"impl&lt;T, Store&gt; Freeze for <a class=\"struct\" href=\"eventually_core/repository/struct.Repository.html\" title=\"struct eventually_core::repository::Repository\">Repository</a>&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::repository::Repository"]},{"text":"impl&lt;SourceId, T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/store/persistent/struct.EventBuilder.html\" title=\"struct eventually_core::store::persistent::EventBuilder\">EventBuilder</a>&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::store::persistent::EventBuilder"]},{"text":"impl&lt;SourceId, T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/store/persistent/struct.EventBuilderWithVersion.html\" title=\"struct eventually_core::store::persistent::EventBuilderWithVersion\">EventBuilderWithVersion</a>&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::store::persistent::EventBuilderWithVersion"]},{"text":"impl&lt;SourceId, T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/store/persistent/struct.EventBuilderWithSequenceNumber.html\" title=\"struct eventually_core::store::persistent::EventBuilderWithSequenceNumber\">EventBuilderWithSequenceNumber</a>&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::store::persistent::EventBuilderWithSequenceNumber"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_core/store/enum.Select.html\" title=\"enum eventually_core::store::Select\">Select</a>","synthetic":true,"types":["eventually_core::store::Select"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_core/store/enum.Expected.html\" title=\"enum eventually_core::store::Expected\">Expected</a>","synthetic":true,"types":["eventually_core::store::Expected"]},{"text":"impl&lt;SourceId, T&gt; Freeze for <a class=\"struct\" href=\"eventually_core/store/struct.Persisted.html\" title=\"struct eventually_core::store::Persisted\">Persisted</a>&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::store::Persisted"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_core/subscription/enum.Error.html\" title=\"enum eventually_core::subscription::Error\">Error</a>","synthetic":true,"types":["eventually_core::subscription::Error"]},{"text":"impl&lt;Store, Subscriber&gt; Freeze for <a class=\"struct\" href=\"eventually_core/subscription/struct.Transient.html\" title=\"struct eventually_core::subscription::Transient\">Transient</a>&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_core::subscription::Transient"]}];
implementors["eventually_postgres"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":true,"types":["eventually_postgres::store::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStoreBuilder.html\" title=\"struct eventually_postgres::store::EventStoreBuilder\">EventStoreBuilder</a>","synthetic":true,"types":["eventually_postgres::store::EventStoreBuilder"]},{"text":"impl&lt;Tls&gt; Freeze for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStoreBuilderMigrated.html\" title=\"struct eventually_postgres::store::EventStoreBuilderMigrated\">EventStoreBuilderMigrated</a>&lt;Tls&gt;","synthetic":true,"types":["eventually_postgres::store::EventStoreBuilderMigrated"]},{"text":"impl&lt;Id, Event, Tls&gt; Freeze for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStore.html\" title=\"struct eventually_postgres::store::EventStore\">EventStore</a>&lt;Id, Event, Tls&gt;","synthetic":true,"types":["eventually_postgres::store::EventStore"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_postgres/subscriber/enum.SubscriberError.html\" title=\"enum eventually_postgres::subscriber::SubscriberError\">SubscriberError</a>","synthetic":true,"types":["eventually_postgres::subscriber::SubscriberError"]},{"text":"impl&lt;Id, Event&gt; Freeze for <a class=\"struct\" href=\"eventually_postgres/subscriber/struct.EventSubscriber.html\" title=\"struct eventually_postgres::subscriber::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_postgres::subscriber::EventSubscriber"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_postgres/subscription/enum.Error.html\" title=\"enum eventually_postgres::subscription::Error\">Error</a>","synthetic":true,"types":["eventually_postgres::subscription::Error"]},{"text":"impl&lt;SourceId, Event, Tls&gt; Freeze for <a class=\"struct\" href=\"eventually_postgres/subscription/struct.PersistentBuilder.html\" title=\"struct eventually_postgres::subscription::PersistentBuilder\">PersistentBuilder</a>&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":["eventually_postgres::subscription::PersistentBuilder"]},{"text":"impl&lt;SourceId, Event, Tls&gt; !Freeze for <a class=\"struct\" href=\"eventually_postgres/subscription/struct.Persistent.html\" title=\"struct eventually_postgres::subscription::Persistent\">Persistent</a>&lt;SourceId, Event, Tls&gt;","synthetic":true,"types":["eventually_postgres::subscription::Persistent"]}];
implementors["eventually_redis"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_redis/enum.StoreError.html\" title=\"enum eventually_redis::StoreError\">StoreError</a>","synthetic":true,"types":["eventually_redis::store::StoreError"]},{"text":"impl&lt;Id, Event&gt; Freeze for <a class=\"struct\" href=\"eventually_redis/struct.EventStore.html\" title=\"struct eventually_redis::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_redis::store::EventStore"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_redis/enum.SubscriberError.html\" title=\"enum eventually_redis::SubscriberError\">SubscriberError</a>","synthetic":true,"types":["eventually_redis::subscriber::SubscriberError"]},{"text":"impl&lt;Id, Event&gt; Freeze for <a class=\"struct\" href=\"eventually_redis/struct.EventSubscriber.html\" title=\"struct eventually_redis::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_redis::subscriber::EventSubscriber"]},{"text":"impl Freeze for <a class=\"enum\" href=\"eventually_redis/enum.SubscriptionError.html\" title=\"enum eventually_redis::SubscriptionError\">SubscriptionError</a>","synthetic":true,"types":["eventually_redis::subscription::SubscriptionError"]},{"text":"impl&lt;Id, Event&gt; Freeze for <a class=\"struct\" href=\"eventually_redis/struct.PersistentSubscription.html\" title=\"struct eventually_redis::PersistentSubscription\">PersistentSubscription</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_redis::subscription::PersistentSubscription"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_redis/struct.Builder.html\" title=\"struct eventually_redis::Builder\">Builder</a>","synthetic":true,"types":["eventually_redis::Builder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_redis/struct.BuilderWithSourceName.html\" title=\"struct eventually_redis::BuilderWithSourceName\">BuilderWithSourceName</a>","synthetic":true,"types":["eventually_redis::BuilderWithSourceName"]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; Freeze for <a class=\"struct\" href=\"eventually_util/inmemory/struct.Projector.html\" title=\"struct eventually_util::inmemory::Projector\">Projector</a>&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_util::inmemory::projector::Projector"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_util/inmemory/struct.ConflictError.html\" title=\"struct eventually_util::inmemory::ConflictError\">ConflictError</a>","synthetic":true,"types":["eventually_util::inmemory::store::ConflictError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_util/inmemory/struct.LaggedError.html\" title=\"struct eventually_util::inmemory::LaggedError\">LaggedError</a>","synthetic":true,"types":["eventually_util::inmemory::store::LaggedError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStoreBuilder.html\" title=\"struct eventually_util::inmemory::EventStoreBuilder\">EventStoreBuilder</a>","synthetic":true,"types":["eventually_util::inmemory::store::EventStoreBuilder"]},{"text":"impl&lt;Id, Event&gt; Freeze for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStore.html\" title=\"struct eventually_util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_util::inmemory::store::EventStore"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":["eventually_util::optional::AsAggregate"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()