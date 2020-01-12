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
                this.verticalPosition = elementTop + this.inlineDialogOffset;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2lubGluZS1kaWFsb2ctY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwRDtJQU1DLDJCQUFvQixPQUFtQixFQUNwQyxXQUFtQixFQUNuQixXQUFtQixFQUNYLFNBQWlDLEVBQ2pDLGtCQUF3RTtRQUF4RSxtQ0FBQSxFQUFBLHFCQUE2QixpQkFBaUIsQ0FBQyx5QkFBeUI7UUFKL0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc1QixjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNEO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsK0NBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaURBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztJQUVPLDBDQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLE9BQW1CLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjs7WUFFN0UsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQ2hFLGFBQWEsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJOztZQUM5QixZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUs7O1lBQ2hDLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRztRQUc3QixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFdkIsS0FBSyxxQkFBcUIsQ0FBQyxNQUFNO2dCQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2hFLE1BQU07WUFFUCxLQUFLLHFCQUFxQixDQUFDLEdBQUc7Z0JBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0QsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsS0FBSztnQkFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUNuQyxNQUFNO1lBRVAsS0FBSyxxQkFBcUIsQ0FBQyxJQUFJO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBQ25DLE1BQU07WUFFUDtnQkFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQy9FO0lBRUYsQ0FBQztJQXREYywyQ0FBeUIsR0FBVyxDQUFDLENBQUM7SUF1RHRELHdCQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRFksaUJBQWlCOzs7Ozs7SUFJN0IsNENBQXFEOztJQUhyRCw2Q0FBeUI7O0lBQ3pCLCtDQUEyQjs7Ozs7SUFJZixvQ0FBMkI7Ozs7O0lBR3BDLHNDQUF5Qzs7Ozs7SUFDekMsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnLi9wbGFjZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nQ29yZHMge1xuXHR2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXI7XG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgc3RhdGljIGRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwYWdlWE9mZnNldDogbnVtYmVyLFxuXHRcdFx0XHRwYWdlWU9mZnNldDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IElubGluZURpYWxvZ0NvcmRzLmRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIHBhZ2VYT2Zmc2V0LCBwYWdlWU9mZnNldCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxQb3NpdGlvbjtcblx0fVxuXG5cdGdldEhvcml6b250YWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZiwgcGFnZVhPZmZzZXQ6IG51bWJlciwgcGFnZVlPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0LFxuXHRcdFx0ZWxlbWVudFJpZ2h0ID0gZWxlbWVudFJlY3QucmlnaHQsXG5cdFx0XHRlbGVtZW50VG9wID0gZWxlbWVudFJlY3QudG9wO1xuXG5cblx0XHRzd2l0Y2ggKHRoaXMucGxhY2VtZW50KSB7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkJvdHRvbTpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBwYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5Ub3A6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuUmlnaHQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50UmlnaHQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkxlZnQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQgKyBwYWdlWE9mZnNldCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gcGFnZVlPZmZzZXQgKyBlbGVtZW50Qm90dG9tICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==