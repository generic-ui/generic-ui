import { DomainEvent } from './domain-event';
export declare abstract class DomainEventHandler {
    abstract handle(event: DomainEvent): void;
}
