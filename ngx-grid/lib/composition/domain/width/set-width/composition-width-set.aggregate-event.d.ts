import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionWidthSetAggregateEvent extends AggregateEvent<CompositionId> {
    constructor(aggregateId: AggregateId);
}
