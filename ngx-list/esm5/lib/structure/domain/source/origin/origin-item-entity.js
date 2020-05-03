/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity } from '@generic-ui/hermes';
var OriginItemEntity = /** @class */ (function (_super) {
    tslib_1.__extends(OriginItemEntity, _super);
    function OriginItemEntity(id, rawData, position, version) {
        if (version === void 0) { version = 0; }
        var _this = _super.call(this, id) || this;
        _this.rawData = rawData;
        _this.position = position;
        _this.version = version;
        return _this;
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
        return new OriginItemEntity(this.getId(), rawData, this.version);
    };
    return OriginItemEntity;
}(Entity));
export { OriginItemEntity };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs1QztJQUFzQyw0Q0FBZ0I7SUFRckQsMEJBQVksRUFBWSxFQUNyQixPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBbUI7UUFBbkIsd0JBQUEsRUFBQSxXQUFtQjtRQUh0QixZQUlDLGtCQUFNLEVBQUUsQ0FBQyxTQUlUO1FBSEEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3hCLENBQUM7Ozs7SUFFRCxrQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsZ0NBQUs7OztJQUFMOztZQUVPLE9BQU8sd0JBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBRTtRQUVuQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUFzQyxNQUFNLEdBNkMzQzs7OztJQTNDQSxtQ0FBYTs7Ozs7SUFFYixtQ0FBd0I7Ozs7O0lBRXhCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi9vcmlnaW4taWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBPcmlnaW5JdGVtRW50aXR5IGV4dGVuZHMgRW50aXR5PE9yaWdpbklkPiB7XG5cblx0cmF3RGF0YTogYW55OyAvLyB0T0RPXG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBPcmlnaW5JZCxcblx0XHRcdFx0cmF3RGF0YTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHRcdHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmF3RGF0YTtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGJ1bXBWZXJzaW9uKCk6IHZvaWQge1xuXHRcdHRoaXMudmVyc2lvbiArPSAxO1xuXHR9XG5cblx0c2V0UG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0fVxuXG5cdGNsb25lKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdFx0Y29uc3QgcmF3RGF0YSA9IHsgLi4udGhpcy5yYXdEYXRhIH07XG5cblx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkodGhpcy5nZXRJZCgpLCByYXdEYXRhLCB0aGlzLnZlcnNpb24pO1xuXHR9XG5cbn1cbiJdfQ==