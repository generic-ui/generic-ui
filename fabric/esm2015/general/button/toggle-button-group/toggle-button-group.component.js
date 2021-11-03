import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonGroupService } from './toggle-button-group.service';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class FabricToggleButtonGroupComponent {
}
FabricToggleButtonGroupComponent.ɵfac = function FabricToggleButtonGroupComponent_Factory(t) { return new (t || FabricToggleButtonGroupComponent)(); };
FabricToggleButtonGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricToggleButtonGroupComponent, selectors: [["gui-toggle-button-group"]], hostVars: 2, hostBindings: function FabricToggleButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-toggle-button-group", true);
    } }, features: [i0.ɵɵProvidersFeature([ToggleButtonGroupService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FabricToggleButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'gui-toggle-button-group',
                templateUrl: './toggle-button-group.component.html',
                styleUrls: [
                    './toggle-button-group.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-toggle-button-group]': 'true'
                },
                providers: [ToggleButtonGroupService]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi1ncm91cC90b2dnbGUtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uLWdyb3VwL3RvZ2dsZS1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBZXpFLE1BQU0sT0FBTyxnQ0FBZ0M7O2dIQUFoQyxnQ0FBZ0M7bUZBQWhDLGdDQUFnQzs7MENBRmpDLENBQUMsd0JBQXdCLENBQUM7O1FDZnRDLGtCQUF5Qjs7dUZEaUJaLGdDQUFnQztjQWI1QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFO29CQUNWLGdDQUFnQztpQkFDaEM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsaUNBQWlDLEVBQUUsTUFBTTtpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgfSBmcm9tICcuL3RvZ2dsZS1idXR0b24tZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10b2dnbGUtYnV0dG9uLWdyb3VwJyxcblx0dGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90b2dnbGUtYnV0dG9uLWdyb3VwLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRvZ2dsZS1idXR0b24tZ3JvdXBdJzogJ3RydWUnXG5cdH0sXG5cdHByb3ZpZGVyczogW1RvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVG9nZ2xlQnV0dG9uR3JvdXBDb21wb25lbnQge1xufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19