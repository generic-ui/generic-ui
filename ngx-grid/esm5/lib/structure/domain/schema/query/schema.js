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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQ7SUFFQyxnQkFBNkIsS0FBYSxFQUN0QixNQUFjLEVBQ2QsZUFBdUIsRUFDdkIsbUJBQTRCLEVBQzVCLHFCQUE4QixFQUM5QixLQUFrQixFQUNsQixZQUFnQyxFQUNoQyxXQUE4QjtRQVByQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFTO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUNsRCxDQUFDOzs7O0lBRUQsK0JBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCx5QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBCQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsbUNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHlCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0NBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsd0NBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZ0NBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw4QkFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksY0FBYyxDQUN4QixJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDNUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUYsYUFBQztBQUFELENBQUMsQUFyREQsSUFxREM7Ozs7Ozs7SUFuRFksdUJBQThCOzs7OztJQUN2Qyx3QkFBK0I7Ozs7O0lBQy9CLGlDQUF3Qzs7Ozs7SUFDeEMscUNBQTZDOzs7OztJQUM3Qyx1Q0FBK0M7Ozs7O0lBQy9DLHVCQUFtQzs7Ozs7SUFDbkMsOEJBQWlEOzs7OztJQUNqRCw2QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWEge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJIZWlnaHQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEdyaWRFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhvcml6b250YWxHcmlkRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSB7XG5cdH1cblxuXHRnZXRSb3dDb2xvcmluZygpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm93Q29sb3Jpbmc7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxuXHRnZXRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0aXNWZXJ0aWNhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZEVuYWJsZWQ7XG5cdH1cblxuXHRpc0hvcml6b250YWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZEVuYWJsZWQ7XG5cdH1cblxuXHRnZXRDb2x1bW5IZWFkZXIoKTogU2NoZW1hQ29sdW1uSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IZWFkZXI7XG5cdH1cblxuXHRnZXRDc3NDbGFzc2VzKCk6IFNjaGVtYUNzc0NsYXNzIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUNzc0NsYXNzKFxuXHRcdFx0dGhpcy5pc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKSxcblx0XHRcdHRoaXMuaXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKSxcblx0XHRcdHRoaXMuZ2V0VGhlbWUoKSxcblx0XHRcdHRoaXMuZ2V0Um93Q29sb3JpbmcoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19