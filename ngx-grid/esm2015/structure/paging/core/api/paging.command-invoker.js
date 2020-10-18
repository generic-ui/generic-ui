/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../domain/paging.dispatcher';
import { structureGlobalId } from '../../../core/api/structure.global-id';
export class PagingCommandInvoker {
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
PagingCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandInvoker.ctorParameters = () => [
    { type: PagingDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandInvoker.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSzFFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsY0FBMkIsaUJBQWlCO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxRQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0IsRUFBRSxXQUFtQjtRQUUvQyxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDthQUFNO1lBQ04sT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDtJQUNGLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQy9FLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBbkRELFVBQVU7Ozs7WUFORixnQkFBZ0I7Ozs7Ozs7SUFTWixnREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRlbmFibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IHRydWUgfSk7XG5cdH1cblxuXHRkaXNhYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiBmYWxzZSB9KTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCBwYWdpbmcpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuY2hhbmdlUGFnZVNpemUoc3RydWN0dXJlSWQsIHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikge1xuXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgcGFnZU51bWJlcikge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMubmV4dFBhZ2UoKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgKz0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucHJldlBhZ2UoKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgLT0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlclRvcChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJUb3A6IGVuYWJsZWQgfSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJCb3R0b206IGVuYWJsZWQgfSk7XG5cdH1cbn1cbiJdfQ==