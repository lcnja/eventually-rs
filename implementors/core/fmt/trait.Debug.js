(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRoot.html\" title=\"struct eventually_core::aggregate::AggregateRoot\">AggregateRoot</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Id\" title=\"type eventually_core::aggregate::Aggregate::Id\">Id</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_core::aggregate::Aggregate::State\">State</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Event\" title=\"type eventually_core::aggregate::Aggregate::Event\">Event</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["eventually_core::aggregate::AggregateRoot"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_core/repository/enum.Error.html\" title=\"enum eventually_core::repository::Error\">Error</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static,&nbsp;</span>","synthetic":false,"types":["eventually_core::repository::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_core/store/enum.Select.html\" title=\"enum eventually_core::store::Select\">Select</a>","synthetic":false,"types":["eventually_core::store::Select"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_core/store/enum.Expected.html\" title=\"enum eventually_core::store::Expected\">Expected</a>","synthetic":false,"types":["eventually_core::store::Expected"]},{"text":"impl&lt;SourceId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_core/store/struct.Persisted.html\" title=\"struct eventually_core::store::Persisted\">Persisted</a>&lt;SourceId, T&gt;","synthetic":false,"types":["eventually_core::store::Persisted"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_core/subscription/enum.Error.html\" title=\"enum eventually_core::subscription::Error\">Error</a>","synthetic":false,"types":["eventually_core::subscription::Error"]}];
implementors["eventually_postgres"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":false,"types":["eventually_postgres::store::Error"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Tls:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStore.html\" title=\"struct eventually_postgres::store::EventStore\">EventStore</a>&lt;Id, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tls: <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.Stream\" title=\"type tokio_postgres::tls::MakeTlsConnect::Stream\">Stream</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a> as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html\" title=\"trait tokio_postgres::tls::TlsConnect\">TlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html#associatedtype.Future\" title=\"type tokio_postgres::tls::TlsConnect::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["eventually_postgres::store::EventStore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_postgres/subscriber/enum.SubscriberError.html\" title=\"enum eventually_postgres::subscriber::SubscriberError\">SubscriberError</a>","synthetic":false,"types":["eventually_postgres::subscriber::SubscriberError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_postgres/subscription/enum.Error.html\" title=\"enum eventually_postgres::subscription::Error\">Error</a>","synthetic":false,"types":["eventually_postgres::subscription::Error"]}];
implementors["eventually_redis"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_redis/enum.StoreError.html\" title=\"enum eventually_redis::StoreError\">StoreError</a>","synthetic":false,"types":["eventually_redis::store::StoreError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_redis/enum.SubscriberError.html\" title=\"enum eventually_redis::SubscriberError\">SubscriberError</a>","synthetic":false,"types":["eventually_redis::subscriber::SubscriberError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"eventually_redis/enum.SubscriptionError.html\" title=\"enum eventually_redis::SubscriptionError\">SubscriptionError</a>","synthetic":false,"types":["eventually_redis::subscription::SubscriptionError"]}];
implementors["eventually_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.ConflictError.html\" title=\"struct eventually_util::inmemory::ConflictError\">ConflictError</a>","synthetic":false,"types":["eventually_util::inmemory::store::ConflictError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.LaggedError.html\" title=\"struct eventually_util::inmemory::LaggedError\">LaggedError</a>","synthetic":false,"types":["eventually_util::inmemory::store::LaggedError"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStore.html\" title=\"struct eventually_util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["eventually_util::inmemory::store::EventStore"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()