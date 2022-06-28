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
FilterMenuFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FilterMenuFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, declarations: [FilterIconComponent,
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
FilterMenuFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterFeatureModule,
        ActiveFilterListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDekcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBNEIvRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUV6RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O29IQUpXLHVCQUF1QjtxSEFBdkIsdUJBQXVCLGlCQWhCbEMsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdDQUFnQyxhQWRoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsc0JBQXNCLGFBYXRCLDBCQUEwQjtxSEFNZix1QkFBdUIsWUF2QmxDLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixzQkFBc0I7MkZBbUJYLHVCQUF1QjtrQkF6Qm5DLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixnQ0FBZ0M7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUiwwQkFBMEI7cUJBQzFCO29CQUNELGVBQWUsRUFBRTt3QkFDaEIsbUJBQW1CO3FCQUNuQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgRmlsdGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9maWx0ZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS9maWx0ZXItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLXNlbGVjdG9yL2ZpZWxkLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlIH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51QWN0aXZlRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLWZpbHRlcnMvZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi9maWx0ZXIuZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmlsdGVyRmVhdHVyZU1vZHVsZSxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZpbHRlckljb25Db21wb25lbnQsXG5cdFx0RmlsdGVyTWVudUNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCxcblx0XHRDb2x1bW5TZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyVmFsdWVDb21wb25lbnQsXG5cdFx0RmllbGRTZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51QWN0aXZlRmlsdGVyc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZpbHRlckFwaU1vZHVsZTogRmlsdGVyQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoZmlsdGVyQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlckFwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19