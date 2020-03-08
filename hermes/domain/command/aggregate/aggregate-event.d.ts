import { AggregateId } from '../../aggregate-id';
export declare abstract class AggregateEvent {
    private readonly aggregateId;
    private readonly type;
    protected constructor(aggregateId: AggregateId, type: string);
    getAggregateId(): AggregateId;
    getType(): string;
    equals(event: AggregateEvent): boolean;
    equalsByType(event: AggregateEvent): boolean;
}
