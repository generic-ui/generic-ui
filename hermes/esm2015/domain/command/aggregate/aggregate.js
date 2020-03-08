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
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTSxPQUFnQixTQUFTOzs7Ozs7SUFNOUIsWUFBc0IsV0FBd0IsRUFDdEIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQWlDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFJRCxRQUFRLENBQUMsSUFBNEM7UUFFcEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQWtCLENBQUMsQ0FBQztTQUN6QztJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRDs7Ozs7O0lBbENBLGdDQUEwQzs7Ozs7SUFFMUMsMkJBQStDOzs7OztJQUd4Qyx5QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGVJZDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdO1xuXHR9XG5cblx0Z2V0SWQoKTogQWdncmVnYXRlSWQge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0RXZlbnRzKCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudHMgYXMgUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD47XG5cdH1cblxuXHRhZGRFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQpOiB2b2lkO1xuXHRhZGRFdmVudChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IHZvaWQ7XG5cdGFkZEV2ZW50KGFyZ3M6IEFnZ3JlZ2F0ZUV2ZW50IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudHMucHVzaChhcmdzIGFzIEFnZ3JlZ2F0ZUV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50cy5sZW5ndGggPSAwO1xuXHR9XG59XG4iXX0=