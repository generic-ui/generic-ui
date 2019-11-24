import { Observable } from 'rxjs';
import { DomainEvent } from './domain-event';
export declare class DomainEventStore {
    private domainEvents;
    private domainEvents$;
    next(event: DomainEvent): void;
    findEventByType(eventType: string): DomainEvent;
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    waitForEvent(eventType: string): Observable<DomainEvent>;
    waitForNextEventOccurrence(eventType: string): Observable<DomainEvent>;
    waitForNextEventOccurrence(event: DomainEvent): Observable<DomainEvent>;
    private getEvents;
}
