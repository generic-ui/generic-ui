import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricModule } from '@generic-ui/fabric';
import { FilterIconComponent } from './icon/filter-icon.component';
import { FilterMenuTriggerComponent } from './trigger/filter-menu-trigger.component';
import { FilterMenuComponent } from './filter-menu.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { FilterTypeSelectorComponent } from './filter-selector/filter-type-selector.component';
import { FilterValueComponent } from './value/filter-value.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { ActiveFilterListModule } from '../active-filters/active-filter-list.module';
import { FilterMenuActiveFiltersComponent } from './active-filters/filter-menu-active-filters.component';
import { FilterFeatureModule } from '../filter.feature-module';
import { GuiTemplateModule } from '../../../../gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
export class FilterMenuFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FilterMenuFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FilterMenuFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
        FilterMenuComponent,
        FilterMenuTriggerComponent,
        ColumnSelectorComponent,
        FilterTypeSelectorComponent,
        FilterValueComponent,
        FieldSelectorComponent,
        FilterMenuActiveFiltersComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        GuiTemplateModule,
        FilterFeatureModule,
        ActiveFilterListModule], exports: [FilterMenuTriggerComponent] });
FilterMenuFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuFeatureModule, imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        GuiTemplateModule,
        FilterFeatureModule,
        ActiveFilterListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule,
                        GuiTemplateModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztBQTZCekYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFFekQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztxSEFKVyx1QkFBdUI7c0hBQXZCLHVCQUF1QixpQkFoQmxDLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixnQ0FBZ0MsYUFmaEMsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0IsYUFhdEIsMEJBQTBCO3NIQU1mLHVCQUF1QixZQXhCbEMsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0I7NEZBbUJYLHVCQUF1QjtrQkExQm5DLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixzQkFBc0I7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGdDQUFnQztxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDBCQUEwQjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixtQkFBbUI7cUJBQ25CO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vdHJpZ2dlci9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXJzL2ZpbHRlci1tZW51LWFjdGl2ZS1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEd1aVRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZ3VpLnRlbXBsYXRlLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRHdWlUZW1wbGF0ZU1vZHVsZSxcblx0XHRGaWx0ZXJGZWF0dXJlTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmlsdGVySWNvbkNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50LFxuXHRcdENvbHVtblNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJWYWx1ZUNvbXBvbmVudCxcblx0XHRGaWVsZFNlbGVjdG9yQ29tcG9uZW50LFxuXHRcdEZpbHRlck1lbnVBY3RpdmVGaWx0ZXJzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG4iXX0=