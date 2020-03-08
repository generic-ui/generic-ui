import { Command } from '../command/command';
import { AggregateEvent } from '../command/aggregate/aggregate-event';
import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from './domain-event';
export declare class DomainEventPublisher {
    private eventStream;
    constructor(eventStream: DomainEventStream);
    publish(event: DomainEvent): void;
    publish(events: ReadonlyArray<DomainEvent>): void;
    dispatchAggregateEvent(aggregateEvent: AggregateEvent, command: Command): void;
    private publishEvent;
}
