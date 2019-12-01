/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { StructureColumnConfigService } from './header/config/structure.column-config.service';
import { fabricImports } from './structure-fabric.imports';
import { StructurePagingModule } from './paging/structure-paging.module';
import { StructureSummaryModule } from './panel/summary/structure.summary.module';
import { CompositionModule } from './api/composition/composition.module';
import { StructureComponent } from './structure.component';
import { StructureHeaderComponent } from './header/structure-header.component';
import { StructureHeaderColumnsComponent } from './header/columns/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from './header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from './header/filters/structure.header-filter.component';
import { StructureContentComponent } from './content/structure-content.component';
import { StructureRowComponent } from './content/row/structure-row.component';
import { StructureCellComponent } from './content/cell/structure.cell.component';
import { StructureContainerComponent } from './content/structure-container.component';
import { StructureSearchComponent } from './header/search/structure.search.component';
import { StructureQuickFiltersComponent } from './header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from './blueprint/structure.blueprint.component';
import { StructureAggregationPanelComponent } from './panel/aggregation/structure.aggregation-panel.component';
import { StructureColumnConfigComponent } from './header/config/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from '../app/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { EntityFactory } from '../domain/source/entity.factory';
import { SourceQueryService } from '../app/source/source-query.service';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureAggregationPanelConfigConverter } from './panel/aggregation/structure.aggregation-panel.config-converter';
import { structureProviders } from '../app/structure/structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
const imports = [
    CommonModule,
    ReactiveFormsModule,
    HermesModule,
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    StructurePagingModule,
    StructureSummaryModule,
    CompositionModule,
    LoggerModule
];
/** @type {?} */
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureContainerComponent,
    StructureSearchComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureAggregationPanelComponent,
    StructureColumnConfigComponent
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent
];
/** @type {?} */
const providers = [
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    EntityFactory,
    SourceQueryService,
    StructureIdGenerator,
    StructureAggregationPanelConfigConverter,
    StructureColumnConfigService,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    StructureSearchComponent,
    ...fabricImports,
    StructurePagingModule
];
export class StructureModule {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    static withConfig(structureConfig = { cssClassName: '', hermesModuleConfig: { loggers: false } }) {
        return {
            ngModule: StructureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                ...providers
            ]
        };
    }
}
StructureModule.exportDeclarations = [...exportDeclarations];
StructureModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
/** @nocollapse */
StructureModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJB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QyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDdEgsT0FBTztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDdkYsR0FBRyxTQUFTO2FBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7QUFmTSxrQ0FBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQzs7WUFScEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlO2FBQ2Y7Ozs7NENBb0JhLE1BQU0sU0FBQyxXQUFXOzs7O0lBakIvQixtQ0FBb0Q7Ozs7O0lBaUJ4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4vaGVhZGVyL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdNb2R1bGUgfSBmcm9tICcuL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9zdW1tYXJ5L3N0cnVjdHVyZS5zdW1tYXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4vYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2NvbHVtbnMvc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi9hcHAvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi9hcHAvc291cmNlL3NvdXJjZS1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZVByb3ZpZGVycyB9IGZyb20gJy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvbigpIHtcblx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcbn1cblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRDb21tb25Nb2R1bGUsXG5cdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblx0Ly8gLndpdGhDb25maWcoe1xuXHQvLyBcdGxvZ2dlcnM6IGZhbHNlXG5cdC8vIH0pLFxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXG5cdFN0cnVjdHVyZVBhZ2luZ01vZHVsZSxcblx0U3RydWN0dXJlU3VtbWFyeU1vZHVsZSxcblxuXHRDb21wb3NpdGlvbk1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVNlYXJjaENvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0e1xuXHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHR9LFxuXHRFbnRpdHlGYWN0b3J5LFxuXG5cdFNvdXJjZVF1ZXJ5U2VydmljZSxcblxuXHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLFxuXG5cdC4uLnN0cnVjdHVyZVByb3ZpZGVyc1xuXG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQsXG5cblx0Li4uZmFicmljSW1wb3J0cyxcblx0U3RydWN0dXJlUGFnaW5nTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0geyBjc3NDbGFzc05hbWU6ICcnLCBoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBTdHJ1Y3R1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHQuLi5wcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydoZXJtZXNBcGknXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==