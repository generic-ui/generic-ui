/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class BaseFilterType {
    /**
     * @protected
     * @param {?} filterTypeId
     */
    constructor(filterTypeId) {
        this.filterTypeId = filterTypeId;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.filterTypeId;
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterMany(entities, field, value) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            return this.filterEntity(item, field, value);
        }));
    }
    /**
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterOne(entity, field, value) {
        return this.filterEntity(entity, field, value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseFilterType.prototype.filterTypeId;
    /**
     * @abstract
     * @return {?}
     */
    BaseFilterType.prototype.getName = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    BaseFilterType.prototype.filterEntity = function (entity, field, value) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXItdHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2Jhc2UtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxNQUFNLE9BQWdCLGNBQWM7Ozs7O0lBSW5DLFlBQXNCLFlBQTBCO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFNRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsUUFBaUMsRUFBRSxLQUFZLEVBQUUsS0FBUTtRQUVuRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUF3QixFQUFFLEtBQVksRUFBRSxLQUFRO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRDs7Ozs7O0lBNUJBLHNDQUE0Qzs7Ozs7SUFNNUMsbURBQTJCOzs7Ozs7Ozs7SUFFM0IsNEVBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmlsdGVyVHlwZTxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpIHtcblx0XHR0aGlzLmZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGFic3RyYWN0IGdldE5hbWUoKTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmaWx0ZXJFbnRpdHkoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogYm9vbGVhbjtcblxuXHRnZXRJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGZpbHRlck1hbnkoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5maWx0ZXIoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpbHRlckVudGl0eShpdGVtLCBmaWVsZCwgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmlsdGVyT25lKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSwgZmllbGQ6IEZpZWxkLCB2YWx1ZTogVCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlckVudGl0eShlbnRpdHksIGZpZWxkLCB2YWx1ZSk7XG5cdH1cbn1cbiJdfQ==