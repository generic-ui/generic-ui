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
const exportDeclarations = [
    ListViewComponent,
    listViewGatewayDeclarations
];
export class ListViewFeatureModule {
}
ListViewFeatureModule.exportDeclarations = Array.from(exportDeclarations);
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
                    listViewGatewayDeclarations
                ],
                exports: exportDeclarations,
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUvRixNQUFNLGtCQUFrQixHQUFHO0lBQzFCLGlCQUFpQjtJQUNqQiwyQkFBMkI7Q0FDM0IsQ0FBQztBQTZCRixNQUFNLE9BQU8scUJBQXFCOztBQUUxQix3Q0FBa0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O1lBN0IzRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osaUJBQWlCO29CQUVqQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLDRCQUE0QjtvQkFDNUIsdUJBQXVCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUV2Qiw4QkFBOEI7b0JBQzlCLHlCQUF5QjtvQkFDekIsb0NBQW9DO29CQUVwQywyQkFBMkI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFNBQVMsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3QtaXRlbS9saXN0LXZpZXctaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQtaXRlbS9saXN0LXZpZXcuY2FyZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGUvbGlzdC12aWV3LmdhdGVzJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NvcnRpbmcvZmVhdHVyZS9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0TGlzdFZpZXdDb21wb25lbnQsXG5cdGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRMaXN0Vmlld0FwaU1vZHVsZSxcblxuXHRcdEZhYnJpY1NlbGVjdE1vZHVsZSxcblx0XHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRcdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRcdFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUsXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3TGF5b3V0Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3U291cmNlQ29tcG9uZW50LFxuXG5cdFx0TGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50LFxuXG5cdFx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBBcnJheS5mcm9tKGV4cG9ydERlY2xhcmF0aW9ucyk7XG5cblx0Ly8gY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmc6IFBhZ2luZ0ZlYXR1cmVNb2R1bGUpIHtcblx0Ly8gfVxufVxuIl19