/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUEyQjFHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhOzs7O0lBRTVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBNUJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFFdEIsa0JBQWtCO2lCQUVsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0NBQWdDO29CQUNoQyx5QkFBeUI7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixnQ0FBZ0M7aUJBQ2hDO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQkFBbUI7aUJBQ25CO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIseUJBQXlCO2lCQUN6QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZhYnJpY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFx0QWN0aXZlRmlsdGVyTGlzdE1vZHVsZSxcblxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlLFxuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEFjdGl2ZUZpbHRlclNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=