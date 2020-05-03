import { AggregateEvent, AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ActiveColumnEntity } from '../../active/active-column.entity';
import { CompositionId } from '../../../composition.id';
export declare class CompositionColumnMovedRightAggregateEvent extends AggregateEvent<CompositionId> {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    toDomainEvent(): DomainEvent<CompositionId>;
}
