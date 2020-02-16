/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    StructureAggregationPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
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
    StructureEmptySourceComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0RBQXdELENBQUM7Ozs7QUFFekcsTUFBTSxVQUFVLHlCQUF5QjtJQUN4QyxPQUFPLElBQUksbUJBQW1CLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekQsQ0FBQzs7TUFHSyxPQUFPLEdBQUc7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixHQUFHLGFBQWE7SUFFaEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUV6QixpQkFBaUI7SUFFakIsWUFBWTtDQUNaOztNQUVLLFlBQVksR0FBRztJQUNwQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDJCQUEyQjtDQUMzQjs7TUFFSyxlQUFlLEdBQUc7SUFDdkIsOEJBQThCO0NBQzlCOztNQUVLLFNBQVMsR0FBRztJQUNqQjtRQUNDLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLFdBQVc7S0FDckI7SUFDRDtRQUNDLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsVUFBVSxFQUFFLHlCQUF5QjtLQUNyQztJQUNELGlCQUFpQjtJQUVqQixzQkFBc0I7SUFFdEIsb0JBQW9CO0lBRXBCLEdBQUcsa0JBQWtCO0NBRXJCOztNQUVLLGtCQUFrQixHQUFHO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBRTNCLEdBQUcsYUFBYTtJQUNoQixxQkFBcUI7Q0FDckI7QUFRRCxNQUFNLE9BQU8sZUFBZTs7OztJQW1CM0IsWUFBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDdkQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDcEM7SUFDRixDQUFDOzs7OztJQW5CRCxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUF5QyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDdEgsT0FBTztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDdkYsR0FBRyxTQUFTO2FBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7QUFmTSxrQ0FBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQzs7WUFScEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlO2FBQ2Y7Ozs7NENBb0JhLE1BQU0sU0FBQyxXQUFXOzs7O0lBakIvQixtQ0FBb0Q7Ozs7O0lBaUJ4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ01vZHVsZSB9IGZyb20gJy4vcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9xdWljay1maWx0ZXJzL3N0cnVjdHVyZS5xdWljay1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgfSBmcm9tICcuL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRW1wdHlTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvZW1wdHktc291cmNlL3N0cnVjdHVyZS1lbXB0eS1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUgfSBmcm9tICcuL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbE1vZHVsZSB9IGZyb20gJy4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0SGVybWVzTW9kdWxlLFxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cblx0U3RydWN0dXJlUGFnaW5nTW9kdWxlLFxuXHRTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblx0U3RydWN0dXJlRW1wdHlTb3VyY2VDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdH0sXG5cdEl0ZW1FbnRpdHlGYWN0b3J5LFxuXG5cdFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UsXG5cblx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0Li4uc3RydWN0dXJlUHJvdmlkZXJzXG5cbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cblx0Li4uZmFicmljSW1wb3J0cyxcblx0U3RydWN0dXJlUGFnaW5nTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0geyBjc3NDbGFzc05hbWU6ICcnLCBoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfSB9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBTdHJ1Y3R1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHQuLi5wcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydoZXJtZXNBcGknXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==