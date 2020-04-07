import { ReadModelRoot } from '../../../read/read-model-root';
import { ReadModelStore } from '../../../read/store/read-model.store';
import { PersistAnemia } from '../persist-anemia';
import { PersistStateStore } from '../persist-state.store';
import { Optional } from '../../../common/optional';
import { ReadModelRootId } from '../../../read/read-model-root-id';
import { AggregateId } from '../../../domain/aggregate-id';
export declare abstract class PersistReadModelStore<I extends ReadModelRootId, R extends ReadModelRoot<I>, A extends PersistAnemia<I>> extends ReadModelStore<I, R> {
    private readonly stateStore;
    protected constructor(stateStore: PersistStateStore<I, A>);
    abstract toReadModel(anemia: A): R;
    getById(aggregateId: AggregateId): Optional<R>;
    getAll(): Array<R>;
    private getAllValues;
    private getValue;
}
