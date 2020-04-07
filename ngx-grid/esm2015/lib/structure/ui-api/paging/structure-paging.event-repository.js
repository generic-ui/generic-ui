/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructurePagingReadModelWarehouse } from './structure-paging.read-model-warehouse';
import { NextPageEvent } from '../../domain/paging/next-page/next-page.event';
import { PrevPageEvent } from '../../domain/paging/prev-page/prev-page.event';
import { PageChangedEvent } from '../../domain/paging/page/page-changed.event';
import { PagesizeChangedEvent } from '../../domain/paging/change-pagesize/pagesize-changed.event';
export class StructurePagingEventRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} pagingReadModelService
     */
    constructor(domainEventBus, pagingReadModelService) {
        this.domainEventBus = domainEventBus;
        this.pagingReadModelService = pagingReadModelService;
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
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
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
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.pagingReadModelService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            (paging) => paging.getPageSize())), take(1));
        })));
    }
}
StructurePagingEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePagingEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: StructurePagingReadModelWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingEventRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    StructurePagingEventRepository.prototype.pagingReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUlsRyxNQUFNLE9BQU8sOEJBQThCOzs7OztJQUUxQyxZQUE2QixjQUE4QixFQUN2QyxzQkFBeUQ7UUFEaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBbUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsV0FBd0I7UUFFcEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUM1RixTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFFaEMsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxXQUF3QjtRQUV4QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxvQkFBb0IsQ0FDcEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUM1RixTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFFaEMsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBL0NELFVBQVU7Ozs7WUFYVyxjQUFjO1lBRTNCLGlDQUFpQzs7Ozs7OztJQVk3Qix3REFBK0M7Ozs7O0lBQ3hELGdFQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1JlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLXBhZ2luZy5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1JlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVBhZ2luZ1JlYWRNb2RlbFdhcmVob3VzZSkge1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBOZXh0UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdFx0ICAgUGFnZUNoYW5nZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFBhZ2VzaXplQ2hhbmdlZEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25QYWdpbmcoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgocGFnaW5nOiBQYWdpbmcpID0+IHBhZ2luZy5nZXRQYWdlU2l6ZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=