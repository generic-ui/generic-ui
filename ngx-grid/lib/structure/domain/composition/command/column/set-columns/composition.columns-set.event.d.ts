import { DomainEvent, AggregateId } from '@generic-ui/hermes';
export declare class CompositionColumnsSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
