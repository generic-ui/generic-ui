import { AggregateId } from '../../domain/aggregate-id';
import { PersistAnemia } from './persist-anemia';
/**
 * Rename
 */
export declare abstract class PersistStateStore<A extends PersistAnemia> {
    private readonly state;
    set(anemia: A): void;
    setMany(anemias: Array<A>): void;
    get(aggregateId: AggregateId): A;
    getAll(): Array<A>;
    clear(): void;
}
