/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingQueryService } from './paging-query.service';
import { NextPageEvent } from '../../domain/paging/command/next-page/next-page.event';
import { PrevPageEvent } from '../../domain/paging/command/prev-page/prev-page.event';
import { PageChangedEvent } from '../../domain/paging/command/page/page-changed.event';
import { PagesizeChangedEvent } from '../../domain/paging/command/change-pagesize/pagesize-changed.event';
export class PagingEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} pagingQueryService
     */
    constructor(domainEventBus, pagingQueryService) {
        this.domainEventBus = domainEventBus;
        this.pagingQueryService = pagingQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectPageChange(structureId) {
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingQueryService
                .select(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPage())), take(1));
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectPageSizeChange(structureId) {
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingQueryService
                .select(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())), take(1));
        })));
    }
}
PagingEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: PagingQueryService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3BhZ2luZy9wYWdpbmctZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFJMUcsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFOUIsWUFBNkIsY0FBOEIsRUFDdkMsa0JBQXNDO1FBRDdCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzFELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBd0I7UUFFeEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDdkYsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBRWhDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjtpQkFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQztpQkFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7WUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDLEVBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsV0FBd0I7UUFFNUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1Asb0JBQW9CLENBQ3BCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQ3ZGLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0I7aUJBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUM7aUJBQ25CLElBQUksQ0FDSixHQUFHOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7WUEvQ0QsVUFBVTs7OztZQVhXLGNBQWM7WUFFM0Isa0JBQWtCOzs7Ozs7O0lBWWQsNENBQStDOzs7OztJQUN4RCxnREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdRdWVyeVNlcnZpY2UgfSBmcm9tICcuL3BhZ2luZy1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL25leHQtcGFnZS9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9xdWVyeS9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdFdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1F1ZXJ5U2VydmljZTogUGFnaW5nUXVlcnlTZXJ2aWNlKSB7XG5cdH1cblxuXHRzZWxlY3RQYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2UoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RQYWdlU2l6ZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgUGFnZXNpemVDaGFuZ2VkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlU2l6ZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=