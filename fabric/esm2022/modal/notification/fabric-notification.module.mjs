import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricNotificationComponent } from './fabric-notification.component';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { FabricNotificationsContainerComponent } from './fabric-notifications-container.component';
import { FabricNotificationService } from './fabric-notification.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricNotificationModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationModule, declarations: [FabricNotificationsOverlayComponent,
            FabricNotificationsContainerComponent,
            FabricNotificationComponent], imports: [CommonModule,
            FabricCloseIconModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationModule, providers: [
            FabricNotificationService
        ], imports: [CommonModule,
            FabricCloseIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWlCL0YsTUFBTSxPQUFPLHdCQUF3Qjt1R0FBeEIsd0JBQXdCO3dHQUF4Qix3QkFBd0IsaUJBUm5DLG1DQUFtQztZQUNuQyxxQ0FBcUM7WUFDckMsMkJBQTJCLGFBTjNCLFlBQVk7WUFDWixxQkFBcUI7d0dBV1Ysd0JBQXdCLGFBSnpCO1lBQ1YseUJBQXlCO1NBQ3pCLFlBVkEsWUFBWTtZQUNaLHFCQUFxQjs7MkZBV1Ysd0JBQXdCO2tCQWRwQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG1DQUFtQzt3QkFDbkMscUNBQXFDO3dCQUNyQywyQkFBMkI7cUJBQzNCO29CQUNELFNBQVMsRUFBRTt3QkFDVix5QkFBeUI7cUJBQ3pCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCxcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uTW9kdWxlIHtcbn1cbiJdfQ==