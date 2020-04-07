import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class PageChangedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
