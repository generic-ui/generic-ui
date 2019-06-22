import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class NextPageEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
