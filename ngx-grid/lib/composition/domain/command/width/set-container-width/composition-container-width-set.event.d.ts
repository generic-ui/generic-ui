import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class CompositionContainerWidthSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId, payload: any);
}
