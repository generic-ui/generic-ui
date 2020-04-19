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
AggregateId = /** @class */ (function () {
    function AggregateId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    AggregateId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @return {?}
     */
    AggregateId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    AggregateId.prototype.equals = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.uid === aggregateId.getId();
    };
    return AggregateId;
}());
/**
 * @abstract
 */
export { AggregateId };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    AggregateId.prototype.toReadModelRootId = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2FnZ3JlZ2F0ZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFJQyxxQkFBc0IsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOzs7Ozs7Ozs7O0lBbkJBLDBCQUE2Qjs7Ozs7SUFNN0IsMERBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZmVhdHVyZS1hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlSWQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdWlkOiBzdHJpbmc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nKSB7XG5cdFx0dGhpcy51aWQgPSB1aWQ7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbFJvb3RJZCgpOiBSZWFkTW9kZWxSb290SWQ7XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy51aWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGVxdWFscyhhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy51aWQgPT09IGFnZ3JlZ2F0ZUlkLmdldElkKCk7XG5cdH1cbn1cbiJdfQ==