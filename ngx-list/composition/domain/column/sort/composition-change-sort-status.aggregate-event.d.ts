import { AggregateEvent, AggregateId, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
import { ActiveColumnEntity } from '../active/active-column.entity';
export declare class CompositionChangeSortStatusAggregateEvent extends AggregateEvent<CompositionId> {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    toDomainEvent(): DomainEvent<CompositionId>;
}
