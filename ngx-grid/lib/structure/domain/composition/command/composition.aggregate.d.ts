import { Aggregate, AggregateId } from '@generic-ui/hermes';
import { ColumnEntity } from './column/column.entity';
import { ColumnParams } from './column/set-columns/column.params';
import { ChangeSortParams } from './column/sort/change-sort.params';
import { ColumnId } from './column/column.id';
import { ActiveColumnEntity } from './column/active/active-column.entity';
export declare class CompositionAggregate extends Aggregate {
    private readonly MIN_COLUMN_WIDTH;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     */
    private columnWidthCollection;
    private allColumns;
    /**
     * Collection of columns which are used in the composition.
     */
    private readonly baseColumns;
    private readonly baseParams;
    /**
     * Value taken from user config [width]
     */
    private width;
    private containerInDOMWidth;
    private resizeWidthEnabled;
    /**
     * Autowired
     */
    private readonly columnFactory;
    private readonly activeColumnContainer;
    private readonly activeColumnEntityConverter;
    constructor(id: AggregateId, columnsParams?: Array<ColumnParams>, width?: number, resizeWidth?: boolean);
    getColumns(): Array<ColumnEntity>;
    getActiveColumns(): Array<ActiveColumnEntity>;
    getWidth(): number;
    isResizeEnabled(): boolean;
    isReady(): boolean;
    setColumns(params: Array<ColumnParams>): void;
    setContainerWidth(containerWidth: number): void;
    setWidth(width: number): void;
    setResizeWidth(enabled: boolean): void;
    changeSort(sortParams: Array<ChangeSortParams>): void;
    enableColumn(columnId: ColumnId, enabled: boolean): void;
    private recalculateColumns;
    private updateColumnsWidths;
    private setActiveColumnsWithEvent;
    private setWidthWithEvent;
    private setContainerWidthWithEvent;
    private setResizeWidthWithEvent;
    private getEnabledColumns;
}
