import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Direction } from './direction';
import * as i0 from "@angular/core";
export class FabricArrowIconComponent {
    constructor() {
        this.direction = Direction.RIGHT;
    }
}
FabricArrowIconComponent.ɵfac = function FabricArrowIconComponent_Factory(t) { return new (t || FabricArrowIconComponent)(); };
FabricArrowIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricArrowIconComponent, selectors: [["gui-arrow-icon"]], hostVars: 4, hostBindings: function FabricArrowIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-arrow-icon", true)("gui-icon", true);
    } }, inputs: { direction: "direction" }, decls: 2, vars: 2, consts: [["height", "10.661", "viewBox", "0 0 6.081 10.661", "width", "6.081", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M.75.75,5.02,5.02.75,9.29", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "transform", "translate(0.311 0.311)"]], template: function FabricArrowIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("transform", "rotate(" + ctx.direction + "deg)");
    } }, styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricArrowIconComponent, [{
        type: Component,
        args: [{
                selector: 'gui-arrow-icon',
                templateUrl: 'fabric-arrow-icon.component.html',
                styleUrls: ['./fabric-arrow-icon.ngx.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-arrow-icon]': 'true',
                    '[class.gui-icon]': 'true'
                }
            }]
    }], null, { direction: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2ZhYnJpYy1hcnJvdy1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQWN4QyxNQUFNLE9BQU8sd0JBQXdCO0lBWHJDO1FBY0MsY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FFdkM7O2dHQUxZLHdCQUF3QjsyRUFBeEIsd0JBQXdCOzs7UUNmckMsbUJBQzhGO1FBRDlGLDhCQUM4RjtRQUM3RiwwQkFLdUM7UUFDeEMsaUJBQU07O1FBUkQsK0RBQWtEOzt1RkRlMUMsd0JBQXdCO2NBWHBDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsd0JBQXdCLEVBQUUsTUFBTTtvQkFDaEMsa0JBQWtCLEVBQUUsTUFBTTtpQkFDMUI7YUFDRDtnQkFJQSxTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4vZGlyZWN0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYXJyb3ctaWNvbicsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWFycm93LWljb24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtYXJyb3ctaWNvbi5uZ3guc2NzcyddLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWFycm93LWljb25dJzogJ3RydWUnLFxuXHRcdCdbY2xhc3MuZ3VpLWljb25dJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljQXJyb3dJY29uQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRkaXJlY3Rpb246IERpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcblxufVxuIiwiPHN2ZyBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIGRpcmVjdGlvbiArICdkZWcpJ1wiXG5cdCBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDYuMDgxIDEwLjY2MVwiIHdpZHRoPVwiNi4wODFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdDxwYXRoIGQ9XCJNLjc1Ljc1LDUuMDIsNS4wMi43NSw5LjI5XCJcblx0XHQgIGZpbGw9XCJub25lXCJcblx0XHQgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdCAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuXHRcdCAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcblx0XHQgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjMxMSAwLjMxMSlcIi8+XG48L3N2Zz5cbiJdfQ==