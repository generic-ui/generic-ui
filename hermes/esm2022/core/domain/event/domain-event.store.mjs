import { DomainEvent } from '../../api/event/domain-event';
import { HermesSubject } from '../../../common/stream/core/observable/hermes.subject';
import { hermesOf } from '../../../common/stream/core/observable/creator/hermes.of';
import { hermesTake } from '../../../common/stream/core/operator/hermes.take';
import { hermesFilter } from '../../../common/stream/core/operator/hermes.filter';
import { HermesObservable } from '../../../common/stream/core/observable/hermes.observable';
export class DomainEventStore {
    domainEvents = [];
    domainEvents$ = new HermesSubject();
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
     * First tries to find event in the history,
     * then method waits for future occurrences of the event.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRTVGLE1BQU0sT0FBTyxnQkFBZ0I7SUFFWCxZQUFZLEdBQW9DLEVBQUUsQ0FBQztJQUVuRCxhQUFhLEdBQTRDLElBQUksYUFBYSxFQUE0QixDQUFDO0lBRXhILElBQUksQ0FBQyxLQUErQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBRWhDLE1BQU0sTUFBTSxHQUFvQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakUsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUksQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsU0FBaUI7UUFFN0Isb0JBQW9CO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUMsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELDZCQUE2QjtRQUM3QixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsMEJBQTBCLENBQUMsR0FBc0M7UUFFaEUsSUFBSSxTQUFpQixDQUFDO1FBRXRCLElBQUksR0FBRyxZQUFZLFdBQVcsRUFBRTtZQUMvQixTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDakM7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTixPQUFPLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDeEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7WUFDSCw4REFBOEQ7U0FDOUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUM3RCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FBQztJQUNSLENBQUM7SUFFTyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2FwaS9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgaGVybWVzT2YgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL2NvcmUvb2JzZXJ2YWJsZS9jcmVhdG9yL2hlcm1lcy5vZic7XG5pbXBvcnQgeyBoZXJtZXNUYWtlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy50YWtlJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vY29yZS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL2NvcmUvb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0b3JlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRzJDogSGVybWVzU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+ID0gbmV3IEhlcm1lc1N1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PigpO1xuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHRoaXMuZG9tYWluRXZlbnRzJC5uZXh0KGV2ZW50KTtcblx0fVxuXG5cdGZpbmRFdmVudEJ5VHlwZShldmVudFR5cGU6IHN0cmluZyk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIGV2ZW50cy5yZXZlcnNlKClcblx0XHRcdFx0XHQgLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRcdCByZXR1cm4gZXZlbnQuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnRUeXBlO1xuXHRcdFx0XHRcdCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaXJzdCB0cmllcyB0byBmaW5kIGV2ZW50IGluIHRoZSBoaXN0b3J5LFxuXHQgKiB0aGVuIG1ldGhvZCB3YWl0cyBmb3IgZnV0dXJlIG9jY3VycmVuY2VzIG9mIHRoZSBldmVudC5cblx0ICovXG5cdHdhaXRGb3JFdmVudChldmVudFR5cGU6IHN0cmluZyk6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0XHQvLyBmaW5kIGluIGEgaGlzdG9yeVxuXHRcdGNvbnN0IGV2ZW50ID0gdGhpcy5maW5kRXZlbnRCeVR5cGUoZXZlbnRUeXBlKTtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0cmV0dXJuIGhlcm1lc09mKGV2ZW50KTtcblx0XHR9XG5cblx0XHQvLyB3YWl0IGZvciBmdXR1cmUgb2NjdXJyZW5jZVxuXHRcdHJldHVybiB0aGlzLndhaXRGb3JOZXh0RXZlbnRPY2N1cnJlbmNlKGV2ZW50VHlwZSk7XG5cdH1cblxuXHR3YWl0Rm9yTmV4dEV2ZW50T2NjdXJyZW5jZShldmVudFR5cGU6IHN0cmluZyk6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pjtcblx0d2FpdEZvck5leHRFdmVudE9jY3VycmVuY2UoYXJnOiBzdHJpbmcgfCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiBIZXJtZXNPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50VHlwZTogc3RyaW5nO1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmcuY29uc3RydWN0b3IubmFtZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRldmVudFR5cGUgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlLicpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudHMkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50KSA9PiBldmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudFR5cGUpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RXZlbnRzKCk6IEFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50cztcblx0fVxuXG59XG4iXX0=