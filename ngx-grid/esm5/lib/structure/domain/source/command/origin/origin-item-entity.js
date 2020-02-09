/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var OriginItemEntity = /** @class */ (function () {
    function OriginItemEntity(id, rawData, position, version) {
        if (version === void 0) { version = 0; }
        this.id = id;
        this.rawData = rawData;
        this.position = position;
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
    OriginItemEntity.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.position;
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
     * @param {?} position
     * @return {?}
     */
    OriginItemEntity.prototype.setPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.position = position;
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
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFVQywwQkFBWSxFQUFVLEVBQ25CLE9BQVksRUFDWixRQUFnQixFQUNoQixPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGtDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7O1lBRU8sT0FBTyx3QkFBUSxJQUFJLENBQUMsT0FBTyxDQUFFO1FBRW5DLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQzs7OztJQTdDQSw4QkFBVzs7SUFFWCxtQ0FBYTs7Ozs7SUFFYixtQ0FBd0I7Ozs7O0lBRXhCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPcmlnaW5JdGVtRW50aXR5IHtcblxuXHRpZDogc3RyaW5nO1xuXG5cdHJhd0RhdGE6IGFueTtcblxuXHRwcml2YXRlIHZlcnNpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoaWQ6IHN0cmluZyxcblx0XHRcdFx0cmF3RGF0YTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmF3RGF0YTtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGJ1bXBWZXJzaW9uKCk6IHZvaWQge1xuXHRcdHRoaXMudmVyc2lvbiArPSAxO1xuXHR9XG5cblx0c2V0UG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0fVxuXG5cdGNsb25lKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdFx0Y29uc3QgcmF3RGF0YSA9IHsgLi4udGhpcy5yYXdEYXRhIH07XG5cblx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkodGhpcy5pZCwgcmF3RGF0YSwgdGhpcy52ZXJzaW9uKTtcblx0fVxuXG59XG4iXX0=