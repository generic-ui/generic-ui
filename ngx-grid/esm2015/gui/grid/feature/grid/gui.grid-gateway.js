/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
/**
 * @abstract
 */
export class GuiGridGateway {
    /**
     * @protected
     */
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.columnsConfig = this.gridColumnConverter.convert(this.columns);
        }
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.themeConfig = this.gridThemeConverter.convert(this.theme);
        }
        if (changes.rowColoring !== undefined && changes.rowColoring.currentValue !== undefined) {
            this.rowColoringConfig = this.gridRowColoringConverter.convert(this.rowColoring);
        }
        if (changes.columnMenu !== undefined && changes.columnMenu.currentValue !== undefined) {
            this.columnMenuConfig = this.gridColumnMenuConverter.convert(this.columnMenu);
        }
        if (changes.rowSelection !== undefined && changes.rowSelection.currentValue !== undefined) {
            this.rowSelectionConfig = this.gridRowSelectionConverter.convert(this.rowSelection);
        }
        // TODO
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.gridPagingConverter.convert(this.paging);
            }
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemSelect(item) {
        this.itemsSelected.emit(item);
    }
    /**
     * @param {?} rows
     * @return {?}
     */
    onRowsSelect(rows) {
        /** @type {?} */
        const guiRows = rows.map((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            return {
                index: row.getIndex(),
                source: row.getData(),
                itemId: row.getItemId()
            };
        }));
        this.selectedRows.emit(guiRows);
    }
    /**
     * @return {?}
     */
    onColumnsChange() {
        this.columnsChanged.emit();
    }
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    onContainerWidthChange(containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSourceEdit(value) {
        this.sourceEdited.emit(value);
    }
    /**
     * @return {?}
     */
    onCellEditEnter() {
        this.cellEditEntered.emit();
    }
    /**
     * @return {?}
     */
    onCellEditSubmit() {
        this.cellEditSubmitted.emit();
    }
    /**
     * @return {?}
     */
    onCellEditCancel() {
        this.cellEditCanceled.emit();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearchPhrase(value) {
        this.searchPhraseChanged.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onTheme(value) {
        this.themeChanged.emit(this.gridThemeConverter.convertToGuiTheme(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHorizontalGrid(value) {
        this.horizontalGridChanged.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onVerticalGrid(value) {
        this.verticalGridChanged.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onRowColoring(value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
    }
}
GuiGridGateway.propDecorators = {
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
if (false) {
    /**
     * INPUTS
     * @type {?}
     */
    GuiGridGateway.prototype.columnHeaderTop;
    /** @type {?} */
    GuiGridGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    GuiGridGateway.prototype.maxHeight;
    /** @type {?} */
    GuiGridGateway.prototype.width;
    /** @type {?} */
    GuiGridGateway.prototype.rowHeight;
    /** @type {?} */
    GuiGridGateway.prototype.autoResizeWidth;
    /** @type {?} */
    GuiGridGateway.prototype.source;
    /** @type {?} */
    GuiGridGateway.prototype.columns;
    /** @type {?} */
    GuiGridGateway.prototype.paging;
    /** @type {?} */
    GuiGridGateway.prototype.verticalGrid;
    /** @type {?} */
    GuiGridGateway.prototype.horizontalGrid;
    /** @type {?} */
    GuiGridGateway.prototype.theme;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoring;
    /** @type {?} */
    GuiGridGateway.prototype.rowSelection;
    /** @type {?} */
    GuiGridGateway.prototype.rowStyle;
    /** @type {?} */
    GuiGridGateway.prototype.rowClass;
    /** @type {?} */
    GuiGridGateway.prototype.loading;
    /** @type {?} */
    GuiGridGateway.prototype.virtualScroll;
    /** @type {?} */
    GuiGridGateway.prototype.sorting;
    /** @type {?} */
    GuiGridGateway.prototype.searching;
    /** @type {?} */
    GuiGridGateway.prototype.titlePanel;
    /** @type {?} */
    GuiGridGateway.prototype.footerPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.filtering;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.quickFilters;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.editMode;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.cellEditing;
    /** @type {?} */
    GuiGridGateway.prototype.infoPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.summaries;
    /** @type {?} */
    GuiGridGateway.prototype.columnMenu;
    /** @type {?} */
    GuiGridGateway.prototype.rowDetail;
    /** @type {?} */
    GuiGridGateway.prototype.localization;
    /**
     * OUTPUTS
     * @type {?}
     */
    GuiGridGateway.prototype.pageChanged;
    /** @type {?} */
    GuiGridGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GuiGridGateway.prototype.itemsSelected;
    /** @type {?} */
    GuiGridGateway.prototype.selectedRows;
    /** @type {?} */
    GuiGridGateway.prototype.columnsChanged;
    /** @type {?} */
    GuiGridGateway.prototype.containerWidthChanged;
    /** @type {?} */
    GuiGridGateway.prototype.sourceEdited;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditEntered;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditCanceled;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    GuiGridGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    GuiGridGateway.prototype.themeChanged;
    /** @type {?} */
    GuiGridGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    GuiGridGateway.prototype.verticalGridChanged;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoringChanged;
    /**
     * \@internal
     * @type {?}
     */
    GuiGridGateway.prototype.columnsConfig;
    /** @type {?} */
    GuiGridGateway.prototype.themeConfig;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoringConfig;
    /** @type {?} */
    GuiGridGateway.prototype.columnMenuConfig;
    /** @type {?} */
    GuiGridGateway.prototype.rowSelectionConfig;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridColumnConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridRowColoringConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridColumnMenuConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridPagingConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridRowSelectionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTBCdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7QUFNaEcsTUFBTSxPQUFnQixjQUFjOzs7O0lBMExuQztRQWxLQSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFlBQU8sR0FBc0MsRUFBRSxDQUFDOzs7O1FBMkZoRCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3ZFLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsMEJBQXFCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsaUJBQVksR0FBOEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc3RSxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pE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bURBQWdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aUZvb3RlclBhbmVsLFxuXHRHdWlJbmZvUGFuZWwsXG5cdEd1aUxvY2FsaXphdGlvbixcblx0R3VpTXVsdGlDb2x1bW4sXG5cdEd1aVBhZ2luZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDbGFzcyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpUm93U2VsZWN0aW9uLFxuXHRHdWlSb3dTdHlsZSxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTZWxlY3RlZFJvdyxcblx0R3VpU29ydGluZyxcblx0R3VpU3VtbWFyaWVzLFxuXHRHdWlUaGVtZSxcblx0R3VpVGl0bGVQYW5lbFxufSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9ndWkuZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvY29sb3JpbmcvZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vbWVudS9ndWkuZ3JpZC5jb2x1bW4tbWVudS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS5ncmlkLnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcm93LXNlbGVjdGlvbi9ndWkuZ3JpZC5yb3ctc2VsZWN0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHQvKipcblx0ICogSU5QVVRTXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJUb3A6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyQm90dG9tOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PEd1aUNvbHVtbiB8IEd1aU11bHRpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpb246IGJvb2xlYW4gfCBHdWlSb3dTZWxlY3Rpb247XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgR3VpU2VhcmNoaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlUGFuZWw6IEd1aVRpdGxlUGFuZWw7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IEd1aUZvb3RlclBhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBHdWlGaWx0ZXJpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IEd1aVF1aWNrRmlsdGVycztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbiB8IEd1aUluZm9QYW5lbDtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0c3VtbWFyaWVzOiBHdWlTdW1tYXJpZXM7XG5cblx0QElucHV0KClcblx0Y29sdW1uTWVudTogR3VpQ29sdW1uTWVudTtcblxuXHRASW5wdXQoKVxuXHRyb3dEZXRhaWw6IEd1aVJvd0RldGFpbDtcblxuXHRASW5wdXQoKVxuXHRsb2NhbGl6YXRpb246IEd1aUxvY2FsaXphdGlvbjtcblxuXG5cdC8qKlxuXHQgKiBPVVRQVVRTXG5cdCAqL1xuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlbGVjdGVkUm93czogRXZlbnRFbWl0dGVyPEFycmF5PEd1aVNlbGVjdGVkUm93Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPHsgYWZ0ZXI6IGFueSwgYmVmb3JlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEd1aVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cdC8qKiBAaW50ZXJuYWwgKi9cblx0Y29sdW1uc0NvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+O1xuXG5cdHRoZW1lQ29uZmlnOiBhbnk7IC8vIFNjaGVtYVRoZW1lO1xuXG5cdHJvd0NvbG9yaW5nQ29uZmlnOiBhbnk7IC8vIFJvd0NvbG9yaW5nO1xuXG5cdGNvbHVtbk1lbnVDb25maWc6IENvbHVtbk1lbnVDb25maWc7XG5cblx0cm93U2VsZWN0aW9uQ29uZmlnOiBSb3dTZWxlY3Rpb247XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5Db252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5Db252ZXJ0ZXIgPSBuZXcgR3VpR3JpZENvbHVtbkNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyOiBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRDb2x1bW5NZW51Q29udmVydGVyOiBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHdWlHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlcjogR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEd1aUdyaWRHYXRld2F5Pik6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5zKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMudGhlbWVDb25maWcgPSB0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0KHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NvbmZpZyA9IHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1uTWVudSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1uTWVudS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5NZW51Q29uZmlnID0gdGhpcy5ncmlkQ29sdW1uTWVudUNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1uTWVudSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93U2VsZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dTZWxlY3Rpb24uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucm93U2VsZWN0aW9uQ29uZmlnID0gdGhpcy5ncmlkUm93U2VsZWN0aW9uQ29udmVydGVyLmNvbnZlcnQodGhpcy5yb3dTZWxlY3Rpb24pO1xuXHRcdH1cblxuXHRcdC8vIFRPRE9cblx0XHRpZiAoY2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSB0aGlzLmdyaWRQYWdpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnBhZ2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0b25Sb3dzU2VsZWN0KHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Pik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZ3VpUm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+ID0gcm93cy5tYXAoKHJvdykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IHJvdy5nZXRJbmRleCgpLFxuXHRcdFx0XHRzb3VyY2U6IHJvdy5nZXREYXRhKCksXG5cdFx0XHRcdGl0ZW1JZDogcm93LmdldEl0ZW1JZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChndWlSb3dzKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVGhlbWUodmFsdWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0VG9HdWlUaGVtZSh2YWx1ZSkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQodGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWUpKTtcblx0fVxuXG5cbn1cbiJdfQ==