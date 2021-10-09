import { AggregateEvent, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
export declare class SourceDomainEventPublisher {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    publish(events: ReadonlyArray<AggregateEvent<StructureId>>): void;
    private publishEvent;
}
