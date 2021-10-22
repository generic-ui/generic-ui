/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnHighlightManager = /** @class */ (function () {
    function ColumnHighlightManager() {
        this.enabled = true;
        this.highlightedColumns = new Set(); // should be set of ColumnId
    }
    // should be set of ColumnId
    /**
     * @param {?} columnId
     * @return {?}
     */
    ColumnHighlightManager.prototype.isHighlighted = 
    // should be set of ColumnId
    /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        return this.highlightedColumns.has(columnId.toString());
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    ColumnHighlightManager.prototype.toggle = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        if (this.highlightedColumns.has(columnId.toString())) {
            this.highlightedColumns.delete(columnId.toString());
        }
        else {
            this.highlightedColumns.add(columnId.toString());
        }
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    ColumnHighlightManager.prototype.remove = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        this.highlightedColumns.delete(columnId.toString());
    };
    return ColumnHighlightManager;
}());
export { ColumnHighlightManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUFBO1FBRVMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLHVCQUFrQixHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQTRCO0lBaUJsRixDQUFDOzs7Ozs7SUFmQSw4Q0FBYTs7Ozs7O0lBQWIsVUFBYyxRQUFrQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sUUFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDbkQ7YUFBTTtZQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEQ7SUFDRixDQUFDOzs7OztJQUVELHVDQUFNOzs7O0lBQU4sVUFBTyxRQUFrQjtRQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRiw2QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7Ozs7SUFuQkEseUNBQXVCOzs7OztJQUV2QixvREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcblxuZXhwb3J0IGNsYXNzIENvbHVtbkhpZ2hsaWdodE1hbmFnZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IHRydWU7XG5cblx0cHJpdmF0ZSBoaWdobGlnaHRlZENvbHVtbnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpOyAvLyBzaG91bGQgYmUgc2V0IG9mIENvbHVtbklkXG5cblx0aXNIaWdobGlnaHRlZChjb2x1bW5JZDogQ29sdW1uSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oaWdobGlnaHRlZENvbHVtbnMuaGFzKGNvbHVtbklkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0dG9nZ2xlKGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5oYXMoY29sdW1uSWQudG9TdHJpbmcoKSkpIHtcblx0XHRcdHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmRlbGV0ZShjb2x1bW5JZC50b1N0cmluZygpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5hZGQoY29sdW1uSWQudG9TdHJpbmcoKSlcblx0XHR9XG5cdH1cblxuXHRyZW1vdmUoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0dGhpcy5oaWdobGlnaHRlZENvbHVtbnMuZGVsZXRlKGNvbHVtbklkLnRvU3RyaW5nKCkpO1xuXHR9XG59XG4iXX0=