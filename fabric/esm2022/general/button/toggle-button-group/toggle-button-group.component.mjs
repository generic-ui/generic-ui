import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ToggleButtonGroupService } from './toggle-button-group.service';
import * as i0 from "@angular/core";
export class FabricToggleButtonGroupComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricToggleButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricToggleButtonGroupComponent, selector: "gui-toggle-button-group", host: { properties: { "class.gui-toggle-button-group": "true" } }, providers: [ToggleButtonGroupService], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricToggleButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-toggle-button-group', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-toggle-button-group]': 'true'
                    }, providers: [ToggleButtonGroupService], template: "<ng-content></ng-content>\n", styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi1ncm91cC90b2dnbGUtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uLWdyb3VwL3RvZ2dsZS1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFlekUsTUFBTSxPQUFPLGdDQUFnQzt3R0FBaEMsZ0NBQWdDOzRGQUFoQyxnQ0FBZ0MscUhBRmpDLENBQUMsd0JBQXdCLENBQUMsMEJDZnRDLDZCQUNBOzs0RkRnQmEsZ0NBQWdDO2tCQWI1QyxTQUFTOytCQUNDLHlCQUF5QixtQkFLbEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDTCxpQ0FBaUMsRUFBRSxNQUFNO3FCQUN6QyxhQUNVLENBQUMsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgfSBmcm9tICcuL3RvZ2dsZS1idXR0b24tZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10b2dnbGUtYnV0dG9uLWdyb3VwJyxcblx0dGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90b2dnbGUtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRvZ2dsZS1idXR0b24tZ3JvdXBdJzogJ3RydWUnXG5cdH0sXG5cdHByb3ZpZGVyczogW1RvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVG9nZ2xlQnV0dG9uR3JvdXBDb21wb25lbnQge1xufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19