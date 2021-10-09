/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PagingDispatcher } from './paging.dispatcher';
import { Injectable } from '@angular/core';
import { PagingCommandInvoker } from '../api/paging.command-invoker';
var PagingDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(PagingDomainCommandInvoker, _super);
    function PagingDomainCommandInvoker(pagingDispatcher) {
        var _this = _super.call(this) || this;
        _this.pagingDispatcher = pagingDispatcher;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.enable = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.disable = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    };
    /**
     * @param {?} paging
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.setPaging = /**
     * @param {?} paging
     * @param {?} structureId
     * @return {?}
     */
    function (paging, structureId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    };
    /**
     * @param {?} pageSize
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.changePageSize = /**
     * @param {?} pageSize
     * @param {?} structureId
     * @return {?}
     */
    function (pageSize, structureId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.nextPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.pagingDispatcher.nextPage(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.prevPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.pagingDispatcher.prevPage(structureId);
    };
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.goToPage = /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @param {?} structureId
     * @return {?}
     */
    function (pageNumber, currentPage, structureId) {
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
    };
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.changePagerTop = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    };
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    PagingDomainCommandInvoker.prototype.changePagerBottom = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    };
    PagingDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingDomainCommandInvoker.ctorParameters = function () { return [
        { type: PagingDispatcher }
    ]; };
    return PagingDomainCommandInvoker;
}(PagingCommandInvoker));
export { PagingDomainCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDomainCommandInvoker.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXJFO0lBQ2dELHNEQUFvQjtJQUVuRSxvQ0FBNkIsZ0JBQWtDO1FBQS9ELFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOztJQUUvRCxDQUFDOzs7OztJQUVELDJDQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsNENBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsOENBQVM7Ozs7O0lBQVQsVUFBVSxNQUFvQixFQUFFLFdBQXdCO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELG1EQUFjOzs7OztJQUFkLFVBQWUsUUFBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELDZDQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsNkNBQVE7Ozs7SUFBUixVQUFTLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELDZDQUFROzs7Ozs7SUFBUixVQUFTLFVBQWtCLEVBQUUsV0FBbUIsRUFBRSxXQUF3QjtRQUV6RSxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsbURBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLFdBQXdCO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBRUQsc0RBQWlCOzs7OztJQUFqQixVQUFrQixPQUFnQixFQUFFLFdBQXdCO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Z0JBcERELFVBQVU7Ozs7Z0JBTkYsZ0JBQWdCOztJQTJEekIsaUNBQUM7Q0FBQSxBQXJERCxDQUNnRCxvQkFBb0IsR0FvRG5FO1NBcERZLDBCQUEwQjs7Ozs7O0lBRTFCLHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBQYWdpbmdDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IHRydWUgfSk7XG5cdH1cblxuXHRkaXNhYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogZmFsc2UgfSk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHBhZ2luZyk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuY2hhbmdlUGFnZVNpemUoc3RydWN0dXJlSWQsIHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgKz0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSAtPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVBhZ2VyVG9wKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJUb3A6IGVuYWJsZWQgfSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0pO1xuXHR9XG59XG4iXX0=