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
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridPagingConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2dyaWQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQWdCdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFFckUsTUFBTSxPQUFnQixXQUFXOzs7O0lBa0poQztRQTFIQSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFlBQU8sR0FBcUIsRUFBRSxDQUFDOzs7O1FBeUUvQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3hELDBCQUFxQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pFLGlCQUFZLEdBQThDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0Usb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6RCxxQkFBZ0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxRCxzQkFBaUIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVkxQyx3QkFBbUIsR0FBd0IsSUFB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MEQ7O0lBRTFELHdDQUMyRDs7Ozs7SUFJM0Qsb0NBQW1DOztJQUVuQyxrQ0FBaUI7O0lBRWpCLHdDQUF1Qjs7SUFFdkIsdUNBQW1DOzs7OztJQUVuQywwQ0FBc0Y7Ozs7O0lBRXRGLHlDQUFtRjs7Ozs7SUFFbkYsK0NBQXFHOzs7OztJQUVyRyw4Q0FBa0c7Ozs7O0lBRWxHLDBDQUFzRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdEd1aUFnZ3JlZ2F0aW9uLFxuXHRHdWlDb2x1bW4sXG5cdEd1aUNvbHVtbk1lbnUsXG5cdEd1aUZpbHRlcmluZyxcblx0R3VpUGFnaW5nQ29uZmlnLFxuXHRHdWlRdWlja0ZpbHRlcnMsXG5cdEd1aVJvd0NvbG9yaW5nLFxuXHRHdWlTZWFyY2hpbmcsXG5cdEd1aVNvcnRpbmcsXG5cdEd1aVRoZW1lXG59IGZyb20gJy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgR3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9tZW51L2dyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ncmlkLnBhZ2luZy5jb252ZXJ0ZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBHdWlTb3J0aW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IEd1aVNlYXJjaGluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgR3VpRmlsdGVyaW5nO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBHdWlRdWlja0ZpbHRlcnM7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGFnZ3JlZ2F0aW9uOiBHdWlBZ2dyZWdhdGlvbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBHdWlDb2x1bW5NZW51O1xuXG5cblx0LyoqXG5cdCAqIE9VVFBVVFNcblx0ICovXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8eyBhZnRlcjogYW55LCBiZWZvcmU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cdC8qKiBAaW50ZXJuYWwgKi9cblx0Y29sdW1uc0NvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHR0aGVtZUNvbmZpZzogYW55OyAvLyBTY2hlbWFUaGVtZTtcblxuXHRyb3dDb2xvcmluZ0NvbmZpZzogYW55OyAvLyBSb3dDb2xvcmluZztcblxuXHRjb2x1bW5NZW51Q29uZmlnOiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcjogR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyID0gbmV3IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5Db252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHQvLyBUT0RPXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ncmlkUGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cbn1cbiJdfQ==