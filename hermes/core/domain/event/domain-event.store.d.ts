import { Observable } from 'rxjs';
import { DomainEvent } from './domain-event';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare class DomainEventStore {
    private readonly domainEvents;
    private readonly domainEvents$;
    next(event: DomainEvent<AggregateId>): void;
    findEventByType(eventType: string): DomainEvent<AggregateId>;
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    waitForEvent(eventType: string): Observable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(eventType: string): Observable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(event: DomainEvent<AggregateId>): Observable<DomainEvent<AggregateId>>;
    private getEvents;
}
