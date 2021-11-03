import { AfterContentInit, EventEmitter, OnChanges, QueryList } from '@angular/core';
import { GuiCellEdit, GuiColumn, GuiColumnMenu, GuiFiltering, GuiFooterPanel, GuiInfoPanel, GuiLocalization, GuiMultiColumn, GuiPaging, GuiQuickFilters, GuiRowClass, GuiRowColoring, GuiRowDetail, GuiRowSelection, GuiRowStyle, GuiSearching, GuiSelectedRow, GuiSorting, GuiSummaries, GuiTheme, GuiTitlePanel } from '../../core/api/gui.grid.public-api';
import { ColumnConfig, MultiColumnConfig } from '../../../../composition/core/api/column/column.config';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { ColumnMenuConfig } from '../../../../structure/grid/core/api/column-menu-config';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { RowColoring } from '../../../../schema/core/api/row-coloring/row-coloring';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
import { RowSelection } from '../../../../structure/source/core/api/row-selection';
import { SelectedRow } from '../../../../structure/source/core/api/formation/selected-row';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { GuiGridColumnComponent } from './column/gui.grid-column.component';
import { GuiGridCellEditConverter } from './column/cell-editing/gui.grid.cell-edit.converter';
import { CellEditConfig } from '../../../../structure/grid/core/api/edit/cell-edit.config';
export declare abstract class GuiGridGateway implements OnChanges, AfterContentInit {
    guiGridColumnComponent: QueryList<GuiGridColumnComponent>;
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
    columns: Array<GuiColumn | GuiMultiColumn>;
    paging: boolean | GuiPaging;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: string | GuiTheme;
    rowColoring: string | GuiRowColoring;
    rowSelection: boolean | GuiRowSelection;
    rowStyle: GuiRowStyle;
    rowClass: GuiRowClass;
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
    cellEditing: boolean | GuiCellEdit;
    infoPanel: boolean | GuiInfoPanel;
    /**
     * @experimental
     */
    summaries: GuiSummaries;
    columnMenu: GuiColumnMenu;
    rowDetail: GuiRowDetail;
    localization: GuiLocalization;
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
    columnsConfig: Array<ColumnConfig | MultiColumnConfig>;
    themeConfig: any;
    rowColoringConfig: any;
    columnMenuConfig: ColumnMenuConfig;
    rowSelectionConfig: RowSelection;
    cellEditingConfig: CellEditConfig;
    protected readonly gridColumnConverter: GuiGridColumnConverter;
    protected readonly gridThemeConverter: GuiGridThemeConverter;
    protected readonly gridRowColoringConverter: GuiGridRowColoringConverter;
    protected readonly gridColumnMenuConverter: GuiGridColumnMenuConverter;
    protected readonly gridPagingConverter: GuiGridPagingConverter;
    protected readonly gridRowSelectionConverter: GuiGridRowSelectionConverter;
    protected readonly guiGridCellEditConverter: GuiGridCellEditConverter;
    protected constructor();
    ngOnChanges(changes: NgChanges<GuiGridGateway>): void;
    ngAfterContentInit(): void;
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
