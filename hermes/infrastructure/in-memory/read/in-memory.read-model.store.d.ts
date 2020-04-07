import { AggregateId } from '../../../domain/aggregate-id';
import { AggregateRoot } from '../../../domain/command/aggregate/aggregate-root';
import { ReadModelRoot } from '../../../read/read-model-root';
import { ReadModelStore } from '../../../read/store/read-model.store';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../common/optional';
import { ReadModelRootId } from '../../../read/read-model-root-id';
export declare abstract class InMemoryReadModelStore<I extends ReadModelRootId, R extends ReadModelRoot<I>, B extends AggregateId, A extends AggregateRoot<B>> extends ReadModelStore<I, R> {
    private readonly inMemoryStore;
    protected constructor(inMemoryStore: InMemoryStore<B, A>);
    abstract toReadModel(aggregate: A): R;
    getById(aggregateId: B): Optional<R>;
    getAll(): ReadonlyArray<R>;
    private getValue;
}
