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
    function StructureGateway(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureDetailViewConfigArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQWdCbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrQjNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBVXRGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFJN0U7SUFBK0MsNENBQWM7SUF5RTVELDBCQUNvQixpQkFBb0MsRUFDdkQsVUFBc0IsRUFDSCxjQUE4QixFQUM5QixpQkFBb0MsRUFDaEQsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQWdELEVBQ2hELGdDQUFzRCxFQUN0RCxxQkFBNEMsRUFDNUMsd0JBQStDLEVBQy9DLHVCQUE2QyxFQUM3QyxzQkFBMkMsRUFDM0Msb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsNEJBQXVELEVBQ3ZELDBCQUFzRCxFQUN0RCxxQkFBK0MsRUFDL0Msd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBMkQsRUFDM0QsK0JBQWdFLEVBQ2hFLHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsZ0NBQWtFLEVBQ2xFLGlDQUEyRCxFQUMzRCx1QkFBbUQsRUFDbkQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxxQkFBNEMsRUFDNUMsMEJBQW1ELEVBQ25ELHFCQUE0QyxFQUM1QyxnQ0FBa0UsRUFDbEUsbUNBQXdFLEVBQ3hF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LHNEQUFnRTs7Ozs7SUFDaEUsaURBQXlEOzs7OztJQUN6RCxvREFBNEQ7Ozs7O0lBQzVELG9EQUE0RDs7Ozs7SUFDNUQsNERBQXFFOzs7OztJQUNyRSwyREFBMEU7Ozs7O0lBQzFFLGtEQUF3RDs7Ozs7SUFDeEQsOENBQWdEOzs7OztJQUNoRCw0REFBNEU7Ozs7O0lBQzVFLDZEQUFxRTs7Ozs7SUFDckUsbURBQTZEOzs7OztJQUM3RCxtREFBMEQ7Ozs7O0lBQzFELGlEQUFzRDs7Ozs7SUFDdEQsaURBQXNEOzs7OztJQUN0RCxzREFBNkQ7Ozs7O0lBQzdELGlEQUFzRDs7Ozs7SUFDdEQsNERBQTRFOzs7OztJQUM1RSwrREFBa0Y7Ozs7O0lBQ2xGLDREQUEyRTs7Ozs7SUFDM0UsNERBQTRFOzs7OztJQUM1RSw2REFBOEU7Ozs7O0lBQzlFLGlEQUFzRDs7Ozs7SUFDdEQsOENBQStDOzs7OztJQUMvQyw4REFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9mZWF0dXJlL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9yb3ctc2VsZWN0LWVuYWJsZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci10b3AtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcm93LWRldGFpbC9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUdhdGV3YXkgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHQvKiogKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblxuXHQvLyBET0VTTlQgV09SSyBXSVRIIEdBVEVcblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblxuXHQvLyBET0VTTlQgV09SSyBXSVRIIEdBVEVcblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+ID0gW107XG5cblx0Ly8gQElucHV0KClcblx0Ly8gZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblxuXHQvKiogKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjogU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyO1xuXG5cdHByaXZhdGUgY2hhbmdlQWZ0ZXJJbml0ID0gZmFsc2U7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHVibGljIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHBhZ2luZ0V2ZW50UmVwb3NpdG9yeTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBmaWVsZENvbW1hbmREaXNwYXRjaGVyOiBGaWVsZENvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXI6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0U3RvcmU6IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUsXG5cdFx0cHJvdGVjdGVkIGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3RFbmFibGVkQXJjaGl2ZTogUm93U2VsZWN0RW5hYmxlZFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hUm93Q2xhc3NBcmNoaXZlOiBTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd1N0eWxlQXJjaGl2ZTogU2NoZW1hUm93U3R5bGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUV2ZW50UmVwb3NpdG9yeTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlOiBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlXG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyID0gbmV3IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcihzdHJ1Y3R1cmVJZCxcblx0XHRcdGNvbXBvc2l0aW9uSWQsIGNvbW1hbmREaXNwYXRjaGVyLCBkb21haW5FdmVudEJ1cywgY29sdW1uRmllbGRGYWN0b3J5LCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyKTtcblxuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldERlZmF1bHRUcmFuc2xhdGlvbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUdhdGV3YXk+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5lZGl0TW9kZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZWRpdE1vZGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbEVkaXRpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNlbGxFZGl0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZS5uZXh0KHRoaXMuY2VsbEVkaXRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLndpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFdpZHRoKHRoaXMud2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoaXMudGhlbWUsIHRoaXMuc2NoZW1hSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93SGVpZ2h0LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5hdXRvUmVzaXplV2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlci5oYW5kbGUoY2hhbmdlcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMubWF4SGVpZ2h0ICYmIHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldENvbnRhaW5lckhlaWdodCh0aGlzLm1heEhlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5zb3VyY2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy50aGVtZUNoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRJbml0aWFsaXplZCgpO1xuXHR9XG5cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=