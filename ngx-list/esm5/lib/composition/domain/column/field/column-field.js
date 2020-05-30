/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnField = /** @class */ (function () {
    function ColumnField(fieldId, accessor, dataType, searchAccessor) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
        this.searchAccessor = searchAccessor;
    }
    /**
     * @return {?}
     */
    ColumnField.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ColumnField.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessor(entity);
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getSearchAccessor = /**
     * @return {?}
     */
    function () {
        return this.searchAccessor;
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    return ColumnField;
}());
export { ColumnField };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.searchAccessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.dataType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BO0lBVUMscUJBQVksT0FBc0IsRUFDL0IsUUFBNkIsRUFDN0IsUUFBa0IsRUFDbEIsY0FBbUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELDhCQUFROzs7O0lBQVIsVUFBUyxNQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsdUNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUYsa0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBdENBLDhCQUF3Qzs7Ozs7SUFFeEMsK0JBQStDOzs7OztJQUUvQyxxQ0FBcUQ7Ozs7O0lBRXJELCtCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEFjY2Vzc29yIH0gZnJvbSAnLi9jb2x1bW4tZmllbGQtYWNjZXNzb3InO1xuXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IENvbHVtbkZpZWxkSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3NvcjogQ29sdW1uRmllbGRBY2Nlc3NvcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGU6IERhdGFUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkSWQ6IENvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yLFxuXHRcdFx0XHRkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdHNlYXJjaEFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yKSB7XG5cdFx0dGhpcy5maWVsZElkID0gZmllbGRJZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXHRcdHRoaXMuc2VhcmNoQWNjZXNzb3IgPSBzZWFyY2hBY2Nlc3Nvcjtcblx0fVxuXG5cdGdldElkKCk6IENvbHVtbkZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBDb2x1bW5GaWVsZEFjY2Vzc29yIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldFNlYXJjaEFjY2Vzc29yKCk6IENvbHVtbkZpZWxkQWNjZXNzb3Ige1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cbn1cbiJdfQ==