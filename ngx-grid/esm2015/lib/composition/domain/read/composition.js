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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBTzVELE1BQU0sT0FBTyxXQUFZLFNBQVEsU0FBUzs7Ozs7Ozs7O0lBRXpDLFlBQVksR0FBZ0IsRUFDUixLQUFjLEVBQ2QsVUFBbUMsRUFDbkMsYUFBc0MsRUFDdEMsS0FBYSxFQUNiLFdBQW9CO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUxRLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBRXhDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7OztRQUFDLENBQUMsTUFBd0IsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDckIsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7Q0FFRDs7Ozs7O0lBekRHLDRCQUErQjs7Ozs7SUFDL0IsaUNBQW9EOzs7OztJQUNwRCxvQ0FBdUQ7Ozs7O0lBQ3ZELDRCQUE4Qjs7Ozs7SUFDOUIsa0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsLCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uIGV4dGVuZHMgUmVhZE1vZGVsIHtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlYWR5OiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplV2lkdGg6IGJvb2xlYW4pIHtcblx0XHRzdXBlcih1aWQpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG5cdGdldEFsbENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHRnZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLmdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKSk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMud2lkdGggLSAyO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcblx0fVxuXG5cdGlzUmVzaXplV2lkdGhFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoO1xuXHR9XG5cblx0ZXF1YWxzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLndpZHRoID09PSBjb21wb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aCA9PT0gY29tcG9zaXRpb24ucmVzaXplV2lkdGggJiZcblx0XHRcdHRoaXMuZXF1YWxzQnlDb2x1bW5zKGNvbXBvc2l0aW9uLmFsbENvbHVtbnMpO1xuXHR9XG5cblx0ZXF1YWxzQnlDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucy5sZW5ndGggPT09IGNvbHVtbnMubGVuZ3RoO1xuXHR9XG5cbn1cbiJdfQ==