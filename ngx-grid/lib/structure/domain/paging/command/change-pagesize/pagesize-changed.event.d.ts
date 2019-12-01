import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class PagesizeChangedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
