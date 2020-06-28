/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
var ItemEntity = /** @class */ (function () {
    function ItemEntity(data, position, id, version) {
        if (version === void 0) { version = 0; }
        this.version = 0;
        this.data = data;
        this.position = position;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    /**
     * @return {?}
     */
    ItemEntity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getUiId = /**
     * @return {?}
     */
    function () {
        return 'gui' + this.id.replace(/-/g, '');
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.position;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isEven = /**
     * @return {?}
     */
    function () {
        return this.position % 2 === 0;
    };
    /**
     * @return {?}
     */
    ItemEntity.prototype.isOdd = /**
     * @return {?}
     */
    function () {
        return this.position % 2 === 1;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ItemEntity.prototype.equals = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ItemEntity.prototype.equalsById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.id === id;
    };
    return ItemEntity;
}());
export { ItemEntity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.position;
    /**
     * @type {?}
     * @private
     */
    ItemEntity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0Q7SUFVQyxvQkFBWSxJQUFTLEVBQ2xCLFFBQWdCLEVBQ2hCLEVBQVcsRUFDWCxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBTEwsWUFBTyxHQUFXLENBQUMsQ0FBQztRQU1wQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzQzthQUFNO1lBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCw0QkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDRCQUFPOzs7SUFBUDtRQUNDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCwrQkFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsK0JBQVU7OztJQUFWO1FBQ0MsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsMkJBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDBCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMkJBQU07Ozs7SUFBTixVQUFPLE1BQWtCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCwrQkFBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRixpQkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7Ozs7Ozs7SUE5REEsd0JBQTRCOzs7OztJQUU1QiwwQkFBMkI7Ozs7O0lBRTNCLDhCQUFrQzs7Ozs7SUFFbEMsNkJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5leHBvcnQgY2xhc3MgSXRlbUVudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YTogYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnNpb246IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogYW55LFxuXHRcdFx0XHRwb3NpdGlvbjogbnVtYmVyLFxuXHRcdFx0XHRpZD86IHN0cmluZyxcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0dGhpcy5pZCA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RGF0YSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE7XG5cdH1cblxuXHRnZXRVaUlkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWknICsgdGhpcy5pZC5yZXBsYWNlKC8tL2csICcnKTtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlzRXZlbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDA7XG5cdH1cblxuXHRpc09kZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiAlIDIgPT09IDE7XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGVudGl0eS5pZCAmJiB0aGlzLmdldFZlcnNpb24oKSA9PT0gZW50aXR5LmdldFZlcnNpb24oKTtcblx0fVxuXG5cdGVxdWFsc0J5SWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBpZDtcblx0fVxuXG59XG4iXX0=