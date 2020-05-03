/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnWidthType } from '../column/column-width/column-width-type';
var CompositionWidthCalculator = /** @class */ (function () {
    function CompositionWidthCalculator(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.clone(); }));
    }
    /**
     * @return {?}
     */
    CompositionWidthCalculator.prototype.calculate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.width;
        /** @type {?} */
        var columns = tslib_1.__spread(this.columns);
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        /** @type {?} */
        var newColumns = [];
        columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        }));
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            /** @type {?} */
            var evenWidth_1 = width / columns.length;
            columns.forEach((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            function (column, index) {
                column.setWidth(evenWidth_1);
            }));
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustMinimalWidth = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.isTypeNumber()) {
                if (column.getWidth() < _this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(_this.MIN_COLUMN_WIDTH);
                }
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustPercentageWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var percentageColumns = this.columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypePercentage(); }));
        try {
            for (var _b = tslib_1.__values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var column = _c.value;
                if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                    column.setWidth(this.width * column.getWidth() * 0.01);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustAutoWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var leftWidth = this.width;
        /** @type {?} */
        var autoColumns = [];
        for (var i = 0; i < this.columns.length; i += 1) {
            /** @type {?} */
            var column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            /** @type {?} */
            var splitWidth = leftWidth / autoColumns.length;
            try {
                for (var autoColumns_1 = tslib_1.__values(autoColumns), autoColumns_1_1 = autoColumns_1.next(); !autoColumns_1_1.done; autoColumns_1_1 = autoColumns_1.next()) {
                    var column = autoColumns_1_1.value;
                    column.setWidth(splitWidth);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (autoColumns_1_1 && !autoColumns_1_1.done && (_a = autoColumns_1.return)) _a.call(autoColumns_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    return CompositionWidthCalculator;
}());
export { CompositionWidthCalculator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.source;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9jb21wb3NpdGlvbi13aWR0aC5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTNFO0lBSUMsb0NBQW9CLE1BQTBCLEVBQ25DLEtBQWEsRUFDSixnQkFBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFULENBQVMsRUFBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7O1lBRUssS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUNyQixPQUFPLG9CQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O1lBRzdCLFVBQVUsR0FBdUIsRUFBRTtRQUV2QyxPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE1BQW1CLEVBQUUsS0FBYTtZQUNsRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUIsS0FBSyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXJCLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztnQkFFbkIsV0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTTtZQUV4QyxPQUFPLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE1BQW1CLEVBQUUsS0FBYTtnQkFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztTQUNIO1FBRUQsd0JBQXdCO1FBQ3hCLHFHQUFxRztRQUNyRyxFQUFFO1FBQ0Ysd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUMzRSx1REFBdUQ7UUFDdkQsTUFBTTtRQUNOLEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsTUFBTTtRQUVOLG1EQUFtRDtRQUNuRCxFQUFFO1FBQ0YsZ0NBQWdDO1FBQ2hDLEVBQUU7UUFDRiwwQkFBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLHVEQUFrQjs7Ozs7SUFBMUIsVUFBMkIsT0FBMkI7UUFBdEQsaUJBUUM7UUFQQSxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBbUI7WUFDbkMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDOUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDOUM7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTywwREFBcUI7Ozs7SUFBN0I7OztZQUVPLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUE5QixDQUE4QixFQUFDOztZQUUzRyxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBNUIsSUFBSSxNQUFNLFdBQUE7Z0JBQ2QsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssZUFBZSxDQUFDLFVBQVUsRUFBRTtvQkFDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDdkQ7YUFDRDs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Ozs7SUFFTyxvREFBZTs7OztJQUF2Qjs7O1lBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUN6QixXQUFXLEdBQUcsRUFBRTtRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBRTVDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUU1QixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxlQUFlLENBQUMsSUFBSSxFQUFFO2dCQUNwRCxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7U0FDRDtRQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUNyQixVQUFVLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNOztnQkFFakQsS0FBbUIsSUFBQSxnQkFBQSxpQkFBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7b0JBQTNCLElBQUksTUFBTSx3QkFBQTtvQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM1Qjs7Ozs7Ozs7O1NBQ0Q7SUFDRixDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBM0dELElBMkdDOzs7Ozs7O0lBekdBLDZDQUE2Qzs7Ozs7SUFFakMsNENBQWtDOzs7OztJQUMzQywyQ0FBcUI7Ozs7O0lBQ3JCLHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldpZHRoQ2FsY3VsYXRvciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2U6IEFycmF5PENvbHVtbldpZHRoPixcblx0XHRcdFx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuc291cmNlLm1hcCgoYykgPT4gYy5jbG9uZSgpKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXG5cdFx0bGV0IHdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcblxuXHRcdC8vIGFkanVzdCBtaW4gdmFsdWVcblx0XHR0aGlzLmFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zKTtcblxuXHRcdC8vIHJlbW92ZSBudW1iZXIgY29sdW1uc1xuXHRcdGxldCBuZXdDb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHR3aWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29sdW1ucyA9IG5ld0NvbHVtbnM7XG5cblx0XHQvLyBzcGxpdCBldmVuIGF1dG8gY29sdW1uc1xuXHRcdGlmIChjb2x1bW5zLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0XHRjb25zdCBldmVuV2lkdGggPSB3aWR0aCAvIGNvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKGV2ZW5XaWR0aCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBhZGp1c3QgbnVtYmVyIGNvbHVtbnNcblx0XHQvLyBsZXQgbnVtYmVyQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlTnVtYmVyKCkpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gc29ydCBieSBtaW4gdmFsdWVzXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5zb3J0KChjb2x1bW5PbmU6IENvbHVtbldpZHRoLCBjb2x1bW5Ud286IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gY29sdW1uT25lLmdldFdpZHRoKCkgLSBjb2x1bW5Ud28uZ2V0V2lkdGgoKTtcblx0XHQvLyB9KTtcblx0XHQvL1xuXHRcdC8vIG51bWJlckNvbHVtbnMuZm9yRWFjaCgoKSA9PiB7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyB0aGlzLmFkanVzdE1pbmltYWxXaWR0aChDb2x1bW5XaWR0aFR5cGUuTlVNQkVSKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdEF1dG9XaWR0aCgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPik6IHZvaWQge1xuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5pc1R5cGVOdW1iZXIoKSkge1xuXHRcdFx0XHRpZiAoY29sdW1uLmdldFdpZHRoKCkgPCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpIHtcblx0XHRcdFx0XHRjb2x1bW4uc2V0V2lkdGhBbmRUeXBlKHRoaXMuTUlOX0NPTFVNTl9XSURUSCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0UGVyY2VudGFnZVdpZHRoKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGVyY2VudGFnZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZVBlcmNlbnRhZ2UoKSk7XG5cblx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSA9PT0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0UpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHRoaXMud2lkdGggKiBjb2x1bW4uZ2V0V2lkdGgoKSAqIDAuMDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0QXV0b1dpZHRoKCk6IHZvaWQge1xuXG5cdFx0bGV0IGxlZnRXaWR0aCA9IHRoaXMud2lkdGgsXG5cdFx0XHRhdXRvQ29sdW1ucyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgIT09IENvbHVtbldpZHRoVHlwZS5BVVRPKSB7XG5cdFx0XHRcdGxlZnRXaWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9Db2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXV0b0NvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3Qgc3BsaXRXaWR0aCA9IGxlZnRXaWR0aCAvIGF1dG9Db2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yIChsZXQgY29sdW1uIG9mIGF1dG9Db2x1bW5zKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChzcGxpdFdpZHRoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19