import { DomainEvent } from './domain-event';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import * as i0 from "@angular/core";
export declare class DomainEventStore {
    private readonly domainEvents;
    private readonly domainEvents$;
    next(event: DomainEvent<AggregateId>): void;
    findEventByType(eventType: string): DomainEvent<AggregateId>;
    /**
     * First tries to event event in the history,
     * than method waits for future occurrences of the event.
     */
    waitForEvent(eventType: string): HermesObservable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(eventType: string): HermesObservable<DomainEvent<AggregateId>>;
    waitForNextEventOccurrence(event: DomainEvent<AggregateId>): HermesObservable<DomainEvent<AggregateId>>;
    private getEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainEventStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainEventStore>;
}
//# sourceMappingURL=domain-event.store.d.ts.map