import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEvent } from '../../../domain/event/domain-event';
import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
export declare class NoopEventLogger extends DomainEventLogger {
    start(): void;
    stop(): void;
    print(event: DomainEvent<AggregateId>): void;
}
//# sourceMappingURL=noop.event.logger.d.ts.map