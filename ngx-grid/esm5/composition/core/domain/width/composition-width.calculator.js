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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUzRTtJQUlDLG9DQUFvQixNQUEwQixFQUNuQyxLQUFhLEVBQ0osZ0JBQXdCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLEVBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsOENBQVM7OztJQUFUOztZQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDckIsT0FBTyxvQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7OztZQUc3QixVQUFVLEdBQXVCLEVBQUU7UUFFdkMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxNQUFtQixFQUFFLEtBQWE7WUFDbEQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLFVBQVUs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SUFDM0MsMkNBQXFCOzs7OztJQUNyQixzREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcbmltcG9ydCB7IENvbHVtbldpZHRoVHlwZSB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3Ige1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlOiBBcnJheTxDb2x1bW5XaWR0aD4sXG5cdFx0XHRcdHByaXZhdGUgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLnNvdXJjZS5tYXAoKGMpID0+IGMuY2xvbmUoKSk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblxuXHRcdGxldCB3aWR0aCA9IHRoaXMud2lkdGgsXG5cdFx0XHRjb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG5cblx0XHQvLyBhZGp1c3QgbWluIHZhbHVlXG5cdFx0dGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1ucyk7XG5cblx0XHQvLyByZW1vdmUgbnVtYmVyIGNvbHVtbnNcblx0XHRsZXQgbmV3Q29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0d2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdDb2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbHVtbnMgPSBuZXdDb2x1bW5zO1xuXG5cdFx0Ly8gc3BsaXQgZXZlbiBhdXRvIGNvbHVtbnNcblx0XHRpZiAoY29sdW1ucy5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0Y29uc3QgZXZlbldpZHRoID0gd2lkdGggLyBjb2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChldmVuV2lkdGgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gYWRqdXN0IG51bWJlciBjb2x1bW5zXG5cdFx0Ly8gbGV0IG51bWJlckNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpKTtcblx0XHQvL1xuXHRcdC8vIC8vIHNvcnQgYnkgbWluIHZhbHVlc1xuXHRcdC8vIG51bWJlckNvbHVtbnMuc29ydCgoY29sdW1uT25lOiBDb2x1bW5XaWR0aCwgY29sdW1uVHdvOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdC8vIFx0cmV0dXJuIGNvbHVtbk9uZS5nZXRXaWR0aCgpIC0gY29sdW1uVHdvLmdldFdpZHRoKCk7XG5cdFx0Ly8gfSk7XG5cdFx0Ly9cblx0XHQvLyBudW1iZXJDb2x1bW5zLmZvckVhY2goKCkgPT4ge1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gdGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoQ29sdW1uV2lkdGhUeXBlLk5VTUJFUik7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RBdXRvV2lkdGgoKTtcblxuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4pOiB2b2lkIHtcblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0aWYgKGNvbHVtbi5nZXRXaWR0aCgpIDwgdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSB7XG5cdFx0XHRcdFx0Y29sdW1uLnNldFdpZHRoQW5kVHlwZSh0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBlcmNlbnRhZ2VDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVQZXJjZW50YWdlKCkpO1xuXG5cdFx0Zm9yIChsZXQgY29sdW1uIG9mIHRoaXMuY29sdW1ucykge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgPT09IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aCh0aGlzLndpZHRoICogY29sdW1uLmdldFdpZHRoKCkgKiAwLjAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdEF1dG9XaWR0aCgpOiB2b2lkIHtcblxuXHRcdGxldCBsZWZ0V2lkdGggPSB0aGlzLndpZHRoLFxuXHRcdFx0YXV0b0NvbHVtbnMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaV07XG5cblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpICE9PSBDb2x1bW5XaWR0aFR5cGUuQVVUTykge1xuXHRcdFx0XHRsZWZ0V2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdXRvQ29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF1dG9Db2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHNwbGl0V2lkdGggPSBsZWZ0V2lkdGggLyBhdXRvQ29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGZvciAobGV0IGNvbHVtbiBvZiBhdXRvQ29sdW1ucykge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoc3BsaXRXaWR0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==