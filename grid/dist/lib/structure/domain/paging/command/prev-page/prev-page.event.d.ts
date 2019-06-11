import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class PrevPageEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
