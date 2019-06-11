import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class SelectedRowToggledEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
