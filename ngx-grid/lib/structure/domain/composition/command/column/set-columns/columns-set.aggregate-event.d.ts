import { AggregateId, AggregateEvent } from '@generic-ui/hermes';
import { ColumnEntity } from '../column.entity';
export declare class ColumnsSetAggregateEvent extends AggregateEvent {
    private readonly columns;
    constructor(aggregateId: AggregateId, columns: Array<ColumnEntity>);
}
