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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFRM0IsWUFBWSxFQUFZLEVBQ3JCLEtBQWdCLEVBQ2hCLFdBQWdCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQWdCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxRQUFpQztRQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRDs7Ozs7O0lBdENBLG1DQUFvQzs7Ozs7SUFFcEMsZ0NBQXlCOzs7OztJQUV6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmlsdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcklkOiBGaWx0ZXJJZDtcblxuXHRwcml2YXRlIGZpZWxkOiBUeXBlRmllbGQ7XG5cblx0cHJpdmF0ZSBmaWx0ZXJWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWx0ZXJJZCxcblx0XHRcdFx0ZmllbGQ6IFR5cGVGaWVsZCxcblx0XHRcdFx0ZmlsdGVyVmFsdWU6IGFueSkgeyAvLyBUT0RPIG5vdCBhbnlcblx0XHR0aGlzLmZpbHRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0SWQoKTtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRzZXRGaWx0ZXJWYWx1ZShmaWx0ZXJWYWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Ly8gTW92ZSB0byBjb250YWluZXJcblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuZmlsdGVyKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5maWx0ZXIoaXRlbSwgdGhpcy5maWx0ZXJWYWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19