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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9mb3JtYXRpb24vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFFQywwQkFBNkIsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUNsRCxDQUFDOzs7OztJQUVELHdDQUFhOzs7O0lBQWIsVUFBYyxNQUFrQjtRQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7OztJQVZZLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dzTGlzdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dJZHM6IEFycmF5PHN0cmluZz4pIHtcblx0fVxuXG5cdGlzUm93U2VsZWN0ZWQoZW50aXR5OiBJdGVtRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhKHRoaXMucm93SWRzLmZpbmQoKGlkKSA9PiBlbnRpdHkuZXF1YWxzQnlJZChpZCkpKTtcblx0fVxuXG5cdGdldElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dJZHM7XG5cdH1cbn1cbiJdfQ==