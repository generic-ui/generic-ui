/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdTLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztRQUVuRCxrQkFBYSxHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztJQTJEcEcsQ0FBQzs7Ozs7SUF6REEsSUFBSSxDQUFDLEtBQStCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQWlCOztjQUUxQixNQUFNLEdBQW9DLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFFaEUsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUk7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFNRCxZQUFZLENBQUMsU0FBaUI7OztjQUd2QixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFFN0MsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUVELDZCQUE2QjtRQUM3QixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUlELDBCQUEwQixDQUFDLEdBQXNDOztZQUU1RCxTQUFpQjtRQUVyQixJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUU7WUFDL0IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ04sT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVPLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7OztZQTlERCxVQUFVOzs7Ozs7O0lBR1Ysd0NBQTJEOzs7OztJQUUzRCx5Q0FBbUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRTdG9yZSB7XG5cblx0cHJpdmF0ZSBkb21haW5FdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSBbXTtcblxuXHRwcml2YXRlIGRvbWFpbkV2ZW50cyQ6IFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IG5ldyBTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4oKTtcblxuXHRuZXh0KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cyQubmV4dChldmVudCk7XG5cdH1cblxuXHRmaW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlOiBzdHJpbmcpOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4ge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gdGhpcy5nZXRFdmVudHMoKTtcblxuXHRcdHJldHVybiBldmVudHMucmV2ZXJzZSgpXG5cdFx0XHRcdFx0IC5maW5kKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgcmV0dXJuIGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZTtcblx0XHRcdFx0XHQgfSk7XG5cdH1cblxuXHQvKipcblx0ICogRmlyc3QgdHJpZXMgdG8gZXZlbnQgZXZlbnQgaW4gdGhlIGhpc3RvcnksXG5cdCAqIHRoYW4gbWV0aG9kIHdhaXRzIGZvciBmdXR1cmUgb2NjdXJyZW5jZXMgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0d2FpdEZvckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdC8vIGZpbmQgaW4gYSBoaXN0b3J5XG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLmZpbmRFdmVudEJ5VHlwZShldmVudFR5cGUpO1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gb2YoZXZlbnQpO1xuXHRcdH1cblxuXHRcdC8vIHdhaXQgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlXG5cdFx0cmV0dXJuIHRoaXMud2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlKTtcblx0fVxuXG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShhcmc6IHN0cmluZyB8IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRUeXBlOiBzdHJpbmc7XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHMkXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZSksXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==