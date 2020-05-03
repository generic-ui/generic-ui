import { AggregateEvent, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureId } from '../structure.id';
export declare class StructureSourceDomainEventPublisher {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    publish(events: ReadonlyArray<AggregateEvent<StructureId>>): void;
    private publishEvent;
}
