import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { ActiveColumnEntity } from '../active/active-column.entity';
import { CompositionId } from '../../composition.id';
export declare class CompositionColumnSetEnabledAggregateEvent extends AggregateEvent<CompositionId> {
    private readonly activeColumns;
    constructor(aggregateId: AggregateId, activeColumns: Array<ActiveColumnEntity>);
    getActiveColumns(): Array<ActiveColumnEntity>;
}
