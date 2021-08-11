/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class Modifier {
    /**
     * @protected
     * @param {?=} hostElement
     */
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    getElement(htmlElement) {
        return this.createModifier(htmlElement);
    }
    /**
     * @return {?}
     */
    getHost() {
        if (!this.hostElement) {
            throw new Error('Missing host element in DomRenderer constructor.');
        }
        return this.createModifier(this.hostElement);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL2NvcmUvbW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLE9BQWdCLFFBQVE7Ozs7O0lBRTdCLFlBQ2tCLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBRTNDLENBQUM7Ozs7O0lBSUQsVUFBVSxDQUFDLFdBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsT0FBTztRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNwRTtRQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNEOzs7Ozs7SUFsQkMsK0JBQTBDOzs7Ozs7O0lBSTNDLCtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGlmaWVyQXBpIH0gZnJvbSAnLi9tb2RpZmllci1hcGknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kaWZpZXI8VCBleHRlbmRzIE1vZGlmaWVyQXBpPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaG9zdEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBUO1xuXG5cdGdldEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0Z2V0SG9zdCgpOiBUIHtcblxuXHRcdGlmICghdGhpcy5ob3N0RWxlbWVudCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGhvc3QgZWxlbWVudCBpbiBEb21SZW5kZXJlciBjb25zdHJ1Y3Rvci4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNb2RpZmllcih0aGlzLmhvc3RFbGVtZW50KTtcblx0fVxufVxuIl19