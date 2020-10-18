/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template I
 */
export class AggregateRoot {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} type
     */
    constructor(aggregateId, type) {
        this.type = type;
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
    getType() {
        return this.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxNQUFNLE9BQWdCLGFBQWE7Ozs7OztJQU1sQyxZQUFzQixXQUFjLEVBQ1osSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUlELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQW9DLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFJRCxRQUFRLENBQUMsSUFBa0Q7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQXFCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRDs7Ozs7O0lBeENBLG9DQUFnQzs7Ozs7SUFFaEMsK0JBQWtEOzs7OztJQUczQyw2QkFBNkI7Ozs7O0lBS3BDLHNEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudFR5cGUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1ldmVudC10eXBlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlUm9vdDxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGVJZDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdO1xuXHR9XG5cblx0YWJzdHJhY3QgY3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PEk+PjtcblxuXHRnZXRJZCgpOiBJIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0Z2V0RXZlbnRzKCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+IHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudHMgYXMgUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj47XG5cdH1cblxuXHRhZGRFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8ST4pOiB2b2lkO1xuXHRhZGRFdmVudChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pik6IHZvaWQ7XG5cdGFkZEV2ZW50KGFyZ3M6IEFnZ3JlZ2F0ZUV2ZW50PEk+IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudHMucHVzaChhcmdzIGFzIEFnZ3JlZ2F0ZUV2ZW50PEk+KTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuXHR9XG59XG4iXX0=