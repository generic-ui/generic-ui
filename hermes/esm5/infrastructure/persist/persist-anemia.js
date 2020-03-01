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
        return this.getAggregateId().toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hbmVtaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9wZXJzaXN0L3BlcnNpc3QtYW5lbWlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztJQUlDLHVCQUFzQixHQUFnQjtRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsc0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw2QkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7Ozs7Ozs7O0lBZEEsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RBbmVtaWEge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1aWQ6IEFnZ3JlZ2F0ZUlkKSB7XG5cdFx0dGhpcy5hZ2dyZWdhdGVJZCA9IHVpZDtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpO1xuXHR9XG5cbn1cbiJdfQ==