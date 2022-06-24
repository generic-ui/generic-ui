import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModalThemeService, FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, CoreContainer, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from './structure-fabric.imports';
import { PagingFeatureModule } from '../../feature/structure/paging/paging.feature-module';
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
import { STRUCTURE_CSS_CLASS_NAME } from '../../core/structure/core/api/config/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { LoggerModule } from '../../feature/common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../core/structure/source/domain/core/item/item.entity-factory';
import { StructureTopPanelModule } from './panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from './header/menu/structure.column-menu.module';
import { StructureColumnManagerModule } from './column-manager/structure.column-manager.module';
import { StructureCellEditComponent } from './content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from './schema/structure.theme.converter';
import { StructureCellEditBooleanComponent } from './content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from './row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from './panel/banner-panels/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from './panel/banner-panels/footer-panel/structure.footer-panel.component';
import { EmptySourceFeatureModule } from '../../feature/structure/source/empty/empty-source.feature-module';
import { SortingFeatureModule } from '../../feature/structure/sorting/sorting.feature-module';
import { FieldFeatureModule } from '../../feature/structure/field/field.feature-module';
import { SearchFeatureModule } from '../../feature/structure/search/search.feature-module';
import { SchemaManagerModule } from '../../feature/schema/manager/schema-manager.module';
import { SelectAllComponent } from './header/column/select-all/select-all.component';
import { SummariesFeatureModule } from '../../feature/structure/summaries/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../feature/structure/vertical-formation/vertical-formation.feature-module';
import { SchemaFeatureModule } from '../../feature/schema/schema.feature-module';
import { CompositionFeatureModule } from '../../feature/composition/composition.feature-module';
import { TranslationFeatureModule } from '../../feature/l10n/translation.feature-module';
import { StructureHeaderGroupsComponent } from './header/group/structure-header-groups.component';
import { structureGates } from './gate/structure.gates';
import { FilterMenuFeatureModule } from '../../feature/structure/filter/menu/filter-menu.feature-module';
import { SourceFeatureModule } from '../../feature/structure/source/source.feature-module';
import { StructureSharedModule } from '../../feature/structure/common/structure-shared.module';
import { SanitizeModule } from '../../feature/common/cdk/sanitize/sanitize.module';
import { ResizeDetectorModule } from '../../feature/common/cdk/resize-detector/resize-detector.module';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { FormationFeatureModule } from '../../feature/structure/formation/formation.feature-module';
import { StructureArrowIconModule } from '../../feature/common/icons/arrow/structure.arrow-icon.module';
import { StructureMenuIconModule } from '../../feature/common/icons/menu/structure.menu-icon.module';
import { structureInitializer } from '../../core/structure/core/api/structure.api-module';
import { StructurePublisher } from '../../core/structure/core/api/structure.publisher';
import { StructureWarehouse } from '../../core/structure/core/api/structure.warehouse';
import { StructureInitialValuesReadyArchive } from '../../core/structure/core/api/ready/structure.initial-values-ready.archive';
import { listViewInitializer } from '../../core/list-view/api/list-view.api-module';
import * as i0 from "@angular/core";
import * as i1 from "./gate/column/header/structure-column-header.gate";
import * as i2 from "./gate/paging/structure-paging.gate";
import * as i3 from "./gate/searching/structure-searching.gate";
import * as i4 from "./gate/source/structure-selection.gate";
import * as i5 from "./gate/l10n/structure-l10n.gate";
import * as i6 from "./gate/panel/structure-panel.gate";
import * as i7 from "./gate/row/detail/structure-row-detail.gate";
import * as i8 from "./gate/column/menu/structure-column-menu.gate";
import * as i9 from "../../feature/structure/summaries/gate/structure-summaries.gate";
import * as i10 from "./gate/panel/info/structure-info-panel.gate";
import * as i11 from "./gate/row/class/structure-row-class.gate";
import * as i12 from "./gate/row/style/structure-row-style.gate";
import * as i13 from "./gate/row/coloring/structure-row-coloring.gate";
import * as i14 from "../../feature/schema/gate/grid/theme-grid.gate";
import * as i15 from "../../feature/structure/sorting/gate/structure-sorting.gate";
import * as i16 from "./gate/source/source-loading.gate";
import * as i17 from "../../feature/structure/filter/gate/structure-filter.gate";
import * as i18 from "../../feature/structure/filter/gate/structure-quick-filters.gate";
import * as i19 from "../../feature/structure/vertical-formation/gate/vertical-formation.gate";
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
    icons,
];
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderGroupsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
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
    structureGates,
];
export function provideStructureCellEditArchive() {
    return CoreContainer.resolve(StructureCellEditArchive);
}
export function provideFabricModalThemeService() {
    return CoreContainer.resolve(FabricModalThemeService);
}
listViewInitializer.init();
structureInitializer.init();
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
                ItemEntityFactory,
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
GridViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
GridViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
        StructureHeaderComponent,
        StructureHeaderColumnsComponent,
        StructureHeaderGroupsComponent,
        StructureHeaderFiltersComponent,
        StructureHeaderFilterComponent,
        SelectAllComponent,
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
GridViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridViewFeatureModule, imports: [[
            imports
        ], FabricModule, i20.FabricBadgeModule, i20.FabricButtonModule, i20.FabricButtonGroupModule, i20.FabricCheckboxModule, i20.FabricChipModule, i20.FabricDrawerModule, i20.FabricDropdownModule, i20.FabricRadioButtonModule, i20.FabricRadioGroupModule, i20.FabricProgressBarModule, i20.FabricProgressSpinnerModule, i20.FabricSelectModule, i20.FabricSpinnerModule, i20.FabricTabModule, i20.FabricTooltipModule, i20.FabricToggleButtonModule, i20.FabricInputModule, i20.FabricDialogModule, i20.FabricInlineDialogModule, i20.FabricTabModule, PagingFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridViewFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYs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QixhQTRFdkIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQiwyQkFBMkIsc2dCQUczQixtQkFBbUI7b0hBd0JQLHFCQUFxQixZQVB4QjtZQUNSLE9BQU87U0FDUCxFQTNCRCxZQUFZLHNnQkFRWixtQkFBbUI7NEZBd0JQLHFCQUFxQjtrQkFSakMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsT0FBTztxQkFDUDtvQkFDRCxZQUFZO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWU7aUJBQ2Y7OzBCQTBDYSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgQ29yZUNvbnRhaW5lciwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUgfSBmcm9tICcuL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9jb25maWcvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuL3BhbmVsL3RvcC9zdHJ1Y3R1cmUudG9wLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2VsbC9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2VsbC9ib29sZWFuL3N0cnVjdHVyZS5jZWxsLWVkaXQtYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc29ydGluZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWVsZC9maWVsZC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlbWFNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zY2hlbWEvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3N1bW1hcmllcy9zdW1tYXJpZXMuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlbWFGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zY2hlbWEvc2NoZW1hLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2dyb3VwL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHYXRlcyB9IGZyb20gJy4vZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXMnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL3NvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9jb21tb24vc3RydWN0dXJlLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUtZGV0ZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvYXJyb3cvc3RydWN0dXJlLmFycm93LWljb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvbWVudS9zdHJ1Y3R1cmUubWVudS1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVJbml0aWFsaXplciB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvcmVhZHkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgbGlzdFZpZXdJbml0aWFsaXplciB9IGZyb20gJy4uLy4uL2NvcmUvbGlzdC12aWV3L2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUpO1xufVxuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgfVxuXTtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5jb25zdCBpY29ucyA9IFtcblx0U3RydWN0dXJlQXJyb3dJY29uTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZVxuXTtcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdGZhYnJpY0ltcG9ydHMsXG5cdFJlc2l6ZURldGVjdG9yTW9kdWxlLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFNvcnRpbmdGZWF0dXJlTW9kdWxlLFxuXHRGaWVsZEZlYXR1cmVNb2R1bGUsXG5cdEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRTdW1tYXJpZXNGZWF0dXJlTW9kdWxlLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0U2NoZW1hRmVhdHVyZU1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVTaGFyZWRNb2R1bGUsXG5cblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblxuXHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZSxcblx0U2FuaXRpemVNb2R1bGUsXG5cblx0aWNvbnMsXG5cbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RBbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCxcblx0U3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQsXG5cblx0c3RydWN0dXJlR2F0ZXNcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50XG5dO1xuXG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cblx0ZmFicmljSW1wb3J0cyxcblx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0c3RydWN0dXJlR2F0ZXMsXG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRmFicmljTW9kYWxUaGVtZVNlcnZpY2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpO1xufVxuXG5saXN0Vmlld0luaXRpYWxpemVyLmluaXQoKTtcbnN0cnVjdHVyZUluaXRpYWxpemVyLmluaXQoKTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdGltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkVmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhFUk1FU19BUEkgPSAnaGVybWVzQXBpJztcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gQXJyYXkuZnJvbShleHBvcnREZWNsYXJhdGlvbnMpO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0ge1xuXHRcdGNzc0NsYXNzTmFtZTogJycsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7IGxvZ2dlcnM6IGZhbHNlIH1cblx0fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R3JpZFZpZXdGZWF0dXJlTW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHcmlkVmlld0ZlYXR1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdFx0XHRcdH0sXG5cdFx0XHRcdEl0ZW1FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblxuXHRcdFx0XHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHRcdFx0XHR7IHByb3ZpZGU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSwgdXNlRmFjdG9yeTogcHJvdmlkZVN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSxcblxuXHRcdFx0XHRzdHJ1Y3R1cmVQcm92aWRlcnNcblxuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbR3JpZFZpZXdGZWF0dXJlTW9kdWxlLkhFUk1FU19BUEldLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19