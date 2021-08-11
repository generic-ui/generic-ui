/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../../grid/core/api/read/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../../source/core/domain/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../../paging/core/domain/set/paging-set.event';
import { PrevPageEvent } from '../../../../paging/core/domain/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../paging/core/domain/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../paging/core/domain/change-pagesize/pagesize-changed.event';
import { SelectionEnabledSetEvent } from '../../../../source/core/domain/formation/set-enabled/selection-enabled-set.event';
import { VerticalScrollEnabledSetEvent } from '../../../../vertical-formation/core/domain/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../../vertical-formation/core/domain/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../sorting/core/domain/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../source/core/domain/origin/set-origin/origin-set.event';
import { FilterToggledEvent } from '../../../../filter/core/domain/toggle/filter-toggled.event';
import { SearchPhraseSetDomainEvent } from '../../../../search/core/domain/set-phrase/search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../sorting/core/domain/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../../vertical-formation/core/domain/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../../vertical-formation/core/domain/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../../vertical-formation/core/domain/set-row-height-theme/row-height-set-based-on-theme.event';
import { FilterAddedEvent } from '../../../../filter/core/domain/core/add/filter-added.event';
import { ActiveFiltersSetEvent } from '../../../../filter/core/domain/core/active-filters-set.event';
import { UniqueFilterSelectedEvent } from '../../../../filter/core/domain/unique/select/unique-filter-selected.event';
import { AllUniqueFilterSelectedEvent } from '../../../../filter/core/domain/unique/select-all/all-unique-filter-selected.event';
import { UniqueFilterUnselectedEvent } from '../../../../filter/core/domain/unique/unselect/unique-filter-unselected.event';
import { AllUniqueFilterUnselectedEvent } from '../../../../filter/core/domain/unique/unselect-all/all-unique-filter-unselected.event';
var InMemoryStructureRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureRepository, _super);
    function InMemoryStructureRepository(domainEventBus, inMemoryStructureReadStore) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        _this.structureIdToStructure = new Map();
        _this.structure$ = new ReplaySubject(1);
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.getStructure = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.structureIdToStructure.get(aggregateId.getId());
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.onStructure = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) {
            /** @type {?} */
            var key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) { return structureIdToStructure.get(aggregateId.getId()); })));
    };
    /**
     * @protected
     * @return {?}
     */
    InMemoryStructureRepository.prototype.forEvents = /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    InMemoryStructureRepository.prototype.subs = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var aggregateId = event.getAggregateId();
        /** @type {?} */
        var optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structureReadModelRoot
         * @return {?}
         */
        function (structureReadModelRoot) {
            /** @type {?} */
            var key = structureReadModelRoot.getId().toString();
            _this.structureIdToStructure.set(key, structureReadModelRoot);
            _this.structure$.next(_this.structureIdToStructure);
        }));
    };
    InMemoryStructureRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryStructureReadStore }
    ]; };
    return InMemoryStructureRepository;
}(StructureReadModelRepository));
export { InMemoryStructureRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFOUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDNUgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDekksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDOUgsT0FBTyxFQUFF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Q0FBQztRQUV6RSxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsc0JBQThDOztnQkFFL0QsR0FBRyxHQUFHLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUVyRCxLQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBRTdELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBekVELFVBQVU7Ozs7Z0JBL0J3QixjQUFjO2dCQUl4QywwQkFBMEI7O0lBc0duQyxrQ0FBQztDQUFBLEFBM0VELENBQ2lELDRCQUE0QixHQTBFNUU7U0ExRVksMkJBQTJCOzs7Ozs7SUFFdkMsNkRBQW9GOzs7OztJQUVwRixpREFBd0Y7Ozs7O0lBR3JGLGlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2xvYWRpbmcvc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IEZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi90b2dnbGUvZmlsdGVyLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vc2V0LXBocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3Jvdy1oZWlnaHQtc2V0LWJhc2VkLW9uLXRoZW1lLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJBZGRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vY29yZS9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0L3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBBbGxVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmUkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRnZXRTdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5nZXQoYWdncmVnYXRlSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRvblN0cnVjdHVyZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuaGFzKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlOiBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PikgPT4gc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5nZXQoYWdncmVnYXRlSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQsXG5cdFx0XHRTZXRTb3VyY2VMb2FkaW5nRXZlbnQsXG5cdFx0XHRQYWdpbmdTZXRFdmVudCxcblx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHROZXh0UGFnZUV2ZW50LFxuXHRcdFx0UGFnZXNpemVDaGFuZ2VkRXZlbnQsXG5cdFx0XHRTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCxcblx0XHRcdFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQsXG5cdFx0XHRTb3J0VG9nZ2xlZEV2ZW50IGFzIGFueSxcblx0XHRcdEZpbHRlclRvZ2dsZWRFdmVudCxcblx0XHRcdFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50LFxuXHRcdFx0U29ydE9yZGVyU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0T3JpZ2luU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCxcblx0XHRcdFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50LFxuXHRcdFx0RmlsdGVyQWRkZWRFdmVudCxcblx0XHRcdEFjdGl2ZUZpbHRlcnNTZXRFdmVudCxcblx0XHRcdFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQsXG5cdFx0XHRBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0VW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50LFxuXHRcdFx0QWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdWJzKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRTdHJ1Y3R1cmUuaWZQcmVzZW50KChzdHJ1Y3R1cmVSZWFkTW9kZWxSb290OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuc2V0KGtleSwgc3RydWN0dXJlUmVhZE1vZGVsUm9vdCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlJC5uZXh0KHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19