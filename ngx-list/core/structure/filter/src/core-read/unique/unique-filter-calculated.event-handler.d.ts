import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { UniqueFilterCalculatedEvent } from '../../core/unique/calculate/unique-filter-calculated.event';
import { UniqueValueCollectionArchive } from './unique-value-collection.archive';
export declare class UniqueFilterCalculatedEventHandler implements DomainEventHandler<StructureId, UniqueFilterCalculatedEvent> {
    private readonly uniqueValuesRepository;
    constructor(uniqueValuesRepository: UniqueValueCollectionArchive);
    static readonly services: (typeof UniqueValueCollectionArchive)[];
    forEvent(): DomainEventType<UniqueFilterCalculatedEvent>;
    handle(calculatedEvent: UniqueFilterCalculatedEvent): void;
}
