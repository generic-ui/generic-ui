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
    AggregateRoot.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
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
    /**
     * @abstract
     * @return {?}
     */
    AggregateRoot.prototype.createEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7Ozs7O0lBTUMsdUJBQXNCLFdBQWMsRUFDWixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBSUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBb0MsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUlELGdDQUFROzs7O0lBQVIsVUFBUyxJQUFrRDs7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsS0FBa0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBbkIsSUFBSSxPQUFLLGlCQUFBO29CQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO2lCQUN4Qjs7Ozs7Ozs7O1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7Ozs7OztJQXhDQSxvQ0FBZ0M7Ozs7O0lBRWhDLCtCQUFrRDs7Ozs7SUFHM0MsNkJBQTZCOzs7OztJQUtwQyxzREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVSb290PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IEk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEksXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZUlkO1xuXHRcdHRoaXMuZXZlbnRzID0gW107XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGVFdmVudCgpOiBUeXBlPEFnZ3JlZ2F0ZUV2ZW50PEk+PjtcblxuXHRnZXRJZCgpOiBJIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0Z2V0RXZlbnRzKCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+IHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudHMgYXMgUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj47XG5cdH1cblxuXHRhZGRFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8ST4pOiB2b2lkO1xuXHRhZGRFdmVudChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pik6IHZvaWQ7XG5cdGFkZEV2ZW50KGFyZ3M6IEFnZ3JlZ2F0ZUV2ZW50PEk+IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudHMucHVzaChhcmdzIGFzIEFnZ3JlZ2F0ZUV2ZW50PEk+KTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuXHR9XG59XG4iXX0=