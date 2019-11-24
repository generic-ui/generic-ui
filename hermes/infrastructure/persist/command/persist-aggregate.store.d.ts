import { AggregateId } from '../../../domain/aggregate-id';
import { Aggregate } from '../../../domain/command/aggregate';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
export declare abstract class PersistAggregateStore<T extends Aggregate, S extends PersistAnemia> extends AggregateStore<T> {
    private readonly stateStore;
    private readonly aggregateStoreRegister;
    protected constructor(stateStore: PersistStateStore<S>, aggregateStoreRegister: AggregateStoreRegister);
    abstract toAnemia(aggregate: T): S;
    abstract fromAnemia(anemia: S): T;
    save(aggregate: T): void;
    getById(aggregateId: AggregateId): T;
    private saveValue;
    private getValue;
}
