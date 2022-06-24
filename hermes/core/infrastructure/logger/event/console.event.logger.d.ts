import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEvent } from '../../../api/event/domain-event';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare class ConsoleEventLogger extends DomainEventLogger {
    private enabled;
    private unsubscribe$;
    private readonly eventBus;
    private readonly aggregateStoreRegister;
    constructor();
    onDestroy(): void;
    start(): void;
    stop(): void;
    protected print(domainEvent: DomainEvent<AggregateId>): void;
}
