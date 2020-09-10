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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFuRDtJQUE2QyxtREFBeUM7SUFFckYsaUNBQVksR0FBK0IsRUFDdkIsS0FBYyxFQUNkLFVBQW1DLEVBQ25DLGFBQXNDLEVBQ3RDLEtBQWEsRUFDYixXQUFvQjtRQUx4QyxZQU1DLGtCQUFNLEdBQUcsQ0FBQyxTQUNWO1FBTm1CLFdBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxnQkFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFdBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBVyxHQUFYLFdBQVcsQ0FBUzs7SUFFeEMsQ0FBQzs7OztJQUVELGtEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHdEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFDeEIsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQXdCLEVBQUUsS0FBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELGtEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQ3JCLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUF3QixFQUFFLEtBQWEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxvREFBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdCLElBQUssT0FBQSxNQUFNLENBQUMsa0NBQWtDLEVBQUUsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1EQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx5Q0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHNEQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLFdBQW9DO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSztZQUN0QyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixPQUFnQztRQUMvQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUE2QyxhQUFhLEdBNER6RDs7Ozs7OztJQXpERyx3Q0FBK0I7Ozs7O0lBQy9CLDZDQUFvRDs7Ozs7SUFDcEQsZ0RBQXVEOzs7OztJQUN2RCx3Q0FBOEI7Ozs7O0lBQzlCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbFJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVSb290IGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVhZHk6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVXaWR0aDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHVpZCk7XG5cdH1cblxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWxsQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdGdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldEhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uKSA9PiBjb2x1bW4uZ2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy53aWR0aCAtIDI7XG5cdH1cblxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlYWR5O1xuXHR9XG5cblx0aXNSZXNpemVXaWR0aEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGg7XG5cdH1cblxuXHRlcXVhbHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGggPT09IGNvbXBvc2l0aW9uLndpZHRoICYmXG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoID09PSBjb21wb3NpdGlvbi5yZXNpemVXaWR0aCAmJlxuXHRcdFx0dGhpcy5lcXVhbHNCeUNvbHVtbnMoY29tcG9zaXRpb24uYWxsQ29sdW1ucyk7XG5cdH1cblxuXHRlcXVhbHNCeUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmxlbmd0aCA9PT0gY29sdW1ucy5sZW5ndGg7XG5cdH1cblxufVxuIl19