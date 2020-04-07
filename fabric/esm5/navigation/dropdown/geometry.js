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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uL2Ryb3Bkb3duL2dlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQU1DLGtCQUFvQixTQUFxQixFQUM5QixJQUFnQixFQUNoQixVQUFrQjtRQUZULGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELHFDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxvQ0FBaUI7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsa0NBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxnQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVPLDRCQUFTOzs7Ozs7SUFBakIsVUFBa0IsSUFBZ0IsRUFBRSxVQUFrQjs7WUFDL0MsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTs7WUFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTs7WUFDNUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU07UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN6RSxDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7Ozs7Ozs7SUFwQ0EsbUNBQWdDOzs7OztJQUNoQyxrQ0FBK0I7Ozs7O0lBQy9CLHdDQUFxQzs7Ozs7SUFDckMscUNBQWtDOzs7OztJQUV0Qiw2QkFBNkI7Ozs7O0lBQ3RDLHdCQUF3Qjs7Ozs7SUFDeEIsOEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xuXHRwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXHRwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG5cdHByaXZhdGUgYXZhaWxhYmxlQm90dG9tU3BhY2U6IG51bWJlcjtcblx0cHJpdmF0ZSBhdmFpbGFibGVUb3BTcGFjZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIG1lbnU6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgd2luZG93U2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUodGhpcy5tZW51LCB0aGlzLndpbmRvd1NpemUpO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJXaWR0aDtcblx0fVxuXG5cdGNhbk9wZW5Eb3dud2FyZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFpbGFibGVCb3R0b21TcGFjZSA+IDA7XG5cdH1cblxuXHRjYW5PcGVuVXB3YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZVRvcFNwYWNlID4gMDtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlKG1lbnU6IEVsZW1lbnRSZWYsIHdpbmRvd1NpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCxcblx0XHRcdG1lbnVIZWlnaHQgPSBtZW51Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0cmVjdEJvdHRvbSA9IGNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckVsLm9mZnNldEhlaWdodDtcblx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyRWwub2Zmc2V0V2lkdGg7XG5cdFx0dGhpcy5hdmFpbGFibGVCb3R0b21TcGFjZSA9IHdpbmRvd1NpemUgLSByZWN0Qm90dG9tIC0gbWVudUhlaWdodDtcblx0XHR0aGlzLmF2YWlsYWJsZVRvcFNwYWNlID0gcmVjdEJvdHRvbSAtIG1lbnVIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxufVxuIl19