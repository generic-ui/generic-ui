import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEvent } from '../../../domain/event/domain-event';
export declare class NoopEventLogger extends DomainEventLogger {
    start(): void;
    stop(): void;
    print(event: DomainEvent): void;
}
