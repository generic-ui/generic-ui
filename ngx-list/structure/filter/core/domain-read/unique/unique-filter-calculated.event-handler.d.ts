import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValueCollectionArchive } from './unique-value-collection.archive';
export declare class UniqueFilterCalculatedEventHandler implements DomainEventHandler<StructureId, UniqueFilterCalculatedEvent> {
    private readonly uniqueValuesRepository;
    constructor(uniqueValuesRepository: UniqueValueCollectionArchive);
    forEvent(): DomainEventType<UniqueFilterCalculatedEvent>;
    handle(calculatedEvent: UniqueFilterCalculatedEvent): void;
}
