import { AggregateId } from '../../domain/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../domain/tactical/aggregate/aggregate-root';
import { Optional } from '../../../common/optional';
export declare abstract class InMemoryStore<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly state;
    set(aggregate: A): void;
    setMany(aggregates: Array<A>): void;
    get(aggregateId: I): Optional<A>;
    getAll(): Array<Optional<A>>;
    has(aggregateId: I): boolean;
    delete(aggregateId: I): void;
    clear(): void;
}
//# sourceMappingURL=in-memory.store.d.ts.map