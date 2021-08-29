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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QztJQUFBO1FBR2tCLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztRQUVuRCxrQkFBYSxHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztJQTJEN0csQ0FBQzs7Ozs7SUF6REEsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQStCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixTQUFpQjs7WUFFMUIsTUFBTSxHQUFvQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBRWhFLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTthQUNsQixJQUFJOzs7O1FBQUMsVUFBQyxLQUErQjtZQUNyQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCx1Q0FBWTs7Ozs7O0lBQVosVUFBYSxTQUFpQjs7O1lBR3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUU3QyxJQUFJLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBSUQscURBQTBCOzs7O0lBQTFCLFVBQTJCLEdBQXNDOztZQUU1RCxTQUFpQjtRQUVyQixJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUU7WUFDL0IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ04sT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxFQUFDLEVBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOztnQkE5REQsVUFBVTs7SUFnRVgsdUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxnQkFBZ0I7Ozs7OztJQUU1Qix3Q0FBb0U7Ozs7O0lBRXBFLHlDQUE0RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRTdG9yZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50cyQ6IFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IG5ldyBTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4oKTtcblxuXHRuZXh0KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cyQubmV4dChldmVudCk7XG5cdH1cblxuXHRmaW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlOiBzdHJpbmcpOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4ge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gdGhpcy5nZXRFdmVudHMoKTtcblxuXHRcdHJldHVybiBldmVudHMucmV2ZXJzZSgpXG5cdFx0XHRcdFx0IC5maW5kKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgcmV0dXJuIGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZTtcblx0XHRcdFx0XHQgfSk7XG5cdH1cblxuXHQvKipcblx0ICogRmlyc3QgdHJpZXMgdG8gZXZlbnQgZXZlbnQgaW4gdGhlIGhpc3RvcnksXG5cdCAqIHRoYW4gbWV0aG9kIHdhaXRzIGZvciBmdXR1cmUgb2NjdXJyZW5jZXMgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0d2FpdEZvckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdC8vIGZpbmQgaW4gYSBoaXN0b3J5XG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLmZpbmRFdmVudEJ5VHlwZShldmVudFR5cGUpO1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gb2YoZXZlbnQpO1xuXHRcdH1cblxuXHRcdC8vIHdhaXQgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlXG5cdFx0cmV0dXJuIHRoaXMud2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlKTtcblx0fVxuXG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShhcmc6IHN0cmluZyB8IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRUeXBlOiBzdHJpbmc7XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHMkXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZSksXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==