import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../api/composition.id';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class CompositionContainerWidthSetAggregateEvent extends CompositionAggregateEvent {
    readonly containerWidth: number;
    constructor(compositionId: CompositionId, containerWidth: number);
    toDomainEvent(): DomainEvent<CompositionId>;
}
//# sourceMappingURL=composition-container-width-set.aggregate-event.d.ts.map