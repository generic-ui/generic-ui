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
var DomainEventStore = /** @class */ (function () {
    function DomainEventStore() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
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
            return hermesOf(event);
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
            return new HermesObservable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
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
        function (event) { return event.constructor.name === eventType; })), hermesTake(1));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHdkY7SUFBQTtRQUdrQixpQkFBWSxHQUFvQyxFQUFFLENBQUM7UUFFbkQsa0JBQWEsR0FBNEMsSUFBSSxhQUFhLEVBQTRCLENBQUM7SUErRHpILENBQUM7Ozs7O0lBN0RBLCtCQUFJOzs7O0lBQUosVUFBSyxLQUErQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDBDQUFlOzs7O0lBQWYsVUFBZ0IsU0FBaUI7O1lBRTFCLE1BQU0sR0FBb0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUVoRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUU7YUFDbEIsSUFBSTs7OztRQUFDLFVBQUMsS0FBK0I7WUFDckMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsdUNBQVk7Ozs7OztJQUFaLFVBQWEsU0FBaUI7OztZQUd2QixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFFN0MsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELDZCQUE2QjtRQUM3QixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUlELHFEQUEwQjs7OztJQUExQixVQUEyQixHQUFzQzs7WUFFNUQsU0FBaUI7UUFFckIsSUFBSSxHQUFHLFlBQVksV0FBVyxFQUFFO1lBQy9CLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNqQzthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ25DLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDaEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7WUFBQyxVQUFDLFFBQVE7Z0JBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsRUFBQyxDQUFDO1lBQ0gsOERBQThEO1NBQzlEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxFQUFDLEVBQzdELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOztnQkFsRUQsVUFBVTs7SUFvRVgsdUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSxnQkFBZ0I7Ozs7OztJQUU1Qix3Q0FBb0U7Ozs7O0lBRXBFLHlDQUF3SCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5pbXBvcnQgeyBoZXJtZXNPZiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9jcmVhdG9yL2hlcm1lcy5vZic7XG5pbXBvcnQgeyBoZXJtZXNUYWtlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RvcmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudHMkOiBIZXJtZXNTdWJqZWN0PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSBuZXcgSGVybWVzU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KCk7XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudHMucHVzaChldmVudCk7XG5cdFx0dGhpcy5kb21haW5FdmVudHMkLm5leHQoZXZlbnQpO1xuXHR9XG5cblx0ZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZTogc3RyaW5nKTogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHtcblxuXHRcdGNvbnN0IGV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IHRoaXMuZ2V0RXZlbnRzKCk7XG5cblx0XHRyZXR1cm4gZXZlbnRzLnJldmVyc2UoKVxuXHRcdFx0XHRcdCAuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdFx0IHJldHVybiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGU7XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpcnN0IHRyaWVzIHRvIGV2ZW50IGV2ZW50IGluIHRoZSBoaXN0b3J5LFxuXHQgKiB0aGFuIG1ldGhvZCB3YWl0cyBmb3IgZnV0dXJlIG9jY3VycmVuY2VzIG9mIHRoZSBldmVudC5cblx0ICovXG5cdHdhaXRGb3JFdmVudChldmVudFR5cGU6IHN0cmluZyk6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHQvLyBmaW5kIGluIGEgaGlzdG9yeVxuXHRcdGNvbnN0IGV2ZW50ID0gdGhpcy5maW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlKTtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0cmV0dXJuIGhlcm1lc09mKGV2ZW50KTtcblx0XHR9XG5cblx0XHQvLyB3YWl0IGZvciBmdXR1cmUgb2NjdXJyZW5jZVxuXHRcdHJldHVybiB0aGlzLndhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZSk7XG5cdH1cblxuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGU6IHN0cmluZyk6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoYXJnOiBzdHJpbmcgfCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBIZXJtZXNPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50VHlwZTogc3RyaW5nO1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmcuY29uc3RydWN0b3IubmFtZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHMkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50KSA9PiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGUpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RXZlbnRzKCk6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cztcblx0fVxuXG59XG4iXX0=