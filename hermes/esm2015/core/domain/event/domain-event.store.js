/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEvent } from './domain-event';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
import { hermesOf } from '../../../common/stream/observable/creator/hermes.of';
import { hermesTake } from '../../../common/stream/operator/hermes.take';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
export class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
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
            return hermesOf(event);
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
            return new HermesObservable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                observer.error(new Error('Unsupported argument type.'));
            }));
            // return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.constructor.name === eventType)), hermesTake(1));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFJdkYsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdrQixpQkFBWSxHQUFvQyxFQUFFLENBQUM7UUFFbkQsa0JBQWEsR0FBNEMsSUFBSSxhQUFhLEVBQTRCLENBQUM7SUErRHpILENBQUM7Ozs7O0lBN0RBLElBQUksQ0FBQyxLQUErQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxTQUFpQjs7Y0FFMUIsTUFBTSxHQUFvQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBRWhFLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTthQUNsQixJQUFJOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFDekMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBTUQsWUFBWSxDQUFDLFNBQWlCOzs7Y0FHdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRTdDLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7UUFFRCw2QkFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFJRCwwQkFBMEIsQ0FBQyxHQUFzQzs7WUFFNUQsU0FBaUI7UUFFckIsSUFBSSxHQUFHLFlBQVksV0FBVyxFQUFFO1lBQy9CLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNqQzthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ25DLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDaEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDLEVBQUMsQ0FBQztZQUNILDhEQUE4RDtTQUM5RDtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDbkIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFDLEVBQzdELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7WUFsRUQsVUFBVTs7Ozs7OztJQUdWLHdDQUFvRTs7Ozs7SUFFcEUseUNBQXdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5zdWJqZWN0JztcbmltcG9ydCB7IGhlcm1lc09mIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLm9mJztcbmltcG9ydCB7IGhlcm1lc1Rha2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRTdG9yZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50cyQ6IEhlcm1lc1N1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IG5ldyBIZXJtZXNTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4oKTtcblxuXHRuZXh0KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHR0aGlzLmRvbWFpbkV2ZW50cyQubmV4dChldmVudCk7XG5cdH1cblxuXHRmaW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlOiBzdHJpbmcpOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4ge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gdGhpcy5nZXRFdmVudHMoKTtcblxuXHRcdHJldHVybiBldmVudHMucmV2ZXJzZSgpXG5cdFx0XHRcdFx0IC5maW5kKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgcmV0dXJuIGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZTtcblx0XHRcdFx0XHQgfSk7XG5cdH1cblxuXHQvKipcblx0ICogRmlyc3QgdHJpZXMgdG8gZXZlbnQgZXZlbnQgaW4gdGhlIGhpc3RvcnksXG5cdCAqIHRoYW4gbWV0aG9kIHdhaXRzIGZvciBmdXR1cmUgb2NjdXJyZW5jZXMgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0d2FpdEZvckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdC8vIGZpbmQgaW4gYSBoaXN0b3J5XG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLmZpbmRFdmVudEJ5VHlwZShldmVudFR5cGUpO1xuXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gaGVybWVzT2YoZXZlbnQpO1xuXHRcdH1cblxuXHRcdC8vIHdhaXQgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlXG5cdFx0cmV0dXJuIHRoaXMud2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlKTtcblx0fVxuXG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZTogc3RyaW5nKTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+O1xuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShhcmc6IHN0cmluZyB8IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRUeXBlOiBzdHJpbmc7XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRG9tYWluRXZlbnQpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGV2ZW50VHlwZSA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGFyZ3VtZW50IHR5cGUuJykpO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyByZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGFyZ3VtZW50IHR5cGUuJykpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cyRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50VHlwZSksXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==