import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../../filter/feature/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../../filter/feature/active-filters/active-filter-list.module';
import * as i0 from "@angular/core";
export class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceCounterFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵSourceCounterFeatureModule_BaseFactory; return function SourceCounterFeatureModule_Factory(t) { return (ɵSourceCounterFeatureModule_BaseFactory || (ɵSourceCounterFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(SourceCounterFeatureModule)))(t || SourceCounterFeatureModule); }; }();
SourceCounterFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SourceCounterFeatureModule });
SourceCounterFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        ActiveFilterService
    ], imports: [[
            CommonModule,
            FilterMenuFeatureModule,
            ActiveFilterListModule,
            FabricButtonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceCounterFeatureModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SourceCounterFeatureModule, { declarations: [ActiveFilterMenuTriggerDirective,
        ActiveFilterMenuComponent], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7QUEyQjFHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhO0lBRTVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7MFJBSlcsMEJBQTBCLFNBQTFCLDBCQUEwQjs0RUFBMUIsMEJBQTBCO2lGQVAzQjtRQUNWLG1CQUFtQjtLQUNuQixZQWxCUTtZQUNSLFlBQVk7WUFFWix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBRXRCLGtCQUFrQjtTQUVsQjt1RkFlVywwQkFBMEI7Y0F4QnRDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFFdEIsa0JBQWtCO2lCQUVsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0NBQWdDO29CQUNoQyx5QkFBeUI7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixnQ0FBZ0M7aUJBQ2hDO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQkFBbUI7aUJBQ25CO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIseUJBQXlCO2lCQUN6QjthQUNEOzt3RkFDWSwwQkFBMEIsbUJBYnJDLGdDQUFnQztRQUNoQyx5QkFBeUIsYUFWekIsWUFBWTtRQUVaLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFFdEIsa0JBQWtCLGFBUWxCLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNCdXR0b25Nb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2ZlYXR1cmUvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUsXG5cblx0XHRGYWJyaWNCdXR0b25Nb2R1bGVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSxcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJTZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19