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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7OztJQUVDLHdCQUNrQixXQUFjLEVBQ2QsSUFBWTtRQURaLGdCQUFXLEdBQVgsV0FBVyxDQUFHO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUM5QixDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sS0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLEtBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7Ozs7OztJQXJCQyxxQ0FBK0I7Ozs7O0lBQy9CLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUV2ZW50PFQgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBULFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nKSB7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdGVxdWFscyhldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHNCeVR5cGUoZXZlbnQpICYmXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkuZXF1YWxzKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFR5cGUoKSA9PT0gZXZlbnQuZ2V0VHlwZSgpO1xuXHR9XG5cbn1cbiJdfQ==