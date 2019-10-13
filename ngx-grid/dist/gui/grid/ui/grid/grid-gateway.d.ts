import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GuiAggregation, GuiColumn, GuiFiltering, GuiPagingConfig, GuiQuickFilters, GuiRowColoring, GuiSearching, GuiSorting, GuiTheme } from '../../../grid/app/grid.api';
import { GridColumnConverter } from 'grid/ui/grid/grid.column.converter';
import { ColumnConfig } from 'structure/domain/composition/column.config';
export declare abstract class GridGateway implements OnChanges {
    private gridColumnConverter;
    /**
     * INPUTS
     */
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    height: number;
    width: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<GuiColumn>;
    paging: boolean | GuiPagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: string | GuiTheme;
    rowColoring: string | GuiRowColoring;
    loading: boolean;
    virtualScroll: boolean;
    sorting: boolean | GuiSorting;
    /**
     * @experimental
     */
    filtering: boolean | GuiFiltering;
    /**
     * @experimental
     */
    quickFilters: boolean | GuiQuickFilters;
    /**
     * @experimental
     */
    searching: boolean | GuiSearching;
    /**
     * @experimental
     */
    editMode: boolean;
    /**
     * @experimental
     */
    cellEditing: boolean;
    summaryPanel: boolean;
    /**
     * @experimental
     */
    aggregation: GuiAggregation;
    /**
     * OUTPUTS
     */
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    itemsSelected: EventEmitter<any>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    sourceEdited: EventEmitter<{
        after: any;
        before: any;
    }>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    columnsConfig: Array<ColumnConfig>;
    protected constructor(gridColumnConverter: GridColumnConverter);
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onItemSelect(item: any): void;
    onColumnsChange(): void;
    onContainerWidthChange(containerWidth: number): void;
    onSourceEdit(value: any): void;
    onCellEditEnter(): void;
    onCellEditSubmit(): void;
    onCellEditCancel(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
