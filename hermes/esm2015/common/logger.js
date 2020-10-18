/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template M
 */
export class Logger {
    /**
     * @param {?} domainName
     * @return {?}
     */
    setDomain(domainName) {
        this.domainName = domainName;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    log(message) {
        if (this.shouldPrint(message)) {
            this.print(message);
        }
    }
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    shouldPrint(message) {
        if (!this.domainName) {
            return true;
        }
        /** @type {?} */
        const log = message.toString();
        return log.includes(this.domainName);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7SUFVM0IsU0FBUyxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQVU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7OztJQUVTLFdBQVcsQ0FBQyxPQUFVO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7O2NBRUssR0FBRyxHQUFXLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFdEMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Q7Ozs7OztJQTVCQSw0QkFBMkI7Ozs7O0lBRTNCLHlDQUF1Qjs7Ozs7SUFFdkIsd0NBQXNCOzs7Ozs7O0lBRXRCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi9tZXNzYWdlL21lc3NhZ2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nZ2VyPE0gZXh0ZW5kcyBNZXNzYWdlPGFueT4+IHtcblxuXHRwcml2YXRlIGRvbWFpbk5hbWU6IHN0cmluZztcblxuXHRhYnN0cmFjdCBzdGFydCgpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHN0b3AoKTogdm9pZDtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcHJpbnQobWVzc2FnZTogTSk6IHZvaWQ7XG5cblx0c2V0RG9tYWluKGRvbWFpbk5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluTmFtZSA9IGRvbWFpbk5hbWU7XG5cdH1cblxuXHRsb2cobWVzc2FnZTogTSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3VsZFByaW50KG1lc3NhZ2UpKSB7XG5cdFx0XHR0aGlzLnByaW50KG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzaG91bGRQcmludChtZXNzYWdlOiBNKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoIXRoaXMuZG9tYWluTmFtZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nOiBzdHJpbmcgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XG5cblx0XHRyZXR1cm4gbG9nLmluY2x1ZGVzKHRoaXMuZG9tYWluTmFtZSk7XG5cdH1cbn1cbiJdfQ==