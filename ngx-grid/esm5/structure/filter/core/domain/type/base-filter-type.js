/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
BaseFilterType = /** @class */ (function () {
    function BaseFilterType(filterTypeId) {
        this.filterTypeId = filterTypeId;
    }
    /**
     * @return {?}
     */
    BaseFilterType.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.filterTypeId;
    };
    /**
     * @param {?} entities
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    BaseFilterType.prototype.filterMany = /**
     * @param {?} entities
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (entities, field, value) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return _this.filterEntity(item, field, value);
        }));
    };
    /**
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    BaseFilterType.prototype.filterOne = /**
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (entity, field, value) {
        return this.filterEntity(entity, field, value);
    };
    return BaseFilterType;
}());
/**
 * @abstract
 * @template T
 */
export { BaseFilterType };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXItdHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2Jhc2UtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7Ozs7SUFJQyx3QkFBc0IsWUFBMEI7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQU1ELDhCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBRUQsbUNBQVU7Ozs7OztJQUFWLFVBQVcsUUFBaUMsRUFBRSxLQUFZLEVBQUUsS0FBUTtRQUFwRSxpQkFTQztRQVBBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUM3QyxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBUzs7Ozs7O0lBQVQsVUFBVSxNQUF3QixFQUFFLEtBQVksRUFBRSxLQUFRO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7O0lBNUJBLHNDQUE0Qzs7Ozs7SUFNNUMsbURBQTJCOzs7Ozs7Ozs7SUFFM0IsNEVBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmlsdGVyVHlwZTxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpIHtcblx0XHR0aGlzLmZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGFic3RyYWN0IGdldE5hbWUoKTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmaWx0ZXJFbnRpdHkoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogYm9vbGVhbjtcblxuXHRnZXRJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGZpbHRlck1hbnkoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5maWx0ZXIoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpbHRlckVudGl0eShpdGVtLCBmaWVsZCwgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmlsdGVyT25lKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSwgZmllbGQ6IEZpZWxkLCB2YWx1ZTogVCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlckVudGl0eShlbnRpdHksIGZpZWxkLCB2YWx1ZSk7XG5cdH1cbn1cbiJdfQ==