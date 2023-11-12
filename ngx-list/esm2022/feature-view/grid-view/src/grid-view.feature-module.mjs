import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModalThemeService, FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, CoreContainer, EVENT_LOGGER_ENABLED, initHermesApi, runHermes } from '@generic-ui/hermes';
import { fabricImports } from './structure-fabric.imports';
import { PagingFeatureModule } from '../../../feature/structure/paging/src/paging.feature-module';
import { StructureInfoPanelModule } from './panel/info/structure.info-panel.module';
import { StructureComponent } from './structure/structure.component';
import { StructureHeaderComponent } from './header/structure-header.component';
import { StructureHeaderColumnsComponent } from './header/column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from './header/filters/structure.header-filter.component';
import { StructureContentComponent } from './content/structure-content.component';
import { StructureRowComponent } from './content/row/structure-row.component';
import { StructureCellComponent } from './content/cell/structure.cell.component';
import { StructureContainerComponent } from './content/container/structure-container.component';
import { StructureQuickFiltersComponent } from './header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from './blueprint/structure.blueprint.component';
import { STRUCTURE_CSS_CLASS_NAME } from './blueprint/structure-tokens';
import { StructureDefinition } from './structure/structure-definition';
import { StructureIdGenerator } from './structure/structure-id.generator';
import { LoggerModule } from '../../../feature/common/cdk/src/logger/logger.module';
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
import { SchemaManagerModule } from '../../../feature/schema/src/manager/schema-manager.module';
import { SummariesFeatureModule } from '../../../feature/structure/summaries/src/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../../feature/structure/vertical-formation/src/vertical-formation.feature-module';
import { SchemaFeatureModule } from '../../../feature/schema/src/schema.feature-module';
import { CompositionFeatureModule } from '../../../feature/composition/src/composition.feature-module';
import { TranslationFeatureModule } from '../../../feature/l10n/src/translation.feature-module';
import { StructureHeaderGroupsComponent } from './header/group/structure-header-groups.component';
import { structureGates } from './structure/gate/structure.gates';
import { FilterMenuFeatureModule } from '../../../feature/structure/filter/src/menu/filter-menu.feature-module';
import { SourceFeatureModule } from '../../../feature/structure/source/src/source.feature-module';
import { StructureSharedModule } from '../../../feature/structure/common/src/structure-shared.module';
import { SanitizeModule } from '../../../feature/common/cdk/src/sanitize/sanitize.module';
import { ResizeDetectorModule } from '../../../feature/common/cdk/src/resize-detector/resize-detector.module';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { FormationFeatureModule } from '../../../feature/structure/formation/src/formation.feature-module';
import { StructureArrowIconModule } from '../../../feature/common/icons/arrow/structure.arrow-icon.module';
import { StructureMenuIconModule } from '../../../feature/common/icons/menu/structure.menu-icon.module';
import { initializeStructure } from '../../../core/structure/structure-core/src/api/structure.api-module';
import { StructurePublisher } from '../../../core/structure/structure-core/src/api/structure.publisher';
import { StructureWarehouse } from '../../../core/structure/structure-core/src/api/structure.warehouse';
import { StructureInitialValuesReadyArchive } from '../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive';
import { initializeListView } from '../../../core/list-view/src/api/list-view.api-module';
import { GuiTemplateModule } from '../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "./structure/gate/column/header/structure-column-header.gate";
import * as i2 from "./structure/gate/paging/structure-paging.gate";
import * as i3 from "./structure/gate/searching/structure-searching.gate";
import * as i4 from "./structure/gate/source/structure-selection.gate";
import * as i5 from "./structure/gate/l10n/structure-l10n.gate";
import * as i6 from "./structure/gate/panel/structure-panel.gate";
import * as i7 from "./structure/gate/row/detail/structure-row-detail.gate";
import * as i8 from "./structure/gate/column/menu/structure-column-menu.gate";
import * as i9 from "../../../feature/structure/summaries/src/gate/structure-summaries.gate";
import * as i10 from "./structure/gate/panel/info/structure-info-panel.gate";
import * as i11 from "./structure/gate/row/class/structure-row-class.gate";
import * as i12 from "./structure/gate/row/style/structure-row-style.gate";
import * as i13 from "./structure/gate/row/coloring/structure-row-coloring.gate";
import * as i14 from "../../../feature/schema/src/gate/grid/theme-grid.gate";
import * as i15 from "../../../feature/structure/sorting/src/gate/structure-sorting.gate";
import * as i16 from "./structure/gate/source/source-loading.gate";
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
    GuiTemplateModule,
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
    platformId;
    static HERMES_API = 'hermesApi';
    static exportDeclarations = Array.from(exportDeclarations);
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
    constructor(platformId) {
        this.platformId = platformId;
        runHermes();
        if (isPlatformBrowser(this.platformId)) {
            initHermesApi();
            window[GridViewFeatureModule.HERMES_API].loggers = false;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
            StructureHeaderComponent,
            StructureHeaderColumnsComponent,
            StructureHeaderGroupsComponent,
            StructureHeaderFiltersComponent,
            StructureHeaderFilterComponent,
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
            GuiTemplateModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, ResizeDetectorModule,
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GridViewFeatureModule, imports: [imports, FabricModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, PagingFeatureModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GridViewFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        imports
                    ],
                    declarations,
                    exports: exportDeclarations
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9ncmlkLXZpZXcuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDM0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDM0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDakosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUYsTUFBTSxVQUFVLDhCQUE4QjtJQUM3QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QjtJQUN4QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLHlDQUF5QztJQUN4RCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDakMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFO0lBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtJQUN0RSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUseUNBQXlDLEVBQUU7Q0FDdEcsQ0FBQztBQUdGLE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxJQUFJLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLEtBQUssR0FBRztJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDdkIsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBRWpCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGFBQWE7SUFDYixvQkFBb0I7SUFFcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFFOUIsbUJBQW1CO0lBRW5CLHFCQUFxQjtJQUVyQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBRW5CLHdCQUF3QjtJQUV4Qix3QkFBd0I7SUFFeEIsWUFBWTtJQUNaLGNBQWM7SUFFZCxLQUFLO0NBRUwsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0IsY0FBYztDQUNkLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFHO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBRTNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztDQUNkLENBQUM7QUFHRixNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxNQUFNLFVBQVUsOEJBQThCO0lBQzdDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxrQkFBa0IsRUFBRSxDQUFDO0FBQ3JCLG1CQUFtQixFQUFFLENBQUM7QUFTdEIsTUFBTSxPQUFPLHFCQUFxQjtJQTBDSDtJQXhDdEIsTUFBTSxDQUFVLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFFakQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUUzRCxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUF5QztRQUMxRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7S0FDdEM7UUFDQSxPQUFPO1lBQ04sUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZO2lCQUN0QztnQkFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDekYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZGO29CQUNDLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUseUJBQXlCO2lCQUNyQztnQkFDRCxXQUFXO2dCQUNYLHVCQUF1QjtnQkFFdkIsb0JBQW9CO2dCQUVwQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7Z0JBQ2xGLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtnQkFFaEYsa0JBQWtCO2FBRWxCO1NBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxZQUM4QixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUc1QyxTQUFTLEVBQUUsQ0FBQztRQUVaLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQzt1R0FwRFcscUJBQXFCLGtCQTBDeEIsV0FBVzt3R0ExQ1IscUJBQXFCLGlCQXJEakMsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4QiwrQkFBK0I7WUFDL0IsOEJBQThCO1lBQzlCLCtCQUErQjtZQUMvQiw4QkFBOEI7WUFDOUIseUJBQXlCO1lBQ3pCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQywyQkFBMkI7WUFDM0IsOEJBQThCO1lBQzlCLDJCQUEyQjtZQUMzQiwrQkFBK0I7WUFDL0IsNEJBQTRCO1lBQzVCLDZCQUE2QiwrZkEzRDdCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLGlCQUFpQixzZ0JBTWpCLG9CQUFvQjtZQUVwQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsc0JBQXNCO1lBQ3RCLDhCQUE4QjtZQUU5QixtQkFBbUI7WUFFbkIscUJBQXFCO1lBRXJCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixtQkFBbUI7WUFFbkIsd0JBQXdCO1lBRXhCLHdCQUF3QjtZQUV4QixZQUFZO1lBQ1osY0FBYyxFQXpDZCx3QkFBd0I7WUFDeEIsdUJBQXVCLGFBcUV2QixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIscUJBQXFCO1lBQ3JCLDJCQUEyQixzZ0JBRzNCLG1CQUFtQjt3R0F1QlAscUJBQXFCLFlBTGhDLE9BQU8sRUExQlIsWUFBWSxzZ0JBUVosbUJBQW1COzsyRkF1QlAscUJBQXFCO2tCQVBqQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixPQUFPO3FCQUNQO29CQUNELFlBQVk7b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtpQkFDM0I7OzBCQTJDRSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29yZUNvbnRhaW5lciwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIGluaXRIZXJtZXNBcGksIHJ1bkhlcm1lcyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY29udGFpbmVyL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL2JsdWVwcmludC9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL3NyYy9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY29yZS1yZWFkL2l0ZW0vaXRlbS5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSB9IGZyb20gJy4vaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvc29ydGluZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWVsZC9zcmMvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zcmMvc2NoZW1hLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvbDEwbi9zcmMvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZ3JvdXAvc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZUdhdGVzIH0gZnJvbSAnLi9zdHJ1Y3R1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXMnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2NvbW1vbi9zcmMvc3RydWN0dXJlLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvc3JjL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNpemVEZXRlY3Rvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9zcmMvcmVzaXplLWRldGVjdG9yL3Jlc2l6ZS1kZXRlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvYXJyb3cvc3RydWN0dXJlLmFycm93LWljb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvbWVudS9zdHJ1Y3R1cmUubWVudS1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3JlYWR5L3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IGluaXRpYWxpemVMaXN0VmlldyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUNvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZVB1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZVdhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZVByb3ZpZGVycyA9IFtcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVdhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZVdhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIH1cbl07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cbmNvbnN0IGljb25zID0gW1xuXHRTdHJ1Y3R1cmVBcnJvd0ljb25Nb2R1bGUsXG5cdFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlXG5dO1xuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRDb21tb25Nb2R1bGUsXG5cdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0R3VpVGVtcGxhdGVNb2R1bGUsXG5cblx0Ly8gLndpdGhDb25maWcoe1xuXHQvLyBcdGxvZ2dlcnM6IGZhbHNlXG5cdC8vIH0pLFxuXHRmYWJyaWNJbXBvcnRzLFxuXHRSZXNpemVEZXRlY3Rvck1vZHVsZSxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRTb3J0aW5nRmVhdHVyZU1vZHVsZSxcblx0RmllbGRGZWF0dXJlTW9kdWxlLFxuXHRGb3JtYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblx0U291cmNlRmVhdHVyZU1vZHVsZSxcblx0U3VtbWFyaWVzRmVhdHVyZU1vZHVsZSxcblx0VmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdFNjaGVtYUZlYXR1cmVNb2R1bGUsXG5cblx0U3RydWN0dXJlU2hhcmVkTW9kdWxlLFxuXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFNjaGVtYU1hbmFnZXJNb2R1bGUsXG5cblx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGUsXG5cdFNhbml0aXplTW9kdWxlLFxuXG5cdGljb25zXG5cbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50LFxuXG5cdHN0cnVjdHVyZUdhdGVzXG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXG5cdGZhYnJpY0ltcG9ydHMsXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdHN0cnVjdHVyZUdhdGVzXG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRmFicmljTW9kYWxUaGVtZVNlcnZpY2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpO1xufVxuXG5pbml0aWFsaXplTGlzdFZpZXcoKTtcbmluaXRpYWxpemVTdHJ1Y3R1cmUoKTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdGltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBIRVJNRVNfQVBJID0gJ2hlcm1lc0FwaSc7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdyaWRWaWV3RmVhdHVyZU1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3JpZFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRJdGVtRmFjdG9yeSxcblx0XHRcdFx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0XHRcdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0sXG5cblx0XHRcdFx0c3RydWN0dXJlUHJvdmlkZXJzXG5cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnlcblx0KSB7XG5cblx0XHRydW5IZXJtZXMoKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpbml0SGVybWVzQXBpKCk7XG5cdFx0XHR3aW5kb3dbR3JpZFZpZXdGZWF0dXJlTW9kdWxlLkhFUk1FU19BUEldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=