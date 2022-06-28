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
SourceCounterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceCounterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, declarations: [ActiveFilterMenuTriggerDirective,
        ActiveFilterMenuComponent], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] });
SourceCounterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, providers: [
        ActiveFilterService
    ], imports: [CommonModule,
        FilterMenuFeatureModule,
        ActiveFilterListModule,
        FabricButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceCounterFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9jb3VudGVyL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUEyQi9GLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhO0lBRTVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7dUhBSlcsMEJBQTBCO3dIQUExQiwwQkFBMEIsaUJBYnJDLGdDQUFnQztRQUNoQyx5QkFBeUIsYUFWekIsWUFBWTtRQUVaLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFFdEIsa0JBQWtCLGFBUWxCLGdDQUFnQzt3SEFTckIsMEJBQTBCLGFBUDNCO1FBQ1YsbUJBQW1CO0tBQ25CLFlBakJBLFlBQVk7UUFFWix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBRXRCLGtCQUFrQjsyRkFpQlAsMEJBQTBCO2tCQXhCdEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFFdEIsa0JBQWtCO3FCQUVsQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx5QkFBeUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7cUJBQ25CO29CQUNELGVBQWUsRUFBRTt3QkFDaEIseUJBQXlCO3FCQUN6QjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNCdXR0b25Nb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uL2ZpbHRlci9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFx0QWN0aXZlRmlsdGVyTGlzdE1vZHVsZSxcblxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlLFxuXHRcdEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEFjdGl2ZUZpbHRlclNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=