/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Paging = /** @class */ (function () {
    function Paging(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
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
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.isNextPageDisabled = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        if (sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(sourceSize / this.pageSize);
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.calculateStart = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.calculateEnd = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var lastItem = this.page * this.pageSize;
        if (sourceSize < lastItem) {
            return sourceSize;
        }
        return lastItem;
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
        var sourceSize = source.length;
        /** @type {?} */
        var start = this.calculateStart(sourceSize);
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd(sourceSize));
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBRUMsZ0JBQTZCLE9BQWdCLEVBQ3pCLElBQVksRUFDWixRQUFnQixFQUNoQixTQUF3QixFQUN4QixRQUFpQixFQUNqQixXQUFvQjtRQUxYLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBQ3hDLENBQUM7Ozs7SUFFRCwwQkFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHdCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNEJBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw2QkFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDJCQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOEJBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsbUNBQWtCOzs7O0lBQWxCLFVBQW1CLFVBQWtCO1FBQ3BDLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsbUNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsK0JBQWM7Ozs7SUFBZCxVQUFlLFVBQWtCOztZQUUxQixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFdkQsSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELDZCQUFZOzs7O0lBQVosVUFBYSxVQUFrQjs7WUFFeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFFMUMsSUFBSSxVQUFVLEdBQUcsUUFBUSxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVELHNDQUFxQjs7Ozs7O0lBQXJCLFVBQXNCLFdBQW1CLEVBQUUsb0JBQTRCLEVBQUUsSUFBWTtRQUNwRixPQUFPLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELHVCQUFNOzs7O0lBQU4sVUFBTyxNQUFrQjs7WUFFbEIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNOztZQUU1QixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFFM0MsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRixhQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQzs7Ozs7OztJQW5GWSx5QkFBaUM7Ozs7O0lBQzFDLHNCQUE2Qjs7Ozs7SUFDN0IsMEJBQWlDOzs7OztJQUNqQywyQkFBeUM7Ozs7O0lBQ3pDLDBCQUFrQzs7Ozs7SUFDbEMsNkJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2luZyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2U6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlckJvdHRvbTogYm9vbGVhbikge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoc291cmNlU2l6ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbChzb3VyY2VTaXplIC8gdGhpcy5wYWdlU2l6ZSk7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcblx0fVxuXG5cdGNhbGN1bGF0ZVN0YXJ0KHNvdXJjZVNpemU6IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBmaXJzdEl0ZW0gPSAxICsgKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuXG5cdFx0aWYgKHNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoc291cmNlU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmIChzb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiBzb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdHJldHVybiBsYXN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCBudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY3VycmVudFBhZ2UgLSBudW1iZXJPZlZpc2libGVQYWdlcyA8IHBhZ2UgJiYgcGFnZSA8IGN1cnJlbnRQYWdlICsgbnVtYmVyT2ZWaXNpYmxlUGFnZXM7XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRjb25zdCBzb3VyY2VTaXplID0gc291cmNlLmxlbmd0aDtcblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoc291cmNlU2l6ZSk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5jYWxjdWxhdGVFbmQoc291cmNlU2l6ZSkpO1xuXHR9XG5cbn1cbiJdfQ==