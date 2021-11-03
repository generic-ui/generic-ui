import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../../domain/tactical/aggregate/aggregate-root';
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
import { Optional } from '../../../../common/optional';
import { ReadModelRootId } from '../../../api/read/read-model-root-id';
export declare abstract class PersistAggregateStore<I extends AggregateId, D extends AggregateRoot<I>, A extends PersistAnemia<ReadModelRootId>> extends AggregateStore<I, D> {
    private readonly stateStore;
    private readonly aggregateStoreRegister;
    protected constructor(stateStore: PersistStateStore<any, A>, aggregateStoreRegister: AggregateStoreRegister);
    abstract toAnemia(aggregate: D): A;
    abstract fromAnemia(anemia: A): D;
    save(aggregate: D): void;
    findById(aggregateId: I): Optional<D>;
    private saveValue;
    private getValue;
}
//# sourceMappingURL=persist-aggregate.store.d.ts.map