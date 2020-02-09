import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class PagingSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
