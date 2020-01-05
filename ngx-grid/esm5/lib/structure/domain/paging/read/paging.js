/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Paging = /** @class */ (function () {
    function Paging(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, isNextDisabled, isPrevDisabled, start, end, sourceSize) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.isNextDisabled = isNextDisabled;
        this.isPrevDisabled = isPrevDisabled;
        this.start = start;
        this.end = end;
        this.sourceSize = sourceSize;
    }
    /**
     * @return {?}
     */
    Paging.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return this.page;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPageSize = /**
     * @return {?}
     */
    function () {
        return this.pageSize;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPageSizes = /**
     * @return {?}
     */
    function () {
        return this.pageSizes;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPagerTop = /**
     * @return {?}
     */
    function () {
        return this.pagerTop;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPagerBottom = /**
     * @return {?}
     */
    function () {
        return this.pagerBottom;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isNextPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.isNextDisabled;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.isPrevDisabled;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getStart = /**
     * @return {?}
     */
    function () {
        return this.start;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getEnd = /**
     * @return {?}
     */
    function () {
        return this.end;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getSourceSize = /**
     * @return {?}
     */
    function () {
        return this.sourceSize;
    };
    /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    Paging.prototype.calculateVisiblePages = /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    function (currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    Paging.prototype.sample = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var start = this.getStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.getEnd());
    };
    return Paging;
}());
export { Paging };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.page;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerBottom;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.isNextDisabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.isPrevDisabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.start;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.end;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBRUMsZ0JBQTZCLE9BQWdCLEVBQ3pCLElBQVksRUFDWixRQUFnQixFQUNoQixTQUF3QixFQUN4QixRQUFpQixFQUNqQixXQUFvQixFQUNwQixjQUF1QixFQUN2QixjQUF1QixFQUN2QixLQUFhLEVBQ2IsR0FBVyxFQUNYLFVBQWtCO1FBVlQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQVM7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQVM7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ3RDLENBQUM7Ozs7SUFFRCwwQkFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHdCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNEJBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw2QkFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDJCQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOEJBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxtQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbUNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDM0IsQ0FBQzs7OztJQUVELHlCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsdUJBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCw4QkFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELHNDQUFxQjs7Ozs7O0lBQXJCLFVBQXNCLFdBQW1CLEVBQUUsb0JBQTRCLEVBQUUsSUFBWTtRQUNwRixPQUFPLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELHVCQUFNOzs7O0lBQU4sVUFBTyxNQUFrQjs7WUFFcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFFM0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVGLGFBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDOzs7Ozs7O0lBeEVZLHlCQUFpQzs7Ozs7SUFDMUMsc0JBQTZCOzs7OztJQUM3QiwwQkFBaUM7Ozs7O0lBQ2pDLDJCQUF5Qzs7Ozs7SUFDekMsMEJBQWtDOzs7OztJQUNsQyw2QkFBcUM7Ozs7O0lBQ3JDLGdDQUF3Qzs7Ozs7SUFDeEMsZ0NBQXdDOzs7OztJQUN4Qyx1QkFBOEI7Ozs7O0lBQzlCLHFCQUE0Qjs7Ozs7SUFDNUIsNEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2luZyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2U6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlckJvdHRvbTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpc05leHREaXNhYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpc1ByZXZEaXNhYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGFydDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuZDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVNpemU6IG51bWJlcikge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNOZXh0RGlzYWJsZWQ7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNQcmV2RGlzYWJsZWRcblx0fVxuXG5cdGdldFN0YXJ0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQ7XG5cdH1cblxuXHRnZXRFbmQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5lbmQ7XG5cdH1cblxuXHRnZXRTb3VyY2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCBudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY3VycmVudFBhZ2UgLSBudW1iZXJPZlZpc2libGVQYWdlcyA8IHBhZ2UgJiYgcGFnZSA8IGN1cnJlbnRQYWdlICsgbnVtYmVyT2ZWaXNpYmxlUGFnZXM7XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRsZXQgc3RhcnQgPSB0aGlzLmdldFN0YXJ0KCk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5nZXRFbmQoKSk7XG5cdH1cblxufVxuIl19