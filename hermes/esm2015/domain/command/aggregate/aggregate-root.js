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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxNQUFNLE9BQWdCLGFBQWE7Ozs7OztJQU1sQyxZQUFzQixXQUFjLEVBQ1osSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUlELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQW9DLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFJRCxRQUFRLENBQUMsSUFBa0Q7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQXFCLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRDs7Ozs7O0lBeENBLG9DQUFnQzs7Ozs7SUFFaEMsK0JBQWtEOzs7OztJQUczQyw2QkFBNkI7Ozs7O0lBS3BDLHNEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZVJvb3Q8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogSTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlSWQ7XG5cdFx0dGhpcy5ldmVudHMgPSBbXTtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZUV2ZW50KCk6IFR5cGU8QWdncmVnYXRlRXZlbnQ8ST4+O1xuXG5cdGdldElkKCk6IEkge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRnZXRFdmVudHMoKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4ge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50cyBhcyBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pjtcblx0fVxuXG5cdGFkZEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxJPik6IHZvaWQ7XG5cdGFkZEV2ZW50KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+KTogdm9pZDtcblx0YWRkRXZlbnQoYXJnczogQWdncmVnYXRlRXZlbnQ8ST4gfCBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGFyZ3MgYXMgQWdncmVnYXRlRXZlbnQ8ST4pO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLmxlbmd0aCA9IDA7XG5cdH1cbn1cbiJdfQ==