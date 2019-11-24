import { AggregateId } from '../aggregate-id';
export declare abstract class ReadModel {
    private readonly aggregateId;
    protected constructor(gui: AggregateId);
    getId(): AggregateId;
}
