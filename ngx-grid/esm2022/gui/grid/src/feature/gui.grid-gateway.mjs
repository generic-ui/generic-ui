import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
import { GuiGridColumnComponent } from './column/gui.grid-column.component';
import { GuiGridCellEditConverter } from './column/cell-editing/gui.grid.cell-edit.converter';
import { ifChanged } from '../../../../feature/common/component/src/check.input';
import * as i0 from "@angular/core";
export class GuiGridGateway {
    guiGridColumnComponent;
    /**
     * INPUTS
     */
    columnHeaderTop;
    columnHeaderBottom;
    maxHeight;
    width;
    rowHeight;
    autoResizeWidth;
    source = [];
    columns = [];
    paging;
    verticalGrid;
    horizontalGrid;
    theme;
    rowColoring;
    rowSelection;
    rowStyle;
    rowClass;
    loading;
    virtualScroll;
    sorting;
    searching;
    titlePanel;
    footerPanel;
    /**
     * @experimental
     */
    filtering;
    /**
     * @experimental
     */
    quickFilters;
    /**
     * @experimental
     */
    editMode;
    /**
     * @experimental
     */
    cellEditing;
    infoPanel;
    /**
     * @experimental
     */
    summaries;
    columnMenu;
    rowDetail;
    localization;
    /**
     * OUTPUTS
     */
    pageChanged = new EventEmitter();
    pageSizeChanged = new EventEmitter();
    itemsSelected = new EventEmitter();
    selectedRows = new EventEmitter();
    columnsChanged = new EventEmitter();
    containerWidthChanged = new EventEmitter();
    sourceEdited = new EventEmitter();
    cellEditEntered = new EventEmitter();
    cellEditCanceled = new EventEmitter();
    cellEditSubmitted = new EventEmitter();
    searchPhraseChanged = new EventEmitter();
    themeChanged = new EventEmitter();
    horizontalGridChanged = new EventEmitter();
    verticalGridChanged = new EventEmitter();
    rowColoringChanged = new EventEmitter();
    /** @internal */
    columnsConfig;
    themeConfig; // SchemaTheme;
    rowColoringConfig; // RowColoring;
    columnMenuConfig;
    rowSelectionConfig;
    cellEditingConfig;
    gridColumnConverter = new GuiGridColumnConverter();
    gridThemeConverter = new GuiGridThemeConverter();
    gridRowColoringConverter = new GuiGridRowColoringConverter();
    gridColumnMenuConverter = new GuiGridColumnMenuConverter();
    gridPagingConverter = new GuiGridPagingConverter();
    gridRowSelectionConverter = new GuiGridRowSelectionConverter();
    guiGridCellEditConverter = new GuiGridCellEditConverter();
    constructor() {
    }
    ngOnChanges(changes) {
        ifChanged(changes.columns, () => {
            this.columnsConfig = this.gridColumnConverter.convert(this.columns);
        });
        ifChanged(changes.theme, () => {
            this.themeConfig = this.gridThemeConverter.convert(this.theme);
        });
        ifChanged(changes.rowColoring, () => {
            this.rowColoringConfig = this.gridRowColoringConverter.convert(this.rowColoring);
        });
        ifChanged(changes.columnMenu, () => {
            this.columnMenuConfig = this.gridColumnMenuConverter.convert(this.columnMenu);
        });
        ifChanged(changes.rowSelection, () => {
            this.rowSelectionConfig = this.gridRowSelectionConverter.convert(this.rowSelection);
        });
        ifChanged(changes.cellEditing, () => {
            this.cellEditingConfig = this.guiGridCellEditConverter.convert(this.cellEditing);
        });
        // TODO
        ifChanged(changes.paging, () => {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.gridPagingConverter.convert(this.paging);
            }
        });
    }
    ngAfterContentInit() {
        if (this.guiGridColumnComponent && this.guiGridColumnComponent.toArray().length > 0) {
            this.columnsConfig = this.gridColumnConverter.convert(this.guiGridColumnComponent.toArray());
        }
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    onItemSelect(item) {
        this.itemsSelected.emit(item);
    }
    onRowsSelect(rows) {
        const guiRows = rows.map((row) => {
            return {
                index: row.getIndex(),
                source: row.getItem(),
                itemId: row.getItemId()
            };
        });
        this.selectedRows.emit(guiRows);
    }
    onColumnsChange() {
        this.columnsChanged.emit();
    }
    onContainerWidthChange(containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    }
    onSourceEdit(value) {
        this.sourceEdited.emit(value);
    }
    onCellEditEnter() {
        this.cellEditEntered.emit();
    }
    onCellEditSubmit() {
        this.cellEditSubmitted.emit();
    }
    onCellEditCancel() {
        this.cellEditCanceled.emit();
    }
    onSearchPhrase(value) {
        this.searchPhraseChanged.emit(value);
    }
    onTheme(value) {
        this.themeChanged.emit(this.gridThemeConverter.convertToGuiTheme(value));
    }
    onHorizontalGrid(value) {
        this.horizontalGridChanged.emit(value);
    }
    onVerticalGrid(value) {
        this.verticalGridChanged.emit(value);
    }
    onRowColoring(value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiGridGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: GuiGridGateway, inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom", maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", paging: "paging", verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid", theme: "theme", rowColoring: "rowColoring", rowSelection: "rowSelection", rowStyle: "rowStyle", rowClass: "rowClass", loading: "loading", virtualScroll: "virtualScroll", sorting: "sorting", searching: "searching", titlePanel: "titlePanel", footerPanel: "footerPanel", filtering: "filtering", quickFilters: "quickFilters", editMode: "editMode", cellEditing: "cellEditing", infoPanel: "infoPanel", summaries: "summaries", columnMenu: "columnMenu", rowDetail: "rowDetail", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", itemsSelected: "itemsSelected", selectedRows: "selectedRows", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted", searchPhraseChanged: "searchPhraseChanged", themeChanged: "themeChanged", horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged", rowColoringChanged: "rowColoringChanged" }, queries: [{ propertyName: "guiGridColumnComponent", predicate: GuiGridColumnComponent }], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiGridGateway, decorators: [{
            type: Directive
        }], ctorParameters: () => [], propDecorators: { guiGridColumnComponent: [{
                type: ContentChildren,
                args: [GuiGridColumnComponent]
            }], columnHeaderTop: [{
                type: Input
            }], columnHeaderBottom: [{
                type: Input
            }], maxHeight: [{
                type: Input
            }], width: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], autoResizeWidth: [{
                type: Input
            }], source: [{
                type: Input
            }], columns: [{
                type: Input
            }], paging: [{
                type: Input
            }], verticalGrid: [{
                type: Input
            }], horizontalGrid: [{
                type: Input
            }], theme: [{
                type: Input
            }], rowColoring: [{
                type: Input
            }], rowSelection: [{
                type: Input
            }], rowStyle: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], loading: [{
                type: Input
            }], virtualScroll: [{
                type: Input
            }], sorting: [{
                type: Input
            }], searching: [{
                type: Input
            }], titlePanel: [{
                type: Input
            }], footerPanel: [{
                type: Input
            }], filtering: [{
                type: Input
            }], quickFilters: [{
                type: Input
            }], editMode: [{
                type: Input
            }], cellEditing: [{
                type: Input
            }], infoPanel: [{
                type: Input
            }], summaries: [{
                type: Input
            }], columnMenu: [{
                type: Input
            }], rowDetail: [{
                type: Input
            }], localization: [{
                type: Input
            }], pageChanged: [{
                type: Output
            }], pageSizeChanged: [{
                type: Output
            }], itemsSelected: [{
                type: Output
            }], selectedRows: [{
                type: Output
            }], columnsChanged: [{
                type: Output
            }], containerWidthChanged: [{
                type: Output
            }], sourceEdited: [{
                type: Output
            }], cellEditEntered: [{
                type: Output
            }], cellEditCanceled: [{
                type: Output
            }], cellEditSubmitted: [{
                type: Output
            }], searchPhraseChanged: [{
                type: Output
            }], themeChanged: [{
                type: Output
            }], horizontalGridChanged: [{
                type: Output
            }], verticalGridChanged: [{
                type: Output
            }], rowColoringChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvc3JjL2ZlYXR1cmUvZ3VpLmdyaWQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUEyQmhJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSWhHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFHakYsTUFBTSxPQUFnQixjQUFjO0lBR25DLHNCQUFzQixDQUFvQztJQUUxRDs7T0FFRztJQUVILGVBQWUsQ0FBVTtJQUd6QixrQkFBa0IsQ0FBVTtJQUc1QixTQUFTLENBQVM7SUFHbEIsS0FBSyxDQUFTO0lBR2QsU0FBUyxDQUFTO0lBR2xCLGVBQWUsQ0FBVTtJQUd6QixNQUFNLEdBQWUsRUFBRSxDQUFDO0lBR3hCLE9BQU8sR0FBc0MsRUFBRSxDQUFDO0lBR2hELE1BQU0sQ0FBc0I7SUFHNUIsWUFB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHRHdWlDZWxsRWRpdCxcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aUZvb3RlclBhbmVsLFxuXHRHdWlJbmZvUGFuZWwsXG5cdEd1aUxvY2FsaXphdGlvbixcblx0R3VpTXVsdGlDb2x1bW4sXG5cdEd1aVBhZ2luZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDbGFzcyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpUm93U2VsZWN0aW9uLFxuXHRHdWlSb3dTdHlsZSxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTZWxlY3RlZFJvdyxcblx0R3VpU29ydGluZyxcblx0R3VpU3VtbWFyaWVzLFxuXHRHdWlUaGVtZSxcblx0R3VpVGl0bGVQYW5lbFxufSBmcm9tICcuLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvY29uZmlnL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL21lbnUvZ3VpLmdyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcm93LXNlbGVjdGlvbi9ndWkuZ3JpZC5yb3ctc2VsZWN0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUdyaWRDZWxsRWRpdENvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jZWxsLWVkaXQuY29udmVydGVyJztcbmltcG9ydCB7IENlbGxFZGl0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9lZGl0L2NlbGwtZWRpdC5jb25maWcnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9jaGVjay5pbnB1dCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcblxuXHRAQ29udGVudENoaWxkcmVuKEd1aUdyaWRDb2x1bW5Db21wb25lbnQpXG5cdGd1aUdyaWRDb2x1bW5Db21wb25lbnQ6IFF1ZXJ5TGlzdDxHdWlHcmlkQ29sdW1uQ29tcG9uZW50PjtcblxuXHQvKipcblx0ICogSU5QVVRTXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJUb3A6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyQm90dG9tOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PEd1aUNvbHVtbiB8IEd1aU11bHRpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpb246IGJvb2xlYW4gfCBHdWlSb3dTZWxlY3Rpb247XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgR3VpU2VhcmNoaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlUGFuZWw6IEd1aVRpdGxlUGFuZWw7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IEd1aUZvb3RlclBhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBHdWlGaWx0ZXJpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IEd1aVF1aWNrRmlsdGVycztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuIHwgR3VpQ2VsbEVkaXQ7XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuIHwgR3VpSW5mb1BhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IEd1aVN1bW1hcmllcztcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBHdWlDb2x1bW5NZW51O1xuXG5cdEBJbnB1dCgpXG5cdHJvd0RldGFpbDogR3VpUm93RGV0YWlsO1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cblx0LyoqXG5cdCAqIE9VVFBVVFNcblx0ICovXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8R3VpU2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8eyBhZnRlcjogYW55LCBiZWZvcmU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHRoZW1lQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEd1aVRoZW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRjb2x1bW5zQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRyb3dTZWxlY3Rpb25Db25maWc6IFJvd1NlbGVjdGlvbjtcblxuXHRjZWxsRWRpdGluZ0NvbmZpZzogQ2VsbEVkaXRDb25maWc7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5Db252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyOiBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5NZW51Q29udmVydGVyOiBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHdWlHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlcjogR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGd1aUdyaWRDZWxsRWRpdENvbnZlcnRlcjogR3VpR3JpZENlbGxFZGl0Q29udmVydGVyID0gbmV3IEd1aUdyaWRDZWxsRWRpdENvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxHdWlHcmlkR2F0ZXdheT4pOiB2b2lkIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNvbHVtbnMsICgpID0+IHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1ucyk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy50aGVtZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5yb3dDb2xvcmluZywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NvbmZpZyA9IHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5jb2x1bW5NZW51LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd1NlbGVjdGlvbiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Db25maWcgPSB0aGlzLmdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd1NlbGVjdGlvbik7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5jZWxsRWRpdGluZywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jZWxsRWRpdGluZ0NvbmZpZyA9IHRoaXMuZ3VpR3JpZENlbGxFZGl0Q29udmVydGVyLmNvbnZlcnQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucGFnaW5nLCAoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSB0aGlzLmdyaWRQYWdpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnBhZ2luZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudCAmJiB0aGlzLmd1aUdyaWRDb2x1bW5Db21wb25lbnQudG9BcnJheSgpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudC50b0FycmF5KCkpO1xuXHRcdH1cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdG9uUm93c1NlbGVjdChyb3dzOiBBcnJheTxTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGd1aVJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93PiA9IHJvd3MubWFwKChyb3cpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGluZGV4OiByb3cuZ2V0SW5kZXgoKSxcblx0XHRcdFx0c291cmNlOiByb3cuZ2V0SXRlbSgpLFxuXHRcdFx0XHRpdGVtSWQ6IHJvdy5nZXRJdGVtSWQoKVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQoZ3VpUm93cyk7XG5cdH1cblxuXHRvbkNvbHVtbnNDaGFuZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoQ2hhbmdlKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0fVxuXG5cdG9uU291cmNlRWRpdCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvbkNlbGxFZGl0RW50ZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdFN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0U3VibWl0dGVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRDYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaFBocmFzZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblRoZW1lKHZhbHVlOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydFRvR3VpVGhlbWUodmFsdWUpKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyh2YWx1ZTogUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnRUb0d1aVJvd0NvbG9yaW5nKHZhbHVlKSk7XG5cdH1cblxuXG59XG4iXX0=