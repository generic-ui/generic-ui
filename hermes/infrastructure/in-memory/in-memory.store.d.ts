import { AggregateId } from '../../domain/aggregate-id';
import { AggregateRoot } from '../../domain/command/aggregate/aggregate-root';
import { Optional } from '../../common/optional';
export declare abstract class InMemoryStore<I extends AggregateId, S extends AggregateRoot<I>> {
    private readonly state;
    set(aggregate: S): void;
    setMany(aggregates: Array<S>): void;
    get(aggregateId: I): Optional<S>;
    getAll(): Array<S>;
    has(aggregateId: I): boolean;
    delete(aggregateId: I): void;
    clear(): void;
}
