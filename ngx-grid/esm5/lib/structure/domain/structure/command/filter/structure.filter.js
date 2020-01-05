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
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
        }
        else {
            return true;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RDtJQVFDLHlCQUFZLEVBQVksRUFDckIsS0FBWSxFQUNaLFdBQWdCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxXQUFnQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0JBQW9COzs7Ozs7SUFDcEIsZ0NBQU07Ozs7OztJQUFOLFVBQU8sUUFBaUM7UUFBeEMsaUJBbUJDO1FBakJBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUU3QyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDakQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pELE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTixPQUFPLElBQUksQ0FBQzthQUNaO1FBRUYsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxzQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsSUFBc0I7O1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Ozs7OztJQUVPLHNDQUFZOzs7OztJQUFwQixVQUFxQixJQUFzQjs7WUFDcEMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUU3QyxPQUFPLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLHVDQUFhOzs7OztJQUFyQixVQUFzQixJQUFzQjs7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUU5QyxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7Ozs7Ozs7SUF0RUEsbUNBQW9DOzs7OztJQUVwQyxnQ0FBcUI7Ozs7O0lBRXJCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcklkOiBGaWx0ZXJJZDtcblxuXHRwcml2YXRlIGZpZWxkOiBGaWVsZDtcblxuXHRwcml2YXRlIGZpbHRlclZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpbHRlcklkLFxuXHRcdFx0XHRmaWVsZDogRmllbGQsXG5cdFx0XHRcdGZpbHRlclZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmZpbHRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0SWQoKTtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRzZXRGaWx0ZXJWYWx1ZShmaWx0ZXJWYWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Ly8gTW92ZSB0byBjb250YWluZXJcblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuZmlsdGVyKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cblx0XHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTdHJpbmcoaXRlbSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlck51bWJlcihpdGVtKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlckJvb2xlYW4oaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJTdHJpbmcoaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJOdW1iZXIoaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiBudW1iZXJWYWx1ZSA+IHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckJvb2xlYW4oaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGJvb2xlYW5WYWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gYm9vbGVhblZhbHVlID09PSB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==