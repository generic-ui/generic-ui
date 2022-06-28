import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { ActiveColumnEntity } from '../../../domain/column/active/active-column.entity';
import { CompositionId } from '../../../api/global/composition.id';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export declare class CompositionColumnSetEnabledAggregateEvent extends CompositionAggregateEvent {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    toDomainEvent(): DomainEvent<CompositionId>;
    getActiveColumns(): Array<ActiveColumnEntity>;
}
