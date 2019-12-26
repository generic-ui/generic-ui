/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { GridColumnConverter } from './column/grid.column.converter';
import { GridThemeConverter } from './theme/grid.theme.converter';
import { GridRowColoringConverter } from './coloring/grid.row-coloring.converter';
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
        // RowColoring;
        this.gridColumnConverter = new GridColumnConverter();
        this.gridThemeConverter = new GridThemeConverter();
        this.gridRowColoringConverter = new GridRowColoringConverter();
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
    GridGateway.propDecorators = {
        columnHeaderTop: [{ type: Input }],
        columnHeaderBottom: [{ type: Input }],
        height: [{ type: Input }],
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
        summaryPanel: [{ type: Input }],
        aggregation: [{ type: Input }],
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
    GridGateway.prototype.height;
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
    GridGateway.prototype.summaryPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.aggregation;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2dyaWQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQWdCdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFFbEY7SUFzSUM7UUFqSEEsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUd4QixZQUFPLEdBQXFCLEVBQUUsQ0FBQzs7OztRQXNFL0IsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR25FLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRSxpQkFBWSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNFLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHekQscUJBQWdCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHMUQsc0JBQWlCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBVTFDLHdCQUFtQixHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFFckUsdUJBQWtCLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUVsRSw2QkFBd0IsR0FBNkIsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0lBR3JHLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM1RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDeEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pGO0lBRUYsQ0FBQzs7Ozs7SUFFRCxrQ0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELHNDQUFnQjs7OztJQUFoQixVQUFpQixRQUFnQjtRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGtDQUFZOzs7O0lBQVosVUFBYSxJQUFTO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsNENBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQXNCO1FBQzVDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxrQ0FBWTs7OztJQUFaLFVBQWEsS0FBVTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQscUNBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsc0NBQWdCOzs7SUFBaEI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHNDQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7O2tDQXRMQSxLQUFLO3FDQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLO2tDQUdMLEtBQUs7eUJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7K0JBR0wsS0FBSztpQ0FHTCxLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSzswQkFHTCxLQUFLO2dDQUdMLEtBQUs7MEJBR0wsS0FBSzs0QkFNTCxLQUFLOytCQU1MLEtBQUs7NEJBTUwsS0FBSzsyQkFNTCxLQUFLOzhCQU1MLEtBQUs7K0JBR0wsS0FBSzs4QkFNTCxLQUFLOzhCQU9MLE1BQU07a0NBR04sTUFBTTtnQ0FHTixNQUFNO2lDQUdOLE1BQU07d0NBR04sTUFBTTsrQkFHTixNQUFNO2tDQUdOLE1BQU07bUNBR04sTUFBTTtvQ0FHTixNQUFNOztJQXdFUixrQkFBQztDQUFBLEFBN0xELElBNkxDO1NBN0xxQixXQUFXOzs7Ozs7SUFLaEMsc0NBQ3lCOztJQUV6Qix5Q0FDNEI7O0lBRTVCLDZCQUNlOztJQUVmLDRCQUNjOztJQUVkLHNDQUN5Qjs7SUFFekIsNkJBQ3dCOztJQUV4Qiw4QkFDK0I7O0lBRS9CLDZCQUNrQzs7SUFFbEMsbUNBQ3NCOztJQUV0QixxQ0FDd0I7O0lBRXhCLDRCQUN5Qjs7SUFFekIsa0NBQ3FDOztJQUVyQyw4QkFDaUI7O0lBRWpCLG9DQUN1Qjs7SUFFdkIsOEJBQzhCOzs7OztJQUs5QixnQ0FDa0M7Ozs7O0lBS2xDLG1DQUN3Qzs7Ozs7SUFLeEMsZ0NBQ2tDOzs7OztJQUtsQywrQkFDa0I7Ozs7O0lBS2xCLGtDQUNxQjs7SUFFckIsbUNBQ3NCOzs7OztJQUt0QixrQ0FDNEI7Ozs7O0lBTTVCLGtDQUMrRDs7SUFFL0Qsc0NBQ21FOztJQUVuRSxvQ0FDc0Q7O0lBRXRELHFDQUN3RDs7SUFFeEQsNENBQ2lFOztJQUVqRSxtQ0FDMkU7O0lBRTNFLHNDQUN5RDs7SUFFekQsdUNBQzBEOztJQUUxRCx3Q0FDMkQ7Ozs7O0lBSTNELG9DQUFtQzs7SUFFbkMsa0NBQWlCOztJQUVqQix3Q0FBdUI7Ozs7O0lBRXZCLDBDQUFzRjs7Ozs7SUFFdEYseUNBQW1GOzs7OztJQUVuRiwrQ0FBcUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHRHdWlBZ2dyZWdhdGlvbixcblx0R3VpQ29sdW1uLFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aVBhZ2luZ0NvbmZpZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDb2xvcmluZyxcblx0R3VpU2VhcmNoaW5nLFxuXHRHdWlTb3J0aW5nLFxuXHRHdWlUaGVtZVxufSBmcm9tICcuLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuXG5pbXBvcnQgeyBHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3JpZC5jb2x1bW4uY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aVBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEd1aUZpbHRlcmluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgR3VpUXVpY2tGaWx0ZXJzO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBHdWlTZWFyY2hpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJ5UGFuZWw6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGFnZ3JlZ2F0aW9uOiBHdWlBZ2dyZWdhdGlvbjtcblxuXG5cdC8qKlxuXHQgKiBPVVRQVVRTXG5cdCAqL1xuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPHthZnRlcjogYW55LCBiZWZvcmU6IGFueX0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRjb2x1bW5zQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWc+O1xuXG5cdHRoZW1lQ29uZmlnOiBhbnk7IC8vIFNjaGVtYVRoZW1lO1xuXG5cdHJvd0NvbG9yaW5nQ29uZmlnOiBhbnk7IC8vIFJvd0NvbG9yaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcjogR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyID0gbmV3IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29sdW1uc0NvbmZpZyA9IHRoaXMuZ3JpZENvbHVtbkNvbnZlcnRlci5jb252ZXJ0KHRoaXMuY29sdW1ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmdDb25maWcgPSB0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZShjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdH1cblxuXHRvblNvdXJjZUVkaXQodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25DZWxsRWRpdEVudGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRTdWJtaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdH1cblxufVxuIl19