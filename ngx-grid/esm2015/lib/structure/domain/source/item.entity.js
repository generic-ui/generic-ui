/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Entity, RandomStringGenerator } from '@generic-ui/hermes';
let ItemEntity = class ItemEntity {
    /**
     * @param {?} data
     * @param {?=} id
     * @param {?=} version
     */
    constructor(data, id, version = 0) {
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
    getData() {
        return this.data;
    }
    /**
     * @return {?}
     */
    getUiId() {
        return 'gui' + this.id.replace(/-/g, '');
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    equalsById(id) {
        return this.id === id;
    }
};
ItemEntity.ctorParameters = () => [
    { type: undefined },
    { type: String },
    { type: Number }
];
ItemEntity = tslib_1.__decorate([
    Entity,
    tslib_1.__metadata("design:paramtypes", [Object, String, Number])
], ItemEntity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztJQUl0RCxVQUFVLFNBQVYsVUFBVTs7Ozs7O0lBUXRCLFlBQVksSUFBUyxFQUNsQixFQUFXLEVBQ1gsVUFBa0IsQ0FBQztRQUpMLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFLcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2I7SUFDRixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUQsQ0FBQTs7Ozs7O0FBNUNZLFVBQVU7SUFEdEIsTUFBTTs7R0FDTSxVQUFVLENBNEN0QjtTQTVDWSxVQUFVOzs7Ozs7SUFFdEIsd0JBQTRCOzs7OztJQUU1QiwwQkFBMkI7Ozs7O0lBRTNCLDZCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ARW50aXR5XG5leHBvcnQgY2xhc3MgSXRlbUVudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YTogYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVyc2lvbjogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBhbnksXG5cdFx0XHRcdGlkPzogc3RyaW5nLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdGlmICghaWQpIHtcblx0XHRcdHRoaXMuaWQgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdH1cblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhO1xuXHR9XG5cblx0Z2V0VWlJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpJyArIHRoaXMuaWQucmVwbGFjZSgvLS9nLCAnJyk7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGVudGl0eS5pZCAmJiB0aGlzLmdldFZlcnNpb24oKSA9PT0gZW50aXR5LmdldFZlcnNpb24oKTtcblx0fVxuXG5cdGVxdWFsc0J5SWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBpZDtcblx0fVxuXG59XG4iXX0=