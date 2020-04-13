import { Type } from '@angular/core';
import { AggregateEvent } from './aggregate-event';
import { AggregateId } from '../../aggregate-id';
export declare abstract class AggregateRoot<I extends AggregateId> {
    private readonly type;
    private readonly aggregateId;
    private readonly events;
    protected constructor(aggregateId: I, type: string);
    abstract createEvent(): Type<AggregateEvent<I>>;
    getId(): I;
    getType(): string;
    getEvents(): ReadonlyArray<AggregateEvent<I>>;
    addEvent(event: AggregateEvent<I>): void;
    addEvent(events: Array<AggregateEvent<I>>): void;
    clearEvents(): void;
}
