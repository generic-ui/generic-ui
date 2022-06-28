import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../feature/common/cdk/component/smart-component';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ifChanged } from '../../../feature/common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/composition/api/column/auto/column-auto.configurator";
import * as i2 from "../../../core/structure/structure-core/api/global/structure.id";
import * as i3 from "../../../core/composition/api/global/composition.id";
import * as i4 from "../../../core/schema/api/global/schema.read-model-root-id";
import * as i5 from "../../../core/structure/structure-core/api/structure.publisher";
import * as i6 from "../../../core/structure/paging/api/paging.publisher";
import * as i7 from "../../../core/structure/paging/api/paging.event-repository";
import * as i8 from "../../../core/structure/sorting/api/sorting.publisher";
import * as i9 from "../../../core/structure/search/api/search.publisher";
import * as i10 from "../../../core/structure/source/api/source.publisher";
import * as i11 from "../../../core/structure/source/api/edit/source-event.service";
import * as i12 from "../../../core/schema/api/schema.publisher";
import * as i13 from "../../../core/composition/api/composition.publisher";
import * as i14 from "../../../core/composition/api/composition.event-repository";
import * as i15 from "../../../core/structure/formation/api/formation.event-repository";
import * as i16 from "../edit/structure.edit-mode.archive";
import * as i17 from "../edit/structure.cell-edit.archive";
import * as i18 from "../../../core/structure/structure-core/api/panel/info/structure.info-panel-config.service";
import * as i19 from "../edit/structure.cell-edit.store";
import * as i20 from "../../../core/composition/domain/column/field/colum-field.factory";
import * as i21 from "../../../core/structure/formation/api/type/row-selection-type.archive";
import * as i22 from "../../../core/structure/formation/api/formation.publisher";
import * as i23 from "../../../core/structure/search/api/search.event-repository";
import * as i24 from "../header/structure-header-bottom-enabled.archive";
import * as i25 from "../../../core/schema/api/schema.event-repository";
import * as i26 from "../../../core/l10n/api/translation.facade";
import * as i27 from "../../../core/structure/structure-core/api/ready/structure.initial-values-ready.archive";
/** @internal */
export class StructureGateway extends SmartComponent {
    constructor(changeDetectorRef, elementRef, columnAutoConfigurator, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandInvoker, searchCommandInvoker, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, rowSelectionTypeArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandInvoker = structureCommandInvoker;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
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
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
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
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, columnFieldFactory, columnAutoConfigurator, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    ngOnChanges(changes) {
        ifChanged(changes.editMode, () => {
            this.structureEditModeArchive.next(this.editMode);
        });
        ifChanged(changes.cellEditing, () => {
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
        });
        ifChanged(changes.width, (width) => {
            this.compositionCommandDispatcher.setWidth(width, this.compositionId);
        });
        ifChanged(changes.theme, () => {
            this.schemaCommandInvoker.setTheme(this.theme, this.schemaId, this.structureId);
        });
        ifChanged(changes.rowHeight, () => {
            this.structureCommandInvoker.setRowHeight(this.rowHeight, this.structureId);
        });
        ifChanged(changes.autoResizeWidth, () => {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth, this.compositionId);
        });
        /**
         * Columns
         */
        this.structureColumnInputHandler.handle(changes);
        ifChanged(changes.maxHeight, () => {
            this.structureCommandInvoker.setContainerHeight(this.maxHeight, this.structureId);
        });
        /**
         * Setting source should be last step
         */
        ifChanged(changes.source, () => {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        });
    }
    ngOnInit() {
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe(() => {
            this.columnsChanged.emit();
        });
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
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
            .pipe(this.takeUntil())
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
StructureGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureGateway, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.ColumnAutoConfigurator }, { token: i2.StructureId }, { token: i3.CompositionId }, { token: i4.SchemaReadModelRootId }, { token: i5.StructurePublisher }, { token: i6.PagingPublisher }, { token: i7.PagingEventRepository }, { token: i8.SortingPublisher }, { token: i9.SearchPublisher }, { token: i10.SourcePublisher }, { token: i11.SourceEventService }, { token: i12.SchemaPublisher }, { token: i13.CompositionPublisher }, { token: i14.CompositionEventRepository }, { token: i15.FormationEventRepository }, { token: i16.StructureEditModeArchive }, { token: i17.StructureCellEditArchive }, { token: i18.StructureInfoPanelConfigService }, { token: i19.StructureCellEditStore }, { token: i20.ColumnFieldFactory }, { token: i21.RowSelectionTypeArchive }, { token: i22.FormationPublisher }, { token: i23.SearchEventRepository }, { token: i24.StructureHeaderBottomEnabledArchive }, { token: i25.SchemaEventRepository }, { token: i26.TranslationFacade }, { token: i27.StructureInitialValuesReadyArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureGateway, inputs: { maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", theme: "theme" }, outputs: { themeChanged: "themeChanged", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureGateway, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ColumnAutoConfigurator }, { type: i2.StructureId }, { type: i3.CompositionId }, { type: i4.SchemaReadModelRootId }, { type: i5.StructurePublisher }, { type: i6.PagingPublisher }, { type: i7.PagingEventRepository }, { type: i8.SortingPublisher }, { type: i9.SearchPublisher }, { type: i10.SourcePublisher }, { type: i11.SourceEventService }, { type: i12.SchemaPublisher }, { type: i13.CompositionPublisher }, { type: i14.CompositionEventRepository }, { type: i15.FormationEventRepository }, { type: i16.StructureEditModeArchive }, { type: i17.StructureCellEditArchive }, { type: i18.StructureInfoPanelConfigService }, { type: i19.StructureCellEditStore }, { type: i20.ColumnFieldFactory }, { type: i21.RowSelectionTypeArchive }, { type: i22.FormationPublisher }, { type: i23.SearchEventRepository }, { type: i24.StructureHeaderBottomEnabledArchive }, { type: i25.SchemaEventRepository }, { type: i26.TranslationFacade }, { type: i27.StructureInitialValuesReadyArchive }]; }, propDecorators: { maxHeight: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBZXZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBV3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHOUUsZ0JBQWdCO0FBRWhCLE1BQU0sT0FBZ0IsZ0JBQWlCLFNBQVEsY0FBYztJQXlFNUQsWUFDb0IsaUJBQW9DLEVBQ3ZELFVBQXNCLEVBQ0wsc0JBQThDLEVBQ3hELFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLFFBQStCLEVBQy9CLHVCQUEyQyxFQUMzQyxnQ0FBaUQsRUFDakQscUJBQTRDLEVBQzVDLHFCQUF1QyxFQUN2QyxvQkFBcUMsRUFDckMsb0JBQXFDLEVBQ3JDLGtCQUFzQyxFQUN0QyxvQkFBcUMsRUFDckMsNEJBQWtELEVBQ2xELDBCQUFzRCxFQUN0RCxxQkFBK0MsRUFDL0Msd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCwrQkFBZ0UsRUFDaEUsc0JBQThDLEVBQzlDLGtCQUFzQyxFQUN0Qyx1QkFBZ0QsRUFDaEQsMEJBQThDLEVBQzlDLHFCQUE0QyxFQUM1QyxtQ0FBd0UsRUFDeEUscUJBQTRDLEVBQzVDLGtCQUFxQyxFQUNyQyxrQ0FBc0U7UUFFaEYs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QUFNO2dCQUlQLGVBQWU7c0JBRGQsTUFBTTtnQkFJUCxnQkFBZ0I7c0JBRGYsTUFBTTtnQkFJUCxpQkFBaUI7c0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdGVkSXRlbU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9lZGl0L2VkaXRlZC1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL3NvdXJjZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9lZGl0L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2NoZW1hL2FwaS9zY2hlbWEucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9hcGkvc29ydGluZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VhcmNoUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2gucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2wxMG4vYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvcmVhZHkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IENlbGxFZGl0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUdhdGV3YXkgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHQvKiogKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblxuXHQvLyBET0VTTlQgV09SSyBXSVRIIEdBVEVcblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblxuXHQvLyBET0VTTlQgV09SSyBXSVRIIEdBVEVcblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+O1xuXG5cdC8vIEBJbnB1dCgpXG5cdC8vIGZpbHRlcmluZzogYm9vbGVhbiB8IEZpbHRlckNvbmZpZztcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW4gfCBDZWxsRWRpdENvbmZpZztcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblxuXHQvKiogKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHR0aGVtZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTY2hlbWFUaGVtZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlZEl0ZW1Nb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyOiBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI7XG5cblx0cHJpdmF0ZSBjaGFuZ2VBZnRlckluaXQgPSBmYWxzZTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQXV0b0NvbmZpZ3VyYXRvcjogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcixcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYVB1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25QdWJsaXNoZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5OiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRwcm90ZWN0ZWQgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0cHJvdGVjdGVkIHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgc2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmU6IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmVcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIgPSBuZXcgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyKHN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCwgY29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdFx0Y29sdW1uQXV0b0NvbmZpZ3VyYXRvciwgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcik7XG5cblx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXREZWZhdWx0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVHYXRld2F5Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuZWRpdE1vZGUsICgpID0+IHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm5leHQodGhpcy5lZGl0TW9kZSk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5jZWxsRWRpdGluZywgKCkgPT4ge1xuXG5cdFx0XHRsZXQgZWRpdGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmNlbGxFZGl0aW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0ZWRpdGluZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmNlbGxFZGl0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlZGl0aW5nQ29uZmlnID0gdGhpcy5jZWxsRWRpdGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRDZWxsRWRpdChlZGl0aW5nQ29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLndpZHRoLCAod2lkdGgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnRoZW1lLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoaXMudGhlbWUsIHRoaXMuc2NoZW1hSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucm93SGVpZ2h0LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldFJvd0hlaWdodCh0aGlzLnJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5hdXRvUmVzaXplV2lkdGgsICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aCh0aGlzLmF1dG9SZXNpemVXaWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIENvbHVtbnNcblx0XHQgKi9cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlci5oYW5kbGUoY2hhbmdlcyk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5tYXhIZWlnaHQsICgpID0+IHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Q29udGFpbmVySGVpZ2h0KHRoaXMubWF4SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5zb3VyY2UsICgpID0+IHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Db2x1bW5zQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1uc0NoYW5nZWQuZW1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWVzOiBFZGl0ZWRJdGVtTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVI6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0U3VibWl0dGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRDYW5jZWxlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeS5vblRoZW1lQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKSxcblx0XHRcdHRoaXMudGhlbWVDaGFuZ2VkXG5cdFx0KTtcblxuXHRcdHRoaXMuY29tcG9uZW50SW5pdGlhbGl6ZWQoKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBjb21wb25lbnRJbml0aWFsaXplZCgpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZUFmdGVySW5pdCA9IHRydWU7XG5cdH1cblxufVxuIl19