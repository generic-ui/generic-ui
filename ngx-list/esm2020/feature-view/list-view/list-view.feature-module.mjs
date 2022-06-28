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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxn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QUEwQixFQUFFO3FCQUV4RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGlzdC12aWV3LWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvbGlzdC1pdGVtL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9lbXB0eS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvc2VsZWN0L2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyB9IGZyb20gJy4vZ2F0ZS9saXN0LXZpZXcuZ2F0ZXMnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ1NlbGVjdG9yRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9tZW51L2ZpbHRlci1tZW51LmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL2xpc3Qtdmlldy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2xpc3Qtdmlldy9hcGkvbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2xpc3Qtdmlldy9hcGkvbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9saXN0LXZpZXcvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRMaXN0Vmlld0NvbXBvbmVudCxcblx0bGlzdFZpZXdHYXRld2F5RGVjbGFyYXRpb25zXG5dO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTGlzdFZpZXdDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShMaXN0Vmlld1B1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTGlzdFZpZXdXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoTGlzdFZpZXdXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUxpc3RWaWV3RXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVMaXN0Vmlld01vZGVBcmNoaXZlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKExpc3RWaWV3TW9kZUFyY2hpdmUpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRGYWJyaWNTZWxlY3RNb2R1bGUsXG5cdFx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0XHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRcdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblx0XHRTb3J0aW5nU2VsZWN0b3JGZWF0dXJlTW9kdWxlLFxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdExpc3RWaWV3Q29tcG9uZW50LFxuXHRcdExpc3RWaWV3SXRlbUNvbXBvbmVudCxcblx0XHRMaXN0Vmlld0xheW91dENvbXBvbmVudCxcblx0XHRMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCxcblxuXHRcdExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCxcblx0XHRMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCxcblxuXHRcdGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9uc1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTGlzdFZpZXdQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld0NvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBMaXN0Vmlld1dhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZUxpc3RWaWV3V2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZUxpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0sXG5cblx0XHR7IHByb3ZpZGU6IExpc3RWaWV3TW9kZUFyY2hpdmUsIHVzZUZhY3Rvcnk6IHByb3ZpZGVMaXN0Vmlld01vZGVBcmNoaXZlIH1cblxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcbn1cbiJdfQ==