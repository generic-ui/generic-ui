/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../../domain/paging/command/paging.dispatcher';
import { globalStructureId } from '../../domain/global-structure-id';
export class PagingCommandService {
    /**
     * @param {?} pagingDispatcher
     */
    constructor(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enable(structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disable(structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    setPaging(paging, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    changePageSize(pageSize, structureId = globalStructureId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    nextPage(structureId = globalStructureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    prevPage(structureId = globalStructureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    goToPage(pageNumber, currentPage) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage();
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage();
                currentPage -= 1;
            }
        }
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerTop(enabled, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerBottom(enabled, structureId = globalStructureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandService.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandService.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLckUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUdoQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLFdBQW1CO1FBRS9DLElBQUksV0FBVyxHQUFHLFVBQVUsRUFBRTtZQUM3QixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO2FBQU07WUFDTixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO0lBRUYsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFyREQsVUFBVTs7OztZQU5GLGdCQUFnQjs7Ozs7OztJQVVaLGdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdDb21tYW5kU2VydmljZSB7XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogdHJ1ZSB9KTtcblx0fVxuXG5cdGRpc2FibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IGZhbHNlIH0pO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHBhZ2luZyk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5jaGFuZ2VQYWdlU2l6ZShzdHJ1Y3R1cmVJZCwgcGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSB7XG5cblx0XHRpZiAoY3VycmVudFBhZ2UgPCBwYWdlTnVtYmVyKSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5uZXh0UGFnZSgpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSArPSAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5wcmV2UGFnZSgpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSAtPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Y2hhbmdlUGFnZXJUb3AoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyVG9wOiBlbmFibGVkIH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0pO1xuXHR9XG59XG4iXX0=