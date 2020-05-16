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
        return _super !== null && _super.apply(this, arguments) || this;
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
                        AlternativePagingPagesComponent,
                    ],
                    exports: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent,
                    ]
                },] }
    ];
    return PagingFeatureModule;
}(FeatureModule));
export { PagingFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTVFO0lBdUJ5QywrQ0FBYTtJQXZCdEQ7O0lBK0JBLENBQUM7Ozs7SUFOTyxnQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTztZQUNOLHdCQUF3QjtTQUN4QixDQUFDO0lBQ0gsQ0FBQzs7Z0JBN0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3FCQUMvQjtpQkFDRDs7SUFTRCwwQkFBQztDQUFBLEFBL0JELENBdUJ5QyxhQUFhLEdBUXJEO1NBUlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvbmF2aWdhdG9yL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL3BhZ2luZy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvbmF2aWdhdG9yL3BhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UGFnaW5nQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxufVxuIl19