import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { initializePaging } from '../../../../core/structure/paging/src/api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
import { TranslationFeatureModule } from '../../../l10n/src/translation.feature-module';
import { PagingPublisher } from '../../../../core/structure/paging/src/api/paging.publisher';
import { PagingWarehouse } from '../../../../core/structure/paging/src/api/paging.warehouse';
import { PagingEventRepository } from '../../../../core/structure/paging/src/api/paging.event-repository';
import { GuiTemplateModule } from '../../../gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
initializePaging();
export function providePagingCommandInvoker() {
    return CoreContainer.resolve(PagingPublisher);
}
export function providePagingWarehouse() {
    return CoreContainer.resolve(PagingWarehouse);
}
export function providePagingEventRepository() {
    return CoreContainer.resolve(PagingEventRepository);
}
export class PagingFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
PagingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
PagingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: PagingFeatureModule, declarations: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule,
        GuiTemplateModule], exports: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent] });
PagingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingFeatureModule, providers: [
        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule,
        GuiTemplateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PagingFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule,
                        GuiTemplateModule
                    ],
                    declarations: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ],
                    exports: [
                        PagingComponent,
                        PagingNavigatorComponent,
                        PagingSelectComponent,
                        PagingStatsComponent,
                        AlternativePagingNavigatorComponent,
                        AlternativePagingPagesComponent
                    ],
                    providers: [
                        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
                        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
                        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL3BhZ2luZy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDL0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFdEYsZ0JBQWdCLEVBQUUsQ0FBQztBQUVuQixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQWdDRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOztpSEFOVyxtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFyQjlCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCLGFBWC9CLFlBQVk7UUFDWixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGlCQUFpQixhQVdqQixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUNBQW1DO1FBQ25DLCtCQUErQjtrSEFRcEIsbUJBQW1CLGFBTnBCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtRQUNyRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO1FBQ2hFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtLQUM1RSxZQXpCQSxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixpQkFBaUI7NEZBd0JOLG1CQUFtQjtrQkE3Qi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLGlCQUFpQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3FCQUMvQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO3FCQUM1RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvbmF2aWdhdG9yL3BhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vc3JjL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBHdWlUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5pbml0aWFsaXplUGFnaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlUGFnaW5nQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVQYWdpbmdXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVQYWdpbmdFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0R3VpVGVtcGxhdGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ1B1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVBhZ2luZ0NvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBQYWdpbmdXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVQYWdpbmdXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0UGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=