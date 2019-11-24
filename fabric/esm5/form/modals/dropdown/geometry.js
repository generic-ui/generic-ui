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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL21vZGFscy9kcm9wZG93bi9nZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFNQyxrQkFBb0IsU0FBcUIsRUFDOUIsSUFBZ0IsRUFDaEIsVUFBa0I7UUFGVCxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxxQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsb0NBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGtDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsZ0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFTyw0QkFBUzs7Ozs7O0lBQWpCLFVBQWtCLElBQWdCLEVBQUUsVUFBa0I7O1lBQy9DLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7O1lBQy9DLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7O1lBQzVDLFVBQVUsR0FBRyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDekUsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDOzs7Ozs7O0lBcENBLG1DQUFnQzs7Ozs7SUFDaEMsa0NBQStCOzs7OztJQUMvQix3Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFrQzs7Ozs7SUFFdEIsNkJBQTZCOzs7OztJQUN0Qyx3QkFBd0I7Ozs7O0lBQ3hCLDhCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5IHtcblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblx0cHJpdmF0ZSBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuXHRwcml2YXRlIGF2YWlsYWJsZUJvdHRvbVNwYWNlOiBudW1iZXI7XG5cdHByaXZhdGUgYXZhaWxhYmxlVG9wU3BhY2U6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBtZW51OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHdpbmRvd1NpemU6IG51bWJlcikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKHRoaXMubWVudSwgdGhpcy53aW5kb3dTaXplKTtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdH1cblxuXHRjYW5PcGVuRG93bndhcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlQm90dG9tU3BhY2UgPiAwO1xuXHR9XG5cblx0Y2FuT3BlblVwd2FyZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFpbGFibGVUb3BTcGFjZSA+IDA7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZShtZW51OiBFbGVtZW50UmVmLCB3aW5kb3dTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRtZW51SGVpZ2h0ID0gbWVudS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcblx0XHRcdHJlY3RCb3R0b20gPSBjb250YWluZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBjb250YWluZXJFbC5vZmZzZXRIZWlnaHQ7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aCA9IGNvbnRhaW5lckVsLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMuYXZhaWxhYmxlQm90dG9tU3BhY2UgPSB3aW5kb3dTaXplIC0gcmVjdEJvdHRvbSAtIG1lbnVIZWlnaHQ7XG5cdFx0dGhpcy5hdmFpbGFibGVUb3BTcGFjZSA9IHJlY3RCb3R0b20gLSBtZW51SGVpZ2h0IC0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cbn1cbiJdfQ==