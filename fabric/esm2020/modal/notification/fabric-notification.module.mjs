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
FabricNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationModule, declarations: [FabricNotificationsOverlayComponent,
        FabricNotificationsContainerComponent,
        FabricNotificationComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationModule, providers: [
        FabricNotificationService
    ], imports: [CommonModule,
        FabricCloseIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQXFCL0YsTUFBTSxPQUFPLHdCQUF3Qjs7cUhBQXhCLHdCQUF3QjtzSEFBeEIsd0JBQXdCLGlCQVpuQyxtQ0FBbUM7UUFDbkMscUNBQXFDO1FBQ3JDLDJCQUEyQixhQU4zQixZQUFZO1FBQ1oscUJBQXFCO3NIQWVWLHdCQUF3QixhQVJ6QjtRQUNWLHlCQUF5QjtLQUN6QixZQVZBLFlBQVk7UUFDWixxQkFBcUI7MkZBZVYsd0JBQXdCO2tCQWxCcEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDYixtQ0FBbUM7d0JBQ25DLHFDQUFxQzt3QkFDckMsMkJBQTJCO3FCQUMzQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YseUJBQXlCO3FCQUN6QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLG1DQUFtQzt3QkFDbkMsMkJBQTJCO3FCQUMzQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IEZhYnJpY0Nsb3NlSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9jbG9zZS1pY29uL2ZhYnJpYy1jbG9zZS1pY29uLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNDbG9zZUljb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQsXG5cdFx0RmFicmljTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCxcblx0XHRGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljTm90aWZpY2F0aW9uU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCxcblx0XHRGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25Nb2R1bGUge1xufVxuIl19