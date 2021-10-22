/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class DynamicallyCreatedComponent {
    /**
     * @protected
     */
    constructor() {
        this.subClassConstructor = this.constructor;
        if (this.hasInputs()) {
            this.throwError('it cannot have properties annotated with @Inputs().');
        }
    }
    /**
     * @private
     * @return {?}
     */
    hasInputs() {
        return false;
        // Works with Angular 12
        // return !this.isEmpty((this.constructor as any).ɵcmp.inputs);
    }
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a DynamicallyCreatedComponent, ${reason}.`);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicallyCreatedComponent.prototype.subClassConstructor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvY29tcG9uZW50L2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLE9BQWdCLDJCQUEyQjs7OztJQUloRDtRQUNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUMsQ0FBQTtTQUN0RTtJQUNGLENBQUM7Ozs7O0lBRU8sU0FBUztRQUVoQixPQUFPLEtBQUssQ0FBQztRQUViLHdCQUF3QjtRQUN4QiwrREFBK0Q7SUFDaEUsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEdBQVc7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDdEIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztnQkFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLHVDQUF1QyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlHLENBQUM7Q0FDRDs7Ozs7O0lBNUJBLDBEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKHRoaXMuaGFzSW5wdXRzKCkpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgY2Fubm90IGhhdmUgcHJvcGVydGllcyBhbm5vdGF0ZWQgd2l0aCBASW5wdXRzKCkuJylcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0lucHV0cygpOiBib29sZWFuIHtcblxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRcdC8vIFdvcmtzIHdpdGggQW5ndWxhciAxMlxuXHRcdC8vIHJldHVybiAhdGhpcy5pc0VtcHR5KCh0aGlzLmNvbnN0cnVjdG9yIGFzIGFueSkuybVjbXAuaW5wdXRzKTtcblx0fVxuXG5cdHByaXZhdGUgaXNFbXB0eShvYmo6IE9iamVjdCkge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuXHRcdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==