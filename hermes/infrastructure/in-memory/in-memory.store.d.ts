import { AggregateId } from '../../domain/aggregate-id';
import { Aggregate } from '../../domain/command/aggregate/aggregate';
import { Optional } from '../../common/optional';
export declare abstract class InMemoryStore<S extends Aggregate> {
    private readonly state;
    set(aggregate: S): void;
    setMany(aggregates: Array<S>): void;
    get(aggregateId: AggregateId): Optional<S>;
    getAll(): Array<S>;
    has(aggregateId: AggregateId): boolean;
    delete(aggregateId: AggregateId): void;
    clear(): void;
}
