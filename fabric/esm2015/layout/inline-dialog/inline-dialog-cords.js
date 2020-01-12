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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2lubGluZS1kaWFsb2ctY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQU03QixZQUFvQixPQUFtQixFQUNwQyxXQUFtQixFQUNuQixXQUFtQixFQUNYLFNBQWlDLEVBQ2pDLHFCQUE2QixpQkFBaUIsQ0FBQyx5QkFBeUI7UUFKL0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUc1QixjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNEO1FBQ2xGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBbUIsRUFBRSxXQUFtQixFQUFFLFdBQW1COztjQUU3RSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDaEUsYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNOztjQUNsQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUk7O2NBQzlCLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSzs7Y0FDaEMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHO1FBRzdCLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUV2QixLQUFLLHFCQUFxQixDQUFDLE1BQU07Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEUsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsR0FBRztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3RCxNQUFNO1lBRVAsS0FBSyxxQkFBcUIsQ0FBQyxLQUFLO2dCQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBQ25DLE1BQU07WUFFUCxLQUFLLHFCQUFxQixDQUFDLElBQUk7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztnQkFDbkMsTUFBTTtZQUVQO2dCQUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDL0U7SUFFRixDQUFDOztBQXREYywyQ0FBeUIsR0FBVyxDQUFDLENBQUM7Ozs7OztJQUFyRCw0Q0FBcUQ7O0lBSHJELDZDQUF5Qjs7SUFDekIsK0NBQTJCOzs7OztJQUlmLG9DQUEyQjs7Ozs7SUFHcEMsc0NBQXlDOzs7OztJQUN6QywrQ0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dDb3JkcyB7XG5cdHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzdGF0aWMgZGVmYXVsdElubGluZURpYWxvZ09mZnNldDogbnVtYmVyID0gODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHBhZ2VYT2Zmc2V0OiBudW1iZXIsXG5cdFx0XHRcdHBhZ2VZT2Zmc2V0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LFxuXHRcdFx0XHRwcml2YXRlIGlubGluZURpYWxvZ09mZnNldDogbnVtYmVyID0gSW5saW5lRGlhbG9nQ29yZHMuZGVmYXVsdElubGluZURpYWxvZ09mZnNldCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCwgcGFnZVhPZmZzZXQsIHBhZ2VZT2Zmc2V0KTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBwYWdlWE9mZnNldDogbnVtYmVyLCBwYWdlWU9mZnNldDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQsXG5cdFx0XHRlbGVtZW50UmlnaHQgPSBlbGVtZW50UmVjdC5yaWdodCxcblx0XHRcdGVsZW1lbnRUb3AgPSBlbGVtZW50UmVjdC50b3A7XG5cblxuXHRcdHN3aXRjaCAodGhpcy5wbGFjZW1lbnQpIHtcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuQm90dG9tOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRCb3R0b20gKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBwYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5SaWdodDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBwYWdlWE9mZnNldCArIGVsZW1lbnRSaWdodCArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuTGVmdDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdCArIHBhZ2VYT2Zmc2V0ICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IGVsZW1lbnRUb3A7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0IDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBwYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBwYWdlWU9mZnNldCArIGVsZW1lbnRCb3R0b20gKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHR9XG5cblx0fVxufVxuIl19