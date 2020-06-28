/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Filter = /** @class */ (function () {
    function Filter(filterId, fieldId, filterTypeId, filterValue) {
        this.filterId = filterId;
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    Filter.prototype.getFilterId = /**
     * @return {?}
     */
    function () {
        return this.filterId;
    };
    /**
     * @return {?}
     */
    Filter.prototype.getFilterTypeId = /**
     * @return {?}
     */
    function () {
        return this.filterTypeId;
    };
    /**
     * @return {?}
     */
    Filter.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    Filter.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    return Filter;
}());
export { Filter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Filter.prototype.filterId;
    /**
     * @type {?}
     * @private
     */
    Filter.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    Filter.prototype.filterTypeId;
    /**
     * @type {?}
     * @private
     */
    Filter.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBVUMsZ0JBQVksUUFBa0IsRUFDM0IsT0FBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsV0FBZ0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDRCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0NBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwyQkFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELCtCQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUYsYUFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7SUFsQ0EsMEJBQW9DOzs7OztJQUVwQyx5QkFBa0M7Ozs7O0lBRWxDLDhCQUE0Qzs7Ozs7SUFFNUMsNkJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLmlkJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJJZDogRmlsdGVySWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKGZpbHRlcklkOiBGaWx0ZXJJZCxcblx0XHRcdFx0ZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsXG5cdFx0XHRcdGZpbHRlclZhbHVlOiBhbnkpIHsgLy8gVE9ETyBub3QgYW55XG5cdFx0dGhpcy5maWx0ZXJJZCA9IGZpbHRlcklkO1xuXHRcdHRoaXMuZmllbGRJZCA9IGZpZWxkSWQ7XG5cdFx0dGhpcy5maWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cdFx0dGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlO1xuXHR9XG5cblx0Z2V0RmlsdGVySWQoKTogRmlsdGVySWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcklkO1xuXHR9XG5cblx0Z2V0RmlsdGVyVHlwZUlkKCk6IEZpbHRlclR5cGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUlkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0RmlsdGVyVmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG59XG4iXX0=