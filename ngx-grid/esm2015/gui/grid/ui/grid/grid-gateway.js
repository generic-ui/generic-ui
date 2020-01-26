/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { GridColumnConverter } from './column/grid.column.converter';
import { GridThemeConverter } from './theme/grid.theme.converter';
import { GridRowColoringConverter } from './coloring/grid.row-coloring.converter';
import { GridColumnMenuConverter } from './column/menu/grid.column-menu.converter';
/**
 * @abstract
 */
export class GridGateway {
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
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.gridColumnConverter = new GridColumnConverter();
        this.gridThemeConverter = new GridThemeConverter();
        this.gridRowColoringConverter = new GridRowColoringConverter();
        this.gridColumnMenuConverter = new GridColumnMenuConverter();
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
}
GridGateway.propDecorators = {
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }],
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    paging: [{ type: Input }],
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    theme: [{ type: Input }],
    rowColoring: [{ type: Input }],
    loading: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    sorting: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    searching: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    aggregation: [{ type: Input }],
    columnMenu: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }]
};
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
    GridGateway.prototype.loading;
    /** @type {?} */
    GridGateway.prototype.virtualScroll;
    /** @type {?} */
    GridGateway.prototype.sorting;
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
    GridGateway.prototype.searching;
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
    GridGateway.prototype.aggregation;
    /** @type {?} */
    GridGateway.prototype.columnMenu;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2dyaWQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQWV0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVuRixNQUFNLE9BQWdCLFdBQVc7Ozs7SUE2SWhDO1FBeEhBLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHeEIsWUFBTyxHQUFxQixFQUFFLENBQUM7Ozs7UUF5RS9CLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsMEJBQXFCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsaUJBQVksR0FBNEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczRSxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pELHFCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFELHNCQUFpQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBWTFDLHdCQUFtQixHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFFckUsdUJBQWtCLEdBQXVCLElBQUksa0JB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QU07NEJBR04sTUFBTTs2QkFHTixNQUFNO29DQUdOLE1BQU07MkJBR04sTUFBTTs4QkFHTixNQUFNOytCQUdOLE1BQU07Z0NBR04sTUFBTTs7Ozs7OztJQW5IUCxzQ0FDeUI7O0lBRXpCLHlDQUM0Qjs7SUFFNUIsZ0NBQ2tCOztJQUVsQiw0QkFDYzs7SUFFZCxzQ0FDeUI7O0lBRXpCLDZCQUN3Qjs7SUFFeEIsOEJBQytCOztJQUUvQiw2QkFDa0M7O0lBRWxDLG1DQUNzQjs7SUFFdEIscUNBQ3dCOztJQUV4Qiw0QkFDeUI7O0lBRXpCLGtDQUNxQzs7SUFFckMsOEJBQ2lCOztJQUVqQixvQ0FDdUI7O0lBRXZCLDhCQUM4Qjs7Ozs7SUFLOUIsZ0NBQ2tDOzs7OztJQUtsQyxtQ0FDd0M7Ozs7O0lBS3hDLGdDQUNrQzs7Ozs7SUFLbEMsK0JBQ2tCOzs7OztJQUtsQixrQ0FDcUI7O0lBRXJCLGdDQUNtQjs7Ozs7SUFLbkIsa0NBQzRCOztJQUU1QixpQ0FDMEI7Ozs7O0lBTTFCLGtDQUMrRDs7SUFFL0Qsc0NBQ21FOztJQUVuRSxvQ0FDc0Q7O0lBRXRELHFDQUN3RDs7SUFFeEQsNENBQ2lFOztJQUVqRSxtQ0FDMkU7O0lBRTNFLHNDQUN5RDs7SUFFekQsdUNBQzBEOztJQUUxRCx3Q0FDMkQ7Ozs7O0lBSTNELG9DQUFtQzs7SUFFbkMsa0NBQWlCOztJQUVqQix3Q0FBdUI7O0lBRXZCLHVDQUFtQzs7Ozs7SUFFbkMsMENBQXNGOzs7OztJQUV0Rix5Q0FBbUY7Ozs7O0lBRW5GLCtDQUFxRzs7Ozs7SUFFckcsOENBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpQWdncmVnYXRpb24sXG5cdEd1aUNvbHVtbiwgR3VpQ29sdW1uTWVudSxcblx0R3VpRmlsdGVyaW5nLFxuXHRHdWlQYWdpbmdDb25maWcsXG5cdEd1aVF1aWNrRmlsdGVycyxcblx0R3VpUm93Q29sb3JpbmcsXG5cdEd1aVNlYXJjaGluZyxcblx0R3VpU29ydGluZyxcblx0R3VpVGhlbWVcbn0gZnJvbSAnLi4vLi4vdWktYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEdyaWRDb2x1bW5Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZFRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi90aGVtZS9ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbG9yaW5nL2dyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBHcmlkQ29sdW1uTWVudUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL21lbnUvZ3JpZC5jb2x1bW4tbWVudS5jb252ZXJ0ZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEd1aUZpbHRlcmluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgR3VpUXVpY2tGaWx0ZXJzO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBHdWlTZWFyY2hpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGFnZ3JlZ2F0aW9uOiBHdWlBZ2dyZWdhdGlvbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBHdWlDb2x1bW5NZW51O1xuXG5cblx0LyoqXG5cdCAqIE9VVFBVVFNcblx0ICovXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8e2FmdGVyOiBhbnksIGJlZm9yZTogYW55fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXHQvKiogQGludGVybmFsICovXG5cdGNvbHVtbnNDb25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRDb2x1bW5Db252ZXJ0ZXI6IEdyaWRDb2x1bW5Db252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtbkNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29udmVydGVyOiBHcmlkVGhlbWVDb252ZXJ0ZXIgPSBuZXcgR3JpZFRoZW1lQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRDb2x1bW5NZW51Q29udmVydGVyOiBHcmlkQ29sdW1uTWVudUNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uTWVudUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmdDb25maWcgPSB0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbk1lbnUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbk1lbnUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29sdW1uTWVudUNvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZShjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdH1cblxuXHRvblNvdXJjZUVkaXQodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25DZWxsRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdH1cblxufVxuIl19