/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaCssClass } from './schema-css-class';
var Schema = /** @class */ (function () {
    function Schema(width, height, containerHeight, verticalGridEnabled, horizontalGridEnabled, theme, columnHeader, rowColoring) {
        this.width = width;
        this.height = height;
        this.containerHeight = containerHeight;
        this.verticalGridEnabled = verticalGridEnabled;
        this.horizontalGridEnabled = horizontalGridEnabled;
        this.theme = theme;
        this.columnHeader = columnHeader;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    Schema.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.containerHeight;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    Schema.prototype.isVerticalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalGridEnabled;
    };
    /**
     * @return {?}
     */
    Schema.prototype.isHorizontalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.horizontalGridEnabled;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getColumnHeader = /**
     * @return {?}
     */
    function () {
        return this.columnHeader;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getCssClasses = /**
     * @return {?}
     */
    function () {
        return new SchemaCssClass(this.isVerticalGridEnabled(), this.isHorizontalGridEnabled(), this.getTheme(), this.getRowColoring());
    };
    return Schema;
}());
export { Schema };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.height;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.verticalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.horizontalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQUVDLGdCQUE2QixLQUFhLEVBQ3RCLE1BQWMsRUFDZCxlQUF1QixFQUN2QixtQkFBNEIsRUFDNUIscUJBQThCLEVBQzlCLEtBQWtCLEVBQ2xCLFlBQWdDLEVBQ2hDLFdBQThCO1FBUHJCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUztRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQVM7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQ2xELENBQUM7Ozs7SUFFRCwrQkFBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHlCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsMEJBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxtQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQseUJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzQ0FBcUI7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx3Q0FBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxnQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDhCQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxjQUFjLENBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUM1QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDckIsQ0FBQztJQUNILENBQUM7SUFFRixhQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7Ozs7OztJQW5EWSx1QkFBOEI7Ozs7O0lBQ3ZDLHdCQUErQjs7Ozs7SUFDL0IsaUNBQXdDOzs7OztJQUN4QyxxQ0FBNkM7Ozs7O0lBQzdDLHVDQUErQzs7Ozs7SUFDL0MsdUJBQW1DOzs7OztJQUNuQyw4QkFBaUQ7Ozs7O0lBQ2pELDZCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuL3NjaGVtYS1jb2x1bW4taGVhZGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsR3JpZEVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaG9yaXpvbnRhbEdyaWRFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpIHtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRpc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxHcmlkRW5hYmxlZDtcblx0fVxuXG5cdGlzSG9yaXpvbnRhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkRW5hYmxlZDtcblx0fVxuXG5cdGdldENvbHVtbkhlYWRlcigpOiBTY2hlbWFDb2x1bW5IZWFkZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkhlYWRlcjtcblx0fVxuXG5cdGdldENzc0NsYXNzZXMoKTogU2NoZW1hQ3NzQ2xhc3Mge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ3NzQ2xhc3MoXG5cdFx0XHR0aGlzLmlzVmVydGljYWxHcmlkRW5hYmxlZCgpLFxuXHRcdFx0dGhpcy5pc0hvcml6b250YWxHcmlkRW5hYmxlZCgpLFxuXHRcdFx0dGhpcy5nZXRUaGVtZSgpLFxuXHRcdFx0dGhpcy5nZXRSb3dDb2xvcmluZygpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=