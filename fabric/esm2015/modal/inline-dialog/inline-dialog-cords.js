/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InlineDialogPlacement } from './placement';
export class InlineDialogCords {
    /**
     * @param {?} element
     * @param {?} inlineDialogGeometry
     * @param {?} window
     * @param {?=} placement
     * @param {?=} inlineDialogOffset
     */
    constructor(element, inlineDialogGeometry, window, placement, inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset) {
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
     * @param {?} inlineDialogGeometry
     * @return {?}
     */
    calculateCords(element, inlineDialogGeometry) {
        /** @type {?} */
        const elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = this.window.pageYOffset + elementRect.bottom;
        /** @type {?} */
        const elementLeft = this.window.pageXOffset + elementRect.left;
        /** @type {?} */
        const elementRight = this.window.pageXOffset + elementRect.right;
        /** @type {?} */
        const elementTop = this.window.pageYOffset + elementRect.top;
        switch (this.placement) {
            case InlineDialogPlacement.Bottom:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Top:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementTop + this.inlineDialogOffset;
                break;
            case InlineDialogPlacement.Right:
                this.horizontalPosition = elementRight + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            case InlineDialogPlacement.Left:
                this.horizontalPosition = elementLeft + this.inlineDialogOffset;
                this.verticalPosition = elementTop;
                break;
            default:
                this.horizontalPosition = elementLeft;
                this.verticalPosition = elementBottom + this.inlineDialogOffset;
        }
        this.calculateDirection(inlineDialogGeometry, element);
    }
    /**
     * @private
     * @param {?} inlineDialogGeometry
     * @param {?} element
     * @return {?}
     */
    calculateDirection(inlineDialogGeometry, element) {
        /** @type {?} */
        const windowHeight = this.window.innerHeight + this.window.pageYOffset;
        /** @type {?} */
        const windowWidth = this.window.innerWidth + this.window.pageXOffset;
        /** @type {?} */
        const elementHeight = element.nativeElement.offsetHeight;
        /** @type {?} */
        const elementWidth = element.nativeElement.offsetWidth;
        /** @type {?} */
        const inlineDialogHeight = inlineDialogGeometry.getHeight();
        /** @type {?} */
        const inlineDialogWidth = inlineDialogGeometry.getWidth();
        /** @type {?} */
        const inlineDialogDoesNotFitHorizontally = (windowWidth - this.horizontalPosition - inlineDialogWidth) < 0;
        /** @type {?} */
        const inlineDialogDoesNotFitVertically = (windowHeight - this.verticalPosition - inlineDialogHeight) < 0;
        if (inlineDialogDoesNotFitHorizontally) {
            this.horizontalPosition -= inlineDialogWidth - elementWidth;
        }
        if (inlineDialogDoesNotFitVertically) {
            this.verticalPosition -= inlineDialogHeight - elementHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBTTdCLFlBQW9CLE9BQW1CLEVBQzVCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsU0FBaUMsRUFDakMscUJBQTZCLGlCQUFpQixDQUFDLHlCQUF5QjtRQUovRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzVCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQXdCO1FBQ2pDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0Q7UUFDbEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxPQUFtQixFQUFFLG9CQUEwQzs7Y0FFL0UsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2NBQ2hFLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTTs7Y0FDNUQsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJOztjQUN4RCxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUs7O2NBQzFELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRztRQUV2RCxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFdkIsS0FBSyxxQkFBcUIsQ0FBQyxNQUFNO2dCQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEUsTUFBTTtZQUVQLEtBQUsscUJBQXFCLENBQUMsR0FBRztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdELE1BQU07WUFFUCxLQUFLLHFCQUFxQixDQUFDLEtBQUs7Z0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUNuQyxNQUFNO1lBRVAsS0FBSyxxQkFBcUIsQ0FBQyxJQUFJO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztnQkFDbkMsTUFBTTtZQUVQO2dCQUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxvQkFBMEMsRUFBRSxPQUFtQjs7Y0FDbkYsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVzs7Y0FDckUsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVzs7Y0FDOUQsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWTs7Y0FDbEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVzs7Y0FDaEQsa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxFQUFFOztjQUNyRCxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUU7O2NBRTlDLGtDQUFrQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7O2NBQ3pHLGdDQUFnQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7UUFFbkcsSUFBSSxrQ0FBa0MsRUFBRTtZQUN2QyxJQUFJLENBQUMsa0JBQWtCLElBQUksaUJBQWlCLEdBQUcsWUFBWSxDQUFDO1NBQzVEO1FBRUQsSUFBSSxnQ0FBZ0MsRUFBRTtZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksa0JBQWtCLEdBQUcsYUFBYSxDQUFDO1NBQzVEO0lBQ0YsQ0FBQzs7QUExRWMsMkNBQXlCLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7SUFBckQsNENBQXFEOztJQUhyRCw2Q0FBeUI7O0lBQ3pCLCtDQUEyQjs7Ozs7SUFJZixvQ0FBMkI7Ozs7O0lBQ3BDLGlEQUFrRDs7Ozs7SUFDbEQsbUNBQXNCOzs7OztJQUN0QixzQ0FBeUM7Ozs7O0lBQ3pDLCtDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5IH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWdlb21ldHJ5JztcblxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0NvcmRzIHtcblx0dmVydGljYWxQb3NpdGlvbjogbnVtYmVyO1xuXHRob3Jpem9udGFsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHN0YXRpYyBkZWZhdWx0SW5saW5lRGlhbG9nT2Zmc2V0OiBudW1iZXIgPSA4O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeTogSW5saW5lRGlhbG9nR2VvbWV0cnksXG5cdFx0XHRcdHByaXZhdGUgd2luZG93OiBXaW5kb3csXG5cdFx0XHRcdHByaXZhdGUgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LFxuXHRcdFx0XHRwcml2YXRlIGlubGluZURpYWxvZ09mZnNldDogbnVtYmVyID0gSW5saW5lRGlhbG9nQ29yZHMuZGVmYXVsdElubGluZURpYWxvZ09mZnNldCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCwgaW5saW5lRGlhbG9nR2VvbWV0cnkpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsUG9zaXRpb247XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsUG9zaXRpb247XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGlubGluZURpYWxvZ0dlb21ldHJ5OiBJbmxpbmVEaWFsb2dHZW9tZXRyeSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gdGhpcy53aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJlY3QubGVmdCxcblx0XHRcdGVsZW1lbnRSaWdodCA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJlY3QucmlnaHQsXG5cdFx0XHRlbGVtZW50VG9wID0gdGhpcy53aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC50b3A7XG5cblx0XHRzd2l0Y2ggKHRoaXMucGxhY2VtZW50KSB7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkJvdHRvbTpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSArIHRoaXMuaW5saW5lRGlhbG9nT2Zmc2V0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50VG9wICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIElubGluZURpYWxvZ1BsYWNlbWVudC5SaWdodDpcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50UmlnaHQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgSW5saW5lRGlhbG9nUGxhY2VtZW50LkxlZnQ6XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQgKyB0aGlzLmlubGluZURpYWxvZ09mZnNldDtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGVsZW1lbnRMZWZ0O1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tICsgdGhpcy5pbmxpbmVEaWFsb2dPZmZzZXQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVEaXJlY3Rpb24oaW5saW5lRGlhbG9nR2VvbWV0cnksIGVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEaXJlY3Rpb24oaW5saW5lRGlhbG9nR2VvbWV0cnk6IElubGluZURpYWxvZ0dlb21ldHJ5LCBlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gdGhpcy53aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdHdpbmRvd1dpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aCArIHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0ZWxlbWVudEhlaWdodCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRlbGVtZW50V2lkdGggPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0XHRpbmxpbmVEaWFsb2dIZWlnaHQgPSBpbmxpbmVEaWFsb2dHZW9tZXRyeS5nZXRIZWlnaHQoKSxcblx0XHRcdGlubGluZURpYWxvZ1dpZHRoID0gaW5saW5lRGlhbG9nR2VvbWV0cnkuZ2V0V2lkdGgoKTtcblxuXHRcdGNvbnN0IGlubGluZURpYWxvZ0RvZXNOb3RGaXRIb3Jpem9udGFsbHkgPSAod2luZG93V2lkdGggLSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiAtIGlubGluZURpYWxvZ1dpZHRoKSA8IDAsXG5cdFx0XHRpbmxpbmVEaWFsb2dEb2VzTm90Rml0VmVydGljYWxseSA9ICh3aW5kb3dIZWlnaHQgLSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gLSBpbmxpbmVEaWFsb2dIZWlnaHQpIDwgMDtcblxuXHRcdGlmIChpbmxpbmVEaWFsb2dEb2VzTm90Rml0SG9yaXpvbnRhbGx5KSB7XG5cdFx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiAtPSBpbmxpbmVEaWFsb2dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcblx0XHR9XG5cblx0XHRpZiAoaW5saW5lRGlhbG9nRG9lc05vdEZpdFZlcnRpY2FsbHkpIHtcblx0XHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiAtPSBpbmxpbmVEaWFsb2dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cbn1cbiJdfQ==