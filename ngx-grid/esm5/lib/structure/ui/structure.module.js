/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var imports = tslib_1.__spread([
    CommonModule,
    ReactiveFormsModule,
    HermesModule
], fabricImports, [
    StructurePagingModule,
    StructureSummaryModule,
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
    StructureSearchComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureAggregationPanelComponent,
    StructureColumnConfigComponent
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
    EntityFactory,
    SourceQueryService,
    StructureIdGenerator,
    StructureAggregationPanelConfigConverter,
    StructureColumnConfigService
], structureProviders);
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    StructureSearchComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlC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QUFFO1FBQ3RILE9BQU87WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTO2dCQUNSO29CQUNDLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFFBQVEsRUFBRSxlQUFlLENBQUMsWUFBWTtpQkFDdEM7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pGLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2VBQ3BGLFNBQVMsQ0FDWjtTQUNELENBQUM7SUFDSCxDQUFDO0lBZk0sa0NBQWtCLG9CQUFPLGtCQUFrQixFQUFFOztnQkFScEQsUUFBUSxTQUFDO29CQUNULE9BQU8sU0FBQTtvQkFDUCxZQUFZLGNBQUE7b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxpQkFBQTtpQkFDZjs7OztnREFvQmEsTUFBTSxTQUFDLFdBQVc7O0lBTWhDLHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6QlksZUFBZTs7O0lBRTNCLG1DQUFvRDs7Ozs7SUFpQnhDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9oZWFkZXIvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ01vZHVsZSB9IGZyb20gJy4vcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL3BhbmVsL3N1bW1hcnkvc3RydWN0dXJlLnN1bW1hcnkubW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW9kdWxlIH0gZnJvbSAnLi9hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvcXVpY2stZmlsdGVycy9zdHJ1Y3R1cmUucXVpY2stZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi9ibHVlcHJpbnQvc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uL2FwcC9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc291cmNlL2VudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uL2FwcC9zb3VyY2Uvc291cmNlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgc3RydWN0dXJlUHJvdmlkZXJzIH0gZnJvbSAnLi4vYXBwL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0SGVybWVzTW9kdWxlLFxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cblx0U3RydWN0dXJlUGFnaW5nTW9kdWxlLFxuXHRTdHJ1Y3R1cmVTdW1tYXJ5TW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblx0U3RydWN0dXJlU2VhcmNoQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdH0sXG5cdEVudGl0eUZhY3RvcnksXG5cblx0U291cmNlUXVlcnlTZXJ2aWNlLFxuXG5cdFN0cnVjdHVyZUlkR2VuZXJhdG9yLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UsXG5cblx0Li4uc3RydWN0dXJlUHJvdmlkZXJzXG5cbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVNlYXJjaENvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7IGNzc0NsYXNzTmFtZTogJycsIGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9IH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdC4uLnByb3ZpZGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2hlcm1lc0FwaSddLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19