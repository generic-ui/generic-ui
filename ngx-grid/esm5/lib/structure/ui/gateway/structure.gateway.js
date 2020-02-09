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
import { ColumnMenuConfig } from '../../ui-api/structure/column-menu-config';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive) {
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
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureAggregationConfigService = structureAggregationConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
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
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            this.structureInfoPanelEnabledArchive.next(this.infoPanel);
        }
        if (simpleChanges.aggregation !== undefined && simpleChanges.aggregation.currentValue !== undefined) {
            this.structureAggregationConfigService.set(this.aggregation);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandService.setWidth(this.width);
        }
        if (simpleChanges.rowHeight !== undefined && simpleChanges.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
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
                if (this.paging.displayMode !== undefined) {
                    this.structurePagingDisplayModeArchive.next(this.paging.displayMode);
                }
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
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.schemaCommandService.setHeight(this.maxHeight);
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
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            _this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .onColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
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
            .onSourceEdited(this.structureId)
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
            .onValue()
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
    StructureGateway.prototype.maxHeight;
    /** @type {?} */
    StructureGateway.prototype.width;
    /** @type {?} */
    StructureGateway.prototype.rowHeight;
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
    StructureGateway.prototype.infoPanel;
    /** @type {?} */
    StructureGateway.prototype.aggregation;
    /** @type {?} */
    StructureGateway.prototype.columnMenu;
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
    StructureGateway.prototype.structureInfoPanelEnabledArchive;
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvZ2F0ZXdheS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBdUI1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFNN0U7SUFBK0MsNENBQWM7SUErRzVELDBCQUNRLFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLHVCQUFnRCxFQUNoRCxvQkFBMEMsRUFDMUMsa0JBQXNDLEVBQ3RDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLHlCQUFvRCxFQUNwRCx1QkFBZ0QsRUFDaEQscUJBQTRDLEVBQzVDLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUNwRSxzQkFBOEMsRUFDOUMsZ0NBQWtFLEVBQ2xFLGlDQUFvRTtRQWxCL0UsWUFvQkMsaUJBQU8sU0FDUDtRQXBCTyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNyQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFvQixHQUFwQixvQkFBb0IsQ0FB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a0U7O0lBRWxFLDJDQUN5RDs7SUFFekQsNENBQzBEOztJQUUxRCw2Q0FDMkQ7O0lBSTFELHVDQUErQjs7Ozs7SUFDL0IseUNBQXNDOzs7OztJQUN0QyxtREFBMEQ7Ozs7O0lBQzFELGdEQUFvRDs7Ozs7SUFDcEQsOENBQWdEOzs7OztJQUNoRCxnREFBb0Q7Ozs7O0lBQ3BELDhDQUFnRDs7Ozs7SUFDaEQsZ0RBQW9EOzs7OztJQUNwRCxxREFBOEQ7Ozs7O0lBQzlELG1EQUEwRDs7Ozs7SUFDMUQsaURBQXNEOzs7OztJQUN0RCxvREFBNEQ7Ozs7O0lBQzVELG9EQUE0RDs7Ozs7SUFDNUQsNERBQTRFOzs7OztJQUM1RSw2REFBOEU7Ozs7O0lBQzlFLGtEQUF3RDs7Ozs7SUFDeEQsNERBQTRFOzs7OztJQUM1RSw2REFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3BhZ2luZy1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2UvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uZXZlbnQtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL3BhZ2luZy9tb2RlL3N0cnVjdHVyZS1wYWdpbmcuZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgU29ydGluZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IFNlYXJjaENvbmZpZztcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0YWdncmVnYXRpb246IEFnZ3JlZ2F0aW9uQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRTZXJ2aWNlOiBQYWdpbmdFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmRTZXJ2aWNlOiBTY2hlbWFDb21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFNlcnZpY2U6IENvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogU3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuaW5mb1BhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5hZ2dyZWdhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuYWdncmVnYXRpb24uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlLnNldCh0aGlzLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZWRpdE1vZGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5uZXh0KHRoaXMuY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLndpZHRoICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldFdpZHRoKHRoaXMud2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyVG9wICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2UuY2hhbmdlVG9wSGVhZGVyKHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5jaGFuZ2VCb3R0b21IZWFkZXIodGhpcy5jb2x1bW5IZWFkZXJCb3R0b20pO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmxvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0TG9hZGluZyh0aGlzLmxvYWRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0aWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbnMpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuaW5pdEZpZWxkcyh0aGlzLmNvbHVtbnMsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29sdW1ucyh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudmVydGljYWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLmNoYW5nZVZlcnRpY2FsR3JpZCh0aGlzLnZlcnRpY2FsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmhvcml6b250YWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLmNoYW5nZUhvcml6b250YWxHcmlkKHRoaXMuaG9yaXpvbnRhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRUaGVtZSh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0Um93Q29sb3JpbmcodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubWF4SGVpZ2h0ICYmIHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldEhlaWdodCh0aGlzLm1heEhlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNvcnRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNvcnRpbmc6IFNvcnRpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zb3J0aW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c29ydGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNvcnRpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB0aGlzLnNvcnRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5maWx0ZXJpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgZmlsdGVyaW5nOiBGaWx0ZXJDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5maWx0ZXJpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5maWx0ZXJpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHRoaXMuZmlsdGVyaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnF1aWNrRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnF1aWNrRmlsdGVycyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnF1aWNrRmlsdGVyc1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0gdGhpcy5xdWlja0ZpbHRlcnM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKHF1aWNrRmlsdGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc2VhcmNoaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc2VhcmNoaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c2VhcmNoaW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc2VhcmNoaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB0aGlzLnNlYXJjaGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTZWFyY2hpbmdDb25maWcoc2VhcmNoaW5nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnBhZ2luZ0V2ZW50U2VydmljZVxuXHRcdFx0Lm9uUGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkNvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLCAvLyBUT0RPIHN5c3RlbSBzaG91bGQgZW1pdCByZXNwb25zZSB0aGF0IGl0IGlzIHJlYWR5XG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBza2lwKDEpLCAvLyBUT0RPIHN5c3RlbSBzaG91bGQgZW1pdCByZXNwb25zZSB0aGF0IGl0IGlzIHJlYWR5XG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyB0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlbUl0ZW1WYWx1ZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxufVxuIl19