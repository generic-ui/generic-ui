/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { skip } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.structureCommandService = structureCommandService;
        _this.pagingCommandService = pagingCommandService;
        _this.pagingEventService = pagingEventService;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandService = schemaCommandService;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionEventService = compositionEventService;
        _this.formationEventService = formationEventService;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.structureAggregationConfigService = structureAggregationConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.source = [];
        _this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        _this.pageChanged = new EventEmitter();
        _this.pageSizeChanged = new EventEmitter();
        _this.itemsSelected = new EventEmitter();
        _this.columnsChanged = new EventEmitter();
        _this.containerWidthChanged = new EventEmitter();
        _this.sourceEdited = new EventEmitter();
        _this.cellEditEntered = new EventEmitter();
        _this.cellEditCanceled = new EventEmitter();
        _this.cellEditSubmitted = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    StructureGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (simpleChanges.summaryPanel !== undefined && simpleChanges.summaryPanel.currentValue !== undefined) {
            this.structureSummaryEnabledArchive.set(this.summaryPanel);
        }
        if (simpleChanges.aggregation !== undefined && simpleChanges.aggregation.currentValue !== undefined) {
            this.structureAggregationConfigService.set(this.aggregation);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.set(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.set(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandService.setWidth(this.width);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandService.setResizeWidth(this.autoResizeWidth);
        }
        if (simpleChanges.columnHeaderTop !== undefined && simpleChanges.columnHeaderTop.currentValue !== undefined) {
            this.schemaCommandService.changeTopHeader(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.schemaCommandService.changeBottomHeader(this.columnHeaderBottom);
        }
        if (simpleChanges.loading !== undefined && simpleChanges.loading.currentValue !== undefined) {
            this.sourceCommandService.setLoading(this.loading);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            var pagingConfig = void 0;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
            }
            this.pagingCommandService.setPaging(pagingConfig);
        }
        if (simpleChanges.columns) {
            this.structureCommandService.initFields(this.columns, this.compositionId, this.structureId);
            // this.compositionCommandService.setColumns(this.columns);
        }
        if (simpleChanges.verticalGrid !== undefined && simpleChanges.verticalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandService.setTheme(this.theme);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandService.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.height && this.height) {
            this.schemaCommandService.setHeight(this.height);
        }
        if (simpleChanges.virtualScroll !== undefined && simpleChanges.virtualScroll.currentValue !== undefined) {
            if (this.virtualScroll) {
                this.structureCommandService.enableVerticalScroll();
            }
            else {
                this.structureCommandService.disableVerticalScroll();
            }
        }
        if (simpleChanges.sorting !== undefined && simpleChanges.sorting.currentValue !== undefined) {
            /** @type {?} */
            var sorting = void 0;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.structureCommandService.setSortingConfig(sorting);
        }
        if (simpleChanges.filtering !== undefined && simpleChanges.filtering.currentValue !== undefined) {
            /** @type {?} */
            var filtering = void 0;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandService.setFilterConfig(filtering);
        }
        if (simpleChanges.quickFilters !== undefined && simpleChanges.quickFilters.currentValue !== undefined) {
            /** @type {?} */
            var quickFilters = void 0;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandService.setQuickFiltersConfig(quickFilters);
        }
        if (simpleChanges.searching !== undefined && simpleChanges.searching.currentValue !== undefined) {
            /** @type {?} */
            var searching = void 0;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.structureCommandService.setSearchingConfig(searching);
        }
        /**
         * Setting source should be last step
         */
        if (simpleChanges.source) {
            this.sourceCommandService.setOrigin(this.source);
        }
    };
    /**
     * @return {?}
     */
    StructureGateway.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingEventService
            .selectPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .selectPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            _this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .selectItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .selectColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventService
            .selectContainerWidthChanged(this.compositionId)
            .pipe(
        // skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        function (containerWidth) {
            _this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .selectSourceEdited(this.structureId)
            .pipe(
        // this.takeUntil()
        )
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            _this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state) {
                case StructureCellEditState.ENTER:
                    _this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    _this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    _this.cellEditCanceled.emit();
                    break;
            }
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    StructureGateway.propDecorators = {
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
    return StructureGateway;
}(SmartComponent));
export { StructureGateway };
if (false) {
    /**
     * ********************
     * INPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.columnHeaderTop;
    /** @type {?} */
    StructureGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    StructureGateway.prototype.height;
    /** @type {?} */
    StructureGateway.prototype.width;
    /** @type {?} */
    StructureGateway.prototype.autoResizeWidth;
    /** @type {?} */
    StructureGateway.prototype.source;
    /** @type {?} */
    StructureGateway.prototype.columns;
    /** @type {?} */
    StructureGateway.prototype.paging;
    /** @type {?} */
    StructureGateway.prototype.verticalGrid;
    /** @type {?} */
    StructureGateway.prototype.horizontalGrid;
    /** @type {?} */
    StructureGateway.prototype.theme;
    /** @type {?} */
    StructureGateway.prototype.rowColoring;
    /** @type {?} */
    StructureGateway.prototype.loading;
    /** @type {?} */
    StructureGateway.prototype.virtualScroll;
    /** @type {?} */
    StructureGateway.prototype.sorting;
    /** @type {?} */
    StructureGateway.prototype.filtering;
    /** @type {?} */
    StructureGateway.prototype.quickFilters;
    /** @type {?} */
    StructureGateway.prototype.searching;
    /** @type {?} */
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /** @type {?} */
    StructureGateway.prototype.summaryPanel;
    /** @type {?} */
    StructureGateway.prototype.aggregation;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.pageChanged;
    /** @type {?} */
    StructureGateway.prototype.pageSizeChanged;
    /** @type {?} */
    StructureGateway.prototype.itemsSelected;
    /** @type {?} */
    StructureGateway.prototype.columnsChanged;
    /** @type {?} */
    StructureGateway.prototype.containerWidthChanged;
    /** @type {?} */
    StructureGateway.prototype.sourceEdited;
    /** @type {?} */
    StructureGateway.prototype.cellEditEntered;
    /** @type {?} */
    StructureGateway.prototype.cellEditCanceled;
    /** @type {?} */
    StructureGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    StructureGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSummaryEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureAggregationConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvZ2F0ZXdheS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXVCNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBTTNFO0lBQStDLDRDQUFjO0lBeUc1RCwwQkFDUSxXQUF3QixFQUNyQixhQUE0QixFQUM1Qix1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsa0JBQXNDLEVBQ3RDLG9CQUEwQyxFQUMxQyx5QkFBb0QsRUFDcEQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1Qyx3QkFBa0QsRUFDbEQsd0JBQWtELEVBQ2xELDhCQUE4RCxFQUM5RCxpQ0FBb0UsRUFDcEUsc0JBQThDO1FBaEJ6RCxZQWtCQyxpQkFBTyxTQUNQO1FBbEJPLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMs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QUMrQjs7SUFFL0Isd0NBQ3NCOztJQUV0QiwwQ0FDd0I7O0lBRXhCLGlDQUNtQjs7SUFFbkIsdUNBQytCOztJQUUvQixtQ0FDaUI7O0lBRWpCLHlDQUN1Qjs7SUFFdkIsbUNBQ2lDOztJQUVqQyxxQ0FDa0M7O0lBRWxDLHdDQUMyQzs7SUFFM0MscUNBQ2tDOztJQUVsQyxvQ0FDa0I7O0lBRWxCLHVDQUNxQjs7SUFFckIsd0NBQ3NCOztJQUV0Qix1Q0FDK0I7Ozs7Ozs7SUFPL0IsdUNBQytEOztJQUUvRCwyQ0FDbUU7O0lBRW5FLHlDQUNzRDs7SUFFdEQsMENBQ3dEOztJQUV4RCxpREFDaUU7O0lBRWpFLHdDQUNrRTs7SUFFbEUsMkNBQ3lEOztJQUV6RCw0Q0FDMEQ7O0lBRTFELDZDQUMyRDs7SUFJMUQsdUNBQStCOzs7OztJQUMvQix5Q0FBc0M7Ozs7O0lBQ3RDLG1EQUEwRDs7Ozs7SUFDMUQsZ0RBQW9EOzs7OztJQUNwRCw4Q0FBZ0Q7Ozs7O0lBQ2hELGdEQUFvRDs7Ozs7SUFDcEQsOENBQWdEOzs7OztJQUNoRCxnREFBb0Q7Ozs7O0lBQ3BELHFEQUE4RDs7Ozs7SUFDOUQsbURBQTBEOzs7OztJQUMxRCxpREFBc0Q7Ozs7O0lBQ3RELG9EQUE0RDs7Ozs7SUFDNUQsb0RBQTREOzs7OztJQUM1RCwwREFBd0U7Ozs7O0lBQ3hFLDZEQUE4RTs7Ozs7SUFDOUUsa0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi9hcHAvc291cmNlL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9wYWdpbmcvcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvcGFnaW5nL3BhZ2luZy1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3NvdXJjZS9zb3VyY2UtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zb3VyY2UvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24uZXZlbnQtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL3N1bW1hcnkvc3RydWN0dXJlLnN1bW1hcnktZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuXG5cblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlR2F0ZXdheSBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IFBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c3VtbWFyeVBhbmVsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGFnZ3JlZ2F0aW9uOiBBZ2dyZWdhdGlvbkNvbmZpZztcblxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFNlcnZpY2U6IFBhZ2luZ0V2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZFNlcnZpY2U6IFNjaGVtYUNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc3VtbWFyeVBhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zdW1tYXJ5UGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlLnNldCh0aGlzLnN1bW1hcnlQYW5lbCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuYWdncmVnYXRpb24gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmFnZ3JlZ2F0aW9uLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZS5zZXQodGhpcy5hZ2dyZWdhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5zZXQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5zZXQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0V2lkdGgodGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyVG9wICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2UuY2hhbmdlVG9wSGVhZGVyKHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5jaGFuZ2VCb3R0b21IZWFkZXIodGhpcy5jb2x1bW5IZWFkZXJCb3R0b20pO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmxvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0TG9hZGluZyh0aGlzLmxvYWRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2Uuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1ucykge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5pbml0RmllbGRzKHRoaXMuY29sdW1ucywgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldENvbHVtbnModGhpcy5jb2x1bW5zKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnZlcnRpY2FsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5jaGFuZ2VWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5jaGFuZ2VIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0VGhlbWUodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFJvd0NvbG9yaW5nKHRoaXMucm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmhlaWdodCAmJiB0aGlzLmhlaWdodCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRIZWlnaHQodGhpcy5oZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnZpcnR1YWxTY3JvbGwgIT09IHVuZGVmaW5lZCAgJiYgc2ltcGxlQ2hhbmdlcy52aXJ0dWFsU2Nyb2xsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZW5hYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc29ydGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc2VhcmNoaW5nOiBTZWFyY2hDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZWFyY2hpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zZWFyY2hpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHRoaXMuc2VhcmNoaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmcpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3VyY2UpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0UGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0UGFnZVNpemVDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdlU2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0LnNlbGVjdEl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0LnNlbGVjdENvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLCAvLyBUT0RPIHN5c3RlbSBzaG91bGQgZW1pdCByZXNwb25zZSB0aGF0IGl0IGlzIHJlYWR5XG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0LnNlbGVjdENvbnRhaW5lcldpZHRoQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gc2tpcCgxKSwgLy8gVE9ETyBzeXN0ZW0gc2hvdWxkIGVtaXQgcmVzcG9uc2UgdGhhdCBpdCBpcyByZWFkeVxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJXaWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZVxuXHRcdFx0LnNlbGVjdFNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2goc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cblxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=