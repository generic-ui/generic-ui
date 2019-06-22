import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class PagesizeChangedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
