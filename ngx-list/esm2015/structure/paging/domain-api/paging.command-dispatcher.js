/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../domain/paging.dispatcher';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
export class PagingCommandDispatcher {
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
    enable(structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disable(structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    setPaging(paging, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    changePageSize(pageSize, structureId = structureGlobalId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    nextPage(structureId = structureGlobalId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    prevPage(structureId = structureGlobalId) {
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
    changePagerTop(enabled, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changePagerBottom(enabled, structureId = structureGlobalId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandDispatcher.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandDispatcher.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFLMUYsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLFdBQW1CO1FBRS9DLElBQUksV0FBVyxHQUFHLFVBQVUsRUFBRTtZQUM3QixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO2FBQU07WUFDTixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFuREQsVUFBVTs7OztZQU5GLGdCQUFnQjs7Ozs7OztJQVNaLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogdHJ1ZSB9KTtcblx0fVxuXG5cdGRpc2FibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IGZhbHNlIH0pO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHBhZ2luZyk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5jaGFuZ2VQYWdlU2l6ZShzdHJ1Y3R1cmVJZCwgcGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSB7XG5cblx0XHRpZiAoY3VycmVudFBhZ2UgPCBwYWdlTnVtYmVyKSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5uZXh0UGFnZSgpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSArPSAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5wcmV2UGFnZSgpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSAtPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVBhZ2VyVG9wKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBwYWdlclRvcDogZW5hYmxlZCB9KTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VyQm90dG9tKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBwYWdlckJvdHRvbTogZW5hYmxlZCB9KTtcblx0fVxufVxuIl19