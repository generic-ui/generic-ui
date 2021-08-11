/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SchemaTheme } from '../../../../schema/core/api/schema-theme';
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
     * @param {?} schemaCommandDispatcher
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
    constructor(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandService, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandDispatcher, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService) {
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
        this.schemaCommandDispatcher = schemaCommandDispatcher;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQW9CdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQjNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQVd0RixNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJINUQsWUFDb0IsaUJBQW9DLEVBQ3ZELFVBQXNCLEVBQ0gsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ2hELFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLFFBQStCLEVBQy9CLHVCQUFtRCxFQUNuRCxnQ0FBc0QsRUFDdEQscUJBQTRDLEVBQzVDLHdCQUErQyxFQUMvQyx1QkFBNkMsRUFDN0Msc0JBQTJDLEVBQzNDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsdUJBQTZDLEVBQzdDLDRCQUF1RCxFQUN2RCx1QkFBbUQsRUFDbkQscUJBQStDLEVBQy9DLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQTJELEVBQzNELCtCQUFnRSxFQUNoRSwrQkFBZ0UsRUFDaEUsc0JBQThDLEVBQzlDLGtCQUFzQyxFQUN0QyxnQ0FBa0UsRUFDbEUsaUNBQTJELEVBQzNELHVCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQscUJBQTRD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Ozs7Ozs7O0lBNEJyQiwwQ0FDd0Q7O0lBRXhELGlEQUNpRTs7SUFFakUsd0NBQ2tFOztJQUVsRSwyQ0FDeUQ7O0lBRXpELDRDQUMwRDs7SUFFMUQsNkNBQzJEOztJQUUzRCx3Q0FDNkQ7O0lBRTdELGlEQUNrRTs7SUFFbEUsK0NBQ2dFOztJQUtoRSx1REFBeUQ7Ozs7O0lBRXpELDJDQUFnQzs7Ozs7SUFHL0IsNkNBQXVEOzs7OztJQUV2RCwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUF1RDs7SUFDdkQsdUNBQStCOzs7OztJQUMvQix5Q0FBc0M7Ozs7O0lBQ3RDLG9DQUF5Qzs7Ozs7SUFDekMsbURBQTZEOzs7OztJQUM3RCw0REFBZ0U7Ozs7O0lBQ2hFLGlEQUFzRDs7Ozs7SUFDdEQsb0RBQXlEOzs7OztJQUN6RCxtREFBdUQ7Ozs7O0lBQ3ZELGtEQUFxRDs7Ozs7SUFDckQsZ0RBQW9EOzs7OztJQUNwRCw4Q0FBZ0Q7Ozs7O0lBQ2hELG1EQUF1RDs7Ozs7SUFDdkQsd0RBQWlFOzs7OztJQUNqRSxtREFBNkQ7Ozs7O0lBQzdELGlEQUF5RDs7Ozs7SUFDekQsb0RBQTREOzs7OztJQUM1RCxvREFBNEQ7Ozs7O0lBQzVELDREQUFxRTs7Ozs7SUFDckUsMkRBQTBFOzs7OztJQUMxRSwyREFBMEU7Ozs7O0lBQzFFLGtEQUF3RDs7Ozs7SUFDeEQsOENBQWdEOzs7OztJQUNoRCw0REFBNEU7Ozs7O0lBQzVFLDZEQUFxRTs7Ozs7SUFDckUsbURBQTZEOzs7OztJQUM3RCxtREFBMEQ7Ozs7O0lBQzFELGlEQUFzRDs7Ozs7SUFDdEQsaURBQXNEOzs7OztJQUN0RCxzREFBNkQ7Ozs7O0lBQzdELGlEQUFzRDs7Ozs7SUFDdEQsNERBQTRFOzs7OztJQUM1RSwrREFBa0Y7Ozs7O0lBQ2xGLDREQUEyRTs7Ozs7SUFDM0UsNERBQTRFOzs7OztJQUM1RSw2REFBOEU7Ozs7O0lBQzlFLGlEQUFzRDs7Ozs7SUFDdEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUm93U2VsZWN0RW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NldC1lbmFibGVkL3Jvdy1zZWxlY3QtZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9zdHJ1Y3R1cmUtY29sdW1uLmlucHV0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUdhdGV3YXkgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogSU5QVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyByb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgU29ydGluZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGluZm9QYW5lbDogYm9vbGVhbiB8IEluZm9QYW5lbENvbmZpZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBzdW1tYXJpZXM6IFN1bW1hcmllc0NvbmZpZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBjb2x1bW5NZW51OiBDb2x1bW5NZW51Q29uZmlnO1xuXHQvL1xuXHQvLyBASW5wdXQoKVxuXHQvLyByb3dEZXRhaWw6IFJvd0RldGFpbENvbmZpZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyB0aXRsZVBhbmVsOiBUaXRsZVBhbmVsQ29uZmlnO1xuXHQvL1xuXHQvLyBASW5wdXQoKVxuXHQvLyBmb290ZXJQYW5lbDogRm9vdGVyUGFuZWxDb25maWc7XG5cdC8vXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEBPdXRwdXQoKVxuXHQvLyByb3dDb2xvcmluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFSb3dDb2xvcmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyOiBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI7XG5cblx0cHJpdmF0ZSBjaGFuZ2VBZnRlckluaXQgPSBmYWxzZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmREaXNwYXRjaGVyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFNlcnZpY2U6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRwcm90ZWN0ZWQgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlOiBSb3dTZWxlY3RFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dDbGFzc0FyY2hpdmU6IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlXG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyID0gbmV3IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcihzdHJ1Y3R1cmVJZCxcblx0XHRcdGNvbXBvc2l0aW9uSWQsIGNvbW1hbmREaXNwYXRjaGVyLCBkb21haW5FdmVudEJ1cywgY29sdW1uRmllbGRGYWN0b3J5LCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyKTtcblxuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldERlZmF1bHRUcmFuc2xhdGlvbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUdhdGV3YXk+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0VGhlbWUodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMucm93RGV0YWlsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dEZXRhaWwuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnJvd0RldGFpbCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMudGl0bGVQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudGl0bGVQYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMudGl0bGVQYW5lbCk7XG5cdFx0Ly8gfVxuXHRcdC8vXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMuZm9vdGVyUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmZvb3RlclBhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMuZm9vdGVyUGFuZWwpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly9cblx0XHQvLyBcdGlmICh0eXBlb2YgdGhpcy5pbmZvUGFuZWwgPT09ICdib29sZWFuJykge1xuXHRcdC8vIFx0XHR0aGlzLmluZm9QYW5lbCA9IHtcblx0XHQvLyBcdFx0XHRlbmFibGVkOiB0aGlzLmluZm9QYW5lbFxuXHRcdC8vIFx0XHR9O1xuXHRcdC8vIFx0fVxuXHRcdC8vXG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuaW5mb1BhbmVsKTtcblx0XHQvLyB9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnN1bW1hcmllcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLnNldCh0aGlzLnN1bW1hcmllcyk7XG5cdFx0Ly8gfVxuXG5cdFx0aWYgKGNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmVkaXRNb2RlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5uZXh0KHRoaXMuZWRpdE1vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jZWxsRWRpdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUubmV4dCh0aGlzLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRXaWR0aCh0aGlzLndpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0hlaWdodC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHQodGhpcy5yb3dIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmF1dG9SZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgodGhpcy5hdXRvUmVzaXplV2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmxvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0TG9hZGluZyh0aGlzLmxvYWRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyLmhhbmRsZShjaGFuZ2VzKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZlcnRpY2FsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5ob3Jpem9udGFsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkKTtcblx0XHR9XG5cblx0XHQvLyBpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0Um93Q29sb3JpbmcodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMucm93Q2xhc3MgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0NsYXNzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLnNjaGVtYVJvd0NsYXNzQXJjaGl2ZS5uZXh0KHRoaXMucm93Q2xhc3MgYXMgU2NoZW1hUm93Q2xhc3MpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmIChzaW1wbGVDaGFuZ2VzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dTdHlsZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFx0dGhpcy5zY2hlbWFSb3dTdHlsZUFyY2hpdmUubmV4dCh0aGlzLnJvd1N0eWxlIGFzIFNjaGVtYVJvd1N0eWxlKTtcblx0XHQvLyB9XG5cblx0XHRpZiAoY2hhbmdlcy5tYXhIZWlnaHQgJiYgdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVySGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy52aXJ0dWFsU2Nyb2xsICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy52aXJ0dWFsU2Nyb2xsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZW5hYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuc29ydGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5maWx0ZXJpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmZpbHRlcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgZmlsdGVyaW5nOiBGaWx0ZXJDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5maWx0ZXJpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5maWx0ZXJpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHRoaXMuZmlsdGVyaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnF1aWNrRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucXVpY2tGaWx0ZXJzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnF1aWNrRmlsdGVycyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnF1aWNrRmlsdGVyc1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0gdGhpcy5xdWlja0ZpbHRlcnM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKHF1aWNrRmlsdGVycyk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgKHNpbXBsZUNoYW5nZXMubG9jYWxpemF0aW9uICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5sb2NhbGl6YXRpb24uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvL1xuXHRcdC8vIFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpIHtcblx0XHQvLyBcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0UmVzb2x2ZXIodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcik7XG5cdFx0Ly8gXHR9XG5cdFx0Ly9cblx0XHQvLyBcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbikge1xuXHRcdC8vIFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5jaGFuZ2VUcmFuc2xhdGlvbih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbik7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5zb3VyY2UpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlbUl0ZW1WYWx1ZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb25uZWN0U2NoZW1hRXZlbnRzKCk7XG5cblx0XHR0aGlzLmNvbXBvbmVudEluaXRpYWxpemVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbm5lY3RTY2hlbWFFdmVudHMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhlbWUpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZC5lbWl0KGVuYWJsZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uVmVydGljYWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkLmVtaXQoZW5hYmxlZCk7XG5cdFx0XHR9KTtcblxuXHRcdC8vIHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0Ly8gXHQub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYUlkKVxuXHRcdC8vIFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHQvLyBcdC5zdWJzY3JpYmUoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdC8vIFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KGNvbG9yaW5nKTtcblx0XHQvLyBcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZUFmdGVySW5pdDtcblx0fVxuXG5cdHByaXZhdGUgaXNOb3RJbml0aWFsaXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jaGFuZ2VBZnRlckluaXQ7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=