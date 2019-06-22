import { DomainEvent, AggregateId } from 'generic-ui-cqrs';
export declare class PresentationContainerWidthSetEvent extends DomainEvent {
    constructor(aggregateId: AggregateId);
}
