import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class CompositionWidthSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
