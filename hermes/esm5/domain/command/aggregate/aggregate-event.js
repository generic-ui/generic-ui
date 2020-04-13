/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
AggregateEvent = /** @class */ (function () {
    function AggregateEvent(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    /**
     * @return {?}
     */
    AggregateEvent.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    AggregateEvent.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AggregateEvent.prototype.equals = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AggregateEvent.prototype.equalsByType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.getType() === event.getType();
    };
    return AggregateEvent;
}());
/**
 * @abstract
 * @template T
 */
export { AggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateEvent.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    AggregateEvent.prototype.type;
    /**
     * @abstract
     * @return {?}
     */
    AggregateEvent.prototype.toDomainEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBOzs7OztJQUVDLHdCQUNrQixXQUFjLEVBQ2QsSUFBWTtRQURaLGdCQUFXLEdBQVgsV0FBVyxDQUFHO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUM5QixDQUFDOzs7O0lBSUQsdUNBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sS0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLEtBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7Ozs7Ozs7OztJQXZCQyxxQ0FBK0I7Ozs7O0lBQy9CLDhCQUE2Qjs7Ozs7SUFHOUIseURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudC9kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlRXZlbnQ8VCBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IFQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0fVxuXG5cdGFic3RyYWN0IHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8VD47XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogQWdncmVnYXRlSWQge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRlcXVhbHMoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzQnlUeXBlKGV2ZW50KSAmJlxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdGVxdWFsc0J5VHlwZShldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUeXBlKCkgPT09IGV2ZW50LmdldFR5cGUoKTtcblx0fVxuXG59XG4iXX0=