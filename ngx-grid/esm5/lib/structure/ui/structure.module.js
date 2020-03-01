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
import { CompositionModule } from '../../composition/ui-api/composition.module';
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
import { StructureColumnConfigComponent } from './header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from '../ui-api/structure/structure-tokens';
import { StructureDefinition } from './structure-definition';
import { SourceReadModelService } from '../ui-api/source/source-read-model.service';
import { StructureIdGenerator } from './structure-id.generator';
import { structureProviders } from '../ui-api/structure/structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../domain/source/item.entity-factory';
import { StructureTopPanelModule } from './panel/top/structure.top-panel.module';
import { StructureEmptySourceComponent } from './content/empty-source/structure-empty-source.component';
import { StructureColumnMenuModule } from './header/menu/structure.column-menu.module';
import { StructureAggregationPanelModule } from './panel/aggregation/structure.aggregation-panel.module';
import { StructureColumnManagerModule } from './column-manager/structure.column-manager.module';
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
    StructureAggregationPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
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
    StructureBlueprintComponent
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
    StructureIdGenerator
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFC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QkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN0SCxPQUFPO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUztnQkFDUjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtlQUNwRixTQUFTLENBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQztJQWZNLGtDQUFrQixvQkFBTyxrQkFBa0IsRUFBRTs7Z0JBUnBELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7Ozs7Z0RBb0JhLE1BQU0sU0FBQyxXQUFXOztJQU1oQyxzQkFBQztDQUFBLEFBL0JELElBK0JDO1NBekJZLGVBQWU7OztJQUUzQixtQ0FBb0Q7Ozs7O0lBaUJ4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ01vZHVsZSB9IGZyb20gJy4vcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9xdWljay1maWx0ZXJzL3N0cnVjdHVyZS5xdWljay1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgfSBmcm9tICcuL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRW1wdHlTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvZW1wdHktc291cmNlL3N0cnVjdHVyZS1lbXB0eS1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGUsXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQWdncmVnYXRpb25QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25Nb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVFbXB0eVNvdXJjZUNvbXBvbmVudCxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0fSxcblx0SXRlbUVudGl0eUZhY3RvcnksXG5cblx0U291cmNlUmVhZE1vZGVsU2VydmljZSxcblxuXHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHQuLi5zdHJ1Y3R1cmVQcm92aWRlcnNcblxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRTdHJ1Y3R1cmVQYWdpbmdNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7IGNzc0NsYXNzTmFtZTogJycsIGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9IH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdC4uLnByb3ZpZGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2hlcm1lc0FwaSddLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19