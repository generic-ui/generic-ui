import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModalThemeService, FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, CoreContainer, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from './structure-fabric.imports';
import { PagingFeatureModule } from '../../../feature/structure/paging/src/paging.feature-module';
import { StructureInfoPanelModule } from './panel/info/structure.info-panel.module';
import { StructureComponent } from './structure.component';
import { StructureHeaderComponent } from './header/structure-header.component';
import { StructureHeaderColumnsComponent } from './header/column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from './header/filters/structure.header-filter.component';
import { StructureContentComponent } from './content/structure-content.component';
import { StructureRowComponent } from './content/row/structure-row.component';
import { StructureCellComponent } from './content/cell/structure.cell.component';
import { StructureContainerComponent } from './content/structure-container.component';
import { StructureQuickFiltersComponent } from './header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from './blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from './header/menu/config/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './blueprint/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { LoggerModule } from '../../../feature/common/src/cdk/logger/logger.module';
import { ItemFactory } from '../../../core/structure/source/src/core-read/item/item.factory';
import { StructureTopPanelModule } from './panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from './header/menu/structure.column-menu.module';
import { StructureColumnManagerModule } from './column-manager/structure.column-manager.module';
import { StructureCellEditComponent } from './content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from './schema/structure.theme.converter';
import { StructureCellEditBooleanComponent } from './content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from './row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from './panel/banner-panels/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from './panel/banner-panels/footer-panel/structure.footer-panel.component';
import { EmptySourceFeatureModule } from '../../../feature/structure/source/src/empty/empty-source.feature-module';
import { SortingFeatureModule } from '../../../feature/structure/sorting/src/sorting.feature-module';
import { FieldFeatureModule } from '../../../feature/structure/field/src/field.feature-module';
import { SearchFeatureModule } from '../../../feature/structure/search/src/search.feature-module';
import { SchemaManagerModule } from '../../../feature/schema/manager/schema-manager.module';
import { SelectAllComponent } from './header/column/select-all/select-all.component';
import { SummariesFeatureModule } from '../../../feature/structure/summaries/src/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../../feature/structure/vertical-formation/src/vertical-formation.feature-module';
import { SchemaFeatureModule } from '../../../feature/schema/schema.feature-module';
import { CompositionFeatureModule } from '../../../feature/composition/src/composition.feature-module';
import { TranslationFeatureModule } from '../../../feature/l10n/translation.feature-module';
import { StructureHeaderGroupsComponent } from './header/group/structure-header-groups.component';
import { structureGates } from './gate/structure.gates';
import { FilterMenuFeatureModule } from '../../../feature/structure/filter/src/menu/filter-menu.feature-module';
import { SourceFeatureModule } from '../../../feature/structure/source/src/source.feature-module';
import { StructureSharedModule } from '../../../feature/structure/common/src/structure-shared.module';
import { SanitizeModule } from '../../../feature/common/src/cdk/sanitize/sanitize.module';
import { ResizeDetectorModule } from '../../../feature/common/src/cdk/resize-detector/resize-detector.module';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { FormationFeatureModule } from '../../../feature/structure/formation/src/formation.feature-module';
import { StructureArrowIconModule } from '../../../feature/common/src/icons/arrow/structure.arrow-icon.module';
import { StructureMenuIconModule } from '../../../feature/common/src/icons/menu/structure.menu-icon.module';
import { initializeStructure } from '../../../core/structure/structure-core/src/api/structure.api-module';
import { StructurePublisher } from '../../../core/structure/structure-core/src/api/structure.publisher';
import { StructureWarehouse } from '../../../core/structure/structure-core/src/api/structure.warehouse';
import { StructureInitialValuesReadyArchive } from '../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive';
import { initializeListView } from '../../../core/list-view/src/api/list-view.api-module';
import { SelectCustomComponent } from './header/column/select-custom/select-custom.component';
import { SelectCustomModalComponent } from './header/column/select-custom/select-custom-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "./gate/column/header/structure-column-header.gate";
import * as i2 from "./gate/paging/structure-paging.gate";
import * as i3 from "./gate/searching/structure-searching.gate";
import * as i4 from "./gate/source/structure-selection.gate";
import * as i5 from "./gate/l10n/structure-l10n.gate";
import * as i6 from "./gate/panel/structure-panel.gate";
import * as i7 from "./gate/row/detail/structure-row-detail.gate";
import * as i8 from "./gate/column/menu/structure-column-menu.gate";
import * as i9 from "../../../feature/structure/summaries/src/gate/structure-summaries.gate";
import * as i10 from "./gate/panel/info/structure-info-panel.gate";
import * as i11 from "./gate/row/class/structure-row-class.gate";
import * as i12 from "./gate/row/style/structure-row-style.gate";
import * as i13 from "./gate/row/coloring/structure-row-coloring.gate";
import * as i14 from "../../../feature/schema/gate/grid/theme-grid.gate";
import * as i15 from "../../../feature/structure/sorting/src/gate/structure-sorting.gate";
import * as i16 from "./gate/source/source-loading.gate";
import * as i17 from "../../../feature/structure/filter/src/gate/structure-filter.gate";
import * as i18 from "../../../feature/structure/filter/src/gate/structure-quick-filters.gate";
import * as i19 from "../../../feature/structure/vertical-formation/src/gate/vertical-formation.gate";
import * as i20 from "@generic-ui/fabric";
export function provideStructureCommandInvoker() {
    return CoreContainer.resolve(StructurePublisher);
}
export function provideStructureWarehouse() {
    return CoreContainer.resolve(StructureWarehouse);
}
export function provideStructureInitialValuesReadyArchive() {
    return CoreContainer.resolve(StructureInitialValuesReadyArchive);
}
export const structureProviders = [
    { provide: StructurePublisher, useFactory: provideStructureCommandInvoker },
    { provide: StructureWarehouse, useFactory: provideStructureWarehouse },
    { provide: StructureInitialValuesReadyArchive, useFactory: provideStructureInitialValuesReadyArchive }
];
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
const icons = [
    StructureArrowIconModule,
    StructureMenuIconModule
];
const imports = [
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    // .withConfig({
    // 	loggers: false
    // }),
    fabricImports,
    ResizeDetectorModule,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    FormationFeatureModule,
    SearchFeatureModule,
    FilterMenuFeatureModule,
    SourceFeatureModule,
    SummariesFeatureModule,
    VerticalFormationFeatureModule,
    SchemaFeatureModule,
    StructureSharedModule,
    StructureInfoPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    SchemaManagerModule,
    EmptySourceFeatureModule,
    CompositionFeatureModule,
    LoggerModule,
    SanitizeModule,
    icons
];
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderGroupsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
    SelectCustomComponent,
    SelectCustomModalComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent,
    structureGates
];
const entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    fabricImports,
    PagingFeatureModule,
    structureGates
];
export function provideStructureCellEditArchive() {
    return CoreContainer.resolve(StructureCellEditArchive);
}
export function provideFabricModalThemeService() {
    return CoreContainer.resolve(FabricModalThemeService);
}
initializeListView();
initializeStructure();
export class GridViewFeatureModule {
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window[GridViewFeatureModule.HERMES_API].loggers = false;
        }
    }
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
        return {
            ngModule: GridViewFeatureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: 'structure'
                },
                {
                    provide: StructureDefinition,
                    useFactory: createStructureDefinition
                },
                ItemFactory,
                StructureThemeConverter,
                StructureIdGenerator,
                { provide: StructureCellEditArchive, useFactory: provideStructureCellEditArchive },
                { provide: FabricModalThemeService, useFactory: provideFabricModalThemeService },
                structureProviders
            ]
        };
    }
}
GridViewFeatureModule.HERMES_API = 'hermesApi';
GridViewFeatureModule.exportDeclarations = Array.from(exportDeclarations);
GridViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
GridViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
        StructureHeaderComponent,
        StructureHeaderColumnsComponent,
        StructureHeaderGroupsComponent,
        StructureHeaderFiltersComponent,
        StructureHeaderFilterComponent,
        SelectAllComponent,
        SelectCustomComponent,
        SelectCustomModalComponent,
        StructureContentComponent,
        StructureRowComponent,
        StructureCellComponent,
        StructureCellEditComponent,
        StructureCellEditBooleanComponent,
        StructureContainerComponent,
        StructureQuickFiltersComponent,
        StructureBlueprintComponent,
        StructureRowDetailViewComponent,
        StructureTitlePanelComponent,
        StructureFooterPanelComponent, i1.StructureColumnHeaderGate, i2.StructurePagingGate, i3.StructureSearchingGate, i4.StructureSelectionGate, i5.StructureL10nGate, i6.StructurePanelGate, i7.StructureRowDetailGate, i8.StructureColumnMenuGate, i9.StructureSummariesGate, i10.StructureInfoPanelGate, i11.StructureRowClassGate, i12.StructureRowStyleGate, i13.StructureRowColoringGate, i14.ThemeGridGate, i15.StructureSortingGate, i16.SourceLoadingGate, i17.StructureFilterGate, i18.StructureQuickFiltersGate, i19.VerticalFormationGate], imports: [CommonModule,
        ReactiveFormsModule,
        TranslationFeatureModule,
        HermesModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, ResizeDetectorModule,
        PagingFeatureModule,
        SortingFeatureModule,
        FieldFeatureModule,
        FormationFeatureModule,
        SearchFeatureModule,
        FilterMenuFeatureModule,
        SourceFeatureModule,
        SummariesFeatureModule,
        VerticalFormationFeatureModule,
        SchemaFeatureModule,
        StructureSharedModule,
        StructureInfoPanelModule,
        StructureTopPanelModule,
        StructureColumnMenuModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        EmptySourceFeatureModule,
        CompositionFeatureModule,
        LoggerModule,
        SanitizeModule, StructureArrowIconModule,
        StructureMenuIconModule], exports: [FabricModule,
        StructureComponent,
        StructureHeaderComponent,
        StructureContentComponent,
        StructureRowComponent,
        StructureContainerComponent, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, PagingFeatureModule, i1.StructureColumnHeaderGate, i2.StructurePagingGate, i3.StructureSearchingGate, i4.StructureSelectionGate, i5.StructureL10nGate, i6.StructurePanelGate, i7.StructureRowDetailGate, i8.StructureColumnMenuGate, i9.StructureSummariesGate, i10.StructureInfoPanelGate, i11.StructureRowClassGate, i12.StructureRowStyleGate, i13.StructureRowColoringGate, i14.ThemeGridGate, i15.StructureSortingGate, i16.SourceLoadingGate, i17.StructureFilterGate, i18.StructureQuickFiltersGate, i19.VerticalFormationGate] });
GridViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, imports: [imports, FabricModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, PagingFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        imports
                    ],
                    declarations,
                    exports: exportDeclarations,
                    entryComponents
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9ncmlkLXZpZXcuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFD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O1FBQ3hCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUVuQix3QkFBd0I7UUFFeEIsd0JBQXdCO1FBRXhCLFlBQVk7UUFDWixjQUFjLEVBekNkLHdCQUF3QjtRQUN4Qix1QkFBdUIsYUE4RXZCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsMkJBQTJCLHNnQkFHM0IsbUJBQW1CO21IQXdCUCxxQkFBcUIsWUFOaEMsT0FBTyxFQTFCUixZQUFZLHNnQkFRWixtQkFBbUI7MkZBd0JQLHFCQUFxQjtrQkFSakMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsT0FBTztxQkFDUDtvQkFDRCxZQUFZO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWU7aUJBQ2Y7OzBCQTBDYSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29yZUNvbnRhaW5lciwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2NvbHVtbi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9xdWljay1maWx0ZXJzL3N0cnVjdHVyZS5xdWljay1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgfSBmcm9tICcuL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi9ibHVlcHJpbnQvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2NvcmUtcmVhZC9pdGVtL2l0ZW0uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL2Jvb2xlYW4vc3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9yb3ctZGV0YWlsL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc3JjL3NvcnRpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2ZpZWxkLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlbWFNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zY2hlbWEvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2dyb3VwL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHYXRlcyB9IGZyb20gJy4vZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXMnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2NvbW1vbi9zcmMvc3RydWN0dXJlLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNpemVEZXRlY3Rvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvcmVzaXplLWRldGVjdG9yL3Jlc2l6ZS1kZXRlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2ljb25zL2Fycm93L3N0cnVjdHVyZS5hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9pY29ucy9tZW51L3N0cnVjdHVyZS5tZW51LWljb24ubW9kdWxlJztcbmltcG9ydCB7IGluaXRpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZHkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3RDdXN0b21Db21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW4vc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDdXN0b21Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2NvbHVtbi9zZWxlY3QtY3VzdG9tL3NlbGVjdC1jdXN0b20tbW9kYWwuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZVdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVXYXJlaG91c2UgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9XG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5jb25zdCBpY29ucyA9IFtcblx0U3RydWN0dXJlQXJyb3dJY29uTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZVxuXTtcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdGZhYnJpY0ltcG9ydHMsXG5cdFJlc2l6ZURldGVjdG9yTW9kdWxlLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFNvcnRpbmdGZWF0dXJlTW9kdWxlLFxuXHRGaWVsZEZlYXR1cmVNb2R1bGUsXG5cdEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRTdW1tYXJpZXNGZWF0dXJlTW9kdWxlLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0U2NoZW1hRmVhdHVyZU1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVTaGFyZWRNb2R1bGUsXG5cblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblxuXHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZSxcblx0U2FuaXRpemVNb2R1bGUsXG5cblx0aWNvbnNcblxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEFsbENvbXBvbmVudCxcblx0U2VsZWN0Q3VzdG9tQ29tcG9uZW50LFxuXHRTZWxlY3RDdXN0b21Nb2RhbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCxcblxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnRcbl07XG5cblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHRmYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKTtcbn1cblxuaW5pdGlhbGl6ZUxpc3RWaWV3KCk7XG5pbml0aWFsaXplU3RydWN0dXJlKCk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRpbXBvcnRzXG5cdF0sXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBIRVJNRVNfQVBJID0gJ2hlcm1lc0FwaSc7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdyaWRWaWV3RmVhdHVyZU1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3JpZFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRJdGVtRmFjdG9yeSxcblx0XHRcdFx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0XHRcdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0sXG5cblx0XHRcdFx0c3RydWN0dXJlUHJvdmlkZXJzXG5cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93W0dyaWRWaWV3RmVhdHVyZU1vZHVsZS5IRVJNRVNfQVBJXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==