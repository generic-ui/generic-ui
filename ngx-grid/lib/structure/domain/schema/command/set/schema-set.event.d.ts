import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class SchemaSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
