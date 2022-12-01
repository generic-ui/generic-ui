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
FilterMenuFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FilterMenuFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
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
FilterMenuFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuFeatureModule, imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterFeatureModule,
        ActiveFilterListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQTRCL0QsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFFekQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztvSEFKVyx1QkFBdUI7cUhBQXZCLHVCQUF1QixpQkFoQmxDLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixnQ0FBZ0MsYUFkaEMsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHNCQUFzQixhQWF0QiwwQkFBMEI7cUhBTWYsdUJBQXVCLFlBdkJsQyxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsc0JBQXNCOzJGQW1CWCx1QkFBdUI7a0JBekJuQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsZ0NBQWdDO3FCQUNoQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsMEJBQTBCO3FCQUMxQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLG1CQUFtQjtxQkFDbkI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlckljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vZmlsdGVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXJzL2ZpbHRlci1tZW51LWFjdGl2ZS1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZpbHRlckZlYXR1cmVNb2R1bGUsXG5cdFx0QWN0aXZlRmlsdGVyTGlzdE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGaWx0ZXJJY29uQ29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVDb21wb25lbnQsXG5cdFx0RmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQsXG5cdFx0Q29sdW1uU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclZhbHVlQ29tcG9uZW50LFxuXHRcdEZpZWxkU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==