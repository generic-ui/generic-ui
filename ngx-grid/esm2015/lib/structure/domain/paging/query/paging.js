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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sTUFBTTs7Ozs7Ozs7O0lBRWxCLFlBQTZCLE9BQWdCLEVBQ3pCLElBQVksRUFDWixRQUFnQixFQUNoQixTQUF3QixFQUN4QixRQUFpQixFQUNqQixXQUFvQjtRQUxYLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBQ3hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsVUFBa0I7UUFDcEMsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxVQUFrQjs7Y0FFMUIsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXZELElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQztTQUNUO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsVUFBa0I7O2NBRXhCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBRTFDLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtZQUMxQixPQUFPLFVBQVUsQ0FBQztTQUNsQjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxXQUFtQixFQUFFLG9CQUE0QixFQUFFLElBQVk7UUFDcEYsT0FBTyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBa0I7O2NBRWxCLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTTs7WUFFNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBRTNDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBRUQ7Ozs7OztJQW5GWSx5QkFBaUM7Ozs7O0lBQzFDLHNCQUE2Qjs7Ozs7SUFDN0IsMEJBQWlDOzs7OztJQUNqQywyQkFBeUM7Ozs7O0lBQ3pDLDBCQUFrQzs7Ozs7SUFDbEMsNkJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2luZyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2U6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlckJvdHRvbTogYm9vbGVhbikge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoc291cmNlU2l6ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHNvdXJjZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IE1hdGguY2VpbChzb3VyY2VTaXplIC8gdGhpcy5wYWdlU2l6ZSk7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcblx0fVxuXG5cdGNhbGN1bGF0ZVN0YXJ0KHNvdXJjZVNpemU6IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBmaXJzdEl0ZW0gPSAxICsgKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuXG5cdFx0aWYgKHNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoc291cmNlU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmIChzb3VyY2VTaXplIDwgbGFzdEl0ZW0pIHtcblx0XHRcdHJldHVybiBzb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdHJldHVybiBsYXN0SXRlbTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCBudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY3VycmVudFBhZ2UgLSBudW1iZXJPZlZpc2libGVQYWdlcyA8IHBhZ2UgJiYgcGFnZSA8IGN1cnJlbnRQYWdlICsgbnVtYmVyT2ZWaXNpYmxlUGFnZXM7XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRjb25zdCBzb3VyY2VTaXplID0gc291cmNlLmxlbmd0aDtcblxuXHRcdGxldCBzdGFydCA9IHRoaXMuY2FsY3VsYXRlU3RhcnQoc291cmNlU2l6ZSk7XG5cblx0XHRpZiAoc3RhcnQgIT09IDApIHtcblx0XHRcdHN0YXJ0IC09IDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZShzdGFydCwgdGhpcy5jYWxjdWxhdGVFbmQoc291cmNlU2l6ZSkpO1xuXHR9XG5cbn1cbiJdfQ==