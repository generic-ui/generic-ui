import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../api/composition.id';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class ColumnsSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId: CompositionId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
//# sourceMappingURL=columns-set.aggregate-event.d.ts.map