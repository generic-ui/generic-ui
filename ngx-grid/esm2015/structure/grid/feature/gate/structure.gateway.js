/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
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
     * @param {?} structureCommandInvoker
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     * @param {?} sortingCommandDispatcher
     * @param {?} searchCommandDispatcher
     * @param {?} fieldCommandDispatcher
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandInvoker
     * @param {?} compositionCommandDispatcher
     * @param {?} compositionEventRepository
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureInfoPanelConfigService
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
     * @param {?} structureInitialValuesReadyArchive
     */
    constructor(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandInvoker = structureCommandInvoker;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
        this.compositionEventRepository = compositionEventRepository;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
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
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        // DOESNT WORK WITH GATE
        this.source = [];
        // DOESNT WORK WITH GATE
        this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        this.themeChanged = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.changeAfterInit = false;
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.editMode !== undefined && changes.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (changes.cellEditing !== undefined && changes.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (changes.width !== undefined && changes.width.currentValue !== undefined) {
            this.compositionCommandDispatcher.setWidth(this.width, this.compositionId);
        }
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.schemaCommandInvoker.setTheme(this.theme, this.schemaId, this.structureId);
        }
        if (changes.rowHeight !== undefined && changes.rowHeight.currentValue !== undefined) {
            this.structureCommandInvoker.setRowHeight(this.rowHeight, this.structureId);
        }
        if (changes.autoResizeWidth !== undefined && changes.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth, this.compositionId);
        }
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.structureColumnInputHandler.handle(changes);
        }
        if (changes.maxHeight && this.maxHeight) {
            this.structureCommandInvoker.setContainerHeight(this.maxHeight, this.structureId);
        }
        /**
         * Setting source should be last step
         */
        if (changes.source) {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        (containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .on()
            .pipe(this.hermesTakeUntil())
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
        this.subscribeAndEmit(this.schemaEventRepository.onThemeChanged(this.schemaId), this.themeChanged);
        this.componentInitialized();
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
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    theme: [{ type: Input }],
    themeChanged: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }]
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
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /** @type {?} */
    StructureGateway.prototype.theme;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.themeChanged;
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
    StructureGateway.prototype.structureCommandInvoker;
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
    StructureGateway.prototype.compositionEventRepository;
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureInitialValuesReadyArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBZ0JsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWtCM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFVdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7OztBQUk3RSxNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlFNUQsWUFDb0IsaUJBQW9DLEVBQ3ZELFVBQXNCLEVBQ0gsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ2hELFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLFFBQStCLEVBQy9CLHVCQUFnRCxFQUNoRCxnQ0FBc0QsRUFDdEQscUJBQTRDLEVBQzVDLHdCQUErQyxFQUMvQyx1QkFBNkMsRUFDN0Msc0JBQTJDLEVBQzNDLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLDRCQUF1RCxFQUN2RCwwQkFBc0QsRUFDdEQscUJBQStDLEVBQy9DLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQTJELEVBQzNELCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLGdDQUFrRSxFQUNsRSxpQ0FBMkQsRUFDM0QsdUJBQW1ELEVBQ25ELHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMscUJBQTRD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RSxzREFBZ0U7Ozs7O0lBQ2hFLGlEQUF5RDs7Ozs7SUFDekQsb0RBQTREOzs7OztJQUM1RCxvREFBNEQ7Ozs7O0lBQzVELDREQUFxRTs7Ozs7SUFDckUsMkRBQTBFOzs7OztJQUMxRSxrREFBd0Q7Ozs7O0lBQ3hELDhDQUFnRDs7Ozs7SUFDaEQsNERBQTRFOzs7OztJQUM1RSw2REFBcUU7Ozs7O0lBQ3JFLG1EQUE2RDs7Ozs7SUFDN0QsbURBQTBEOzs7OztJQUMxRCxpREFBc0Q7Ozs7O0lBQ3RELGlEQUFzRDs7Ozs7SUFDdEQsc0RBQTZEOzs7OztJQUM3RCxpREFBc0Q7Ozs7O0lBQ3RELDREQUE0RTs7Ozs7SUFDNUUsK0RBQWtGOzs7OztJQUNsRiw0REFBMkU7Ozs7O0lBQzNFLDREQUE0RTs7Ozs7SUFDNUUsNkRBQThFOzs7OztJQUM5RSxpREFBc0Q7Ozs7O0lBQ3RELDhDQUErQzs7Ozs7SUFDL0MsOERBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2V0LWVuYWJsZWQvcm93LXNlbGVjdC1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9zdHJ1Y3R1cmUtY29sdW1uLmlucHV0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzc0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZS5hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGZpbHRlcmluZzogYm9vbGVhbiB8IEZpbHRlckNvbmZpZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcml2YXRlIGNoYW5nZUFmdGVySW5pdCA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgZmllbGRDb21tYW5kRGlzcGF0Y2hlcjogRmllbGRDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZVxuXHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciA9IG5ldyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIoc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkLCBjb21tYW5kRGlzcGF0Y2hlciwgZG9tYWluRXZlbnRCdXMsIGNvbHVtbkZpZWxkRmFjdG9yeSwgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcik7XG5cblx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXREZWZhdWx0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVHYXRld2F5Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmVkaXRNb2RlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5uZXh0KHRoaXMuZWRpdE1vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jZWxsRWRpdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUubmV4dCh0aGlzLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRXaWR0aCh0aGlzLndpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRoZW1lLCB0aGlzLnNjaGVtYUlkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0hlaWdodC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRSb3dIZWlnaHQodGhpcy5yb3dIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmF1dG9SZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgodGhpcy5hdXRvUmVzaXplV2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIuaGFuZGxlKGNoYW5nZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLm1heEhlaWdodCAmJiB0aGlzLm1heEhlaWdodCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoY2hhbmdlcy5zb3VyY2UpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkNvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJXaWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZVxuXHRcdFx0Lm9uU291cmNlRWRpdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlbUl0ZW1WYWx1ZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVI6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0U3VibWl0dGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeS5vblRoZW1lQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKSxcblx0XHRcdHRoaXMudGhlbWVDaGFuZ2VkXG5cdFx0KTtcblxuXHRcdHRoaXMuY29tcG9uZW50SW5pdGlhbGl6ZWQoKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBjb21wb25lbnRJbml0aWFsaXplZCgpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZUFmdGVySW5pdCA9IHRydWU7XG5cdH1cblxufVxuIl19