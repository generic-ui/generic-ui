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
    ColumnWidthCollection.prototype.getColumns = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3RGO0lBUUMsK0JBQTZCLGdCQUF3QixFQUNsRCxPQUFpQyxFQUNqQyxLQUFtQjtRQURuQix3QkFBQSxFQUFBLFlBQWlDO1FBQ2pDLHNCQUFBLEVBQUEsV0FBbUI7UUFGTyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFHcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDs7WUFDTyxVQUFVLEdBQUcsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFakYsT0FBTyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFFckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxhQUFrQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8seUNBQVM7Ozs7SUFBakI7UUFFQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFFbEMsVUFBVSxHQUFHLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTNHLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8saURBQWlCOzs7OztJQUF6QixVQUEwQixLQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQzs7Ozs7OztJQW5FQSxpREFBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsc0NBQXNCOzs7OztJQUVWLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBiYXNlQ29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXSxcblx0XHRcdFx0d2lkdGg6IG51bWJlciA9IDEwMCkge1xuXHRcdHRoaXMuYmFzZUNvbHVtbldpZHRocyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cdFx0cmV0dXJuIHRoaXMuYmFzZUNvbHVtbldpZHRocztcblx0fVxuXG5cdGdldENvbHVtbnNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0V2lkdGhzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbldpZHRocy5tYXAoYyA9PiBjLmdldFdpZHRoKCkpO1xuXHR9XG5cblx0Z2V0TWluV2lkdGgoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0XHRyZXR1cm4gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmNvbHVtbldpZHRocyk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0c2V0Q29sdW1ucyhjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cdFx0dGhpcy5iYXNlQ29sdW1uV2lkdGhzID0gY29sdW1uQ29uZmlncy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aHMgPSBjb2x1bW5Db25maWdzLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmJhc2VDb2x1bW5XaWR0aHMgJiYgdGhpcy53aWR0aCkge1xuXG5cdFx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yKHRoaXMuYmFzZUNvbHVtbldpZHRocywgdGhpcy53aWR0aCwgdGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdFx0dGhpcy5jb2x1bW5XaWR0aHMgPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0Q29udGFpbmVyV2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmdldE1pbldpZHRoKCkgPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuZ2V0TWluV2lkdGgoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cbn1cbiJdfQ==