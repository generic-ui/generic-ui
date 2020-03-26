import { Aggregate, AggregateId } from '@generic-ui/hermes';
import { ColumnEntity } from './column/column.entity';
import { ColumnParams } from './column/set-columns/column.params';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { ChangeSortParams } from './column/sort/change-sort.params';
import { ColumnId } from './column/column.id';
import { ActiveColumnEntity } from './column/active/active-column.entity';
export declare class CompositionAggregate extends Aggregate {
    private allColumns;
    private readonly baseColumns;
    private readonly baseParams;
    /**
     * Value taken from user config [width]
     */
    private width;
    private containerInDOMWidth;
    private resizeWidthEnabled;
    private readonly columnFactory;
    private readonly activeColumnContainer;
    private readonly activeColumnEntityConverter;
    constructor(id: AggregateId, columnFactory: ColumnEntityFactory, columnsParams?: Array<ColumnParams>, width?: number, resizeWidth?: boolean);
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
    moveLeft(columnId: ColumnId): void;
    moveRight(columnId: ColumnId): void;
    private recalculateColumns;
    private setWidthWithEvent;
    private setContainerWidthWithEvent;
    private setResizeWidthWithEvent;
    private getEnabledColumns;
    private findColumnIndex;
    private getMinColumnWidth;
}
