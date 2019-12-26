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
     */
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom) {
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
     * @param {?} sourceSize
     * @return {?}
     */
    isNextPageDisabled(sourceSize) {
        if (sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(sourceSize / this.pageSize);
    }
    /**
     * @return {?}
     */
    isPrevPageDisabled() {
        return this.page === 1;
    }
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    calculateStart(sourceSize) {
        /** @type {?} */
        const firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    }
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    calculateEnd(sourceSize) {
        /** @type {?} */
        const lastItem = this.page * this.pageSize;
        if (sourceSize < lastItem) {
            return sourceSize;
        }
        return lastItem;
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
        const sourceSize = source.length;
        /** @type {?} */
        let start = this.calculateStart(sourceSize);
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd(sourceSize));
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxNQUFNOzs7Ozs7Ozs7SUFFbEIsWUFBNkIsT0FBZ0IsRUFDekIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CO1FBTFgsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7SUFDeEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxVQUFrQjtRQUNwQyxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFVBQWtCOztjQUUxQixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFdkQsSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxVQUFrQjs7Y0FFeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFFMUMsSUFBSSxVQUFVLEdBQUcsUUFBUSxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVELHFCQUFxQixDQUFDLFdBQW1CLEVBQUUsb0JBQTRCLEVBQUUsSUFBWTtRQUNwRixPQUFPLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjs7Y0FFbEIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNOztZQUU1QixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFFM0MsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFRDs7Ozs7O0lBbkZZLHlCQUFpQzs7Ozs7SUFDMUMsc0JBQTZCOzs7OztJQUM3QiwwQkFBaUM7Ozs7O0lBQ2pDLDJCQUF5Qzs7Ozs7SUFDekMsMEJBQWtDOzs7OztJQUNsQyw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnaW5nIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VyVG9wOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VyQm90dG9tOiBib29sZWFuKSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFBhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlO1xuXHR9XG5cblx0Z2V0UGFnZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplcygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2l6ZXM7XG5cdH1cblxuXHRpc1BhZ2VyVG9wKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyVG9wO1xuXHR9XG5cblx0aXNQYWdlckJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlckJvdHRvbTtcblx0fVxuXG5cdGlzTmV4dFBhZ2VEaXNhYmxlZChzb3VyY2VTaXplOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAoc291cmNlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHNvdXJjZVNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblx0fVxuXG5cdGlzUHJldlBhZ2VEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuXHR9XG5cblx0Y2FsY3VsYXRlU3RhcnQoc291cmNlU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGZpcnN0SXRlbSA9IDEgKyAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG5cblx0XHRpZiAoc291cmNlU2l6ZSA8IGZpcnN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpcnN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZUVuZChzb3VyY2VTaXplOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLnBhZ2UgKiB0aGlzLnBhZ2VTaXplO1xuXG5cdFx0aWYgKHNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhc3RJdGVtO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIG51bWJlck9mVmlzaWJsZVBhZ2VzOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjdXJyZW50UGFnZSAtIG51bWJlck9mVmlzaWJsZVBhZ2VzIDwgcGFnZSAmJiBwYWdlIDwgY3VycmVudFBhZ2UgKyBudW1iZXJPZlZpc2libGVQYWdlcztcblx0fVxuXG5cdHNhbXBsZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuXHRcdGNvbnN0IHNvdXJjZVNpemUgPSBzb3VyY2UubGVuZ3RoO1xuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydChzb3VyY2VTaXplKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmNhbGN1bGF0ZUVuZChzb3VyY2VTaXplKSk7XG5cdH1cblxufVxuIl19