import { AggregateId } from '../../../domain/aggregate-id';
import { ReadModel } from '../../../domain/read/read-model';
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
import { Optional } from '../../../common/optional';
export declare abstract class PersistReadModelStore<R extends ReadModel, A extends PersistAnemia> extends ReadModelStore<R> {
    private readonly stateStore;
    protected constructor(stateStore: PersistStateStore<A>);
    abstract toReadModel(anemia: A): R;
    getById(aggregateId: AggregateId): Optional<R>;
    getAll(): Array<R>;
    private getAllValues;
    private getValue;
}
