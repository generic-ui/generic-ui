/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class Aggregate {
    /**
     * @protected
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    getId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getEvents() {
        return (/** @type {?} */ (this.events));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addEvent(event) {
        this.events.push(event);
    }
    /**
     * @return {?}
     */
    clearEvents() {
        this.events.length = 0;
    }
}
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQWdCLFNBQVM7Ozs7O0lBTTlCLFlBQXNCLFdBQXdCO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFpQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRDs7Ozs7O0lBeEJBLGdDQUEwQzs7Ozs7SUFFMUMsMkJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCkge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGVJZDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdXG5cdH1cblxuXHRnZXRJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRFdmVudHMoKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50cyBhcyBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pjtcblx0fVxuXG5cdGFkZEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxufVxuIl19