import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule } from '@generic-ui/fabric';
import { ActiveFilterMenuTriggerDirective } from './filter/active-filter-menu-trigger.directive';
import { ActiveFilterMenuComponent } from './filter/active-filter-menu.component';
import { ActiveFilterService } from './filter/active-filter.service';
import { FilterMenuFeatureModule } from '../../../filter/src/menu/filter-menu.feature-module';
import { ActiveFilterListModule } from '../../../filter/src/active-filters/active-filter-list.module';
import * as i0 from "@angular/core";
export class SourceCounterFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SourceCounterFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: SourceCounterFeatureModule, declarations: [ActiveFilterMenuTriggerDirective,
            ActiveFilterMenuComponent], imports: [CommonModule,
            FilterMenuFeatureModule,
            ActiveFilterListModule,
            FabricButtonModule], exports: [ActiveFilterMenuTriggerDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SourceCounterFeatureModule, providers: [
            ActiveFilterService
        ], imports: [CommonModule,
            FilterMenuFeatureModule,
            ActiveFilterListModule,
            FabricButtonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SourceCounterFeatureModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY291bnRlci9zb3VyY2UtY291bnRlci5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOERBQThELENBQUM7O0FBd0J0RyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQUU1RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7dUdBSlcsMEJBQTBCO3dHQUExQiwwQkFBMEIsaUJBVnJDLGdDQUFnQztZQUNoQyx5QkFBeUIsYUFWekIsWUFBWTtZQUVaLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFFdEIsa0JBQWtCLGFBUWxCLGdDQUFnQzt3R0FNckIsMEJBQTBCLGFBSjNCO1lBQ1YsbUJBQW1CO1NBQ25CLFlBakJBLFlBQVk7WUFFWix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBRXRCLGtCQUFrQjs7MkZBY1AsMEJBQTBCO2tCQXJCdEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFFdEIsa0JBQWtCO3FCQUVsQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZ0NBQWdDO3dCQUNoQyx5QkFBeUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQ0FBZ0M7cUJBQ2hDO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7cUJBQ25CO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZhYnJpY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRcdEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUsXG5cblx0XHRGYWJyaWNCdXR0b25Nb2R1bGVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSxcblx0XHRBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==