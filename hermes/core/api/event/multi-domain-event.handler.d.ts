import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { DomainEvent } from './domain-event';
import { DomainEventType } from './domain-event-type';
export interface MultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>> {
    forEvents(): Array<DomainEventType<E>>;
    handle(event: E): void;
}
