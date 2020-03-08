/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixjQUFjOzs7Ozs7SUFFbkMsWUFDa0IsV0FBd0IsRUFDeEIsSUFBWTtRQURaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDOUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBRUQ7Ozs7OztJQXJCQyxxQ0FBeUM7Ozs7O0lBQ3pDLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0ZXF1YWxzKGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVxdWFsc0J5VHlwZShldmVudCkgJiZcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKS5lcXVhbHMoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VHlwZSgpID09PSBldmVudC5nZXRUeXBlKCk7XG5cdH1cblxufVxuIl19