import { DomainEvent } from './domain-event';
export declare abstract class DomainEventLogger {
    abstract start(): void;
    abstract stop(): void;
    abstract log(event: DomainEvent): void;
}
