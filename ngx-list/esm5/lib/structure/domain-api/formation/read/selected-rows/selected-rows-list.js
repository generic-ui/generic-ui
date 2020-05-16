/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectedRowsList = /** @class */ (function () {
    function SelectedRowsList(rowIds) {
        this.rowIds = rowIds;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    SelectedRowsList.prototype.isRowSelected = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return !!(this.rowIds.find((/**
         * @param {?} id
         * @return {?}
         */
        function (id) { return entity.equalsById(id); })));
    };
    /**
     * @return {?}
     */
    SelectedRowsList.prototype.getIds = /**
     * @return {?}
     */
    function () {
        return this.rowIds;
    };
    return SelectedRowsList;
}());
export { SelectedRowsList };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowsList.prototype.rowIds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBRUMsMEJBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDbEQsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsTUFBa0I7UUFDL0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxpQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7Ozs7SUFWWSxrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd3NMaXN0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd0lkczogQXJyYXk8c3RyaW5nPikge1xuXHR9XG5cblx0aXNSb3dTZWxlY3RlZChlbnRpdHk6IEl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEodGhpcy5yb3dJZHMuZmluZCgoaWQpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSkpO1xuXHR9XG5cblx0Z2V0SWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd0lkcztcblx0fVxufVxuIl19