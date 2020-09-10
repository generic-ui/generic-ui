/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
var PagingEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(PagingEventRepository, _super);
    function PagingEventRepository(eventBus, pagingReadModelService) {
        var _this = _super.call(this, eventBus) || this;
        _this.eventBus = eventBus;
        _this.pagingReadModelService = pagingReadModelService;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.eventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toAggregateId().toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPage(); })), take(1));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.onEvent(structureId, PagesizeChangedEvent)
            .pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    PagingEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingWarehouse }
    ]; };
    return PagingEventRepository;
}(EventRepository));
export { PagingEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.pagingReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJeEY7SUFDMkMsaURBQXNEO0lBRWhHLCtCQUE2QixRQUF3QixFQUNqQyxzQkFBdUM7UUFEM0QsWUFFQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUg0QixjQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUNqQyw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQWlCOztJQUUzRCxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxXQUFxQztRQUFsRCxpQkFvQkM7UUFsQkEsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLE9BQU8sQ0FDUCxtQkFBQSxhQUFhLEVBQU8sRUFDcEIsbUJBQUEsYUFBYSxFQUFPLEVBQ3BCLG1CQUFBLGdCQUFnQixFQUFPLENBQ3ZCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUE1RSxDQUE0RSxFQUFDLEVBQ3pILFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRXpDLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDckMsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQyxFQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixXQUFxQztRQUF0RCxpQkFjQztRQVpBLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7YUFDaEQsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRXpDLE9BQU8sS0FBSSxDQUFDLHNCQUFzQjtpQkFDL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDckMsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkE1Q0QsVUFBVTs7OztnQkFaVyxjQUFjO2dCQUUzQixlQUFlOztJQXdEeEIsNEJBQUM7Q0FBQSxBQTlDRCxDQUMyQyxlQUFlLEdBNkN6RDtTQTdDWSxxQkFBcUI7Ozs7OztJQUVyQix5Q0FBeUM7Ozs7O0lBQ2xELHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1JlYWRNb2RlbFNlcnZpY2U6IFBhZ2luZ1dhcmVob3VzZSkge1xuXHRcdHN1cGVyKGV2ZW50QnVzKTtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFByZXZQYWdlRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRcdCAgIE5leHRQYWdlRXZlbnQgYXMgYW55LFxuXHRcdFx0XHRcdCAgIFBhZ2VDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvQWdncmVnYXRlSWQoKS50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHN0cnVjdHVyZUlkLCBQYWdlc2l6ZUNoYW5nZWRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2VTaXplKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==