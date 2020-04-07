/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidth } from './column-width';
import { CompositionContainerWidthCalculator } from '../../width/composition-container-width.calculator';
import { CompositionWidthCalculator } from '../../width/composition-width.calculator';
var ColumnWidthCollection = /** @class */ (function () {
    function ColumnWidthCollection(MIN_COLUMN_WIDTH, columns, width) {
        if (columns === void 0) { columns = []; }
        if (width === void 0) { width = 100; }
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getColumnWidths = /**
     * @return {?}
     */
    function () {
        return this.baseColumnWidths;
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getColumnsWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getWidths = /**
     * @return {?}
     */
    function () {
        return this.columnWidths.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.getWidth(); }));
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getMinWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidthCollection.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.setContainerWidth(width);
        this.calculate();
    };
    /**
     * @param {?} columnConfigs
     * @return {?}
     */
    ColumnWidthCollection.prototype.setColumns = /**
     * @param {?} columnConfigs
     * @return {?}
     */
    function (columnConfigs) {
        this.baseColumnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.columnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.calculate();
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getMinColumnWidth = /**
     * @return {?}
     */
    function () {
        return this.MIN_COLUMN_WIDTH;
    };
    /**
     * @private
     * @return {?}
     */
    ColumnWidthCollection.prototype.calculate = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.baseColumnWidths && this.width) {
            /** @type {?} */
            var calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidthCollection.prototype.setContainerWidth = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (this.getMinWidth() > width) {
            this.width = this.getMinWidth();
        }
        else {
            this.width = width;
        }
        this.calculate();
    };
    return ColumnWidthCollection;
}());
export { ColumnWidthCollection };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.baseColumnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.columnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3RGO0lBUUMsK0JBQTZCLGdCQUF3QixFQUNsRCxPQUFpQyxFQUNqQyxLQUFtQjtRQURuQix3QkFBQSxFQUFBLFlBQWlDO1FBQ2pDLHNCQUFBLEVBQUEsV0FBbUI7UUFGTyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFHcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDs7WUFDTyxVQUFVLEdBQUcsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFakYsT0FBTyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFFckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxhQUFrQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxpREFBaUI7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8seUNBQVM7Ozs7SUFBakI7UUFFQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFFbEMsVUFBVSxHQUFHLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTNHLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8saURBQWlCOzs7OztJQUF6QixVQUEwQixLQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQzs7Ozs7OztJQXZFQSxpREFBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsc0NBQXNCOzs7OztJQUVWLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBiYXNlQ29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXSxcblx0XHRcdFx0d2lkdGg6IG51bWJlciA9IDEwMCkge1xuXHRcdHRoaXMuYmFzZUNvbHVtbldpZHRocyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5iYXNlQ29sdW1uV2lkdGhzO1xuXHR9XG5cblx0Z2V0Q29sdW1uc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aHMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhzLm1hcChjID0+IGMuZ2V0V2lkdGgoKSk7XG5cdH1cblxuXHRnZXRNaW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdHJldHVybiBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblx0XHR0aGlzLmJhc2VDb2x1bW5XaWR0aHMgPSBjb2x1bW5Db25maWdzLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNvbHVtbkNvbmZpZ3MubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuYmFzZUNvbHVtbldpZHRocyAmJiB0aGlzLndpZHRoKSB7XG5cblx0XHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IodGhpcy5iYXNlQ29sdW1uV2lkdGhzLCB0aGlzLndpZHRoLCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0TWluV2lkdGgoKSA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy5nZXRNaW5XaWR0aCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxufVxuIl19