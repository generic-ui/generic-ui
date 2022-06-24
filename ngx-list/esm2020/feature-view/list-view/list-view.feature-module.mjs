import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectModule } from '@generic-ui/fabric';
import { ListViewComponent } from './list-view.component';
import { ListViewSourceComponent } from './source/list-view-source.component';
import { ListViewLayoutComponent } from './layout/list-view-layout.component';
import { ListViewItemComponent } from './source/list-item/list-view-item.component';
import { PagingFeatureModule } from '../../feature/structure/paging/paging.feature-module';
import { EmptySourceFeatureModule } from '../../feature/structure/source/empty/empty-source.feature-module';
import { ListViewContainerCardComponent } from './card/list-view.container-card.component';
import { ListViewCardItemComponent } from './card/card-item/list-view.card-item.component';
import { ListViewContainerModeSelectComponent } from './container/select/list-view.container-mode-select.component';
import { listViewGatewayDeclarations } from './gate/list-view.gates';
import { SearchFeatureModule } from '../../feature/structure/search/search.feature-module';
import { SortingSelectorFeatureModule } from '../../feature/structure/sorting/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../feature/structure/filter/menu/filter-menu.feature-module';
import { ListViewPublisher } from '../../core/list-view/api/list-view.publisher';
import { ListViewEventRepository } from '../../core/list-view/api/list-view.event-repository';
import { ListViewWarehouse } from '../../core/list-view/api/list-view.warehouse';
import { ListViewModeArchive } from '../../core/list-view/api/mode/list-view.mode.archive';
import { CoreContainer } from '@generic-ui/hermes';
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
export function provideListViewCommandInvoker() {
    return CoreContainer.resolve(ListViewPublisher);
}
export function provideListViewWarehouse() {
    return CoreContainer.resolve(ListViewWarehouse);
}
export function provideListViewEventRepository() {
    return CoreContainer.resolve(ListViewEventRepository);
}
export function provideListViewModeArchive() {
    return CoreContainer.resolve(ListViewModeArchive);
}
export class ListViewFeatureModule {
}
ListViewFeatureModule.exportDeclarations = Array.from(exportDeclarations);
ListViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFeatureModule, declarations: [ListViewComponent,
        ListViewItemComponent,
        ListViewLayoutComponent,
        ListViewSourceComponent,
        ListViewContainerCardComponent,
        ListViewCardItemComponent,
        ListViewContainerModeSelectComponent, i1.ListViewPagingGate, i2.ListViewModeGate, i3.ListViewTemplateGate, i4.ListViewFieldGate, i5.ListViewSearchingGate, i6.ListViewL10nGate, i7.ListViewSourceGate], imports: [CommonModule,
        FabricSelectModule,
        PagingFeatureModule,
        SearchFeatureModule,
        EmptySourceFeatureModule,
        SortingSelectorFeatureModule,
        FilterMenuFeatureModule], exports: [ListViewComponent, i1.ListViewPagingGate, i2.ListViewModeGate, i3.ListViewTemplateGate, i4.ListViewFieldGate, i5.ListViewSearchingGate, i6.ListViewL10nGate, i7.ListViewSourceGate] });
ListViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFeatureModule, providers: [
        { provide: ListViewPublisher, useFactory: provideListViewCommandInvoker },
        { provide: ListViewWarehouse, useFactory: provideListViewWarehouse },
        { provide: ListViewEventRepository, useFactory: provideListViewEventRepository },
        { provide: ListViewModeArchive, useFactory: provideListViewModeArchive }
    ], imports: [[
            CommonModule,
            FabricSelectModule,
            PagingFeatureModule,
            SearchFeatureModule,
            EmptySourceFeatureModule,
            SortingSelectorFeatureModule,
            FilterMenuFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
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
                    providers: [
                        { provide: ListViewPublisher, useFactory: provideListViewCommandInvoker },
                        { provide: ListViewWarehouse, useFactory: provideListViewWarehouse },
                        { provide: ListViewEventRepository, useFactory: provideListViewEventRepository },
                        { provide: ListViewModeArchive, useFactory: provideListViewModeArchive }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVwSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxn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QUFVLEVBQUUsMEJBQTBCLEVBQUU7cUJBRXhFO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvbGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQtaXRlbS9saXN0LXZpZXcuY2FyZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgbGlzdFZpZXdJbml0aWFsaXplciB9IGZyb20gJy4uLy4uL2NvcmUvbGlzdC12aWV3L2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGUvbGlzdC12aWV3LmdhdGVzJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3J0aW5nL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2NvcmUvbGlzdC12aWV3L2FwaS9saXN0LXZpZXcucHVibGlzaGVyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL2xpc3Qtdmlldy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL2xpc3Qtdmlldy53YXJlaG91c2UnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvbGlzdC12aWV3L2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0TGlzdFZpZXdDb21wb25lbnQsXG5cdGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3Q29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTGlzdFZpZXdQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3V2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKExpc3RWaWV3V2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTGlzdFZpZXdNb2RlQXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld01vZGVBcmNoaXZlKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cdFx0U29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSxcblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRMaXN0Vmlld0l0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdMYXlvdXRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdTb3VyY2VDb21wb25lbnQsXG5cblx0XHRMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQsXG5cblx0XHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IExpc3RWaWV3UHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld1dhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSB9LFxuXG5cdFx0eyBwcm92aWRlOiBMaXN0Vmlld01vZGVBcmNoaXZlLCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdNb2RlQXJjaGl2ZSB9XG5cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBBcnJheS5mcm9tKGV4cG9ydERlY2xhcmF0aW9ucyk7XG59XG4iXX0=