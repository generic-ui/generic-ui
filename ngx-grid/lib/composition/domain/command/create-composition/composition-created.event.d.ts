import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class CompositionCreatedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
