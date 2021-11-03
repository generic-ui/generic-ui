import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDialogModule {
}
FabricDialogModule.ɵfac = function FabricDialogModule_Factory(t) { return new (t || FabricDialogModule)(); };
FabricDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDialogModule });
FabricDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricDialogService,
        FabricDialogThemeService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricCloseIconModule
                ],
                declarations: [
                    FabricDialogComponent
                ],
                providers: [
                    FabricDialogService,
                    FabricDialogThemeService
                ],
                entryComponents: [
                    FabricDialogComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDialogModule, { declarations: [FabricDialogComponent], imports: [CommonModule,
        FabricCloseIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQW1CL0YsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3lFQVJuQjtRQUNWLG1CQUFtQjtRQUNuQix3QkFBd0I7S0FDeEIsWUFWUTtZQUNSLFlBQVk7WUFDWixxQkFBcUI7U0FDckI7dUZBWVcsa0JBQWtCO2NBaEI5QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IscUJBQXFCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQix3QkFBd0I7aUJBQ3hCO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIscUJBQXFCO2lCQUNyQjthQUNEOzt3RkFDWSxrQkFBa0IsbUJBVjdCLHFCQUFxQixhQUpyQixZQUFZO1FBQ1oscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEaWFsb2dDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRGlhbG9nU2VydmljZSxcblx0XHRGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljRGlhbG9nQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGlhbG9nTW9kdWxlIHtcbn1cbiJdfQ==