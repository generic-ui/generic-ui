/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { SortingSelectorFeatureModule } from '../../sorting/feature/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../filter/feature/filter-menu.feature-module';
var ListViewFeatureModule = /** @class */ (function () {
    function ListViewFeatureModule(paging) {
        this.paging = paging;
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
                    declarations: tslib_1.__spread([
                        ListViewComponent,
                        ListViewItemComponent,
                        ListViewLayoutComponent,
                        ListViewSourceComponent,
                        ListViewContainerCardComponent,
                        ListViewCardItemComponent,
                        ListViewContainerModeSelectComponent
                    ], listViewGatewayDeclarations),
                    exports: [
                        ListViewComponent,
                        listViewGatewayDeclarations
                    ],
                    providers: []
                },] }
    ];
    /** @nocollapse */
    ListViewFeatureModule.ctorParameters = function () { return [
        { type: PagingFeatureModule }
    ]; };
    return ListViewFeatureModule;
}());
export { ListViewFeatureModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewFeatureModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRzFGO0lBZ0NDLCtCQUE2QixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtJQUN4RCxDQUFDOztnQkFqQ0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjt3QkFFakIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4Qiw0QkFBNEI7d0JBQzVCLHVCQUF1QjtxQkFDdkI7b0JBQ0QsWUFBWTt3QkFDWCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBRXZCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3dCQUN6QixvQ0FBb0M7dUJBRWpDLDJCQUEyQixDQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsaUJBQWlCO3dCQUNqQiwyQkFBMkI7cUJBQzNCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQXpDUSxtQkFBbUI7O0lBOEM1Qiw0QkFBQztDQUFBLEFBbENELElBa0NDO1NBSlkscUJBQXFCOzs7Ozs7SUFFckIsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9lbXB0eS1zb3VyY2UvZmVhdHVyZS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvc2VsZWN0L2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3QXBpTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGV3YXkvbGlzdC12aWV3LWdhdGV3YXkuZGVjbGFyYXRpb25zJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NvcnRpbmcvZmVhdHVyZS9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TGlzdFZpZXdBcGlNb2R1bGUsXG5cblx0XHRGYWJyaWNTZWxlY3RNb2R1bGUsXG5cdFx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0XHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRcdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblx0XHRTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlLFxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdExpc3RWaWV3Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3SXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0xheW91dENvbXBvbmVudCxcblx0XHRMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCxcblxuXHRcdExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCxcblxuXHRcdC4uLmxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nRmVhdHVyZU1vZHVsZSkge1xuXHR9XG59XG4iXX0=