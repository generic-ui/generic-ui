import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionContainerWidthSetAggregateEvent extends AggregateEvent<CompositionId> {
    readonly containerWidth: number;
    constructor(compositionId: CompositionId, containerWidth: number);
}
