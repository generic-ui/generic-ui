import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class SelectedRowToggledEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
