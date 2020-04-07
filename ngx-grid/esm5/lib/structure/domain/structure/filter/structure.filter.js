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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQTtJQVFDLHlCQUFZLEVBQVksRUFDckIsS0FBZ0IsRUFDaEIsV0FBZ0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFdBQWdCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQkFBb0I7Ozs7OztJQUNwQixnQ0FBTTs7Ozs7O0lBQU4sVUFBTyxRQUFpQztRQUF4QyxpQkFTQztRQVBBLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUM3QyxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBdENBLG1DQUFvQzs7Ozs7SUFFcEMsZ0NBQXlCOzs7OztJQUV6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJJZDogRmlsdGVySWQ7XG5cblx0cHJpdmF0ZSBmaWVsZDogVHlwZUZpZWxkO1xuXG5cdHByaXZhdGUgZmlsdGVyVmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3RvcihpZDogRmlsdGVySWQsXG5cdFx0XHRcdGZpZWxkOiBUeXBlRmllbGQsXG5cdFx0XHRcdGZpbHRlclZhbHVlOiBhbnkpIHsgLy8gVE9ETyBub3QgYW55XG5cdFx0dGhpcy5maWx0ZXJJZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWU7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldElkKCk7XG5cdH1cblxuXHRnZXRGaWx0ZXJWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cblx0c2V0RmlsdGVyVmFsdWUoZmlsdGVyVmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdC8vIE1vdmUgdG8gY29udGFpbmVyXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLmZpbHRlcigoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuZmlsdGVyKGl0ZW0sIHRoaXMuZmlsdGVyVmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==