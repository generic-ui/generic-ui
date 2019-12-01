import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class SchemaBottomHeaderChangedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
