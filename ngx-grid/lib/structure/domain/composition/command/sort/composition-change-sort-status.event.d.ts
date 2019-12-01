import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition-id';
import { ColumnEntity } from '../column/column.entity';
export declare class CompositionChangeSortStatusEvent extends DomainEvent {
    private readonly columns;
    constructor(aggregateId: CompositionId, columns: Array<ColumnEntity>);
    getCompositionId(): CompositionId;
    getColumns(): Array<ColumnEntity>;
}
