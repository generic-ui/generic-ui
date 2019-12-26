/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity, RandomStringGenerator } from '@generic-ui/hermes';
var ItemEntity = /** @class */ (function () {
    function ItemEntity(data, id, version) {
        if (version === void 0) { version = 0; }
        this.version = 0;
        this.data = data;
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
    ItemEntity.ctorParameters = function () { return [
        { type: undefined },
        { type: String },
        { type: Number }
    ]; };
    ItemEntity = tslib_1.__decorate([
        Entity,
        tslib_1.__metadata("design:paramtypes", [Object, String, Number])
    ], ItemEntity);
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
    ItemEntity.prototype.version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFZbEUsb0JBQVksSUFBUyxFQUNsQixFQUFXLEVBQ1gsT0FBbUI7UUFBbkIsd0JBQUEsRUFBQSxXQUFtQjtRQUpMLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFLcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7O0lBRUQsNEJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw0QkFBTzs7O0lBQVA7UUFDQyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELDBCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsK0JBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsMkJBQU07Ozs7SUFBTixVQUFPLE1BQWtCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCwrQkFBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQTFDVyxVQUFVO1FBRHRCLE1BQU07O09BQ00sVUFBVSxDQTRDdEI7SUFBRCxpQkFBQztDQUFBLElBQUE7U0E1Q1ksVUFBVTs7Ozs7O0lBRXRCLHdCQUE0Qjs7Ozs7SUFFNUIsMEJBQTJCOzs7OztJQUUzQiw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEVudGl0eVxuZXhwb3J0IGNsYXNzIEl0ZW1FbnRpdHkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnNpb246IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogYW55LFxuXHRcdFx0XHRpZD86IHN0cmluZyxcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHR0aGlzLmlkID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaWQgPSBpZDtcblx0XHR9XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXG5cdGdldFVpSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aScgKyB0aGlzLmlkLnJlcGxhY2UoLy0vZywgJycpO1xuXHR9XG5cblx0Z2V0SWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0ZXF1YWxzKGVudGl0eTogSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBlbnRpdHkuaWQgJiYgdGhpcy5nZXRWZXJzaW9uKCkgPT09IGVudGl0eS5nZXRWZXJzaW9uKCk7XG5cdH1cblxuXHRlcXVhbHNCeUlkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pZCA9PT0gaWQ7XG5cdH1cblxufVxuIl19