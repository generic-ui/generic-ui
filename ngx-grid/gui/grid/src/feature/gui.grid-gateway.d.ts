import { AfterContentInit, EventEmitter, OnChanges, QueryList } from '@angular/core';
import { GuiCellEdit, GuiColumn, GuiColumnMenu, GuiFiltering, GuiFooterPanel, GuiInfoPanel, GuiLocalization, GuiMultiColumn, GuiPaging, GuiQuickFilters, GuiRowClass, GuiRowColoring, GuiRowDetail, GuiRowSelection, GuiRowStyle, GuiSearching, GuiSelectedRow, GuiSorting, GuiSummaries, GuiTheme, GuiTitlePanel } from '../core/api/gui.grid.public-api';
import { ColumnConfig, MultiColumnConfig } from '../../../../core/composition/src/api/column/column.config';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { ColumnMenuConfig } from '../../../../core/structure/structure-core/src/api/config/column-menu-config';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { SchemaTheme } from '../../../../core/schema/src/api/theme/schema-theme';
import { RowColoring } from '../../../../core/schema/src/api/row-coloring/row-coloring';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
import { RowSelection } from '../../../../core/structure/formation/src/api/row-selected/row-selection';
import { SelectedRow } from '../../../../core/structure/formation/src/api/row-selected/selected-row';
import { NgChanges } from '../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { GuiGridColumnComponent } from './column/gui.grid-column.component';
import { GuiGridCellEditConverter } from './column/cell-editing/gui.grid.cell-edit.converter';
import { CellEditConfig } from '../../../../core/structure/structure-core/src/api/edit/cell-edit.config';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiGridGateway, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiGridGateway, never, never, { "columnHeaderTop": "columnHeaderTop"; "columnHeaderBottom": "columnHeaderBottom"; "maxHeight": "maxHeight"; "width": "width"; "rowHeight": "rowHeight"; "autoResizeWidth": "autoResizeWidth"; "source": "source"; "columns": "columns"; "paging": "paging"; "verticalGrid": "verticalGrid"; "horizontalGrid": "horizontalGrid"; "theme": "theme"; "rowColoring": "rowColoring"; "rowSelection": "rowSelection"; "rowStyle": "rowStyle"; "rowClass": "rowClass"; "loading": "loading"; "virtualScroll": "virtualScroll"; "sorting": "sorting"; "searching": "searching"; "titlePanel": "titlePanel"; "footerPanel": "footerPanel"; "filtering": "filtering"; "quickFilters": "quickFilters"; "editMode": "editMode"; "cellEditing": "cellEditing"; "infoPanel": "infoPanel"; "summaries": "summaries"; "columnMenu": "columnMenu"; "rowDetail": "rowDetail"; "localization": "localization"; }, { "pageChanged": "pageChanged"; "pageSizeChanged": "pageSizeChanged"; "itemsSelected": "itemsSelected"; "selectedRows": "selectedRows"; "columnsChanged": "columnsChanged"; "containerWidthChanged": "containerWidthChanged"; "sourceEdited": "sourceEdited"; "cellEditEntered": "cellEditEntered"; "cellEditCanceled": "cellEditCanceled"; "cellEditSubmitted": "cellEditSubmitted"; "searchPhraseChanged": "searchPhraseChanged"; "themeChanged": "themeChanged"; "horizontalGridChanged": "horizontalGridChanged"; "verticalGridChanged": "verticalGridChanged"; "rowColoringChanged": "rowColoringChanged"; }, ["guiGridColumnComponent"], never, false, never>;
}
