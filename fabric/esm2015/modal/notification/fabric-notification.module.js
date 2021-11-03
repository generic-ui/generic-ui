import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricNotificationComponent } from './fabric-notification.component';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { FabricNotificationsContainerComponent } from './fabric-notifications-container.component';
import { FabricNotificationService } from './fabric-notification.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
export class FabricNotificationModule {
}
FabricNotificationModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBcUIvRixNQUFNLE9BQU8sd0JBQXdCOzs7WUFsQnBDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixxQkFBcUI7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDYixtQ0FBbUM7b0JBQ25DLHFDQUFxQztvQkFDckMsMkJBQTJCO2lCQUMzQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YseUJBQXlCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLG1DQUFtQztvQkFDbkMsMkJBQTJCO2lCQUMzQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCxcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbk1vZHVsZSB7XG59XG4iXX0=