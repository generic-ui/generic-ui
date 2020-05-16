/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../domain/paging.dispatcher';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
var PagingCommandDispatcher = /** @class */ (function () {
    function PagingCommandDispatcher(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.enable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.disable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    };
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.setPaging = /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    function (paging, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, paging);
    };
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.changePageSize = /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    function (pageSize, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.nextPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.nextPage(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.prevPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.prevPage(structureId);
    };
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    PagingCommandDispatcher.prototype.goToPage = /**
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
    PagingCommandDispatcher.prototype.changePagerTop = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandDispatcher.prototype.changePagerBottom = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    };
    PagingCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingCommandDispatcher.ctorParameters = function () { return [
        { type: PagingDispatcher }
    ]; };
    return PagingCommandDispatcher;
}());
export { PagingCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandDispatcher.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFJMUY7SUFHQyxpQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHlDQUFPOzs7O0lBQVAsVUFBUSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELDJDQUFTOzs7OztJQUFULFVBQVUsTUFBb0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMzRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFRCxnREFBYzs7Ozs7SUFBZCxVQUFlLFFBQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCwwQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELDBDQUFROzs7OztJQUFSLFVBQVMsVUFBa0IsRUFBRSxXQUFtQjtRQUUvQyxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDthQUFNO1lBQ04sT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDtJQUNGLENBQUM7Ozs7OztJQUVELGdEQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELG1EQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQW5ERCxVQUFVOzs7O2dCQU5GLGdCQUFnQjs7SUEwRHpCLDhCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFksdUJBQXVCOzs7Ozs7SUFFdkIsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0ZW5hYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiB0cnVlIH0pO1xuXHR9XG5cblx0ZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogZmFsc2UgfSk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgcGFnaW5nKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLmNoYW5nZVBhZ2VTaXplKHN0cnVjdHVyZUlkLCBwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlICs9IDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLnByZXZQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlIC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlUGFnZXJUb3AoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyVG9wOiBlbmFibGVkIH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0pO1xuXHR9XG59XG4iXX0=