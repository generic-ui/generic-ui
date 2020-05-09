import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GuiColumn, GuiColumnMenu, GuiFiltering, GuiFooterPanel, GuiInfoPanel, GuiPagingConfig, GuiQuickFilters, GuiRowColoring, GuiRowDetail, GuiSearching, GuiSorting, GuiSummaries, GuiTheme, GuiTitlePanel } from '../../domain-api/grid.api';
import { ColumnConfig } from '../../../../lib/composition/domain/column/column.config';
import { ColumnMenuConfig } from '../../../../lib/structure/feature-api/column-menu-config';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { RowColoring } from '../../../../schema/feature-api/row-coloring';
export declare abstract class GridGateway implements OnChanges {
    /**
     * INPUTS
     */
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    maxHeight: number;
    width: number;
    rowHeight: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<GuiColumn>;
    paging: boolean | GuiPagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: string | GuiTheme;
    rowColoring: string | GuiRowColoring;
    rowSelecting: boolean;
    loading: boolean;
    virtualScroll: boolean;
    sorting: boolean | GuiSorting;
    searching: boolean | GuiSearching;
    titlePanel: GuiTitlePanel;
    footerPanel: GuiFooterPanel;
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
    editMode: boolean;
    /**
     * @experimental
     */
    cellEditing: boolean;
    infoPanel: boolean | GuiInfoPanel;
    /**
     * @experimental
     */
    summaries: GuiSummaries;
    columnMenu: GuiColumnMenu;
    rowDetail: GuiRowDetail;
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
    searchPhraseChanged: EventEmitter<string>;
    themeChanged: EventEmitter<GuiTheme>;
    horizontalGridChanged: EventEmitter<boolean>;
    verticalGridChanged: EventEmitter<boolean>;
    rowColoringChanged: EventEmitter<GuiRowColoring>;
    /** @internal */
    columnsConfig: Array<ColumnConfig>;
    themeConfig: any;
    rowColoringConfig: any;
    columnMenuConfig: ColumnMenuConfig;
    private readonly gridColumnConverter;
    private readonly gridThemeConverter;
    private readonly gridRowColoringConverter;
    private readonly gridColumnMenuConverter;
    private readonly gridPagingConverter;
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
    onSearchPhrase(value: string): void;
    onTheme(value: SchemaTheme): void;
    onHorizontalGrid(value: boolean): void;
    onVerticalGrid(value: boolean): void;
    onRowColoring(value: RowColoring): void;
}
