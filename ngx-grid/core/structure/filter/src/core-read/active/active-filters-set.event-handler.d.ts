import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { ActiveFiltersSetEvent } from '../../core/active-filters-set.event';
export declare class ActiveFiltersSetEventHandler implements DomainEventHandler<StructureId, ActiveFiltersSetEvent> {
    private readonly activeFilterRepository;
    forEvent(): DomainEventType<ActiveFiltersSetEvent>;
    handle(activeFiltersSetEvent: ActiveFiltersSetEvent): void;
}
