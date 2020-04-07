import { AggregateId } from '../../aggregate-id';
export declare abstract class AggregateEvent<T extends AggregateId> {
    private readonly aggregateId;
    private readonly type;
    protected constructor(aggregateId: T, type: string);
    getAggregateId(): AggregateId;
    getType(): string;
    equals(event: AggregateEvent<T>): boolean;
    equalsByType(event: AggregateEvent<T>): boolean;
}
