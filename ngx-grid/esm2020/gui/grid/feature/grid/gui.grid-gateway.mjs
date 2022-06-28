import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
import { GuiGridColumnComponent } from './column/gui.grid-column.component';
import { GuiGridCellEditConverter } from './column/cell-editing/gui.grid.cell-edit.converter';
import { ifChanged } from '../../../../feature/common/cdk/component/check.input';
import * as i0 from "@angular/core";
export class GuiGridGateway {
    constructor() {
        this.source = [];
        this.columns = [];
        /**
         * OUTPUTS
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.rowColoringChanged = new EventEmitter();
        this.gridColumnConverter = new GuiGridColumnConverter();
        this.gridThemeConverter = new GuiGridThemeConverter();
        this.gridRowColoringConverter = new GuiGridRowColoringConverter();
        this.gridColumnMenuConverter = new GuiGridColumnMenuConverter();
        this.gridPagingConverter = new GuiGridPagingConverter();
        this.gridRowSelectionConverter = new GuiGridRowSelectionConverter();
        this.guiGridCellEditConverter = new GuiGridCellEditConverter();
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
                source: row.getSource(),
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
}
GuiGridGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiGridGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GuiGridGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: GuiGridGateway, inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom", maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", paging: "paging", verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid", theme: "theme", rowColoring: "rowColoring", rowSelection: "rowSelection", rowStyle: "rowStyle", rowClass: "rowClass", loading: "loading", virtualScroll: "virtualScroll", sorting: "sorting", searching: "searching", titlePanel: "titlePanel", footerPanel: "footerPanel", filtering: "filtering", quickFilters: "quickFilters", editMode: "editMode", cellEditing: "cellEditing", infoPanel: "infoPanel", summaries: "summaries", columnMenu: "columnMenu", rowDetail: "rowDetail", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", itemsSelected: "itemsSelected", selectedRows: "selectedRows", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted", searchPhraseChanged: "searchPhraseChanged", themeChanged: "themeChanged", horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged", rowColoringChanged: "rowColoringChanged" }, queries: [{ propertyName: "guiGridColumnComponent", predicate: GuiGridColumnComponent }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiGridGateway, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; }, propDecorators: { guiGridColumnComponent: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBMkJoSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUloRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU5RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBR2pGLE1BQU0sT0FBZ0IsY0FBYztJQWlNbkM7UUF0S0EsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUd4QixZQUFPLEdBQXNDLEVBQUUsQ0FBQztRQXVGaEQ7O1dBRUc7UUFFSCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUF3QyxJ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LFlBQVk7c0JBRFgsTUFBTTtnQkFJUCxlQUFlO3NCQURkLE1BQU07Z0JBSVAsZ0JBQWdCO3NCQURmLE1BQU07Z0JBSVAsaUJBQWlCO3NCQURoQixNQUFNO2dCQUlQLG1CQUFtQjtzQkFEbEIsTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU07Z0JBSVAscUJBQXFCO3NCQURwQixNQUFNO2dCQUlQLG1CQUFtQjtzQkFEbEIsTUFBTTtnQkFJUCxrQkFBa0I7c0JBRGpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHRHdWlDZWxsRWRpdCxcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aUZvb3RlclBhbmVsLFxuXHRHdWlJbmZvUGFuZWwsXG5cdEd1aUxvY2FsaXphdGlvbixcblx0R3VpTXVsdGlDb2x1bW4sXG5cdEd1aVBhZ2luZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDbGFzcyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpUm93U2VsZWN0aW9uLFxuXHRHdWlSb3dTdHlsZSxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTZWxlY3RlZFJvdyxcblx0R3VpU29ydGluZyxcblx0R3VpU3VtbWFyaWVzLFxuXHRHdWlUaGVtZSxcblx0R3VpVGl0bGVQYW5lbFxufSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvY29sb3JpbmcvZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2NvbmZpZy9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9tZW51L2d1aS5ncmlkLmNvbHVtbi1tZW51LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9wYWdpbmcvZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUdyaWRDZWxsRWRpdENvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jZWxsLWVkaXQuY29udmVydGVyJztcbmltcG9ydCB7IENlbGxFZGl0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oR3VpR3JpZENvbHVtbkNvbXBvbmVudClcblx0Z3VpR3JpZENvbHVtbkNvbXBvbmVudDogUXVlcnlMaXN0PEd1aUdyaWRDb2x1bW5Db21wb25lbnQ+O1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uIHwgR3VpTXVsdGlDb2x1bW4+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbjtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgR3VpU29ydGluZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBHdWlTZWFyY2hpbmc7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogR3VpVGl0bGVQYW5lbDtcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogR3VpRm9vdGVyUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEd1aUZpbHRlcmluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgR3VpUXVpY2tGaWx0ZXJzO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW4gfCBHdWlDZWxsRWRpdDtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW4gfCBHdWlJbmZvUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogR3VpU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IEd1aUNvbHVtbk1lbnU7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBHdWlSb3dEZXRhaWw7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMb2NhbGl6YXRpb247XG5cblxuXHQvKipcblx0ICogT1VUUFVUU1xuXHQgKi9cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWxlY3RlZFJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTxHdWlTZWxlY3RlZFJvdz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjx7IGFmdGVyOiBhbnksIGJlZm9yZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRyb3dDb2xvcmluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlSb3dDb2xvcmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXHQvKiogQGludGVybmFsICovXG5cdGNvbHVtbnNDb25maWc6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHR0aGVtZUNvbmZpZzogYW55OyAvLyBTY2hlbWFUaGVtZTtcblxuXHRyb3dDb2xvcmluZ0NvbmZpZzogYW55OyAvLyBSb3dDb2xvcmluZztcblxuXHRjb2x1bW5NZW51Q29uZmlnOiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHJvd1NlbGVjdGlvbkNvbmZpZzogUm93U2VsZWN0aW9uO1xuXG5cdGNlbGxFZGl0aW5nQ29uZmlnOiBDZWxsRWRpdENvbmZpZztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3VpR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRUaGVtZUNvbnZlcnRlcjogR3VpR3JpZFRoZW1lQ29udmVydGVyID0gbmV3IEd1aUdyaWRUaGVtZUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRQYWdpbmdDb252ZXJ0ZXI6IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93U2VsZWN0aW9uQ29udmVydGVyOiBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyID0gbmV3IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3VpR3JpZENlbGxFZGl0Q29udmVydGVyOiBHdWlHcmlkQ2VsbEVkaXRDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENlbGxFZGl0Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEd1aUdyaWRHYXRld2F5Pik6IHZvaWQge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuY29sdW1ucywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5zKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnRoZW1lLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnRoZW1lKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd0NvbG9yaW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNvbHVtbk1lbnUsICgpID0+IHtcblx0XHRcdHRoaXMuY29sdW1uTWVudUNvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucm93U2VsZWN0aW9uLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvbkNvbmZpZyA9IHRoaXMuZ3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMucm93U2VsZWN0aW9uKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNlbGxFZGl0aW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNlbGxFZGl0aW5nQ29uZmlnID0gdGhpcy5ndWlHcmlkQ2VsbEVkaXRDb252ZXJ0ZXIuY29udmVydCh0aGlzLmNlbGxFZGl0aW5nKTtcblx0XHR9KTtcblxuXHRcdC8vIFRPRE9cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wYWdpbmcsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3JpZFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRpZiAodGhpcy5ndWlHcmlkQ29sdW1uQ29tcG9uZW50ICYmIHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudC50b0FycmF5KCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5ndWlHcmlkQ29sdW1uQ29tcG9uZW50LnRvQXJyYXkoKSk7XG5cdFx0fVxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0b25Sb3dzU2VsZWN0KHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Pik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZ3VpUm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+ID0gcm93cy5tYXAoKHJvdykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IHJvdy5nZXRJbmRleCgpLFxuXHRcdFx0XHRzb3VyY2U6IHJvdy5nZXRTb3VyY2UoKSxcblx0XHRcdFx0aXRlbUlkOiByb3cuZ2V0SXRlbUlkKClcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdGVkUm93cy5lbWl0KGd1aVJvd3MpO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZShjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdH1cblxuXHRvblNvdXJjZUVkaXQodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25DZWxsRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25UaGVtZSh2YWx1ZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lQ2hhbmdlZC5lbWl0KHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnRUb0d1aVRoZW1lKHZhbHVlKSk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblZlcnRpY2FsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZ0NoYW5nZWQuZW1pdCh0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlci5jb252ZXJ0VG9HdWlSb3dDb2xvcmluZyh2YWx1ZSkpO1xuXHR9XG5cblxufVxuIl19