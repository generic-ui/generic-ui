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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterMenuFeatureModule, imports: [CommonModule,
            FabricModule,
            ReactiveFormsModule,
            GuiTemplateModule,
            FilterFeatureModule,
            ActiveFilterListModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztBQTBCekYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFFekQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO3dHQUpXLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLGlCQWJsQyxtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDBCQUEwQjtZQUMxQix1QkFBdUI7WUFDdkIsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsZ0NBQWdDLGFBZmhDLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsc0JBQXNCLGFBYXRCLDBCQUEwQjt5R0FHZix1QkFBdUIsWUFyQmxDLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsc0JBQXNCOzs0RkFnQlgsdUJBQXVCO2tCQXZCbkMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsZ0NBQWdDO3FCQUNoQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsMEJBQTBCO3FCQUMxQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgRmlsdGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9maWx0ZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL3RyaWdnZXIvZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4tc2VsZWN0b3IvY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zZWxlY3Rvci9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgfSBmcm9tICcuLi9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVBY3RpdmVGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVycy9maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBHdWlUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0R3VpVGVtcGxhdGVNb2R1bGUsXG5cdFx0RmlsdGVyRmVhdHVyZU1vZHVsZSxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZpbHRlckljb25Db21wb25lbnQsXG5cdFx0RmlsdGVyTWVudUNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCxcblx0XHRDb2x1bW5TZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyVmFsdWVDb21wb25lbnQsXG5cdFx0RmllbGRTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51QWN0aXZlRmlsdGVyc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn1cbiJdfQ==