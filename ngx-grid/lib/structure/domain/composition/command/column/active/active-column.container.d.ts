import { AggregateEvent } from '@generic-ui/hermes';
import { ActiveColumnEntity } from './active-column.entity';
import { ColumnConfig } from '../../../column.config';
import { ChangeSortParams } from '../sort/change-sort.params';
import { CompositionId } from '../../../composition-id';
export declare class ActiveColumnContainer {
    private compositionId;
    private readonly MIN_COLUMN_WIDTH;
    private columns;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     */
    private columnWidthCollection;
    constructor(compositionId: CompositionId, columns?: Array<ActiveColumnEntity>, gridWidth?: number, columnConfigs?: Array<ColumnConfig>);
    getColumns(): Array<ActiveColumnEntity>;
    setWidth(width: number): void;
    addColumn(column: ActiveColumnEntity, index: number): void;
    removeColumn(index: number): void;
    setColumns(columns: Array<ActiveColumnEntity>, columnConfigs: Array<ColumnConfig>): void;
    changeSort(sortParams: Array<ChangeSortParams>): AggregateEvent;
    private getCompositionId;
}
