import { EventEmitter } from '@angular/core';
import { GuiColumn, GuiPagingConfig, GuiRowColoring, GuiTheme } from '../../../grid/app/grid.api';
export declare abstract class GridBase {
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
    /**
     * OUTPUTS
     */
    pageChanged: EventEmitter<number>;
    onPageChange(page: number): void;
}
