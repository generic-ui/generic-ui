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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9yZWFkL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUVDLDBCQUE2QixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQ2xELENBQUM7Ozs7O0lBRUQsd0NBQWE7Ozs7SUFBYixVQUFjLE1BQWtCO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsaUNBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUFaRCxJQVlDOzs7Ozs7O0lBVlksa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dzTGlzdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dJZHM6IEFycmF5PHN0cmluZz4pIHtcblx0fVxuXG5cdGlzUm93U2VsZWN0ZWQoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhKHRoaXMucm93SWRzLmZpbmQoKGlkKSA9PiBlbnRpdHkuZXF1YWxzQnlJZChpZCkpKTtcblx0fVxuXG5cdGdldElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dJZHM7XG5cdH1cbn1cbiJdfQ==