/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class PagingFeatureModule extends FeatureModule {
    constructor() {
        super();
    }
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
/** @nocollapse */
PagingFeatureModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUF5QjVFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBUXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBUkQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTztZQUNOLHdCQUF3QjtTQUN4QixDQUFDO0lBQ0gsQ0FBQzs7O1lBN0JELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsbUNBQW1DO29CQUNuQywrQkFBK0I7aUJBQy9CO2dCQUNELE9BQU8sRUFBRTtvQkFDUixlQUFlO29CQUNmLHdCQUF3QjtvQkFDeEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG1DQUFtQztvQkFDbkMsK0JBQStCO2lCQUMvQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvbmF2aWdhdG9yL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL3BhZ2luZy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvbmF2aWdhdG9yL3BhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UGFnaW5nQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFBhZ2luZ0NvbXBvbmVudCxcblx0XHRQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0UGFnaW5nU2VsZWN0Q29tcG9uZW50LFxuXHRcdFBhZ2luZ1N0YXRzQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG59XG4iXX0=