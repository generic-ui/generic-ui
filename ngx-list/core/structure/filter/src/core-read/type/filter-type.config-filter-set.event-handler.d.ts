import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FilterTypesInitedEvent } from '../../core/type/init/filter-types-inited.event';
export declare class FilterTypeConfigFilterSetEventHandler implements DomainEventHandler<StructureId, FilterTypesInitedEvent> {
    private readonly filterTypeArchive;
    forEvent(): DomainEventType<FilterTypesInitedEvent>;
    handle(filterTypesInitedEvent: FilterTypesInitedEvent): void;
}
