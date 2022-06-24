import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../api/global/composition.id';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class ColumnsSetAggregateEvent extends CompositionAggregateEvent {
    constructor(compositionId: CompositionId);
    toDomainEvent(): DomainEvent<CompositionId>;
}
