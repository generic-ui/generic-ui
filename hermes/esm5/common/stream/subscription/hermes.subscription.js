/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HermesSubscription = /** @class */ (function () {
    function HermesSubscription(finalize, isClosed) {
        this.closed = false;
        this.finalize = (/**
         * @return {?}
         */
        function () {
        });
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    /**
     * @return {?}
     */
    HermesSubscription.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    };
    /**
     * @return {?}
     */
    HermesSubscription.prototype.getFinalize = /**
     * @return {?}
     */
    function () {
        return this.finalize;
    };
    return HermesSubscription;
}());
export { HermesSubscription };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.finalize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBT0MsNEJBQVksUUFBcUIsRUFBRSxRQUFrQjtRQUw3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRWYsYUFBUTs7O1FBQWU7UUFDeEMsQ0FBQyxFQUFDO1FBSUQsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxJQUFJO1lBQzlDLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUN6QjtRQUVELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUVDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDOzs7Ozs7O0lBOUJBLG9DQUFnQzs7Ozs7SUFFaEMsc0NBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmluYWxpemU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cdH07XG5cblx0Y29uc3RydWN0b3IoZmluYWxpemU/OiAoKSA9PiB2b2lkLCBpc0Nsb3NlZD86IGJvb2xlYW4pIHtcblxuXHRcdGlmIChmaW5hbGl6ZSAhPT0gdW5kZWZpbmVkICYmIGZpbmFsaXplICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmluYWxpemUgPSBmaW5hbGl6ZTtcblx0XHR9XG5cblx0XHRpZiAoaXNDbG9zZWQgIT09IHVuZGVmaW5lZCAmJiBpc0Nsb3NlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jbG9zZWQgPSBpc0Nsb3NlZDtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmZpbmFsaXplKCk7XG5cdH1cblxuXHRnZXRGaW5hbGl6ZSgpOiAoKSA9PiB2b2lkIHtcblx0XHRyZXR1cm4gdGhpcy5maW5hbGl6ZTtcblx0fVxufVxuIl19