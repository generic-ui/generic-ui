/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnHeaderEntity } from './column-header/column-header.entity';
import { SchemaTheme } from '../schema-theme';
import { SchemaRowColoring } from '../schema-row-coloring';
import { RootAggregate } from '@generic-ui/hermes';
var SchemaAggregate = /** @class */ (function () {
    function SchemaAggregate(width, height) {
        this.width = width;
        this.height = height;
        this.headerHeight = 28; // ?
        // ?
        this.pagerHeight = 35; // ?
        this.active = false;
        this.horizontalGrid = true;
        this.verticalGrid = true;
        this.columnHeader = new ColumnHeaderEntity(true, false);
        this.theme = SchemaTheme.GENERIC;
        this.rowColoring = SchemaRowColoring.ODD;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    /**
     * @param {?} height
     * @return {?}
     */
    SchemaAggregate.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.height = height;
        this.calculateContainerHeight();
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    SchemaAggregate.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        if (theme === SchemaTheme.MATERIAL) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.LIGHT) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.DARK) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.GENERIC) {
            this.rowColoring = SchemaRowColoring.ODD;
        }
    };
    /**
     * @param {?} coloring
     * @return {?}
     */
    SchemaAggregate.prototype.setRowColoring = /**
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        this.rowColoring = coloring;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
        // return this.containerHeight;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getColumnHeader = /**
     * @return {?}
     */
    function () {
        return this.columnHeader;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHeaderTop = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.getColumnHeader().setHeaderTop(enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHeaderBottom = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.getColumnHeader().setHeaderBottom(enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setVerticalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.verticalGrid = enabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHorizontalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.horizontalGrid = enabled;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isVerticalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalGrid;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isHorizontalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.horizontalGrid;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.getHeaderHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.headerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.getPagerHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.pagerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.calculateContainerHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.height) {
            this.active = false;
            return;
        }
        else {
            this.active = true;
        }
        this.containerHeight = this.height - this.getHeaderHeight() - this.getPagerHeight();
    };
    SchemaAggregate.ctorParameters = function () { return [
        { type: Number },
        { type: Number }
    ]; };
    SchemaAggregate = tslib_1.__decorate([
        RootAggregate,
        tslib_1.__metadata("design:paramtypes", [Number, Number])
    ], SchemaAggregate);
    return SchemaAggregate;
}());
export { SchemaAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.headerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.pagerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.active;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.verticalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.rowColoring;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.width;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBdUJsRCx5QkFBb0IsS0FBYyxFQUN2QixNQUFlO1FBRE4sVUFBSyxHQUFMLEtBQUssQ0FBUztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBbkJsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUk7O1FBRXZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSTtRQUl0QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZFLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUV6QyxnQkFBVyxHQUFzQixpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFJOUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELHdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELG1DQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFB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O1NBQ25CO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUE3SFcsZUFBZTtRQUQzQixhQUFhOztPQUNELGVBQWUsQ0ErSDNCO0lBQUQsc0JBQUM7Q0FBQSxJQUFBO1NBL0hZLGVBQWU7Ozs7OztJQUUzQix1Q0FBMEI7Ozs7O0lBRTFCLHNDQUF5Qjs7Ozs7SUFFekIsMENBQWdDOzs7OztJQUVoQyxpQ0FBZ0M7Ozs7O0lBRWhDLHlDQUF1Qzs7Ozs7SUFFdkMsdUNBQXFDOzs7OztJQUVyQyx1Q0FBK0U7Ozs7O0lBRS9FLGdDQUFpRDs7Ozs7SUFFakQsc0NBQStEOzs7OztJQUVuRCxnQ0FBc0I7Ozs7O0lBQy9CLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkhlYWRlckVudGl0eSB9IGZyb20gJy4vY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBSb290QWdncmVnYXRlXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGhlYWRlckhlaWdodCA9IDI4OyAvLyA/XG5cblx0cHJpdmF0ZSBwYWdlckhlaWdodCA9IDM1OyAvLyA/XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblxuXHRwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGNvbHVtbkhlYWRlcjogQ29sdW1uSGVhZGVyRW50aXR5ID0gbmV3IENvbHVtbkhlYWRlckVudGl0eSh0cnVlLCBmYWxzZSk7XG5cblx0cHJpdmF0ZSB0aGVtZTogU2NoZW1hVGhlbWUgPSBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdHByaXZhdGUgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgd2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVpZ2h0PzogbnVtYmVyKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUgPSB0aGVtZTtcblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTUFURVJJQUwpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZy5OT05FO1xuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5EQVJLKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXHRcdH1cblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBjb2xvcmluZztcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdFx0Ly8gcmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0Z2V0Q29sdW1uSGVhZGVyKCk6IENvbHVtbkhlYWRlckVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSGVhZGVyO1xuXHR9XG5cblx0c2V0SGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbHVtbkhlYWRlcigpLnNldEhlYWRlclRvcChlbmFibGVkKTtcblx0fVxuXG5cdHNldEhlYWRlckJvdHRvbShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRDb2x1bW5IZWFkZXIoKS5zZXRIZWFkZXJCb3R0b20oZW5hYmxlZCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gZW5hYmxlZDtcblx0fVxuXG5cdGlzVmVydGljYWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEdyaWQ7XG5cdH1cblxuXHRpc0hvcml6b250YWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0SGVhZGVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRQYWdlckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLmhlaWdodCAtIHRoaXMuZ2V0SGVhZGVySGVpZ2h0KCkgLSB0aGlzLmdldFBhZ2VySGVpZ2h0KCk7XG5cdH1cblxufVxuIl19