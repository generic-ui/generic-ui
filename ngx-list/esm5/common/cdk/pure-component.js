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
PureComponent = /** @class */ (function () {
    function PureComponent() {
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = ((/** @type {?} */ (this))).ngOnInit;
        if (this.isEmptyConstructor() || arguments.length !== 0) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    /**
     * @private
     * @return {?}
     */
    PureComponent.prototype.isEmptyConstructor = /**
     * @private
     * @return {?}
     */
    function () {
        return this.subClassConstructor.toString().split('(')[1][0] !== ')';
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    PureComponent.prototype.throwError = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        throw new Error("Component \"" + this.subClassConstructor.name + "\" is a PureComponent, " + reason + ".");
    };
    return PureComponent;
}());
/**
 * @abstract
 */
export { PureComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassConstructor;
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassNgOnInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvcHVyZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBTUM7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7Ozs7O0lBRU8sMENBQWtCOzs7O0lBQTFCO1FBQ0MsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7SUFFTyxrQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLCtCQUF5QixNQUFNLE1BQUcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7Ozs7Ozs7SUF4QkEsNENBQStDOzs7OztJQUUvQyx5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgUHVyZUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc0NvbnN0cnVjdG9yOiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YkNsYXNzTmdPbkluaXQ6IEZ1bmN0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN1YkNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdHRoaXMuc3ViQ2xhc3NOZ09uSW5pdCA9ICh0aGlzIGFzIGFueSkubmdPbkluaXQ7XG5cblx0XHRpZiAodGhpcy5pc0VtcHR5Q29uc3RydWN0b3IoKSB8fCBhcmd1bWVudHMubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHR0aGlzLnRocm93RXJyb3IoJ2l0IHNob3VsZCBub3QgaW5qZWN0IHNlcnZpY2VzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3ViQ2xhc3NOZ09uSW5pdCkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IHVzZSBuZ09uSW5pdCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNFbXB0eUNvbnN0cnVjdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1YkNsYXNzQ29uc3RydWN0b3IudG9TdHJpbmcoKS5zcGxpdCgnKCcpWzFdWzBdICE9PSAnKSc7XG5cdH1cblxuXHRwcml2YXRlIHRocm93RXJyb3IocmVhc29uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBcIiR7dGhpcy5zdWJDbGFzc0NvbnN0cnVjdG9yLm5hbWV9XCIgaXMgYSBQdXJlQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==