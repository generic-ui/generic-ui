/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { GridColumnConverter } from './column/grid.column.converter';
import { GridThemeConverter } from './theme/grid.theme.converter';
import { GridRowColoringConverter } from './coloring/grid.row-coloring.converter';
import { GridColumnMenuConverter } from './column/menu/grid.column-menu.converter';
import { GridPagingConverter } from './paging/grid.paging.converter';
/**
 * @abstract
 */
var GridGateway = /** @class */ (function () {
    function GridGateway() {
        this.source = [];
        this.columns = [];
        /**
         * OUTPUTS
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
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
        this.gridColumnConverter = new GridColumnConverter();
        this.gridThemeConverter = new GridThemeConverter();
        this.gridRowColoringConverter = new GridRowColoringConverter();
        this.gridColumnMenuConverter = new GridColumnMenuConverter();
        this.gridPagingConverter = new GridPagingConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GridGateway.prototype.ngOnChanges = /**
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
    GridGateway.prototype.onPageChange = /**
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
    GridGateway.prototype.onPageSizeChange = /**
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
    GridGateway.prototype.onItemSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemsSelected.emit(item);
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onColumnsChange = /**
     * @return {?}
     */
    function () {
        this.columnsChanged.emit();
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    GridGateway.prototype.onContainerWidthChange = /**
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
    GridGateway.prototype.onSourceEdit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.sourceEdited.emit(value);
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditEnter = /**
     * @return {?}
     */
    function () {
        this.cellEditEntered.emit();
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditSubmit = /**
     * @return {?}
     */
    function () {
        this.cellEditSubmitted.emit();
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditCancel = /**
     * @return {?}
     */
    function () {
        this.cellEditCanceled.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridGateway.prototype.onSearchPhrase = /**
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
    GridGateway.prototype.onTheme = /**
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
    GridGateway.prototype.onHorizontalGrid = /**
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
    GridGateway.prototype.onVerticalGrid = /**
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
    GridGateway.prototype.onRowColoring = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
    };
    GridGateway.propDecorators = {
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
        rowSelecting: [{ type: Input }],
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
    return GridGateway;
}());
export { GridGateway };
if (false) {
    /**
     * INPUTS
     * @type {?}
     */
    GridGateway.prototype.columnHeaderTop;
    /** @type {?} */
    GridGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    GridGateway.prototype.maxHeight;
    /** @type {?} */
    GridGateway.prototype.width;
    /** @type {?} */
    GridGateway.prototype.rowHeight;
    /** @type {?} */
    GridGateway.prototype.autoResizeWidth;
    /** @type {?} */
    GridGateway.prototype.source;
    /** @type {?} */
    GridGateway.prototype.columns;
    /** @type {?} */
    GridGateway.prototype.paging;
    /** @type {?} */
    GridGateway.prototype.verticalGrid;
    /** @type {?} */
    GridGateway.prototype.horizontalGrid;
    /** @type {?} */
    GridGateway.prototype.theme;
    /** @type {?} */
    GridGateway.prototype.rowColoring;
    /** @type {?} */
    GridGateway.prototype.rowSelecting;
    /** @type {?} */
    GridGateway.prototype.loading;
    /** @type {?} */
    GridGateway.prototype.virtualScroll;
    /** @type {?} */
    GridGateway.prototype.sorting;
    /** @type {?} */
    GridGateway.prototype.searching;
    /** @type {?} */
    GridGateway.prototype.titlePanel;
    /** @type {?} */
    GridGateway.prototype.footerPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.filtering;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.quickFilters;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.editMode;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.cellEditing;
    /** @type {?} */
    GridGateway.prototype.infoPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.summaries;
    /** @type {?} */
    GridGateway.prototype.columnMenu;
    /** @type {?} */
    GridGateway.prototype.rowDetail;
    /**
     * OUTPUTS
     * @type {?}
     */
    GridGateway.prototype.pageChanged;
    /** @type {?} */
    GridGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GridGateway.prototype.itemsSelected;
    /** @type {?} */
    GridGateway.prototype.columnsChanged;
    /** @type {?} */
    GridGateway.prototype.containerWidthChanged;
    /** @type {?} */
    GridGateway.prototype.sourceEdited;
    /** @type {?} */
    GridGateway.prototype.cellEditEntered;
    /** @type {?} */
    GridGateway.prototype.cellEditCanceled;
    /** @type {?} */
    GridGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    GridGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    GridGateway.prototype.themeChanged;
    /** @type {?} */
    GridGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    GridGateway.prototype.verticalGridChanged;
    /** @type {?} */
    GridGateway.prototype.rowColoringChanged;
    /**
     * \@internal
     * @type {?}
     */
    GridGateway.prototype.columnsConfig;
    /** @type {?} */
    GridGateway.prototype.themeConfig;
    /** @type {?} */
    GridGateway.prototype.rowColoringConfig;
    /** @type {?} */
    GridGateway.prototype.columnMenuConfig;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridColumnConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridRowColoringConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridColumnMenuConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridPagingConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3JpZC1nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBaUJ0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUlyRTtJQTBLQztRQWxKQSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFlBQU8sR0FBcUIsRUFBRSxDQUFDOzs7O1FBa0YvQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3hELDBCQUFxQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pFLGlCQUFZLEdBQThDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0Usb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6RCxxQkFBZ0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxRCxzQkFBaUIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczRCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FB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LGtDQUMrRDs7SUFFL0Qsc0NBQ21FOztJQUVuRSxvQ0FDc0Q7O0lBRXRELHFDQUN3RDs7SUFFeEQsNENBQ2lFOztJQUVqRSxtQ0FDNkU7O0lBRTdFLHNDQUN5RDs7SUFFekQsdUNBQzBEOztJQUUxRCx3Q0FDMkQ7O0lBRTNELDBDQUMrRDs7SUFFL0QsbUNBQzBEOztJQUUxRCw0Q0FDa0U7O0lBRWxFLDBDQUNnRTs7SUFFaEUseUNBQ3NFOzs7OztJQUl0RSxvQ0FBbUM7O0lBRW5DLGtDQUFpQjs7SUFFakIsd0NBQXVCOztJQUV2Qix1Q0FBbUM7Ozs7O0lBRW5DLDBDQUFzRjs7Ozs7SUFFdEYseUNBQW1GOzs7OztJQUVuRiwrQ0FBcUc7Ozs7O0lBRXJHLDhDQUFrRzs7Ozs7SUFFbEcsMENBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsIEd1aUZvb3RlclBhbmVsLFxuXHRHdWlQYWdpbmdDb25maWcsXG5cdEd1aVF1aWNrRmlsdGVycyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVJvd0RldGFpbCxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTb3J0aW5nLFxuXHRHdWlTdW1tYXJpZXMsXG5cdEd1aVRoZW1lLCBHdWlUaXRsZVBhbmVsXG59IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEdyaWRDb2x1bW5NZW51Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vbWVudS9ncmlkLmNvbHVtbi1tZW51LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9wYWdpbmcvZ3JpZC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3NjaGVtYS9mZWF0dXJlLWFwaS9yb3ctY29sb3JpbmcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBHdWlTb3J0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IEd1aVNlYXJjaGluZztcblxuXHRASW5wdXQoKVxuXHR0aXRsZVBhbmVsOiBHdWlUaXRsZVBhbmVsO1xuXG5cdEBJbnB1dCgpXG5cdGZvb3RlclBhbmVsOiBHdWlGb290ZXJQYW5lbDtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgR3VpRmlsdGVyaW5nO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBHdWlRdWlja0ZpbHRlcnM7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogR3VpU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IEd1aUNvbHVtbk1lbnU7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBHdWlSb3dEZXRhaWw7XG5cblxuXHQvKipcblx0ICogT1VUUFVUU1xuXHQgKi9cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjx7IGFmdGVyOiBhbnksIGJlZm9yZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRyb3dDb2xvcmluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlSb3dDb2xvcmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXHQvKiogQGludGVybmFsICovXG5cdGNvbHVtbnNDb25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRDb2x1bW5Db252ZXJ0ZXI6IEdyaWRDb2x1bW5Db252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtbkNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29udmVydGVyOiBHcmlkVGhlbWVDb252ZXJ0ZXIgPSBuZXcgR3JpZFRoZW1lQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRDb2x1bW5NZW51Q29udmVydGVyOiBHcmlkQ29sdW1uTWVudUNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uTWVudUNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFBhZ2luZ0NvbnZlcnRlcjogR3JpZFBhZ2luZ0NvbnZlcnRlciA9IG5ldyBHcmlkUGFnaW5nQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zQ29uZmlnID0gdGhpcy5ncmlkQ29sdW1uQ29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5zKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMudGhlbWVDb25maWcgPSB0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0KHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NvbmZpZyA9IHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1uTWVudSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1uTWVudS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5NZW51Q29uZmlnID0gdGhpcy5ncmlkQ29sdW1uTWVudUNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1uTWVudSk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ET1xuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3JpZFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3QoaXRlbTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5pdGVtc1NlbGVjdGVkLmVtaXQoaXRlbSk7XG5cdH1cblxuXHRvbkNvbHVtbnNDaGFuZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoQ2hhbmdlKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0fVxuXG5cdG9uU291cmNlRWRpdCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvbkNlbGxFZGl0RW50ZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdFN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0U3VibWl0dGVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRDYW5jZWwoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaFBocmFzZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblRoZW1lKHZhbHVlOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydFRvR3VpVGhlbWUodmFsdWUpKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyh2YWx1ZTogUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnRUb0d1aVJvd0NvbG9yaW5nKHZhbHVlKSk7XG5cdH1cblxuXG59XG4iXX0=