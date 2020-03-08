import { AggregateEvent } from './aggregate-event';
import { AggregateId } from '../../aggregate-id';
export declare abstract class Aggregate {
    private readonly type;
    private readonly aggregateId;
    private readonly events;
    protected constructor(aggregateId: AggregateId, type: string);
    getId(): AggregateId;
    getEvents(): ReadonlyArray<AggregateEvent>;
    addEvent(event: AggregateEvent): void;
    addEvent(events: Array<AggregateEvent>): void;
    clearEvents(): void;
}
