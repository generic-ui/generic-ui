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
import { STRUCTURE_CSS_CLASS_NAME } from '../../core/structure/structure-core/api/config/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { LoggerModule } from '../../feature/common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../core/structure/source/domain/item/item.entity-factory';
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
import { structureInitializer } from '../../core/structure/structure-core/api/structure.api-module';
import { StructurePublisher } from '../../core/structure/structure-core/api/structure.publisher';
import { StructureWarehouse } from '../../core/structure/structure-core/api/structure.warehouse';
import { StructureInitialValuesReadyArchive } from '../../core/structure/structure-core/api/ready/structure.initial-values-ready.archive';
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
GridViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.NgModule });
GridViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: GridViewFeatureModule, declarations: [StructureComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYs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QixhQTRFdkIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQiwyQkFBMkIsc2dCQUczQixtQkFBbUI7bUhBd0JQLHFCQUFxQixZQU5oQyxPQUFPLEVBMUJSLFlBQVksc2dCQVFaLG1CQUFtQjsyRkF3QlAscUJBQXFCO2tCQVJqQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixPQUFPO3FCQUNQO29CQUNELFlBQVk7b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZTtpQkFDZjs7MEJBMENhLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBDb3JlQ29udGFpbmVyLCBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvcXVpY2stZmlsdGVycy9zdHJ1Y3R1cmUucXVpY2stZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi9ibHVlcHJpbnQvc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2FwaS9jb25maWcvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vaXRlbS9pdGVtLmVudGl0eS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSB9IGZyb20gJy4vaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9lbXB0eS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3J0aW5nL3NvcnRpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmllbGQvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2NoZW1hL21hbmFnZXIvc2NoZW1hLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2NoZW1hL3NjaGVtYS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvbDEwbi90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9ncm91cC9zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2F0ZXMgfSBmcm9tICcuL2dhdGUvc3RydWN0dXJlLmdhdGVzJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvY29tbW9uL3N0cnVjdHVyZS1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFNhbml0aXplTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNpemVEZXRlY3Rvck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9yZXNpemUtZGV0ZWN0b3IvcmVzaXplLWRldGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tbW9uL2ljb25zL2Fycm93L3N0cnVjdHVyZS5hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29tbW9uL2ljb25zL21lbnUvc3RydWN0dXJlLm1lbnUtaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgc3RydWN0dXJlSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvc3RydWN0dXJlLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2FwaS9yZWFkeS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0luaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZVdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVXYXJlaG91c2UgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlLCB1c2VGYWN0b3J5OiBwcm92aWRlU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9XG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5jb25zdCBpY29ucyA9IFtcblx0U3RydWN0dXJlQXJyb3dJY29uTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNZW51SWNvbk1vZHVsZVxuXTtcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdGZhYnJpY0ltcG9ydHMsXG5cdFJlc2l6ZURldGVjdG9yTW9kdWxlLFxuXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFNvcnRpbmdGZWF0dXJlTW9kdWxlLFxuXHRGaWVsZEZlYXR1cmVNb2R1bGUsXG5cdEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRTdW1tYXJpZXNGZWF0dXJlTW9kdWxlLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0U2NoZW1hRmVhdHVyZU1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVTaGFyZWRNb2R1bGUsXG5cblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblxuXHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZSxcblx0U2FuaXRpemVNb2R1bGUsXG5cblx0aWNvbnNcblxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEFsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCxcblxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnRcbl07XG5cblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHRmYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRzdHJ1Y3R1cmVHYXRlc1xuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKTtcbn1cblxubGlzdFZpZXdJbml0aWFsaXplci5pbml0KCk7XG5zdHJ1Y3R1cmVJbml0aWFsaXplci5pbml0KCk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRpbXBvcnRzXG5cdF0sXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBIRVJNRVNfQVBJID0gJ2hlcm1lc0FwaSc7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdyaWRWaWV3RmVhdHVyZU1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3JpZFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRJdGVtRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0XHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0XHRcdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0sXG5cblx0XHRcdFx0c3RydWN0dXJlUHJvdmlkZXJzXG5cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93W0dyaWRWaWV3RmVhdHVyZU1vZHVsZS5IRVJNRVNfQVBJXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==