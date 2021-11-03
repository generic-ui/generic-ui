import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingApiModule } from '../core/api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import * as i0 from "@angular/core";
export class PagingFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
PagingFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵPagingFeatureModule_BaseFactory; return function PagingFeatureModule_Factory(t) { return (ɵPagingFeatureModule_BaseFactory || (ɵPagingFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(PagingFeatureModule)))(t || PagingFeatureModule); }; }();
PagingFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PagingFeatureModule });
PagingFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricModule,
            PagingApiModule,
            TranslationFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    PagingApiModule,
                    TranslationFeatureModule
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PagingFeatureModule, { declarations: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent], imports: [CommonModule,
        FabricModule,
        PagingApiModule,
        TranslationFeatureModule], exports: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUEwQjVGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU87WUFDTix3QkFBd0I7U0FDeEIsQ0FBQztJQUNILENBQUM7O3VQQU5XLG1CQUFtQixTQUFuQixtQkFBbUI7cUVBQW5CLG1CQUFtQjt5RUF2QnRCO1lBQ1IsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1lBQ2Ysd0JBQXdCO1NBQ3hCO3VGQWtCVyxtQkFBbUI7Y0F4Qi9CLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2Ysd0JBQXdCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixtQ0FBbUM7b0JBQ25DLCtCQUErQjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsbUNBQW1DO29CQUNuQywrQkFBK0I7aUJBQy9CO2FBQ0Q7O3dGQUNZLG1CQUFtQixtQkFoQjlCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCLGFBWC9CLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLHdCQUF3QixhQVd4QixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUNBQW1DO1FBQ25DLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU3RhdHNDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UGFnaW5nQXBpTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0UGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHBhZ2luZ0FwaU1vZHVsZTogUGFnaW5nQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAocGFnaW5nQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BhZ2luZ0FwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19