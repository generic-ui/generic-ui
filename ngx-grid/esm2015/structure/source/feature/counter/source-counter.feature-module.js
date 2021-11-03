import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../../filter/feature/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../../filter/feature/active-filters/active-filter-list.module';
export class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceCounterFeatureModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQTJCMUcsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGFBQWE7SUFFNUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7WUE1QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUV0QixrQkFBa0I7aUJBRWxCO2dCQUNELFlBQVksRUFBRTtvQkFDYixnQ0FBZ0M7b0JBQ2hDLHlCQUF5QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGdDQUFnQztpQkFDaEM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG1CQUFtQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQix5QkFBeUI7aUJBQ3pCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlLFxuXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUsXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0QWN0aXZlRmlsdGVyU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==