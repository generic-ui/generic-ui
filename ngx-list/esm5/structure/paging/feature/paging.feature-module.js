/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { PagingComponent } from './paging.component';
import { PagingNavigatorComponent } from './navigator/paging-navigator.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { PagingStatsComponent } from './stats/paging-stats.component';
import { AlternativePagingNavigatorComponent } from './alternative-paging/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './alternative-paging/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingApiModule } from '../domain-api/paging.api-module';
var PagingFeatureModule = /** @class */ (function () {
    function PagingFeatureModule() {
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
    return PagingFeatureModule;
}());
export { PagingFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRTtJQUFBO0lBK0JBLENBQUM7Ozs7SUFOTyxnQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTztZQUNOLHdCQUF3QjtTQUN4QixDQUFDO0lBQ0gsQ0FBQzs7Z0JBN0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3FCQUMvQjtpQkFDRDs7SUFTRCwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBUlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU3RhdHNDb21wb25lbnQgfSBmcm9tICcuL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FsdGVybmF0aXZlLXBhZ2luZy9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vYWx0ZXJuYXRpdmUtcGFnaW5nL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL3BhZ2luZy5hcGktbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UGFnaW5nQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxufVxuIl19