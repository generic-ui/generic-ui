/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { ColumnMenuConfig } from '../../domain-api/column-menu-config';
import { RowColoring } from '../../../../schema/domain-api/row-coloring';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.commandDispatcher = commandDispatcher;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.schemaId = schemaId;
        _this.structureCommandService = structureCommandService;
        _this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        _this.pagingEventRepository = pagingEventRepository;
        _this.sortingCommandDispatcher = sortingCommandDispatcher;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.fieldCommandDispatcher = fieldCommandDispatcher;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandDispatcher = schemaCommandDispatcher;
        _this.compositionCommandDispatcher = compositionCommandDispatcher;
        _this.compositionEventService = compositionEventService;
        _this.formationEventService = formationEventService;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        _this.structureSummariesConfigService = structureSummariesConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.columnFieldFactory = columnFieldFactory;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        _this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        _this.searchEventRepository = searchEventRepository;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
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
        _this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher);
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
        if (simpleChanges.titlePanel !== undefined && simpleChanges.titlePanel.currentValue !== undefined) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (simpleChanges.footerPanel !== undefined && simpleChanges.footerPanel.currentValue !== undefined) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.rowSelecting !== undefined && simpleChanges.rowSelecting.currentValue !== undefined) {
            this.structureRowSelectEnabledArchive.next(this.rowSelecting);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
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
            this.compositionCommandDispatcher.setWidth(this.width);
        }
        if (simpleChanges.rowHeight !== undefined && simpleChanges.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth);
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
            this.structurePagingCommandDispatcher.setPaging(pagingConfig);
        }
        if (simpleChanges.columns !== undefined && simpleChanges.columns.currentValue !== undefined) {
            this.structureColumnInputHandler.handle(simpleChanges);
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
            this.sortingCommandDispatcher.setSortingConfig(sorting, this.structureId);
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
            this.searchCommandDispatcher.setSearchingConfig(searching, this.structureId);
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
        this.pagingEventRepository
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
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
        this.searchEventRepository
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
        titlePanel: [{ type: Input }],
        footerPanel: [{ type: Input }],
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
    /** @type {?} */
    StructureGateway.prototype.titlePanel;
    /** @type {?} */
    StructureGateway.prototype.footerPanel;
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
    StructureGateway.prototype.structureColumnInputHandler;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.domainEventBus;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.commandDispatcher;
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
    StructureGateway.prototype.structurePagingCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventRepository;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sortingCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.fieldCommandDispatcher;
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
    StructureGateway.prototype.compositionCommandDispatcher;
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
    StructureGateway.prototype.structureInfoPanelConfigService;
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
    StructureGateway.prototype.columnFieldFactory;
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
    StructureGateway.prototype.searchEventRepository;
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
    StructureGateway.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9nYXRld2F5L3N0cnVjdHVyZS5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQXVCM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFVdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBaUJ6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFLdEY7SUFBK0MsNENBQWM7SUEySTVELDBCQUNvQixjQUE4QixFQUM5QixpQkFBb0MsRUFDaEQsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQW1ELEVBQ25ELGdDQUF5RCxFQUN6RCxxQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsb0JBQTZDLEVBQzdDLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQsNEJBQTBELEVBQzFELHVCQUFtRCxFQUNuRCxxQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBMkQsRUFDM0QsK0JBQWdFLEVBQ2hFLCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLGdDQUFrRSxFQUNsRSxpQ0FBMkQsRUFDM0QsZ0NBQWtFLEVBQ2xFLHFCQUE0QyxFQUM1QyxnQ0FBa0UsRUFDbEUsbUNBQXdFLEVBQ3hFLGdDQUFpRSxFQUNqRSxnQ0FBa0UsRUFDbEUsaUNBQW9FLEVBQ3BFLHFCQUE0QztRQWxDdkQsWUFvQ0MsaUJBQU8sU0FJUDtRQXZDbUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaEQsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDckIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsY0FBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0IsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXlCO1FBQ3pELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtRQUM3Qyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRCw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQTRCO1FBQ25ELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBMkI7UUFDM0QscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQUNoRSxxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBQ2hFLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLHVDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBMEI7UUFDM0Qsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUseUNBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUN4RSxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWlDO1FBQ2pFLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUNwRSwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBcEp2RCxZQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLGFBQU8sR0FBd0IsRUFBRSxDQUFDOzs7Ozs7UUFvRWxDLGlCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0QscUJBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxtQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELG9CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsMkJBQXFCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsa0JBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdsRSxxQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pELHNCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFELHVCQUFpQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNELHlCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9ELGtCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0QsMkJBQXFCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEUseUJBQW1CLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHaEUsd0JBQWtCLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUEwQ3hFLEtBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLDJCQUEyQixDQUFDLFdBQVcsRUFDN0UsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDOztJQUN0RyxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUN4RixJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxhQUFhLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDbEcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUNwRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksYUFBYSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2xHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxhQUFhLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUVoRyxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUc7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDdkIsQ0FBQzthQUNGO1lBRUQsSUFBSSxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUNoRyxJQUFJLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDcEcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUN4RixJQUFJLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RDtRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2hHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxhQUFhLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsZUFBZSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDNUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLGFBQWEsQ0FBQyxlQUFlLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxlQUFlLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM1RyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksYUFBYSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUNsSCxJQUFJLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDNUYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTs7Z0JBRXRGLFlBQVksU0FBYztZQUU5QixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLFlBQVksR0FBRztvQkFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ3BCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDckU7YUFDRDtZQUVELElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM1RixJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxhQUFhLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLGFBQWEsQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUMxRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDcEcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxhQUFhLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDeEcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUNyRDtTQUNEO1FBRUQsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7O2dCQUV4RixPQUFPLFNBQWU7WUFFMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN0QyxPQUFPLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFOztnQkFFNUYsU0FBUyxTQUFjO1lBRTNCLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsU0FBUyxHQUFHO29CQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDdkIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksYUFBYSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFOztnQkFFbEcsWUFBWSxTQUFvQjtZQUVwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLFlBQVksR0FBRztvQkFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQzFCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNqQztZQUVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFOztnQkFFNUYsU0FBUyxTQUFjO1lBRTNCLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsU0FBUyxHQUFHO29CQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDdkIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0U7UUFFRDs7V0FFRztRQUNILElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDtJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkErRUM7UUE3RUEsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQWtCO1lBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsUUFBZ0I7WUFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBaUI7WUFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsdUJBQXVCO2FBQzFCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDcEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNqQixTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsdUJBQXVCO2FBQzFCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0MsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxjQUFzQjtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXdCO1lBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHNCQUFzQjthQUN6QixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQTZCO1lBRXhDLFFBQVEsS0FBSyxFQUFFO2dCQUVkLEtBQUssc0JBQXNCLENBQUMsS0FBSztvQkFDaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDNUIsTUFBTTtnQkFFUCxLQUFLLHNCQUFzQixDQUFDLE1BQU07b0JBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFFUCxLQUFLLHNCQUFzQixDQUFDLE1BQU07b0JBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0IsTUFBTTthQUNQO1FBRUYsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsTUFBYztZQUN6QixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLDhDQUFtQjs7OztJQUEzQjtRQUFBLGlCQTZCQztRQTNCQSxJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUMzQixLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsT0FBZ0I7WUFDM0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxRQUEyQjtZQUN0QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7a0NBN2RBLEtBQUs7cUNBR0wsS0FBSzs0QkFHTCxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSztrQ0FHTCxLQUFLO3lCQUdMLEtBQUs7MEJBR0wsS0FBSzt5QkFHTCxLQUFLOytCQUdMLEtBQUs7aUNBR0wsS0FBSzt3QkFHTCxLQUFLOzhCQUdMLEtBQUs7K0JBR0wsS0FBSzswQkFHTCxLQUFLO2dDQUdMLEtBQUs7MEJBR0wsS0FBSzs0QkFHTCxLQUFLOytCQUdMLEtBQUs7NEJBR0wsS0FBSzsyQkFHTCxLQUFLOzhCQUdMLEtBQUs7NEJBR0wsS0FBSzs0QkFHTCxLQUFLOzZCQUdMLEtBQUs7NEJBR0wsS0FBSzs2QkFHTCxLQUFLOzhCQUdMLEtBQUs7OEJBUUwsTUFBTTtrQ0FHTixNQUFNO2dDQUdOLE1BQU07aUNBR04sTUFBTTt3Q0FHTixNQUFNOytCQUdOLE1BQU07a0NBR04sTUFBTTttQ0FHTixNQUFNO29DQUdOLE1BQU07c0NBR04sTUFBTTsrQkFHTixNQUFNO3dDQUdOLE1BQU07c0NBR04sTUFBTTtxQ0FHTixNQUFNOztJQStWUix1QkFBQztDQUFBLEFBcmVELENBQStDLGNBQWMsR0FxZTVEO1NBcmVxQixnQkFBZ0I7Ozs7Ozs7O0lBTXJDLDJDQUN5Qjs7SUFFekIsOENBQzRCOztJQUU1QixxQ0FDa0I7O0lBRWxCLGlDQUNjOztJQUVkLHFDQUNrQjs7SUFFbEIsMkNBQ3lCOztJQUV6QixrQ0FDd0I7O0lBRXhCLG1DQUNrQzs7SUFFbEMsa0NBQytCOztJQUUvQix3Q0FDc0I7O0lBRXRCLDBDQUN3Qjs7SUFFeEIsaUNBQ21COztJQUVuQix1Q0FDeUI7O0lBRXpCLHdDQUNzQjs7SUFFdEIsbUNBQ2lCOztJQUVqQix5Q0FDdUI7O0lBRXZCLG1DQUNpQzs7SUFFakMscUNBQ2tDOztJQUVsQyx3Q0FDMkM7O0lBRTNDLHFDQUNrQzs7SUFFbEMsb0NBQ2tCOztJQUVsQix1Q0FDcUI7O0lBRXJCLHFDQUNxQzs7SUFFckMscUNBQzJCOztJQUUzQixzQ0FDNkI7O0lBRTdCLHFDQUMyQjs7SUFFM0Isc0NBQzZCOztJQUU3Qix1Q0FDK0I7Ozs7Ozs7SUFPL0IsdUNBQytEOztJQUUvRCwyQ0FDbUU7O0lBRW5FLHlDQUNzRDs7SUFFdEQsMENBQ3dEOztJQUV4RCxpREFDaUU7O0lBRWpFLHdDQUNrRTs7SUFFbEUsMkNBQ3lEOztJQUV6RCw0Q0FDMEQ7O0lBRTFELDZDQUMyRDs7SUFFM0QsK0NBQytEOztJQUUvRCx3Q0FDNkQ7O0lBRTdELGlEQUNrRTs7SUFFbEUsK0NBQ2dFOztJQUVoRSw4Q0FDeUU7O0lBRXpFLHVEQUF5RDs7Ozs7SUFHeEQsMENBQWlEOzs7OztJQUNqRCw2Q0FBdUQ7O0lBQ3ZELHVDQUErQjs7Ozs7SUFDL0IseUNBQXNDOzs7OztJQUN0QyxvQ0FBeUM7Ozs7O0lBQ3pDLG1EQUE2RDs7Ozs7SUFDN0QsNERBQW1FOzs7OztJQUNuRSxpREFBc0Q7Ozs7O0lBQ3RELG9EQUE0RDs7Ozs7SUFDNUQsbURBQTBEOzs7OztJQUMxRCxrREFBd0Q7Ozs7O0lBQ3hELGdEQUF1RDs7Ozs7SUFDdkQsOENBQWdEOzs7OztJQUNoRCxtREFBMEQ7Ozs7O0lBQzFELHdEQUFvRTs7Ozs7SUFDcEUsbURBQTZEOzs7OztJQUM3RCxpREFBc0Q7Ozs7O0lBQ3RELG9EQUE0RDs7Ozs7SUFDNUQsb0RBQTREOzs7OztJQUM1RCw0REFBcUU7Ozs7O0lBQ3JFLDJEQUEwRTs7Ozs7SUFDMUUsMkRBQTBFOzs7OztJQUMxRSxrREFBd0Q7Ozs7O0lBQ3hELDhDQUFnRDs7Ozs7SUFDaEQsNERBQTRFOzs7OztJQUM1RSw2REFBcUU7Ozs7O0lBQ3JFLDREQUE0RTs7Ozs7SUFDNUUsaURBQXNEOzs7OztJQUN0RCw0REFBNEU7Ozs7O0lBQzVFLCtEQUFrRjs7Ozs7SUFDbEYsNERBQTJFOzs7OztJQUMzRSw0REFBNEU7Ozs7O0lBQzVFLDZEQUE4RTs7Ozs7SUFDOUUsaURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4tYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdW1tYXJpZXMvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zb3VyY2UvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vY29udGVudC9yb3cvc3RydWN0dXJlLnJvdy1zZWxlY3QtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi4vcm93LWRldGFpbC9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcm93LWRldGFpbC9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBUaXRsZVBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vcGFuZWwvdGl0bGUtcGFuZWwvdGl0bGUtcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEZvb3RlclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vcGFuZWwvZm9vdGVyLXBhbmVsL2Zvb3Rlci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4tYXBpL3NvcnRpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9zdHJ1Y3R1cmUtY29sdW1uLmlucHV0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlR2F0ZXdheSBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IFBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBTb3J0aW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEZpbHRlckNvbmZpZztcblxuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgU2VhcmNoQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbiB8IEluZm9QYW5lbENvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IFN1bW1hcmllc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0RldGFpbDogUm93RGV0YWlsQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlUGFuZWw6IFRpdGxlUGFuZWxDb25maWc7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IEZvb3RlclBhbmVsQ29uZmlnO1xuXG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8RWRpdGVtSXRlbVZhbHVlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgZmllbGRDb21tYW5kRGlzcGF0Y2hlcjogRmllbGRDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgPSBuZXcgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyKHN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCwgY29tbWFuZERpc3BhdGNoZXIsIGRvbWFpbkV2ZW50QnVzLCBjb2x1bW5GaWVsZEZhY3RvcnksIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0RldGFpbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93RGV0YWlsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLm5leHQodGhpcy5yb3dEZXRhaWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRpdGxlUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRpdGxlUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnRpdGxlUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZvb3RlclBhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5mb290ZXJQYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLmZvb3RlclBhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dTZWxlY3RpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd1NlbGVjdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMucm93U2VsZWN0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaW5mb1BhbmVsID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWwgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5pbmZvUGFuZWxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLnNldCh0aGlzLmluZm9QYW5lbCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zdW1tYXJpZXMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZS5zZXQodGhpcy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0V2lkdGgodGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlclRvcC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyQm90dG9tKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5sb2FkaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldExvYWRpbmcodGhpcy5sb2FkaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlci5oYW5kbGUoc2ltcGxlQ2hhbmdlcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmVydGljYWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0VmVydGljYWxHcmlkKHRoaXMudmVydGljYWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaG9yaXpvbnRhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0SG9yaXpvbnRhbEdyaWQodGhpcy5ob3Jpem9udGFsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHRoaXMucm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLm1heEhlaWdodCAmJiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnZpcnR1YWxTY3JvbGwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnZpcnR1YWxTY3JvbGwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5lbmFibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5kaXNhYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zb3J0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBzb3J0aW5nOiBTb3J0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc29ydGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zb3J0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3J0aW5nID0gdGhpcy5zb3J0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc2VhcmNoaW5nOiBTZWFyY2hDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZWFyY2hpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zZWFyY2hpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHRoaXMuc2VhcmNoaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3VyY2UpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25QYWdlQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZU51bWJlcjogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlTnVtYmVyKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblBhZ2VTaXplQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaEV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2VhcmNoUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQocGhyYXNlKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb25uZWN0U2NoZW1hRXZlbnRzKCk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb25uZWN0U2NoZW1hRXZlbnRzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblRoZW1lQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnRoZW1lQ2hhbmdlZC5lbWl0KHRoZW1lKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkhvcml6b250YWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWQuZW1pdChlbmFibGVkKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblZlcnRpY2FsR3JpZENoYW5nZWQodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudmVydGljYWxHcmlkQ2hhbmdlZC5lbWl0KGVuYWJsZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NoYW5nZWQuZW1pdChjb2xvcmluZyk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=