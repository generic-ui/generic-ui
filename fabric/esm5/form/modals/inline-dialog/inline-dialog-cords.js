/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element, pageXOffset, pageYOffset) {
        this.element = element;
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
        this.horizontalPosition = pageXOffset + elementLeft;
        this.verticalPosition = pageYOffset + elementBottom;
    };
    return InlineDialogCords;
}());
export { InlineDialogCords };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFJQywyQkFBb0IsT0FBbUIsRUFDcEMsV0FBbUIsRUFDbkIsV0FBbUI7UUFGRixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBR3RDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsK0NBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaURBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztJQUVPLDBDQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLE9BQW1CLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjs7WUFDN0UsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQ2hFLGFBQWEsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJO1FBRS9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBQ3JELENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7SUF6QkEsNkNBQXlCOztJQUN6QiwrQ0FBMkI7Ozs7O0lBRWYsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nQ29yZHMge1xuXHR2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXI7XG5cdGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRcdFx0cGFnZVhPZmZzZXQ6IG51bWJlcixcblx0XHRcdFx0cGFnZVlPZmZzZXQ6IG51bWJlcikge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCwgcGFnZVhPZmZzZXQsIHBhZ2VZT2Zmc2V0KTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBwYWdlWE9mZnNldDogbnVtYmVyLCBwYWdlWU9mZnNldDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tLFxuXHRcdFx0ZWxlbWVudExlZnQgPSBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBwYWdlWE9mZnNldCArIGVsZW1lbnRMZWZ0O1xuXHRcdHRoaXMudmVydGljYWxQb3NpdGlvbiA9IHBhZ2VZT2Zmc2V0ICsgZWxlbWVudEJvdHRvbTtcblx0fVxufVxuIl19