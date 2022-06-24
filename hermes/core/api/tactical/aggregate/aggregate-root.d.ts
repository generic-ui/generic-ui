import { AggregateEvent } from './aggregate-event';
import { AggregateId } from './aggregate-id';
import { AggregateEventType } from './aggregate-event-type';
export declare abstract class AggregateRoot<I extends AggregateId> {
    private readonly type;
    private readonly aggregateId;
    private readonly events;
    protected constructor(aggregateId: I, type: string);
    abstract createEvent(): AggregateEventType<AggregateEvent<I>>;
    getId(): I;
    getType(): string;
    getEvents(): ReadonlyArray<AggregateEvent<I>>;
    addEvent(event: AggregateEvent<I>): void;
    addEvent(events: Array<AggregateEvent<I>>): void;
    clearEvents(): void;
    equals(aggregate: AggregateRoot<I>): boolean;
}
