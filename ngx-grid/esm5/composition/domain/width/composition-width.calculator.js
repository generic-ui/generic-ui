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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL3dpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0U7SUFJQyxvQ0FBb0IsTUFBMEIsRUFDbkMsS0FBYSxFQUNKLGdCQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQVQsQ0FBUyxFQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDs7WUFFSyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3JCLE9BQU8sb0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU1QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7WUFHN0IsVUFBVSxHQUF1QixFQUFFO1FBRXZDLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsTUFBbUIsRUFBRSxLQUFhO1lBQ2xELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxQixLQUFLLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNCO2lCQUFNO2dCQUNOLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEI7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxVQUFVLENBQUM7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LDJDQUFxQjs7Ozs7SUFDckIsc0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uV2lkdGggfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aCc7XG5pbXBvcnQgeyBDb2x1bW5XaWR0aFR5cGUgfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC10eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZTogQXJyYXk8Q29sdW1uV2lkdGg+LFxuXHRcdFx0XHRwcml2YXRlIHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTFVNTl9XSURUSDogbnVtYmVyKSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gdGhpcy5zb3VyY2UubWFwKChjKSA9PiBjLmNsb25lKCkpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IEFycmF5PENvbHVtbldpZHRoPiB7XG5cblx0XHRsZXQgd2lkdGggPSB0aGlzLndpZHRoLFxuXHRcdFx0Y29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNdO1xuXG5cdFx0Ly8gYWRqdXN0IG1pbiB2YWx1ZVxuXHRcdHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnMpO1xuXG5cdFx0Ly8gcmVtb3ZlIG51bWJlciBjb2x1bW5zXG5cdFx0bGV0IG5ld0NvbHVtbnM6IEFycmF5PENvbHVtbldpZHRoPiA9IFtdO1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdHdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3Q29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb2x1bW5zID0gbmV3Q29sdW1ucztcblxuXHRcdC8vIHNwbGl0IGV2ZW4gYXV0byBjb2x1bW5zXG5cdFx0aWYgKGNvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW5XaWR0aCA9IHdpZHRoIC8gY29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5XaWR0aCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoZXZlbldpZHRoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIGFkanVzdCBudW1iZXIgY29sdW1uc1xuXHRcdC8vIGxldCBudW1iZXJDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVOdW1iZXIoKSk7XG5cdFx0Ly9cblx0XHQvLyAvLyBzb3J0IGJ5IG1pbiB2YWx1ZXNcblx0XHQvLyBudW1iZXJDb2x1bW5zLnNvcnQoKGNvbHVtbk9uZTogQ29sdW1uV2lkdGgsIGNvbHVtblR3bzogQ29sdW1uV2lkdGgpID0+IHtcblx0XHQvLyBcdHJldHVybiBjb2x1bW5PbmUuZ2V0V2lkdGgoKSAtIGNvbHVtblR3by5nZXRXaWR0aCgpO1xuXHRcdC8vIH0pO1xuXHRcdC8vXG5cdFx0Ly8gbnVtYmVyQ29sdW1ucy5mb3JFYWNoKCgpID0+IHtcblx0XHQvLyB9KTtcblxuXHRcdC8vIHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKENvbHVtbldpZHRoVHlwZS5OVU1CRVIpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RQZXJjZW50YWdlV2lkdGgoKTtcblx0XHQvL1xuXHRcdC8vIHRoaXMuYWRqdXN0QXV0b1dpZHRoKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+KTogdm9pZCB7XG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmlzVHlwZU51bWJlcigpKSB7XG5cdFx0XHRcdGlmIChjb2x1bW4uZ2V0V2lkdGgoKSA8IHRoaXMuTUlOX0NPTFVNTl9XSURUSCkge1xuXHRcdFx0XHRcdGNvbHVtbi5zZXRXaWR0aEFuZFR5cGUodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RQZXJjZW50YWdlV2lkdGgoKTogdm9pZCB7XG5cblx0XHRjb25zdCBwZXJjZW50YWdlQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aCkgPT4gY29sdW1uV2lkdGguaXNUeXBlUGVyY2VudGFnZSgpKTtcblxuXHRcdGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLmNvbHVtbnMpIHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRSkge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgodGhpcy53aWR0aCAqIGNvbHVtbi5nZXRXaWR0aCgpICogMC4wMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGp1c3RBdXRvV2lkdGgoKTogdm9pZCB7XG5cblx0XHRsZXQgbGVmdFdpZHRoID0gdGhpcy53aWR0aCxcblx0XHRcdGF1dG9Db2x1bW5zID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSAhPT0gQ29sdW1uV2lkdGhUeXBlLkFVVE8pIHtcblx0XHRcdFx0bGVmdFdpZHRoIC09IGNvbHVtbi5nZXRXaWR0aCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXV0b0NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdXRvQ29sdW1ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBzcGxpdFdpZHRoID0gbGVmdFdpZHRoIC8gYXV0b0NvbHVtbnMubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKGxldCBjb2x1bW4gb2YgYXV0b0NvbHVtbnMpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHNwbGl0V2lkdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=