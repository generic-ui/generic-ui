/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, hermesFilter, hermesMap, HermesReplaySubject } from '@generic-ui/hermes';
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
import { SearchPhraseSetDomainEvent } from '../../../../search/core/domain/phrase/set-phrase/search-phrase-set.domain-event';
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
        _this.hermesStructure$ = new HermesReplaySubject(1);
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.getStructure = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureIdToStructure.get(structureId.getId());
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.on = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.hermesStructure$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) {
            /** @type {?} */
            var key = structureId.getId();
            return structureIdToStructure.has(key);
        })), hermesMap((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) {
            return structureIdToStructure.get(structureId.getId());
        })));
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
            _this.hermesStructure$.next(_this.structureIdToStructure);
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
    InMemoryStructureRepository.prototype.hermesStructure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFlLGNBQWMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRTlHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzVILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBGQUEwRixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBQzlILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxt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LEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFckQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUU3RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBM0VELFVBQVU7Ozs7Z0JBL0JXLGNBQWM7Z0JBSTNCLDBCQUEwQjs7SUF3R25DLGtDQUFDO0NBQUEsQUE3RUQsQ0FDaUQsNEJBQTRCLEdBNEU1RTtTQTVFWSwyQkFBMkI7Ozs7OztJQUV2Qyw2REFBb0Y7Ozs7O0lBRXBGLHVEQUFvRzs7Ozs7SUFHakcsaUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2V0U291cmNlTG9hZGluZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2xvYWRpbmcvc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3NldC9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3Njcm9sbC1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU29ydFRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IEZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi90b2dnbGUvZmlsdGVyLXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC9yb3ctaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWRUb1N0cnVjdHVyZSA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzU3RydWN0dXJlJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0Z2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpO1xuXHR9XG5cblx0b24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5oZXJtZXNTdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IHN0cnVjdHVyZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0U2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQsXG5cdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCBhcyBhbnksXG5cdFx0XHRGaWx0ZXJUb2dnbGVkRXZlbnQsXG5cdFx0XHRTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50IGFzIGFueSxcblx0XHRcdE9yaWdpblNldEV2ZW50IGFzIGFueSxcblx0XHRcdFJvd0hlaWdodFNldEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQsXG5cdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCxcblx0XHRcdEZpbHRlckFkZGVkRXZlbnQsXG5cdFx0XHRBY3RpdmVGaWx0ZXJzU2V0RXZlbnQsXG5cdFx0XHRVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50LFxuXHRcdFx0QWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCxcblx0XHRcdFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCxcblx0XHRcdEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudFxuXHRcdF07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3VicyhldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLnNldChrZXksIHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpO1xuXG5cdFx0XHR0aGlzLmhlcm1lc1N0cnVjdHVyZSQubmV4dCh0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==