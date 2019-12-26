/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModel } from '@generic-ui/hermes';
export class Composition extends ReadModel {
    /**
     * @param {?} uid
     * @param {?} ready
     * @param {?} columns
     * @param {?} width
     * @param {?} resizeWidth
     */
    constructor(uid, ready, columns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.columns = columns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @return {?}
     */
    getHeaderColumns() {
        return this.columns
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
        return this.columns
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
            this.equalsByColumns(composition.columns);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    equalsByColumns(columns) {
        return this.columns.length === columns.length;
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
    Composition.prototype.columns;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sV0FBWSxTQUFRLFNBQVM7Ozs7Ozs7O0lBRXpDLFlBQVksR0FBZ0IsRUFDUixLQUFjLEVBQ2QsT0FBZ0MsRUFDaEMsS0FBYSxFQUNiLFdBQW9CO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUpRLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVM7SUFFeEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixHQUFHOzs7OztRQUFDLENBQUMsTUFBd0IsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7Q0FFRDs7Ozs7O0lBL0NHLDRCQUErQjs7Ozs7SUFDL0IsOEJBQWlEOzs7OztJQUNqRCw0QkFBOEI7Ozs7O0lBQzlCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbiBleHRlbmRzIFJlYWRNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IodWlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZWFkeTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVdpZHRoOiBib29sZWFuKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0fVxuXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRnZXRIZWFkZXJDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc1xuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uKSA9PiBjb2x1bW4uZ2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy53aWR0aCAtIDI7XG5cdH1cblxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlYWR5O1xuXHR9XG5cblx0aXNSZXNpemVXaWR0aEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGg7XG5cdH1cblxuXHRlcXVhbHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGggPT09IGNvbXBvc2l0aW9uLndpZHRoICYmXG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoID09PSBjb21wb3NpdGlvbi5yZXNpemVXaWR0aCAmJlxuXHRcdFx0dGhpcy5lcXVhbHNCeUNvbHVtbnMoY29tcG9zaXRpb24uY29sdW1ucyk7XG5cdH1cblxuXHRlcXVhbHNCeUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zLmxlbmd0aCA9PT0gY29sdW1ucy5sZW5ndGg7XG5cdH1cblxufVxuIl19