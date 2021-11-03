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
import * as i0 from "@angular/core";
export class FilterMenuFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FilterMenuFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵFilterMenuFeatureModule_BaseFactory; return function FilterMenuFeatureModule_Factory(t) { return (ɵFilterMenuFeatureModule_BaseFactory || (ɵFilterMenuFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(FilterMenuFeatureModule)))(t || FilterMenuFeatureModule); }; }();
FilterMenuFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FilterMenuFeatureModule });
FilterMenuFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricModule,
            ReactiveFormsModule,
            FilterApiModule,
            ActiveFilterListModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterMenuFeatureModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterMenuFeatureModule, { declarations: [FilterIconComponent,
        FilterMenuComponent,
        FilterMenuTriggerComponent,
        ColumnSelectorComponent,
        FilterTypeSelectorComponent,
        FilterValueComponent,
        FieldSelectorComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        FilterApiModule,
        ActiveFilterListModule], exports: [FilterMenuTriggerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQTJCckYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFFekQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzsyUUFKVyx1QkFBdUIsU0FBdkIsdUJBQXVCO3lFQUF2Qix1QkFBdUI7NkVBdkIxQjtZQUNSLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixzQkFBc0I7U0FDdEI7dUZBaUJXLHVCQUF1QjtjQXhCbkMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLHNCQUFzQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtvQkFDdkIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLDBCQUEwQjtpQkFDMUI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixtQkFBbUI7aUJBQ25CO2FBQ0Q7O3dGQUNZLHVCQUF1QixtQkFmbEMsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsc0JBQXNCLGFBYnRCLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixzQkFBc0IsYUFZdEIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4tc2VsZWN0b3IvY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zZWxlY3Rvci9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckFwaU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5hcGktbW9kdWxlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgfSBmcm9tICcuLi9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZpbHRlckFwaU1vZHVsZSxcblx0XHRBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZpbHRlckljb25Db21wb25lbnQsXG5cdFx0RmlsdGVyTWVudUNvbXBvbmVudCxcblx0XHRGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCxcblx0XHRDb2x1bW5TZWxlY3RvckNvbXBvbmVudCxcblx0XHRGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQsXG5cdFx0RmlsdGVyVmFsdWVDb21wb25lbnQsXG5cdFx0RmllbGRTZWxlY3RvckNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZpbHRlckFwaU1vZHVsZTogRmlsdGVyQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoZmlsdGVyQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlckFwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19