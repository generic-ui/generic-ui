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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBNkIsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUNsRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBVlksa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2VudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd3NMaXN0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd0lkczogQXJyYXk8c3RyaW5nPikge1xuXHR9XG5cblx0aXNSb3dTZWxlY3RlZChlbnRpdHk6IEVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhISh0aGlzLnJvd0lkcy5maW5kKChpZCkgPT4gZW50aXR5LmVxdWFsc0J5SWQoaWQpKSk7XG5cdH1cblxuXHRnZXRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93SWRzO1xuXHR9XG59XG4iXX0=