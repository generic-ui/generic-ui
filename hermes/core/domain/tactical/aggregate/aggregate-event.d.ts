import { AggregateId } from './aggregate-id';
import { DomainEvent } from '../../event/domain-event';
export declare abstract class AggregateEvent<T extends AggregateId> {
    private readonly aggregateId;
    private readonly type;
    protected constructor(aggregateId: T, type: string);
    abstract toDomainEvent(): DomainEvent<T>;
    getAggregateId(): AggregateId;
    getType(): string;
    equals(event: AggregateEvent<T>): boolean;
    equalsByType(event: AggregateEvent<T>): boolean;
}
