import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../../common/optional';
export declare abstract class InMemoryAggregateStore<I extends AggregateId, T extends AggregateRoot<I>> extends AggregateStore<I, T> {
    private readonly inMemoryStore;
    private readonly aggregateStoreRegister;
    protected constructor(inMemoryStore: InMemoryStore<I, T>);
    save(aggregate: T): void;
    save(aggregates: Array<T>): void;
    findById(aggregateId: I): Optional<T>;
    remove(aggregateId: I): void;
}
