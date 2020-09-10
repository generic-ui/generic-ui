/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../../source/domain/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../../paging/domain/set/paging-set.event';
import { PrevPageEvent } from '../../../../paging/domain/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../paging/domain/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../paging/domain/change-pagesize/pagesize-changed.event';
import { SelectionEnabledSetEvent } from '../../../../source/domain/formation/set-enabled/selection-enabled-set.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../domain/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../sorting/domain/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../source/domain/origin/set-origin/origin-set.event';
import { FilterToggledEvent } from '../../../../filter/domain/toggle/filter-toggled.event';
import { SearchPhraseSetDomainEvent } from '../../../../search/domain/set-phrase/search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../sorting/domain/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../domain/vertical-formation/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../domain/vertical-formation/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
import { FilterAddedEvent } from '../../../../filter/domain/core/add/filter-added.event';
import { ActiveFiltersSetEvent } from '../../../../filter/domain/core/active-filters-set.event';
import { UniqueFilterSelectedEvent } from '../../../../filter/domain/unique/select/unique-filter-selected.event';
import { AllUniqueFilterSelectedEvent } from '../../../../filter/domain/unique/select-all/all-unique-filter-selected.event';
import { UniqueFilterUnselectedEvent } from '../../../../filter/domain/unique/unselect/unique-filter-unselected.event';
import { AllUniqueFilterUnselectedEvent } from '../../../../filter/domain/unique/unselect-all/all-unique-filter-unselected.event';
export class InMemoryStructureRepository extends StructureReadModelRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getStructure(aggregateId) {
        return this.structureIdToStructure.get(aggregateId.getId());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    onStructure(aggregateId) {
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
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            StructureCreatedEvent,
            SetSourceLoadingEvent,
            PagingSetEvent,
            PrevPageEvent,
            NextPageEvent,
            PagesizeChangedEvent,
            SelectionEnabledSetEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            FilterToggledEvent,
            SearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent,
            FilterAddedEvent,
            ActiveFiltersSetEvent,
            UniqueFilterSelectedEvent,
            AllUniqueFilterSelectedEvent,
            UniqueFilterUnselectedEvent,
            AllUniqueFilterUnselectedEvent
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subs(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structureReadModelRoot
         * @return {?}
         */
        (structureReadModelRoot) => {
            /** @type {?} */
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
}
InMemoryStructureRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
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
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluLWFwaS9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDeEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDakksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDdEgsT0FB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Uzs7OztRQUFDLENBQUMsc0JBQThDLEVBQUUsRUFBRTs7a0JBRW5FLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQXpFRCxVQUFVOzs7O1lBL0J3QixjQUFjO1lBSXhDLDBCQUEwQjs7Ozs7OztJQThCbEMsNkRBQW9GOzs7OztJQUVwRixpREFBd0Y7Ozs7O0lBR3JGLGlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9sb2FkaW5nL3NldC1zb3VyY2UtbG9hZGluZy5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4vc2V0L3BhZ2luZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY3JvbGxQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc29ydGluZy9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvZG9tYWluL3RvZ2dsZS9maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3J0aW5nL2RvbWFpbi9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9kb21haW4vY29yZS9hZGQvZmlsdGVyLWFkZGVkLmV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9kb21haW4vY29yZS9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9kb21haW4vdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvZG9tYWluL3VuaXF1ZS9zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWRUb1N0cnVjdHVyZSA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0Z2V0U3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGFnZ3JlZ2F0ZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0U2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCBhcyBhbnksXG5cdFx0XHRGaWx0ZXJUb2dnbGVkRXZlbnQsXG5cdFx0XHRTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50IGFzIGFueSxcblx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCxcblx0XHRcdEZpbHRlckFkZGVkRXZlbnQsXG5cdFx0XHRBY3RpdmVGaWx0ZXJzU2V0RXZlbnQsXG5cdFx0XHRVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0QWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCxcblx0XHRcdFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCxcblx0XHRcdEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudFxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3VicyhldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLnNldChrZXksIHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZSQubmV4dCh0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==