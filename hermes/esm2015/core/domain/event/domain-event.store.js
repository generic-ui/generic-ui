import { Injectable } from '@angular/core';
import { DomainEvent } from './domain-event';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
import { hermesOf } from '../../../common/stream/observable/creator/hermes.of';
import { hermesTake } from '../../../common/stream/operator/hermes.take';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import * as i0 from "@angular/core";
export class DomainEventStore {
    constructor() {
        this.domainEvents = [];
        this.domainEvents$ = new HermesSubject();
    }
    next(event) {
        this.domainEvents.push(event);
        this.domainEvents$.next(event);
    }
    findEventByType(eventType) {
        const events = this.getEvents();
        return events.reverse()
            .find((event) => {
            return event.constructor.name === eventType;
        });
    }
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    waitForEvent(eventType) {
        // find in a history
        const event = this.findEventByType(eventType);
        if (event) {
            return hermesOf(event);
        }
        // wait for future occurrence
        return this.waitForNextEventOccurrence(eventType);
    }
    waitForNextEventOccurrence(arg) {
        let eventType;
        if (arg instanceof DomainEvent) {
            eventType = arg.constructor.name;
        }
        else if (typeof arg === 'string') {
            eventType = arg;
        }
        else {
            return new HermesObservable((observer) => {
                observer.error(new Error('Unsupported argument type.'));
            });
            // return throwError(new Error('Unsupported argument type.'));
        }
        return this.domainEvents$
            .toObservable()
            .pipe(hermesFilter((event) => event.constructor.name === eventType), hermesTake(1));
    }
    getEvents() {
        return this.domainEvents;
    }
}
DomainEventStore.ɵfac = function DomainEventStore_Factory(t) { return new (t || DomainEventStore)(); };
DomainEventStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomainEventStore, factory: DomainEventStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomainEventStore, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7O0FBSXZGLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHa0IsaUJBQVksR0FBb0MsRUFBRSxDQUFDO1FBRW5ELGtCQUFhLEdBQTRDLElBQUksYUFBYSxFQUE0QixDQUFDO0tBK0R4SDtJQTdEQSxJQUFJLENBQUMsS0FBK0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxTQUFpQjtRQUVoQyxNQUFNLE1BQU0sR0FBb0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpFLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRTthQUNsQixJQUFJLENBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFDekMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLFNBQWlCO1FBRTdCLG9CQUFvQjtRQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlDLElBQUksS0FBSyxFQUFFO1lBQ1YsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7UUFFRCw2QkFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUlELDBCQUEwQixDQUFDLEdBQXNDO1FBRWhFLElBQUksU0FBaUIsQ0FBQztRQUV0QixJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUU7WUFDL0IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ04sT0FBTyxJQUFJLGdCQUFnQixDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1lBQ0gsOERBQThEO1NBQzlEO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNuQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsRUFDN0QsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7SUFDUixDQUFDO0lBRU8sU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Z0ZBakVXLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEhlcm1lc1N1YmplY3QgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgaGVybWVzT2YgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvY3JlYXRvci9oZXJtZXMub2YnO1xuaW1wb3J0IHsgaGVybWVzVGFrZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRha2UnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0b3JlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRzJDogSGVybWVzU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gbmV3IEhlcm1lc1N1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PigpO1xuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzJC5uZXh0KGV2ZW50KTtcblx0fVxuXG5cdGZpbmRFdmVudEJ5VHlwZShldmVudFR5cGU6IHN0cmluZyk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIGV2ZW50cy5yZXZlcnNlKClcblx0XHRcdFx0XHQgLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRcdCByZXR1cm4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlO1xuXHRcdFx0XHRcdCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaXJzdCB0cmllcyB0byBldmVudCBldmVudCBpbiB0aGUgaGlzdG9yeSxcblx0ICogdGhhbiBtZXRob2Qgd2FpdHMgZm9yIGZ1dHVyZSBvY2N1cnJlbmNlcyBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHR3YWl0Rm9yRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpOiBIZXJtZXNPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0Ly8gZmluZCBpbiBhIGhpc3Rvcnlcblx0XHRjb25zdCBldmVudCA9IHRoaXMuZmluZEV2ZW50QnlUeXBlKGV2ZW50VHlwZSk7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHJldHVybiBoZXJtZXNPZihldmVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2FpdCBmb3IgZnV0dXJlIG9jY3VycmVuY2Vcblx0XHRyZXR1cm4gdGhpcy53YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGUpO1xuXHR9XG5cblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnRUeXBlOiBzdHJpbmcpOiBIZXJtZXNPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBIZXJtZXNPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj47XG5cdHdhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGFyZzogc3RyaW5nIHwgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRcdGxldCBldmVudFR5cGU6IHN0cmluZztcblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBEb21haW5FdmVudCkge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZXZlbnRUeXBlID0gYXJnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0XHRcdG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZS4nKSk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZS4nKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRzJFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudCkgPT4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlKSxcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIGdldEV2ZW50cygpOiBBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHM7XG5cdH1cblxufVxuIl19