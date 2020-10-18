/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
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
    Paging.ctorParameters = function () { return [
        { type: Boolean },
        { type: Number },
        { type: Number },
        { type: Array },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    Paging = tslib_1.__decorate([
        ReadModelObject,
        tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Array, Boolean, Boolean, Boolean, Boolean, Number, Number, Number])
    ], Paging);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3JlYWQvcGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUtwRCxnQkFBNkIsT0FBZ0IsRUFDekIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLGNBQXVCLEVBQ3ZCLGNBQXVCLEVBQ3ZCLEtBQWEsRUFDYixHQUFXLEVBQ1gsVUFBa0I7UUFWVCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDdEMsQ0FBQzs7OztJQUVELDBCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsd0JBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw0QkFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDZCQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMkJBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw4QkFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELG1DQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxtQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQseUJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCx1QkFBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDhCQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQsc0NBQXFCOzs7Ozs7SUFBckIsVUFBc0IsV0FBbUIsRUFBRSxvQkFBNEIsRUFBRSxJQUFZO1FBQ3BGLE9BQU8sV0FBVyxHQUFHLG9CQUFvQixHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsV0FBVyxHQUFHLG9CQUFvQixDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsdUJBQU07Ozs7SUFBTixVQUFPLE1BQWtCOztZQUVwQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUUzQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNYO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztnQkFuRThCLEtBQUs7Ozs7Ozs7OztJQUx4QixNQUFNO1FBRGxCLGVBQWU7MEVBTWdCLEtBQUs7T0FMeEIsTUFBTSxDQTBFbEI7SUFBRCxhQUFDO0NBQUEsSUFBQTtTQTFFWSxNQUFNOzs7Ozs7SUFFTix5QkFBaUM7Ozs7O0lBQzFDLHNCQUE2Qjs7Ozs7SUFDN0IsMEJBQWlDOzs7OztJQUNqQywyQkFBeUM7Ozs7O0lBQ3pDLDBCQUFrQzs7Ozs7SUFDbEMsNkJBQXFDOzs7OztJQUNyQyxnQ0FBd0M7Ozs7O0lBQ3hDLGdDQUF3Qzs7Ozs7SUFDeEMsdUJBQThCOzs7OztJQUM5QixxQkFBNEI7Ozs7O0lBQzVCLDRCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbE9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBSZWFkTW9kZWxPYmplY3RcbmV4cG9ydCBjbGFzcyBQYWdpbmcge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZXM6IEFycmF5PG51bWJlcj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJUb3A6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNOZXh0RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaXNQcmV2RGlzYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VTaXplOiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0UGFnZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2U7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG5cblx0Z2V0UGFnZVNpemVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplcztcblx0fVxuXG5cdGlzUGFnZXJUb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJUb3A7XG5cdH1cblxuXHRpc1BhZ2VyQm90dG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VyQm90dG9tO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzTmV4dERpc2FibGVkO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzUHJldkRpc2FibGVkO1xuXHR9XG5cblx0Z2V0U3RhcnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydDtcblx0fVxuXG5cdGdldEVuZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmVuZDtcblx0fVxuXG5cdGdldFNvdXJjZVNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIG51bWJlck9mVmlzaWJsZVBhZ2VzOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjdXJyZW50UGFnZSAtIG51bWJlck9mVmlzaWJsZVBhZ2VzIDwgcGFnZSAmJiBwYWdlIDwgY3VycmVudFBhZ2UgKyBudW1iZXJPZlZpc2libGVQYWdlcztcblx0fVxuXG5cdHNhbXBsZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuXHRcdGxldCBzdGFydCA9IHRoaXMuZ2V0U3RhcnQoKTtcblxuXHRcdGlmIChzdGFydCAhPT0gMCkge1xuXHRcdFx0c3RhcnQgLT0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKHN0YXJ0LCB0aGlzLmdldEVuZCgpKTtcblx0fVxuXG59XG4iXX0=