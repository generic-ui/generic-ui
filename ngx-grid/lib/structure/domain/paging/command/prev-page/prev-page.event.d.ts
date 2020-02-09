import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class PrevPageEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
