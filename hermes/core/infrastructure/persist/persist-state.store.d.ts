import { PersistAnemia } from './persist-anemia';
import { Optional } from '../../../common/optional';
import { ReadModelRootId } from '../../api/read/read-model-root-id';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
export declare abstract class PersistStateStore<I extends ReadModelRootId, A extends PersistAnemia<I>> {
    private readonly state;
    set(anemia: A): void;
    setMany(anemias: Array<A>): void;
    get(aggregateId: AggregateId): Optional<A>;
    getAll(): Array<A>;
    clear(): void;
}
