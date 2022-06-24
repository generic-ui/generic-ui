import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../filter/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../filter/active-filters/active-filter-list.module';
import * as i0 from "@angular/core";
export class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceCounterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceCounterFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceCounterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceCounterFeatureModule, declarations: [ActiveFilterMenuTriggerDirective,
        ActiveFilterMenuComponent], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] });
SourceCounterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceCounterFeatureModule, providers: [
        ActiveFilterService
    ], imports: [[
            CommonModule,
            FilterMenuFeatureModule,
            ActiveFilterListModule,
            FabricButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceCounterFeatureModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUEyQi9GLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhO0lBRTVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7d0hBSlcsMEJBQTBCO3lIQUExQiwwQkFBMEIsaUJBYnJDLGdDQUFnQztRQUNoQyx5QkFBeUIsYUFWekIsWUFBWTtRQUVaLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFFdEIsa0JBQWtCLGFBUWxCLGdDQUFnQzt5SEFTckIsMEJBQTBCLGFBUDNCO1FBQ1YsbUJBQW1CO0tBQ25CLFlBbEJRO1lBQ1IsWUFBWTtZQUVaLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFFdEIsa0JBQWtCO1NBRWxCOzRGQWVXLDBCQUEwQjtrQkF4QnRDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBRVosdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBRXRCLGtCQUFrQjtxQkFFbEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGdDQUFnQzt3QkFDaEMseUJBQXlCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZ0NBQWdDO3FCQUNoQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUJBQW1CO3FCQUNuQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLHlCQUF5QjtxQkFDekI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyU2VydmljZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZpbHRlci9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUsXG5cblx0XHRGYWJyaWNCdXR0b25Nb2R1bGVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSxcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJTZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19