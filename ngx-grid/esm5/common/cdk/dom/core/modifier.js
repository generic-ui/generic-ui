/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Modifier = /** @class */ (function () {
    function Modifier(hostElement) {
        this.hostElement = hostElement;
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    Modifier.prototype.getElement = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        return this.createModifier(htmlElement);
    };
    /**
     * @return {?}
     */
    Modifier.prototype.getHost = /**
     * @return {?}
     */
    function () {
        if (!this.hostElement) {
            throw new Error('Missing host element in DomRenderer constructor.');
        }
        return this.createModifier(this.hostElement);
    };
    return Modifier;
}());
/**
 * @abstract
 * @template T
 */
export { Modifier };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Modifier.prototype.hostElement;
    /**
     * @abstract
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    Modifier.prototype.createModifier = function (htmlElement) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL2NvcmUvbW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7Ozs7SUFFQyxrQkFDa0IsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFFM0MsQ0FBQzs7Ozs7SUFJRCw2QkFBVTs7OztJQUFWLFVBQVcsV0FBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCwwQkFBTzs7O0lBQVA7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDcEU7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQzs7Ozs7Ozs7Ozs7SUFsQkMsK0JBQTBDOzs7Ozs7O0lBSTNDLCtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGlmaWVyQXBpIH0gZnJvbSAnLi9tb2RpZmllci1hcGknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kaWZpZXI8VCBleHRlbmRzIE1vZGlmaWVyQXBpPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaG9zdEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBUO1xuXG5cdGdldEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0Z2V0SG9zdCgpOiBUIHtcblxuXHRcdGlmICghdGhpcy5ob3N0RWxlbWVudCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGhvc3QgZWxlbWVudCBpbiBEb21SZW5kZXJlciBjb25zdHJ1Y3Rvci4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNb2RpZmllcih0aGlzLmhvc3RFbGVtZW50KTtcblx0fVxufVxuIl19