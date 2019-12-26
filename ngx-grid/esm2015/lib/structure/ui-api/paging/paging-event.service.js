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
    onPageChange(structureId) {
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
                .onPaging(structureId)
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
    onPageSizeChange(structureId) {
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
                .onPaging(structureId)
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
    { type: PagingReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3BhZ2luZy9wYWdpbmctZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFJMUcsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFOUIsWUFBNkIsY0FBOEIsRUFDdkMsa0JBQTBDO1FBRGpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO0lBQzlELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFdBQXdCO1FBRXBDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGFBQWEsRUFDYixhQUFhLEVBQ2IsZ0JBQWdCLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQ3ZGLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0I7aUJBQzNCLFFBQVEsQ0FBQyxXQUFXLENBQUM7aUJBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBQyxFQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFdBQXdCO1FBRXhDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG9CQUFvQixDQUNwQjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN2RixTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFFaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2lCQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBL0NELFVBQVU7Ozs7WUFYVyxjQUFjO1lBRTNCLHNCQUFzQjs7Ozs7OztJQVlsQiw0Q0FBK0M7Ozs7O0lBQ3hELGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL3BhZ2luZy1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdRdWVyeVNlcnZpY2U6IFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UpIHtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgTmV4dFBhZ2VFdmVudCxcblx0XHRcdFx0XHQgICBQcmV2UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFBhZ2VDaGFuZ2VkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBhZ2luZyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2UoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBQYWdlc2l6ZUNoYW5nZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZVNpemUoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19