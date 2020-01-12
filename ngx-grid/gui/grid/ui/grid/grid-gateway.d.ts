import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GuiAggregation, GuiColumn, GuiColumnMenu, GuiFiltering, GuiPagingConfig, GuiQuickFilters, GuiRowColoring, GuiSearching, GuiSorting, GuiTheme } from '../../ui-api/grid.api';
import { ColumnConfig } from '../../../../lib/structure/domain/composition/column.config';
import { ColumnMenuConfig } from '../../../../lib/structure/ui-api/structure/column-menu-config';
export declare abstract class GridGateway implements OnChanges {
    /**
     * INPUTS
     */
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    maxHeight: number;
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
    infoPanel: boolean;
    /**
     * @experimental
     */
    aggregation: GuiAggregation;
    columnMenu: GuiColumnMenu;
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
    /** @internal */
    columnsConfig: Array<ColumnConfig>;
    themeConfig: any;
    rowColoringConfig: any;
    columnMenuConfig: ColumnMenuConfig;
    private readonly gridColumnConverter;
    private readonly gridThemeConverter;
    private readonly gridRowColoringConverter;
    private readonly gridColumnMenuConverter;
    protected constructor();
    ngOnChanges(changes: SimpleChanges): void;
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onItemSelect(item: any): void;
    onColumnsChange(): void;
    onContainerWidthChange(containerWidth: number): void;
    onSourceEdit(value: any): void;
    onCellEditEnter(): void;
    onCellEditSubmit(): void;
    onCellEditCancel(): void;
}
