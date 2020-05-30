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
                        EmptySourceFeatureModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSWpGO0lBOEJDLCtCQUE2QixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtJQUN4RCxDQUFDOztnQkEvQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjt3QkFFakIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZO3dCQUNYLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFFdkIsOEJBQThCO3dCQUM5Qix5QkFBeUI7d0JBQ3pCLG9DQUFvQzt1QkFFakMsMkJBQTJCLENBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDUixpQkFBaUI7d0JBQ2pCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBdENRLG1CQUFtQjs7SUEyQzVCLDRCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FKWSxxQkFBcUI7Ozs7OztJQUVyQix1Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3QtaXRlbS9saXN0LXZpZXctaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2VtcHR5LXNvdXJjZS9mZWF0dXJlL2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQtaXRlbS9saXN0LXZpZXcuY2FyZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZXdheS9saXN0LXZpZXctZ2F0ZXdheS5kZWNsYXJhdGlvbnMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3QXBpTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3TGF5b3V0Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3U291cmNlQ29tcG9uZW50LFxuXG5cdFx0TGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50LFxuXG5cdFx0Li4ubGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0cHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmdGZWF0dXJlTW9kdWxlKSB7XG5cdH1cbn1cbiJdfQ==