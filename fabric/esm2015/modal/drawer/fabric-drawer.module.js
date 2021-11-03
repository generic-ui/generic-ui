import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDrawerModule {
}
FabricDrawerModule.ɵfac = function FabricDrawerModule_Factory(t) { return new (t || FabricDrawerModule)(); };
FabricDrawerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDrawerModule });
FabricDrawerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricDrawerService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricCloseIconModule
                ],
                declarations: [
                    FabricDrawerComponent
                ],
                providers: [
                    FabricDrawerService
                ],
                entryComponents: [
                    FabricDrawerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDrawerModule, { declarations: [FabricDrawerComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWtCL0YsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3lFQVBuQjtRQUNWLG1CQUFtQjtLQUNuQixZQVRRO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtTQUNyQjt1RkFXVyxrQkFBa0I7Y0FmOUIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHFCQUFxQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHFCQUFxQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG1CQUFtQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixxQkFBcUI7aUJBQ3JCO2FBQ0Q7O3dGQUNZLGtCQUFrQixtQkFUN0IscUJBQXFCLGFBSnJCLFlBQVk7UUFDWixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEcmF3ZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRHJhd2VyU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNEcmF3ZXJDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcmF3ZXJNb2R1bGUge1xufVxuIl19