import { DomainEvent } from '../../api/event/domain-event';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { HermesObservable } from '../../../common/stream/core/observable/hermes.observable';
export declare class DomainEventStore {
    private readonly domainEvents;
    private readonly domainEvents$;
    next(event: DomainEvent<AggregateId>): void;
    findEventByType(eventType: string): DomainEvent<AggregateId>;
    /**
     * First tries to find event in the history,
     * then method waits for future occurrences of the event.
     */
    waitForEvent(eventType: string): HermesObservable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(eventType: string): HermesObservable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(event: DomainEvent<AggregateId>): HermesObservable<DomainEvent<AggregateId>>;
    private getEvents;
}
