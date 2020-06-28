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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7SUFVM0IsU0FBUyxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQVU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7OztJQUVTLFdBQVcsQ0FBQyxPQUFVO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7O2NBRUssR0FBRyxHQUFXLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFdEMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Q7Ozs7OztJQTVCQSw0QkFBMkI7Ozs7O0lBRTNCLHlDQUF1Qjs7Ozs7SUFFdkIsd0NBQXNCOzs7Ozs7O0lBRXRCLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9kb21haW4vbWVzc2FnZS9tZXNzYWdlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ2dlcjxNIGV4dGVuZHMgTWVzc2FnZTxhbnk+PiB7XG5cblx0cHJpdmF0ZSBkb21haW5OYW1lOiBzdHJpbmc7XG5cblx0YWJzdHJhY3Qgc3RhcnQoKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzdG9wKCk6IHZvaWQ7XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHByaW50KG1lc3NhZ2U6IE0pOiB2b2lkO1xuXG5cdHNldERvbWFpbihkb21haW5OYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbk5hbWUgPSBkb21haW5OYW1lO1xuXHR9XG5cblx0bG9nKG1lc3NhZ2U6IE0pOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zaG91bGRQcmludChtZXNzYWdlKSkge1xuXHRcdFx0dGhpcy5wcmludChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgc2hvdWxkUHJpbnQobWVzc2FnZTogTSk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKCF0aGlzLmRvbWFpbk5hbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvZzogc3RyaW5nID0gbWVzc2FnZS50b1N0cmluZygpO1xuXG5cdFx0cmV0dXJuIGxvZy5pbmNsdWRlcyh0aGlzLmRvbWFpbk5hbWUpO1xuXHR9XG59XG4iXX0=