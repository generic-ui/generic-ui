/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { DomainEvent } from './domain-event';
var DomainEventStore = /** @class */ (function () {
    function DomainEventStore() {
        this.domainEvents = [];
        this.domainEvents$ = new Subject();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventStore.prototype.next = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    DomainEventStore.prototype.findEventByType = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        /** @type {?} */
        var events = this.getEvents();
        return events.reverse()
            .find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.constructor.name === eventType;
        }));
    };
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    DomainEventStore.prototype.waitForEvent = /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        // find in a history
        /** @type {?} */
        var event = this.findEventByType(eventType);
        if (event) {
            return of(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    DomainEventStore.prototype.waitForNextEventOccurrence = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var eventType;
        if (arg instanceof DomainEvent) {
            eventType = arg.constructor.name;
        }
        else if (typeof arg === 'string') {
            eventType = arg;
        }
        else {
            return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.constructor.name === eventType; })), take(1));
    };
    /**
     * @private
     * @return {?}
     */
    DomainEventStore.prototype.getEvents = /**
     * @private
     * @return {?}
     */
    function () {
        return this.domainEvents;
    };
    DomainEventStore.decorators = [
        { type: Injectable }
    ];
    return DomainEventStore;
}());
export { DomainEventStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStore.prototype.domainEvents;
    /**
     * @type {?}
     * @private
     */
    DomainEventStore.prototype.domainEvents$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0M7SUFBQTtRQUdTLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztRQUVuRCxrQkFBYSxHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztJQTJEcEcsQ0FBQzs7Ozs7SUF6REEsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQStCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixTQUFpQjs7WUFFMUIsTUFBTSxHQUFvQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBRWhFLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTthQUNsQixJQUFJOzs7O1FBQUMsVUFBQyxLQUErQjtZQUNyQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCx1Q0FBWTs7Ozs7O0lBQVosVUFBYSxTQUFpQjs7O1lBR3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUU3QyxJQUFJLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBSUQscURBQTBCOzs7O0lBQTFCLFVBQTJCLEdBQXNDOztZQUU1RCxTQUFpQjtRQUVyQixJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUU7WUFDL0IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ04sT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxFQUFDLEVBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOztnQkE5REQsVUFBVTs7SUFnRVgsdUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxnQkFBZ0I7Ozs7OztJQUU1Qix3Q0FBMkQ7Ozs7O0lBRTNELHlDQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0b3JlIHtcblxuXHRwcml2YXRlIGRvbWFpbkV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgZG9tYWluRXZlbnRzJDogU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gbmV3IFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PigpO1xuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzJC5uZXh0KGV2ZW50KTtcblx0fVxuXG5cdGZpbmRFdmVudEJ5VHlwZShldmVudFR5cGU6IHN0cmluZyk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIGV2ZW50cy5yZXZlcnNlKClcblx0XHRcdFx0XHQgLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRcdCByZXR1cm4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlO1xuXHRcdFx0XHRcdCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaXJzdCB0cmllcyB0byBldmVudCBldmVudCBpbiB0aGUgaGlzdG9yeSxcblx0ICogdGhhbiBtZXRob2Qgd2FpdHMgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlcyBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHR3YWl0Rm9yRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0Ly8gZmluZCBpbiBhIGhpc3Rvcnlcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZSk7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHJldHVybiBvZihldmVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2FpdCBmb3IgZnV0dXJlIG9jY3VycmVuY2Vcblx0XHRyZXR1cm4gdGhpcy53YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGUpO1xuXHR9XG5cblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGFyZzogc3RyaW5nIHwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdGxldCBldmVudFR5cGU6IHN0cmluZztcblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGFyZ3VtZW50IHR5cGUuJykpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cyRcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlKSxcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIGdldEV2ZW50cygpOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHM7XG5cdH1cblxufVxuIl19