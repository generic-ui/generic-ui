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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUd0RjtJQVFDLCtCQUE2QixnQkFBd0IsRUFDbEQsT0FBaUMsRUFDakMsS0FBbUI7UUFEbkIsd0JBQUEsRUFBQSxZQUFpQztRQUNqQyxzQkFBQSxFQUFBLFdBQW1CO1FBRk8scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBR3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9CLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCx5Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksRUFBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7O1lBQ08sVUFBVSxHQUFHLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRWpGLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBRXJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsYUFBa0M7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsaURBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLHlDQUFTOzs7O0lBQWpCO1FBRUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7Z0JBRWxDLFVBQVUsR0FBRyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUUzRyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7OztJQUVPLGlEQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTtRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRiw0QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7Ozs7Ozs7SUF2RUEsaURBQTZDOzs7OztJQUU3Qyw2Q0FBeUM7Ozs7O0lBRXpDLHNDQUFzQjs7Ozs7SUFFVixpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4vY29sdW1uLXdpZHRoJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBiYXNlQ29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXSxcblx0XHRcdFx0d2lkdGg6IG51bWJlciA9IDEwMCkge1xuXHRcdHRoaXMuYmFzZUNvbHVtbldpZHRocyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5iYXNlQ29sdW1uV2lkdGhzO1xuXHR9XG5cblx0Z2V0Q29sdW1uc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aHMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhzLm1hcChjID0+IGMuZ2V0V2lkdGgoKSk7XG5cdH1cblxuXHRnZXRNaW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdHJldHVybiBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblx0XHR0aGlzLmJhc2VDb2x1bW5XaWR0aHMgPSBjb2x1bW5Db25maWdzLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNvbHVtbkNvbmZpZ3MubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuYmFzZUNvbHVtbldpZHRocyAmJiB0aGlzLndpZHRoKSB7XG5cblx0XHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IodGhpcy5iYXNlQ29sdW1uV2lkdGhzLCB0aGlzLndpZHRoLCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0TWluV2lkdGgoKSA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy5nZXRNaW5XaWR0aCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxufVxuIl19