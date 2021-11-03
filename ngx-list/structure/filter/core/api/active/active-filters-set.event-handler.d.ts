import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterArchive } from './active-filter.archive';
import * as i0 from "@angular/core";
export declare class ActiveFiltersSetEventHandler implements DomainEventHandler<StructureId, ActiveFiltersSetEvent> {
    private readonly activeFilterRepository;
    constructor(activeFilterRepository: ActiveFilterArchive);
    forEvent(): DomainEventType<ActiveFiltersSetEvent>;
    handle(activeFiltersSetEvent: ActiveFiltersSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFiltersSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveFiltersSetEventHandler>;
}
//# sourceMappingURL=active-filters-set.event-handler.d.ts.map