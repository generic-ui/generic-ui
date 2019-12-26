/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModel } from '@generic-ui/hermes';
var Composition = /** @class */ (function (_super) {
    tslib_1.__extends(Composition, _super);
    function Composition(uid, ready, columns, width, resizeWidth) {
        var _this = _super.call(this, uid) || this;
        _this.ready = ready;
        _this.columns = columns;
        _this.width = width;
        _this.resizeWidth = resizeWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    Composition.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.columns
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
        return this.columns
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
            this.equalsByColumns(composition.columns);
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
        return this.columns.length === columns.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFPNUQ7SUFBaUMsdUNBQVM7SUFFekMscUJBQVksR0FBZ0IsRUFDUixLQUFjLEVBQ2QsT0FBZ0MsRUFDaEMsS0FBYSxFQUNiLFdBQW9CO1FBSnhDLFlBS0Msa0JBQU0sR0FBRyxDQUFDLFNBQ1Y7UUFMbUIsV0FBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGFBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLFdBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBVyxHQUFYLFdBQVcsQ0FBUzs7SUFFeEMsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsc0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsR0FBRzs7Ozs7UUFBQyxVQUFDLE1BQXdCLEVBQUUsS0FBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELHdDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXdCLElBQUssT0FBQSxNQUFNLENBQUMsa0NBQWtDLEVBQUUsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHVDQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw2QkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBDQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSztZQUN0QyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscUNBQWU7Ozs7SUFBZixVQUFnQixPQUFnQztRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQWxERCxDQUFpQyxTQUFTLEdBa0R6Qzs7Ozs7OztJQS9DRyw0QkFBK0I7Ozs7O0lBQy9CLDhCQUFpRDs7Ozs7SUFDakQsNEJBQThCOzs7OztJQUM5QixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWwsIEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb24gZXh0ZW5kcyBSZWFkTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVhZHk6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVXaWR0aDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHVpZCk7XG5cdH1cblxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4uZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQoaW5kZXgpKTtcblx0fVxuXG5cdGdldFRlbXBsYXRlQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLmdldENvbnRlbnRDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IoKSk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK3RoaXMud2lkdGggLSAyO1xuXHR9XG5cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcblx0fVxuXG5cdGlzUmVzaXplV2lkdGhFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlc2l6ZVdpZHRoO1xuXHR9XG5cblx0ZXF1YWxzKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLndpZHRoID09PSBjb21wb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0dGhpcy5yZXNpemVXaWR0aCA9PT0gY29tcG9zaXRpb24ucmVzaXplV2lkdGggJiZcblx0XHRcdHRoaXMuZXF1YWxzQnlDb2x1bW5zKGNvbXBvc2l0aW9uLmNvbHVtbnMpO1xuXHR9XG5cblx0ZXF1YWxzQnlDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucy5sZW5ndGggPT09IGNvbHVtbnMubGVuZ3RoO1xuXHR9XG5cbn1cbiJdfQ==