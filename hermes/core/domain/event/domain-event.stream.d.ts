import { DomainEvent } from './domain-event';
import { DomainEventStore } from './domain-event.store';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
export declare class DomainEventStream extends HermesSubject<DomainEvent<AggregateId>> {
    private readonly eventStore;
    constructor(eventStore: DomainEventStore);
    next(event: DomainEvent<AggregateId>): void;
}
