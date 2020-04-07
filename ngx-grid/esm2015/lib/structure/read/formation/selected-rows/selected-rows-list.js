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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3JlYWQvZm9ybWF0aW9uL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQTZCLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBa0I7UUFDL0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNEOzs7Ozs7SUFWWSxrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd3NMaXN0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd0lkczogQXJyYXk8c3RyaW5nPikge1xuXHR9XG5cblx0aXNSb3dTZWxlY3RlZChlbnRpdHk6IEl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEodGhpcy5yb3dJZHMuZmluZCgoaWQpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSkpO1xuXHR9XG5cblx0Z2V0SWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd0lkcztcblx0fVxufVxuIl19