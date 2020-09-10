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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDekcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHdEY7SUFRQywrQkFBNkIsZ0JBQXdCLEVBQ2xELE9BQWlDLEVBQ2pDLEtBQW1CO1FBRG5CLHdCQUFBLEVBQUEsWUFBaUM7UUFDakMsc0JBQUEsRUFBQSxXQUFtQjtRQUZPLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUdwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBWixDQUFZLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYOztZQUNPLFVBQVUsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVqRixPQUFPLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUVyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLGFBQWtDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlEQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyx5Q0FBUzs7OztJQUFqQjtRQUVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O2dCQUVsQyxVQUFVLEdBQUcsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFM0csSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7Ozs7SUFFTyxpREFBaUI7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDOzs7Ozs7O0lBdkVBLGlEQUE2Qzs7Ozs7SUFFN0MsNkNBQXlDOzs7OztJQUV6QyxzQ0FBc0I7Ozs7O0lBRVYsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuL2NvbHVtbi13aWR0aCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuLi8uLi93aWR0aC9jb21wb3NpdGlvbi13aWR0aC5jYWxjdWxhdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGhDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIGJhc2VDb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIGNvbHVtbldpZHRoczogQXJyYXk8Q29sdW1uV2lkdGg+O1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcixcblx0XHRcdFx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdLFxuXHRcdFx0XHR3aWR0aDogbnVtYmVyID0gMTAwKSB7XG5cdFx0dGhpcy5iYXNlQ29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cdFx0dGhpcy5jb2x1bW5XaWR0aHMgPSBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGdldENvbHVtbldpZHRocygpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXHRcdHJldHVybiB0aGlzLmJhc2VDb2x1bW5XaWR0aHM7XG5cdH1cblxuXHRnZXRDb2x1bW5zV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldFdpZHRocygpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5XaWR0aHMubWFwKGMgPT4gYy5nZXRXaWR0aCgpKTtcblx0fVxuXG5cdGdldE1pbldpZHRoKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvcih0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0cmV0dXJuIGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5jb2x1bW5XaWR0aHMpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0dGhpcy5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdHNldENvbHVtbnMoY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXHRcdHRoaXMuYmFzZUNvbHVtbldpZHRocyA9IGNvbHVtbkNvbmZpZ3MubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY29sdW1uQ29uZmlncy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Z2V0TWluQ29sdW1uV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5NSU5fQ09MVU1OX1dJRFRIO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5iYXNlQ29sdW1uV2lkdGhzICYmIHRoaXMud2lkdGgpIHtcblxuXHRcdFx0Y29uc3QgY2FsY3VsYXRvciA9IG5ldyBDb21wb3NpdGlvbldpZHRoQ2FsY3VsYXRvcih0aGlzLmJhc2VDb2x1bW5XaWR0aHMsIHRoaXMud2lkdGgsIHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cblx0XHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY2FsY3VsYXRvci5jYWxjdWxhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5nZXRNaW5XaWR0aCgpID4gd2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLmdldE1pbldpZHRoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG59XG4iXX0=