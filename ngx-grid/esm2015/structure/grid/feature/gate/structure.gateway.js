import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "../../../../composition/core/api/column/auto/column-auto.configurator";
import * as i3 from "../../../core/api/structure.id";
import * as i4 from "../../../../composition/core/api/composition.id";
import * as i5 from "../../../../schema/core/api/schema.read-model-root-id";
import * as i6 from "../../../core/api/structure.command-invoker";
import * as i7 from "../../../paging/core/api/paging.command-invoker";
import * as i8 from "../../../paging/core/api/paging.event-repository";
import * as i9 from "../../../sorting/core/api/sorting.command-invoker";
import * as i10 from "../../../search/core/api/search.command-invoker";
import * as i11 from "../../../field/core/api/field.command-invoker";
import * as i12 from "../../../source/core/api/source.command-invoker";
import * as i13 from "../../../source/core/api/event/source-event.service";
import * as i14 from "../../../../schema/core/api/schema.command-invoker";
import * as i15 from "../../../../composition/core/api/composition.command-invoker";
import * as i16 from "../../../../composition/core/api/composition.event-repository";
import * as i17 from "../../../source/core/api/formation/formation.event-repository";
import * as i18 from "../edit/structure.edit-mode.archive";
import * as i19 from "../edit/structure.cell-edit.archive";
import * as i20 from "../../core/api/panel/info/structure.info-panel-config.service";
import * as i21 from "../edit/structure.cell-edit.store";
import * as i22 from "../../../../composition/core/domain/column/field/colum-field.factory";
import * as i23 from "../../../source/core/api/formation/set-enabled/row-select-enabled.repository";
import * as i24 from "../../../source/core/api/formation/type/row-selection-type.archive";
import * as i25 from "../../../../schema/core/api/styling/schema.row-class.archive";
import * as i26 from "../../../../schema/core/api/styling/schema.row-style.archive";
import * as i27 from "../../../source/core/api/formation/formation.command-invoker";
import * as i28 from "../../../search/core/api/search.event-repository";
import * as i29 from "../header/structure-header-bottom-enabled.archive";
import * as i30 from "../../../../schema/core/api/schema.event-repository";
import * as i31 from "../../../../l10n/core/api/translation.facade";
import * as i32 from "../../../core/api/structure.initial-values-ready.archive";
/** @internal */
export class StructureGateway extends SmartComponent {
    constructor(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, columnAutoConfigurator, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
        this.columnAutoConfigurator = columnAutoConfigurator;
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
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.columnFieldFactory = columnFieldFactory;
        this.rowSelectEnabledArchive = rowSelectEnabledArchive;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.translationService = translationService;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        // DOESNT WORK WITH GATE
        this.source = [];
        /** *********************
         * OUTPUTS
         ***********************/
        this.themeChanged = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.changeAfterInit = false;
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, columnAutoConfigurator, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    ngOnChanges(changes) {
        if (changes.editMode !== undefined && changes.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (changes.cellEditing !== undefined && changes.cellEditing.currentValue !== undefined) {
            let editingConfig;
            if (typeof this.cellEditing === 'boolean') {
                editingConfig = {
                    enabled: this.cellEditing
                };
            }
            else {
                editingConfig = this.cellEditing;
            }
            this.structureCommandInvoker.setCellEdit(editingConfig, this.structureId);
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
        /**
         * Columns
         */
        this.structureColumnInputHandler.handle(changes);
        if (changes.maxHeight && this.maxHeight) {
            this.structureCommandInvoker.setContainerHeight(this.maxHeight, this.structureId);
        }
        /**
         * Setting source should be last step
         */
        if (changes.source !== undefined && changes.source.currentValue !== undefined) {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        }
    }
    ngOnInit() {
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe(() => {
            this.columnsChanged.emit();
        });
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.hermesTakeUntil())
            .subscribe((containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        });
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .subscribe((values) => {
            this.sourceEdited.emit(values);
        });
        this.structureCellEditStore
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((state) => {
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
        });
        this.subscribeAndEmit(this.schemaEventRepository.onThemeChanged(this.schemaId), this.themeChanged);
        this.componentInitialized();
    }
    componentInitialized() {
        this.changeAfterInit = true;
    }
}
StructureGateway.ɵfac = function StructureGateway_Factory(t) { return new (t || StructureGateway)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomainEventBus), i0.ɵɵdirectiveInject(i1.CommandDispatcher), i0.ɵɵdirectiveInject(i2.ColumnAutoConfigurator), i0.ɵɵdirectiveInject(i3.StructureId), i0.ɵɵdirectiveInject(i4.CompositionId), i0.ɵɵdirectiveInject(i5.SchemaReadModelRootId), i0.ɵɵdirectiveInject(i6.StructureCommandInvoker), i0.ɵɵdirectiveInject(i7.PagingCommandInvoker), i0.ɵɵdirectiveInject(i8.PagingEventRepository), i0.ɵɵdirectiveInject(i9.SortingCommandInvoker), i0.ɵɵdirectiveInject(i10.SearchCommandInvoker), i0.ɵɵdirectiveInject(i11.FieldCommandInvoker), i0.ɵɵdirectiveInject(i12.SourceCommandInvoker), i0.ɵɵdirectiveInject(i13.SourceEventService), i0.ɵɵdirectiveInject(i14.SchemaCommandInvoker), i0.ɵɵdirectiveInject(i15.CompositionCommandInvoker), i0.ɵɵdirectiveInject(i16.CompositionEventRepository), i0.ɵɵdirectiveInject(i17.FormationEventRepository), i0.ɵɵdirectiveInject(i18.StructureEditModeArchive), i0.ɵɵdirectiveInject(i19.StructureCellEditArchive), i0.ɵɵdirectiveInject(i20.StructureInfoPanelConfigService), i0.ɵɵdirectiveInject(i21.StructureCellEditStore), i0.ɵɵdirectiveInject(i22.ColumnFieldFactory), i0.ɵɵdirectiveInject(i23.RowSelectEnabledRepository), i0.ɵɵdirectiveInject(i24.RowSelectionTypeArchive), i0.ɵɵdirectiveInject(i25.SchemaRowClassArchive), i0.ɵɵdirectiveInject(i26.SchemaRowStyleArchive), i0.ɵɵdirectiveInject(i27.FormationCommandInvoker), i0.ɵɵdirectiveInject(i28.SearchEventRepository), i0.ɵɵdirectiveInject(i29.StructureHeaderBottomEnabledArchive), i0.ɵɵdirectiveInject(i30.SchemaEventRepository), i0.ɵɵdirectiveInject(i31.TranslationFacade), i0.ɵɵdirectiveInject(i32.StructureInitialValuesReadyArchive)); };
StructureGateway.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureGateway, inputs: { maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", theme: "theme" }, outputs: { themeChanged: "themeChanged", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureGateway, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.DomainEventBus }, { type: i1.CommandDispatcher }, { type: i2.ColumnAutoConfigurator }, { type: i3.StructureId }, { type: i4.CompositionId }, { type: i5.SchemaReadModelRootId }, { type: i6.StructureCommandInvoker }, { type: i7.PagingCommandInvoker }, { type: i8.PagingEventRepository }, { type: i9.SortingCommandInvoker }, { type: i10.SearchCommandInvoker }, { type: i11.FieldCommandInvoker }, { type: i12.SourceCommandInvoker }, { type: i13.SourceEventService }, { type: i14.SchemaCommandInvoker }, { type: i15.CompositionCommandInvoker }, { type: i16.CompositionEventRepository }, { type: i17.FormationEventRepository }, { type: i18.StructureEditModeArchive }, { type: i19.StructureCellEditArchive }, { type: i20.StructureInfoPanelConfigService }, { type: i21.StructureCellEditStore }, { type: i22.ColumnFieldFactory }, { type: i23.RowSelectEnabledRepository }, { type: i24.RowSelectionTypeArchive }, { type: i25.SchemaRowClassArchive }, { type: i26.SchemaRowStyleArchive }, { type: i27.FormationCommandInvoker }, { type: i28.SearchEventRepository }, { type: i29.StructureHeaderBottomEnabledArchive }, { type: i30.SchemaEventRepository }, { type: i31.TranslationFacade }, { type: i32.StructureInitialValuesReadyArchive }]; }, { maxHeight: [{
            type: Input
        }], width: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], autoResizeWidth: [{
            type: Input
        }], source: [{
            type: Input
        }], columns: [{
            type: Input
        }], editMode: [{
            type: Input
        }], cellEditing: [{
            type: Input
        }], theme: [{
            type: Input
        }], themeChanged: [{
            type: Output
        }], columnsChanged: [{
            type: Output
        }], containerWidthChanged: [{
            type: Output
        }], sourceEdited: [{
            type: Output
        }], cellEditEntered: [{
            type: Output
        }], cellEditCanceled: [{
            type: Output
        }], cellEditSubmitted: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBZWxGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBWTNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRGLGdCQUFnQjtBQUVoQixNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7SUF5RTVELFlBQ29CLGlCQUFvQyxFQUN2RCxVQUFzQixFQUNILGNBQThCLEVBQzlCLGlCQUFvQyxFQUN0QyxzQkFBOEMsRUFDeEQsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsdUJBQWdELEVBQ2hELGdDQUFzRCxFQUN0RCxxQkFBNEMsRUFDNUMsd0JBQStDLEVBQy9DLHVCQUE2QyxFQUM3QyxzQkFBMkMsRUFDM0Msb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsNEJBQXVELEVBQ3ZELDBCQUFzRCxFQUN0RCxxQkFBK0MsRUFDL0Msd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCwrQkFBZ0UsRUFDaEUsc0JBQThDLEVBQzlDLGtCQUFzQyxFQUN0Qyx1QkFBbUQsRUFDbkQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxxQkFBNEMsRUFDNUMsMEJBQW1ELEVBQ25ELHFCQUE0QyxFQUM1QyxtQ0FBd0UsRUFDeEUscUJBQTRDLEVBQzVDLGtCQUFxQyxFQUNyQyxrQ0FBc0U7UUFFaEYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBcENsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRXBDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3RDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDeEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0IsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXNCO1FBQ3RELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQUMvQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7UUFDM0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUEyQjtRQUN2RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7UUFDL0MsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFDaEUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFDbkQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUF5QjtRQUNuRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHVDQUFrQyxHQUFsQyxrQ0FBa0MsQ0FBb0M7UUF6RmpGLHdCQUF3QjtRQUV4QixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBdUJ4Qjs7aUNBRXlCO1FBR3pCLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0QsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRSxpQkFBWSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHekQscUJBQWdCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHMUQsc0JBQWlCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJbkQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUF5Qy9CLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLDJCQUEyQixDQUFDLFdBQVcsRUFDN0UsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFDcEUsc0JBQXNCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQW9DO1FBRS9DLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2xGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFeEYsSUFBSSxhQUFhLENBQUM7WUFFbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUMxQyxhQUFhLEdBQUc7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXO2lCQUN6QixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakM7WUFFRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM1RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDcEYsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksT0FBTyxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ2hHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0Y7UUFFRDs7V0FFRztRQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQ7O1dBRUc7UUFDSCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25FO0lBRUYsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsMEJBQTBCO2FBQzdCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLDBCQUEwQjthQUM3Qix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDL0QsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxjQUFzQixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsU0FBUyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHNCQUFzQjthQUN6QixFQUFFLEVBQUU7YUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUU1QyxRQUFRLEtBQUssRUFBRTtnQkFFZCxLQUFLLHNCQUFzQixDQUFDLEtBQUs7b0JBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBRVAsS0FBSyxzQkFBc0IsQ0FBQyxNQUFNO29CQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzlCLE1BQU07Z0JBRVAsS0FBSyxzQkFBc0IsQ0FBQyxNQUFNO29CQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLE1BQU07Z0JBRVA7b0JBQ0MsTUFBTTthQUNQO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4RCxJQUFJLENBQUMsWUFBWSxDQUNqQixDQUFDO1FBRUYsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDOztnRkExT29CLGdCQUFnQjttRUFBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FEckMsU0FBUzsreUNBUVQsU0FBUztrQkFEUixLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSU4sZUFBZTtrQkFEZCxLQUFLO1lBTU4sTUFBTTtrQkFETCxLQUFLO1lBTU4sT0FBTztrQkFETixLQUFLO1lBVU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLO1lBU04sWUFBWTtrQkFEWCxNQUFNO1lBSVAsY0FBYztrQkFEYixNQUFNO1lBSVAscUJBQXFCO2tCQURwQixNQUFNO1lBSVAsWUFBWTtrQkFEWCxNQUFNO1lBSVAsZUFBZTtrQkFEZCxNQUFNO1lBSVAsZ0JBQWdCO2tCQURmLE1BQU07WUFJUCxpQkFBaUI7a0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgUm93U2VsZWN0RW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NldC1lbmFibGVkL3Jvdy1zZWxlY3QtZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBDZWxsRWRpdENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcblxuXG4vKiogQGludGVybmFsICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuIHwgQ2VsbEVkaXRDb25maWc7XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcml2YXRlIGNoYW5nZUFmdGVySW5pdCA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQXV0b0NvbmZpZ3VyYXRvcjogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcixcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZVxuXHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciA9IG5ldyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIoc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkLCBjb21tYW5kRGlzcGF0Y2hlciwgZG9tYWluRXZlbnRCdXMsIGNvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRcdGNvbHVtbkF1dG9Db25maWd1cmF0b3IsIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IGVkaXRpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5jZWxsRWRpdGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGVkaXRpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5jZWxsRWRpdGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWRpdGluZ0NvbmZpZyA9IHRoaXMuY2VsbEVkaXRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Q2VsbEVkaXQoZWRpdGluZ0NvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0V2lkdGgodGhpcy53aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy50aGVtZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudGhlbWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhpcy50aGVtZSwgdGhpcy5zY2hlbWFJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENvbHVtbnNcblx0XHQgKi9cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlci5oYW5kbGUoY2hhbmdlcyk7XG5cblx0XHRpZiAoY2hhbmdlcy5tYXhIZWlnaHQgJiYgdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Q29udGFpbmVySGVpZ2h0KHRoaXMubWF4SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKGNoYW5nZXMuc291cmNlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3VyY2UuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy50aGVtZUNoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRJbml0aWFsaXplZCgpO1xuXHR9XG5cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=