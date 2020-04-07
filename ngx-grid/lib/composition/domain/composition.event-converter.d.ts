import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
export declare class CompositionEventConverter {
    convert(event: AggregateEvent<CompositionId>): DomainEvent;
    convert(events: Array<AggregateEvent<CompositionId>>): Array<DomainEvent>;
    private convertEvents;
    private convertEvent;
}
