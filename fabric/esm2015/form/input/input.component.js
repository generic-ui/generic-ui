import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["gui-input", ""];
export class FabricInputComponent {
}
FabricInputComponent.ɵfac = function FabricInputComponent_Factory(t) { return new (t || FabricInputComponent)(); };
FabricInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricInputComponent, selectors: [["input", "gui-input", ""]], hostVars: 2, hostBindings: function FabricInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-input", true);
    } }, attrs: _c0, decls: 0, vars: 0, template: function FabricInputComponent_Template(rf, ctx) { }, styles: [".gui-input{background:#fff;border-color:#d6d6d6;border-radius:4px;border-style:solid;border-width:1px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;transition:border-color .3s ease-in-out}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}\n", ".gui-material .gui-input{border-color:#ccc;border-radius:0;border-style:solid;border-width:0 0 1px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif;padding-left:0;transition:border-color .3s ease-in-out}.gui-material .gui-input:not(:-moz-placeholder-shown){border-color:#6200ee}.gui-material .gui-input:not(:-ms-input-placeholder){border-color:#6200ee}.gui-material .gui-input:not(:placeholder-shown){border-color:#6200ee}.gui-material .gui-input:focus{border-color:#6200ee}\n", ".gui-dark .gui-input{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInputComponent, [{
        type: Component,
        args: [{
                selector: 'input[gui-input]',
                templateUrl: './input.component.html',
                styleUrls: [
                    './input.ngx.scss',
                    './themes/input.material.ngx.scss',
                    './themes/input.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-input]': 'true'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWdCdEYsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9COzs7dUZBQXBCLG9CQUFvQjtjQWRoQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFO29CQUNWLGtCQUFrQjtvQkFDbEIsa0NBQWtDO29CQUNsQyw4QkFBOEI7aUJBQzlCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLG1CQUFtQixFQUFFLE1BQU07aUJBQzNCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdpbnB1dFtndWktaW5wdXRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vaW5wdXQubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9pbnB1dC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2lucHV0LmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktaW5wdXRdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljSW5wdXRDb21wb25lbnQge1xufVxuIl19