import { DomainEvent } from './domain-event';
import { Logger } from '../../api/logger/logger';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class DomainEventLogger extends Logger<DomainEvent<AggregateId>> {
}
//# sourceMappingURL=domain-event.logger.d.ts.map