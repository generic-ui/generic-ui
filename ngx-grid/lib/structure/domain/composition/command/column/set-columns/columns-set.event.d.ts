import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class ColumnsSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
