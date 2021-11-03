import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export const selector = 'gui-close-icon';
export class FabricCloseIconComponent {
}
FabricCloseIconComponent.ɵfac = function FabricCloseIconComponent_Factory(t) { return new (t || FabricCloseIconComponent)(); };
FabricCloseIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCloseIconComponent, selectors: [["gui-close-icon"]], hostVars: 2, hostBindings: function FabricCloseIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-close-icon-wrapper", true);
    } }, decls: 1, vars: 0, consts: [[1, "gui-close-icon"]], template: function FabricCloseIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
    } }, styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCloseIconComponent, [{
        type: Component,
        args: [{
                selector: selector,
                template: `
		<span class="gui-close-icon"></span>
	`,
                styleUrls: ['./fabric-close-icon.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-close-icon-wrapper]': 'true'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWNsb3NlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9pY29ucy9jbG9zZS1pY29uL2ZhYnJpYy1jbG9zZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7QUFjekMsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3QjsyRUFBeEIsd0JBQXdCOzs7UUFUbkMsMEJBQW9DOzt1RkFTekIsd0JBQXdCO2NBWnBDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOztFQUVUO2dCQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxnQ0FBZ0MsRUFBRSxNQUFNO2lCQUN4QzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0gJ2d1aS1jbG9zZS1pY29uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0dGVtcGxhdGU6IGBcblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jbG9zZS1pY29uXCI+PC9zcGFuPlxuXHRgLFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtY2xvc2UtaWNvbi5uZ3guc2NzcyddLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNsb3NlLWljb24td3JhcHBlcl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNDbG9zZUljb25Db21wb25lbnQge1xufVxuIl19