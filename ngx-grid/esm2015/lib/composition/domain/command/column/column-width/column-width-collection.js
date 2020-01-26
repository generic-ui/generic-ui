/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnWidth } from './column-width';
import { CompositionContainerWidthCalculator } from '../../width/composition-container-width.calculator';
import { CompositionWidthCalculator } from '../../width/composition-width.calculator';
export class ColumnWidthCollection {
    /**
     * @param {?} MIN_COLUMN_WIDTH
     * @param {?=} columns
     * @param {?=} width
     */
    constructor(MIN_COLUMN_WIDTH, columns = [], width = 100) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @return {?}
     */
    getColumnWidths() {
        return this.baseColumnWidths;
    }
    /**
     * @return {?}
     */
    getColumnsWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getWidths() {
        return this.columnWidths.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.getWidth()));
    }
    /**
     * @return {?}
     */
    getMinWidth() {
        /** @type {?} */
        const calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @param {?} columnConfigs
     * @return {?}
     */
    setColumns(columnConfigs) {
        this.baseColumnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.columnWidths = columnConfigs.map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => new ColumnWidth(column.width)));
        this.calculate();
    }
    /**
     * @return {?}
     */
    getMinColumnWidth() {
        return this.MIN_COLUMN_WIDTH;
    }
    /**
     * @private
     * @return {?}
     */
    calculate() {
        if (this.baseColumnWidths && this.width) {
            /** @type {?} */
            const calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    }
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    setContainerWidth(width) {
        if (this.getMinWidth() > width) {
            this.width = this.getMinWidth();
        }
        else {
            this.width = width;
        }
        this.calculate();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDekcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHdEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBUWpDLFlBQTZCLGdCQUF3QixFQUNsRCxVQUErQixFQUFFLEVBQ2pDLFFBQWdCLEdBQUc7UUFGTyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFHcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0osVUFBVSxHQUFHLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRWpGLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBRXJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsYUFBa0M7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLFNBQVM7UUFFaEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7a0JBRWxDLFVBQVUsR0FBRyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUUzRyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLEtBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Q7Ozs7OztJQXZFQSxpREFBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsc0NBQXNCOzs7OztJQUVWLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoIH0gZnJvbSAnLi9jb2x1bW4td2lkdGgnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4uLy4uL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi4vLi4vd2lkdGgvY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBiYXNlQ29sdW1uV2lkdGhzOiBBcnJheTxDb2x1bW5XaWR0aD47XG5cblx0cHJpdmF0ZSBjb2x1bW5XaWR0aHM6IEFycmF5PENvbHVtbldpZHRoPjtcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIsXG5cdFx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXSxcblx0XHRcdFx0d2lkdGg6IG51bWJlciA9IDEwMCkge1xuXHRcdHRoaXMuYmFzZUNvbHVtbldpZHRocyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXHRcdHRoaXMuY29sdW1uV2lkdGhzID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiBuZXcgQ29sdW1uV2lkdGgoY29sdW1uLndpZHRoKSk7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRnZXRDb2x1bW5XaWR0aHMoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblx0XHRyZXR1cm4gdGhpcy5iYXNlQ29sdW1uV2lkdGhzO1xuXHR9XG5cblx0Z2V0Q29sdW1uc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRXaWR0aHMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uV2lkdGhzLm1hcChjID0+IGMuZ2V0V2lkdGgoKSk7XG5cdH1cblxuXHRnZXRNaW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5NSU5fQ09MVU1OX1dJRFRIKTtcblxuXHRcdHJldHVybiBjYWxjdWxhdG9yLmNhbGN1bGF0ZU1pbldpZHRoKHRoaXMuY29sdW1uV2lkdGhzKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblx0XHR0aGlzLmJhc2VDb2x1bW5XaWR0aHMgPSBjb2x1bW5Db25maWdzLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IG5ldyBDb2x1bW5XaWR0aChjb2x1bW4ud2lkdGgpKTtcblx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNvbHVtbkNvbmZpZ3MubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4gbmV3IENvbHVtbldpZHRoKGNvbHVtbi53aWR0aCkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGdldE1pbkNvbHVtbldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuTUlOX0NPTFVNTl9XSURUSDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuYmFzZUNvbHVtbldpZHRocyAmJiB0aGlzLndpZHRoKSB7XG5cblx0XHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3IodGhpcy5iYXNlQ29sdW1uV2lkdGhzLCB0aGlzLndpZHRoLCB0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXG5cdFx0XHR0aGlzLmNvbHVtbldpZHRocyA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0TWluV2lkdGgoKSA+IHdpZHRoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy5nZXRNaW5XaWR0aCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxufVxuIl19