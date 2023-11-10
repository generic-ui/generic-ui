import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ifChanged } from '../../../../../feature/common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/composition/src/api/column/auto/column-auto.configurator";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/composition/src/api/global/composition.id";
import * as i4 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i5 from "../../../../../core/structure/structure-core/src/api/structure.publisher";
import * as i6 from "../../../../../core/structure/paging/src/api/paging.publisher";
import * as i7 from "../../../../../core/structure/paging/src/api/paging.event-repository";
import * as i8 from "../../../../../core/structure/sorting/src/api/sorting.publisher";
import * as i9 from "../../../../../core/structure/search/src/api/search.publisher";
import * as i10 from "../../../../../core/structure/source/src/api/source.publisher";
import * as i11 from "../../../../../core/structure/source/src/api/edit/source-event.service";
import * as i12 from "../../../../../core/schema/src/api/schema.publisher";
import * as i13 from "../../../../../core/composition/src/api/composition.publisher";
import * as i14 from "../../../../../core/composition/src/api/composition.event-repository";
import * as i15 from "../../../../../core/structure/formation/src/api/formation.event-repository";
import * as i16 from "../../edit/structure.edit-mode.archive";
import * as i17 from "../../edit/structure.cell-edit.archive";
import * as i18 from "./panel/info/structure.info-panel-config.service";
import * as i19 from "../../edit/structure.cell-edit.store";
import * as i20 from "../../../../../core/composition/src/domain/column/field/colum-field.factory";
import * as i21 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i22 from "../../../../../core/structure/search/src/api/search.event-repository";
import * as i23 from "../../header/structure-header-bottom-enabled.archive";
import * as i24 from "../../../../../core/schema/src/api/schema.event-repository";
import * as i25 from "../../../../../core/l10n/src/api/translation.facade";
import * as i26 from "../../../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive";
/** @internal */
export class StructureGateway extends SmartComponent {
    changeDetectorRef;
    columnAutoConfigurator;
    structureId;
    compositionId;
    schemaId;
    structureCommandInvoker;
    structurePagingCommandDispatcher;
    pagingEventRepository;
    sortingCommandInvoker;
    searchCommandInvoker;
    sourceCommandService;
    sourceEventService;
    schemaCommandInvoker;
    compositionCommandDispatcher;
    compositionEventRepository;
    formationEventService;
    structureEditModeArchive;
    structureCellEditArchive;
    structureInfoPanelConfigService;
    structureCellEditStore;
    columnFieldFactory;
    formationCommandDispatcher;
    searchEventRepository;
    structureHeaderBottomEnabledArchive;
    schemaEventRepository;
    translationService;
    structureInitialValuesReadyArchive;
    /** *********************
     * INPUTS
     ***********************/
    maxHeight;
    width;
    rowHeight;
    autoResizeWidth;
    // DOESNT WORK WITH GATE
    source = [];
    // DOESNT WORK WITH GATE
    columns;
    // @Input()
    // filtering: boolean | FilterConfig;
    // @Input()
    // quickFilters: boolean | QuickFiltersConfig;
    editMode;
    cellEditing;
    theme;
    /** *********************
     * OUTPUTS
     ***********************/
    themeChanged = new EventEmitter();
    columnsChanged = new EventEmitter();
    containerWidthChanged = new EventEmitter();
    sourceEdited = new EventEmitter();
    cellEditEntered = new EventEmitter();
    cellEditCanceled = new EventEmitter();
    cellEditSubmitted = new EventEmitter();
    structureColumnInputHandler;
    changeAfterInit = false;
    constructor(changeDetectorRef, elementRef, columnAutoConfigurator, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandInvoker, searchCommandInvoker, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
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
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.translationService = translationService;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureGateway, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.ColumnAutoConfigurator }, { token: i2.StructureId }, { token: i3.CompositionId }, { token: i4.SchemaReadModelRootId }, { token: i5.StructurePublisher }, { token: i6.PagingPublisher }, { token: i7.PagingEventRepository }, { token: i8.SortingPublisher }, { token: i9.SearchPublisher }, { token: i10.SourcePublisher }, { token: i11.SourceEventService }, { token: i12.SchemaPublisher }, { token: i13.CompositionPublisher }, { token: i14.CompositionEventRepository }, { token: i15.FormationEventRepository }, { token: i16.StructureEditModeArchive }, { token: i17.StructureCellEditArchive }, { token: i18.StructureInfoPanelConfigService }, { token: i19.StructureCellEditStore }, { token: i20.ColumnFieldFactory }, { token: i21.FormationPublisher }, { token: i22.SearchEventRepository }, { token: i23.StructureHeaderBottomEnabledArchive }, { token: i24.SchemaEventRepository }, { token: i25.TranslationFacade }, { token: i26.StructureInitialValuesReadyArchive }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureGateway, inputs: { maxHeight: "maxHeight", width: "width", rowHeight: "rowHeight", autoResizeWidth: "autoResizeWidth", source: "source", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", theme: "theme" }, outputs: { themeChanged: "themeChanged", columnsChanged: "columnsChanged", containerWidthChanged: "containerWidthChanged", sourceEdited: "sourceEdited", cellEditEntered: "cellEditEntered", cellEditCanceled: "cellEditCanceled", cellEditSubmitted: "cellEditSubmitted" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureGateway, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ColumnAutoConfigurator }, { type: i2.StructureId }, { type: i3.CompositionId }, { type: i4.SchemaReadModelRootId }, { type: i5.StructurePublisher }, { type: i6.PagingPublisher }, { type: i7.PagingEventRepository }, { type: i8.SortingPublisher }, { type: i9.SearchPublisher }, { type: i10.SourcePublisher }, { type: i11.SourceEventService }, { type: i12.SchemaPublisher }, { type: i13.CompositionPublisher }, { type: i14.CompositionEventRepository }, { type: i15.FormationEventRepository }, { type: i16.StructureEditModeArchive }, { type: i17.StructureCellEditArchive }, { type: i18.StructureInfoPanelConfigService }, { type: i19.StructureCellEditStore }, { type: i20.ColumnFieldFactory }, { type: i21.FormationPublisher }, { type: i22.SearchEventRepository }, { type: i23.StructureHeaderBottomEnabledArchive }, { type: i24.SchemaEventRepository }, { type: i25.TranslationFacade }, { type: i26.StructureInitialValuesReadyArchive }]; }, propDecorators: { maxHeight: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9nYXRlL3N0cnVjdHVyZS5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFlN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFTOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFVdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3BGLGdCQUFnQjtBQUVoQixNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7SUEwRXhDO0lBRUY7SUFDVjtJQUNHO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQW5HWDs7NkJBRXlCO0lBR3pCLFNBQVMsQ0FBUztJQUdsQixLQUFLLENBQVM7SUFHZCxTQUFTLENBQVM7SUFHbEIsZUFBZSxDQUFVO0lBR3pCLHdCQUF3QjtJQUV4QixNQUFNLEdBQWUsRUFBRSxDQUFDO0lBR3hCLHdCQUF3QjtJQUV4QixPQUFPLENBQTBDO0lBRWpELFdBQVc7SUFDWCxxQ0FBcUM7SUFFckMsV0FBVztJQUNYLDhDQUE4QztJQUc5QyxRQUFRLENBQVU7SUFHbEIsV0FBVyxDQUEyQjtJQUd0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aEIsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQURyQyxTQUFTOytpQ0FRVCxTQUFTO3NCQURSLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixlQUFlO3NCQURkLEtBQUs7Z0JBTU4sTUFBTTtzQkFETCxLQUFLO2dCQU1OLE9BQU87c0JBRE4sS0FBSztnQkFVTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFTTixZQUFZO3NCQURYLE1BQU07Z0JBSVAsY0FBYztzQkFEYixNQUFNO2dCQUlQLHFCQUFxQjtzQkFEcEIsTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU07Z0JBSVAsZUFBZTtzQkFEZCxNQUFNO2dCQUlQLGdCQUFnQjtzQkFEZixNQUFNO2dCQUlQLGlCQUFpQjtzQkFEaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0ZWRJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9lZGl0L2VkaXRlZC1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9wYWdpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvZWRpdC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFNlYXJjaFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3JlYWR5L3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgQ2VsbEVkaXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcblxuXG4vKiogQGludGVybmFsICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuIHwgQ2VsbEVkaXRDb25maWc7XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZWRJdGVtTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjogU3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyO1xuXG5cdHByaXZhdGUgY2hhbmdlQWZ0ZXJJbml0ID0gZmFsc2U7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkF1dG9Db25maWd1cmF0b3I6IENvbHVtbkF1dG9Db25maWd1cmF0b3IsXG5cdFx0cHVibGljIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ1B1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvcnRpbmdDb21tYW5kSW52b2tlcjogU29ydGluZ1B1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaFB1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFQdWJsaXNoZXIsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXI6IENvbXBvc2l0aW9uUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0U3RvcmU6IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUsXG5cdFx0cHJvdGVjdGVkIGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZVxuXHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciA9IG5ldyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIoc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkLCBjb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0XHRjb2x1bW5BdXRvQ29uZmlndXJhdG9yLCBjb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyKTtcblxuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldERlZmF1bHRUcmFuc2xhdGlvbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUdhdGV3YXk+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5lZGl0TW9kZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmNlbGxFZGl0aW5nLCAoKSA9PiB7XG5cblx0XHRcdGxldCBlZGl0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuY2VsbEVkaXRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRlZGl0aW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuY2VsbEVkaXRpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVkaXRpbmdDb25maWcgPSB0aGlzLmNlbGxFZGl0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldENlbGxFZGl0KGVkaXRpbmdDb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMud2lkdGgsICh3aWR0aCkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFdpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMudGhlbWUsICgpID0+IHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhpcy50aGVtZSwgdGhpcy5zY2hlbWFJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5yb3dIZWlnaHQsICgpID0+IHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmF1dG9SZXNpemVXaWR0aCwgKCkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogQ29sdW1uc1xuXHRcdCAqL1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uSW5wdXRIYW5kbGVyLmhhbmRsZShjaGFuZ2VzKTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLm1heEhlaWdodCwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRDb250YWluZXJIZWlnaHQodGhpcy5tYXhIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnNvdXJjZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5zb3VyY2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkNvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkNvbnRhaW5lcldpZHRoQ2hhbmdlZCh0aGlzLmNvbXBvc2l0aW9uSWQudG9SZWFkTW9kZWxSb290SWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb250YWluZXJXaWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZVxuXHRcdFx0Lm9uU291cmNlRWRpdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlZEl0ZW1Nb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy50aGVtZUNoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRJbml0aWFsaXplZCgpO1xuXHR9XG5cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=