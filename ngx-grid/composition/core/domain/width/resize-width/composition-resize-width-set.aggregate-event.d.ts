import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../api/composition.id';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class CompositionResizeWidthSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId: CompositionId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
//# sourceMappingURL=composition-resize-width-set.aggregate-event.d.ts.map