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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUW5EO0lBQTZDLG1EQUF5QztJQUVyRixpQ0FBWSxHQUErQixFQUN2QixLQUFjLEVBQ2QsVUFBbUMsRUFDbkMsYUFBc0MsRUFDdEMsS0FBYSxFQUNiLFdBQW9CO1FBTHhDLFlBTUMsa0JBQU0sR0FBRyxDQUFDLFNBQ1Y7UUFObUIsV0FBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGlCQUFXLEdBQVgsV0FBVyxDQUFTOztJQUV4QyxDQUFDOzs7O0lBRUQsa0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsd0RBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7OztRQUFDLFVBQUMsTUFBd0IsRUFBRSxLQUFhLElBQUssT0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsa0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDckIsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQXdCLEVBQUUsS0FBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELG9EQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFDeEIsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUEzQyxDQUEyQyxFQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbURBQWlCOzs7SUFBakI7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0RBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sV0FBb0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxpREFBZTs7OztJQUFmLFVBQWdCLE9BQWdDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUYsOEJBQUM7QUFBRCxDQUFDLEFBNURELENBQTZDLGFBQWEsR0E0RHpEOzs7Ozs7O0lBekRHLHdDQUErQjs7Ozs7SUFDL0IsNkNBQW9EOzs7OztJQUNwRCxnREFBdUQ7Ozs7O0lBQ3ZELHdDQUE4Qjs7Ozs7SUFDOUIsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0Y29uc3RydWN0b3IodWlkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZWFkeTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVdpZHRoOiBib29sZWFuKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxuXHRnZXRBbGxDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbENvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24pID0+IGNvbHVtbi5nZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCkpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLndpZHRoIC0gMjtcblx0fVxuXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVhZHk7XG5cdH1cblxuXHRpc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aDtcblx0fVxuXG5cdGVxdWFscyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCA9PT0gY29tcG9zaXRpb24ud2lkdGggJiZcblx0XHRcdHRoaXMucmVzaXplV2lkdGggPT09IGNvbXBvc2l0aW9uLnJlc2l6ZVdpZHRoICYmXG5cdFx0XHR0aGlzLmVxdWFsc0J5Q29sdW1ucyhjb21wb3NpdGlvbi5hbGxDb2x1bW5zKTtcblx0fVxuXG5cdGVxdWFsc0J5Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMubGVuZ3RoID09PSBjb2x1bW5zLmxlbmd0aDtcblx0fVxuXG59XG4iXX0=