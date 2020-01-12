/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Geometry = /** @class */ (function () {
    function Geometry(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.calculate(this.menu, this.windowSize);
    }
    /**
     * @return {?}
     */
    Geometry.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.containerHeight;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return this.containerWidth;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.canOpenDownward = /**
     * @return {?}
     */
    function () {
        return this.availableBottomSpace > 0;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.canOpenUpward = /**
     * @return {?}
     */
    function () {
        return this.availableTopSpace > 0;
    };
    /**
     * @private
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    Geometry.prototype.calculate = /**
     * @private
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    function (menu, windowSize) {
        /** @type {?} */
        var containerEl = this.container.nativeElement;
        /** @type {?} */
        var menuHeight = menu.nativeElement.offsetHeight;
        /** @type {?} */
        var rectBottom = containerEl.getBoundingClientRect().bottom;
        this.containerHeight = containerEl.offsetHeight;
        this.containerWidth = containerEl.offsetWidth;
        this.availableBottomSpace = windowSize - rectBottom - menuHeight;
        this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
    };
    return Geometry;
}());
export { Geometry };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.containerWidth;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.availableBottomSpace;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.availableTopSpace;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.container;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.menu;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.windowSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvZHJvcGRvd24vZ2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBTUMsa0JBQW9CLFNBQXFCLEVBQzlCLElBQWdCLEVBQ2hCLFVBQWtCO1FBRlQsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQscUNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG9DQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxrQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGdDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7O0lBRU8sNEJBQVM7Ozs7OztJQUFqQixVQUFrQixJQUFnQixFQUFFLFVBQWtCOztZQUMvQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhOztZQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZOztZQUM1QyxVQUFVLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTTtRQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3pFLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7OztJQXBDQSxtQ0FBZ0M7Ozs7O0lBQ2hDLGtDQUErQjs7Ozs7SUFDL0Isd0NBQXFDOzs7OztJQUNyQyxxQ0FBa0M7Ozs7O0lBRXRCLDZCQUE2Qjs7Ozs7SUFDdEMsd0JBQXdCOzs7OztJQUN4Qiw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBHZW9tZXRyeSB7XG5cdHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cdHByaXZhdGUgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcblx0cHJpdmF0ZSBhdmFpbGFibGVCb3R0b21TcGFjZTogbnVtYmVyO1xuXHRwcml2YXRlIGF2YWlsYWJsZVRvcFNwYWNlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgbWVudTogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSB3aW5kb3dTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSh0aGlzLm1lbnUsIHRoaXMud2luZG93U2l6ZSk7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHR9XG5cblx0Y2FuT3BlbkRvd253YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID4gMDtcblx0fVxuXG5cdGNhbk9wZW5VcHdhcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPiAwO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGUobWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuXHRcdFx0bWVudUhlaWdodCA9IG1lbnUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRyZWN0Qm90dG9tID0gY29udGFpbmVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRWwub2Zmc2V0SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXJFbC5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID0gd2luZG93U2l6ZSAtIHJlY3RCb3R0b20gLSBtZW51SGVpZ2h0O1xuXHRcdHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPSByZWN0Qm90dG9tIC0gbWVudUhlaWdodCAtIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG59XG4iXX0=