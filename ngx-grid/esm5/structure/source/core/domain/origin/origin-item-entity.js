/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity } from '@generic-ui/hermes';
var OriginItemEntity = /** @class */ (function (_super) {
    tslib_1.__extends(OriginItemEntity, _super);
    function OriginItemEntity(id, sourceItem, position, version) {
        if (version === void 0) { version = 0; }
        var _this = _super.call(this, id) || this;
        _this.sourceItem = sourceItem;
        _this.position = position;
        _this.version = version;
        return _this;
    }
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.getSourceItem = /**
     * @return {?}
     */
    function () {
        return this.sourceItem;
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
        var rawData = tslib_1.__assign({}, this.sourceItem);
        return new OriginItemEntity(this.getId(), rawData, this.version);
    };
    return OriginItemEntity;
}(Entity));
export { OriginItemEntity };
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.sourceItem;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLNUM7SUFBc0MsNENBQWdCO0lBUXJELDBCQUFZLEVBQVksRUFDckIsVUFBZSxFQUNmLFFBQWdCLEVBQ2hCLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFIdEIsWUFJQyxrQkFBTSxFQUFFLENBQUMsU0FJVDtRQUhBLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGdDQUFLOzs7SUFBTDs7WUFFTyxPQUFPLHdCQUFRLElBQUksQ0FBQyxVQUFVLENBQUU7UUFFdEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBc0MsTUFBTSxHQTZDM0M7Ozs7SUEzQ0Esc0NBQWdCOzs7OztJQUVoQixtQ0FBd0I7Ozs7O0lBRXhCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi9vcmlnaW4taWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBPcmlnaW5JdGVtRW50aXR5IGV4dGVuZHMgRW50aXR5PE9yaWdpbklkPiB7XG5cblx0c291cmNlSXRlbTogYW55OyAvLyB0T0RPXG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBPcmlnaW5JZCxcblx0XHRcdFx0c291cmNlSXRlbTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHRcdHRoaXMuc291cmNlSXRlbSA9IHNvdXJjZUl0ZW07XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdH1cblxuXHRnZXRTb3VyY2VJdGVtKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlSXRlbTtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGJ1bXBWZXJzaW9uKCk6IHZvaWQge1xuXHRcdHRoaXMudmVyc2lvbiArPSAxO1xuXHR9XG5cblx0c2V0UG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0fVxuXG5cdGNsb25lKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdFx0Y29uc3QgcmF3RGF0YSA9IHsgLi4udGhpcy5zb3VyY2VJdGVtIH07XG5cblx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkodGhpcy5nZXRJZCgpLCByYXdEYXRhLCB0aGlzLnZlcnNpb24pO1xuXHR9XG5cbn1cbiJdfQ==