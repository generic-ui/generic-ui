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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBZ0IsY0FBYzs7Ozs7O0lBRW5DLFlBQ2tCLFdBQWMsRUFDZCxJQUFZO1FBRFosZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQzlCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUVEOzs7Ozs7SUFyQkMscUNBQStCOzs7OztJQUMvQiw4QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVFdmVudDxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogVCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogQWdncmVnYXRlSWQge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRlcXVhbHMoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzQnlUeXBlKGV2ZW50KSAmJlxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdGVxdWFsc0J5VHlwZShldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUeXBlKCkgPT09IGV2ZW50LmdldFR5cGUoKTtcblx0fVxuXG59XG4iXX0=