/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { ColumnMenuConfig } from '../../feature-api/column-menu-config';
import { RowColoring } from '../../../schema/feature-api/row-coloring';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(structureId, compositionId, schemaId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureSummariesConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, schemaEventRepository) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.schemaId = schemaId;
        _this.structureCommandService = structureCommandService;
        _this.pagingCommandService = pagingCommandService;
        _this.pagingEventService = pagingEventService;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandDispatcher = schemaCommandDispatcher;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionEventService = compositionEventService;
        _this.formationEventService = formationEventService;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureSummariesConfigService = structureSummariesConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        _this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        _this.structureSearchEventService = structureSearchEventService;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        _this.schemaEventRepository = schemaEventRepository;
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
        _this.searchPhraseChanged = new EventEmitter();
        _this.themeChanged = new EventEmitter();
        _this.horizontalGridChanged = new EventEmitter();
        _this.verticalGridChanged = new EventEmitter();
        _this.rowColoringChanged = new EventEmitter();
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
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme);
        }
        if (simpleChanges.rowDetail !== undefined && simpleChanges.rowDetail.currentValue !== undefined) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.rowSelecting !== undefined && simpleChanges.rowSelecting.currentValue !== undefined) {
            this.structureRowSelectEnabledArchive.next(this.rowSelecting);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            this.structureInfoPanelEnabledArchive.next(this.infoPanel);
        }
        if (simpleChanges.summaries !== undefined && simpleChanges.summaries.currentValue !== undefined) {
            this.structureSummariesConfigService.set(this.summaries);
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
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
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
            this.schemaCommandDispatcher.setVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandDispatcher.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.structureCommandService.setContainerHeight(this.maxHeight);
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
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        function (containerWidth) {
            _this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(this.takeUntil())
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
        this.structureSearchEventService
            .onSearchPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.searchPhraseChanged.emit(phrase);
        }));
        this.connectSchemaEvents();
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
    /**
     * @private
     * @return {?}
     */
    StructureGateway.prototype.connectSchemaEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.schemaEventRepository
            .onThemeChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.themeChanged.emit(theme);
        }));
        this.schemaEventRepository
            .onHorizontalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.horizontalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onVerticalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.verticalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onRowColoring(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} coloring
         * @return {?}
         */
        function (coloring) {
            _this.rowColoringChanged.emit(coloring);
        }));
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
        rowSelecting: [{ type: Input }],
        loading: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        sorting: [{ type: Input }],
        filtering: [{ type: Input }],
        quickFilters: [{ type: Input }],
        searching: [{ type: Input }],
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
    StructureGateway.prototype.rowSelecting;
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
    StructureGateway.prototype.summaries;
    /** @type {?} */
    StructureGateway.prototype.columnMenu;
    /** @type {?} */
    StructureGateway.prototype.rowDetail;
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
    StructureGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    StructureGateway.prototype.themeChanged;
    /** @type {?} */
    StructureGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.verticalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.rowColoringChanged;
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
    StructureGateway.prototype.schemaId;
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
    StructureGateway.prototype.schemaCommandDispatcher;
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
    StructureGateway.prototype.structureSummariesConfigService;
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureRowSelectEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSearchEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderBottomEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9nYXRld2F5L3N0cnVjdHVyZS5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQXVCeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFVeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQU12RTtJQUErQyw0Q0FBYztJQW1JNUQsMEJBQ1EsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQW1ELEVBQ25ELG9CQUFzRCxFQUN0RCxrQkFBa0QsRUFDbEQsb0JBQTZDLEVBQzdDLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQseUJBQXVELEVBQ3ZELHVCQUFtRCxFQUNuRCxxQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBa0UsRUFDbEUsK0JBQWdFLEVBQ2hFLHNCQUE4QyxFQUM5QyxnQ0FBa0UsRUFDbEUsaUNBQW9FLEVBQ3BFLGdDQUFrRSxFQUNsRSwyQkFBd0QsRUFDeEQsZ0NBQWtFLEVBQ2xFLG1DQUF3RSxFQUN4RSxnQ0FBa0UsRUFDbEUscUJBQTRDO1FBekJ2RCxZQTJCQyxpQkFBTyxTQUNQO1FBM0JPLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGNBQVEs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QixxQ0FDMkI7O0lBRTNCLHNDQUM2Qjs7SUFFN0IscUNBQzRCOzs7Ozs7O0lBTzVCLHVDQUMrRDs7SUFFL0QsMkNBQ21FOztJQUVuRSx5Q0FDc0Q7O0lBRXRELDBDQUN3RDs7SUFFeEQsaURBQ2lFOztJQUVqRSx3Q0FDa0U7O0lBRWxFLDJDQUN5RDs7SUFFekQsNENBQzBEOztJQUUxRCw2Q0FDMkQ7O0lBRTNELCtDQUMrRDs7SUFFL0Qsd0NBQzZEOztJQUU3RCxpREFDa0U7O0lBRWxFLCtDQUNnRTs7SUFFaEUsOENBQ3lFOztJQUd4RSx1Q0FBK0I7Ozs7O0lBQy9CLHlDQUFzQzs7Ozs7SUFDdEMsb0NBQXlDOzs7OztJQUN6QyxtREFBNkQ7Ozs7O0lBQzdELGdEQUFnRTs7Ozs7SUFDaEUsOENBQTREOzs7OztJQUM1RCxnREFBdUQ7Ozs7O0lBQ3ZELDhDQUFnRDs7Ozs7SUFDaEQsbURBQTBEOzs7OztJQUMxRCxxREFBaUU7Ozs7O0lBQ2pFLG1EQUE2RDs7Ozs7SUFDN0QsaURBQXNEOzs7OztJQUN0RCxvREFBNEQ7Ozs7O0lBQzVELG9EQUE0RDs7Ozs7SUFDNUQsNERBQTRFOzs7OztJQUM1RSwyREFBMEU7Ozs7O0lBQzFFLGtEQUF3RDs7Ozs7SUFDeEQsNERBQTRFOzs7OztJQUM1RSw2REFBOEU7Ozs7O0lBQzlFLDREQUE0RTs7Ozs7SUFDNUUsdURBQWtFOzs7OztJQUNsRSw0REFBNEU7Ozs7O0lBQzVFLCtEQUFrRjs7Ozs7SUFDbEYsNERBQTRFOzs7OztJQUM1RSxpREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3N1bW1hcmllcy9zdW1tYXJpZXMtY29uZmlnJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zb3VyY2UvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc291cmNlL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vcGFnaW5nL21vZGUvc3RydWN0dXJlLXBhZ2luZy5kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2NvbnRlbnQvcm93L3N0cnVjdHVyZS5yb3ctc2VsZWN0LWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlLWFwaS9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgRGV0YWlsVmlld0NvbmZpZyB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvZGV0YWlsLXZpZXcuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcm93LWRldGFpbC9zdHJ1Y3R1cmUuZGV0YWlsLXZpZXcuY29uZmlnLWFyY2hpdmUnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBEZXRhaWxWaWV3Q29uZmlnO1xuXG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8RWRpdGVtSXRlbVZhbHVlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHVibGljIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdDb21tYW5kU2VydmljZTogU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHBhZ2luZ0V2ZW50U2VydmljZTogU3RydWN0dXJlUGFnaW5nRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFDb21tYW5kRGlzcGF0Y2hlcjogU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2U6IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlOiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogU3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZTogU3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0RldGFpbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93RGV0YWlsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLm5leHQodGhpcy5yb3dEZXRhaWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd1NlbGVjdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93U2VsZWN0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5yb3dTZWxlY3RpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc3VtbWFyaWVzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZWRpdE1vZGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5uZXh0KHRoaXMuY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLndpZHRoICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldFdpZHRoKHRoaXMud2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyVG9wICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUubmV4dCh0aGlzLmNvbHVtbkhlYWRlclRvcCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUubmV4dCh0aGlzLmNvbHVtbkhlYWRlckJvdHRvbSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRMb2FkaW5nKHRoaXMubG9hZGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblxuXHRcdFx0XHRpZiAodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm5leHQodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2Uuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1ucykge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5pbml0RmllbGRzKHRoaXMuY29sdW1ucywgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdC8vIHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb2x1bW5zKHRoaXMuY29sdW1ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmVydGljYWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0VmVydGljYWxHcmlkKHRoaXMudmVydGljYWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaG9yaXpvbnRhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0SG9yaXpvbnRhbEdyaWQodGhpcy5ob3Jpem9udGFsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHRoaXMucm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLm1heEhlaWdodCAmJiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnZpcnR1YWxTY3JvbGwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnZpcnR1YWxTY3JvbGwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5lbmFibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5kaXNhYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zb3J0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBzb3J0aW5nOiBTb3J0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc29ydGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zb3J0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3J0aW5nID0gdGhpcy5zb3J0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNvcnRpbmdDb25maWcoc29ydGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuZmlsdGVyaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5maWx0ZXJpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IGZpbHRlcmluZzogRmlsdGVyQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuZmlsdGVyaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZmlsdGVyaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB0aGlzLmZpbHRlcmluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRGaWx0ZXJDb25maWcoZmlsdGVyaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5xdWlja0ZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnF1aWNrRmlsdGVycy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcXVpY2tGaWx0ZXJzOiBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5xdWlja0ZpbHRlcnMgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5xdWlja0ZpbHRlcnNcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHRoaXMucXVpY2tGaWx0ZXJzO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhxdWlja0ZpbHRlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnNlYXJjaGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc2VhcmNoaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBzZWFyY2hpbmc6IFNlYXJjaENvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNlYXJjaGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNlYXJjaGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VhcmNoaW5nID0gdGhpcy5zZWFyY2hpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2VhcmNoaW5nQ29uZmlnKHNlYXJjaGluZyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnNvdXJjZSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5zb3VyY2UpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFNlcnZpY2Vcblx0XHRcdC5vblBhZ2VDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2VOdW1iZXIpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnBhZ2luZ0V2ZW50U2VydmljZVxuXHRcdFx0Lm9uUGFnZVNpemVDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdlU2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PGFueT4pID0+IHtcblx0XHRcdFx0dGhpcy5pdGVtc1NlbGVjdGVkLmVtaXQoaXRlbXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db2x1bW5zQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJXaWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZVxuXHRcdFx0Lm9uU291cmNlRWRpdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWVzOiBFZGl0ZW1JdGVtVmFsdWVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWVzKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVI6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0U3VibWl0dGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25TZWFyY2hQaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaFBocmFzZUNoYW5nZWQuZW1pdChwaHJhc2UpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbm5lY3RTY2hlbWFFdmVudHMoKTtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbm5lY3RTY2hlbWFFdmVudHMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhlbWUpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZC5lbWl0KGVuYWJsZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVmVydGljYWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkLmVtaXQoZW5hYmxlZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KGNvbG9yaW5nKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==