import { AggregateEvent, AggregateId, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionWidthSetAggregateEvent extends AggregateEvent<CompositionId> {
    constructor(aggregateId: AggregateId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
