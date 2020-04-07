/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
let Paging = class Paging {
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
};
Paging.ctorParameters = () => [
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
];
Paging = tslib_1.__decorate([
    ReadModelObject,
    tslib_1.__metadata("design:paramtypes", [Boolean, Number, Number, Array, Boolean, Boolean, Boolean, Boolean, Number, Number, Number])
], Paging);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3JlYWQvcGFnaW5nL3BhZ2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztJQUd4QyxNQUFNLFNBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7SUFFbEIsWUFBNkIsT0FBZ0IsRUFDekIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFNBQXdCLEVBQ3hCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLGNBQXVCLEVBQ3ZCLGNBQXVCLEVBQ3ZCLEtBQWEsRUFDYixHQUFXLEVBQ1gsVUFBa0I7UUFWVCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDdEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELHFCQUFxQixDQUFDLFdBQW1CLEVBQUUsb0JBQTRCLEVBQUUsSUFBWTtRQUNwRixPQUFPLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjs7WUFFcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFFM0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUVELENBQUE7Ozs7O1lBckUrQixLQUFLOzs7Ozs7Ozs7QUFMeEIsTUFBTTtJQURsQixlQUFlO3NFQU1nQixLQUFLO0dBTHhCLE1BQU0sQ0EwRWxCO1NBMUVZLE1BQU07Ozs7OztJQUVOLHlCQUFpQzs7Ozs7SUFDMUMsc0JBQTZCOzs7OztJQUM3QiwwQkFBaUM7Ozs7O0lBQ2pDLDJCQUF5Qzs7Ozs7SUFDekMsMEJBQWtDOzs7OztJQUNsQyw2QkFBcUM7Ozs7O0lBQ3JDLGdDQUF3Qzs7Ozs7SUFDeEMsZ0NBQXdDOzs7OztJQUN4Qyx1QkFBOEI7Ozs7O0lBQzlCLHFCQUE0Qjs7Ozs7SUFDNUIsNEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQFJlYWRNb2RlbE9iamVjdFxuZXhwb3J0IGNsYXNzIFBhZ2luZyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2U6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlU2l6ZTogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2VTaXplczogQXJyYXk8bnVtYmVyPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdlckJvdHRvbTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpc05leHREaXNhYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpc1ByZXZEaXNhYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGFydDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuZDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVNpemU6IG51bWJlcikge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRpc05leHRQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNOZXh0RGlzYWJsZWQ7XG5cdH1cblxuXHRpc1ByZXZQYWdlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNQcmV2RGlzYWJsZWQ7XG5cdH1cblxuXHRnZXRTdGFydCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0O1xuXHR9XG5cblx0Z2V0RW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuZW5kO1xuXHR9XG5cblx0Z2V0U291cmNlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgbnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciwgcGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGN1cnJlbnRQYWdlIC0gbnVtYmVyT2ZWaXNpYmxlUGFnZXMgPCBwYWdlICYmIHBhZ2UgPCBjdXJyZW50UGFnZSArIG51bWJlck9mVmlzaWJsZVBhZ2VzO1xuXHR9XG5cblx0c2FtcGxlKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5nZXRTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuZ2V0RW5kKCkpO1xuXHR9XG5cbn1cbiJdfQ==