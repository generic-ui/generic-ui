import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class PagingSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
