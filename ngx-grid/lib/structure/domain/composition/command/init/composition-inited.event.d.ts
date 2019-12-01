import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class CompositionInitedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
