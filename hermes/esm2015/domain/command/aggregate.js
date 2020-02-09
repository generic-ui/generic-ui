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
     * @param {?} args
     * @return {?}
     */
    addEvent(args) {
        if (Array.isArray(args)) {
            for (let event of args) {
                this.events.push(event);
            }
        }
        else {
            this.events.push((/** @type {?} */ (args)));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQWdCLFNBQVM7Ozs7O0lBTTlCLFlBQXNCLFdBQXdCO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFpQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBSUQsUUFBUSxDQUFDLElBQTRDO1FBRXBELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFrQixDQUFDLENBQUM7U0FDekM7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Q7Ozs7OztJQWpDQSxnQ0FBMEM7Ozs7O0lBRTFDLDJCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpIHtcblx0XHR0aGlzLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlSWQ7XG5cdFx0dGhpcy5ldmVudHMgPSBbXTtcblx0fVxuXG5cdGdldElkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldEV2ZW50cygpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzIGFzIFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+O1xuXHR9XG5cblx0YWRkRXZlbnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogdm9pZDtcblx0YWRkRXZlbnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiB2b2lkO1xuXHRhZGRFdmVudChhcmdzOiBBZ2dyZWdhdGVFdmVudCB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRcdGZvciAobGV0IGV2ZW50IG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXZlbnRzLnB1c2goYXJncyBhcyBBZ2dyZWdhdGVFdmVudCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxufVxuIl19