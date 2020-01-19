/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModel } from '@generic-ui/hermes';
var Composition = /** @class */ (function (_super) {
    tslib_1.__extends(Composition, _super);
    function Composition(uid, ready, allColumns, activeColumns, width, resizeWidth) {
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
    Composition.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getAllColumns = /**
     * @return {?}
     */
    function () {
        return this.allColumns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getActiveHeaderColumns = /**
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
    Composition.prototype.getHeaderColumns = /**
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
    Composition.prototype.getTemplateColumns = /**
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
    Composition.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return +this.width - 2;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.ready;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isResizeWidthEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidth;
    };
    /**
     * @param {?} composition
     * @return {?}
     */
    Composition.prototype.equals = /**
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
    Composition.prototype.equalsByColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return this.allColumns.length === columns.length;
    };
    return Composition;
}(ReadModel));
export { Composition };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.resizeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFPNUQ7SUFBaUMsdUNBQVM7SUFFekMscUJBQVksR0FBZ0IsRUFDUixLQUFjLEVBQ2QsVUFBbUMsRUFDbkMsYUFBc0MsRUFDdEMsS0FBYSxFQUNiLFdBQW9CO1FBTHhDLFlBTUMsa0JBQU0sR0FBRyxDQUFDLFNBQ1Y7UUFObUIsV0FBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGlCQUFXLEdBQVgsV0FBVyxDQUFTOztJQUV4QyxDQUFDOzs7O0lBRUQsc0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELG1DQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsNENBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7OztRQUFDLFVBQUMsTUFBd0IsRUFBRSxLQUFhLElBQUssT0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsc0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDckIsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQXdCLEVBQUUsS0FBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELHdDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFDeEIsR0FBRzs7OztRQUFDLFVBQUMsTUFBd0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUEzQyxDQUEyQyxFQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsdUNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsMENBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxxQ0FBZTs7OztJQUFmLFVBQWdCLE9BQWdDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUYsa0JBQUM7QUFBRCxDQUFDLEFBNURELENBQWlDLFNBQVMsR0E0RHpDOzs7Ozs7O0lBekRHLDRCQUErQjs7Ozs7SUFDL0IsaUNBQW9EOzs7OztJQUNwRCxvQ0FBdUQ7Ozs7O0lBQ3ZELDRCQUE4Qjs7Ozs7SUFDOUIsa0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsLCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uIGV4dGVuZHMgUmVhZE1vZGVsIHtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlYWR5OiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplV2lkdGg6IGJvb2xlYW4pIHtcblx0XHRzdXBlcih1aWQpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG5cdGdldEFsbENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHRnZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLmdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKSk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMud2lkdGggLSAyO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcblx0fVxuXG5cdGlzUmVzaXplV2lkdGhFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoO1xuXHR9XG5cblx0ZXF1YWxzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLndpZHRoID09PSBjb21wb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aCA9PT0gY29tcG9zaXRpb24ucmVzaXplV2lkdGggJiZcblx0XHRcdHRoaXMuZXF1YWxzQnlDb2x1bW5zKGNvbXBvc2l0aW9uLmFsbENvbHVtbnMpO1xuXHR9XG5cblx0ZXF1YWxzQnlDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5sZW5ndGggPT09IGNvbHVtbnMubGVuZ3RoO1xuXHR9XG5cbn1cbiJdfQ==