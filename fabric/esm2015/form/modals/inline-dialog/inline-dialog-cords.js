/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class InlineDialogCords {
    /**
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     */
    constructor(element, pageXOffset, pageYOffset) {
        this.element = element;
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
        this.horizontalPosition = pageXOffset + elementLeft;
        this.verticalPosition = pageYOffset + elementBottom;
    }
}
if (false) {
    /** @type {?} */
    InlineDialogCords.prototype.verticalPosition;
    /** @type {?} */
    InlineDialogCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBSTdCLFlBQW9CLE9BQW1CLEVBQ3BDLFdBQW1CLEVBQ25CLFdBQW1CO1FBRkYsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUd0QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQW1CLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjs7Y0FDN0UsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2NBQ2hFLGFBQWEsR0FBRyxXQUFXLENBQUMsTUFBTTs7Y0FDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJO1FBRS9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBQ3JELENBQUM7Q0FDRDs7O0lBekJBLDZDQUF5Qjs7SUFDekIsK0NBQTJCOzs7OztJQUVmLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0NvcmRzIHtcblx0dmVydGljYWxQb3NpdGlvbjogbnVtYmVyO1xuXHRob3Jpem9udGFsUG9zaXRpb246IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHBhZ2VYT2Zmc2V0OiBudW1iZXIsXG5cdFx0XHRcdHBhZ2VZT2Zmc2V0OiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIHBhZ2VYT2Zmc2V0LCBwYWdlWU9mZnNldCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxQb3NpdGlvbjtcblx0fVxuXG5cdGdldEhvcml6b250YWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxQb3NpdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZiwgcGFnZVhPZmZzZXQ6IG51bWJlciwgcGFnZVlPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gcGFnZVhPZmZzZXQgKyBlbGVtZW50TGVmdDtcblx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBwYWdlWU9mZnNldCArIGVsZW1lbnRCb3R0b207XG5cdH1cbn1cbiJdfQ==