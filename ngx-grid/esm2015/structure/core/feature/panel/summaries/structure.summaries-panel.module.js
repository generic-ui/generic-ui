/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesConfigService } from './structure.summaries-config.service';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesPanelComponent } from './structure.summaries-panel.component';
export class StructureSummariesPanelModule {
}
StructureSummariesPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructureSummariesPanelComponent
                ],
                exports: [
                    StructureSummariesPanelComponent
                ],
                providers: [
                    StructureSummariesArchive,
                    StructureSummariesConfigService,
                    StructureSummariesPanelConfigConverter
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFvQnpGLE1BQU0sT0FBTyw2QkFBNkI7OztZQWpCekMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGdDQUFnQztpQkFDaEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGdDQUFnQztpQkFDaEM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQixzQ0FBc0M7aUJBQ3RDO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UsXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbE1vZHVsZSB7XG59XG4iXX0=