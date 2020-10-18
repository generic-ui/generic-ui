import { Subject } from 'rxjs';
import { DomainEvent } from './domain-event';
import { DomainEventStore } from './domain-event.store';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare class DomainEventStream extends Subject<DomainEvent<AggregateId>> {
    private eventStore;
    constructor(eventStore: DomainEventStore);
    next(event: DomainEvent<AggregateId>): void;
}
