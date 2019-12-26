/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaCssClass } from './schema-css-class';
export class Schema {
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} containerHeight
     * @param {?} verticalGridEnabled
     * @param {?} horizontalGridEnabled
     * @param {?} theme
     * @param {?} columnHeader
     * @param {?} rowColoring
     */
    constructor(width, height, containerHeight, verticalGridEnabled, horizontalGridEnabled, theme, columnHeader, rowColoring) {
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
    getRowColoring() {
        return this.rowColoring;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        return this.containerHeight;
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
    isVerticalGridEnabled() {
        return this.verticalGridEnabled;
    }
    /**
     * @return {?}
     */
    isHorizontalGridEnabled() {
        return this.horizontalGridEnabled;
    }
    /**
     * @return {?}
     */
    getColumnHeader() {
        return this.columnHeader;
    }
    /**
     * @return {?}
     */
    getCssClasses() {
        return new SchemaCssClass(this.isVerticalGridEnabled(), this.isHorizontalGridEnabled(), this.getTheme(), this.getRowColoring());
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxNQUFNLE9BQU8sTUFBTTs7Ozs7Ozs7Ozs7SUFFbEIsWUFBNkIsS0FBYSxFQUN0QixNQUFjLEVBQ2QsZUFBdUIsRUFDdkIsbUJBQTRCLEVBQzVCLHFCQUE4QixFQUM5QixLQUFrQixFQUNsQixZQUFnQyxFQUNoQyxXQUE4QjtRQVByQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFTO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUNsRCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksY0FBYyxDQUN4QixJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDNUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0NBRUQ7Ozs7OztJQW5EWSx1QkFBOEI7Ozs7O0lBQ3ZDLHdCQUErQjs7Ozs7SUFDL0IsaUNBQXdDOzs7OztJQUN4QyxxQ0FBNkM7Ozs7O0lBQzdDLHVDQUErQzs7Ozs7SUFDL0MsdUJBQW1DOzs7OztJQUNuQyw4QkFBaUQ7Ozs7O0lBQ2pELDZCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuL3NjaGVtYS1jb2x1bW4taGVhZGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsR3JpZEVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaG9yaXpvbnRhbEdyaWRFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpIHtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRpc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxHcmlkRW5hYmxlZDtcblx0fVxuXG5cdGlzSG9yaXpvbnRhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkRW5hYmxlZDtcblx0fVxuXG5cdGdldENvbHVtbkhlYWRlcigpOiBTY2hlbWFDb2x1bW5IZWFkZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkhlYWRlcjtcblx0fVxuXG5cdGdldENzc0NsYXNzZXMoKTogU2NoZW1hQ3NzQ2xhc3Mge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ3NzQ2xhc3MoXG5cdFx0XHR0aGlzLmlzVmVydGljYWxHcmlkRW5hYmxlZCgpLFxuXHRcdFx0dGhpcy5pc0hvcml6b250YWxHcmlkRW5hYmxlZCgpLFxuXHRcdFx0dGhpcy5nZXRUaGVtZSgpLFxuXHRcdFx0dGhpcy5nZXRSb3dDb2xvcmluZygpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=