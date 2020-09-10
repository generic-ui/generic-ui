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
var GuiGridGateway = /** @class */ (function () {
    function GuiGridGateway() {
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
    GuiGridGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @param {?} page
     * @return {?}
     */
    GuiGridGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    GuiGridGateway.prototype.onPageSizeChange = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GuiGridGateway.prototype.onItemSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemsSelected.emit(item);
    };
    /**
     * @param {?} rows
     * @return {?}
     */
    GuiGridGateway.prototype.onRowsSelect = /**
     * @param {?} rows
     * @return {?}
     */
    function (rows) {
        /** @type {?} */
        var guiRows = rows.map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            return {
                index: row.getIndex(),
                data: row.getData(),
                itemId: row.getItemId()
            };
        }));
        this.selectedRows.emit(guiRows);
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onColumnsChange = /**
     * @return {?}
     */
    function () {
        this.columnsChanged.emit();
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    GuiGridGateway.prototype.onContainerWidthChange = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onSourceEdit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.sourceEdited.emit(value);
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditEnter = /**
     * @return {?}
     */
    function () {
        this.cellEditEntered.emit();
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditSubmit = /**
     * @return {?}
     */
    function () {
        this.cellEditSubmitted.emit();
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditCancel = /**
     * @return {?}
     */
    function () {
        this.cellEditCanceled.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onSearchPhrase = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchPhraseChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onTheme = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.themeChanged.emit(this.gridThemeConverter.convertToGuiTheme(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onHorizontalGrid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.horizontalGridChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onVerticalGrid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.verticalGridChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onRowColoring = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
    };
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
    return GuiGridGateway;
}());
export { GuiGridGateway };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFzQnRGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7O0FBSWhHO0lBaUxDO1FBekpBLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHeEIsWUFBTyxHQUFxQixFQUFFLENBQUM7Ozs7UUFrRi9CLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGlCQUFZLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdkUsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRSxpQkFBWSxHQUE4QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdFLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHekQscUJBQWdCLEdBQXVCLElBQUks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Ozs7OztJQUU5Riw0Q0FBMkY7Ozs7O0lBRTNGLGtEQUE2Rzs7Ozs7SUFFN0csaURBQTBHOzs7OztJQUUxRyw2Q0FBOEY7Ozs7O0lBRTlGLG1EQUFnSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdEd1aUNvbHVtbixcblx0R3VpQ29sdW1uTWVudSxcblx0R3VpRmlsdGVyaW5nLFxuXHRHdWlGb290ZXJQYW5lbCxcblx0R3VpSW5mb1BhbmVsLFxuXHRHdWlQYWdpbmcsXG5cdEd1aVF1aWNrRmlsdGVycyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpUm93U2VsZWN0aW9uLFxuXHRHdWlTZWFyY2hpbmcsXG5cdEd1aVNlbGVjdGVkUm93LFxuXHRHdWlTb3J0aW5nLFxuXHRHdWlTdW1tYXJpZXMsXG5cdEd1aVRoZW1lLFxuXHRHdWlUaXRsZVBhbmVsXG59IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vbWVudS9ndWkuZ3JpZC5jb2x1bW4tbWVudS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS5ncmlkLnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpb246IGJvb2xlYW4gfCBHdWlSb3dTZWxlY3Rpb247XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBHdWlTb3J0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IEd1aVNlYXJjaGluZztcblxuXHRASW5wdXQoKVxuXHR0aXRsZVBhbmVsOiBHdWlUaXRsZVBhbmVsO1xuXG5cdEBJbnB1dCgpXG5cdGZvb3RlclBhbmVsOiBHdWlGb290ZXJQYW5lbDtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgR3VpRmlsdGVyaW5nO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBHdWlRdWlja0ZpbHRlcnM7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW4gfCBHdWlJbmZvUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogR3VpU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IEd1aUNvbHVtbk1lbnU7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBHdWlSb3dEZXRhaWw7XG5cblxuXHQvKipcblx0ICogT1VUUFVUU1xuXHQgKi9cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWxlY3RlZFJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTxHdWlTZWxlY3RlZFJvdz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjx7IGFmdGVyOiBhbnksIGJlZm9yZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRyb3dDb2xvcmluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlSb3dDb2xvcmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXHQvKiogQGludGVybmFsICovXG5cdGNvbHVtbnNDb25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRyb3dTZWxlY3Rpb25Db25maWc6IFJvd1NlbGVjdGlvbjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3VpR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRUaGVtZUNvbnZlcnRlcjogR3VpR3JpZFRoZW1lQ29udmVydGVyID0gbmV3IEd1aUdyaWRUaGVtZUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRQYWdpbmdDb252ZXJ0ZXI6IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93U2VsZWN0aW9uQ29udmVydGVyOiBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyID0gbmV3IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5Db252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dTZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd1NlbGVjdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Db25maWcgPSB0aGlzLmdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd1NlbGVjdGlvbik7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ET1xuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3JpZFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3QoaXRlbTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5pdGVtc1NlbGVjdGVkLmVtaXQoaXRlbSk7XG5cdH1cblxuXHRvblJvd3NTZWxlY3Qocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cblx0XHRjb25zdCBndWlSb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4gPSByb3dzLm1hcCgocm93KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogcm93LmdldEluZGV4KCksXG5cdFx0XHRcdGRhdGE6IHJvdy5nZXREYXRhKCksXG5cdFx0XHRcdGl0ZW1JZDogcm93LmdldEl0ZW1JZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChndWlSb3dzKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVGhlbWUodmFsdWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0VG9HdWlUaGVtZSh2YWx1ZSkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQodGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWUpKTtcblx0fVxuXG5cbn1cbiJdfQ==