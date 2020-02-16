/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InlineDialogPlacement } from './placement';
export class InlineDialogCords {
    /**
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @param {?=} placement
     * @param {?=} inlineDialogOffset
     */
    constructor(element, pageXOffset, pageYOffset, placement, inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset) {
        this.element = element;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
        this.calculateCords(element, pageXOffset, pageYOffset);
    }
    /**
     * @return {?}
     */
    getVerticalPosition() {
        return this.verticalPosition;
    }
    /**
     * @return {?}
     */
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @return {?}
     */
    calculateCords(element, pageXOffset, pageYOffset) {
        /** @type {?} */
        const elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = elementRect.bottom;
        /** @type {?} */
        const elementLeft = elementRect.left;
        /** @type {?} */
        const elementRight = elementRect.right;
        /** @type {?} */
        const elementTop = elementRect.top;
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
    }
}
InlineDialogCords.defaultInlineDialogOffset = 8;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2lubGluZS1kaWFsb2ctY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQU03QixZQUFvQixPQUFtQixFQUNwQyxXQUFtQixFQUNuQixXQUFtQixFQUNYLFNBQWlDLEVBQ2pDLHFCQUE2QixpQkFBaUIsQ0FBQyx5QkFBeUI7UUFKL0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc1QixjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNEO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBbUIsRUFBRSxXQUFtQixFQUFFLFdBQW1COztjQUU3RSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDaEUsYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNOztjQUNsQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUk7O2NBQzlCLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSzs7Y0FDaEMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHO1FBRTdCLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUV2QixLQUFLLHFCQUFxQixDQUFDLE1BQU07Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEUsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsR0FBRztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDM0UsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsS0FBSztnQkFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUNuQyxNQUFNO1lBRVAsS0FBSyxxQkFBcUIsQ0FBQyxJQUFJO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBQ25DLE1BQU07WUFFUDtnQkFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQy9FO0lBRUYsQ0FBQzs7QUFyRGMsMkNBQXlCLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7SUFBckQsNENBQXFEOztJQUhyRCw2Q0FBeUI7O0lBQ3pCLCtDQUEyQjs7Ozs7SUFJZixvQ0FBMkI7Ozs7O0lBR3BDLHNDQUF5Qzs7Ozs7SUFDekMsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnLi9wbGFjZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nQ29yZHMge1xuXHR2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXI7XG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgc3RhdGljIGRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwYWdlWE9mZnNldDogbnVtYmVyLFxuXHRcdFx0XHRwYWdlWU9mZnNldDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCxcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IElubGluZURpYWxvZ0NvcmRzLmRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIHBhZ2VYT2Zmc2V0LCBwYWdlWU9mZnNldCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxQb3NpdGlvbjtcblx0fVxuXG5cdGdldEhvcml6b250YWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZiwgcGFnZVhPZmZzZXQ6IG51bWJlciwgcGFnZVlPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0LFxuXHRcdFx0ZWxlbWVudFJpZ2h0ID0gZWxlbWVudFJlY3QucmlnaHQsXG5cdFx0XHRlbGVtZW50VG9wID0gZWxlbWVudFJlY3QudG9wO1xuXG5cdFx0c3dpdGNoICh0aGlzLnBsYWNlbWVudCkge1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5Cb3R0b206XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHBhZ2VZT2Zmc2V0ICsgZWxlbWVudFRvcCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuUmlnaHQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50UmlnaHQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkxlZnQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQgKyBwYWdlWE9mZnNldCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gcGFnZVlPZmZzZXQgKyBlbGVtZW50Qm90dG9tICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==