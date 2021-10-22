/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ColumnHighlightManager {
    constructor() {
        this.enabled = true;
        this.highlightedColumns = new Set(); // should be set of ColumnId
    }
    // should be set of ColumnId
    /**
     * @param {?} columnId
     * @return {?}
     */
    isHighlighted(columnId) {
        return this.highlightedColumns.has(columnId.toString());
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    toggle(columnId) {
        if (this.highlightedColumns.has(columnId.toString())) {
            this.highlightedColumns.delete(columnId.toString());
        }
        else {
            this.highlightedColumns.add(columnId.toString());
        }
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    remove(columnId) {
        this.highlightedColumns.delete(columnId.toString());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnHighlightManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ColumnHighlightManager.prototype.highlightedColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRVMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLHVCQUFrQixHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQTRCO0lBaUJsRixDQUFDOzs7Ozs7SUFmQSxhQUFhLENBQUMsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ25EO2FBQU07WUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2hEO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Q7Ozs7OztJQW5CQSx5Q0FBdUI7Ozs7O0lBRXZCLG9EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhpZ2hsaWdodGVkQ29sdW1uczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7IC8vIHNob3VsZCBiZSBzZXQgb2YgQ29sdW1uSWRcblxuXHRpc0hpZ2hsaWdodGVkKGNvbHVtbklkOiBDb2x1bW5JZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5oYXMoY29sdW1uSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHR0b2dnbGUoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmhhcyhjb2x1bW5JZC50b1N0cmluZygpKSkge1xuXHRcdFx0dGhpcy5oaWdobGlnaHRlZENvbHVtbnMuZGVsZXRlKGNvbHVtbklkLnRvU3RyaW5nKCkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmFkZChjb2x1bW5JZC50b1N0cmluZygpKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZShjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5kZWxldGUoY29sdW1uSWQudG9TdHJpbmcoKSk7XG5cdH1cbn1cbiJdfQ==