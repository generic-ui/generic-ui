import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class SchemaSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
