/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            return this.field.filter(item, this.filterValue);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUTNCLFlBQVksRUFBWSxFQUNyQixLQUFnQixFQUNoQixXQUFnQjtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFnQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0NBRUQ7Ozs7OztJQXRDQSxtQ0FBb0M7Ozs7O0lBRXBDLGdDQUF5Qjs7Ozs7SUFFekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IFR5cGVGaWVsZDtcblxuXHRwcml2YXRlIGZpbHRlclZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpbHRlcklkLFxuXHRcdFx0XHRmaWVsZDogVHlwZUZpZWxkLFxuXHRcdFx0XHRmaWx0ZXJWYWx1ZTogYW55KSB7IC8vIFRPRE8gbm90IGFueVxuXHRcdHRoaXMuZmlsdGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RmlsdGVyVmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG5cdHNldEZpbHRlclZhbHVlKGZpbHRlclZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XG5cdH1cblxuXHQvLyBNb3ZlIHRvIGNvbnRhaW5lclxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5maWx0ZXIoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmZpbHRlcihpdGVtLCB0aGlzLmZpbHRlclZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=