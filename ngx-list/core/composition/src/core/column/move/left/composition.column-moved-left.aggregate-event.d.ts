import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../../api/global/composition.id';
import { CompositionAggregateEvent } from '../../../composition.aggregate-event';
export declare class CompositionColumnMovedLeftAggregateEvent extends CompositionAggregateEvent {
    constructor(aggregateId: AggregateId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
