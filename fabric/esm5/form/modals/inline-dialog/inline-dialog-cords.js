/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element) {
        this.element = element;
        this.calculateCords(element);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    InlineDialogCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = elementRect.bottom;
        /** @type {?} */
        var elementLeft = elementRect.left;
        this.horizontalPosition = window.pageXOffset + elementLeft;
        this.verticalPosition = window.pageYOffset + elementBottom;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vbW9kYWxzL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFJQywyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVPLDBDQUFjOzs7OztJQUF0QixVQUF1QixPQUFtQjs7WUFDbkMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQ2hFLGFBQWEsR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJO1FBRS9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELCtDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlEQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQzs7OztJQXZCQSw2Q0FBeUI7O0lBQ3pCLCtDQUEyQjs7Ozs7SUFFZixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dDb3JkcyB7XG5cdHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblx0aG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDb3JkcyhlbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0ZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudExlZnQ7XG5cdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgZWxlbWVudEJvdHRvbTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG59XG4iXX0=