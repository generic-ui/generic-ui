/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidthType } from '../column/column-width/column-width-type';
export class CompositionWidthCalculator {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} MIN_COLUMN_WIDTH
     */
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => c.clone()));
    }
    /**
     * @return {?}
     */
    calculate() {
        /** @type {?} */
        let width = this.width;
        /** @type {?} */
        let columns = [...this.columns];
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        /** @type {?} */
        let newColumns = [];
        columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
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
            const evenWidth = width / columns.length;
            columns.forEach((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            (column, index) => {
                column.setWidth(evenWidth);
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
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    adjustMinimalWidth(columns) {
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    adjustPercentageWidth() {
        /** @type {?} */
        const percentageColumns = this.columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        (columnWidth) => columnWidth.isTypePercentage()));
        for (let column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    adjustAutoWidth() {
        /** @type {?} */
        let leftWidth = this.width;
        /** @type {?} */
        let autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            /** @type {?} */
            let column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            /** @type {?} */
            const splitWidth = leftWidth / autoColumns.length;
            for (let column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL3dpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUzRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFJdEMsWUFBb0IsTUFBMEIsRUFDbkMsS0FBYSxFQUNKLGdCQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxTQUFTOztZQUVKLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDckIsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7OztZQUc3QixVQUFVLEdBQXVCLEVBQUU7UUFFdkMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxNQUFtQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ3RELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxQixLQUFLLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNCO2lCQUFNO2dCQUNOLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEI7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxVQUFVLENBQUM7UUFFckIsMEJBQTBCO1FBQzFCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2tCQUVuQixTQUFTLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNO1lBRXhDLE9BQU8sQ0FBQyxPQUFPOzs7OztZQUFDLENBQUMsTUFBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztTQUNIO1FBRUQsd0JBQXdCO1FBQ3hCLHFHQUFxRztRQUNyRyxFQUFFO1FBQ0Ysd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUMzRSx1REFBdUQ7UUFDdkQsTUFBTTtRQUNOLEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsTUFBTTtRQUVOLG1EQUFtRDtRQUNuRCxFQUFFO1FBQ0YsZ0NBQWdDO1FBQ2hDLEVBQUU7UUFDRiwwQkFBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE9BQTJCO1FBQ3JELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDdkMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDOUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDOUM7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7O2NBRXRCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUM7UUFFM0csS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDdkQ7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRU8sZUFBZTs7WUFFbEIsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUN6QixXQUFXLEdBQUcsRUFBRTtRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBRTVDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUU1QixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxlQUFlLENBQUMsSUFBSSxFQUFFO2dCQUNwRCxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7U0FDRDtRQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUNyQixVQUFVLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNO1lBRWpELEtBQUssSUFBSSxNQUFNLElBQUksV0FBVyxFQUFFO2dCQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVCO1NBQ0Q7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQXpHQSw2Q0FBNkM7Ozs7O0lBRWpDLDRDQUFrQzs7Ozs7SUFDM0MsMkNBQXFCOzs7OztJQUNyQixzREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcbmltcG9ydCB7IENvbHVtbldpZHRoVHlwZSB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3Ige1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlOiBBcnJheTxDb2x1bW5XaWR0aD4sXG5cdFx0XHRcdHByaXZhdGUgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLnNvdXJjZS5tYXAoKGMpID0+IGMuY2xvbmUoKSk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblxuXHRcdGxldCB3aWR0aCA9IHRoaXMud2lkdGgsXG5cdFx0XHRjb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG5cblx0XHQvLyBhZGp1c3QgbWluIHZhbHVlXG5cdFx0dGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoY29sdW1ucyk7XG5cblx0XHQvLyByZW1vdmUgbnVtYmVyIGNvbHVtbnNcblx0XHRsZXQgbmV3Q29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0d2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdDb2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbHVtbnMgPSBuZXdDb2x1bW5zO1xuXG5cdFx0Ly8gc3BsaXQgZXZlbiBhdXRvIGNvbHVtbnNcblx0XHRpZiAoY29sdW1ucy5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0Y29uc3QgZXZlbldpZHRoID0gd2lkdGggLyBjb2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChldmVuV2lkdGgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gYWRqdXN0IG51bWJlciBjb2x1bW5zXG5cdFx0Ly8gbGV0IG51bWJlckNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpKTtcblx0XHQvL1xuXHRcdC8vIC8vIHNvcnQgYnkgbWluIHZhbHVlc1xuXHRcdC8vIG51bWJlckNvbHVtbnMuc29ydCgoY29sdW1uT25lOiBDb2x1bW5XaWR0aCwgY29sdW1uVHdvOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdC8vIFx0cmV0dXJuIGNvbHVtbk9uZS5nZXRXaWR0aCgpIC0gY29sdW1uVHdvLmdldFdpZHRoKCk7XG5cdFx0Ly8gfSk7XG5cdFx0Ly9cblx0XHQvLyBudW1iZXJDb2x1bW5zLmZvckVhY2goKCkgPT4ge1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gdGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoQ29sdW1uV2lkdGhUeXBlLk5VTUJFUik7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RBdXRvV2lkdGgoKTtcblxuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4pOiB2b2lkIHtcblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0aWYgKGNvbHVtbi5nZXRXaWR0aCgpIDwgdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSB7XG5cdFx0XHRcdFx0Y29sdW1uLnNldFdpZHRoQW5kVHlwZSh0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBlcmNlbnRhZ2VDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVQZXJjZW50YWdlKCkpO1xuXG5cdFx0Zm9yIChsZXQgY29sdW1uIG9mIHRoaXMuY29sdW1ucykge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgPT09IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFKSB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aCh0aGlzLndpZHRoICogY29sdW1uLmdldFdpZHRoKCkgKiAwLjAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdEF1dG9XaWR0aCgpOiB2b2lkIHtcblxuXHRcdGxldCBsZWZ0V2lkdGggPSB0aGlzLndpZHRoLFxuXHRcdFx0YXV0b0NvbHVtbnMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaV07XG5cblx0XHRcdGlmIChjb2x1bW4uZ2V0Q29sdW1uVHlwZSgpICE9PSBDb2x1bW5XaWR0aFR5cGUuQVVUTykge1xuXHRcdFx0XHRsZWZ0V2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdXRvQ29sdW1ucy5wdXNoKGNvbHVtbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF1dG9Db2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHNwbGl0V2lkdGggPSBsZWZ0V2lkdGggLyBhdXRvQ29sdW1ucy5sZW5ndGg7XG5cblx0XHRcdGZvciAobGV0IGNvbHVtbiBvZiBhdXRvQ29sdW1ucykge1xuXHRcdFx0XHRjb2x1bW4uc2V0V2lkdGgoc3BsaXRXaWR0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==