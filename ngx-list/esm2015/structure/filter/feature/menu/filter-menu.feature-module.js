import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricModule } from '@generic-ui/fabric';
import { FilterIconComponent } from './icon/filter-icon.component';
import { FilterMenuTriggerComponent } from './filter-menu-trigger.component';
import { FilterMenuComponent } from './filter-menu.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { FilterTypeSelectorComponent } from './filter-selector/filter-type-selector.component';
import { FilterValueComponent } from './value/filter-value.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { ActiveFilterListModule } from '../active-filters/active-filter-list.module';
export class FilterMenuFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FilterMenuFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    ReactiveFormsModule,
                    FilterApiModule,
                    ActiveFilterListModule
                ],
                declarations: [
                    FilterIconComponent,
                    FilterMenuComponent,
                    FilterMenuTriggerComponent,
                    ColumnSelectorComponent,
                    FilterTypeSelectorComponent,
                    FilterValueComponent,
                    FieldSelectorComponent
                ],
                exports: [
                    FilterMenuTriggerComponent
                ],
                entryComponents: [
                    FilterMenuComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBMkJyRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUV6RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQTVCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysc0JBQXNCO2lCQUN0QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsdUJBQXVCO29CQUN2QiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsMEJBQTBCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLG1CQUFtQjtpQkFDbkI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgRmlsdGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9maWx0ZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS9maWx0ZXItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLXNlbGVjdG9yL2ZpZWxkLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlIH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGaWx0ZXJBcGlNb2R1bGUsXG5cdFx0QWN0aXZlRmlsdGVyTGlzdE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGaWx0ZXJJY29uQ29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVDb21wb25lbnQsXG5cdFx0RmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQsXG5cdFx0Q29sdW1uU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclZhbHVlQ29tcG9uZW50LFxuXHRcdEZpZWxkU2VsZWN0b3JDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==