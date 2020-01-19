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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNEO0lBb0JDLHlCQUFvQixLQUFjLEVBQ3ZCLE1BQWU7UUFETixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFuQmxCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVksR0FBdUIsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkUsVUFBSyxHQUFnQixXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXhDLGdCQUFXLEdBQXNCLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUk5RCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsS0FBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsUUFBMkI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25CLCtCQUErQjtJQUNoQyxDQUFDOzs7O0lBRUQseUNBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCwrQ0FBcUI7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsaURBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyx5Q0FBZTs7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVPLHdDQUFjOzs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sa0RBQXdCOzs7O0lBQWhDO1FBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsT0FBTztTQUNQO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUE1R0QsSUE0R0M7Ozs7Ozs7SUExR0EsdUNBQTBCOzs7OztJQUUxQixzQ0FBeUI7Ozs7O0lBRXpCLDBDQUFnQzs7Ozs7SUFFaEMsaUNBQWdDOzs7OztJQUVoQyx5Q0FBdUM7Ozs7O0lBRXZDLHVDQUFxQzs7Ozs7SUFFckMsdUNBQStFOzs7OztJQUUvRSxnQ0FBZ0Q7Ozs7O0lBRWhELHNDQUErRDs7Ozs7SUFFbkQsZ0NBQXNCOzs7OztJQUMvQixpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5IZWFkZXJFbnRpdHkgfSBmcm9tICcuL2NvbHVtbi1oZWFkZXIvY29sdW1uLWhlYWRlci5lbnRpdHknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSBoZWFkZXJIZWlnaHQgPSAyODtcblxuXHRwcml2YXRlIHBhZ2VySGVpZ2h0ID0gMzU7XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblxuXHRwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIGNvbHVtbkhlYWRlcjogQ29sdW1uSGVhZGVyRW50aXR5ID0gbmV3IENvbHVtbkhlYWRlckVudGl0eSh0cnVlLCBmYWxzZSk7XG5cblx0cHJpdmF0ZSB0aGVtZTogU2NoZW1hVGhlbWUgPSBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0cHJpdmF0ZSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZy5PREQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSBoZWlnaHQ/OiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0Z2V0Um93Q29sb3JpbmcoKTogU2NoZW1hUm93Q29sb3Jpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvd0NvbG9yaW5nO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZSA9IHRoZW1lO1xuXHR9XG5cblx0c2V0Um93Q29sb3JpbmcoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZyA9IGNvbG9yaW5nO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogU2NoZW1hVGhlbWUge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0XHQvLyByZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb2x1bW5IZWFkZXIoKTogQ29sdW1uSGVhZGVyRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IZWFkZXI7XG5cdH1cblxuXHRzZXRIZWFkZXJUb3AoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0Q29sdW1uSGVhZGVyKCkuc2V0SGVhZGVyVG9wKGVuYWJsZWQpO1xuXHR9XG5cblx0c2V0SGVhZGVyQm90dG9tKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbHVtbkhlYWRlcigpLnNldEhlYWRlckJvdHRvbShlbmFibGVkKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0aXNWZXJ0aWNhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZDtcblx0fVxuXG5cdGlzSG9yaXpvbnRhbEdyaWRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGdldFBhZ2VySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZXJIZWlnaHQ7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5oZWlnaHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSAtIHRoaXMuZ2V0UGFnZXJIZWlnaHQoKTtcblx0fVxuXG59XG4iXX0=