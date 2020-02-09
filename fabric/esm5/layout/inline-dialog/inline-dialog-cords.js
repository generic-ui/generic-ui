/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InlineDialogPlacement } from './placement';
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element, pageXOffset, pageYOffset, placement, inlineDialogOffset) {
        if (inlineDialogOffset === void 0) { inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset; }
        this.element = element;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
        this.calculateCords(element, pageXOffset, pageYOffset);
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
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @return {?}
     */
    InlineDialogCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @return {?}
     */
    function (element, pageXOffset, pageYOffset) {
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
                this.horizontalPosition = pageXOffset + elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Top:
                this.horizontalPosition = pageXOffset + elementLeft;
                this.verticalPosition = pageYOffset + elementTop + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Right:
                this.horizontalPosition = pageXOffset + elementRight + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            case InlineDialogPlacement.Left:
                this.horizontalPosition = elementLeft + pageXOffset + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            default:
                this.horizontalPosition = pageXOffset + elementLeft;
                this.verticalPosition = pageYOffset + elementBottom + this.inlineDialogOffset;
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
    InlineDialogCords.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.inlineDialogOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2lubGluZS1kaWFsb2ctY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwRDtJQU1DLDJCQUFvQixPQUFtQixFQUNwQyxXQUFtQixFQUNuQixXQUFtQixFQUNYLFNBQWlDLEVBQ2pDLGtCQUF3RTtRQUF4RSxtQ0FBQSxFQUFBLHFCQUE2QixpQkFBaUIsQ0FBQyx5QkFBeUI7UUFKL0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc1QixjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNEO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsK0NBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaURBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztJQUVPLDBDQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLE9BQW1CLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjs7WUFFN0UsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQ2hFLGFBQWEsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJOztZQUM5QixZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUs7O1lBQ2hDLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRztRQUc3QixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFdkIsS0FBSyxxQkFBcUIsQ0FBQyxNQUFNO2dCQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2hFLE1BQU07WUFFUCxLQUFLLHFCQUFxQixDQUFDLEdBQUc7Z0JBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzNFLE1BQU07WUFFUCxLQUFLLHFCQUFxQixDQUFDLEtBQUs7Z0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztnQkFDbkMsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsSUFBSTtnQkFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUNuQyxNQUFNO1lBRVA7Z0JBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUMvRTtJQUVGLENBQUM7SUF0RGMsMkNBQXlCLEdBQVcsQ0FBQyxDQUFDO0lBdUR0RCx3QkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLGlCQUFpQjs7Ozs7O0lBSTdCLDRDQUFxRDs7SUFIckQsNkNBQXlCOztJQUN6QiwrQ0FBMkI7Ozs7O0lBSWYsb0NBQTJCOzs7OztJQUdwQyxzQ0FBeUM7Ozs7O0lBQ3pDLCtDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcblxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0NvcmRzIHtcblx0dmVydGljYWxQb3NpdGlvbjogbnVtYmVyO1xuXHRob3Jpem9udGFsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHN0YXRpYyBkZWZhdWx0SW5saW5lRGlhbG9nT2Zmc2V0OiBudW1iZXIgPSA4O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRcdFx0cGFnZVhPZmZzZXQ6IG51bWJlcixcblx0XHRcdFx0cGFnZVlPZmZzZXQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nT2Zmc2V0OiBudW1iZXIgPSBJbmxpbmVEaWFsb2dDb3Jkcy5kZWZhdWx0SW5saW5lRGlhbG9nT2Zmc2V0KSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDb3JkcyhlbGVtZW50LCBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsUG9zaXRpb247XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsUG9zaXRpb247XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHBhZ2VYT2Zmc2V0OiBudW1iZXIsIHBhZ2VZT2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdCxcblx0XHRcdGVsZW1lbnRSaWdodCA9IGVsZW1lbnRSZWN0LnJpZ2h0LFxuXHRcdFx0ZWxlbWVudFRvcCA9IGVsZW1lbnRSZWN0LnRvcDtcblxuXG5cdFx0c3dpdGNoICh0aGlzLnBsYWNlbWVudCkge1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5Cb3R0b206XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHBhZ2VZT2Zmc2V0ICsgZWxlbWVudFRvcCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuUmlnaHQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50UmlnaHQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkxlZnQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQgKyBwYWdlWE9mZnNldCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gcGFnZVlPZmZzZXQgKyBlbGVtZW50Qm90dG9tICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==