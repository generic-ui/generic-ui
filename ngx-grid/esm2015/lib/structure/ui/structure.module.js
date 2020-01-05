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
import { StructureColumnConfigComponent } from './header/config/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from '../ui-api/structure/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { SourceReadModelService } from '../ui-api/source/source-read-model.service';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureAggregationPanelConfigConverter } from './panel/aggregation/structure.aggregation-panel.config-converter';
import { structureProviders } from '../ui-api/structure/structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../domain/source/item.entity-factory';
import { StructureTopPanelModule } from './panel/top/structure.top-panel.module';
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
    StructureInfoPanelModule,
    StructureTopPanelModule,
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
    ItemEntityFactory,
    SourceReadModelService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJB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QUFZLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3RILE9BQU87WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZO2lCQUN0QztnQkFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDekYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZGLEdBQUcsU0FBUzthQUNaO1NBQ0QsQ0FBQztJQUNILENBQUM7O0FBZk0sa0NBQWtCLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUM7O1lBUnBELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmOzs7OzRDQW9CYSxNQUFNLFNBQUMsV0FBVzs7OztJQWpCL0IsbUNBQW9EOzs7OztJQWlCeEMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2hlYWRlci9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vZHVsZSB9IGZyb20gJy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb2x1bW5zL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4vYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGUsXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25Nb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdH0sXG5cdEl0ZW1FbnRpdHlGYWN0b3J5LFxuXG5cdFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UsXG5cblx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0U3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSxcblxuXHQuLi5zdHJ1Y3R1cmVQcm92aWRlcnNcblxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7IGNzc0NsYXNzTmFtZTogJycsIGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9IH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdC4uLnByb3ZpZGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2hlcm1lc0FwaSddLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19