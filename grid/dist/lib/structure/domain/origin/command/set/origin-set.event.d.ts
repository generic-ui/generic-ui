import { AggregateId, DomainEvent } from 'generic-ui-cqrs';
export declare class OriginSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
