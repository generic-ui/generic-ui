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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBTzVEO0lBQWlDLHVDQUFTO0lBRXpDLHFCQUFZLEdBQWdCLEVBQ1IsS0FBYyxFQUNkLE9BQWdDLEVBQ2hDLEtBQWEsRUFDYixXQUFvQjtRQUp4QyxZQUtDLGtCQUFNLEdBQUcsQ0FBQyxTQUNWO1FBTG1CLFdBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxhQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNoQyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVcsR0FBWCxXQUFXLENBQVM7O0lBRXhDLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHNDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUF3QixFQUFFLEtBQWEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCx3Q0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztJQUN0RixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCx1Q0FBaUI7OztJQUFqQjtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsNkJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCwwQ0FBb0I7OztJQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsV0FBVztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHFDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUFsREQsQ0FBaUMsU0FBUyxHQWtEekM7Ozs7Ozs7SUEvQ0csNEJBQStCOzs7OztJQUMvQiw4QkFBaUQ7Ozs7O0lBQ2pELDRCQUE4Qjs7Ozs7SUFDOUIsa0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsLCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uIGV4dGVuZHMgUmVhZE1vZGVsIHtcblxuXHRjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlYWR5OiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplV2lkdGg6IGJvb2xlYW4pIHtcblx0XHRzdXBlcih1aWQpO1xuXHR9XG5cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdGdldEhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gY29sdW1uLmdldEhlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc1xuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24pID0+IGNvbHVtbi5nZXRDb250ZW50Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKCkpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICt0aGlzLndpZHRoIC0gMjtcblx0fVxuXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVhZHk7XG5cdH1cblxuXHRpc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aDtcblx0fVxuXG5cdGVxdWFscyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCA9PT0gY29tcG9zaXRpb24ud2lkdGggJiZcblx0XHRcdHRoaXMucmVzaXplV2lkdGggPT09IGNvbXBvc2l0aW9uLnJlc2l6ZVdpZHRoICYmXG5cdFx0XHR0aGlzLmVxdWFsc0J5Q29sdW1ucyhjb21wb3NpdGlvbi5jb2x1bW5zKTtcblx0fVxuXG5cdGVxdWFsc0J5Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnMubGVuZ3RoID09PSBjb2x1bW5zLmxlbmd0aDtcblx0fVxuXG59XG4iXX0=