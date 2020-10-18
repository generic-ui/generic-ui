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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7Ozs7O0lBTUMsdUJBQXNCLFdBQWMsRUFDWixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBSUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBb0MsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUlELGdDQUFROzs7O0lBQVIsVUFBUyxJQUFrRDs7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsS0FBa0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBbkIsSUFBSSxPQUFLLGlCQUFBO29CQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO2lCQUN4Qjs7Ozs7Ozs7O1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7Ozs7OztJQXhDQSxvQ0FBZ0M7Ozs7O0lBRWhDLCtCQUFrRDs7Ozs7SUFHM0MsNkJBQTZCOzs7OztJQUtwQyxzREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnRUeXBlIH0gZnJvbSAnLi9hZ2dyZWdhdGUtZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZVJvb3Q8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogSTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlSWQ7XG5cdFx0dGhpcy5ldmVudHMgPSBbXTtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxJPj47XG5cblx0Z2V0SWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdGdldEV2ZW50cygpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzIGFzIFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+O1xuXHR9XG5cblx0YWRkRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PEk+KTogdm9pZDtcblx0YWRkRXZlbnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4pOiB2b2lkO1xuXHRhZGRFdmVudChhcmdzOiBBZ2dyZWdhdGVFdmVudDxJPiB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRcdGZvciAobGV0IGV2ZW50IG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXZlbnRzLnB1c2goYXJncyBhcyBBZ2dyZWdhdGVFdmVudDxJPik7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxufVxuIl19