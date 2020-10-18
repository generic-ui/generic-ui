import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from './domain-event';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../tactical/aggregate/aggregate-root';
export declare class DomainEventPublisher {
    private eventStream;
    constructor(eventStream: DomainEventStream);
    publish(event: DomainEvent<AggregateId>): void;
    publish(events: ReadonlyArray<DomainEvent<AggregateId>>): void;
    publishFromAggregate(aggregate: AggregateRoot<AggregateId>): void;
    private publishEvent;
}
