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
FabricNotificationModule.ɵfac = function FabricNotificationModule_Factory(t) { return new (t || FabricNotificationModule)(); };
FabricNotificationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricNotificationModule });
FabricNotificationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricNotificationService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricNotificationModule, { declarations: [FabricNotificationsOverlayComponent,
        FabricNotificationsContainerComponent,
        FabricNotificationComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQXFCL0YsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3QjswRUFBeEIsd0JBQXdCOytFQVJ6QjtRQUNWLHlCQUF5QjtLQUN6QixZQVhRO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtTQUNyQjt1RkFjVyx3QkFBd0I7Y0FsQnBDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixxQkFBcUI7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDYixtQ0FBbUM7b0JBQ25DLHFDQUFxQztvQkFDckMsMkJBQTJCO2lCQUMzQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YseUJBQXlCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLG1DQUFtQztvQkFDbkMsMkJBQTJCO2lCQUMzQjthQUNEOzt3RkFDWSx3QkFBd0IsbUJBWm5DLG1DQUFtQztRQUNuQyxxQ0FBcUM7UUFDckMsMkJBQTJCLGFBTjNCLFlBQVk7UUFDWixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBGYWJyaWNDbG9zZUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvY2xvc2UtaWNvbi9mYWJyaWMtY2xvc2UtaWNvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQ2xvc2VJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50LFxuXHRcdEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQsXG5cdFx0RmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQsXG5cdFx0RmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uTW9kdWxlIHtcbn1cbiJdfQ==