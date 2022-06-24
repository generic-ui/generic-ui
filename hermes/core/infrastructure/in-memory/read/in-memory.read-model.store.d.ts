import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { ReadModelRoot } from '../../../api/read/read-model-root';
import { ReadModelStore } from '../../../api/read/store/read-model.store';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../../common/optional';
import { ReadModelRootId } from '../../../api/read/read-model-root-id';
export declare abstract class InMemoryReadModelStore<I extends ReadModelRootId, R extends ReadModelRoot<I>, B extends AggregateId, A extends AggregateRoot<B>> extends ReadModelStore<I, R> {
    private readonly inMemoryStore;
    protected constructor(inMemoryStore: InMemoryStore<B, A>);
    abstract toReadModel(aggregate: A): R;
    getById(aggregateId: B): Optional<R>;
    private getValue;
}
