import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { pagingInitializer } from '../../../core/structure/paging/api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
import { TranslationFeatureModule } from '../../l10n/translation.feature-module';
import { PagingPublisher } from '../../../core/structure/paging/api/paging.publisher';
import { PagingWarehouse } from '../../../core/structure/paging/api/paging.warehouse';
import { PagingEventRepository } from '../../../core/structure/paging/api/paging.event-repository';
import * as i0 from "@angular/core";
pagingInitializer.init();
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
PagingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
PagingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, declarations: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule], exports: [PagingComponent,
        PagingNavigatorComponent,
        PagingSelectComponent,
        PagingStatsComponent,
        AlternativePagingNavigatorComponent,
        AlternativePagingPagesComponent] });
PagingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, providers: [
        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: PagingFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        TranslationFeatureModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQUVuRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV6QixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQStCRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOztnSEFOVyxtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFyQjlCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCLGFBVi9CLFlBQVk7UUFDWixZQUFZO1FBQ1osd0JBQXdCLGFBV3hCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCO2lIQVFwQixtQkFBbUIsYUFOcEI7UUFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO1FBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7UUFDaEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO0tBQzVFLFlBeEJBLFlBQVk7UUFDWixZQUFZO1FBQ1osd0JBQXdCOzJGQXdCYixtQkFBbUI7a0JBNUIvQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLCtCQUErQjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7cUJBQy9CO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO3dCQUNyRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO3dCQUNoRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7cUJBQzVFO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvbmF2aWdhdG9yL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBwYWdpbmdJbml0aWFsaXplciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvcGFnaW5nLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nU3RhdHNDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vbDEwbi90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5wYWdpbmdJbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlUGFnaW5nQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVQYWdpbmdXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVQYWdpbmdFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoUGFnaW5nRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ1B1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVBhZ2luZ0NvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBQYWdpbmdXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVQYWdpbmdXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0UGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHBhZ2luZ0FwaU1vZHVsZTogUGFnaW5nQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAocGFnaW5nQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BhZ2luZ0FwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19