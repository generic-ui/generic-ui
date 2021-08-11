/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectOptionsCords = /** @class */ (function () {
    function SelectOptionsCords(element, selectContainerGeometry, window) {
        this.element = element;
        this.selectContainerGeometry = selectContainerGeometry;
        this.window = window;
        this.calculateCords(element, selectContainerGeometry);
    }
    /**
     * @return {?}
     */
    SelectOptionsCords.prototype.getVerticalPosition = /**
     * @return {?}
     */
    function () {
        return this.verticalPosition;
    };
    /**
     * @return {?}
     */
    SelectOptionsCords.prototype.getHorizontalPosition = /**
     * @return {?}
     */
    function () {
        return this.horizontalPosition;
    };
    /**
     * @return {?}
     */
    SelectOptionsCords.prototype.getCanOpenUpward = /**
     * @return {?}
     */
    function () {
        return this.canOpenUpward;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} selectOptionsGeometry
     * @return {?}
     */
    SelectOptionsCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @param {?} selectOptionsGeometry
     * @return {?}
     */
    function (element, selectOptionsGeometry) {
        /** @type {?} */
        var elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = this.window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        var elementLeft = this.window.pageXOffset + elementRect.left;
        this.horizontalPosition = elementLeft;
        this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
        this.calculateDirection(selectOptionsGeometry, element);
    };
    /**
     * @private
     * @param {?} selectOptionsGeometry
     * @param {?} element
     * @return {?}
     */
    SelectOptionsCords.prototype.calculateDirection = /**
     * @private
     * @param {?} selectOptionsGeometry
     * @param {?} element
     * @return {?}
     */
    function (selectOptionsGeometry, element) {
        /** @type {?} */
        var windowHeight = this.window.innerHeight + this.window.pageYOffset;
        /** @type {?} */
        var elementHeight = element.nativeElement.offsetHeight;
        /** @type {?} */
        var selectOptionsHeight = selectOptionsGeometry.getHeight();
        /** @type {?} */
        var selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
        if (selectOptionsDoesNotFitVertically) {
            this.canOpenUpward = true;
            this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
        }
    };
    SelectOptionsCords.BORDER_WIDTH = 1;
    return SelectOptionsCords;
}());
export { SelectOptionsCords };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.BORDER_WIDTH;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.element;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.selectContainerGeometry;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsCords.prototype.window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29yZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL3NlbGVjdC9vcHRpb25zL3NlbGVjdC1vcHRpb25zLmNvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQVNDLDRCQUE2QixPQUFtQixFQUM1Qix1QkFBOEMsRUFDOUMsTUFBYztRQUZMLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDNUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF1QjtRQUM5QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGdEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGtEQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDZDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFTywyQ0FBYzs7Ozs7O0lBQXRCLFVBQXVCLE9BQW1CLEVBQUUscUJBQTRDOztZQUVqRixXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7WUFDaEUsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNOztZQUM1RCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUk7UUFFekQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQztRQUN4RSxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7OztJQUVPLCtDQUFrQjs7Ozs7O0lBQTFCLFVBQTJCLHFCQUE0QyxFQUFFLE9BQW1COztZQUNyRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXOztZQUNyRSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZOztZQUNsRCxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7O1lBRWxELGlDQUFpQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7UUFFMUcsSUFBSSxpQ0FBaUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLElBQUksbUJBQW1CLEdBQUcsYUFBYSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQztTQUMvRjtJQUNGLENBQUM7SUFoRHVCLCtCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBa0QxQyx5QkFBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLGtCQUFrQjs7Ozs7O0lBQzlCLGdDQUF5Qzs7Ozs7SUFFekMsOENBQWlDOzs7OztJQUVqQyxnREFBbUM7Ozs7O0lBRW5DLDJDQUErQjs7Ozs7SUFFbkIscUNBQW9DOzs7OztJQUM3QyxxREFBK0Q7Ozs7O0lBQy9ELG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSB9IGZyb20gJy4vc2VsZWN0LWdlb21ldHJ5JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGlvbnNDb3JkcyB7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEJPUkRFUl9XSURUSCA9IDE7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdENvbnRhaW5lckdlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3cpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIHNlbGVjdENvbnRhaW5lckdlb21ldHJ5KTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0Q2FuT3BlblVwd2FyZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jYW5PcGVuVXB3YXJkO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBzZWxlY3RPcHRpb25zR2VvbWV0cnk6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gdGhpcy53aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQ7XG5cdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSAtIFNlbGVjdE9wdGlvbnNDb3Jkcy5CT1JERVJfV0lEVEg7XG5cdFx0dGhpcy5jYWxjdWxhdGVEaXJlY3Rpb24oc2VsZWN0T3B0aW9uc0dlb21ldHJ5LCBlbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGlyZWN0aW9uKHNlbGVjdE9wdGlvbnNHZW9tZXRyeTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5LCBlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gdGhpcy53aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0c2VsZWN0T3B0aW9uc0hlaWdodCA9IHNlbGVjdE9wdGlvbnNHZW9tZXRyeS5nZXRIZWlnaHQoKTtcblxuXHRcdGNvbnN0IHNlbGVjdE9wdGlvbnNEb2VzTm90Rml0VmVydGljYWxseSA9ICh3aW5kb3dIZWlnaHQgLSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gLSBzZWxlY3RPcHRpb25zSGVpZ2h0KSA8IDA7XG5cblx0XHRpZiAoc2VsZWN0T3B0aW9uc0RvZXNOb3RGaXRWZXJ0aWNhbGx5KSB7XG5cdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSB0cnVlO1xuXHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uIC09IHNlbGVjdE9wdGlvbnNIZWlnaHQgKyBlbGVtZW50SGVpZ2h0IC0gU2VsZWN0T3B0aW9uc0NvcmRzLkJPUkRFUl9XSURUSDtcblx0XHR9XG5cdH1cblxufVxuIl19