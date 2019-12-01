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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFPNUQsTUFBTSxPQUFPLFdBQVksU0FBUSxTQUFTOzs7Ozs7OztJQUV6QyxZQUFZLEdBQWdCLEVBQ1IsS0FBYyxFQUNkLE9BQWdDLEVBQ2hDLEtBQWEsRUFDYixXQUFvQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFKUSxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBRXhDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsR0FBRzs7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixHQUFHOzs7O1FBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSztZQUN0QyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0NBRUQ7Ozs7OztJQS9DRyw0QkFBK0I7Ozs7O0lBQy9CLDhCQUFpRDs7Ozs7SUFDakQsNEJBQThCOzs7OztJQUM5QixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWwsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb24gZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVhZHk6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVXaWR0aDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHVpZCk7XG5cdH1cblxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLmdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKSk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMud2lkdGggLSAyO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcblx0fVxuXG5cdGlzUmVzaXplV2lkdGhFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoO1xuXHR9XG5cblx0ZXF1YWxzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLndpZHRoID09PSBjb21wb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aCA9PT0gY29tcG9zaXRpb24ucmVzaXplV2lkdGggJiZcblx0XHRcdHRoaXMuZXF1YWxzQnlDb2x1bW5zKGNvbXBvc2l0aW9uLmNvbHVtbnMpO1xuXHR9XG5cblx0ZXF1YWxzQnlDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucy5sZW5ndGggPT09IGNvbHVtbnMubGVuZ3RoO1xuXHR9XG5cbn1cbiJdfQ==