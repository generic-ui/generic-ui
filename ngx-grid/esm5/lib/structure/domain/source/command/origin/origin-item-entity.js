/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var OriginItemEntity = /** @class */ (function () {
    function OriginItemEntity(id, rawData, version) {
        if (version === void 0) { version = 0; }
        this.id = id;
        this.rawData = rawData;
        this.version = version;
    }
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.rawData;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.bumpVersion = /**
     * @return {?}
     */
    function () {
        this.version += 1;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rawData = tslib_1.__assign({}, this.rawData);
        return new OriginItemEntity(this.id, rawData, this.version);
    };
    return OriginItemEntity;
}());
export { OriginItemEntity };
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.id;
    /** @type {?} */
    OriginItemEntity.prototype.rawData;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFRQywwQkFBWSxFQUFVLEVBQ25CLE9BQVksRUFDWixPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGtDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsZ0NBQUs7OztJQUFMOztZQUVPLE9BQU8sd0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVqQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7SUFqQ0EsOEJBQVc7O0lBRVgsbUNBQWE7Ozs7O0lBRWIsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdGlkOiBzdHJpbmc7XG5cblx0cmF3RGF0YTogYW55O1xuXG5cdHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsXG5cdFx0XHRcdHJhd0RhdGE6IGFueSxcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmF3RGF0YTtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0YnVtcFZlcnNpb24oKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJzaW9uICs9IDE7XG5cdH1cblxuXHRjbG9uZSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblxuXHRcdGNvbnN0IHJhd0RhdGEgPSB7Li4udGhpcy5yYXdEYXRhfTtcblxuXHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eSh0aGlzLmlkLCByYXdEYXRhLCB0aGlzLnZlcnNpb24pO1xuXHR9XG5cbn1cbiJdfQ==