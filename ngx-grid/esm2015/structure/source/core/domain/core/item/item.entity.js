/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
export class ItemEntity {
    /**
     * @param {?} data
     * @param {?} position
     * @param {?=} id
     * @param {?=} version
     */
    constructor(data, position, id, version = 0) {
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
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
    /**
     * @return {?}
     */
    isSelected() {
        return false;
    }
    /**
     * @return {?}
     */
    isEven() {
        return this.position % 2 === 0;
    }
    /**
     * @return {?}
     */
    isOdd() {
        return this.position % 2 === 1;
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxNQUFNLE9BQU8sVUFBVTs7Ozs7OztJQVV0QixZQUFZLElBQVMsRUFDbEIsUUFBZ0IsRUFDaEIsRUFBVyxFQUNYLFVBQWtCLENBQUM7UUFMTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBTXBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUQ7Ozs7OztJQTlEQSx3QkFBNEI7Ozs7O0lBRTVCLDBCQUEyQjs7Ozs7SUFFM0IsOEJBQWtDOzs7OztJQUVsQyw2QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhOiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVyc2lvbjogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBhbnksXG5cdFx0XHRcdHBvc2l0aW9uOiBudW1iZXIsXG5cdFx0XHRcdGlkPzogc3RyaW5nLFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHR0aGlzLmlkID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaWQgPSBpZDtcblx0XHR9XG5cdH1cblxuXHRnZXREYXRhKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0fVxuXG5cdGdldFVpSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aScgKyB0aGlzLmlkLnJlcGxhY2UoLy0vZywgJycpO1xuXHR9XG5cblx0Z2V0SWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldFZlcnNpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG5cdGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNFdmVuKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uICUgMiA9PT0gMDtcblx0fVxuXG5cdGlzT2RkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uICUgMiA9PT0gMTtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pZCA9PT0gZW50aXR5LmlkICYmIHRoaXMuZ2V0VmVyc2lvbigpID09PSBlbnRpdHkuZ2V0VmVyc2lvbigpO1xuXHR9XG5cblx0ZXF1YWxzQnlJZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaWQgPT09IGlkO1xuXHR9XG5cbn1cbiJdfQ==