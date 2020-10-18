/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
HermesId = /** @class */ (function () {
    function HermesId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    HermesId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} hermesId
     * @return {?}
     */
    HermesId.prototype.equals = /**
     * @param {?} hermesId
     * @return {?}
     */
    function (hermesId) {
        return this.uid === hermesId.getId();
    };
    return HermesId;
}());
/**
 * @abstract
 * @template T
 */
export { HermesId };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    HermesId.prototype.toString = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vdGFjdGljYWwvaGVybWVzLmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O0lBSUMsa0JBQXNCLEdBQU07UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQzs7OztJQUlELHdCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELHlCQUFNOzs7O0lBQU4sVUFBTyxRQUFxQjtRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7Ozs7SUFmQSx1QkFBd0I7Ozs7O0lBTXhCLDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIZXJtZXNJZDxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1aWQ6IFQ7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHVpZDogVCkge1xuXHRcdHRoaXMudWlkID0gdWlkO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xuXG5cdGdldElkKCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGVxdWFscyhoZXJtZXNJZDogSGVybWVzSWQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy51aWQgPT09IGhlcm1lc0lkLmdldElkKCk7XG5cdH1cbn1cbiJdfQ==