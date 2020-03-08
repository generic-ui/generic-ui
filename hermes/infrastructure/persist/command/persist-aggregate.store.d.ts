import { AggregateId } from '../../../domain/aggregate-id';
import { Aggregate } from '../../../domain/command/aggregate/aggregate';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
import { Optional } from '../../../common/optional';
export declare abstract class PersistAggregateStore<D extends Aggregate, A extends PersistAnemia> extends AggregateStore<D> {
    private readonly stateStore;
    private readonly aggregateStoreRegister;
    protected constructor(stateStore: PersistStateStore<A>, aggregateStoreRegister: AggregateStoreRegister);
    abstract toAnemia(aggregate: D): A;
    abstract fromAnemia(anemia: A): D;
    save(aggregate: D): void;
    getById(aggregateId: AggregateId): Optional<D>;
    private saveValue;
    private getValue;
}
