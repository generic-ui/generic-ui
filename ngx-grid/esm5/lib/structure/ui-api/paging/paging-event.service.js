/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingReadModelService } from './paging-read-model.service';
import { NextPageEvent } from '../../domain/paging/command/next-page/next-page.event';
import { PrevPageEvent } from '../../domain/paging/command/prev-page/prev-page.event';
import { PageChangedEvent } from '../../domain/paging/command/page/page-changed.event';
import { PagesizeChangedEvent } from '../../domain/paging/command/change-pagesize/pagesize-changed.event';
var PagingEventService = /** @class */ (function () {
    function PagingEventService(domainEventBus, pagingQueryService) {
        this.domainEventBus = domainEventBus;
        this.pagingQueryService = pagingQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventService.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingQueryService
                .onPaging(structureId)
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
    PagingEventService.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingQueryService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    PagingEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingEventService.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingReadModelService }
    ]; };
    return PagingEventService;
}());
export { PagingEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.pagingQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3BhZ2luZy9wYWdpbmctZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFHMUc7SUFHQyw0QkFBNkIsY0FBOEIsRUFDdkMsa0JBQTBDO1FBRGpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO0lBQzlELENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLFdBQXdCO1FBQXJDLGlCQW9CQztRQWxCQSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGdCQUFnQixDQUNoQjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXZELENBQXVELEVBQUMsRUFDdkYsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFFNUIsT0FBTyxLQUFJLENBQUMsa0JBQWtCO2lCQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFoQixDQUFnQixFQUFDLEVBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQXdCO1FBQXpDLGlCQWtCQztRQWhCQSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxvQkFBb0IsQ0FDcEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF2RCxDQUF1RCxFQUFDLEVBQ3ZGLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTVCLE9BQU8sS0FBSSxDQUFDLGtCQUFrQjtpQkFDM0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnQkEvQ0QsVUFBVTs7OztnQkFYVyxjQUFjO2dCQUUzQixzQkFBc0I7O0lBMEQvQix5QkFBQztDQUFBLEFBakRELElBaURDO1NBaERZLGtCQUFrQjs7Ozs7O0lBRWxCLDRDQUErQzs7Ozs7SUFDeEQsZ0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4vcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9uZXh0LXBhZ2UvbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFByZXZQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdFdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1F1ZXJ5U2VydmljZTogUGFnaW5nUmVhZE1vZGVsU2VydmljZSkge1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFBhZ2VzaXplQ2hhbmdlZEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1F1ZXJ5U2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlU2l6ZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=