/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
 */
AggregateRoot = /** @class */ (function () {
    function AggregateRoot(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getEvents = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.events));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    AggregateRoot.prototype.addEvent = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var e_1, _a;
        if (Array.isArray(args)) {
            try {
                for (var args_1 = tslib_1.__values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var event_1 = args_1_1.value;
                    this.events.push(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.events.push((/** @type {?} */ (args)));
        }
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    return AggregateRoot;
}());
/**
 * @abstract
 * @template I
 */
export { AggregateRoot };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.events;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7Ozs7O0lBTUMsdUJBQXNCLFdBQWMsRUFDWixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQW9DLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFJRCxnQ0FBUTs7OztJQUFSLFVBQVMsSUFBa0Q7O1FBRTFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQWtCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQW5CLElBQUksT0FBSyxpQkFBQTtvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQztpQkFDeEI7Ozs7Ozs7OztTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQXFCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQzs7Ozs7Ozs7Ozs7SUFsQ0Esb0NBQWdDOzs7OztJQUVoQywrQkFBa0Q7Ozs7O0lBRzNDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlUm9vdDxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGVJZDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdO1xuXHR9XG5cblx0Z2V0SWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRFdmVudHMoKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4ge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50cyBhcyBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pjtcblx0fVxuXG5cdGFkZEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxJPik6IHZvaWQ7XG5cdGFkZEV2ZW50KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+KTogdm9pZDtcblx0YWRkRXZlbnQoYXJnczogQWdncmVnYXRlRXZlbnQ8ST4gfCBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGFyZ3MgYXMgQWdncmVnYXRlRXZlbnQ8ST4pO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLmxlbmd0aCA9IDA7XG5cdH1cbn1cbiJdfQ==