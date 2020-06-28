import { AggregateEvent, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureId } from '../../../lib/structure/domain/structure.id';
export declare class SourceDomainEventPublisher {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    publish(events: ReadonlyArray<AggregateEvent<StructureId>>): void;
    private publishEvent;
}
