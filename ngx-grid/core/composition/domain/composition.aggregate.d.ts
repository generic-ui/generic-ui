import { AggregateEvent, AggregateEventType, AggregateRoot } from '@generic-ui/hermes';
import { ColumnEntity } from './column/column.entity';
import { ColumnConfig, MultiColumnConfig } from '../api/column/column.config';
import { ColumnParams } from '../core/column/set-columns/column.params';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { ChangeSortParams } from './column/sort/change-sort.params';
import { ColumnId } from '../api/column/column.id';
import { ActiveColumnEntity } from './column/active/active-column.entity';
import { CompositionId } from '../api/global/composition.id';
import { CompositionGroupFactory } from '../core/group/composition.group.factory';
export declare class CompositionAggregate extends AggregateRoot<CompositionId> {
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
    private readonly groupFactory;
    private readonly activeColumnContainer;
    private readonly activeColumnEntityConverter;
    private readonly groups;
    private readonly columnNameToGroupId;
    constructor(id: CompositionId, columnFactory: ColumnEntityFactory, groupFactory: CompositionGroupFactory, columnsParams?: Array<ColumnParams>, width?: number, resizeWidth?: boolean);
    createEvent(): AggregateEventType<AggregateEvent<CompositionId>>;
    getColumns(): Array<ColumnEntity>;
    getActiveColumns(): Array<ActiveColumnEntity>;
    getWidth(): number;
    isResizeEnabled(): boolean;
    isReady(): boolean;
    setGroups(configs: Array<ColumnConfig | MultiColumnConfig>): void;
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
