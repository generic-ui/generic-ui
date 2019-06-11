import { DomainEvent } from 'generic-ui-cqrs';
import { AggregateId } from 'generic-ui-cqrs';
export declare class SchemaThemeSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
