/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelRoot } from '@generic-ui/hermes';
export class CompositionReadModeRoot extends ReadModelRoot {
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
    CompositionReadModeRoot.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionReadModeRoot.prototype.resizeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRbkQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQXlDOzs7Ozs7Ozs7SUFFckYsWUFBWSxHQUErQixFQUN2QixLQUFjLEVBQ2QsVUFBbUMsRUFDbkMsYUFBc0MsRUFDdEMsS0FBYSxFQUNiLFdBQW9CO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUxRLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBRXhDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7OztRQUFDLENBQUMsTUFBd0IsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFDckIsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBb0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7Q0FFRDs7Ozs7O0lBekRHLHdDQUErQjs7Ozs7SUFDL0IsNkNBQW9EOzs7OztJQUNwRCxnREFBdUQ7Ozs7O0lBQ3ZELHdDQUE4Qjs7Ozs7SUFDOUIsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgZXh0ZW5kcyBSZWFkTW9kZWxSb290PENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0Y29uc3RydWN0b3IodWlkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZWFkeTogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVdpZHRoOiBib29sZWFuKSB7XG5cdFx0c3VwZXIodWlkKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdH1cblxuXHRnZXRBbGxDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbENvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi5nZXRIZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVDb2x1bW5zKCk6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24pID0+IGNvbHVtbi5nZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCkpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLndpZHRoIC0gMjtcblx0fVxuXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVhZHk7XG5cdH1cblxuXHRpc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aDtcblx0fVxuXG5cdGVxdWFscyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCA9PT0gY29tcG9zaXRpb24ud2lkdGggJiZcblx0XHRcdHRoaXMucmVzaXplV2lkdGggPT09IGNvbXBvc2l0aW9uLnJlc2l6ZVdpZHRoICYmXG5cdFx0XHR0aGlzLmVxdWFsc0J5Q29sdW1ucyhjb21wb3NpdGlvbi5hbGxDb2x1bW5zKTtcblx0fVxuXG5cdGVxdWFsc0J5Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnMubGVuZ3RoID09PSBjb2x1bW5zLmxlbmd0aDtcblx0fVxuXG59XG4iXX0=