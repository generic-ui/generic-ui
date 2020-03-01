/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InlineDialogPlacement } from './placement';
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element, inlineDialogGeometry, window, placement, inlineDialogOffset) {
        if (inlineDialogOffset === void 0) { inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset; }
        this.element = element;
        this.inlineDialogGeometry = inlineDialogGeometry;
        this.window = window;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
        this.calculateCords(element, inlineDialogGeometry);
    }
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getVerticalPosition = /**
     * @return {?}
     */
    function () {
        return this.verticalPosition;
    };
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getHorizontalPosition = /**
     * @return {?}
     */
    function () {
        return this.horizontalPosition;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} inlineDialogGeometry
     * @return {?}
     */
    InlineDialogCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @param {?} inlineDialogGeometry
     * @return {?}
     */
    function (element, inlineDialogGeometry) {
        /** @type {?} */
        var elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = elementRect.bottom;
        /** @type {?} */
        var elementLeft = elementRect.left;
        /** @type {?} */
        var elementRight = elementRect.right;
        /** @type {?} */
        var elementTop = elementRect.top;
        switch (this.placement) {
            case InlineDialogPlacement.Bottom:
                this.horizontalPosition = this.window.pageXOffset + elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Top:
                this.horizontalPosition = this.window.pageXOffset + elementLeft;
                this.verticalPosition = this.window.pageYOffset + elementTop + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Right:
                this.horizontalPosition = this.window.pageXOffset + elementRight + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            case InlineDialogPlacement.Left:
                this.horizontalPosition = elementLeft + this.window.pageXOffset + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            default:
                this.horizontalPosition = this.window.pageXOffset + elementLeft;
                this.verticalPosition = this.window.pageYOffset + elementBottom + this.inlineDialogOffset;
        }
        this.calculateDirection(inlineDialogGeometry, element);
    };
    /**
     * @private
     * @param {?} inlineDialogGeometry
     * @param {?} element
     * @return {?}
     */
    InlineDialogCords.prototype.calculateDirection = /**
     * @private
     * @param {?} inlineDialogGeometry
     * @param {?} element
     * @return {?}
     */
    function (inlineDialogGeometry, element) {
        /** @type {?} */
        var windowHeight = this.window.innerHeight;
        /** @type {?} */
        var windowWidth = this.window.innerWidth;
        /** @type {?} */
        var elementHeight = element.nativeElement.offsetHeight;
        /** @type {?} */
        var elementWidth = element.nativeElement.offsetWidth;
        /** @type {?} */
        var inlineDialogHeight = inlineDialogGeometry.getHeight();
        /** @type {?} */
        var inlineDialogWidth = inlineDialogGeometry.getWidth();
        /** @type {?} */
        var inlineDialogDoesNotFitHorizontally = (windowWidth - this.horizontalPosition - inlineDialogWidth) < 0;
        /** @type {?} */
        var inlineDialogDoesNotFitVertically = (windowHeight - this.verticalPosition - inlineDialogHeight) < 0;
        if (inlineDialogDoesNotFitHorizontally) {
            this.horizontalPosition -= inlineDialogWidth - elementWidth;
        }
        if (inlineDialogDoesNotFitVertically) {
            this.verticalPosition -= inlineDialogHeight - elementHeight;
        }
    };
    InlineDialogCords.defaultInlineDialogOffset = 8;
    return InlineDialogCords;
}());
export { InlineDialogCords };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.defaultInlineDialogOffset;
    /** @type {?} */
    InlineDialogCords.prototype.verticalPosition;
    /** @type {?} */
    InlineDialogCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.element;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.inlineDialogGeometry;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.window;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.inlineDialogOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2lubGluZS1kaWFsb2ctY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRDtJQU1DLDJCQUFvQixPQUFtQixFQUM1QixvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLFNBQWlDLEVBQ2pDLGtCQUF3RTtRQUF4RSxtQ0FBQSxFQUFBLHFCQUE2QixpQkFBaUIsQ0FBQyx5QkFBeUI7UUFKL0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNEO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELCtDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlEQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7OztJQUVPLDBDQUFjOzs7Ozs7SUFBdEIsVUFBdUIsT0FBbUIsRUFBRSxvQkFBMEM7O1lBRS9FLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztZQUNoRSxhQUFhLEdBQUcsV0FBVyxDQUFDLE1BQU07O1lBQ2xDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTs7WUFDOUIsWUFBWSxHQUFHLFdBQVcsQ0FBQyxLQUFLOztZQUNoQyxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUc7UUFFN0Is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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeSB9IGZyb20gJy4vaW5saW5lLWRpYWxvZy1nZW9tZXRyeSc7XG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dDb3JkcyB7XG5cdHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzdGF0aWMgZGVmYXVsdElubGluZURpYWxvZ09mZnNldDogbnVtYmVyID0gODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnk6IElubGluZURpYWxvZ0dlb21ldHJ5LFxuXHRcdFx0XHRwcml2YXRlIHdpbmRvdzogV2luZG93LFxuXHRcdFx0XHRwcml2YXRlIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IElubGluZURpYWxvZ0NvcmRzLmRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIGlubGluZURpYWxvZ0dlb21ldHJ5KTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBpbmxpbmVEaWFsb2dHZW9tZXRyeTogSW5saW5lRGlhbG9nR2VvbWV0cnkpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdCxcblx0XHRcdGVsZW1lbnRSaWdodCA9IGVsZW1lbnRSZWN0LnJpZ2h0LFxuXHRcdFx0ZWxlbWVudFRvcCA9IGVsZW1lbnRSZWN0LnRvcDtcblxuXHRcdHN3aXRjaCAodGhpcy5wbGFjZW1lbnQpIHtcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuQm90dG9tOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRCb3R0b20gKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLndpbmRvdy5wYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCArIGVsZW1lbnRUb3AgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LlJpZ2h0OlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJpZ2h0ICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRUb3A7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5MZWZ0OlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0ICsgdGhpcy53aW5kb3cucGFnZVhPZmZzZXQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0ICsgZWxlbWVudEJvdHRvbSArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlRGlyZWN0aW9uKGlubGluZURpYWxvZ0dlb21ldHJ5LCBlbGVtZW50KTtcblxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEaXJlY3Rpb24oaW5saW5lRGlhbG9nR2VvbWV0cnk6IElubGluZURpYWxvZ0dlb21ldHJ5LCBlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gdGhpcy53aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHR3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcblx0XHRcdGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGlubGluZURpYWxvZ0hlaWdodCA9IGlubGluZURpYWxvZ0dlb21ldHJ5LmdldEhlaWdodCgpLFxuXHRcdFx0aW5saW5lRGlhbG9nV2lkdGggPSBpbmxpbmVEaWFsb2dHZW9tZXRyeS5nZXRXaWR0aCgpO1xuXG5cdFx0Y29uc3QgaW5saW5lRGlhbG9nRG9lc05vdEZpdEhvcml6b250YWxseSA9ICh3aW5kb3dXaWR0aCAtIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIC0gaW5saW5lRGlhbG9nV2lkdGgpIDwgMCxcblx0XHRcdGlubGluZURpYWxvZ0RvZXNOb3RGaXRWZXJ0aWNhbGx5ID0gKHdpbmRvd0hlaWdodCAtIHRoaXMudmVydGljYWxQb3NpdGlvbiAtIGlubGluZURpYWxvZ0hlaWdodCkgPCAwO1xuXG5cdFx0aWYgKGlubGluZURpYWxvZ0RvZXNOb3RGaXRIb3Jpem9udGFsbHkpIHtcblx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIC09IGlubGluZURpYWxvZ1dpZHRoIC0gZWxlbWVudFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChpbmxpbmVEaWFsb2dEb2VzTm90Rml0VmVydGljYWxseSkge1xuXHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uIC09IGlubGluZURpYWxvZ0hlaWdodCAtIGVsZW1lbnRIZWlnaHQ7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=