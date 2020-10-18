import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterRepository } from './active-filter.repository';
export declare class ActiveFiltersSetEventHandler implements DomainEventHandler<StructureId, ActiveFiltersSetEvent> {
    private readonly activeFilterRepository;
    constructor(activeFilterRepository: ActiveFilterRepository);
    forEvent(): DomainEventType<ActiveFiltersSetEvent>;
    handle(activeFiltersSetEvent: ActiveFiltersSetEvent): void;
}
