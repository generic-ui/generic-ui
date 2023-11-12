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
    static exportDeclarations = Array.from(exportDeclarations);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: ListViewFeatureModule, declarations: [ListViewComponent,
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewFeatureModule, providers: [
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
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDL0gsT0FBTyxFQUFFLHVCQUF1QixFQUFF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RUFBRSxVQUFVLEVBQUUsMEJBQTBCLEVBQUU7cUJBQ3hFO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1pdGVtL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnMgfSBmcm9tICcuL2dhdGUvbGlzdC12aWV3LmdhdGVzJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9zcmMvYXBpL2xpc3Qtdmlldy53YXJlaG91c2UnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdExpc3RWaWV3Q29tcG9uZW50LFxuXHRsaXN0Vmlld0dhdGV3YXlEZWNsYXJhdGlvbnNcbl07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMaXN0Vmlld0NvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKExpc3RWaWV3UHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMaXN0Vmlld1dhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld1dhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3TW9kZUFyY2hpdmUoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTGlzdFZpZXdNb2RlQXJjaGl2ZSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEZhYnJpY1NlbGVjdE1vZHVsZSxcblx0XHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRcdFNlYXJjaEZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXHRcdFNvcnRpbmdTZWxlY3RvckZlYXR1cmVNb2R1bGUsXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TGlzdFZpZXdDb21wb25lbnQsXG5cdFx0TGlzdFZpZXdJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3TGF5b3V0Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3U291cmNlQ29tcG9uZW50LFxuXG5cdFx0TGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q2FyZEl0ZW1Db21wb25lbnQsXG5cdFx0TGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50LFxuXG5cdFx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5cdF0sXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBMaXN0Vmlld1B1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZUxpc3RWaWV3Q29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IExpc3RWaWV3V2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkgfSxcblxuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdNb2RlQXJjaGl2ZSwgdXNlRmFjdG9yeTogcHJvdmlkZUxpc3RWaWV3TW9kZUFyY2hpdmUgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcbn1cbiJdfQ==