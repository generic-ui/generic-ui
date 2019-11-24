import { AggregateId } from '../../../domain/aggregate-id';
import { ReadModel } from '../../../domain/query/read-model';
import { ReadModelStore } from '../../../domain/query/store/read-model.store';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
export declare abstract class PersistReadModelStore<T extends ReadModel, S extends PersistAnemia> extends ReadModelStore<T> {
    private readonly stateStore;
    protected constructor(stateStore: PersistStateStore<S>);
    abstract fromAnemia(anemia: S): T;
    getById(aggregateId: AggregateId): T;
    getAll(): Array<T>;
    private getAllValues;
    private getValue;
}
