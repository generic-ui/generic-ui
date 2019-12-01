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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBRUMsMEJBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDbEQsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsTUFBYztRQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7OztJQVZZLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dzTGlzdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dJZHM6IEFycmF5PHN0cmluZz4pIHtcblx0fVxuXG5cdGlzUm93U2VsZWN0ZWQoZW50aXR5OiBFbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEodGhpcy5yb3dJZHMuZmluZCgoaWQpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSkpO1xuXHR9XG5cblx0Z2V0SWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd0lkcztcblx0fVxufVxuIl19