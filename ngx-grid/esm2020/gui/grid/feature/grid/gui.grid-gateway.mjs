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
GuiGridGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GuiGridGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: GuiGridGateway, inputs: { columnHeaderTop: "columnHeaderTop", columnHeaderBottom: "columnHeaderBottom", maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", paging: "paging", verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid", theme: "theme", rowColoring: "rowColoring", rowSelection: "rowSelection", rowStyle: "rowStyle", rowClass: "rowClass", loading: "loading", virtualScroll: "virtualScroll", sorting: "sorting", searching: "searching", titlePanel: "titlePanel", footerPanel: "footerPanel", filtering: "filtering", quickFilters: "quickFilters", editMode: "editMode", cellEditing: "cellEditing", infoPanel: "infoPanel", summaries: "summaries", columnMenu: "columnMenu", rowDetail: "rowDetail", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", itemsSelected: "itemsSelected", selectedRows: "selectedRows", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted", searchPhraseChanged: "searchPhraseChanged", themeChanged: "themeChanged", horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged", rowColoringChanged: "rowColoringChanged" }, queries: [{ propertyName: "guiGridColumnComponent", predicate: GuiGridColumnComponent }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridGateway, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBMkJoSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUloRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU5RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBR2pGLE1BQU0sT0FBZ0IsY0FBYztJQWlNbkM7UUF0S0EsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUd4QixZQUFPLEdBQXNDLEVBQUUsQ0FBQztRQXVGaEQ7O1dBRUc7UUFFSCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUF3QyxJ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LFlBQVk7c0JBRFgsTUFBTTtnQkFJUCxlQUFlO3NCQURkLE1BQU07Z0JBSVAsZ0JBQWdCO3NCQURmLE1BQU07Z0JBSVAsaUJBQWlCO3NCQURoQixNQUFNO2dCQUlQLG1CQUFtQjtzQkFEbEIsTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU07Z0JBSVAscUJBQXFCO3NCQURwQixNQUFNO2dCQUlQLG1CQUFtQjtzQkFEbEIsTUFBTTtnQkFJUCxrQkFBa0I7c0JBRGpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHRHdWlDZWxsRWRpdCxcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aUZvb3RlclBhbmVsLFxuXHRHdWlJbmZvUGFuZWwsXG5cdEd1aUxvY2FsaXphdGlvbixcblx0R3VpTXVsdGlDb2x1bW4sXG5cdEd1aVBhZ2luZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDbGFzcyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpUm93U2VsZWN0aW9uLFxuXHRHdWlSb3dTdHlsZSxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTZWxlY3RlZFJvdyxcblx0R3VpU29ydGluZyxcblx0R3VpU3VtbWFyaWVzLFxuXHRHdWlUaGVtZSxcblx0R3VpVGl0bGVQYW5lbFxufSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvY29sb3JpbmcvZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvY29uZmlnL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL21lbnUvZ3VpLmdyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL2d1aS5ncmlkLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpR3JpZENlbGxFZGl0Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vY2VsbC1lZGl0aW5nL2d1aS5ncmlkLmNlbGwtZWRpdC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ2VsbEVkaXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9lZGl0L2NlbGwtZWRpdC5jb25maWcnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcblxuXHRAQ29udGVudENoaWxkcmVuKEd1aUdyaWRDb2x1bW5Db21wb25lbnQpXG5cdGd1aUdyaWRDb2x1bW5Db21wb25lbnQ6IFF1ZXJ5TGlzdDxHdWlHcmlkQ29sdW1uQ29tcG9uZW50PjtcblxuXHQvKipcblx0ICogSU5QVVRTXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJUb3A6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyQm90dG9tOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PEd1aUNvbHVtbiB8IEd1aU11bHRpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpb246IGJvb2xlYW4gfCBHdWlSb3dTZWxlY3Rpb247XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgR3VpU2VhcmNoaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlUGFuZWw6IEd1aVRpdGxlUGFuZWw7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IEd1aUZvb3RlclBhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBHdWlGaWx0ZXJpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IEd1aVF1aWNrRmlsdGVycztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuIHwgR3VpQ2VsbEVkaXQ7XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuIHwgR3VpSW5mb1BhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IEd1aVN1bW1hcmllcztcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBHdWlDb2x1bW5NZW51O1xuXG5cdEBJbnB1dCgpXG5cdHJvd0RldGFpbDogR3VpUm93RGV0YWlsO1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cblx0LyoqXG5cdCAqIE9VVFBVVFNcblx0ICovXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8R3VpU2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8eyBhZnRlcjogYW55LCBiZWZvcmU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHRoZW1lQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEd1aVRoZW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRjb2x1bW5zQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRyb3dTZWxlY3Rpb25Db25maWc6IFJvd1NlbGVjdGlvbjtcblxuXHRjZWxsRWRpdGluZ0NvbmZpZzogQ2VsbEVkaXRDb25maWc7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5Db252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyOiBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5NZW51Q29udmVydGVyOiBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHdWlHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlcjogR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGd1aUdyaWRDZWxsRWRpdENvbnZlcnRlcjogR3VpR3JpZENlbGxFZGl0Q29udmVydGVyID0gbmV3IEd1aUdyaWRDZWxsRWRpdENvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxHdWlHcmlkR2F0ZXdheT4pOiB2b2lkIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNvbHVtbnMsICgpID0+IHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1ucyk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy50aGVtZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5yb3dDb2xvcmluZywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NvbmZpZyA9IHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5jb2x1bW5NZW51LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd1NlbGVjdGlvbiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Db25maWcgPSB0aGlzLmdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd1NlbGVjdGlvbik7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5jZWxsRWRpdGluZywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jZWxsRWRpdGluZ0NvbmZpZyA9IHRoaXMuZ3VpR3JpZENlbGxFZGl0Q29udmVydGVyLmNvbnZlcnQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucGFnaW5nLCAoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSB0aGlzLmdyaWRQYWdpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnBhZ2luZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudCAmJiB0aGlzLmd1aUdyaWRDb2x1bW5Db21wb25lbnQudG9BcnJheSgpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudC50b0FycmF5KCkpO1xuXHRcdH1cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdG9uUm93c1NlbGVjdChyb3dzOiBBcnJheTxTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGd1aVJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93PiA9IHJvd3MubWFwKChyb3cpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGluZGV4OiByb3cuZ2V0SW5kZXgoKSxcblx0XHRcdFx0c291cmNlOiByb3cuZ2V0U291cmNlKCksXG5cdFx0XHRcdGl0ZW1JZDogcm93LmdldEl0ZW1JZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChndWlSb3dzKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVGhlbWUodmFsdWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0VG9HdWlUaGVtZSh2YWx1ZSkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQodGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWUpKTtcblx0fVxuXG5cbn1cbiJdfQ==