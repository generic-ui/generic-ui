import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class SelectedRowToggledEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
