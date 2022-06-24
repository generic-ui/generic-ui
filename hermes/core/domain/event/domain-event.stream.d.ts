import { DomainEvent } from '../../api/event/domain-event';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/core/observable/hermes.subject';
export declare class DomainEventStream extends HermesSubject<DomainEvent<AggregateId>> {
    constructor();
}
