import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from '../../api/event/domain-event';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../api/tactical/aggregate/aggregate-root';
export declare class DomainEventPublisher {
    private readonly eventStream;
    constructor(eventStream: DomainEventStream);
    static readonly services: readonly [typeof DomainEventStream];
    publish(event: DomainEvent<AggregateId>): void;
    publish(events: ReadonlyArray<DomainEvent<AggregateId>>): void;
    publishFromAggregate(aggregate: AggregateRoot<AggregateId>): void;
    private publishEvent;
}
