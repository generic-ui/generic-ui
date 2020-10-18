import { DomainEvent } from './domain-event';
import { Logger } from '../../../common/logger';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class DomainEventLogger extends Logger<DomainEvent<AggregateId>> {
}
