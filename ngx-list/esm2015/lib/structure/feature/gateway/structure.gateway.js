/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { ColumnMenuConfig } from '../../domain-api/column-menu-config';
import { RowColoring } from '../../../../schema/domain-api/row-coloring';
/**
 * \@internal
 * @abstract
 */
export class StructureGateway extends SmartComponent {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} schemaId
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventService
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandDispatcher
     * @param {?} compositionCommandService
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureInfoPanelConfigService
     * @param {?} structureSummariesConfigService
     * @param {?} structureCellEditStore
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} structureSearchEventService
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureDetailViewConfigArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} schemaEventRepository
     */
    constructor(structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventService, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandService = structureCommandService;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventService = pagingEventService;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandDispatcher = schemaCommandDispatcher;
        this.compositionCommandService = compositionCommandService;
        this.compositionEventService = compositionEventService;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureSummariesConfigService = structureSummariesConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.structureSearchEventService = structureSearchEventService;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.source = [];
        this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
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
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
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
            let pagingConfig;
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
            let sorting;
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
            let filtering;
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
            let quickFilters;
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
            let searching;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagingEventService
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        (pageSize) => {
            this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .onColumnsChanged(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        (containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            switch (state) {
                case StructureCellEditState.ENTER:
                    this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    this.cellEditCanceled.emit();
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
        (phrase) => {
            this.searchPhraseChanged.emit(phrase);
        }));
        this.connectSchemaEvents();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @private
     * @return {?}
     */
    connectSchemaEvents() {
        this.schemaEventRepository
            .onThemeChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.themeChanged.emit(theme);
        }));
        this.schemaEventRepository
            .onHorizontalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.horizontalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onVerticalGridChanged(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.verticalGridChanged.emit(enabled);
        }));
        this.schemaEventRepository
            .onRowColoring(this.schemaId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} coloring
         * @return {?}
         */
        (coloring) => {
            this.rowColoringChanged.emit(coloring);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9nYXRld2F5L3N0cnVjdHVyZS5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBdUIzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVV2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7O0FBWXpFLE1BQU0sT0FBZ0IsZ0JBQWlCLFNBQVEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5STVELFlBQ1EsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQW1ELEVBQ25ELGdDQUF5RCxFQUN6RCxrQkFBeUMsRUFDekMsb0JBQTZDLEVBQzdDLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQseUJBQXVELEVBQ3ZELHVCQUFtRCxFQUNuRCxxQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBMkQsRUFDM0QsK0JBQWdFLEVBQ2hFLCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsZ0NBQWtFLEVBQ2xFLGlDQUEyRCxFQUMzRCxnQ0FBa0UsRUFDbEUsMkJBQXdELEVBQ3hELGdDQUFrRSxFQUNsRSxtQ0FBd0UsRUFDeEUsZ0NBQWlFLEVBQ2pFLGdDQUFrRSxFQUNsRSxpQ0FBb0UsRUFDcEUscUJBQTRDO1FBRXRE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Ozs7SUFDdEMsb0NBQXlDOzs7OztJQUN6QyxtREFBNkQ7Ozs7O0lBQzdELDREQUFtRTs7Ozs7SUFDbkUsOENBQW1EOzs7OztJQUNuRCxnREFBdUQ7Ozs7O0lBQ3ZELDhDQUFnRDs7Ozs7SUFDaEQsbURBQTBEOzs7OztJQUMxRCxxREFBaUU7Ozs7O0lBQ2pFLG1EQUE2RDs7Ozs7SUFDN0QsaURBQXNEOzs7OztJQUN0RCxvREFBNEQ7Ozs7O0lBQzVELG9EQUE0RDs7Ozs7SUFDNUQsNERBQXFFOzs7OztJQUNyRSwyREFBMEU7Ozs7O0lBQzFFLDJEQUEwRTs7Ozs7SUFDMUUsa0RBQXdEOzs7OztJQUN4RCw0REFBNEU7Ozs7O0lBQzVFLDZEQUFxRTs7Ozs7SUFDckUsNERBQTRFOzs7OztJQUM1RSx1REFBa0U7Ozs7O0lBQ2xFLDREQUE0RTs7Ozs7SUFDNUUsK0RBQWtGOzs7OztJQUNsRiw0REFBMkU7Ozs7O0lBQzNFLDREQUE0RTs7Ozs7SUFDNUUsNkRBQThFOzs7OztJQUM5RSxpREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zb3VyY2UvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2NvbnRlbnQvcm93L3N0cnVjdHVyZS5yb3ctc2VsZWN0LWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0RldGFpbENvbmZpZyB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgVGl0bGVQYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL3RpdGxlLXBhbmVsL3RpdGxlLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBGb290ZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL2Zvb3Rlci1wYW5lbC9mb290ZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IEluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL2luZm8vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuIHwgSW5mb1BhbmVsQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblx0QElucHV0KClcblx0cm93RGV0YWlsOiBSb3dEZXRhaWxDb25maWc7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogVGl0bGVQYW5lbENvbmZpZztcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogRm9vdGVyUGFuZWxDb25maWc7XG5cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHRoZW1lQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVRoZW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRTZXJ2aWNlOiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmREaXNwYXRjaGVyOiBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFNlcnZpY2U6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2U6IFN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0RldGFpbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93RGV0YWlsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLm5leHQodGhpcy5yb3dEZXRhaWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRpdGxlUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRpdGxlUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnRpdGxlUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZvb3RlclBhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5mb290ZXJQYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLmZvb3RlclBhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dTZWxlY3RpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd1NlbGVjdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMucm93U2VsZWN0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaW5mb1BhbmVsID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWwgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5pbmZvUGFuZWxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLnNldCh0aGlzLmluZm9QYW5lbCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zdW1tYXJpZXMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZS5zZXQodGhpcy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0V2lkdGgodGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlclRvcC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyQm90dG9tKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5sb2FkaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldExvYWRpbmcodGhpcy5sb2FkaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5zKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmluaXRGaWVsZHModGhpcy5jb2x1bW5zLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldENvbHVtbnModGhpcy5jb2x1bW5zKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnZlcnRpY2FsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0Um93Q29sb3JpbmcodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubWF4SGVpZ2h0ICYmIHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldENvbnRhaW5lckhlaWdodCh0aGlzLm1heEhlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNvcnRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNvcnRpbmc6IFNvcnRpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zb3J0aW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c29ydGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNvcnRpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB0aGlzLnNvcnRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5maWx0ZXJpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgZmlsdGVyaW5nOiBGaWx0ZXJDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5maWx0ZXJpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5maWx0ZXJpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHRoaXMuZmlsdGVyaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnF1aWNrRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnF1aWNrRmlsdGVycyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnF1aWNrRmlsdGVyc1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0gdGhpcy5xdWlja0ZpbHRlcnM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKHF1aWNrRmlsdGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc2VhcmNoaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc2VhcmNoaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c2VhcmNoaW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc2VhcmNoaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB0aGlzLnNlYXJjaGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTZWFyY2hpbmdDb25maWcoc2VhcmNoaW5nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnBhZ2luZ0V2ZW50U2VydmljZVxuXHRcdFx0Lm9uUGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkNvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlbUl0ZW1WYWx1ZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNlYXJjaFBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29ubmVjdFNjaGVtYUV2ZW50cygpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdHByaXZhdGUgY29ubmVjdFNjaGVtYUV2ZW50cygpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25UaGVtZUNoYW5nZWQodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGVtZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Ib3Jpem9udGFsR3JpZENoYW5nZWQodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQoZW5hYmxlZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdChlbmFibGVkKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQoY29sb3JpbmcpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19