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
PagingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
PagingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingFeatureModule, declarations: [PagingComponent,
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
PagingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingFeatureModule, providers: [
        { provide: PagingPublisher, useFactory: providePagingCommandInvoker },
        { provide: PagingWarehouse, useFactory: providePagingWarehouse },
        { provide: PagingEventRepository, useFactory: providePagingEventRepository }
    ], imports: [[
            CommonModule,
            FabricModule,
            TranslationFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQUVuRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV6QixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQStCRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04sd0JBQXdCO1NBQ3hCLENBQUM7SUFDSCxDQUFDOztpSEFOVyxtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFyQjlCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCLGFBVi9CLFlBQVk7UUFDWixZQUFZO1FBQ1osd0JBQXdCLGFBV3hCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixtQ0FBbUM7UUFDbkMsK0JBQStCO2tIQVFwQixtQkFBbUIsYUFOcEI7UUFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO1FBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7UUFDaEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO0tBQzVFLFlBekJRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7WUFDWix3QkFBd0I7U0FDeEI7NEZBdUJXLG1CQUFtQjtrQkE1Qi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRTt3QkFDYixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLCtCQUErQjtxQkFDL0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7d0JBQ2hFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtxQkFDNUU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0L3BhZ2luZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvcGFnZXMvYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IHBhZ2luZ0luaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljL25hdmlnYXRvci9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvc3RhdHMvcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvcGFnaW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5cbnBhZ2luZ0luaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVQYWdpbmdDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShQYWdpbmdQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVBhZ2luZ1dhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShQYWdpbmdXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShQYWdpbmdFdmVudFJlcG9zaXRvcnkpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRQYWdpbmdDb21wb25lbnQsXG5cdFx0UGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogUGFnaW5nUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlUGFnaW5nQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ1dhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVBhZ2luZ1dhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcGFnaW5nQXBpTW9kdWxlOiBQYWdpbmdBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChwYWdpbmdBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignUGFnaW5nQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=