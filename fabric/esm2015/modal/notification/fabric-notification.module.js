/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricNotificationComponent } from './fabric-notification.component';
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
                    FabricNotificationsContainerComponent,
                    FabricNotificationComponent
                ],
                providers: [
                    FabricNotificationService
                ],
                entryComponents: [
                    FabricNotificationsContainerComponent,
                    FabricNotificationComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBb0IvRixNQUFNLE9BQU8sd0JBQXdCOzs7WUFqQnBDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixxQkFBcUI7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDYixxQ0FBcUM7b0JBQ3JDLDJCQUEyQjtpQkFDM0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHlCQUF5QjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixxQ0FBcUM7b0JBQ3JDLDJCQUEyQjtpQkFDM0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQsXG5cdFx0RmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uTW9kdWxlIHtcbn1cbiJdfQ==