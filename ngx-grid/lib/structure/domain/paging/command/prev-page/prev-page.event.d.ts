import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class PrevPageEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
