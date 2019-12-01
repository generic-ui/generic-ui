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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsTUFBTSxPQUFPLE1BQU07Ozs7Ozs7Ozs7O0lBRWxCLFlBQTZCLEtBQWEsRUFDdEIsTUFBYyxFQUNkLGVBQXVCLEVBQ3ZCLG1CQUE0QixFQUM1QixxQkFBOEIsRUFDOUIsS0FBa0IsRUFDbEIsWUFBZ0MsRUFDaEMsV0FBOEI7UUFQckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFDdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFTO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBUztRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFDbEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGNBQWMsQ0FDeEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQzVCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUVEOzs7Ozs7SUFuRFksdUJBQThCOzs7OztJQUN2Qyx3QkFBK0I7Ozs7O0lBQy9CLGlDQUF3Qzs7Ozs7SUFDeEMscUNBQTZDOzs7OztJQUM3Qyx1Q0FBK0M7Ozs7O0lBQy9DLHVCQUFtQzs7Ozs7SUFDbkMsOEJBQWlEOzs7OztJQUNqRCw2QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWEge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJIZWlnaHQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEdyaWRFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhvcml6b250YWxHcmlkRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSB7XG5cdH1cblxuXHRnZXRSb3dDb2xvcmluZygpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm93Q29sb3Jpbmc7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxuXHRnZXRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0aXNWZXJ0aWNhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZEVuYWJsZWQ7XG5cdH1cblxuXHRpc0hvcml6b250YWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZEVuYWJsZWQ7XG5cdH1cblxuXHRnZXRDb2x1bW5IZWFkZXIoKTogU2NoZW1hQ29sdW1uSGVhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IZWFkZXI7XG5cdH1cblxuXHRnZXRDc3NDbGFzc2VzKCk6IFNjaGVtYUNzc0NsYXNzIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUNzc0NsYXNzKFxuXHRcdFx0dGhpcy5pc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKSxcblx0XHRcdHRoaXMuaXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKSxcblx0XHRcdHRoaXMuZ2V0VGhlbWUoKSxcblx0XHRcdHRoaXMuZ2V0Um93Q29sb3JpbmcoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19