import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { ActiveColumnEntity } from '../../active/active-column.entity';
export declare class CompositionColumnMovedRightAggregateEvent extends AggregateEvent {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
}
