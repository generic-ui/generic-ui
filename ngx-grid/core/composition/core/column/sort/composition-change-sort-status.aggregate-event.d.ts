import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../api/global/composition.id';
import { ActiveColumnEntity } from '../../../domain/column/active/active-column.entity';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class CompositionChangeSortStatusAggregateEvent extends CompositionAggregateEvent {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    toDomainEvent(): DomainEvent<CompositionId>;
}
