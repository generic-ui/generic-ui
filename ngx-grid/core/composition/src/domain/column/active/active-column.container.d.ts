import { AggregateEvent } from '@generic-ui/hermes';
import { ActiveColumnEntity } from './active-column.entity';
import { ColumnConfig } from '../../../api/column/column.config';
import { ChangeSortParams } from '../sort/change-sort.params';
import { CompositionId } from '../../../api/global/composition.id';
import { ColumnId } from '../../../api/column/column.id';
import { ColumnWidth } from '../column-width/column-width';
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
    getColumnWidths(): Array<ColumnWidth>;
    getColumns(): Array<ActiveColumnEntity>;
    setWidth(width: number): void;
    addColumn(column: ActiveColumnEntity, index: number): void;
    removeColumn(index: number): void;
    setColumns(columns: Array<ActiveColumnEntity>, columnConfigs: Array<ColumnConfig>): void;
    changeSort(sortParams: Array<ChangeSortParams>): AggregateEvent<CompositionId>;
    moveLeft(columnId: ColumnId): void;
    moveRight(columnId: ColumnId): void;
    getMinColumnWidth(): number;
    private move;
    private validateMoveIndex;
    private getCompositionId;
    private findColumnIndex;
}
