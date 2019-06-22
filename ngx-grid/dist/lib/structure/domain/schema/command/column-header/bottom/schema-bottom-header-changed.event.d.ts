import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class SchemaBottomHeaderChangedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
