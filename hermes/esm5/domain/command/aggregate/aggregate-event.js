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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFFQyx3QkFDa0IsV0FBd0IsRUFDeEIsSUFBWTtRQURaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDOUIsQ0FBQzs7OztJQUVELHVDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsK0JBQU07Ozs7SUFBTixVQUFPLEtBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxLQUFxQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQzs7Ozs7Ozs7OztJQXJCQyxxQ0FBeUM7Ozs7O0lBQ3pDLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0ZXF1YWxzKGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVxdWFsc0J5VHlwZShldmVudCkgJiZcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKS5lcXVhbHMoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VHlwZSgpID09PSBldmVudC5nZXRUeXBlKCk7XG5cdH1cblxufVxuIl19