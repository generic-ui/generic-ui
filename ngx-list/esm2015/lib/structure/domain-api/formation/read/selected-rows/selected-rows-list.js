/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SelectedRowsList {
    /**
     * @param {?} rowIds
     */
    constructor(rowIds) {
        this.rowIds = rowIds;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    isRowSelected(entity) {
        return !!(this.rowIds.find((/**
         * @param {?} id
         * @return {?}
         */
        (id) => entity.equalsById(id))));
    }
    /**
     * @return {?}
     */
    getIds() {
        return this.rowIds;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowsList.prototype.rowIds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBNkIsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUNsRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFrQjtRQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQVZZLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93c0xpc3Qge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm93SWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cdH1cblxuXHRpc1Jvd1NlbGVjdGVkKGVudGl0eTogSXRlbUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhISh0aGlzLnJvd0lkcy5maW5kKChpZCkgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKSk7XG5cdH1cblxuXHRnZXRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93SWRzO1xuXHR9XG59XG4iXX0=