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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3JpZC1nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBaUJ0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUlyRSxNQUFNLE9BQWdCLFdBQVc7Ozs7SUFvS2hDO1FBNUlBLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHeEIsWUFBTyxHQUFxQixFQUFFLENBQUM7Ozs7UUE0RS9CLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsMEJBQXFCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsaUJBQVksR0FBOEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc3RSxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pELHFCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFELHNCQUFpQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNELHdCQUFtQixHQUF5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bUM7O0lBRW5DLGtDQUFpQjs7SUFFakIsd0NBQXVCOztJQUV2Qix1Q0FBbUM7Ozs7O0lBRW5DLDBDQUFzRjs7Ozs7SUFFdEYseUNBQW1GOzs7OztJQUVuRiwrQ0FBcUc7Ozs7O0lBRXJHLDhDQUFrRzs7Ozs7SUFFbEcsMENBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0R3VpQ29sdW1uLFxuXHRHdWlDb2x1bW5NZW51LFxuXHRHdWlGaWx0ZXJpbmcsXG5cdEd1aVBhZ2luZ0NvbmZpZyxcblx0R3VpUXVpY2tGaWx0ZXJzLFxuXHRHdWlSb3dDb2xvcmluZyxcblx0R3VpUm93RGV0YWlsLFxuXHRHdWlTZWFyY2hpbmcsXG5cdEd1aVNvcnRpbmcsXG5cdEd1aVN1bW1hcmllcyxcblx0R3VpVGhlbWVcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEdyaWRDb2x1bW5Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3JpZFRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi90aGVtZS9ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbG9yaW5nL2dyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgR3JpZENvbHVtbk1lbnVDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9tZW51L2dyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ncmlkLnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc2NoZW1hL2ZlYXR1cmUtYXBpL3Jvdy1jb2xvcmluZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcmlkR2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0LyoqXG5cdCAqIElOUFVUU1xuXHQgKi9cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxHdWlDb2x1bW4+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IEd1aVNvcnRpbmc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgR3VpU2VhcmNoaW5nO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBHdWlGaWx0ZXJpbmc7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IEd1aVF1aWNrRmlsdGVycztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0c3VtbWFyaWVzOiBHdWlTdW1tYXJpZXM7XG5cblx0QElucHV0KClcblx0Y29sdW1uTWVudTogR3VpQ29sdW1uTWVudTtcblxuXHRASW5wdXQoKVxuXHRyb3dEZXRhaWw6IEd1aVJvd0RldGFpbDtcblxuXG5cdC8qKlxuXHQgKiBPVVRQVVRTXG5cdCAqL1xuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPHsgYWZ0ZXI6IGFueSwgYmVmb3JlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHdWlUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEd1aVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cdC8qKiBAaW50ZXJuYWwgKi9cblx0Y29sdW1uc0NvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHR0aGVtZUNvbmZpZzogYW55OyAvLyBTY2hlbWFUaGVtZTtcblxuXHRyb3dDb2xvcmluZ0NvbmZpZzogYW55OyAvLyBSb3dDb2xvcmluZztcblxuXHRjb2x1bW5NZW51Q29uZmlnOiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEdyaWRUaGVtZUNvbnZlcnRlciA9IG5ldyBHcmlkVGhlbWVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcjogR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyID0gbmV3IEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkUGFnaW5nQ29udmVydGVyOiBHcmlkUGFnaW5nQ29udmVydGVyID0gbmV3IEdyaWRQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5Db252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHQvLyBUT0RPXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ncmlkUGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVGhlbWUodmFsdWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0VG9HdWlUaGVtZSh2YWx1ZSkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQodGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWUpKTtcblx0fVxuXG5cbn1cbiJdfQ==