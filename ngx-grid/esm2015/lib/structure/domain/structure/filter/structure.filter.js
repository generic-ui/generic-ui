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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUTNCLFlBQVksRUFBWSxFQUNyQixLQUFnQixFQUNoQixXQUFnQjtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFnQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0NBRUQ7Ozs7OztJQXRDQSxtQ0FBb0M7Ozs7O0lBRXBDLGdDQUF5Qjs7Ozs7SUFFekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcklkOiBGaWx0ZXJJZDtcblxuXHRwcml2YXRlIGZpZWxkOiBUeXBlRmllbGQ7XG5cblx0cHJpdmF0ZSBmaWx0ZXJWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWx0ZXJJZCxcblx0XHRcdFx0ZmllbGQ6IFR5cGVGaWVsZCxcblx0XHRcdFx0ZmlsdGVyVmFsdWU6IGFueSkgeyAvLyBUT0RPIG5vdCBhbnlcblx0XHR0aGlzLmZpbHRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0SWQoKTtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRzZXRGaWx0ZXJWYWx1ZShmaWx0ZXJWYWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Ly8gTW92ZSB0byBjb250YWluZXJcblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuZmlsdGVyKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5maWx0ZXIoaXRlbSwgdGhpcy5maWx0ZXJWYWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19