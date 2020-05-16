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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2FnZ3JlZ2F0ZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFJQyxxQkFBc0IsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQsOEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOzs7Ozs7Ozs7O0lBbkJBLDBCQUE2Qjs7Ozs7SUFNN0IsMERBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVJZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1aWQ6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IodWlkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVpZCA9IHVpZDtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsUm9vdElkKCk6IFJlYWRNb2RlbFJvb3RJZDtcblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0ZXF1YWxzKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVpZCA9PT0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblx0fVxufVxuIl19