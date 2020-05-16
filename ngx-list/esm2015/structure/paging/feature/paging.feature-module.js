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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUF5QjVFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBRXJELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU87WUFDTix3QkFBd0I7U0FDeEIsQ0FBQztJQUNILENBQUM7OztZQTdCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixlQUFlO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDYixlQUFlO29CQUNmLHdCQUF3QjtvQkFDeEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG1DQUFtQztvQkFDbkMsK0JBQStCO2lCQUMvQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixtQ0FBbUM7b0JBQ25DLCtCQUErQjtpQkFDL0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nQXBpTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wYWdpbmcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL25hdmlnYXRvci9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvc3RhdHMvcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFBhZ2luZ0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50LFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==