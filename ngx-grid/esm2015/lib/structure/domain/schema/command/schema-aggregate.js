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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxlQUFlOzs7OztJQW9CM0IsWUFBb0IsS0FBYyxFQUN2QixNQUFlO1FBRE4sVUFBSyxHQUFMLEtBQUssQ0FBUztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBbkJsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUlqQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZFLFVBQUssR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV4QyxnQkFBVyxHQUFzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFJL0QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUEyQjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQiwrQkFBK0I7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sd0JBQXdCO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU87U0FDUDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRixDQUFDO0NBRUQ7Ozs7OztJQTFHQSx1Q0FBMEI7Ozs7O0lBRTFCLHNDQUF5Qjs7Ozs7SUFFekIsMENBQWdDOzs7OztJQUVoQyxpQ0FBZ0M7Ozs7O0lBRWhDLHlDQUF1Qzs7Ozs7SUFFdkMsdUNBQXFDOzs7OztJQUVyQyx1Q0FBK0U7Ozs7O0lBRS9FLGdDQUFnRDs7Ozs7SUFFaEQsc0NBQWdFOzs7OztJQUVwRCxnQ0FBc0I7Ozs7O0lBQy9CLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkhlYWRlckVudGl0eSB9IGZyb20gJy4vY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGhlYWRlckhlaWdodCA9IDI4O1xuXG5cdHByaXZhdGUgcGFnZXJIZWlnaHQgPSAzNTtcblxuXHRwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG5cdHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsR3JpZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgY29sdW1uSGVhZGVyOiBDb2x1bW5IZWFkZXJFbnRpdHkgPSBuZXcgQ29sdW1uSGVhZGVyRW50aXR5KHRydWUsIGZhbHNlKTtcblxuXHRwcml2YXRlIHRoZW1lOiBTY2hlbWFUaGVtZSA9IFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRwcml2YXRlIHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLkVWRU47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSBoZWlnaHQ/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93Q29sb3JpbmcoKTogU2NoZW1hUm93Q29sb3Jpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvd0NvbG9yaW5nO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZSA9IHRoZW1lO1xuXHR9XG5cblx0c2V0Um93Q29sb3JpbmcoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZyA9IGNvbG9yaW5nO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogU2NoZW1hVGhlbWUge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0XHQvLyByZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb2x1bW5IZWFkZXIoKTogQ29sdW1uSGVhZGVyRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IZWFkZXI7XG5cdH1cblxuXHRzZXRIZWFkZXJUb3AoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0Q29sdW1uSGVhZGVyKCkuc2V0SGVhZGVyVG9wKGVuYWJsZWQpO1xuXHR9XG5cblx0c2V0SGVhZGVyQm90dG9tKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbHVtbkhlYWRlcigpLnNldEhlYWRlckJvdHRvbShlbmFibGVkKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0aXNWZXJ0aWNhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZDtcblx0fVxuXG5cdGlzSG9yaXpvbnRhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGdldFBhZ2VySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5oZWlnaHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSAtIHRoaXMuZ2V0UGFnZXJIZWlnaHQoKTtcblx0fVxuXG59XG4iXX0=