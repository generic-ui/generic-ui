import { DomainEvent } from '../../api/event/domain-event';
import { Logger } from '../../api/logger/logger';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
export declare abstract class DomainEventLogger extends Logger<DomainEvent<AggregateId>> {
    protected constructor();
}
