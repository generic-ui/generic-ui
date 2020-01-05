/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
export class StructureFilter {
    /**
     * @param {?} id
     * @param {?} field
     * @param {?} filterValue
     */
    constructor(id, field, filterValue) {
        this.filterId = id;
        this.field = field;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.field.getId();
    }
    /**
     * @return {?}
     */
    getFilterValue() {
        return this.filterValue;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    setFilterValue(filterValue) {
        this.filterValue = filterValue;
    }
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    filter(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.field.getDataType() === DataType.STRING) {
                return this.filterString(item);
            }
            else if (this.field.getDataType() === DataType.NUMBER) {
                return this.filterNumber(item);
            }
            else if (this.field.getDataType() === DataType.BOOLEAN) {
                return this.filterBoolean(item);
            }
            else {
                return true;
            }
        }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterString(item) {
        /** @type {?} */
        const value = this.field.getValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterNumber(item) {
        /** @type {?} */
        const numberValue = this.field.getValue(item);
        return numberValue > this.filterValue;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterBoolean(item) {
        /** @type {?} */
        const booleanValue = this.field.getValue(item);
        return booleanValue === this.filterValue;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUTNCLFlBQVksRUFBWSxFQUNyQixLQUFZLEVBQ1osV0FBZ0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBZ0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFFBQWlDO1FBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFFakQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDeEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDWjtRQUVGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQXNCOztjQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRXZDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsSUFBc0I7O2NBQ3BDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFN0MsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsSUFBc0I7O2NBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFOUMsT0FBTyxZQUFZLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0NBRUQ7Ozs7OztJQXRFQSxtQ0FBb0M7Ozs7O0lBRXBDLGdDQUFxQjs7Ozs7SUFFckIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IEZpZWxkO1xuXG5cdHByaXZhdGUgZmlsdGVyVmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmlsdGVySWQsXG5cdFx0XHRcdGZpZWxkOiBGaWVsZCxcblx0XHRcdFx0ZmlsdGVyVmFsdWU6IGFueSkge1xuXHRcdHRoaXMuZmlsdGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RmlsdGVyVmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG5cdHNldEZpbHRlclZhbHVlKGZpbHRlclZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XG5cdH1cblxuXHQvLyBNb3ZlIHRvIGNvbnRhaW5lclxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5maWx0ZXIoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlclN0cmluZyhpdGVtKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyTnVtYmVyKGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyQm9vbGVhbihpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlclN0cmluZyhpdGVtOiBPcmlnaW5JdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5maWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlck51bWJlcihpdGVtOiBPcmlnaW5JdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgbnVtYmVyVmFsdWUgPSB0aGlzLmZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIG51bWJlclZhbHVlID4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyQm9vbGVhbihpdGVtOiBPcmlnaW5JdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgYm9vbGVhblZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiBib29sZWFuVmFsdWUgPT09IHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19