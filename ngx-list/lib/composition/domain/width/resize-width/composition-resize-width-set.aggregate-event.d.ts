import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionResizeWidthSetAggregateEvent extends AggregateEvent<CompositionId> {
    constructor(compositionId: CompositionId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
