import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../../filter/src/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../../filter/src/active-filters/active-filter-list.module';
import * as i0 from "@angular/core";
export class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceCounterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SourceCounterFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceCounterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: SourceCounterFeatureModule, declarations: [ActiveFilterMenuTriggerDirective,
        ActiveFilterMenuComponent], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] });
SourceCounterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SourceCounterFeatureModule, providers: [
        ActiveFilterService
    ], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SourceCounterFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FilterMenuFeatureModule,
                        ActiveFilterListModule,
                        FabricButtonModule
                    ],
                    declarations: [
                        ActiveFilterMenuTriggerDirective,
                        ActiveFilterMenuComponent
                    ],
                    exports: [
                        ActiveFilterMenuTriggerDirective
                    ],
                    providers: [
                        ActiveFilterService
                    ],
                    entryComponents: [
                        ActiveFilterMenuComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY291bnRlci9zb3VyY2UtY291bnRlci5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOERBQThELENBQUM7O0FBMkJ0RyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQUU1RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O3VIQUpXLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQWJyQyxnQ0FBZ0M7UUFDaEMseUJBQXlCLGFBVnpCLFlBQVk7UUFFWix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBRXRCLGtCQUFrQixhQVFsQixnQ0FBZ0M7d0hBU3JCLDBCQUEwQixhQVAzQjtRQUNWLG1CQUFtQjtLQUNuQixZQWpCQSxZQUFZO1FBRVosdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUV0QixrQkFBa0I7MkZBaUJQLDBCQUEwQjtrQkF4QnRDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBRVosdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBRXRCLGtCQUFrQjtxQkFFbEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGdDQUFnQzt3QkFDaEMseUJBQXlCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZ0NBQWdDO3FCQUNoQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUJBQW1CO3FCQUNuQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLHlCQUF5QjtxQkFDekI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFx0QWN0aXZlRmlsdGVyTGlzdE1vZHVsZSxcblxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlLFxuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEFjdGl2ZUZpbHRlclNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=