import { EventEmitter } from '@angular/core';
import { GuiColumn, GuiPagingConfig, GuiRowColoring, GuiSorting, GuiTheme } from '../../../grid/app/grid.api';
export declare abstract class GridGateway {
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
     * OUTPUTS
     */
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    itemsSelected: EventEmitter<any>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    onPageChange(page: number): void;
    onPageSizeChange(pageSize: number): void;
    onItemSelect(item: any): void;
    onColumnsChange(): void;
    onContainerWidthChange(containerWidth: number): void;
}
