/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/structure/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../domain/source/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../domain/paging/set/paging-set.event';
import { PrevPageEvent } from '../../../domain/paging/prev-page/prev-page.event';
import { NextPageEvent } from '../../../domain/paging/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../domain/paging/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../domain/formation/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../domain/formation/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../domain/structure/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../domain/structure/sort/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../domain/structure/filter/toggle/structure.filter-toggled.event';
import { StructureSearchPhraseSetDomainEvent } from '../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../domain/structure/sort/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
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
            FormationSetEvent,
            SelectedRowToggledEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            StructureFilterToggledEvent,
            StructureSearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNEZBQTRGLENBQUM7QUFDM0ksT0FBTyxFQUFF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QUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2xvYWRpbmcvc2V0LXNvdXJjZS1sb2FkaW5nLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEZvcm1hdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZXQvZm9ybWF0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vdG9nZ2xlL3NlbGVjdGVkLXJvdy10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L3RvZ2dsZS9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS5maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC9vcmRlci9zb3J0LW9yZGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC10aGVtZS9yb3ctaGVpZ2h0LXNldC1iYXNlZC1vbi10aGVtZS5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWRUb1N0cnVjdHVyZSA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGFnZ3JlZ2F0ZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0Rm9ybWF0aW9uU2V0RXZlbnQsXG5cdFx0XHRTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCxcblx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0U2Nyb2xsUG9zaXRpb25TZXRFdmVudCxcblx0XHRcdFNvcnRUb2dnbGVkRXZlbnQgYXMgYW55LFxuXHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0U3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQsXG5cdFx0XHRTb3J0T3JkZXJTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRSb3dIZWlnaHRTZXRFdmVudCxcblx0XHRcdFN0cnVjdHVyZUhlaWdodFNldEV2ZW50LFxuXHRcdFx0Um93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnRcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnMoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRTdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLnNldChrZXksIHN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZSQubmV4dCh0aGlzLnN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==