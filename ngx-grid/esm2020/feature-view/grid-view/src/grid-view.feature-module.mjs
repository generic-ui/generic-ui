import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModalThemeService, FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, CoreContainer, EVENT_LOGGER_ENABLED, initHermesApi, runHermes } from '@generic-ui/hermes';
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
import { StructureContainerComponent } from './content/container/structure-container.component';
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
import { SchemaManagerModule } from '../../../feature/schema/src/manager/schema-manager.module';
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
import * as i14 from "../../../feature/schema/src/gate/grid/theme-grid.gate";
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
        runHermes();
        initHermesApi();
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
GridViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
GridViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
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
        TranslationFeatureModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, ResizeDetectorModule,
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
GridViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GridViewFeatureModule, imports: [imports, FabricModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, PagingFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GridViewFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9ncmlkLXZpZXcuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDM0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDL0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDNUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDakosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsTUFBTSxVQUFVLDhCQUE4QjtJQUM3QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QjtJQUN4QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLHlDQUF5QztJQUN4RCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDakMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFO0lBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtJQUN0RSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUUseUNBQXlDLEVBQUU7Q0FDdEcsQ0FBQztBQUdGLE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxJQUFJLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLEtBQUssR0FBRztJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDdkIsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFFeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLG9CQUFvQjtJQUVwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUU5QixtQkFBbUI7SUFFbkIscUJBQXFCO0lBRXJCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFFbkIsd0JBQXdCO0lBRXhCLHdCQUF3QjtJQUV4QixZQUFZO0lBQ1osY0FBYztJQUVkLEtBQUs7Q0FFTCxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDcEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QixjQUFjO0NBQ2QsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDL0IsQ0FBQztBQUdGLE1BQU0sa0JBQWtCLEdBQUc7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFFM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2QsQ0FBQztBQUdGLE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVELE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVELGtCQUFrQixFQUFFLENBQUM7QUFDckIsbUJBQW1CLEVBQUUsQ0FBQztBQVV0QixNQUFNLE9BQU8scUJBQXFCO0lBeUNqQyxZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUV2RCxTQUFTLEVBQUUsQ0FBQztRQUNaLGFBQWEsRUFBRSxDQUFDO1FBRWhCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQztJQTVDRCxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUF5QztRQUMxRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7S0FDdEM7UUFDQSxPQUFPO1lBQ04sUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZO2lCQUN0QztnQkFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDekYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZGO29CQUNDLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUseUJBQXlCO2lCQUNyQztnQkFDRCxXQUFXO2dCQUNYLHVCQUF1QjtnQkFFdkIsb0JBQW9CO2dCQUVwQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7Z0JBQ2xGLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtnQkFFaEYsa0JBQWtCO2FBRWxCO1NBQ0QsQ0FBQztJQUNILENBQUM7O0FBckN1QixnQ0FBVSxHQUFHLFdBQVcsQ0FBQztBQUUxQyx3Q0FBa0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7a0hBSi9DLHFCQUFxQixrQkF5Q2IsV0FBVzttSEF6Q25CLHFCQUFxQixpQkE1RGpDLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1Qiw2QkFBNkIsK2ZBMUQ3QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHdCQUF3QixzZ0JBTXhCLG9CQUFvQjtRQUVwQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUU5QixtQkFBbUI7UUFFbkIscUJBQXFCO1FBRXJCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFFbkIsd0JBQXdCO1FBRXhCLHdCQUF3QjtRQUV4QixZQUFZO1FBQ1osY0FBYyxFQXhDZCx3QkFBd0I7UUFDeEIsdUJBQXVCLGFBMEV2QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLDJCQUEyQixzZ0JBRzNCLG1CQUFtQjttSEF3QlAscUJBQXFCLFlBTmhDLE9BQU8sRUExQlIsWUFBWSxzZ0JBUVosbUJBQW1COzJGQXdCUCxxQkFBcUI7a0JBUmpDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLE9BQU87cUJBQ1A7b0JBQ0QsWUFBWTtvQkFDWixPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlO2lCQUNmOzswQkEwQ2EsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsIEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIENvcmVDb250YWluZXIsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBpbml0SGVybWVzQXBpLCBydW5IZXJtZXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY29udGFpbmVyL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL2JsdWVwcmludC9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY29yZS1yZWFkL2l0ZW0vaXRlbS5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSB9IGZyb20gJy4vaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvc29ydGluZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWVsZC9zcmMvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2dyb3VwL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHYXRlcyB9IGZyb20gJy4vZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXMnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2NvbW1vbi9zcmMvc3RydWN0dXJlLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNpemVEZXRlY3Rvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvcmVzaXplLWRldGVjdG9yL3Jlc2l6ZS1kZXRlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2ljb25zL2Fycm93L3N0cnVjdHVyZS5hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9pY29ucy9tZW51L3N0cnVjdHVyZS5tZW51LWljb24ubW9kdWxlJztcbmltcG9ydCB7IGluaXRpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZHkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUpO1xufVxuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfVxuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvbigpIHtcblx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcbn1cblxuY29uc3QgaWNvbnMgPSBbXG5cdFN0cnVjdHVyZUFycm93SWNvbk1vZHVsZSxcblx0U3RydWN0dXJlTWVudUljb25Nb2R1bGVcbl07XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0ZmFicmljSW1wb3J0cyxcblx0UmVzaXplRGV0ZWN0b3JNb2R1bGUsXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0U29ydGluZ0ZlYXR1cmVNb2R1bGUsXG5cdEZpZWxkRmVhdHVyZU1vZHVsZSxcblx0Rm9ybWF0aW9uRmVhdHVyZU1vZHVsZSxcblx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cdFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUsXG5cdFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSxcblxuXHRTY2hlbWFGZWF0dXJlTW9kdWxlLFxuXG5cdFN0cnVjdHVyZVNoYXJlZE1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRTY2hlbWFNYW5hZ2VyTW9kdWxlLFxuXG5cdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblxuXHRDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlLFxuXHRTYW5pdGl6ZU1vZHVsZSxcblxuXHRpY29uc1xuXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCxcblxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnRcbl07XG5cblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHRmYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKTtcbn1cblxuaW5pdGlhbGl6ZUxpc3RWaWV3KCk7XG5pbml0aWFsaXplU3RydWN0dXJlKCk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRpbXBvcnRzXG5cdF0sXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBIRVJNRVNfQVBJID0gJ2hlcm1lc0FwaSc7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdyaWRWaWV3RmVhdHVyZU1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3JpZFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRJdGVtRmFjdG9yeSxcblx0XHRcdFx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0XHRcdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0sXG5cblx0XHRcdFx0c3RydWN0dXJlUHJvdmlkZXJzXG5cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblxuXHRcdHJ1bkhlcm1lcygpO1xuXHRcdGluaXRIZXJtZXNBcGkoKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbR3JpZFZpZXdGZWF0dXJlTW9kdWxlLkhFUk1FU19BUEldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=