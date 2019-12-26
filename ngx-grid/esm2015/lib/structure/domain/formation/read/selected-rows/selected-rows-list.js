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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93cy1saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9mb3JtYXRpb24vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUU1QixZQUE2QixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQ2xELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWtCO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBVlksa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd3NMaXN0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd0lkczogQXJyYXk8c3RyaW5nPikge1xuXHR9XG5cblx0aXNSb3dTZWxlY3RlZChlbnRpdHk6IEl0ZW1FbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEodGhpcy5yb3dJZHMuZmluZCgoaWQpID0+IGVudGl0eS5lcXVhbHNCeUlkKGlkKSkpO1xuXHR9XG5cblx0Z2V0SWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd0lkcztcblx0fVxufVxuIl19