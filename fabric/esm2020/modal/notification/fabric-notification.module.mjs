import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricNotificationComponent } from './fabric-notification.component';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { FabricNotificationsContainerComponent } from './fabric-notifications-container.component';
import { FabricNotificationService } from './fabric-notification.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricNotificationModule {
}
FabricNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, declarations: [FabricNotificationsOverlayComponent,
        FabricNotificationsContainerComponent,
        FabricNotificationComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, providers: [
        FabricNotificationService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricCloseIconModule
                    ],
                    declarations: [
                        FabricNotificationsOverlayComponent,
                        FabricNotificationsContainerComponent,
                        FabricNotificationComponent
                    ],
                    providers: [
                        FabricNotificationService
                    ],
                    entryComponents: [
                        FabricNotificationsOverlayComponent,
                        FabricNotificationComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQXFCL0YsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQVpuQyxtQ0FBbUM7UUFDbkMscUNBQXFDO1FBQ3JDLDJCQUEyQixhQU4zQixZQUFZO1FBQ1oscUJBQXFCO3VIQWVWLHdCQUF3QixhQVJ6QjtRQUNWLHlCQUF5QjtLQUN6QixZQVhRO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtTQUNyQjs0RkFjVyx3QkFBd0I7a0JBbEJwQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1DQUFtQzt3QkFDbkMscUNBQXFDO3dCQUNyQywyQkFBMkI7cUJBQzNCO29CQUNELFNBQVMsRUFBRTt3QkFDVix5QkFBeUI7cUJBQ3pCO29CQUNELGVBQWUsRUFBRTt3QkFDaEIsbUNBQW1DO3dCQUNuQywyQkFBMkI7cUJBQzNCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCxcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbk1vZHVsZSB7XG59XG4iXX0=