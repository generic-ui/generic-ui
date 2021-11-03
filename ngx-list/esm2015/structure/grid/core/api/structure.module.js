import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../../feature/structure-fabric.imports';
import { PagingFeatureModule } from '../../../paging/feature/paging.feature-module';
import { StructureInfoPanelModule } from '../../feature/panel/info/structure.info-panel.module';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../../feature/header/column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../../feature/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../../feature/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureCellComponent } from '../../feature/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../../feature/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../../feature/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../../feature/header/menu/config/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StructureDefinition } from '../../feature/structure-definition';
import { StructureIdGenerator } from '../../feature/structure-id.generator';
import { structureCommandHandlers, structureDomainEventHandlers, structureProviders } from './structure.providers';
import { LoggerModule } from '../../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../../source/core/domain/core/item/item.entity-factory';
import { StructureTopPanelModule } from '../../feature/panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from '../../feature/header/menu/structure.column-menu.module';
import { StructureColumnManagerModule } from '../../feature/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../../../core/infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../../../core/domain/create-structure/create-structure-command-handler.service';
import { StructureCellEditComponent } from '../../feature/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../../feature/schema/structure.theme.converter';
import { StructureCellEditBooleanComponent } from '../../feature/content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from '../../feature/row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from '../../feature/panel/banner-panels/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from '../../feature/panel/banner-panels/footer-panel/structure.footer-panel.component';
import { PagingDomainModule } from '../../../paging/core/domain/paging.domain-module';
import { EmptySourceFeatureModule } from '../../../source/feature/empty/empty-source.feature-module';
import { SortingDomainModule } from '../../../sorting/core/domain/sorting.domain-module';
import { SortingFeatureModule } from '../../../sorting/feature/sorting.feature-module';
import { FieldFeatureModule } from '../../../field/feature/field.feature-module';
import { FieldDomainModule } from '../../../field/core/domain/field.domain-module';
import { SearchFeatureModule } from '../../../search/feature/search.feature-module';
import { SearchDomainModule } from '../../../search/core/domain/search.domain-module';
import { SchemaManagerModule } from '../../../../schema/feature/manager/schema-manager.module';
import { FilterDomainModule } from '../../../filter/core/domain/filter.domain-module';
import { SourceDomainModule } from '../../../source/core/domain/source.domain-module';
import { SelectAllComponent } from '../../feature/header/column/select-all/select-all.component';
import { structureKey } from '../../../core/api/structre.key';
import { SummariesDomainModule } from '../../../summaries/core/domain/summaries.domain-module';
import { SummariesFeatureModule } from '../../../summaries/feature/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../../vertical-formation/feature/vertical-formation.feature-module';
import { VerticalFormationDomainModule } from '../../../vertical-formation/core/domain/vertical-formation.domain-module';
import { SchemaFeatureModule } from '../../../../schema/feature/schema.feature-module';
import { CompositionFeatureModule } from '../../../../composition/feature/composition.feature-module';
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
import { StructureHeaderGroupsComponent } from '../../feature/header/group/structure-header-groups.component';
import { structureGates } from '../../feature/gate/structure.gates';
import { FilterMenuFeatureModule } from '../../../filter/feature/menu/filter-menu.feature-module';
import { SourceFeatureModule } from '../../../source/feature/source.feature-module';
import { StructureSharedModule } from '../../../common/structure-shared.module';
import { SanitizeModule } from '../../../../common/cdk/sanitize/sanitize.module';
import { ResizeDetectorModule } from '../../../../common/cdk/resize-detector/resize-detector.module';
import { StructureCellEditArchive } from '../../feature/edit/structure.cell-edit.archive';
import * as i0 from "@angular/core";
import * as i1 from "../../feature/gate/column/header/structure-column-header.gate";
import * as i2 from "../../feature/gate/paging/structure-paging.gate";
import * as i3 from "../../feature/gate/searching/structure-searching.gate";
import * as i4 from "../../feature/gate/source/structure-selection.gate";
import * as i5 from "../../feature/gate/l10n/structure-l10n.gate";
import * as i6 from "../../feature/gate/panel/structure-panel.gate";
import * as i7 from "../../feature/gate/row/detail/structure-row-detail.gate";
import * as i8 from "../../feature/gate/column/menu/structure-column-menu.gate";
import * as i9 from "../../../summaries/feature/gate/structure-summaries.gate";
import * as i10 from "../../feature/gate/panel/info/structure-info-panel.gate";
import * as i11 from "../../feature/gate/row/class/structure-row-class.gate";
import * as i12 from "../../feature/gate/row/style/structure-row-style.gate";
import * as i13 from "../../feature/gate/row/coloring/structure-row-coloring.gate";
import * as i14 from "../../../../schema/feature/gate/grid/theme-grid.gate";
import * as i15 from "../../../sorting/feature/gate/structure-sorting.gate";
import * as i16 from "../../feature/gate/source/source-loading.gate";
import * as i17 from "../../../filter/feature/gate/structure-filter.gate";
import * as i18 from "../../../filter/feature/gate/structure-quick-filters.gate";
import * as i19 from "../../../vertical-formation/feature/gate/vertical-formation.gate";
import * as i20 from "@generic-ui/hermes";
import * as i21 from "@generic-ui/fabric";
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
const imports = [
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, [
        PagingDomainModule.commandHandlers(),
        SortingDomainModule.commandHandlers(),
        FieldDomainModule.commandHandlers(),
        SearchDomainModule.commandHandlers(),
        FilterDomainModule.commandHandlers(),
        SourceDomainModule.commandHandlers(),
        SummariesDomainModule.commandHandlers(),
        VerticalFormationDomainModule.commandHandlers(),
        structureCommandHandlers
    ], [
        structureDomainEventHandlers,
        SearchDomainModule.domainEventHandlers(),
        FilterDomainModule.domainEventHandlers(),
        SourceDomainModule.domainEventHandlers(),
        SummariesDomainModule.domainEventHandlers(),
        FieldDomainModule.domainEventHandlers(),
        VerticalFormationDomainModule.domainEventHandlers()
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    fabricImports,
    ResizeDetectorModule,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
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
    SanitizeModule
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
export class StructureModule {
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window[StructureModule.HERMES_API].loggers = false;
        }
    }
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
        return {
            ngModule: StructureModule,
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
                StructureCellEditArchive,
                structureProviders
            ]
        };
    }
}
StructureModule.HERMES_API = 'hermesApi';
StructureModule.exportDeclarations = Array.from(exportDeclarations);
StructureModule.ɵfac = function StructureModule_Factory(t) { return new (t || StructureModule)(i0.ɵɵinject(PLATFORM_ID)); };
StructureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StructureModule });
StructureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            imports
        ], FabricModule, i21.FabricBadgeModule, i21.FabricButtonModule, i21.FabricButtonGroupModule, i21.FabricCheckboxModule, i21.FabricChipModule, i21.FabricDrawerModule, i21.FabricDropdownModule, i21.FabricRadioButtonModule, i21.FabricRadioGroupModule, i21.FabricProgressBarModule, i21.FabricProgressSpinnerModule, i21.FabricSelectModule, i21.FabricSpinnerModule, i21.FabricTabModule, i21.FabricTooltipModule, i21.FabricToggleButtonModule, i21.FabricInputModule, i21.FabricDialogModule, i21.FabricInlineDialogModule, i21.FabricTabModule, PagingFeatureModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    imports
                ],
                declarations,
                exports: exportDeclarations,
                entryComponents
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StructureModule, { declarations: [StructureComponent,
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
        HermesModule, i20.HermesDomainModule, i21.FabricBadgeModule, i21.FabricButtonModule, i21.FabricButtonGroupModule, i21.FabricCheckboxModule, i21.FabricChipModule, i21.FabricDrawerModule, i21.FabricDropdownModule, i21.FabricRadioButtonModule, i21.FabricRadioGroupModule, i21.FabricProgressBarModule, i21.FabricProgressSpinnerModule, i21.FabricSelectModule, i21.FabricSpinnerModule, i21.FabricTabModule, i21.FabricTooltipModule, i21.FabricToggleButtonModule, i21.FabricInputModule, i21.FabricDialogModule, i21.FabricInlineDialogModule, i21.FabricTabModule, ResizeDetectorModule,
        PagingFeatureModule,
        SortingFeatureModule,
        FieldFeatureModule,
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
        SanitizeModule], exports: [FabricModule,
        StructureComponent,
        StructureHeaderComponent,
        StructureContentComponent,
        StructureRowComponent,
        StructureContainerComponent, i21.FabricBadgeModule, i21.FabricButtonModule, i21.FabricButtonGroupModule, i21.FabricCheckboxModule, i21.FabricChipModule, i21.FabricDrawerModule, i21.FabricDropdownModule, i21.FabricRadioButtonModule, i21.FabricRadioGroupModule, i21.FabricProgressBarModule, i21.FabricProgressSpinnerModule, i21.FabricSelectModule, i21.FabricSpinnerModule, i21.FabricTabModule, i21.FabricTooltipModule, i21.FabricToggleButtonModule, i21.FabricInputModule, i21.FabricDialogModule, i21.FabricInlineDialogModule, i21.FabricTabModule, PagingFeatureModule, i1.StructureColumnHeaderGate, i2.StructurePagingGate, i3.StructureSearchingGate, i4.StructureSelectionGate, i5.StructureL10nGate, i6.StructurePanelGate, i7.StructureRowDetailGate, i8.StructureColumnMenuGate, i9.StructureSummariesGate, i10.StructureInfoPanelGate, i11.StructureRowClassGate, i12.StructureRowStyleGate, i13.StructureRowColoringGate, i14.ThemeGridGate, i15.StructureSortingGate, i16.SourceLoadingGate, i17.StructureFilterGate, i18.StructureQuickFiltersGate, i19.VerticalFormationGate] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFB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UUFFeEIsd0JBQXdCO1FBRXhCLFlBQVk7UUFDWixjQUFjLGFBaUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsMkJBQTJCLHNnQkFHM0IsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvcXVpY2stZmlsdGVycy9zdHJ1Y3R1cmUucXVpY2stZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ibHVlcHJpbnQvc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4vc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnMsIHN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsIHN0cnVjdHVyZVByb3ZpZGVycyB9IGZyb20gJy4vc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL3RvcC9zdHJ1Y3R1cmUudG9wLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4vaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9jZWxsL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9jZWxsL2Jvb2xlYW4vc3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9yb3ctZGV0YWlsL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2ZlYXR1cmUvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2NvcmUvZG9tYWluL3NvcnRpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvZmVhdHVyZS9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2ZlYXR1cmUvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL3NvdXJjZS5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9mZWF0dXJlL3N1bW1hcmllcy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vZmVhdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL3NjaGVtYS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9ncm91cC9zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2F0ZXMgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dhdGUvc3RydWN0dXJlLmdhdGVzJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2ZlYXR1cmUvc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJ1Y3R1cmUtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBTYW5pdGl6ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IFJlc2l6ZURldGVjdG9yTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZXNpemUtZGV0ZWN0b3IvcmVzaXplLWRldGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvbigpIHtcblx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcbn1cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRzdHJ1Y3R1cmVLZXksXG5cdFx0U3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0XHRJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0Q3JlYXRlU3RydWN0dXJlQ29tbWFuZEhhbmRsZXIsXG5cdFx0W1xuXHRcdFx0UGFnaW5nRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0U29ydGluZ0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdEZpZWxkRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0U2VhcmNoRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0RmlsdGVyRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0U291cmNlRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0VmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnNcblx0XHRdLCBbXG5cdFx0XHRzdHJ1Y3R1cmVEb21haW5FdmVudEhhbmRsZXJzLFxuXHRcdFx0U2VhcmNoRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdEZpbHRlckRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHRTb3VyY2VEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdEZpZWxkRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKVxuXHRcdF1cblx0KSxcblx0Ly8gLndpdGhDb25maWcoe1xuXHQvLyBcdGxvZ2dlcnM6IGZhbHNlXG5cdC8vIH0pLFxuXHRmYWJyaWNJbXBvcnRzLFxuXHRSZXNpemVEZXRlY3Rvck1vZHVsZSxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRTb3J0aW5nRmVhdHVyZU1vZHVsZSxcblx0RmllbGRGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblx0U291cmNlRmVhdHVyZU1vZHVsZSxcblx0U3VtbWFyaWVzRmVhdHVyZU1vZHVsZSxcblx0VmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdFNjaGVtYUZlYXR1cmVNb2R1bGUsXG5cblx0U3RydWN0dXJlU2hhcmVkTW9kdWxlLFxuXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFNjaGVtYU1hbmFnZXJNb2R1bGUsXG5cblx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGUsXG5cdFNhbml0aXplTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCxcblx0U2VsZWN0QWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50LFxuXG5cdHN0cnVjdHVyZUdhdGVzXG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudFxuXTtcblxuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXG5cdGZhYnJpY0ltcG9ydHMsXG5cdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdHN0cnVjdHVyZUdhdGVzXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0aW1wb3J0c1xuXHRdLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSEVSTUVTX0FQSSA9ICdoZXJtZXNBcGknO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBBcnJheS5mcm9tKGV4cG9ydERlY2xhcmF0aW9ucyk7XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnJyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfVxuXHR9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdHJ1Y3R1cmVNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0XHRcdFx0fSxcblx0XHRcdFx0SXRlbUVudGl0eUZhY3RvcnksXG5cdFx0XHRcdFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXG5cdFx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yLFxuXG5cdFx0XHRcdFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblxuXHRcdFx0XHRzdHJ1Y3R1cmVQcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93W1N0cnVjdHVyZU1vZHVsZS5IRVJNRVNfQVBJXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==