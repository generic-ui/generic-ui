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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRDtJQVVDLG9CQUFZLElBQVMsRUFDbEIsUUFBZ0IsRUFDaEIsRUFBVyxFQUNYLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFMTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBTXBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELDRCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNEJBQU87OztJQUFQO1FBQ0MsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCwwQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELCtCQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsZ0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQkFBVTs7O0lBQVY7UUFDQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCwyQkFBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwyQkFBTTs7OztJQUFOLFVBQU8sTUFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQzs7Ozs7OztJQTlEQSx3QkFBNEI7Ozs7O0lBRTVCLDBCQUEyQjs7Ozs7SUFFM0IsOEJBQWtDOzs7OztJQUVsQyw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhOiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVyc2lvbjogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBhbnksXG5cdFx0XHRcdHBvc2l0aW9uOiBudW1iZXIsXG5cdFx0XHRcdGlkPzogc3RyaW5nLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHR0aGlzLmlkID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaWQgPSBpZDtcblx0XHR9XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXG5cdGdldFVpSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aScgKyB0aGlzLmlkLnJlcGxhY2UoLy0vZywgJycpO1xuXHR9XG5cblx0Z2V0SWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNFdmVuKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uICUgMiA9PT0gMDtcblx0fVxuXG5cdGlzT2RkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uICUgMiA9PT0gMTtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pZCA9PT0gZW50aXR5LmlkICYmIHRoaXMuZ2V0VmVyc2lvbigpID09PSBlbnRpdHkuZ2V0VmVyc2lvbigpO1xuXHR9XG5cblx0ZXF1YWxzQnlJZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGlkO1xuXHR9XG5cbn1cbiJdfQ==