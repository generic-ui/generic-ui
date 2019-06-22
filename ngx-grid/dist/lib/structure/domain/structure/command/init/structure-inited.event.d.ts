import { AggregateId } from 'generic-ui-cqrs';
import { DomainEvent } from 'generic-ui-cqrs';
export declare class StructureInitedEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
