import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureInitedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
