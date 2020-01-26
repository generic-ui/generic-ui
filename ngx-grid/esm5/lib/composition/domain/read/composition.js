/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModel } from '@generic-ui/hermes';
var Composition = /** @class */ (function (_super) {
    tslib_1.__extends(Composition, _super);
    function Composition(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        var _this = _super.call(this, uid) || this;
        _this.ready = ready;
        _this.allColumns = allColumns;
        _this.activeColumns = activeColumns;
        _this.width = width;
        _this.resizeWidth = resizeWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    Composition.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getAllColumns = /**
     * @return {?}
     */
    function () {
        return this.allColumns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getActiveHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) { return column.getHeaderCellTemplateWithContext(index); }));
    };
    /**
     * @return {?}
     */
    Composition.prototype.getHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.getAllColumns()
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) { return column.getHeaderCellTemplateWithContext(index); }));
    };
    /**
     * @return {?}
     */
    Composition.prototype.getTemplateColumns = /**
     * @return {?}
     */
    function () {
        return this.getActiveColumns()
            .map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.getContentCellTemplateWithAccessor(); }));
    };
    /**
     * @return {?}
     */
    Composition.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return +this.width - 2;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.ready;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isResizeWidthEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidth;
    };
    /**
     * @param {?} composition
     * @return {?}
     */
    Composition.prototype.equals = /**
     * @param {?} composition
     * @return {?}
     */
    function (composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Composition.prototype.equalsByColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return this.allColumns.length === columns.length;
    };
    return Composition;
}(ReadModel));
export { Composition };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9jb21wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQU81RDtJQUFpQyx1Q0FBUztJQUV6QyxxQkFBWSxHQUFnQixFQUNSLEtBQWMsRUFDZCxVQUFtQyxFQUNuQyxhQUFzQyxFQUN0QyxLQUFhLEVBQ2IsV0FBb0I7UUFMeEMsWUFNQyxrQkFBTSxHQUFHLENBQUMsU0FDVjtRQU5tQixXQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsZ0JBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVcsR0FBWCxXQUFXLENBQVM7O0lBRXhDLENBQUM7Ozs7SUFFRCxzQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsbUNBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw0Q0FBc0I7OztJQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUF3QixFQUFFLEtBQWEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxzQ0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTthQUNyQixHQUFHOzs7OztRQUFDLFVBQUMsTUFBd0IsRUFBRSxLQUFhLElBQUssT0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsd0NBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN4QixHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztJQUN0RixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCx1Q0FBaUI7OztJQUFqQjtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsNkJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCwwQ0FBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsV0FBVztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELHFDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUE1REQsQ0FBaUMsU0FBUyxHQTREekM7Ozs7Ozs7SUF6REcsNEJBQStCOzs7OztJQUMvQixpQ0FBb0Q7Ozs7O0lBQ3BELG9DQUF1RDs7Ozs7SUFDdkQsNEJBQThCOzs7OztJQUM5QixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWwsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb24gZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVhZHk6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVXaWR0aDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHVpZCk7XG5cdH1cblxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWxsQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdGdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldEhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uKSA9PiBjb2x1bW4uZ2V0Q29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy53aWR0aCAtIDI7XG5cdH1cblxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlYWR5O1xuXHR9XG5cblx0aXNSZXNpemVXaWR0aEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGg7XG5cdH1cblxuXHRlcXVhbHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGggPT09IGNvbXBvc2l0aW9uLndpZHRoICYmXG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoID09PSBjb21wb3NpdGlvbi5yZXNpemVXaWR0aCAmJlxuXHRcdFx0dGhpcy5lcXVhbHNCeUNvbHVtbnMoY29tcG9zaXRpb24uYWxsQ29sdW1ucyk7XG5cdH1cblxuXHRlcXVhbHNCeUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmxlbmd0aCA9PT0gY29sdW1ucy5sZW5ndGg7XG5cdH1cblxufVxuIl19