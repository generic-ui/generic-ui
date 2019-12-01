import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
export declare class CompositionEventConverter {
    convert(event: AggregateEvent): DomainEvent;
    convert(events: Array<AggregateEvent>): Array<DomainEvent>;
    private convertEvents;
    private convertEvent;
}
