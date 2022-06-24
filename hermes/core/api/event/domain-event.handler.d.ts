import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { DomainEvent } from './domain-event';
import { DomainEventType } from './domain-event-type';
export interface DomainEventHandler<I extends AggregateId, E extends DomainEvent<I>> {
    forEvent(): DomainEventType<E>;
    handle(event: E): void;
}
