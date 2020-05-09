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
export class PagingFeatureModule {
    /**
     * @return {?}
     */
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXlCbEUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUUvQixNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOzs7WUE3QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixtQ0FBbUM7b0JBQ25DLCtCQUErQjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsbUNBQW1DO29CQUNuQywrQkFBK0I7aUJBQy9CO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRvci9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdHMvcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWx0ZXJuYXRpdmUtcGFnaW5nL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9hbHRlcm5hdGl2ZS1wYWdpbmcvcGFnZXMvYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0FwaU1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGFnaW5nLmFwaS1tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRQYWdpbmdBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0ZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0UGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=