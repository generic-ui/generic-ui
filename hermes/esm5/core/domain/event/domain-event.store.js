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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QztJQUFBO1FBR1MsaUJBQVksR0FBb0MsRUFBRSxDQUFDO1FBRW5ELGtCQUFhLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO0lBMkRwRyxDQUFDOzs7OztJQXpEQSwrQkFBSTs7OztJQUFKLFVBQUssS0FBK0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLFNBQWlCOztZQUUxQixNQUFNLEdBQW9DLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFFaEUsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUk7Ozs7UUFBQyxVQUFDLEtBQStCO1lBQ3JDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ1IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7SUFBWixVQUFhLFNBQWlCOzs7WUFHdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRTdDLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFFRCw2QkFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFJRCxxREFBMEI7Ozs7SUFBMUIsVUFBMkIsR0FBc0M7O1lBRTVELFNBQWlCO1FBRXJCLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtZQUMvQixTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDakM7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTixPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBDLENBQW9DLEVBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7O2dCQTlERCxVQUFVOztJQWdFWCx1QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBL0RZLGdCQUFnQjs7Ozs7O0lBRTVCLHdDQUEyRDs7Ozs7SUFFM0QseUNBQW1HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0b3JlIHtcblxuXHRwcml2YXRlIGRvbWFpbkV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgZG9tYWluRXZlbnRzJDogU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gbmV3IFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PigpO1xuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzJC5uZXh0KGV2ZW50KTtcblx0fVxuXG5cdGZpbmRFdmVudEJ5VHlwZShldmVudFR5cGU6IHN0cmluZyk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIGV2ZW50cy5yZXZlcnNlKClcblx0XHRcdFx0XHQgLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRcdCByZXR1cm4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlO1xuXHRcdFx0XHRcdCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaXJzdCB0cmllcyB0byBldmVudCBldmVudCBpbiB0aGUgaGlzdG9yeSxcblx0ICogdGhhbiBtZXRob2Qgd2FpdHMgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlcyBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHR3YWl0Rm9yRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0Ly8gZmluZCBpbiBhIGhpc3Rvcnlcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZSk7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHJldHVybiBvZihldmVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2FpdCBmb3IgZnV0dXJlIG9jY3VycmVuY2Vcblx0XHRyZXR1cm4gdGhpcy53YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGUpO1xuXHR9XG5cblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGFyZzogc3RyaW5nIHwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdGxldCBldmVudFR5cGU6IHN0cmluZztcblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGFyZ3VtZW50IHR5cGUuJykpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cyRcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlKSxcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIGdldEV2ZW50cygpOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHM7XG5cdH1cblxufVxuIl19