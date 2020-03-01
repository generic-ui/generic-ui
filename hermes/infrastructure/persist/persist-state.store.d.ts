import { AggregateId } from '../../domain/aggregate-id';
import { PersistAnemia } from './persist-anemia';
import { Optional } from '../../common/optional';
export declare abstract class PersistStateStore<A extends PersistAnemia> {
    private readonly state;
    set(anemia: A): void;
    setMany(anemias: Array<A>): void;
    get(aggregateId: AggregateId): Optional<A>;
    getAll(): Array<A>;
    clear(): void;
}
