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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzVDO0lBQXNDLDRDQUFnQjtJQVFyRCwwQkFBWSxFQUFZLEVBQ3JCLE9BQVksRUFDWixRQUFnQixFQUNoQixPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBSHRCLFlBSUMsa0JBQU0sRUFBRSxDQUFDLFNBSVQ7UUFIQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDeEIsQ0FBQzs7OztJQUVELGtDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7O1lBRU8sT0FBTyx3QkFBUSxJQUFJLENBQUMsT0FBTyxDQUFFO1FBRW5DLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBN0NELENBQXNDLE1BQU0sR0E2QzNDOzs7O0lBM0NBLG1DQUFhOzs7OztJQUViLG1DQUF3Qjs7Ozs7SUFFeEIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuL29yaWdpbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIE9yaWdpbkl0ZW1FbnRpdHkgZXh0ZW5kcyBFbnRpdHk8T3JpZ2luSWQ+IHtcblxuXHRyYXdEYXRhOiBhbnk7IC8vIHRPRE9cblxuXHRwcml2YXRlIHZlcnNpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoaWQ6IE9yaWdpbklkLFxuXHRcdFx0XHRyYXdEYXRhOiBhbnksXG5cdFx0XHRcdHBvc2l0aW9uOiBudW1iZXIsXG5cdFx0XHRcdHZlcnNpb246IG51bWJlciA9IDApIHtcblx0XHRzdXBlcihpZCk7XG5cdFx0dGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yYXdEYXRhO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG5cblx0YnVtcFZlcnNpb24oKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJzaW9uICs9IDE7XG5cdH1cblxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHR9XG5cblx0Y2xvbmUoKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cblx0XHRjb25zdCByYXdEYXRhID0geyAuLi50aGlzLnJhd0RhdGEgfTtcblxuXHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eSh0aGlzLmdldElkKCksIHJhd0RhdGEsIHRoaXMudmVyc2lvbik7XG5cdH1cblxufVxuIl19