import { DomainEvent } from './domain-event';
import { AggregateId } from '../aggregate-id';
export declare abstract class DomainEventHandler<I extends AggregateId> {
    abstract handle(event: DomainEvent<I>): void;
}
