import { AggregateEvent, DomainEventPublisher } from '@generic-ui/hermes';
export declare class StructureSourceDomainEventPublisher {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    publish(events: ReadonlyArray<AggregateEvent>): void;
    private publishEvent;
}
