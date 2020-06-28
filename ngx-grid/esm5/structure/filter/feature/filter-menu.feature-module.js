/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { FilterIconComponent } from './icon/filter-icon.component';
import { FilterMenuTriggerComponent } from './filter-menu-trigger.component';
import { FilterMenuComponent } from './menu/filter-menu.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { FilterTypeSelectorComponent } from './filter-selector/filter-type-selector.component';
import { FilterValueComponent } from './menu/value/filter-value.component';
import { ActiveFilterListComponent } from './active-filters/active-filter-list.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { ActiveSearchComponent } from './active-filters/search/active-search.component';
var FilterMenuFeatureModule = /** @class */ (function () {
    function FilterMenuFeatureModule() {
    }
    FilterMenuFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        FilterIconComponent,
                        FilterMenuComponent,
                        FilterMenuTriggerComponent,
                        ColumnSelectorComponent,
                        FilterTypeSelectorComponent,
                        FilterValueComponent,
                        ActiveFilterListComponent,
                        FieldSelectorComponent,
                        ActiveSearchComponent
                    ],
                    exports: [
                        FilterMenuTriggerComponent,
                        ActiveFilterListComponent
                    ],
                    entryComponents: [
                        FilterMenuComponent
                    ]
                },] }
    ];
    return FilterMenuFeatureModule;
}());
export { FilterMenuFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR3hGO0lBQUE7SUEwQkEsQ0FBQzs7Z0JBMUJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixxQkFBcUI7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUiwwQkFBMEI7d0JBQzFCLHlCQUF5QjtxQkFDekI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixtQkFBbUI7cUJBQ25CO2lCQUNEOztJQUVELDhCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vZmlsdGVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51L3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmlsdGVySWNvbkNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50LFxuXHRcdENvbHVtblNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJWYWx1ZUNvbXBvbmVudCxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50LFxuXHRcdEZpZWxkU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0QWN0aXZlU2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB7XG59XG4iXX0=