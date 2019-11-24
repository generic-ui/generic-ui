/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError, Subject, of } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0M7SUFBQTtRQUdTLGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUV0QyxrQkFBYSxHQUF5QixJQUFJLE9BQU8sRUFBZSxDQUFDO0lBMkQxRSxDQUFDOzs7OztJQXpEQSwrQkFBSTs7OztJQUFKLFVBQUssS0FBa0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLFNBQWlCOztZQUUxQixNQUFNLEdBQXVCLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFFbkQsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUk7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ1IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7SUFBWixVQUFhLFNBQWlCOzs7WUFHdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRTdDLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFFRCw2QkFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFJRCxxREFBMEI7Ozs7SUFBMUIsVUFBMkIsR0FBeUI7O1lBRS9DLFNBQWlCO1FBRXJCLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtZQUMvQixTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDakM7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTixPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBDLENBQW9DLEVBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7O2dCQTlERCxVQUFVOztJQWdFWCx1QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBL0RZLGdCQUFnQjs7Ozs7O0lBRTVCLHdDQUE4Qzs7Ozs7SUFFOUMseUNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciwgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RvcmUge1xuXG5cdHByaXZhdGUgZG9tYWluRXZlbnRzOiBBcnJheTxEb21haW5FdmVudD4gPSBbXTtcblxuXHRwcml2YXRlIGRvbWFpbkV2ZW50cyQ6IFN1YmplY3Q8RG9tYWluRXZlbnQ+ID0gbmV3IFN1YmplY3Q8RG9tYWluRXZlbnQ+KCk7XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cyQubmV4dChldmVudCk7XG5cdH1cblxuXHRmaW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlOiBzdHJpbmcpOiBEb21haW5FdmVudCB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50PiA9IHRoaXMuZ2V0RXZlbnRzKCk7XG5cblx0XHRyZXR1cm4gZXZlbnRzLnJldmVyc2UoKVxuXHRcdFx0XHRcdCAuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgcmV0dXJuIGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZTtcblx0XHRcdFx0XHQgfSk7XG5cdH1cblxuXHQvKipcblx0ICogRmlyc3QgdHJpZXMgdG8gZXZlbnQgZXZlbnQgaW4gdGhlIGhpc3RvcnksXG5cdCAqIHRoYW4gbWV0aG9kIHdhaXRzIGZvciBmdXR1cmUgb2NjdXJyZW5jZXMgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0d2FpdEZvckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD4ge1xuXG5cdFx0Ly8gZmluZCBpbiBhIGhpc3Rvcnlcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZSk7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHJldHVybiBvZihldmVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2FpdCBmb3IgZnV0dXJlIG9jY3VycmVuY2Vcblx0XHRyZXR1cm4gdGhpcy53YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGUpO1xuXHR9XG5cblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnQ6IERvbWFpbkV2ZW50KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGFyZzogc3RyaW5nIHwgRG9tYWluRXZlbnQpOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PiB7XG5cblx0XHRsZXQgZXZlbnRUeXBlOiBzdHJpbmc7XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHMkXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZSksXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHM7XG5cdH1cblxufVxuIl19