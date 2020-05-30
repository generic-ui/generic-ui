/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            return _this.field.filter(item, _this.filterValue);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQTtJQVFDLHlCQUFZLEVBQVksRUFDckIsS0FBZ0IsRUFDaEIsV0FBZ0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFdBQWdCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQkFBb0I7Ozs7OztJQUNwQixnQ0FBTTs7Ozs7O0lBQU4sVUFBTyxRQUFpQztRQUF4QyxpQkFTQztRQVBBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUM3QyxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBdENBLG1DQUFvQzs7Ozs7SUFFcEMsZ0NBQXlCOzs7OztJQUV6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkO1xuXG5cdHByaXZhdGUgZmllbGQ6IFR5cGVGaWVsZDtcblxuXHRwcml2YXRlIGZpbHRlclZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpbHRlcklkLFxuXHRcdFx0XHRmaWVsZDogVHlwZUZpZWxkLFxuXHRcdFx0XHRmaWx0ZXJWYWx1ZTogYW55KSB7IC8vIFRPRE8gbm90IGFueVxuXHRcdHRoaXMuZmlsdGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RmlsdGVyVmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG5cdHNldEZpbHRlclZhbHVlKGZpbHRlclZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XG5cdH1cblxuXHQvLyBNb3ZlIHRvIGNvbnRhaW5lclxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5maWx0ZXIoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLmZpbHRlcihpdGVtLCB0aGlzLmZpbHRlclZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=