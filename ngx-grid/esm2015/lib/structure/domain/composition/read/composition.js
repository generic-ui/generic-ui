/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModel } from '@generic-ui/hermes';
export class Composition extends ReadModel {
    /**
     * @param {?} uid
     * @param {?} ready
     * @param {?} allColumns
     * @param {?} activeColumns
     * @param {?} width
     * @param {?} resizeWidth
     */
    constructor(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.allColumns = allColumns;
        this.activeColumns = activeColumns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
    /**
     * @return {?}
     */
    getAllColumns() {
        return this.allColumns;
    }
    /**
     * @return {?}
     */
    getActiveHeaderColumns() {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => column.getHeaderCellTemplateWithContext(index)));
    }
    /**
     * @return {?}
     */
    getHeaderColumns() {
        return this.getAllColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => column.getHeaderCellTemplateWithContext(index)));
    }
    /**
     * @return {?}
     */
    getTemplateColumns() {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.getContentCellTemplateWithAccessor()));
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getContainerWidth() {
        return +this.width - 2;
    }
    /**
     * @return {?}
     */
    isReady() {
        return this.ready;
    }
    /**
     * @return {?}
     */
    isResizeWidthEnabled() {
        return this.resizeWidth;
    }
    /**
     * @param {?} composition
     * @return {?}
     */
    equals(composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    equalsByColumns(columns) {
        return this.allColumns.length === columns.length;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.resizeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sV0FBWSxTQUFRLFNBQVM7Ozs7Ozs7OztJQUV6QyxZQUFZLEdBQWdCLEVBQ1IsS0FBYyxFQUNkLFVBQW1DLEVBQ25DLGFBQXNDLEVBQ3RDLEtBQWEsRUFDYixXQUFvQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFMUSxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUV4QyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFDeEIsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQ3JCLEdBQUc7Ozs7O1FBQUMsQ0FBQyxNQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7O1FBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSztZQUN0QyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0NBRUQ7Ozs7OztJQXpERyw0QkFBK0I7Ozs7O0lBQy9CLGlDQUFvRDs7Ozs7SUFDcEQsb0NBQXVEOzs7OztJQUN2RCw0QkFBOEI7Ozs7O0lBQzlCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbiBleHRlbmRzIFJlYWRNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IodWlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZWFkeTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVdpZHRoOiBib29sZWFuKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxuXHRnZXRBbGxDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbENvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24pID0+IGNvbHVtbi5nZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCkpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLndpZHRoIC0gMjtcblx0fVxuXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVhZHk7XG5cdH1cblxuXHRpc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aDtcblx0fVxuXG5cdGVxdWFscyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCA9PT0gY29tcG9zaXRpb24ud2lkdGggJiZcblx0XHRcdHRoaXMucmVzaXplV2lkdGggPT09IGNvbXBvc2l0aW9uLnJlc2l6ZVdpZHRoICYmXG5cdFx0XHR0aGlzLmVxdWFsc0J5Q29sdW1ucyhjb21wb3NpdGlvbi5hbGxDb2x1bW5zKTtcblx0fVxuXG5cdGVxdWFsc0J5Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMubGVuZ3RoID09PSBjb2x1bW5zLmxlbmd0aDtcblx0fVxuXG59XG4iXX0=