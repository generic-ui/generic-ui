import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../api/global/composition.id';
export declare class CompositionEventConverter {
    convert(event: AggregateEvent<CompositionId>): DomainEvent<CompositionId>;
    convert(events: Array<AggregateEvent<CompositionId>>): Array<DomainEvent<CompositionId>>;
    private convertEvents;
    private convertEvent;
}
