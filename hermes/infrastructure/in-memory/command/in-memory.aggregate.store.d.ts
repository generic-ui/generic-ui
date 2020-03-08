import { AggregateId } from '../../../domain/aggregate-id';
import { Aggregate } from '../../../domain/command/aggregate/aggregate';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../common/optional';
export declare abstract class InMemoryAggregateStore<T extends Aggregate> extends AggregateStore<T> {
    private readonly inMemoryStore;
    private readonly aggregateStoreRegister;
    protected constructor(inMemoryStore: InMemoryStore<T>, aggregateStoreRegister: AggregateStoreRegister);
    save(aggregate: T): void;
    save(aggregates: Array<T>): void;
    getById(aggregateId: AggregateId): Optional<T>;
    getAll(): Array<T>;
    remove(aggregateId: AggregateId): void;
}
