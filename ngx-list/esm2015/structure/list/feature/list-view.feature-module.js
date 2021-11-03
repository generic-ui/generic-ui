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
import * as i0 from "@angular/core";
import * as i1 from "./gate/paging/list-view-paging.gate";
import * as i2 from "./gate/mode/list-view-mode.gate";
import * as i3 from "./gate/template/list-view-template.gate";
import * as i4 from "./gate/field/list-view-field.gate";
import * as i5 from "./gate/searching/list-view-searching.gate";
import * as i6 from "./gate/l10n/list-view-l10n.gate";
import * as i7 from "./gate/source/list-view-source.gate";
const exportDeclarations = [
    ListViewComponent,
    listViewGatewayDeclarations
];
export class ListViewFeatureModule {
}
ListViewFeatureModule.exportDeclarations = Array.from(exportDeclarations);
ListViewFeatureModule.ɵfac = function ListViewFeatureModule_Factory(t) { return new (t || ListViewFeatureModule)(); };
ListViewFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListViewFeatureModule });
ListViewFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule,
            ListViewApiModule,
            FabricSelectModule,
            PagingFeatureModule,
            SearchFeatureModule,
            EmptySourceFeatureModule,
            SortingSelectorFeatureModule,
            FilterMenuFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewFeatureModule, [{
        type: NgModule,
        args: [{
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
                    listViewGatewayDeclarations
                ],
                exports: exportDeclarations,
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListViewFeatureModule, { declarations: [ListViewComponent,
        ListViewItemComponent,
        ListViewLayoutComponent,
        ListViewSourceComponent,
        ListViewContainerCardComponent,
        ListViewCardItemComponent,
        ListViewContainerModeSelectComponent, i1.ListViewPagingGate, i2.ListViewModeGate, i3.ListViewTemplateGate, i4.ListViewFieldGate, i5.ListViewSearchingGate, i6.ListViewL10nGate, i7.ListViewSourceGate], imports: [CommonModule,
        ListViewApiModule,
        FabricSelectModule,
        PagingFeatureModule,
        SearchFeatureModule,
        EmptySourceFeatureModule,
        SortingSelectorFeatureModule,
        FilterMenuFeatureModule], exports: [ListViewComponent, i1.ListViewPagingGate, i2.ListViewModeGate, i3.ListViewTemplateGate, i4.ListViewFieldGate, i5.ListViewSearchingGate, i6.ListViewL10nGate, i7.ListViewSourceGate] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7Ozs7Ozs7O0FBRS9GLE1BQU0sa0JBQWtCLEdBQUc7SUFDMUIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtDQUMzQixDQUFDO0FBNkJGLE1BQU0sT0FBTyxxQkFBcUI7O0FBRTFCLHdDQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzswRkFGL0MscUJBQXFCO3VFQUFyQixxQkFBcUI7NEVBRnRCLEVBQUUsWUF4Qko7WUFDUixZQUFZO1lBQ1osaUJBQWlCO1lBRWpCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4Qiw0QkFBNEI7WUFDNUIsdUJBQXVCO1NBQ3ZCO3VGQWdCVyxxQkFBcUI7Y0EzQmpDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7b0JBRWpCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHdCQUF3QjtvQkFDeEIsNEJBQTRCO29CQUM1Qix1QkFBdUI7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBRXZCLDhCQUE4QjtvQkFDOUIseUJBQXlCO29CQUN6QixvQ0FBb0M7b0JBRXBDLDJCQUEyQjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsU0FBUyxFQUFFLEVBQUU7YUFDYjs7d0ZBQ1kscUJBQXFCLG1CQWRoQyxpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFFdkIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixvQ0FBb0MsOEtBbEJwQyxZQUFZO1FBQ1osaUJBQWlCO1FBRWpCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsdUJBQXVCLGFBZHhCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGlzdC12aWV3LWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC1pdGVtL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc291cmNlL2ZlYXR1cmUvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1pdGVtL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZS9saXN0LXZpZXcuZ2F0ZXMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc29ydGluZy9mZWF0dXJlL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRMaXN0Vmlld0NvbXBvbmVudCxcblx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3QXBpTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cdFx0U29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSxcblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRMaXN0Vmlld0l0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdMYXlvdXRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdTb3VyY2VDb21wb25lbnQsXG5cblx0XHRMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQsXG5cblx0XHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHQvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZzogUGFnaW5nRmVhdHVyZU1vZHVsZSkge1xuXHQvLyB9XG59XG4iXX0=