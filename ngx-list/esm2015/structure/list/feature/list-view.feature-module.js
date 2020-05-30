/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectModule } from '@generic-ui/fabric';
import { ListViewComponent } from './list-view.component';
import { ListViewSourceComponent } from './source/list-view-source.component';
import { ListViewLayoutComponent } from './layout/list-view-layout.component';
import { ListViewItemComponent } from './source/list-item/list-view-item.component';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { EmptySourceFeatureModule } from '../../empty-source/feature/empty-source.feature-module';
import { ListViewContainerCardComponent } from './card/list-view.container-card.component';
import { ListViewCardItemComponent } from './card/card-item/list-view.card-item.component';
import { ListViewContainerModeSelectComponent } from './container/select/list-view.container-mode-select.component';
import { ListViewApiModule } from '../domain-api/list-view.api-module';
import { listViewGatewayDeclarations } from './gateway/list-view-gateway.declarations';
import { SearchFeatureModule } from '../../search/feature/search.feature-module';
export class ListViewFeatureModule {
    /**
     * @param {?} paging
     */
    constructor(paging) {
        this.paging = paging;
    }
}
ListViewFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ListViewApiModule,
                    FabricSelectModule,
                    PagingFeatureModule,
                    SearchFeatureModule,
                    EmptySourceFeatureModule
                ],
                declarations: [
                    ListViewComponent,
                    ListViewItemComponent,
                    ListViewLayoutComponent,
                    ListViewSourceComponent,
                    ListViewContainerCardComponent,
                    ListViewCardItemComponent,
                    ListViewContainerModeSelectComponent,
                    ...listViewGatewayDeclarations
                ],
                exports: [
                    ListViewComponent,
                    listViewGatewayDeclarations
                ],
                providers: []
            },] }
];
/** @nocollapse */
ListViewFeatureModule.ctorParameters = () => [
    { type: PagingFeatureModule }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewFeatureModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFnQ2pGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBNkIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7SUFDeEQsQ0FBQzs7O1lBL0JELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7b0JBRWpCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFFdkIsOEJBQThCO29CQUM5Qix5QkFBeUI7b0JBQ3pCLG9DQUFvQztvQkFFcEMsR0FBRywyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixpQkFBaUI7b0JBQ2pCLDJCQUEyQjtpQkFDM0I7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDYjs7OztZQXRDUSxtQkFBbUI7Ozs7Ozs7SUF5Q2YsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9lbXB0eS1zb3VyY2UvZmVhdHVyZS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvc2VsZWN0L2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3QXBpTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGV3YXkvbGlzdC12aWV3LWdhdGV3YXkuZGVjbGFyYXRpb25zJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRMaXN0Vmlld0FwaU1vZHVsZSxcblxuXHRcdEZhYnJpY1NlbGVjdE1vZHVsZSxcblx0XHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRcdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdExpc3RWaWV3Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3SXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0xheW91dENvbXBvbmVudCxcblx0XHRMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCxcblxuXHRcdExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCxcblxuXHRcdC4uLmxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nRmVhdHVyZU1vZHVsZSkge1xuXHR9XG59XG4iXX0=