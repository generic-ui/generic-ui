/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureSummariesConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.domainEventBus = domainEventBus;
        _this.commandDispatcher = commandDispatcher;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.schemaId = schemaId;
        _this.structureCommandInvoker = structureCommandInvoker;
        _this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        _this.pagingEventRepository = pagingEventRepository;
        _this.sortingCommandDispatcher = sortingCommandDispatcher;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.fieldCommandDispatcher = fieldCommandDispatcher;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.compositionCommandDispatcher = compositionCommandDispatcher;
        _this.compositionEventRepository = compositionEventRepository;
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
        _this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        // DOESNT WORK WITH GATE
        _this.source = [];
        // DOESNT WORK WITH GATE
        _this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        _this.themeChanged = new EventEmitter();
        _this.columnsChanged = new EventEmitter();
        _this.containerWidthChanged = new EventEmitter();
        _this.sourceEdited = new EventEmitter();
        _this.cellEditEntered = new EventEmitter();
        _this.cellEditCanceled = new EventEmitter();
        _this.cellEditSubmitted = new EventEmitter();
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
    };
    /**
     * @return {?}
     */
    StructureGateway.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        function (containerWidth) {
            _this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            _this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .on()
            .pipe(this.hermesTakeUntil())
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
                default:
                    break;
            }
        }));
        this.subscribeAndEmit(this.schemaEventRepository.onThemeChanged(this.schemaId), this.themeChanged);
        this.componentInitialized();
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureInitialValuesReadyArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQWlCbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQjNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBVXRGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFJN0U7SUFBK0MsNENBQWM7SUF5RTVELDBCQUNvQixpQkFBb0MsRUFDdkQsVUFBc0IsRUFDSCxjQUE4QixFQUM5QixpQkFBb0MsRUFDaEQsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQWdELEVBQ2hELGdDQUFzRCxFQUN0RCxxQkFBNEMsRUFDNUMsd0JBQStDLEVBQy9DLHVCQUE2QyxFQUM3QyxzQkFBMkMsRUFDM0Msb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsNEJBQXVELEVBQ3ZELDBCQUFzRCxFQUN0RCxxQkFBK0MsRUFDL0Msd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBMkQsRUFDM0QsK0JBQWdFLEVBQ2hFLCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLGdDQUFrRSxFQUNsRSxpQ0FBMkQsRUFDM0QsdUJBQW1ELEVBQ25ELHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMscUJBQTRDLEVBQzVDLDBCQUFtRCxFQUNuRCxxQkFBNEMsRUFDNUMsZ0NBQWtFLEVBQ2xF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RDs7Ozs7SUFDaEQsZ0RBQW9EOzs7OztJQUNwRCx3REFBaUU7Ozs7O0lBQ2pFLHNEQUFnRTs7Ozs7SUFDaEUsaURBQXlEOzs7OztJQUN6RCxvREFBNEQ7Ozs7O0lBQzVELG9EQUE0RDs7Ozs7SUFDNUQsNERBQXFFOzs7OztJQUNyRSwyREFBMEU7Ozs7O0lBQzFFLDJEQUEwRTs7Ozs7SUFDMUUsa0RBQXdEOzs7OztJQUN4RCw4Q0FBZ0Q7Ozs7O0lBQ2hELDREQUE0RTs7Ozs7SUFDNUUsNkRBQXFFOzs7OztJQUNyRSxtREFBNkQ7Ozs7O0lBQzdELG1EQUEwRDs7Ozs7SUFDMUQsaURBQXNEOzs7OztJQUN0RCxpREFBc0Q7Ozs7O0lBQ3RELHNEQUE2RDs7Ozs7SUFDN0QsaURBQXNEOzs7OztJQUN0RCw0REFBNEU7Ozs7O0lBQzVFLCtEQUFrRjs7Ozs7SUFDbEYsNERBQTJFOzs7OztJQUMzRSw0REFBNEU7Ozs7O0lBQzVFLDZEQUE4RTs7Ozs7SUFDOUUsaURBQXNEOzs7OztJQUN0RCw4Q0FBK0M7Ozs7O0lBQy9DLDhEQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvZmVhdHVyZS9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUm93U2VsZWN0RW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NldC1lbmFibGVkL3Jvdy1zZWxlY3QtZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlR2F0ZXdheSBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdC8qKiAqKioqKioqKioqKioqKioqKioqKipcblx0ICogSU5QVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXG5cdC8vIERPRVNOVCBXT1JLIFdJVEggR0FURVxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXG5cdC8vIERPRVNOVCBXT1JLIFdJVEggR0FURVxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXG5cdC8qKiAqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdHRoZW1lQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVRoZW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8RWRpdGVtSXRlbVZhbHVlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyOiBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI7XG5cblx0cHJpdmF0ZSBjaGFuZ2VBZnRlckluaXQgPSBmYWxzZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRwcm90ZWN0ZWQgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlOiBSb3dTZWxlY3RFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dDbGFzc0FyY2hpdmU6IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmU6IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmVcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgPSBuZXcgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyKHN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCwgY29tbWFuZERpc3BhdGNoZXIsIGRvbWFpbkV2ZW50QnVzLCBjb2x1bW5GaWVsZEZhY3RvcnksIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0V2lkdGgodGhpcy53aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhpcy50aGVtZSwgdGhpcy5zY2hlbWFJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyLmhhbmRsZShjaGFuZ2VzKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5tYXhIZWlnaHQgJiYgdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Q29udGFpbmVySGVpZ2h0KHRoaXMubWF4SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKGNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Db2x1bW5zQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWVzOiBFZGl0ZW1JdGVtVmFsdWVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWVzKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUodGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnkub25UaGVtZUNoYW5nZWQodGhpcy5zY2hlbWFJZCksXG5cdFx0XHR0aGlzLnRoZW1lQ2hhbmdlZFxuXHRcdCk7XG5cblx0XHR0aGlzLmNvbXBvbmVudEluaXRpYWxpemVkKCk7XG5cdH1cblxuXG5cdHByaXZhdGUgY29tcG9uZW50SW5pdGlhbGl6ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VBZnRlckluaXQgPSB0cnVlO1xuXHR9XG5cbn1cbiJdfQ==