/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
/**
 * \@internal
 * @abstract
 */
export class StructureGateway extends SmartComponent {
    /**
     * @protected
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} domainEventBus
     * @param {?} commandDispatcher
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} schemaId
     * @param {?} structureCommandService
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     * @param {?} sortingCommandDispatcher
     * @param {?} searchCommandDispatcher
     * @param {?} fieldCommandDispatcher
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandInvoker
     * @param {?} compositionCommandDispatcher
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureInfoPanelConfigService
     * @param {?} structureSummariesConfigService
     * @param {?} structureCellEditStore
     * @param {?} columnFieldFactory
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     * @param {?} rowSelectEnabledArchive
     * @param {?} rowSelectionTypeArchive
     * @param {?} schemaRowClassArchive
     * @param {?} schemaRowStyleArchive
     * @param {?} formationCommandDispatcher
     * @param {?} searchEventRepository
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureDetailViewConfigArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} schemaEventRepository
     * @param {?} translationService
     */
    constructor(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandService = structureCommandService;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
        this.compositionEventService = compositionEventService;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureSummariesConfigService = structureSummariesConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.columnFieldFactory = columnFieldFactory;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.rowSelectEnabledArchive = rowSelectEnabledArchive;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.translationService = translationService;
        this.source = [];
        this.columns = [];
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
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.changeAfterInit = false;
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.schemaCommandInvoker.setTheme(this.theme);
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
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid);
        }
        if (changes.horizontalGrid !== undefined && changes.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid);
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
            let sorting;
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
        if (changes.quickFilters !== undefined && changes.quickFilters.currentValue !== undefined) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionEventService
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
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
            .on()
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
                default:
                    break;
            }
        }));
        this.connectSchemaEvents();
        this.componentInitialized();
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
        // this.schemaEventRepository
        // 	.onRowColoring(this.schemaId)
        // 	.pipe(this.takeUntil())
        // 	.subscribe((coloring: SchemaRowColoring) => {
        // 		this.rowColoringChanged.emit(coloring);
        // 	});
    }
    /**
     * @private
     * @return {?}
     */
    isInitialized() {
        return this.changeAfterInit;
    }
    /**
     * @private
     * @return {?}
     */
    isNotInitialized() {
        return this.changeAfterInit;
    }
    /**
     * @private
     * @return {?}
     */
    componentInitialized() {
        this.changeAfterInit = true;
    }
}
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
    StructureGateway.prototype.schemaCommandInvoker;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQW9CN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQjNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQVd0RixNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJINUQsWUFDb0IsaUJBQW9DLEVBQ3ZELFVBQXNCLEVBQ0gsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ2hELFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLFFBQStCLEVBQy9CLHVCQUFnRCxFQUNoRCxnQ0FBc0QsRUFDdEQscUJBQTRDLEVBQzVDLHdCQUErQyxFQUMvQyx1QkFBNkMsRUFDN0Msc0JBQTJDLEVBQzNDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLDRCQUF1RCxFQUN2RCx1QkFBbUQsRUFDbkQscUJBQStDLEVBQy9DLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQTJELEVBQzNELCtCQUFnRSxFQUNoRSwrQkFBZ0UsRUFDaEUsc0JBQThDLEVBQzlDLGtCQUFzQyxFQUN0QyxnQ0FBa0UsRUFDbEUsaUNBQTJELEVBQzNELHVCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQscUJBQTRD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clJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2V0LWVuYWJsZWQvcm93LXNlbGVjdC1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9zdHJ1Y3R1cmUtY29sdW1uLmlucHV0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUdhdGV3YXkgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHQvKiogKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyByb3dDb2xvcmluZzogUm93Q29sb3Jpbmc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBpbmZvUGFuZWw6IGJvb2xlYW4gfCBJbmZvUGFuZWxDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gc3VtbWFyaWVzOiBTdW1tYXJpZXNDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gY29sdW1uTWVudTogQ29sdW1uTWVudUNvbmZpZztcblx0Ly9cblx0Ly8gQElucHV0KClcblx0Ly8gcm93RGV0YWlsOiBSb3dEZXRhaWxDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gdGl0bGVQYW5lbDogVGl0bGVQYW5lbENvbmZpZztcblx0Ly9cblx0Ly8gQElucHV0KClcblx0Ly8gZm9vdGVyUGFuZWw6IEZvb3RlclBhbmVsQ29uZmlnO1xuXHQvL1xuXHQvLyBASW5wdXQoKVxuXHQvLyBsb2NhbGl6YXRpb246IEd1aUxvY2FsaXphdGlvbjtcblxuXG5cdC8qKiAqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gQE91dHB1dCgpXG5cdC8vIHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcml2YXRlIGNoYW5nZUFmdGVySW5pdCA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgZmllbGRDb21tYW5kRGlzcGF0Y2hlcjogRmllbGRDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2Vcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgPSBuZXcgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyKHN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCwgY29tbWFuZERpc3BhdGNoZXIsIGRvbWFpbkV2ZW50QnVzLCBjb2x1bW5GaWVsZEZhY3RvcnksIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5yb3dEZXRhaWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0RldGFpbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMucm93RGV0YWlsKTtcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy50aXRsZVBhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50aXRsZVBhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy50aXRsZVBhbmVsKTtcblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5mb290ZXJQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZm9vdGVyUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy5mb290ZXJQYW5lbCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMuY29sdW1uTWVudSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY29sdW1uTWVudS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZS5uZXh0Q29uZmlnKHRoaXMuY29sdW1uTWVudSk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvL1xuXHRcdC8vIFx0aWYgKHR5cGVvZiB0aGlzLmluZm9QYW5lbCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0Ly8gXHRcdHRoaXMuaW5mb1BhbmVsID0ge1xuXHRcdC8vIFx0XHRcdGVuYWJsZWQ6IHRoaXMuaW5mb1BhbmVsXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHR9XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZS5zZXQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc3VtbWFyaWVzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuc3VtbWFyaWVzKTtcblx0XHQvLyB9XG5cblx0XHRpZiAoY2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZWRpdE1vZGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5uZXh0KHRoaXMuY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLndpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFdpZHRoKHRoaXMud2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93SGVpZ2h0LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMubG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRMb2FkaW5nKHRoaXMubG9hZGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIuaGFuZGxlKGNoYW5nZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudmVydGljYWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZCh0aGlzLnZlcnRpY2FsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmhvcml6b250YWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKHRoaXMuaG9yaXpvbnRhbEdyaWQpO1xuXHRcdH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDbGFzcyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q2xhc3MuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm5leHQodGhpcy5yb3dDbGFzcyBhcyBTY2hlbWFSb3dDbGFzcyk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMucm93U3R5bGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd1N0eWxlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnNjaGVtYVJvd1N0eWxlQXJjaGl2ZS5uZXh0KHRoaXMucm93U3R5bGUgYXMgU2NoZW1hUm93U3R5bGUpO1xuXHRcdC8vIH1cblxuXHRcdGlmIChjaGFuZ2VzLm1heEhlaWdodCAmJiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpcnR1YWxTY3JvbGwgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpcnR1YWxTY3JvbGwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5lbmFibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5kaXNhYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3J0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBzb3J0aW5nOiBTb3J0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc29ydGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zb3J0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3J0aW5nID0gdGhpcy5zb3J0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5sb2NhbGl6YXRpb24gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmxvY2FsaXphdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vXG5cdFx0Ly8gXHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcikge1xuXHRcdC8vIFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXRSZXNvbHZlcih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKTtcblx0XHQvLyBcdH1cblx0XHQvL1xuXHRcdC8vIFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKSB7XG5cdFx0Ly8gXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmNoYW5nZVRyYW5zbGF0aW9uKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKGNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db2x1bW5zQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb25uZWN0U2NoZW1hRXZlbnRzKCk7XG5cblx0XHR0aGlzLmNvbXBvbmVudEluaXRpYWxpemVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbm5lY3RTY2hlbWFFdmVudHMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhlbWUpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZC5lbWl0KGVuYWJsZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVmVydGljYWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkLmVtaXQoZW5hYmxlZCk7XG5cdFx0XHR9KTtcblxuXHRcdC8vIHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0Ly8gXHQub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYUlkKVxuXHRcdC8vIFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHQvLyBcdC5zdWJzY3JpYmUoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdC8vIFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KGNvbG9yaW5nKTtcblx0XHQvLyBcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZUFmdGVySW5pdDtcblx0fVxuXG5cdHByaXZhdGUgaXNOb3RJbml0aWFsaXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jaGFuZ2VBZnRlckluaXQ7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=