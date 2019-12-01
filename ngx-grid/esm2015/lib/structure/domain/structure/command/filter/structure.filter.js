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
        return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUTNCLFlBQVksRUFBWSxFQUNyQixLQUFZLEVBQ1osV0FBZ0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBZ0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFFBQWlDO1FBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFFakQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDeEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDWjtRQUVGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQXNCOztjQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRXZDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQXNCOztjQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTdDLE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLElBQXNCOztjQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTlDLE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQztDQUVEOzs7Ozs7SUFsRUEsbUNBQW9DOzs7OztJQUVwQyxnQ0FBcUI7Ozs7O0lBRXJCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcklkOiBGaWx0ZXJJZDtcblxuXHRwcml2YXRlIGZpZWxkOiBGaWVsZDtcblxuXHRwcml2YXRlIGZpbHRlclZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpbHRlcklkLFxuXHRcdFx0XHRmaWVsZDogRmllbGQsXG5cdFx0XHRcdGZpbHRlclZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmZpbHRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0SWQoKTtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRzZXRGaWx0ZXJWYWx1ZShmaWx0ZXJWYWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Ly8gTW92ZSB0byBjb250YWluZXJcblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuZmlsdGVyKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cblx0XHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maWx0ZXJTdHJpbmcoaXRlbSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlck51bWJlcihpdGVtKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlckJvb2xlYW4oaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJTdHJpbmcoaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5maWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJOdW1iZXIoaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdHJldHVybiBudW1iZXJWYWx1ZSA+IHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckJvb2xlYW4oaXRlbTogT3JpZ2luSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGJvb2xlYW5WYWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRyZXR1cm4gYm9vbGVhblZhbHVlID09PSB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==