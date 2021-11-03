import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../../domain/tactical/aggregate/aggregate-root';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { InMemoryStore } from '../in-memory.store';
import { Optional } from '../../../../common/optional';
export declare abstract class InMemoryAggregateStore<I extends AggregateId, T extends AggregateRoot<I>> extends AggregateStore<I, T> {
    private readonly inMemoryStore;
    private readonly aggregateStoreRegister;
    protected constructor(inMemoryStore: InMemoryStore<I, T>, aggregateStoreRegister: AggregateStoreRegister);
    save(aggregate: T): void;
    save(aggregates: Array<T>): void;
    findById(aggregateId: I): Optional<T>;
    remove(aggregateId: I): void;
}
//# sourceMappingURL=in-memory.aggregate.store.d.ts.map