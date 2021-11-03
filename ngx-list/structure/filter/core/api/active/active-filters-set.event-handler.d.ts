import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterArchive } from './active-filter.archive';
export declare class ActiveFiltersSetEventHandler implements DomainEventHandler<StructureId, ActiveFiltersSetEvent> {
    private readonly activeFilterRepository;
    constructor(activeFilterRepository: ActiveFilterArchive);
    forEvent(): DomainEventType<ActiveFiltersSetEvent>;
    handle(activeFiltersSetEvent: ActiveFiltersSetEvent): void;
}
