import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
import { GuiGridColumnComponent } from './column/gui.grid-column.component';
import { GuiGridCellEditConverter } from './column/cell-editing/gui.grid.cell-edit.converter';
import { ifChanged } from '../../../../common/cdk/component/check.input';
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
GuiGridGateway.decorators = [
    { type: Directive }
];
GuiGridGateway.ctorParameters = () => [];
GuiGridGateway.propDecorators = {
    guiGridColumnComponent: [{ type: ContentChildren, args: [GuiGridColumnComponent,] }],
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }],
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    rowHeight: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    paging: [{ type: Input }],
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    theme: [{ type: Input }],
    rowColoring: [{ type: Input }],
    rowSelection: [{ type: Input }],
    rowStyle: [{ type: Input }],
    rowClass: [{ type: Input }],
    loading: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    sorting: [{ type: Input }],
    searching: [{ type: Input }],
    titlePanel: [{ type: Input }],
    footerPanel: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    summaries: [{ type: Input }],
    columnMenu: [{ type: Input }],
    rowDetail: [{ type: Input }],
    localization: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    selectedRows: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }],
    themeChanged: [{ type: Output }],
    horizontalGridChanged: [{ type: Output }],
    verticalGridChanged: [{ type: Output }],
    rowColoringChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBMkJoSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUloRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU5RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHekUsTUFBTSxPQUFnQixjQUFjO0lBaU1uQztRQXRLQSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFlBQU8sR0FBc0MsRUFBRSxDQUFDO1FBdUZoRDs7V0FFRztRQUVILGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGlCQUFZLEdBQXdDLElB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QUMsc0JBQXNCOzhCQU10QyxLQUFLO2lDQUdMLEtBQUs7d0JBR0wsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSztxQkFHTCxLQUFLO3NCQUdMLEtBQUs7cUJBR0wsS0FBSzsyQkFHTCxLQUFLOzZCQUdMLEtBQUs7b0JBR0wsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLEtBQUs7NEJBR0wsS0FBSztzQkFHTCxLQUFLO3dCQUdMLEtBQUs7eUJBR0wsS0FBSzswQkFHTCxLQUFLO3dCQU1MLEtBQUs7MkJBTUwsS0FBSzt1QkFNTCxLQUFLOzBCQU1MLEtBQUs7d0JBR0wsS0FBSzt3QkFNTCxLQUFLO3lCQUdMLEtBQUs7d0JBR0wsS0FBSzsyQkFHTCxLQUFLOzBCQU9MLE1BQU07OEJBR04sTUFBTTs0QkFHTixNQUFNOzJCQUdOLE1BQU07NkJBR04sTUFBTTtvQ0FHTixNQUFNOzJCQUdOLE1BQU07OEJBR04sTUFBTTsrQkFHTixNQUFNO2dDQUdOLE1BQU07a0NBR04sTUFBTTsyQkFHTixNQUFNO29DQUdOLE1BQU07a0NBR04sTUFBTTtpQ0FHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpQ2VsbEVkaXQsXG5cdEd1aUNvbHVtbixcblx0R3VpQ29sdW1uTWVudSxcblx0R3VpRmlsdGVyaW5nLFxuXHRHdWlGb290ZXJQYW5lbCxcblx0R3VpSW5mb1BhbmVsLFxuXHRHdWlMb2NhbGl6YXRpb24sXG5cdEd1aU11bHRpQ29sdW1uLFxuXHRHdWlQYWdpbmcsXG5cdEd1aVF1aWNrRmlsdGVycyxcblx0R3VpUm93Q2xhc3MsXG5cdEd1aVJvd0NvbG9yaW5nLFxuXHRHdWlSb3dEZXRhaWwsXG5cdEd1aVJvd1NlbGVjdGlvbixcblx0R3VpUm93U3R5bGUsXG5cdEd1aVNlYXJjaGluZyxcblx0R3VpU2VsZWN0ZWRSb3csXG5cdEd1aVNvcnRpbmcsXG5cdEd1aVN1bW1hcmllcyxcblx0R3VpVGhlbWUsXG5cdEd1aVRpdGxlUGFuZWxcbn0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL21lbnUvZ3VpLmdyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2Zvcm1hdGlvbi9jb3JlL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUdyaWRDZWxsRWRpdENvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2NlbGwtZWRpdGluZy9ndWkuZ3JpZC5jZWxsLWVkaXQuY29udmVydGVyJztcbmltcG9ydCB7IENlbGxFZGl0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvZWRpdC9jZWxsLWVkaXQuY29uZmlnJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oR3VpR3JpZENvbHVtbkNvbXBvbmVudClcblx0Z3VpR3JpZENvbHVtbkNvbXBvbmVudDogUXVlcnlMaXN0PEd1aUdyaWRDb2x1bW5Db21wb25lbnQ+O1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uIHwgR3VpTXVsdGlDb2x1bW4+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbjtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgR3VpU29ydGluZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBHdWlTZWFyY2hpbmc7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogR3VpVGl0bGVQYW5lbDtcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogR3VpRm9vdGVyUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEd1aUZpbHRlcmluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgR3VpUXVpY2tGaWx0ZXJzO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW4gfCBHdWlDZWxsRWRpdDtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW4gfCBHdWlJbmZvUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogR3VpU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IEd1aUNvbHVtbk1lbnU7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBHdWlSb3dEZXRhaWw7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMb2NhbGl6YXRpb247XG5cblxuXHQvKipcblx0ICogT1VUUFVUU1xuXHQgKi9cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWxlY3RlZFJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTxHdWlTZWxlY3RlZFJvdz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjx7IGFmdGVyOiBhbnksIGJlZm9yZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRyb3dDb2xvcmluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlSb3dDb2xvcmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXHQvKiogQGludGVybmFsICovXG5cdGNvbHVtbnNDb25maWc6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHR0aGVtZUNvbmZpZzogYW55OyAvLyBTY2hlbWFUaGVtZTtcblxuXHRyb3dDb2xvcmluZ0NvbmZpZzogYW55OyAvLyBSb3dDb2xvcmluZztcblxuXHRjb2x1bW5NZW51Q29uZmlnOiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHJvd1NlbGVjdGlvbkNvbmZpZzogUm93U2VsZWN0aW9uO1xuXG5cdGNlbGxFZGl0aW5nQ29uZmlnOiBDZWxsRWRpdENvbmZpZztcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3VpR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRUaGVtZUNvbnZlcnRlcjogR3VpR3JpZFRoZW1lQ29udmVydGVyID0gbmV3IEd1aUdyaWRUaGVtZUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRQYWdpbmdDb252ZXJ0ZXI6IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93U2VsZWN0aW9uQ29udmVydGVyOiBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyID0gbmV3IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3VpR3JpZENlbGxFZGl0Q29udmVydGVyOiBHdWlHcmlkQ2VsbEVkaXRDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENlbGxFZGl0Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEd1aUdyaWRHYXRld2F5Pik6IHZvaWQge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuY29sdW1ucywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5zKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnRoZW1lLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnRoZW1lKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd0NvbG9yaW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNvbHVtbk1lbnUsICgpID0+IHtcblx0XHRcdHRoaXMuY29sdW1uTWVudUNvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucm93U2VsZWN0aW9uLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvbkNvbmZpZyA9IHRoaXMuZ3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMucm93U2VsZWN0aW9uKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNlbGxFZGl0aW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNlbGxFZGl0aW5nQ29uZmlnID0gdGhpcy5ndWlHcmlkQ2VsbEVkaXRDb252ZXJ0ZXIuY29udmVydCh0aGlzLmNlbGxFZGl0aW5nKTtcblx0XHR9KTtcblxuXHRcdC8vIFRPRE9cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wYWdpbmcsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3JpZFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRpZiAodGhpcy5ndWlHcmlkQ29sdW1uQ29tcG9uZW50ICYmIHRoaXMuZ3VpR3JpZENvbHVtbkNvbXBvbmVudC50b0FycmF5KCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5ndWlHcmlkQ29sdW1uQ29tcG9uZW50LnRvQXJyYXkoKSk7XG5cdFx0fVxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0b25Sb3dzU2VsZWN0KHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Pik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZ3VpUm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+ID0gcm93cy5tYXAoKHJvdykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IHJvdy5nZXRJbmRleCgpLFxuXHRcdFx0XHRzb3VyY2U6IHJvdy5nZXRTb3VyY2UoKSxcblx0XHRcdFx0aXRlbUlkOiByb3cuZ2V0SXRlbUlkKClcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdGVkUm93cy5lbWl0KGd1aVJvd3MpO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZShjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdH1cblxuXHRvblNvdXJjZUVkaXQodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25DZWxsRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25UaGVtZSh2YWx1ZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lQ2hhbmdlZC5lbWl0KHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnRUb0d1aVRoZW1lKHZhbHVlKSk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblZlcnRpY2FsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZ0NoYW5nZWQuZW1pdCh0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlci5jb252ZXJ0VG9HdWlSb3dDb2xvcmluZyh2YWx1ZSkpO1xuXHR9XG5cblxufVxuIl19