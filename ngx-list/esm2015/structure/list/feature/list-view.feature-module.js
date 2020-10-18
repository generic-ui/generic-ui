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
import { ListViewApiModule } from '../core/api/list-view.api-module';
import { listViewGatewayDeclarations } from './gateway/list-view-gateway.declarations';
import { SearchFeatureModule } from '../../search/feature/search.feature-module';
import { SortingSelectorFeatureModule } from '../../sorting/feature/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../filter/feature/filter-menu.feature-module';
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
                    EmptySourceFeatureModule,
                    SortingSelectorFeatureModule,
                    FilterMenuFeatureModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFpQzFGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBNkIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7SUFDeEQsQ0FBQzs7O1lBakNELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7b0JBRWpCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHdCQUF3QjtvQkFDeEIsNEJBQTRCO29CQUM1Qix1QkFBdUI7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBRXZCLDhCQUE4QjtvQkFDOUIseUJBQXlCO29CQUN6QixvQ0FBb0M7b0JBRXBDLEdBQUcsMkJBQTJCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsaUJBQWlCO29CQUNqQiwyQkFBMkI7aUJBQzNCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2I7Ozs7WUF6Q1EsbUJBQW1COzs7Ozs7O0lBNENmLHVDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGlzdC12aWV3LWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC1pdGVtL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZW1wdHktc291cmNlL2ZlYXR1cmUvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1pdGVtL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZXdheS9saXN0LXZpZXctZ2F0ZXdheS5kZWNsYXJhdGlvbnMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc29ydGluZy9mZWF0dXJlL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRMaXN0Vmlld0FwaU1vZHVsZSxcblxuXHRcdEZhYnJpY1NlbGVjdE1vZHVsZSxcblx0XHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRcdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRcdFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUsXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3TGF5b3V0Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3U291cmNlQ29tcG9uZW50LFxuXG5cdFx0TGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50LFxuXG5cdFx0Li4ubGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0cHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmdGZWF0dXJlTW9kdWxlKSB7XG5cdH1cbn1cbiJdfQ==