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
import { EmptySourceFeatureModule } from '../../source/feature/empty/empty-source.feature-module';
import { ListViewContainerCardComponent } from './card/list-view.container-card.component';
import { ListViewCardItemComponent } from './card/card-item/list-view.card-item.component';
import { ListViewContainerModeSelectComponent } from './container/select/list-view.container-mode-select.component';
import { ListViewApiModule } from '../core/api/list-view.api-module';
import { listViewGatewayDeclarations } from './gate/list-view.gates';
import { SearchFeatureModule } from '../../search/feature/search.feature-module';
import { SortingSelectorFeatureModule } from '../../sorting/feature/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../filter/feature/menu/filter-menu.feature-module';
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    ListViewComponent,
    listViewGatewayDeclarations
], listViewGatewayDeclarations);
var ListViewFeatureModule = /** @class */ (function () {
    function ListViewFeatureModule(paging) {
        this.paging = paging;
    }
    ListViewFeatureModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
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
                    exports: exportDeclarations,
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
    /** @type {?} */
    ListViewFeatureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    ListViewFeatureModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztJQUV6RixrQkFBa0I7SUFDdkIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtHQUN4QiwyQkFBMkIsQ0FDOUI7QUFFRDtJQStCQywrQkFBNkIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7SUFDeEQsQ0FBQztJQUhNLHdDQUFrQixvQkFBTyxrQkFBa0IsRUFBRTs7Z0JBN0JwRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUVqQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIsdUJBQXVCO3FCQUN2QjtvQkFDRCxZQUFZO3dCQUNYLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFFdkIsOEJBQThCO3dCQUM5Qix5QkFBeUI7d0JBQ3pCLG9DQUFvQzt1QkFFakMsMkJBQTJCLENBQzlCO29CQUNELE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFNBQVMsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQTNDUSxtQkFBbUI7O0lBa0Q1Qiw0QkFBQztDQUFBLEFBakNELElBaUNDO1NBTlkscUJBQXFCOzs7SUFFakMseUNBQW9EOzs7OztJQUV4Qyx1Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3QtaXRlbS9saXN0LXZpZXctaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQtaXRlbS9saXN0LXZpZXcuY2FyZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGUvbGlzdC12aWV3LmdhdGVzJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NvcnRpbmcvZmVhdHVyZS9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0TGlzdFZpZXdDb21wb25lbnQsXG5cdGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyxcblx0Li4ubGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3QXBpTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cdFx0U29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSxcblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRMaXN0Vmlld0l0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdMYXlvdXRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdTb3VyY2VDb21wb25lbnQsXG5cblx0XHRMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQsXG5cblx0XHQuLi5saXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmdGZWF0dXJlTW9kdWxlKSB7XG5cdH1cbn1cbiJdfQ==