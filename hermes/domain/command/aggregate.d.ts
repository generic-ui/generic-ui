import { AggregateEvent } from './aggregate-event';
import { AggregateId } from '../aggregate-id';
export declare abstract class Aggregate {
    private readonly aggregateId;
    private readonly events;
    protected constructor(aggregateId: AggregateId);
    getId(): AggregateId;
    getEvents(): ReadonlyArray<AggregateEvent>;
    addEvent(event: AggregateEvent): void;
    clearEvents(): void;
}
