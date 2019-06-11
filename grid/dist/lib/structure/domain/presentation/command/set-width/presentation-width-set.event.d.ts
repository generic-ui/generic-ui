import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class PresentationWidthSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
