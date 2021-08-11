/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SchemaTheme } from '../../../../schema/core/api/schema-theme';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
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
        _this.rowSelectEnabledArchive = rowSelectEnabledArchive;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.schemaRowClassArchive = schemaRowClassArchive;
        _this.schemaRowStyleArchive = schemaRowStyleArchive;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.searchEventRepository = searchEventRepository;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        _this.schemaEventRepository = schemaEventRepository;
        _this.translationService = translationService;
        _this.source = [];
        _this.columns = [];
        // @Input()
        // infoPanel: boolean | InfoPanelConfig;
        // @Input()
        // summaries: SummariesConfig;
        // @Input()
        // columnMenu: ColumnMenuConfig;
        //
        // @Input()
        // rowDetail: RowDetailConfig;
        // @Input()
        // titlePanel: TitlePanelConfig;
        //
        // @Input()
        // footerPanel: FooterPanelConfig;
        //
        // @Input()
        // localization: GuiLocalization;
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        _this.columnsChanged = new EventEmitter();
        _this.containerWidthChanged = new EventEmitter();
        _this.sourceEdited = new EventEmitter();
        _this.cellEditEntered = new EventEmitter();
        _this.cellEditCanceled = new EventEmitter();
        _this.cellEditSubmitted = new EventEmitter();
        _this.themeChanged = new EventEmitter();
        _this.horizontalGridChanged = new EventEmitter();
        _this.verticalGridChanged = new EventEmitter();
        _this.changeAfterInit = false;
        _this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher);
        _this.translationService.setDefaultTranslation();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme);
        }
        // if (simpleChanges.rowDetail !== undefined && simpleChanges.rowDetail.currentValue !== undefined) {
        // 	this.structureDetailViewConfigArchive.next(this.rowDetail);
        // }
        // if (simpleChanges.titlePanel !== undefined && simpleChanges.titlePanel.currentValue !== undefined) {
        // 	this.structureTitlePanelConfigArchive.next(this.titlePanel);
        // }
        //
        // if (simpleChanges.footerPanel !== undefined && simpleChanges.footerPanel.currentValue !== undefined) {
        // 	this.structureFooterPanelConfigArchive.next(this.footerPanel);
        // }
        // if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
        // 	this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        // }
        // if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
        //
        // 	if (typeof this.infoPanel === 'boolean') {
        // 		this.infoPanel = {
        // 			enabled: this.infoPanel
        // 		};
        // 	}
        //
        // 	this.structureInfoPanelConfigService.set(this.infoPanel);
        // }
        // if (simpleChanges.summaries !== undefined && simpleChanges.summaries.currentValue !== undefined) {
        // 	this.structureSummariesConfigService.set(this.summaries);
        // }
        if (changes.editMode !== undefined && changes.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (changes.cellEditing !== undefined && changes.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (changes.width !== undefined && changes.width.currentValue !== undefined) {
            this.compositionCommandDispatcher.setWidth(this.width);
        }
        if (changes.rowHeight !== undefined && changes.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
        }
        if (changes.autoResizeWidth !== undefined && changes.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth);
        }
        if (changes.loading !== undefined && changes.loading.currentValue !== undefined) {
            this.sourceCommandService.setLoading(this.loading);
        }
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.structureColumnInputHandler.handle(changes);
        }
        if (changes.verticalGrid !== undefined && changes.verticalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setVerticalGrid(this.verticalGrid);
        }
        if (changes.horizontalGrid !== undefined && changes.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setHorizontalGrid(this.horizontalGrid);
        }
        // if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
        // 	this.schemaCommandDispatcher.setRowColoring(this.rowColoring);
        // }
        // if (simpleChanges.rowClass !== undefined && simpleChanges.rowClass.currentValue !== undefined) {
        // 	this.schemaRowClassArchive.next(this.rowClass as SchemaRowClass);
        // }
        // if (simpleChanges.rowStyle !== undefined && simpleChanges.rowStyle.currentValue !== undefined) {
        // 	this.schemaRowStyleArchive.next(this.rowStyle as SchemaRowStyle);
        // }
        if (changes.maxHeight && this.maxHeight) {
            this.structureCommandService.setContainerHeight(this.maxHeight);
        }
        if (changes.virtualScroll !== undefined && changes.virtualScroll.currentValue !== undefined) {
            if (this.virtualScroll) {
                this.structureCommandService.enableVerticalScroll();
            }
            else {
                this.structureCommandService.disableVerticalScroll();
            }
        }
        if (changes.sorting !== undefined && changes.sorting.currentValue !== undefined) {
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
        if (changes.filtering !== undefined && changes.filtering.currentValue !== undefined) {
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
        if (changes.quickFilters !== undefined && changes.quickFilters.currentValue !== undefined) {
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
        // if (simpleChanges.localization !== undefined && simpleChanges.localization.currentValue !== undefined) {
        //
        // 	if (this.localization.translationResolver) {
        // 		this.translationService.setResolver(this.localization.translationResolver);
        // 	}
        //
        // 	if (this.localization.translation) {
        // 		this.translationService.changeTranslation(this.localization.translation);
        // 	}
        // }
        /**
         * Setting source should be last step
         */
        if (changes.source) {
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
        this.compositionEventService
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
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
        this.connectSchemaEvents();
        this.componentInitialized();
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
        // this.schemaEventRepository
        // 	.onRowColoring(this.schemaId)
        // 	.pipe(this.takeUntil())
        // 	.subscribe((coloring: SchemaRowColoring) => {
        // 		this.rowColoringChanged.emit(coloring);
        // 	});
    };
    /**
     * @private
     * @return {?}
     */
    StructureGateway.prototype.isInitialized = /**
     * @private
     * @return {?}
     */
    function () {
        return this.changeAfterInit;
    };
    /**
     * @private
     * @return {?}
     */
    StructureGateway.prototype.isNotInitialized = /**
     * @private
     * @return {?}
     */
    function () {
        return this.changeAfterInit;
    };
    /**
     * @private
     * @return {?}
     */
    StructureGateway.prototype.componentInitialized = /**
     * @private
     * @return {?}
     */
    function () {
        this.changeAfterInit = true;
    };
    StructureGateway.propDecorators = {
        maxHeight: [{ type: Input }],
        width: [{ type: Input }],
        rowHeight: [{ type: Input }],
        autoResizeWidth: [{ type: Input }],
        source: [{ type: Input }],
        columns: [{ type: Input }],
        verticalGrid: [{ type: Input }],
        horizontalGrid: [{ type: Input }],
        theme: [{ type: Input }],
        loading: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        sorting: [{ type: Input }],
        filtering: [{ type: Input }],
        quickFilters: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        columnsChanged: [{ type: Output }],
        containerWidthChanged: [{ type: Output }],
        sourceEdited: [{ type: Output }],
        cellEditEntered: [{ type: Output }],
        cellEditCanceled: [{ type: Output }],
        cellEditSubmitted: [{ type: Output }],
        themeChanged: [{ type: Output }],
        horizontalGridChanged: [{ type: Output }],
        verticalGridChanged: [{ type: Output }]
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
    StructureGateway.prototype.verticalGrid;
    /** @type {?} */
    StructureGateway.prototype.horizontalGrid;
    /** @type {?} */
    StructureGateway.prototype.theme;
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
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
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
    StructureGateway.prototype.themeChanged;
    /** @type {?} */
    StructureGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.verticalGridChanged;
    /** @type {?} */
    StructureGateway.prototype.structureColumnInputHandler;
    /**
     * @type {?}
     * @private
     */
    StructureGateway.prototype.changeAfterInit;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.changeDetectorRef;
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
    StructureGateway.prototype.rowSelectEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.rowSelectionTypeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaRowClassArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaRowStyleArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.formationCommandDispatcher;
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFvQnZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBa0IzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFXdEY7SUFBK0MsNENBQWM7SUEySDVELDBCQUNvQixpQkFBb0MsRUFDdkQsVUFBc0IsRUFDSCxjQUE4QixFQUM5QixpQkFBb0MsRUFDaEQsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQW1ELEVBQ25ELGdDQUFzRCxFQUN0RCxxQkFBNEMsRUFDNUMsd0JBQStDLEVBQy9DLHVCQUE2QyxFQUM3QyxzQkFBMkMsRUFDM0Msb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0Qyx1QkFBNkMsRUFDN0MsNEJBQXVELEVBQ3ZELHVCQUFtRCxFQUNuRCxxQkFBK0MsRUFDL0Msd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBMkQsRUFDM0QsK0JBQWdFLEVBQ2hFLCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLGdDQUFrRSxFQUNsRSxpQ0FBMkQsRUFDM0QsdUJBQW1ELEVBQ25ELHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMscUJBQTRDLEVBQzVDLDBCQUFtRCxFQUNuRCxxQkFBNEMsRUFDNUMsZ0NBQWtFLEVBQ2xF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Y3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2V0LWVuYWJsZWQvcm93LXNlbGVjdC1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcm93LWRldGFpbC9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlR2F0ZXdheSBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHJvd1N0eWxlOiBHdWlSb3dTdHlsZTtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyByb3dDbGFzczogR3VpUm93Q2xhc3M7XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBTb3J0aW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEZpbHRlckNvbmZpZztcblxuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0Ly8gQElucHV0KClcblx0Ly8gaW5mb1BhbmVsOiBib29sZWFuIHwgSW5mb1BhbmVsQ29uZmlnO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cdC8vXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHJvd0RldGFpbDogUm93RGV0YWlsQ29uZmlnO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHRpdGxlUGFuZWw6IFRpdGxlUGFuZWxDb25maWc7XG5cdC8vXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGZvb3RlclBhbmVsOiBGb290ZXJQYW5lbENvbmZpZztcblx0Ly9cblx0Ly8gQElucHV0KClcblx0Ly8gbG9jYWxpemF0aW9uOiBHdWlMb2NhbGl6YXRpb247XG5cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gQE91dHB1dCgpXG5cdC8vIHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcml2YXRlIGNoYW5nZUFmdGVySW5pdCA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgZmllbGRDb21tYW5kRGlzcGF0Y2hlcjogRmllbGRDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2Vcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgPSBuZXcgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyKHN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCwgY29tbWFuZERpc3BhdGNoZXIsIGRvbWFpbkV2ZW50QnVzLCBjb2x1bW5GaWVsZEZhY3RvcnksIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5yb3dEZXRhaWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0RldGFpbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMucm93RGV0YWlsKTtcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy50aXRsZVBhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50aXRsZVBhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy50aXRsZVBhbmVsKTtcblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5mb290ZXJQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZm9vdGVyUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy5mb290ZXJQYW5lbCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uTWVudSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY29sdW1uTWVudS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZS5uZXh0Q29uZmlnKHRoaXMuY29sdW1uTWVudSk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvL1xuXHRcdC8vIFx0aWYgKHR5cGVvZiB0aGlzLmluZm9QYW5lbCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0Ly8gXHRcdHRoaXMuaW5mb1BhbmVsID0ge1xuXHRcdC8vIFx0XHRcdGVuYWJsZWQ6IHRoaXMuaW5mb1BhbmVsXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHR9XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZS5zZXQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc3VtbWFyaWVzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuc3VtbWFyaWVzKTtcblx0XHQvLyB9XG5cblx0XHRpZiAoY2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZWRpdE1vZGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5uZXh0KHRoaXMuY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLndpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFdpZHRoKHRoaXMud2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93SGVpZ2h0LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMubG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRMb2FkaW5nKHRoaXMubG9hZGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIuaGFuZGxlKGNoYW5nZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudmVydGljYWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh0aGlzLnZlcnRpY2FsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmhvcml6b250YWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKHRoaXMuaG9yaXpvbnRhbEdyaWQpO1xuXHRcdH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDbGFzcyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q2xhc3MuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm5leHQodGhpcy5yb3dDbGFzcyBhcyBTY2hlbWFSb3dDbGFzcyk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMucm93U3R5bGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd1N0eWxlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnNjaGVtYVJvd1N0eWxlQXJjaGl2ZS5uZXh0KHRoaXMucm93U3R5bGUgYXMgU2NoZW1hUm93U3R5bGUpO1xuXHRcdC8vIH1cblxuXHRcdGlmIChjaGFuZ2VzLm1heEhlaWdodCAmJiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpcnR1YWxTY3JvbGwgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpcnR1YWxTY3JvbGwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5lbmFibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5kaXNhYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3J0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBzb3J0aW5nOiBTb3J0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc29ydGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zb3J0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3J0aW5nID0gdGhpcy5zb3J0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5sb2NhbGl6YXRpb24gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmxvY2FsaXphdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vXG5cdFx0Ly8gXHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcikge1xuXHRcdC8vIFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXRSZXNvbHZlcih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKTtcblx0XHQvLyBcdH1cblx0XHQvL1xuXHRcdC8vIFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKSB7XG5cdFx0Ly8gXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmNoYW5nZVRyYW5zbGF0aW9uKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKGNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db2x1bW5zQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbm5lY3RTY2hlbWFFdmVudHMoKTtcblxuXHRcdHRoaXMuY29tcG9uZW50SW5pdGlhbGl6ZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY29ubmVjdFNjaGVtYUV2ZW50cygpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25UaGVtZUNoYW5nZWQodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGVtZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Ib3Jpem9udGFsR3JpZENoYW5nZWQodGhpcy5zY2hlbWFJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQoZW5hYmxlZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdChlbmFibGVkKTtcblx0XHRcdH0pO1xuXG5cdFx0Ly8gdGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnlcblx0XHQvLyBcdC5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hSWQpXG5cdFx0Ly8gXHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdC8vIFx0LnN1YnNjcmliZSgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0Ly8gXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQoY29sb3JpbmcpO1xuXHRcdC8vIFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbmdlQWZ0ZXJJbml0O1xuXHR9XG5cblx0cHJpdmF0ZSBpc05vdEluaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZUFmdGVySW5pdDtcblx0fVxuXG5cdHByaXZhdGUgY29tcG9uZW50SW5pdGlhbGl6ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VBZnRlckluaXQgPSB0cnVlO1xuXHR9XG5cbn1cbiJdfQ==