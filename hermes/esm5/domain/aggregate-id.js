/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AggregateId = /** @class */ (function () {
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
export { AggregateId };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateId.prototype.uid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2FnZ3JlZ2F0ZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFJQyxxQkFBWSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7Ozs7Ozs7SUFqQkEsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nKSB7XG5cdFx0dGhpcy51aWQgPSB1aWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0ZXF1YWxzKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVpZCA9PT0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblx0fVxufVxuIl19