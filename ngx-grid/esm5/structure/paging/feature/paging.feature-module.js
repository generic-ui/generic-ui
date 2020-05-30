/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingApiModule } from '../domain-api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
var PagingFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(PagingFeatureModule, _super);
    function PagingFeatureModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    PagingFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [
            PagingDisplayModeArchive
        ];
    };
    PagingFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        PagingApiModule
                    ],
                    declarations: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ],
                    exports: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    PagingFeatureModule.ctorParameters = function () { return []; };
    return PagingFeatureModule;
}(FeatureModule));
export { PagingFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTVFO0lBdUJ5QywrQ0FBYTtJQVFyRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVJNLGdDQUFZOzs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOztnQkE3QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTtxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLCtCQUErQjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7cUJBQy9CO2lCQUNEOzs7O0lBYUQsMEJBQUM7Q0FBQSxBQW5DRCxDQXVCeUMsYUFBYSxHQVlyRDtTQVpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nQXBpTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wYWdpbmcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL25hdmlnYXRvci9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvc3RhdHMvcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFBhZ2luZ0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0UGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxufVxuIl19