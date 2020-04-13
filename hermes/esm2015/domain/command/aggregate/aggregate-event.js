/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class AggregateEvent {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} type
     */
    constructor(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    /**
     * @return {?}
     */
    getAggregateId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    equals(event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    equalsByType(event) {
        return this.getType() === event.getType();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU0sT0FBZ0IsY0FBYzs7Ozs7O0lBRW5DLFlBQ2tCLFdBQWMsRUFDZCxJQUFZO1FBRFosZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQzlCLENBQUM7Ozs7SUFJRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUVEOzs7Ozs7SUF2QkMscUNBQStCOzs7OztJQUMvQiw4QkFBNkI7Ozs7O0lBRzlCLHlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUV2ZW50PFQgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBULFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nKSB7XG5cdH1cblxuXHRhYnN0cmFjdCB0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFQ+O1xuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0ZXF1YWxzKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVxdWFsc0J5VHlwZShldmVudCkgJiZcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKS5lcXVhbHMoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VHlwZSgpID09PSBldmVudC5nZXRUeXBlKCk7XG5cdH1cblxufVxuIl19