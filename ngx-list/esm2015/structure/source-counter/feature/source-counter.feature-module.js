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
import { FilterMenuFeatureModule } from '../../filter/feature/filter-menu.feature-module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UtY291bnRlci9mZWF0dXJlL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUEwQjFGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhOzs7O0lBRTVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7O1lBM0JELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWix1QkFBdUI7b0JBRXZCLGtCQUFrQjtpQkFFbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGdDQUFnQztvQkFDaEMseUJBQXlCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZ0NBQWdDO2lCQUNoQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUJBQW1CO2lCQUNuQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLHlCQUF5QjtpQkFDekI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNCdXR0b25Nb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlLFxuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEFjdGl2ZUZpbHRlclNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=