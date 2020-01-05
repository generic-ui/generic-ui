/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Paging {
    /**
     * @param {?} enabled
     * @param {?} page
     * @param {?} pageSize
     * @param {?} pageSizes
     * @param {?} pagerTop
     * @param {?} pagerBottom
     * @param {?} isNextDisabled
     * @param {?} isPrevDisabled
     * @param {?} start
     * @param {?} end
     * @param {?} sourceSize
     */
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, isNextDisabled, isPrevDisabled, start, end, sourceSize) {
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
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    getPage() {
        return this.page;
    }
    /**
     * @return {?}
     */
    getPageSize() {
        return this.pageSize;
    }
    /**
     * @return {?}
     */
    getPageSizes() {
        return this.pageSizes;
    }
    /**
     * @return {?}
     */
    isPagerTop() {
        return this.pagerTop;
    }
    /**
     * @return {?}
     */
    isPagerBottom() {
        return this.pagerBottom;
    }
    /**
     * @return {?}
     */
    isNextPageDisabled() {
        return this.isNextDisabled;
    }
    /**
     * @return {?}
     */
    isPrevPageDisabled() {
        return this.isPrevDisabled;
    }
    /**
     * @return {?}
     */
    getStart() {
        return this.start;
    }
    /**
     * @return {?}
     */
    getEnd() {
        return this.end;
    }
    /**
     * @return {?}
     */
    getSourceSize() {
        return this.sourceSize;
    }
    /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    calculateVisiblePages(currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    sample(source) {
        /** @type {?} */
        let start = this.getStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.getEnd());
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxNQUFNOzs7Ozs7Ozs7Ozs7OztJQUVsQixZQUE2QixPQUFnQixFQUN6QixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsY0FBdUIsRUFDdkIsY0FBdUIsRUFDdkIsS0FBYSxFQUNiLEdBQVcsRUFDWCxVQUFrQjtRQVZULFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUN0QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQscUJBQXFCLENBQUMsV0FBbUIsRUFBRSxvQkFBNEIsRUFBRSxJQUFZO1FBQ3BGLE9BQU8sV0FBVyxHQUFHLG9CQUFvQixHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsV0FBVyxHQUFHLG9CQUFvQixDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWtCOztZQUVwQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUUzQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNYO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBRUQ7Ozs7OztJQXhFWSx5QkFBaUM7Ozs7O0lBQzFDLHNCQUE2Qjs7Ozs7SUFDN0IsMEJBQWlDOzs7OztJQUNqQywyQkFBeUM7Ozs7O0lBQ3pDLDBCQUFrQzs7Ozs7SUFDbEMsNkJBQXFDOzs7OztJQUNyQyxnQ0FBd0M7Ozs7O0lBQ3hDLGdDQUF3Qzs7Ozs7SUFDeEMsdUJBQThCOzs7OztJQUM5QixxQkFBNEI7Ozs7O0lBQzVCLDRCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdpbmcge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNOZXh0RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNQcmV2RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VTaXplOiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzTmV4dERpc2FibGVkO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzUHJldkRpc2FibGVkXG5cdH1cblxuXHRnZXRTdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0O1xuXHR9XG5cblx0Z2V0RW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuZW5kO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgbnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciwgcGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGN1cnJlbnRQYWdlIC0gbnVtYmVyT2ZWaXNpYmxlUGFnZXMgPCBwYWdlICYmIHBhZ2UgPCBjdXJyZW50UGFnZSArIG51bWJlck9mVmlzaWJsZVBhZ2VzO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5nZXRTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuZ2V0RW5kKCkpO1xuXHR9XG5cbn1cbiJdfQ==