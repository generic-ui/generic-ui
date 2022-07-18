import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class SourceDomainEventPublisher {
    private readonly domainEventPublisher;
    publish(events: ReadonlyArray<AggregateEvent<StructureId>>): void;
    private publishEvent;
}
