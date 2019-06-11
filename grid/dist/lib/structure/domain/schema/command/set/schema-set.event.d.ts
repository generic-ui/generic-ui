import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class SchemaSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
