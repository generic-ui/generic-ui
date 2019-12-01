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
        this.rowColoring = SchemaRowColoring.EVEN;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    static default() {
        return new SchemaAggregate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxlQUFlOzs7OztJQXdCM0IsWUFBb0IsS0FBYyxFQUN2QixNQUFlO1FBRE4sVUFBSyxHQUFMLEtBQUssQ0FBUztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBbkJsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUlqQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZFLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV4QyxnQkFBVyxHQUFzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFJL0QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQXpCRCxNQUFNLENBQUMsT0FBTztRQUNiLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBeUJELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUEyQjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQiwrQkFBK0I7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sd0JBQXdCO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU87U0FDUDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRixDQUFDO0NBRUQ7Ozs7OztJQTFHQSx1Q0FBMEI7Ozs7O0lBRTFCLHNDQUF5Qjs7Ozs7SUFFekIsMENBQWdDOzs7OztJQUVoQyxpQ0FBZ0M7Ozs7O0lBRWhDLHlDQUF1Qzs7Ozs7SUFFdkMsdUNBQXFDOzs7OztJQUVyQyx1Q0FBK0U7Ozs7O0lBRS9FLGdDQUFnRDs7Ozs7SUFFaEQsc0NBQWdFOzs7OztJQUVwRCxnQ0FBc0I7Ozs7O0lBQy9CLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkhlYWRlckVudGl0eSB9IGZyb20gJy4vY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIHtcblxuXHRzdGF0aWMgZGVmYXVsdCgpIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUFnZ3JlZ2F0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBoZWFkZXJIZWlnaHQgPSAyODtcblxuXHRwcml2YXRlIHBhZ2VySGVpZ2h0ID0gMzU7XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblxuXHRwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGNvbHVtbkhlYWRlcjogQ29sdW1uSGVhZGVyRW50aXR5ID0gbmV3IENvbHVtbkhlYWRlckVudGl0eSh0cnVlLCBmYWxzZSk7XG5cblx0cHJpdmF0ZSB0aGVtZTogU2NoZW1hVGhlbWUgPSBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0cHJpdmF0ZSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgd2lkdGg/OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgaGVpZ2h0PzogbnVtYmVyKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUgPSB0aGVtZTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBjb2xvcmluZztcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdFx0Ly8gcmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0Z2V0Q29sdW1uSGVhZGVyKCk6IENvbHVtbkhlYWRlckVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSGVhZGVyO1xuXHR9XG5cblx0c2V0SGVhZGVyVG9wKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbHVtbkhlYWRlcigpLnNldEhlYWRlclRvcChlbmFibGVkKTtcblx0fVxuXG5cdHNldEhlYWRlckJvdHRvbShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRDb2x1bW5IZWFkZXIoKS5zZXRIZWFkZXJCb3R0b20oZW5hYmxlZCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gZW5hYmxlZDtcblx0fVxuXG5cdGlzVmVydGljYWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEdyaWQ7XG5cdH1cblxuXHRpc0hvcml6b250YWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0SGVhZGVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRQYWdlckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VySGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLmhlaWdodCAtIHRoaXMuZ2V0SGVhZGVySGVpZ2h0KCkgLSB0aGlzLmdldFBhZ2VySGVpZ2h0KCk7XG5cdH1cblxufVxuIl19