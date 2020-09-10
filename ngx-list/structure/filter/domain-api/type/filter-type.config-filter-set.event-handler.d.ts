import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterTypeRepository } from './filter-type.repository';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
export declare class FilterTypeConfigFilterSetEventHandler implements DomainEventHandler<StructureId, FilterTypesInitedEvent> {
    private readonly filterTypeRepository;
    constructor(filterTypeRepository: FilterTypeRepository);
    forEvent(): DomainEventType<FilterTypesInitedEvent>;
    handle(filterTypesInitedEvent: FilterTypesInitedEvent): void;
}
