/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template M
 */
var /**
 * @abstract
 * @template M
 */
Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * @param {?} domainName
     * @return {?}
     */
    Logger.prototype.setDomain = /**
     * @param {?} domainName
     * @return {?}
     */
    function (domainName) {
        this.domainName = domainName;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.log = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.shouldPrint(message)) {
            this.print(message);
        }
    };
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.shouldPrint = /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (!this.domainName) {
            return true;
        }
        /** @type {?} */
        var log = message.toString();
        return log.includes(this.domainName);
    };
    return Logger;
}());
/**
 * @abstract
 * @template M
 */
export { Logger };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Logger.prototype.domainName;
    /**
     * @abstract
     * @return {?}
     */
    Logger.prototype.start = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Logger.prototype.stop = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} message
     * @return {?}
     */
    Logger.prototype.print = function (message) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7OztJQUFBO0lBOEJBLENBQUM7Ozs7O0lBcEJBLDBCQUFTOzs7O0lBQVQsVUFBVSxVQUFrQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG9CQUFHOzs7O0lBQUgsVUFBSSxPQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7SUFDRixDQUFDOzs7Ozs7SUFFUyw0QkFBVzs7Ozs7SUFBckIsVUFBc0IsT0FBVTtRQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaOztZQUVLLEdBQUcsR0FBVyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRXRDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7Ozs7OztJQTVCQSw0QkFBMkI7Ozs7O0lBRTNCLHlDQUF1Qjs7Ozs7SUFFdkIsd0NBQXNCOzs7Ozs7O0lBRXRCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9kb21haW4vbWVzc2FnZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dnZXI8TSBleHRlbmRzIE1lc3NhZ2U+IHtcblxuXHRwcml2YXRlIGRvbWFpbk5hbWU6IHN0cmluZztcblxuXHRhYnN0cmFjdCBzdGFydCgpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHN0b3AoKTogdm9pZDtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcHJpbnQobWVzc2FnZTogTSk6IHZvaWQ7XG5cblx0c2V0RG9tYWluKGRvbWFpbk5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluTmFtZSA9IGRvbWFpbk5hbWU7XG5cdH1cblxuXHRsb2cobWVzc2FnZTogTSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3VsZFByaW50KG1lc3NhZ2UpKSB7XG5cdFx0XHR0aGlzLnByaW50KG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzaG91bGRQcmludChtZXNzYWdlOiBNKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuZG9tYWluTmFtZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nOiBzdHJpbmcgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XG5cblx0XHRyZXR1cm4gbG9nLmluY2x1ZGVzKHRoaXMuZG9tYWluTmFtZSk7XG5cdH1cbn1cbiJdfQ==