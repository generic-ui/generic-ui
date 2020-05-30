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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7OztJQUFBO0lBOEJBLENBQUM7Ozs7O0lBcEJBLDBCQUFTOzs7O0lBQVQsVUFBVSxVQUFrQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG9CQUFHOzs7O0lBQUgsVUFBSSxPQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7SUFDRixDQUFDOzs7Ozs7SUFFUyw0QkFBVzs7Ozs7SUFBckIsVUFBc0IsT0FBVTtRQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaOztZQUVLLEdBQUcsR0FBVyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRXRDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7Ozs7OztJQTVCQSw0QkFBMkI7Ozs7O0lBRTNCLHlDQUF1Qjs7Ozs7SUFFdkIsd0NBQXNCOzs7Ozs7O0lBRXRCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9kb21haW4vbWVzc2FnZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dnZXI8TSBleHRlbmRzIE1lc3NhZ2U8YW55Pj4ge1xuXG5cdHByaXZhdGUgZG9tYWluTmFtZTogc3RyaW5nO1xuXG5cdGFic3RyYWN0IHN0YXJ0KCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc3RvcCgpOiB2b2lkO1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBwcmludChtZXNzYWdlOiBNKTogdm9pZDtcblxuXHRzZXREb21haW4oZG9tYWluTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5OYW1lID0gZG9tYWluTmFtZTtcblx0fVxuXG5cdGxvZyhtZXNzYWdlOiBNKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvdWxkUHJpbnQobWVzc2FnZSkpIHtcblx0XHRcdHRoaXMucHJpbnQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHNob3VsZFByaW50KG1lc3NhZ2U6IE0pOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5kb21haW5OYW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2c6IHN0cmluZyA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcblxuXHRcdHJldHVybiBsb2cuaW5jbHVkZXModGhpcy5kb21haW5OYW1lKTtcblx0fVxufVxuIl19