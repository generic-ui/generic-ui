/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError, Subject, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { DomainEvent } from './domain-event';
export class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new Subject();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    next(event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    }
    /**
     * @param {?} eventType
     * @return {?}
     */
    findEventByType(eventType) {
        /** @type {?} */
        const events = this.getEvents();
        return events.reverse()
            .find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.constructor.name === eventType;
        }));
    }
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     * @param {?} eventType
     * @return {?}
     */
    waitForEvent(eventType) {
        // find in a history
        /** @type {?} */
        const event = this.findEventByType(eventType);
        if (event) {
            return of(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    waitForNextEventOccurrence(arg) {
        /** @type {?} */
        let eventType;
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
        (event) => event.constructor.name === eventType)), take(1));
    }
    /**
     * @private
     * @return {?}
     */
    getEvents() {
        return this.domainEvents;
    }
}
DomainEventStore.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdTLGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUV0QyxrQkFBYSxHQUF5QixJQUFJLE9BQU8sRUFBZSxDQUFDO0lBMkQxRSxDQUFDOzs7OztJQXpEQSxJQUFJLENBQUMsS0FBa0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBaUI7O2NBRTFCLE1BQU0sR0FBdUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUVuRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUU7YUFDbEIsSUFBSTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQU1ELFlBQVksQ0FBQyxTQUFpQjs7O2NBR3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUU3QyxJQUFJLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBSUQsMEJBQTBCLENBQUMsR0FBeUI7O1lBRS9DLFNBQWlCO1FBRXJCLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtZQUMvQixTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDakM7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTixPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQyxFQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7O1lBOURELFVBQVU7Ozs7Ozs7SUFHVix3Q0FBOEM7Ozs7O0lBRTlDLHlDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0b3JlIHtcblxuXHRwcml2YXRlIGRvbWFpbkV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ+ID0gW107XG5cblx0cHJpdmF0ZSBkb21haW5FdmVudHMkOiBTdWJqZWN0PERvbWFpbkV2ZW50PiA9IG5ldyBTdWJqZWN0PERvbWFpbkV2ZW50PigpO1xuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudHMucHVzaChldmVudCk7XG5cdFx0dGhpcy5kb21haW5FdmVudHMkLm5leHQoZXZlbnQpO1xuXHR9XG5cblx0ZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZTogc3RyaW5nKTogRG9tYWluRXZlbnQge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudD4gPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIGV2ZW50cy5yZXZlcnNlKClcblx0XHRcdFx0XHQgLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0IHJldHVybiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGU7XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpcnN0IHRyaWVzIHRvIGV2ZW50IGV2ZW50IGluIHRoZSBoaXN0b3J5LFxuXHQgKiB0aGFuIG1ldGhvZCB3YWl0cyBmb3IgZnV0dXJlIG9jY3VycmVuY2VzIG9mIHRoZSBldmVudC5cblx0ICovXG5cdHdhaXRGb3JFdmVudChldmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ+IHtcblxuXHRcdC8vIGZpbmQgaW4gYSBoaXN0b3J5XG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLmZpbmRFdmVudEJ5VHlwZShldmVudFR5cGUpO1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gb2YoZXZlbnQpO1xuXHRcdH1cblxuXHRcdC8vIHdhaXQgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlXG5cdFx0cmV0dXJuIHRoaXMud2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlKTtcblx0fVxuXG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50OiBEb21haW5FdmVudCk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShhcmc6IHN0cmluZyB8IERvbWFpbkV2ZW50KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD4ge1xuXG5cdFx0bGV0IGV2ZW50VHlwZTogc3RyaW5nO1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmcuY29uc3RydWN0b3IubmFtZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZS4nKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzJFxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGUpLFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RXZlbnRzKCk6IEFycmF5PERvbWFpbkV2ZW50PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==