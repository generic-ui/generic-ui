/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from './structure-fabric.imports';
import { StructurePagingModule } from './paging/structure-paging.module';
import { StructureInfoPanelModule } from './panel/info/structure.info-panel.module';
import { CompositionModule } from '../ui-api/composition/composition.module';
import { StructureComponent } from './structure.component';
import { StructureHeaderComponent } from './header/structure-header.component';
import { StructureHeaderColumnsComponent } from './header/columns/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from './header/filters/structure.header-filter.component';
import { StructureContentComponent } from './content/structure-content.component';
import { StructureRowComponent } from './content/row/structure-row.component';
import { StructureCellComponent } from './content/cell/structure.cell.component';
import { StructureContainerComponent } from './content/structure-container.component';
import { StructureQuickFiltersComponent } from './header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from './blueprint/structure.blueprint.component';
import { StructureAggregationPanelComponent } from './panel/aggregation/structure.aggregation-panel.component';
import { StructureColumnConfigComponent } from './header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from '../ui-api/structure/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { SourceReadModelService } from '../ui-api/source/source-read-model.service';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureAggregationPanelConfigConverter } from './panel/aggregation/structure.aggregation-panel.config-converter';
import { structureProviders } from '../ui-api/structure/structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../domain/source/item.entity-factory';
import { StructureTopPanelModule } from './panel/top/structure.top-panel.module';
import { StructureColumnConfigTriggerComponent } from './header/menu/structure.column-config-trigger.component';
import { StructureEmptySourceComponent } from './content/empty-source/structure-empty-source.component';
import { StructureMenuColumnManagerComponent } from './header/menu/column-manager/structure.menu-column-manager.component';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
var imports = tslib_1.__spread([
    CommonModule,
    ReactiveFormsModule,
    HermesModule
], fabricImports, [
    StructurePagingModule,
    StructureInfoPanelModule,
    StructureTopPanelModule,
    CompositionModule,
    LoggerModule
]);
/** @type {?} */
var declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureContainerComponent,
    StructureEmptySourceComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureAggregationPanelComponent,
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureMenuColumnManagerComponent
];
/** @type {?} */
var entryComponents = [
    StructureColumnConfigComponent
];
/** @type {?} */
var providers = tslib_1.__spread([
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    SourceReadModelService,
    StructureIdGenerator,
    StructureAggregationPanelConfigConverter
], structureProviders);
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent
], fabricImports, [
    StructurePagingModule
]);
var StructureModule = /** @class */ (function () {
    function StructureModule(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    StructureModule.withConfig = /**
     * @param {?=} structureConfig
     * @return {?}
     */
    function (structureConfig) {
        if (structureConfig === void 0) { structureConfig = { cssClassName: '', hermesModuleConfig: { loggers: false } }; }
        return {
            ngModule: StructureModule,
            providers: tslib_1.__spread([
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers }
            ], providers)
        };
    };
    StructureModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    StructureModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    /** @nocollapse */
    StructureModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return StructureModule;
}());
export { StructureModule };
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFC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QkFBVTs7OztJQUFqQixVQUFrQixlQUFxRztRQUFyRyxnQ0FBQSxFQUFBLG9CQUEyQyxZQUFZLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3RILE9BQU87WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTO2dCQUNSO29CQUNDLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFFBQVEsRUFBRSxlQUFlLENBQUMsWUFBWTtpQkFDdEM7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pGLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2VBQ3BGLFNBQVMsQ0FDWjtTQUNELENBQUM7SUFDSCxDQUFDO0lBZk0sa0NBQWtCLG9CQUFPLGtCQUFrQixFQUFFOztnQkFScEQsUUFBUSxTQUFDO29CQUNULE9BQU8sU0FBQTtvQkFDUCxZQUFZLGNBQUE7b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxpQkFBQTtpQkFDZjs7OztnREFvQmEsTUFBTSxTQUFDLFdBQVc7O0lBTWhDLHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6QlksZUFBZTs7O0lBRTNCLG1DQUFvRDs7Ozs7SUFpQnhDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW5zL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgc3RydWN0dXJlUHJvdmlkZXJzIH0gZnJvbSAnLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHktZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUVtcHR5U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2VtcHR5LXNvdXJjZS9zdHJ1Y3R1cmUtZW1wdHktc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNZW51Q29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL21lbnUvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGUsXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25Nb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVFbXB0eVNvdXJjZUNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCxcblx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0fSxcblx0SXRlbUVudGl0eUZhY3RvcnksXG5cblx0U291cmNlUmVhZE1vZGVsU2VydmljZSxcblxuXHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyLFxuXG5cdC4uLnN0cnVjdHVyZVByb3ZpZGVyc1xuXG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cdFN0cnVjdHVyZVBhZ2luZ01vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHsgY3NzQ2xhc3NOYW1lOiAnJywgaGVybWVzTW9kdWxlQ29uZmlnOiB7IGxvZ2dlcnM6IGZhbHNlIH0gfSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RydWN0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0Li4ucHJvdmlkZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHdpbmRvd1snaGVybWVzQXBpJ10ubG9nZ2VycyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=