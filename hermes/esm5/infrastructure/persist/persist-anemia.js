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
PersistAnemia = /** @class */ (function () {
    function PersistAnemia(uid) {
        this.aggregateId = uid;
    }
    /**
     * @return {?}
     */
    PersistAnemia.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    PersistAnemia.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId.toString();
    };
    return PersistAnemia;
}());
/**
 * @abstract
 */
export { PersistAnemia };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistAnemia.prototype.aggregateId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hbmVtaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9wZXJzaXN0L3BlcnNpc3QtYW5lbWlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztJQUlDLHVCQUFzQixHQUFnQjtRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsc0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw2QkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7Ozs7Ozs7OztJQWRBLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0QW5lbWlhIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IodWlkOiBBZ2dyZWdhdGVJZCkge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSB1aWQ7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCk7XG5cdH1cblxufVxuIl19