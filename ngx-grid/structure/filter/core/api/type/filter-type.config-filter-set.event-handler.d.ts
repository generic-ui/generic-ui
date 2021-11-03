import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { FilterTypeArchive } from './filter-type.archive';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
export declare class FilterTypeConfigFilterSetEventHandler implements DomainEventHandler<StructureId, FilterTypesInitedEvent> {
    private readonly filterTypeArchive;
    constructor(filterTypeArchive: FilterTypeArchive);
    forEvent(): DomainEventType<FilterTypesInitedEvent>;
    handle(filterTypesInitedEvent: FilterTypesInitedEvent): void;
}
