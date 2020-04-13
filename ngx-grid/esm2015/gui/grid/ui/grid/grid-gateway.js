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
        this.searchPhraseChanged = new EventEmitter();
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
}
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
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    summaries: [{ type: Input }],
    columnMenu: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2dyaWQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQWdCdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFFckUsTUFBTSxPQUFnQixXQUFXOzs7O0lBcUpoQztRQTdIQSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFlBQU8sR0FBcUIsRUFBRSxDQUFDOzs7O1FBeUUvQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3hELDBCQUFxQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pFLGlCQUFZLEdBQThDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0Usb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6RCxxQkFBZ0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxRCxzQkFBaUIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczRCx3QkFBbUIsR0FBeUIsSUFB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QUtuQixnQ0FDd0I7O0lBRXhCLGlDQUMwQjs7Ozs7SUFNMUIsa0NBQytEOztJQUUvRCxzQ0FDbUU7O0lBRW5FLG9DQUNzRDs7SUFFdEQscUNBQ3dEOztJQUV4RCw0Q0FDaUU7O0lBRWpFLG1DQUM2RTs7SUFFN0Usc0NBQ3lEOztJQUV6RCx1Q0FDMEQ7O0lBRTFELHdDQUMyRDs7SUFFM0QsMENBQytEOzs7OztJQUkvRCxvQ0FBbUM7O0lBRW5DLGtDQUFpQjs7SUFFakIsd0NBQXVCOztJQUV2Qix1Q0FBbUM7Ozs7O0lBRW5DLDBDQUFzRjs7Ozs7SUFFdEYseUNBQW1GOzs7OztJQUVuRiwrQ0FBcUc7Ozs7O0lBRXJHLDhDQUFrRzs7Ozs7SUFFbEcsMENBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpU3VtbWFyaWVzLFxuXHRHdWlDb2x1bW4sXG5cdEd1aUNvbHVtbk1lbnUsXG5cdEd1aUZpbHRlcmluZyxcblx0R3VpUGFnaW5nQ29uZmlnLFxuXHRHdWlRdWlja0ZpbHRlcnMsXG5cdEd1aVJvd0NvbG9yaW5nLFxuXHRHdWlTZWFyY2hpbmcsXG5cdEd1aVNvcnRpbmcsXG5cdEd1aVRoZW1lXG59IGZyb20gJy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuaW1wb3J0IHsgR3JpZENvbHVtbkNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2dyaWQuY29sdW1uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2dyaWQudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB9IGZyb20gJy4vY29sb3JpbmcvZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL3VpLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgR3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9tZW51L2dyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ncmlkLnBhZ2luZy5jb252ZXJ0ZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBHdWlTb3J0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IEd1aVNlYXJjaGluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgR3VpRmlsdGVyaW5nO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBHdWlRdWlja0ZpbHRlcnM7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogR3VpU3VtbWFyaWVzO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IEd1aUNvbHVtbk1lbnU7XG5cblxuXHQvKipcblx0ICogT1VUUFVUU1xuXHQgKi9cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjx7IGFmdGVyOiBhbnksIGJlZm9yZTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cdC8qKiBAaW50ZXJuYWwgKi9cblx0Y29sdW1uc0NvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHR0aGVtZUNvbmZpZzogYW55OyAvLyBTY2hlbWFUaGVtZTtcblxuXHRyb3dDb2xvcmluZ0NvbmZpZzogYW55OyAvLyBSb3dDb2xvcmluZztcblxuXHRjb2x1bW5NZW51Q29uZmlnOiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcjogR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyID0gbmV3IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5Db252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHQvLyBUT0RPXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ncmlkUGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG59XG4iXX0=