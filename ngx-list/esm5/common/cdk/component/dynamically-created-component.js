/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
DynamicallyCreatedComponent = /** @class */ (function () {
    function DynamicallyCreatedComponent() {
        this.subClassConstructor = this.constructor;
        if (this.hasInputs()) {
            this.throwError('it cannot have properties annotated with @Inputs().');
        }
    }
    /**
     * @private
     * @return {?}
     */
    DynamicallyCreatedComponent.prototype.hasInputs = /**
     * @private
     * @return {?}
     */
    function () {
        return false;
        // Works with Angular 12
        // return !this.isEmpty((this.constructor as any).ɵcmp.inputs);
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    DynamicallyCreatedComponent.prototype.isEmpty = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    DynamicallyCreatedComponent.prototype.throwError = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        throw new Error("Component \"" + this.subClassConstructor.name + "\" is a DynamicallyCreatedComponent, " + reason + ".");
    };
    return DynamicallyCreatedComponent;
}());
/**
 * @abstract
 */
export { DynamicallyCreatedComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicallyCreatedComponent.prototype.subClassConstructor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvY29tcG9uZW50L2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQUlDO1FBQ0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO1NBQ3RFO0lBQ0YsQ0FBQzs7Ozs7SUFFTywrQ0FBUzs7OztJQUFqQjtRQUVDLE9BQU8sS0FBSyxDQUFDO1FBRWIsd0JBQXdCO1FBQ3hCLCtEQUErRDtJQUNoRSxDQUFDOzs7Ozs7SUFFTyw2Q0FBTzs7Ozs7SUFBZixVQUFnQixHQUFXO1FBQzFCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ3RCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVPLGdEQUFVOzs7OztJQUFsQixVQUFtQixNQUFjO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksNkNBQXVDLE1BQU0sTUFBRyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUNGLGtDQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7Ozs7Ozs7OztJQTVCQSwwREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YkNsYXNzQ29uc3RydWN0b3I6IEZ1bmN0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN1YkNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0aGlzLmhhc0lucHV0cygpKSB7XG5cdFx0XHR0aGlzLnRocm93RXJyb3IoJ2l0IGNhbm5vdCBoYXZlIHByb3BlcnRpZXMgYW5ub3RhdGVkIHdpdGggQElucHV0cygpLicpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoYXNJbnB1dHMoKTogYm9vbGVhbiB7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHQvLyBXb3JrcyB3aXRoIEFuZ3VsYXIgMTJcblx0XHQvLyByZXR1cm4gIXRoaXMuaXNFbXB0eSgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLsm1Y21wLmlucHV0cyk7XG5cdH1cblxuXHRwcml2YXRlIGlzRW1wdHkob2JqOiBPYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcblx0XHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdGhyb3dFcnJvcihyZWFzb246IHN0cmluZyk6IHZvaWQge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IFwiJHt0aGlzLnN1YkNsYXNzQ29uc3RydWN0b3IubmFtZX1cIiBpcyBhIER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCwgJHtyZWFzb259LmApO1xuXHR9XG59XG4iXX0=