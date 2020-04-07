import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureCreatedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
