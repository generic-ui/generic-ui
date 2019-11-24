/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Geometry {
    /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     */
    constructor(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.calculate(this.menu, this.windowSize);
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
    getContainerWidth() {
        return this.containerWidth;
    }
    /**
     * @return {?}
     */
    canOpenDownward() {
        return this.availableBottomSpace > 0;
    }
    /**
     * @return {?}
     */
    canOpenUpward() {
        return this.availableTopSpace > 0;
    }
    /**
     * @private
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    calculate(menu, windowSize) {
        /** @type {?} */
        const containerEl = this.container.nativeElement;
        /** @type {?} */
        const menuHeight = menu.nativeElement.offsetHeight;
        /** @type {?} */
        const rectBottom = containerEl.getBoundingClientRect().bottom;
        this.containerHeight = containerEl.offsetHeight;
        this.containerWidth = containerEl.offsetWidth;
        this.availableBottomSpace = windowSize - rectBottom - menuHeight;
        this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL21vZGFscy9kcm9wZG93bi9nZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQU1wQixZQUFvQixTQUFxQixFQUM5QixJQUFnQixFQUNoQixVQUFrQjtRQUZULGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFnQixFQUFFLFVBQWtCOztjQUMvQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhOztjQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZOztjQUM1QyxVQUFVLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTTtRQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3pFLENBQUM7Q0FDRDs7Ozs7O0lBcENBLG1DQUFnQzs7Ozs7SUFDaEMsa0NBQStCOzs7OztJQUMvQix3Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFrQzs7Ozs7SUFFdEIsNkJBQTZCOzs7OztJQUN0Qyx3QkFBd0I7Ozs7O0lBQ3hCLDhCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5IHtcblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcblx0cHJpdmF0ZSBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuXHRwcml2YXRlIGF2YWlsYWJsZUJvdHRvbVNwYWNlOiBudW1iZXI7XG5cdHByaXZhdGUgYXZhaWxhYmxlVG9wU3BhY2U6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBtZW51OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHdpbmRvd1NpemU6IG51bWJlcikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKHRoaXMubWVudSwgdGhpcy53aW5kb3dTaXplKTtcblx0fVxuXG5cdGdldENvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodDtcblx0fVxuXG5cdGdldENvbnRhaW5lcldpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyV2lkdGg7XG5cdH1cblxuXHRjYW5PcGVuRG93bndhcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlQm90dG9tU3BhY2UgPiAwO1xuXHR9XG5cblx0Y2FuT3BlblVwd2FyZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFpbGFibGVUb3BTcGFjZSA+IDA7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZShtZW51OiBFbGVtZW50UmVmLCB3aW5kb3dTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRtZW51SGVpZ2h0ID0gbWVudS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcblx0XHRcdHJlY3RCb3R0b20gPSBjb250YWluZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBjb250YWluZXJFbC5vZmZzZXRIZWlnaHQ7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aCA9IGNvbnRhaW5lckVsLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMuYXZhaWxhYmxlQm90dG9tU3BhY2UgPSB3aW5kb3dTaXplIC0gcmVjdEJvdHRvbSAtIG1lbnVIZWlnaHQ7XG5cdFx0dGhpcy5hdmFpbGFibGVUb3BTcGFjZSA9IHJlY3RCb3R0b20gLSBtZW51SGVpZ2h0IC0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cbn1cbiJdfQ==