/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelRoot } from '@generic-ui/hermes';
var CompositionReadModeRoot = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionReadModeRoot, _super);
    function CompositionReadModeRoot(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        var _this = _super.call(this, uid) || this;
        _this.ready = ready;
        _this.allColumns = allColumns;
        _this.activeColumns = activeColumns;
        _this.width = width;
        _this.resizeWidth = resizeWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getAllColumns = /**
     * @return {?}
     */
    function () {
        return this.allColumns;
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getActiveHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) { return column.getHeaderCellTemplateWithContext(index); }));
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.getAllColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) { return column.getHeaderCellTemplateWithContext(index); }));
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getTemplateColumns = /**
     * @return {?}
     */
    function () {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.getContentCellTemplateWithAccessor(); }));
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return +this.width - 2;
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.ready;
    };
    /**
     * @return {?}
     */
    CompositionReadModeRoot.prototype.isResizeWidthEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidth;
    };
    /**
     * @param {?} composition
     * @return {?}
     */
    CompositionReadModeRoot.prototype.equals = /**
     * @param {?} composition
     * @return {?}
     */
    function (composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    CompositionReadModeRoot.prototype.equalsByColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return this.allColumns.length === columns.length;
    };
    return CompositionReadModeRoot;
}(ReadModelRoot));
export { CompositionReadModeRoot };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.resizeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRbkQ7SUFBNkMsbURBQXlDO0lBRXJGLGlDQUFZLEdBQStCLEVBQ3ZCLEtBQWMsRUFDZCxVQUFtQyxFQUNuQyxhQUFzQyxFQUN0QyxLQUFhLEVBQ2IsV0FBb0I7UUFMeEMsWUFNQyxrQkFBTSxHQUFHLENBQUMsU0FDVjtRQU5tQixXQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsZ0JBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVcsR0FBWCxXQUFXLENBQVM7O0lBRXhDLENBQUM7Ozs7SUFFRCxrREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx3REFBc0I7OztJQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUF3QixFQUFFLEtBQWEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxrREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTthQUNyQixHQUFHOzs7OztRQUFDLFVBQUMsTUFBd0IsRUFBRSxLQUFhLElBQUssT0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsb0RBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztJQUN0RixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtREFBaUI7OztJQUFqQjtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQseUNBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzREFBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxXQUFvQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsV0FBVztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGlEQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUE1REQsQ0FBNkMsYUFBYSxHQTREekQ7Ozs7Ozs7SUF6REcsd0NBQStCOzs7OztJQUMvQiw2Q0FBb0Q7Ozs7O0lBQ3BELGdEQUF1RDs7Ozs7SUFDdkQsd0NBQThCOzs7OztJQUM5Qiw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlYWR5OiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplV2lkdGg6IGJvb2xlYW4pIHtcblx0XHRzdXBlcih1aWQpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG5cdGdldEFsbENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHRnZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLmdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKSk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMud2lkdGggLSAyO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcblx0fVxuXG5cdGlzUmVzaXplV2lkdGhFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoO1xuXHR9XG5cblx0ZXF1YWxzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLndpZHRoID09PSBjb21wb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aCA9PT0gY29tcG9zaXRpb24ucmVzaXplV2lkdGggJiZcblx0XHRcdHRoaXMuZXF1YWxzQnlDb2x1bW5zKGNvbXBvc2l0aW9uLmFsbENvbHVtbnMpO1xuXHR9XG5cblx0ZXF1YWxzQnlDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5sZW5ndGggPT09IGNvbHVtbnMubGVuZ3RoO1xuXHR9XG5cbn1cbiJdfQ==