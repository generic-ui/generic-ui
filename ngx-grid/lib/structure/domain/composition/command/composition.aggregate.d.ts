import { Aggregate, AggregateId } from '@generic-ui/hermes';
import { ColumnEntity } from './column/column.entity';
import { ColumnParams } from './column/set-columns/column.params';
import { ChangeSortParams } from './sort/change-sort.params';
export declare class CompositionAggregate extends Aggregate {
    private readonly MIN_COLUMN_WIDTH;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     */
    private columnWidthCollection;
    /**
     * Collection of columns which are used in the composition.
     */
    private activeColumns;
    private readonly baseColumns;
    private readonly baseParams;
    /**
     * Value taken from user config [width]
     */
    private width;
    /**
     * DOM element's width
     */
    private containerWidth;
    private resizeWidthEnabled;
    /**
     * Autowired
     */
    private readonly columnFactory;
    constructor(id: AggregateId, columnsParams?: Array<ColumnParams>, width?: number, resizeWidth?: boolean);
    getColumns(): Array<ColumnEntity>;
    getWidth(): number;
    isResizeEnabled(): boolean;
    isReady(): boolean;
    clone(): CompositionAggregate;
    setColumns(params: Array<ColumnParams>): void;
    setContainerWidth(containerWidth: number): void;
    setWidth(width: number): void;
    setResizeWidth(enabled: boolean): void;
    changeSort(sortParams: Array<ChangeSortParams>): void;
    private recalculateColumns;
    private updateColumnsWidths;
    private setActiveColumnsWithEvent;
    private setWidthWithEvent;
    private setContainerWidthWithEvent;
    private setResizeWidthWithEvent;
}
