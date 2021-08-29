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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUzRTtJQUlDLG9DQUFvQixNQUEwQixFQUNuQyxLQUFhLEVBQ0osZ0JBQXdCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLEVBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsOENBQVM7OztJQUFUOztZQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDckIsT0FBTyxvQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7OztZQUczQixVQUFVLEdBQXVCLEVBQUU7UUFFekMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxNQUFtQixFQUFFLEtBQWE7WUFDbEQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLFVBQVUs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OztJQUMzQywyQ0FBcUI7Ozs7O0lBQ3JCLHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uV2lkdGhUeXBlIH0gZnJvbSAnLi4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldpZHRoQ2FsY3VsYXRvciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2U6IEFycmF5PENvbHVtbldpZHRoPixcblx0XHRcdFx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IE1JTl9DT0xVTU5fV0lEVEg6IG51bWJlcikge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuc291cmNlLm1hcCgoYykgPT4gYy5jbG9uZSgpKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiBBcnJheTxDb2x1bW5XaWR0aD4ge1xuXG5cdFx0bGV0IHdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcblxuXHRcdC8vIGFkanVzdCBtaW4gdmFsdWVcblx0XHR0aGlzLmFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zKTtcblxuXHRcdC8vIHJlbW92ZSBudW1iZXIgY29sdW1uc1xuXHRcdGNvbnN0IG5ld0NvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiA9IFtdO1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdHdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3Q29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb2x1bW5zID0gbmV3Q29sdW1ucztcblxuXHRcdC8vIHNwbGl0IGV2ZW4gYXV0byBjb2x1bW5zXG5cdFx0aWYgKGNvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW5XaWR0aCA9IHdpZHRoIC8gY29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoZXZlbldpZHRoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIGFkanVzdCBudW1iZXIgY29sdW1uc1xuXHRcdC8vIGxldCBudW1iZXJDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSk7XG5cdFx0Ly9cblx0XHQvLyAvLyBzb3J0IGJ5IG1pbiB2YWx1ZXNcblx0XHQvLyBudW1iZXJDb2x1bW5zLnNvcnQoKGNvbHVtbk9uZTogQ29sdW1uV2lkdGgsIGNvbHVtblR3bzogQ29sdW1uV2lkdGgpID0+IHtcblx0XHQvLyBcdHJldHVybiBjb2x1bW5PbmUuZ2V0V2lkdGgoKSAtIGNvbHVtblR3by5nZXRXaWR0aCgpO1xuXHRcdC8vIH0pO1xuXHRcdC8vXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5mb3JFYWNoKCgpID0+IHtcblx0XHQvLyB9KTtcblxuXHRcdC8vIHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKENvbHVtbldpZHRoVHlwZS5OVU1CRVIpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RQZXJjZW50YWdlV2lkdGgoKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0QXV0b1dpZHRoKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+KTogdm9pZCB7XG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdGlmIChjb2x1bW4uZ2V0V2lkdGgoKSA8IHRoaXMuTUlOX0NPTFVNTl9XSURUSCkge1xuXHRcdFx0XHRcdGNvbHVtbi5zZXRXaWR0aEFuZFR5cGUodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RQZXJjZW50YWdlV2lkdGgoKTogdm9pZCB7XG5cblx0XHRjb25zdCBwZXJjZW50YWdlQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlUGVyY2VudGFnZSgpKTtcblxuXHRcdGZvciAoY29uc3QgY29sdW1uIG9mIHRoaXMuY29sdW1ucykge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgPT09IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aCh0aGlzLndpZHRoICogY29sdW1uLmdldFdpZHRoKCkgKiAwLjAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdEF1dG9XaWR0aCgpOiB2b2lkIHtcblxuXHRcdGxldCBsZWZ0V2lkdGggPSB0aGlzLndpZHRoO1xuXHRcdGNvbnN0IGF1dG9Db2x1bW5zID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaV07XG5cblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpICE9PSBDb2x1bW5XaWR0aFR5cGUuQVVUTykge1xuXHRcdFx0XHRsZWZ0V2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdXRvQ29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF1dG9Db2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHNwbGl0V2lkdGggPSBsZWZ0V2lkdGggLyBhdXRvQ29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoY29uc3QgY29sdW1uIG9mIGF1dG9Db2x1bW5zKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChzcGxpdFdpZHRoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19