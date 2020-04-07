import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionChangeSortStatusAggregateEvent extends AggregateEvent<CompositionId> {
    constructor(aggregateId: AggregateId);
}
