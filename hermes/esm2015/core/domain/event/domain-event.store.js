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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBR2tCLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztRQUVuRCxrQkFBYSxHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztJQTJEN0csQ0FBQzs7Ozs7SUF6REEsSUFBSSxDQUFDLEtBQStCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQWlCOztjQUUxQixNQUFNLEdBQW9DLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFFaEUsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUk7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFNRCxZQUFZLENBQUMsU0FBaUI7OztjQUd2QixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFFN0MsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUVELDZCQUE2QjtRQUM3QixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUlELDBCQUEwQixDQUFDLEdBQXNDOztZQUU1RCxTQUFpQjtRQUVyQixJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUU7WUFDL0IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ04sT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVPLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7OztZQTlERCxVQUFVOzs7Ozs7O0lBR1Ysd0NBQW9FOzs7OztJQUVwRSx5Q0FBNEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RvcmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudHMkOiBTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSBuZXcgU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KCk7XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudHMucHVzaChldmVudCk7XG5cdFx0dGhpcy5kb21haW5FdmVudHMkLm5leHQoZXZlbnQpO1xuXHR9XG5cblx0ZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZTogc3RyaW5nKTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblxuXHRcdGNvbnN0IGV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IHRoaXMuZ2V0RXZlbnRzKCk7XG5cblx0XHRyZXR1cm4gZXZlbnRzLnJldmVyc2UoKVxuXHRcdFx0XHRcdCAuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdFx0IHJldHVybiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGU7XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpcnN0IHRyaWVzIHRvIGV2ZW50IGV2ZW50IGluIHRoZSBoaXN0b3J5LFxuXHQgKiB0aGFuIG1ldGhvZCB3YWl0cyBmb3IgZnV0dXJlIG9jY3VycmVuY2VzIG9mIHRoZSBldmVudC5cblx0ICovXG5cdHdhaXRGb3JFdmVudChldmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHQvLyBmaW5kIGluIGEgaGlzdG9yeVxuXHRcdGNvbnN0IGV2ZW50ID0gdGhpcy5maW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlKTtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0cmV0dXJuIG9mKGV2ZW50KTtcblx0XHR9XG5cblx0XHQvLyB3YWl0IGZvciBmdXR1cmUgb2NjdXJyZW5jZVxuXHRcdHJldHVybiB0aGlzLndhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZSk7XG5cdH1cblxuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoYXJnOiBzdHJpbmcgfCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50VHlwZTogc3RyaW5nO1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmcuY29uc3RydWN0b3IubmFtZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZS4nKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzJFxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGUpLFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RXZlbnRzKCk6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cztcblx0fVxuXG59XG4iXX0=