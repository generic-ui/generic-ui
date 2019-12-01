/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/query/structure.repository';
import { InMemoryStructureQueryStore } from './in-memory.structure.query-store';
import { StructureInitedEvent } from '../../../../domain/structure/command/init/structure-inited.event';
import { SetSourceLoadingEvent } from '../../../../domain/source/command/loading/set-source-loading.event';
import { SchemaSetEvent } from '../../../../domain/schema/command/set/schema-set.event';
import { SchemaThemeSetEvent } from '../../../../domain/schema/command/theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from '../../../../domain/schema/command/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../../../domain/schema/command/grid/vertical/schema-vertical-grid-set.event';
import { SchemaTopHeaderChangedEvent } from '../../../../domain/schema/command/column-header/top/schema-top-header-changed.event';
import { SchemaBottomHeaderChangedEvent } from '../../../../domain/schema/command/column-header/bottom/schema-bottom-header-changed.event';
import { RowColoringSetEvent } from '../../../../domain/schema/command/coloring/set/row-coloring-set.event';
import { PagingSetEvent } from '../../../../domain/paging/command/set/paging-set.event';
import { PrevPageEvent } from '../../../../domain/paging/command/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../domain/paging/command/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../domain/paging/command/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../../domain/formation/command/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../../domain/formation/command/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../../domain/structure/command/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../../domain/structure/command/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../domain/structure/command/sort/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../domain/source/command/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../../domain/structure/command/filter/toggle/structure.filter-toggled.event';
export class InMemoryStructureRepository extends StructureRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureQueryStore
     */
    constructor(domainEventBus, inMemoryStructureQueryStore) {
        super();
        this.domainEventBus = domainEventBus;
        this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
        this.unsubscribe$ = new Subject();
        this.domainEventBus
            .ofEvent(StructureInitedEvent, SetSourceLoadingEvent, SchemaSetEvent, SchemaThemeSetEvent, SchemaHorizontalGridSetEvent, SchemaVerticalGridSetEvent, SchemaTopHeaderChangedEvent, SchemaBottomHeaderChangedEvent, RowColoringSetEvent, PagingSetEvent, PrevPageEvent, NextPageEvent, PagesizeChangedEvent, FormationSetEvent, SelectedRowToggledEvent, VerticalScrollEnabledSetEvent, ScrollPositionSetEvent, (/** @type {?} */ (SortToggledEvent)), StructureFilterToggledEvent, (/** @type {?} */ (OriginSetEvent)))
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const aggregateId = event.aggregateId;
            /** @type {?} */
            const structure = this.inMemoryStructureQueryStore.getById(aggregateId);
            /** @type {?} */
            const key = structure.getId().toString();
            this.structureIdToStructure.set(key, structure);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    select(aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => structureIdToStructure.get(aggregateId.getId()))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
InMemoryStructureRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureQueryStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structureIdToStructure;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcXVlcnkvaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDeEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQzNJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHVHQUF1RyxDQUFDO0FBQ3RKLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1HQUFtRyxDQUFDO0FBQzNJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUtoSSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsbUJBQW1COzs7OztJQVFuRSxZQUFvQixjQUE4QixFQUN2QywyQkFBd0Q7UUFDbEUsS0FBSyxFQUFFLENBQUM7UUFGVyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQVBsRCwyQkFBc0IsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztRQUV0RCxlQUFVLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO1FBRTFELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU03QyxJQUFJLENBQUMsY0FBYzthQUNqQixPQUFPLENBQ1Asb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLDRCQUE0QixFQUM1QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDhCQUE4QixFQUM5QixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGFBQWEsRUFDYixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLHNCQUFzQixFQUN0QixtQkFBQSxnQkFBZ0IsRUFBTyxFQUN2QiwyQkFBMkIsRUFDM0IsbUJBQUEsY0FBYyxFQUFPLENBQ3JCO2FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFOztrQkFFM0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXOztrQkFFL0IsU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztrQkFDdEUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFbkMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUU5QixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ2hCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxzQkFBOEMsRUFBRSxFQUFFOztrQkFFbkQsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFFL0IsT0FBTyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsc0JBQThDLEVBQUUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUN4RyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBcEVELFVBQVU7Ozs7WUE1QkYsY0FBYztZQUlkLDJCQUEyQjs7Ozs7OztJQTJCbkMsNkRBQXVFOzs7OztJQUV2RSxpREFBMkU7Ozs7O0lBRTNFLG1EQUE4Qzs7Ozs7SUFFbEMscURBQXNDOzs7OztJQUMvQyxrRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBEb21haW5FdmVudCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5U3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zdHJ1Y3R1cmUucXVlcnktc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvaW5pdC9zdHJ1Y3R1cmUtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9sb2FkaW5nL3NldC1zb3VyY2UtbG9hZGluZy5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zZXQvc2NoZW1hLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVG9wSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbHVtbi1oZWFkZXIvdG9wL3NjaGVtYS10b3AtaGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQm90dG9tSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2NvbHVtbi1oZWFkZXIvYm90dG9tL3NjaGVtYS1ib3R0b20taGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9jb2xvcmluZy9zZXQvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEZvcm1hdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3NldC9mb3JtYXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IE9yaWdpblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZVJlcG9zaXRvcnkgZXh0ZW5kcyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4+KDEpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5U3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRcdFNldFNvdXJjZUxvYWRpbmdFdmVudCxcblx0XHRcdFx0U2NoZW1hU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50LFxuXHRcdFx0XHRTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRcdFNjaGVtYUJvdHRvbUhlYWRlckNoYW5nZWRFdmVudCxcblx0XHRcdFx0Um93Q29sb3JpbmdTZXRFdmVudCxcblx0XHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdE5leHRQYWdlRXZlbnQsXG5cdFx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0XHRGb3JtYXRpb25TZXRFdmVudCxcblx0XHRcdFx0U2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQsXG5cdFx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0XHRTb3J0VG9nZ2xlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmFnZ3JlZ2F0ZUlkO1xuXG5cdFx0XHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVRdWVyeVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpLFxuXHRcdFx0XHRcdGtleSA9IHN0cnVjdHVyZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLnNldChrZXksIHN0cnVjdHVyZSk7XG5cblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmUkLm5leHQodGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c2VsZWN0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlOiBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmU+KSA9PiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmdldChhZ2dyZWdhdGVJZC5nZXRJZCgpKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==