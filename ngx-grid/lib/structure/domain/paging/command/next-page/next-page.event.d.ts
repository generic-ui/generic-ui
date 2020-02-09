import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class NextPageEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
