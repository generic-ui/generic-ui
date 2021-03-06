import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ActiveColumnEntity } from '../../active/active-column.entity';
import { CompositionId } from '../../../../api/composition.id';
import { CompositionAggregateEvent } from '../../../composition.aggregate-event';
export declare class CompositionColumnMovedRightAggregateEvent extends CompositionAggregateEvent {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    toDomainEvent(): DomainEvent<CompositionId>;
}
