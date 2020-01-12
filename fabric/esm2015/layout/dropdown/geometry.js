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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvZHJvcGRvd24vZ2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFNcEIsWUFBb0IsU0FBcUIsRUFDOUIsSUFBZ0IsRUFDaEIsVUFBa0I7UUFGVCxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBZ0IsRUFBRSxVQUFrQjs7Y0FDL0MsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTs7Y0FDL0MsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTs7Y0FDNUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU07UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN6RSxDQUFDO0NBQ0Q7Ozs7OztJQXBDQSxtQ0FBZ0M7Ozs7O0lBQ2hDLGtDQUErQjs7Ozs7SUFDL0Isd0NBQXFDOzs7OztJQUNyQyxxQ0FBa0M7Ozs7O0lBRXRCLDZCQUE2Qjs7Ozs7SUFDdEMsd0JBQXdCOzs7OztJQUN4Qiw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBHZW9tZXRyeSB7XG5cdHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cdHByaXZhdGUgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcblx0cHJpdmF0ZSBhdmFpbGFibGVCb3R0b21TcGFjZTogbnVtYmVyO1xuXHRwcml2YXRlIGF2YWlsYWJsZVRvcFNwYWNlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgbWVudTogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSB3aW5kb3dTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSh0aGlzLm1lbnUsIHRoaXMud2luZG93U2l6ZSk7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHR9XG5cblx0Y2FuT3BlbkRvd253YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID4gMDtcblx0fVxuXG5cdGNhbk9wZW5VcHdhcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPiAwO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGUobWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuXHRcdFx0bWVudUhlaWdodCA9IG1lbnUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRyZWN0Qm90dG9tID0gY29udGFpbmVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRWwub2Zmc2V0SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXJFbC5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID0gd2luZG93U2l6ZSAtIHJlY3RCb3R0b20gLSBtZW51SGVpZ2h0O1xuXHRcdHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPSByZWN0Qm90dG9tIC0gbWVudUhlaWdodCAtIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG59XG4iXX0=