import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class PagingSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
