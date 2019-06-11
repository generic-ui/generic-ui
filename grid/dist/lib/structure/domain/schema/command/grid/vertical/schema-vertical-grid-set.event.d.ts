import { DomainEvent } from 'generic-ui-cqrs';
import { AggregateId } from 'generic-ui-cqrs';
export declare class SchemaVerticalGridSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
