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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLNUM7SUFBc0MsNENBQWdCO0lBUXJELDBCQUFZLEVBQVksRUFDckIsT0FBWSxFQUNaLFFBQWdCLEVBQ2hCLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFIdEIsWUFJQyxrQkFBTSxFQUFFLENBQUMsU0FJVDtRQUhBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7O0lBRUQsa0NBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGdDQUFLOzs7SUFBTDs7WUFFTyxPQUFPLHdCQUFRLElBQUksQ0FBQyxPQUFPLENBQUU7UUFFbkMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBc0MsTUFBTSxHQTZDM0M7Ozs7SUEzQ0EsbUNBQWE7Ozs7O0lBRWIsbUNBQXdCOzs7OztJQUV4QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4vb3JpZ2luLWlkJztcblxuXG5leHBvcnQgY2xhc3MgT3JpZ2luSXRlbUVudGl0eSBleHRlbmRzIEVudGl0eTxPcmlnaW5JZD4ge1xuXG5cdHJhd0RhdGE6IGFueTsgLy8gdE9ET1xuXG5cdHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihpZDogT3JpZ2luSWQsXG5cdFx0XHRcdHJhd0RhdGE6IGFueSxcblx0XHRcdFx0cG9zaXRpb246IG51bWJlcixcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHN1cGVyKGlkKTtcblx0XHR0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG5cblx0Z2V0RGF0YSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnJhd0RhdGE7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRidW1wVmVyc2lvbigpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnNpb24gKz0gMTtcblx0fVxuXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdH1cblxuXHRjbG9uZSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblxuXHRcdGNvbnN0IHJhd0RhdGEgPSB7IC4uLnRoaXMucmF3RGF0YSB9O1xuXG5cdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KHRoaXMuZ2V0SWQoKSwgcmF3RGF0YSwgdGhpcy52ZXJzaW9uKTtcblx0fVxuXG59XG4iXX0=