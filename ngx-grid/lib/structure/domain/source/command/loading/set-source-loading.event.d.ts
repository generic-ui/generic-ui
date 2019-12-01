import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class SetSourceLoadingEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
