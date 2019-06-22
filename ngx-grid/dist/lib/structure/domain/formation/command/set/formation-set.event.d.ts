import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class FormationSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
