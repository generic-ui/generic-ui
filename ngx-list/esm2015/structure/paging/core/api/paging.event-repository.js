/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
export class PagingEventRepository extends EventRepository {
    /**
     * @param {?} eventBus
     * @param {?} pagingReadModelService
     */
    constructor(eventBus, pagingReadModelService) {
        super(eventBus);
        this.eventBus = eventBus;
        this.pagingReadModelService = pagingReadModelService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPageChange(structureId) {
        return this.eventBus
            .ofEvent((/** @type {?} */ (PrevPageEvent)), (/** @type {?} */ (NextPageEvent)), (/** @type {?} */ (PageChangedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toAggregateId().toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
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
        return this.onEvent(structureId, PagesizeChangedEvent)
            .pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
                .onPaging(structureId.toAggregateId())
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())), take(1));
        })));
    }
}
PagingEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: PagingWarehouse }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFLeEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQXNEOzs7OztJQUVoRyxZQUE2QixRQUF3QixFQUNqQyxzQkFBdUM7UUFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRlksYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDakMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjtJQUUzRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxXQUFxQztRQUVqRCxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsT0FBTyxDQUNQLG1CQUFBLGFBQWEsRUFBTyxFQUNwQixtQkFBQSxhQUFhLEVBQU8sRUFDcEIsbUJBQUEsZ0JBQWdCLEVBQU8sQ0FDdkI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN6SCxTQUFTOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFFN0MsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUNyQyxJQUFJLENBQ0osR0FBRzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxXQUFxQztRQUVyRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDO2FBQ2hELElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFFN0MsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUNyQyxJQUFJLENBQ0osR0FBRzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFaVyxjQUFjO1lBRTNCLGVBQWU7Ozs7Ozs7SUFhWCx5Q0FBeUM7Ozs7O0lBQ2xELHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdSZWFkTW9kZWxTZXJ2aWNlOiBQYWdpbmdXYXJlaG91c2UpIHtcblx0XHRzdXBlcihldmVudEJ1cyk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBQcmV2UGFnZUV2ZW50IGFzIGFueSxcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50IGFzIGFueSxcblx0XHRcdFx0XHQgICBQYWdlQ2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b0FnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2UoKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGFrZSgxKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzdHJ1Y3R1cmVJZCwgUGFnZXNpemVDaGFuZ2VkRXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBhZ2luZyhzdHJ1Y3R1cmVJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlU2l6ZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=