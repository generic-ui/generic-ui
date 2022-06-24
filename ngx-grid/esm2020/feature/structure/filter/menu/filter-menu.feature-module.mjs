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
import { ActiveFilterListModule } from '../active-filters/active-filter-list.module';
import { FilterMenuActiveFiltersComponent } from './active-filters/filter-menu-active-filters.component';
import { FilterFeatureModule } from '../filter.feature-module';
import * as i0 from "@angular/core";
export class FilterMenuFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FilterMenuFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FilterMenuFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
        FilterMenuComponent,
        FilterMenuTriggerComponent,
        ColumnSelectorComponent,
        FilterTypeSelectorComponent,
        FilterValueComponent,
        FieldSelectorComponent,
        FilterMenuActiveFiltersComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterFeatureModule,
        ActiveFilterListModule], exports: [FilterMenuTriggerComponent] });
FilterMenuFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuFeatureModule, imports: [[
            CommonModule,
            FabricModule,
            ReactiveFormsModule,
            FilterFeatureModule,
            ActiveFilterListModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule,
                        FilterFeatureModule,
                        ActiveFilterListModule
                    ],
                    declarations: [
                        FilterIconComponent,
                        FilterMenuComponent,
                        FilterMenuTriggerComponent,
                        ColumnSelectorComponent,
                        FilterTypeSelectorComponent,
                        FilterValueComponent,
                        FieldSelectorComponent,
                        FilterMenuActiveFiltersComponent
                    ],
                    exports: [
                        FilterMenuTriggerComponent
                    ],
                    entryComponents: [
                        FilterMenuComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDekcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBNEIvRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUV6RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O3FIQUpXLHVCQUF1QjtzSEFBdkIsdUJBQXVCLGlCQWhCbEMsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdDQUFnQyxhQWRoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsc0JBQXNCLGFBYXRCLDBCQUEwQjtzSEFNZix1QkFBdUIsWUF4QjFCO1lBQ1IsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLHNCQUFzQjtTQUN0Qjs0RkFrQlcsdUJBQXVCO2tCQXpCbkMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixzQkFBc0I7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGdDQUFnQztxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDBCQUEwQjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixtQkFBbUI7cUJBQ25CO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4tc2VsZWN0b3IvY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zZWxlY3Rvci9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgfSBmcm9tICcuLi9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVBY3RpdmVGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVycy9maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGaWx0ZXJGZWF0dXJlTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmlsdGVySWNvbkNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50LFxuXHRcdENvbHVtblNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJWYWx1ZUNvbXBvbmVudCxcblx0XHRGaWVsZFNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVBY3RpdmVGaWx0ZXJzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmlsdGVyQXBpTW9kdWxlOiBGaWx0ZXJBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChmaWx0ZXJBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVyQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=