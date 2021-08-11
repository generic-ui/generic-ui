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
import { EmptySourceFeatureModule } from '../../source/feature/empty/empty-source.feature-module';
import { ListViewContainerCardComponent } from './card/list-view.container-card.component';
import { ListViewCardItemComponent } from './card/card-item/list-view.card-item.component';
import { ListViewContainerModeSelectComponent } from './container/select/list-view.container-mode-select.component';
import { ListViewApiModule } from '../core/api/list-view.api-module';
import { listViewGatewayDeclarations } from './gateway/list-view.gates';
import { SearchFeatureModule } from '../../search/feature/search.feature-module';
import { SortingSelectorFeatureModule } from '../../sorting/feature/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../filter/feature/menu/filter-menu.feature-module';
/** @type {?} */
const exportDeclarations = [
    ListViewComponent,
    listViewGatewayDeclarations,
    ...listViewGatewayDeclarations
];
export class ListViewFeatureModule {
    /**
     * @param {?} paging
     */
    constructor(paging) {
        this.paging = paging;
    }
}
ListViewFeatureModule.exportDeclarations = [...exportDeclarations];
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
                exports: exportDeclarations,
                providers: []
            },] }
];
/** @nocollapse */
ListViewFeatureModule.ctorParameters = () => [
    { type: PagingFeatureModule }
];
if (false) {
    /** @type {?} */
    ListViewFeatureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    ListViewFeatureModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7O01BRXpGLGtCQUFrQixHQUFHO0lBQzFCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsR0FBRywyQkFBMkI7Q0FDOUI7QUE2QkQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUlqQyxZQUE2QixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtJQUN4RCxDQUFDOztBQUhNLHdDQUFrQixHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDOztZQTdCcEQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQjtvQkFFakIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4Qiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFFdkIsOEJBQThCO29CQUM5Qix5QkFBeUI7b0JBQ3pCLG9DQUFvQztvQkFFcEMsR0FBRywyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFNBQVMsRUFBRSxFQUFFO2FBQ2I7Ozs7WUEzQ1EsbUJBQW1COzs7O0lBOEMzQix5Q0FBb0Q7Ozs7O0lBRXhDLHVDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGlzdC12aWV3LWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC1pdGVtL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc291cmNlL2ZlYXR1cmUvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1pdGVtL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZXdheS9saXN0LXZpZXcuZ2F0ZXMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc29ydGluZy9mZWF0dXJlL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRMaXN0Vmlld0NvbXBvbmVudCxcblx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zLFxuXHQuLi5saXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TGlzdFZpZXdBcGlNb2R1bGUsXG5cblx0XHRGYWJyaWNTZWxlY3RNb2R1bGUsXG5cdFx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0XHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRcdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblx0XHRTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlLFxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdExpc3RWaWV3Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3SXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0xheW91dENvbXBvbmVudCxcblx0XHRMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCxcblxuXHRcdExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCxcblxuXHRcdC4uLmxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZ0ZlYXR1cmVNb2R1bGUpIHtcblx0fVxufVxuIl19