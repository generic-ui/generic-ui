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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUVDLGdCQUE2QixPQUFnQixFQUN6QixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0I7UUFMWCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUN4QyxDQUFDOzs7O0lBRUQsMEJBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx3QkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDRCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsNkJBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwyQkFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhCQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELG1DQUFrQjs7OztJQUFsQixVQUFtQixVQUFrQjtRQUNwQyxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELG1DQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELCtCQUFjOzs7O0lBQWQsVUFBZSxVQUFrQjs7WUFFMUIsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXZELElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQztTQUNUO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCw2QkFBWTs7OztJQUFaLFVBQWEsVUFBa0I7O1lBRXhCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBRTFDLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtZQUMxQixPQUFPLFVBQVUsQ0FBQztTQUNsQjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFRCxzQ0FBcUI7Ozs7OztJQUFyQixVQUFzQixXQUFtQixFQUFFLG9CQUE0QixFQUFFLElBQVk7UUFDcEYsT0FBTyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCx1QkFBTTs7OztJQUFOLFVBQU8sTUFBa0I7O1lBRWxCLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTTs7WUFFNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBRTNDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUYsYUFBQztBQUFELENBQUMsQUFyRkQsSUFxRkM7Ozs7Ozs7SUFuRlkseUJBQWlDOzs7OztJQUMxQyxzQkFBNkI7Ozs7O0lBQzdCLDBCQUFpQzs7Ozs7SUFDakMsMkJBQXlDOzs7OztJQUN6QywwQkFBa0M7Ozs7O0lBQ2xDLDZCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdpbmcge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJCb3R0b206IGJvb2xlYW4pIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKHNvdXJjZVNpemU6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGlmIChzb3VyY2VTaXplID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSBNYXRoLmNlaWwoc291cmNlU2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG5cdH1cblxuXHRjYWxjdWxhdGVTdGFydChzb3VyY2VTaXplOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgZmlyc3RJdGVtID0gMSArICgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmIChzb3VyY2VTaXplIDwgZmlyc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlyc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlRW5kKHNvdXJjZVNpemU6IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMucGFnZSAqIHRoaXMucGFnZVNpemU7XG5cblx0XHRpZiAoc291cmNlU2l6ZSA8IGxhc3RJdGVtKSB7XG5cdFx0XHRyZXR1cm4gc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgbnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciwgcGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGN1cnJlbnRQYWdlIC0gbnVtYmVyT2ZWaXNpYmxlUGFnZXMgPCBwYWdlICYmIHBhZ2UgPCBjdXJyZW50UGFnZSArIG51bWJlck9mVmlzaWJsZVBhZ2VzO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0Y29uc3Qgc291cmNlU2l6ZSA9IHNvdXJjZS5sZW5ndGg7XG5cblx0XHRsZXQgc3RhcnQgPSB0aGlzLmNhbGN1bGF0ZVN0YXJ0KHNvdXJjZVNpemUpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuY2FsY3VsYXRlRW5kKHNvdXJjZVNpemUpKTtcblx0fVxuXG59XG4iXX0=