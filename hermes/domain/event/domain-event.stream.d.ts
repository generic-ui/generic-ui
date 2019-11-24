import { Subject } from 'rxjs';
import { DomainEvent } from './domain-event';
import { DomainEventStore } from './domain-event.store';
export declare class DomainEventStream extends Subject<DomainEvent> {
    private eventStore;
    constructor(eventStore: DomainEventStore);
    next(event: DomainEvent): void;
}
