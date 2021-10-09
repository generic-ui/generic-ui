/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDispatcher } from './paging.dispatcher';
import { Injectable } from '@angular/core';
import { PagingCommandInvoker } from '../api/paging.command-invoker';
export class PagingDomainCommandInvoker extends PagingCommandInvoker {
    /**
     * @param {?} pagingDispatcher
     */
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    enable(structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    disable(structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    /**
     * @param {?} paging
     * @param {?} structureId
     * @return {?}
     */
    setPaging(paging, structureId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    /**
     * @param {?} pageSize
     * @param {?} structureId
     * @return {?}
     */
    changePageSize(pageSize, structureId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    nextPage(structureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    prevPage(structureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @param {?} structureId
     * @return {?}
     */
    goToPage(pageNumber, currentPage, structureId) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage(structureId);
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage(structureId);
                currentPage -= 1;
            }
        }
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    changePagerTop(enabled, structureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    changePagerBottom(enabled, structureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDomainCommandInvoker.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDomainCommandInvoker.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHckUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjs7OztJQUVuRSxZQUE2QixnQkFBa0M7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFEb0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUUvRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0IsRUFBRSxXQUFtQixFQUFFLFdBQXdCO1FBRXpFLElBQUksV0FBVyxHQUFHLFVBQVUsRUFBRTtZQUM3QixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDthQUFNO1lBQ04sT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFwREQsVUFBVTs7OztZQU5GLGdCQUFnQjs7Ozs7OztJQVNaLHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBQYWdpbmdDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IHRydWUgfSk7XG5cdH1cblxuXHRkaXNhYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogZmFsc2UgfSk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHBhZ2luZyk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuY2hhbmdlUGFnZVNpemUoc3RydWN0dXJlSWQsIHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgKz0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSAtPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVBhZ2VyVG9wKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJUb3A6IGVuYWJsZWQgfSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0pO1xuXHR9XG59XG4iXX0=