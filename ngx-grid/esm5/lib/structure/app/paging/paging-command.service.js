/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../../domain/paging/command/paging.dispatcher';
import { globalStructureId } from '../../domain/global-structure-id';
var PagingCommandService = /** @class */ (function () {
    function PagingCommandService(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.enable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.disable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    };
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.setPaging = /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    function (paging, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, paging);
    };
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePageSize = /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    function (pageSize, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.nextPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.nextPage(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.prevPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.prevPage(structureId);
    };
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    PagingCommandService.prototype.goToPage = /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    function (pageNumber, currentPage) {
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
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePagerTop = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePagerBottom = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    };
    PagingCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingCommandService.ctorParameters = function () { return [
        { type: PagingDispatcher }
    ]; };
    return PagingCommandService;
}());
export { PagingCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandService.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJckU7SUFJQyw4QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELHdDQUFTOzs7OztJQUFULFVBQVUsTUFBb0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMzRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFRCw2Q0FBYzs7Ozs7SUFBZCxVQUFlLFFBQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCx1Q0FBUTs7OztJQUFSLFVBQVMsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELHVDQUFROzs7OztJQUFSLFVBQVMsVUFBa0IsRUFBRSxXQUFtQjtRQUUvQyxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDthQUFNO1lBQ04sT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDtJQUVGLENBQUM7Ozs7OztJQUVELDZDQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELGdEQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQXJERCxVQUFVOzs7O2dCQU5GLGdCQUFnQjs7SUE0RHpCLDJCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksb0JBQW9COzs7Ozs7SUFHcEIsZ0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIHtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0ZW5hYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiB0cnVlIH0pO1xuXHR9XG5cblx0ZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogZmFsc2UgfSk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgcGFnaW5nKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLmNoYW5nZVBhZ2VTaXplKHN0cnVjdHVyZUlkLCBwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlICs9IDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLnByZXZQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlIC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRjaGFuZ2VQYWdlclRvcChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJUb3A6IGVuYWJsZWQgfSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJCb3R0b206IGVuYWJsZWQgfSk7XG5cdH1cbn1cbiJdfQ==