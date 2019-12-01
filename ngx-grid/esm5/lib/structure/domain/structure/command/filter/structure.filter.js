/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
var StructureFilter = /** @class */ (function () {
    function StructureFilter(id, field, filterValue) {
        this.filterId = id;
        this.field = field;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    StructureFilter.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.field.getId();
    };
    /**
     * @return {?}
     */
    StructureFilter.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    StructureFilter.prototype.setFilterValue = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.filterValue = filterValue;
    };
    // Move to container
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    StructureFilter.prototype.filter = 
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.field.getDataType() === DataType.STRING) {
                return _this.filterString(item);
            }
            else if (_this.field.getDataType() === DataType.NUMBER) {
                return _this.filterNumber(item);
            }
            else if (_this.field.getDataType() === DataType.BOOLEAN) {
                return _this.filterBoolean(item);
            }
            else {
                return true;
            }
        }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterString = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var value = this.field.getValue(item);
        return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterNumber = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var numberValue = this.field.getValue(item);
        return numberValue > this.filterValue;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterBoolean = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var booleanValue = this.field.getValue(item);
        return booleanValue === this.filterValue;
    };
    return StructureFilter;
}());
export { StructureFilter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterId;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RDtJQVFDLHlCQUFZLEVBQVksRUFDckIsS0FBWSxFQUNaLFdBQWdCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxXQUFnQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0JBQW9COzs7Ozs7SUFDcEIsZ0NBQU07Ozs7OztJQUFOLFVBQU8sUUFBaUM7UUFBeEMsaUJBbUJDO1FBakJBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUU3QyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDakQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pELE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTixPQUFPLElBQUksQ0FBQzthQUNaO1FBRUYsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxzQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsSUFBc0I7O1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFdkMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxzQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsSUFBc0I7O1lBQ3BDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFN0MsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyx1Q0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBc0I7O1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFOUMsT0FBTyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDOzs7Ozs7O0lBbEVBLG1DQUFvQzs7Ozs7SUFFcEMsZ0NBQXFCOzs7OztJQUVyQixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJJZDogRmlsdGVySWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogRmllbGQ7XG5cblx0cHJpdmF0ZSBmaWx0ZXJWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWx0ZXJJZCxcblx0XHRcdFx0ZmllbGQ6IEZpZWxkLFxuXHRcdFx0XHRmaWx0ZXJWYWx1ZTogYW55KSB7XG5cdFx0dGhpcy5maWx0ZXJJZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldElkKCk7XG5cdH1cblxuXHRnZXRGaWx0ZXJWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cblx0c2V0RmlsdGVyVmFsdWUoZmlsdGVyVmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdC8vIE1vdmUgdG8gY29udGFpbmVyXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLmZpbHRlcigoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyU3RyaW5nKGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maWx0ZXJOdW1iZXIoaXRlbSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maWx0ZXJCb29sZWFuKGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyU3RyaW5nKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTnVtYmVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRjb25zdCBudW1iZXJWYWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gbnVtYmVyVmFsdWUgPiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJCb29sZWFuKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRjb25zdCBib29sZWFuVmFsdWUgPSB0aGlzLmZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGJvb2xlYW5WYWx1ZSA9PT0gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG59XG4iXX0=