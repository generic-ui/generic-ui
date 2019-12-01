/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnHeaderEntity } from './column-header/column-header.entity';
import { SchemaTheme } from '../schema-theme';
import { SchemaRowColoring } from '../schema-row-coloring';
var SchemaAggregate = /** @class */ (function () {
    function SchemaAggregate(width, height) {
        this.width = width;
        this.height = height;
        this.headerHeight = 28;
        this.pagerHeight = 35;
        this.active = false;
        this.horizontalGrid = true;
        this.verticalGrid = true;
        this.columnHeader = new ColumnHeaderEntity(true, false);
        this.theme = SchemaTheme.FABRIC;
        this.rowColoring = SchemaRowColoring.EVEN;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    SchemaAggregate.default = /**
     * @return {?}
     */
    function () {
        return new SchemaAggregate();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNEO0lBd0JDLHlCQUFvQixLQUFjLEVBQ3ZCLE1BQWU7UUFETixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFuQmxCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVksR0FBdUIsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkUsVUFBSyxHQUFnQixXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXhDLGdCQUFXLEdBQXNCLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUkvRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBekJNLHVCQUFPOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBeUJELHdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELG1DQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLEtBQWtCO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFFBQTJCO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQiwrQkFBK0I7SUFDaEMsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHNDQUFZOzs7O0lBQVosVUFBYSxPQUFnQjtRQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixPQUFnQjtRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsK0NBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGlEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8seUNBQWU7Ozs7SUFBdkI7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTyx3Q0FBYzs7OztJQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGtEQUF3Qjs7OztJQUFoQztRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU87U0FDUDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBaEhELElBZ0hDOzs7Ozs7O0lBMUdBLHVDQUEwQjs7Ozs7SUFFMUIsc0NBQXlCOzs7OztJQUV6QiwwQ0FBZ0M7Ozs7O0lBRWhDLGlDQUFnQzs7Ozs7SUFFaEMseUNBQXVDOzs7OztJQUV2Qyx1Q0FBcUM7Ozs7O0lBRXJDLHVDQUErRTs7Ozs7SUFFL0UsZ0NBQWdEOzs7OztJQUVoRCxzQ0FBZ0U7Ozs7O0lBRXBELGdDQUFzQjs7Ozs7SUFDL0IsaUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSGVhZGVyRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4taGVhZGVyL2NvbHVtbi1oZWFkZXIuZW50aXR5JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFBZ2dyZWdhdGUge1xuXG5cdHN0YXRpYyBkZWZhdWx0KCkge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQWdncmVnYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGhlYWRlckhlaWdodCA9IDI4O1xuXG5cdHByaXZhdGUgcGFnZXJIZWlnaHQgPSAzNTtcblxuXHRwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG5cdHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsR3JpZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgY29sdW1uSGVhZGVyOiBDb2x1bW5IZWFkZXJFbnRpdHkgPSBuZXcgQ29sdW1uSGVhZGVyRW50aXR5KHRydWUsIGZhbHNlKTtcblxuXHRwcml2YXRlIHRoZW1lOiBTY2hlbWFUaGVtZSA9IFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRwcml2YXRlIHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLkVWRU47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSBoZWlnaHQ/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93Q29sb3JpbmcoKTogU2NoZW1hUm93Q29sb3Jpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvd0NvbG9yaW5nO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZSA9IHRoZW1lO1xuXHR9XG5cblx0c2V0Um93Q29sb3JpbmcoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZyA9IGNvbG9yaW5nO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogU2NoZW1hVGhlbWUge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0XHQvLyByZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb2x1bW5IZWFkZXIoKTogQ29sdW1uSGVhZGVyRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IZWFkZXI7XG5cdH1cblxuXHRzZXRIZWFkZXJUb3AoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0Q29sdW1uSGVhZGVyKCkuc2V0SGVhZGVyVG9wKGVuYWJsZWQpO1xuXHR9XG5cblx0c2V0SGVhZGVyQm90dG9tKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbHVtbkhlYWRlcigpLnNldEhlYWRlckJvdHRvbShlbmFibGVkKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0aXNWZXJ0aWNhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZDtcblx0fVxuXG5cdGlzSG9yaXpvbnRhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGdldFBhZ2VySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5oZWlnaHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSAtIHRoaXMuZ2V0UGFnZXJIZWlnaHQoKTtcblx0fVxuXG59XG4iXX0=