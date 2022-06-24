import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEvent } from '../../../api/event/domain-event';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare class NoopEventLogger extends DomainEventLogger {
    constructor();
    start(): void;
    stop(): void;
    print(_event: DomainEvent<AggregateId>): void;
}
