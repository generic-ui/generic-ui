/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class InlineDialogCords {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.calculateCords(element);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    calculateCords(element) {
        /** @type {?} */
        const elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const elementBottom = elementRect.bottom;
        /** @type {?} */
        const elementLeft = elementRect.left;
        this.horizontalPosition = window.pageXOffset + elementLeft;
        this.verticalPosition = window.pageYOffset + elementBottom;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUk3QixZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQW1COztjQUNuQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDaEUsYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNOztjQUNsQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUk7UUFFL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztDQUNEOzs7SUF2QkEsNkNBQXlCOztJQUN6QiwrQ0FBMkI7Ozs7O0lBRWYsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nQ29yZHMge1xuXHR2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXI7XG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG5cblx0XHR0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCArIGVsZW1lbnRCb3R0b207XG5cdH1cblxuXHRnZXRWZXJ0aWNhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxQb3NpdGlvbjtcblx0fVxuXG5cdGdldEhvcml6b250YWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxQb3NpdGlvbjtcblx0fVxufVxuIl19