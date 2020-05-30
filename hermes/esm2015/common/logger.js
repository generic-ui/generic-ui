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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7SUFVM0IsU0FBUyxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQVU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7OztJQUVTLFdBQVcsQ0FBQyxPQUFVO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7O2NBRUssR0FBRyxHQUFXLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFdEMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Q7Ozs7OztJQTVCQSw0QkFBMkI7Ozs7O0lBRTNCLHlDQUF1Qjs7Ozs7SUFFdkIsd0NBQXNCOzs7Ozs7O0lBRXRCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9kb21haW4vbWVzc2FnZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dnZXI8TSBleHRlbmRzIE1lc3NhZ2U8YW55Pj4ge1xuXG5cdHByaXZhdGUgZG9tYWluTmFtZTogc3RyaW5nO1xuXG5cdGFic3RyYWN0IHN0YXJ0KCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc3RvcCgpOiB2b2lkO1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBwcmludChtZXNzYWdlOiBNKTogdm9pZDtcblxuXHRzZXREb21haW4oZG9tYWluTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5OYW1lID0gZG9tYWluTmFtZTtcblx0fVxuXG5cdGxvZyhtZXNzYWdlOiBNKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvdWxkUHJpbnQobWVzc2FnZSkpIHtcblx0XHRcdHRoaXMucHJpbnQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHNob3VsZFByaW50KG1lc3NhZ2U6IE0pOiBib29sZWFuIHtcblxuXHRcdGlmICghdGhpcy5kb21haW5OYW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2c6IHN0cmluZyA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcblxuXHRcdHJldHVybiBsb2cuaW5jbHVkZXModGhpcy5kb21haW5OYW1lKTtcblx0fVxufVxuIl19