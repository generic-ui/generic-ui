import { AggregateId } from '../../domain/aggregate-id';
export declare abstract class PersistAnemia {
    private readonly aggregateId;
    protected constructor(uid: AggregateId);
    getAggregateId(): AggregateId;
    getId(): string;
}
