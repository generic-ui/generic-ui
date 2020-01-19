/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnHeaderEntity } from './column-header/column-header.entity';
import { SchemaTheme } from '../schema-theme';
import { SchemaRowColoring } from '../schema-row-coloring';
export class SchemaAggregate {
    /**
     * @param {?=} width
     * @param {?=} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.headerHeight = 28;
        this.pagerHeight = 35;
        this.active = false;
        this.horizontalGrid = true;
        this.verticalGrid = true;
        this.columnHeader = new ColumnHeaderEntity(true, false);
        this.theme = SchemaTheme.FABRIC;
        this.rowColoring = SchemaRowColoring.ODD;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.height = height;
        this.calculateContainerHeight();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
    }
    /**
     * @param {?} coloring
     * @return {?}
     */
    setRowColoring(coloring) {
        this.rowColoring = coloring;
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
    getWidth() {
        return this.width;
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
        return this.height;
        // return this.containerHeight;
    }
    /**
     * @return {?}
     */
    getColumnHeader() {
        return this.columnHeader;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderTop(enabled) {
        this.getColumnHeader().setHeaderTop(enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHeaderBottom(enabled) {
        this.getColumnHeader().setHeaderBottom(enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
    }
    /**
     * @return {?}
     */
    isVerticalGridEnabled() {
        return this.verticalGrid;
    }
    /**
     * @return {?}
     */
    isHorizontalGridEnabled() {
        return this.horizontalGrid;
    }
    /**
     * @private
     * @return {?}
     */
    getHeaderHeight() {
        return this.headerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    getPagerHeight() {
        return this.pagerHeight;
    }
    /**
     * @private
     * @return {?}
     */
    calculateContainerHeight() {
        if (!this.height) {
            this.active = false;
            return;
        }
        else {
            this.active = true;
        }
        this.containerHeight = this.height - this.getHeaderHeight() - this.getPagerHeight();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxlQUFlOzs7OztJQW9CM0IsWUFBb0IsS0FBYyxFQUN2QixNQUFlO1FBRE4sVUFBSyxHQUFMLEtBQUssQ0FBUztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBbkJsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUlqQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZFLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV4QyxnQkFBVyxHQUFzQixpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFJOUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUEyQjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQiwrQkFBK0I7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sd0JBQXdCO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU87U0FDUDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRixDQUFDO0NBRUQ7Ozs7OztJQTFHQSx1Q0FBMEI7Ozs7O0lBRTFCLHNDQUF5Qjs7Ozs7SUFFekIsMENBQWdDOzs7OztJQUVoQyxpQ0FBZ0M7Ozs7O0lBRWhDLHlDQUF1Qzs7Ozs7SUFFdkMsdUNBQXFDOzs7OztJQUVyQyx1Q0FBK0U7Ozs7O0lBRS9FLGdDQUFnRDs7Ozs7SUFFaEQsc0NBQStEOzs7OztJQUVuRCxnQ0FBc0I7Ozs7O0lBQy9CLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkhlYWRlckVudGl0eSB9IGZyb20gJy4vY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGhlYWRlckhlaWdodCA9IDI4O1xuXG5cdHByaXZhdGUgcGFnZXJIZWlnaHQgPSAzNTtcblxuXHRwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG5cdHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsR3JpZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgY29sdW1uSGVhZGVyOiBDb2x1bW5IZWFkZXJFbnRpdHkgPSBuZXcgQ29sdW1uSGVhZGVyRW50aXR5KHRydWUsIGZhbHNlKTtcblxuXHRwcml2YXRlIHRoZW1lOiBTY2hlbWFUaGVtZSA9IFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRwcml2YXRlIHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIGhlaWdodD86IG51bWJlcikge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRSb3dDb2xvcmluZygpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm93Q29sb3Jpbmc7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lID0gdGhlbWU7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nID0gY29sb3Jpbmc7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cblx0Z2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0O1xuXHR9XG5cblx0Z2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0O1xuXHRcdC8vIHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdGdldENvbHVtbkhlYWRlcigpOiBDb2x1bW5IZWFkZXJFbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkhlYWRlcjtcblx0fVxuXG5cdHNldEhlYWRlclRvcChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRDb2x1bW5IZWFkZXIoKS5zZXRIZWFkZXJUb3AoZW5hYmxlZCk7XG5cdH1cblxuXHRzZXRIZWFkZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0Q29sdW1uSGVhZGVyKCkuc2V0SGVhZGVyQm90dG9tKGVuYWJsZWQpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRpc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxHcmlkO1xuXHR9XG5cblx0aXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbEdyaWQ7XG5cdH1cblxuXHRwcml2YXRlIGdldEhlYWRlckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UGFnZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlckhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmhlaWdodCkge1xuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLmdldEhlYWRlckhlaWdodCgpIC0gdGhpcy5nZXRQYWdlckhlaWdodCgpO1xuXHR9XG5cbn1cbiJdfQ==