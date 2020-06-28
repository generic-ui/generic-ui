import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GuiColumn, GuiColumnMenu, GuiFiltering, GuiFooterPanel, GuiInfoPanel, GuiPaging, GuiQuickFilters, GuiRowColoring, GuiRowDetail, GuiRowSelection, GuiSearching, GuiSelectedRow, GuiSorting, GuiSummaries, GuiTheme, GuiTitlePanel } from '../../domain-api/gui.grid.public-api';
import { ColumnConfig } from '../../../../lib/composition/domain/column/column.config';
import { ColumnMenuConfig } from '../../../../lib/structure/domain-api/column-menu-config';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { RowColoring } from '../../../../schema/domain-api/row-coloring';
import { RowSelection } from '../../../../structure/source/domain-api/row-selection';
import { SelectedRow } from '../../../../structure/source/domain-api/formation/selected-row';
export declare abstract class GuiGridGateway implements OnChanges {
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
    paging: boolean | GuiPaging;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: string | GuiTheme;
    rowColoring: string | GuiRowColoring;
    rowSelection: boolean | GuiRowSelection;
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
    selectedRows: EventEmitter<Array<GuiSelectedRow>>;
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
    rowSelectionConfig: RowSelection;
    private readonly gridColumnConverter;
    private readonly gridThemeConverter;
    private readonly gridRowColoringConverter;
    private readonly gridColumnMenuConverter;
    private readonly gridPagingConverter;
    private readonly gridRowSelectionConverter;
    protected constructor();
    ngOnChanges(changes: SimpleChanges): void;
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onItemSelect(item: any): void;
    onRowsSelect(rows: Array<SelectedRow>): void;
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
