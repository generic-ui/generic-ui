import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectModule } from '@generic-ui/fabric';
import { ListViewComponent } from './list-view.component';
import { ListViewSourceComponent } from './source/list-view-source.component';
import { ListViewLayoutComponent } from './layout/list-view-layout.component';
import { ListViewItemComponent } from './source/list-item/list-view-item.component';
import { PagingFeatureModule } from '../../../feature/structure/paging/src/paging.feature-module';
import { EmptySourceFeatureModule } from '../../../feature/structure/source/src/empty/empty-source.feature-module';
import { ListViewContainerCardComponent } from './card/list-view.container-card.component';
import { ListViewCardItemComponent } from './card/card-item/list-view.card-item.component';
import { ListViewContainerModeSelectComponent } from './container/select/list-view.container-mode-select.component';
import { listViewGatewayDeclarations } from './gate/list-view.gates';
import { SearchFeatureModule } from '../../../feature/structure/search/src/search.feature-module';
import { SortingSelectorFeatureModule } from '../../../feature/structure/sorting/src/selector/sorting-selector.feature-module';
import { FilterMenuFeatureModule } from '../../../feature/structure/filter/src/menu/filter-menu.feature-module';
import { ListViewPublisher } from '../../../core/list-view/src/api/list-view.publisher';
import { ListViewEventRepository } from '../../../core/list-view/src/api/list-view.event-repository';
import { ListViewWarehouse } from '../../../core/list-view/src/api/list-view.warehouse';
import { ListViewModeArchive } from '../../../core/list-view/src/api/mode/list-view.mode.archive';
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
ListViewFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, declarations: [ListViewComponent,
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
ListViewFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, providers: [
        { provide: ListViewPublisher, useFactory: provideListViewCommandInvoker },
        { provide: ListViewWarehouse, useFactory: provideListViewWarehouse },
        { provide: ListViewEventRepository, useFactory: provideListViewEventRepository },
        { provide: ListViewModeArchive, useFactory: provideListViewModeArchive }
    ], imports: [CommonModule,
        FabricSelectModule,
        PagingFeatureModule,
        SearchFeatureModule,
        EmptySourceFeatureModule,
        SortingSelectorFeatureModule,
        FilterMenuFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDL0gsT0FBTyxFQUFFLHVCQUF1QixFQUFF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RUFBRSwwQkFBMEIsRUFBRTtxQkFDeEU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3QtaXRlbS9saXN0LXZpZXctaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9lbXB0eS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvc2VsZWN0L2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZS9saXN0LXZpZXcuZ2F0ZXMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcucHVibGlzaGVyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0TGlzdFZpZXdDb21wb25lbnQsXG5cdGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3Q29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTGlzdFZpZXdQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3V2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKExpc3RWaWV3V2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTGlzdFZpZXdNb2RlQXJjaGl2ZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld01vZGVBcmNoaXZlKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0XHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cdFx0U29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSxcblx0XHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRMaXN0Vmlld0NvbXBvbmVudCxcblx0XHRMaXN0Vmlld0l0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdMYXlvdXRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdTb3VyY2VDb21wb25lbnQsXG5cblx0XHRMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQsXG5cblx0XHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IExpc3RWaWV3UHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld1dhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSB9LFxuXG5cdFx0eyBwcm92aWRlOiBMaXN0Vmlld01vZGVBcmNoaXZlLCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdNb2RlQXJjaGl2ZSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gQXJyYXkuZnJvbShleHBvcnREZWNsYXJhdGlvbnMpO1xufVxuIl19