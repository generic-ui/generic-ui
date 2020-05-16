import { DomainEvent } from './domain-event';
import { AggregateId } from '../aggregate-id';
export declare abstract class DomainEventHandler<I extends AggregateId, E extends DomainEvent<I>> {
    abstract handle(event: E): void;
}
