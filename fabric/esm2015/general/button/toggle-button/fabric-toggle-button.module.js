import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricToggleButtonComponent } from './toggle-button.component';
import { FabricButtonModule } from '../button/fabric-button.module';
import * as i0 from "@angular/core";
export class FabricToggleButtonModule {
}
FabricToggleButtonModule.ɵfac = function FabricToggleButtonModule_Factory(t) { return new (t || FabricToggleButtonModule)(); };
FabricToggleButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricToggleButtonModule });
FabricToggleButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricButtonModule
        ], FabricButtonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricButtonModule
                ],
                declarations: [
                    FabricToggleButtonComponent
                ],
                exports: [
                    FabricToggleButtonComponent,
                    FabricButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricToggleButtonModule, { declarations: [FabricToggleButtonComponent], imports: [CommonModule,
        FabricButtonModule], exports: [FabricToggleButtonComponent,
        FabricButtonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvZ2dsZS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvYnV0dG9uL3RvZ2dsZS1idXR0b24vZmFicmljLXRvZ2dsZS1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQWdCcEUsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3QjswRUFBeEIsd0JBQXdCOzhFQVozQjtZQUNSLFlBQVk7WUFDWixrQkFBa0I7U0FDbEIsRUFNQSxrQkFBa0I7dUZBR1Asd0JBQXdCO2NBYnBDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixrQkFBa0I7aUJBQ2xCO2dCQUNELFlBQVksRUFBRTtvQkFDYiwyQkFBMkI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRTtvQkFDUiwyQkFBMkI7b0JBQzNCLGtCQUFrQjtpQkFDbEI7YUFDRDs7d0ZBQ1ksd0JBQXdCLG1CQVBuQywyQkFBMkIsYUFKM0IsWUFBWTtRQUNaLGtCQUFrQixhQU1sQiwyQkFBMkI7UUFDM0Isa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1RvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2ZhYnJpYy1idXR0b24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNUb2dnbGVCdXR0b25Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY1RvZ2dsZUJ1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb2dnbGVCdXR0b25Nb2R1bGUge1xufVxuIl19