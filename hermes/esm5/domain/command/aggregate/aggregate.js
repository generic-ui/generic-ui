/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 */
var /**
 * @abstract
 */
Aggregate = /** @class */ (function () {
    function Aggregate(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    Aggregate.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    Aggregate.prototype.getEvents = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.events));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    Aggregate.prototype.addEvent = /**
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
    Aggregate.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    return Aggregate;
}());
/**
 * @abstract
 */
export { Aggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.events;
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBOzs7O0lBTUMsbUJBQXNCLFdBQXdCLEVBQ3RCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx5QkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBaUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUlELDRCQUFROzs7O0lBQVIsVUFBUyxJQUE0Qzs7UUFFcEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsS0FBa0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBbkIsSUFBSSxPQUFLLGlCQUFBO29CQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO2lCQUN4Qjs7Ozs7Ozs7O1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBa0IsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0YsQ0FBQzs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDOzs7Ozs7Ozs7O0lBbENBLGdDQUEwQzs7Ozs7SUFFMUMsMkJBQStDOzs7OztJQUd4Qyx5QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGVJZDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdO1xuXHR9XG5cblx0Z2V0SWQoKTogQWdncmVnYXRlSWQge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0RXZlbnRzKCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudHMgYXMgUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cdH1cblxuXHRhZGRFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQpOiB2b2lkO1xuXHRhZGRFdmVudChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IHZvaWQ7XG5cdGFkZEV2ZW50KGFyZ3M6IEFnZ3JlZ2F0ZUV2ZW50IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudHMucHVzaChhcmdzIGFzIEFnZ3JlZ2F0ZUV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuXHR9XG59XG4iXX0=