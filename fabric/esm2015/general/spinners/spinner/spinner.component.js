import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import * as i0 from "@angular/core";
export class FabricSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
FabricSpinnerComponent.ɵfac = function FabricSpinnerComponent_Factory(t) { return new (t || FabricSpinnerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSpinnerComponent, selectors: [["gui-spinner"]], hostVars: 2, hostBindings: function FabricSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-spinner", true);
    } }, inputs: { color: "color" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 30, consts: [[1, "gui-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "svg", 3);
        i0.ɵɵelement(4, "circle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
    } }, styles: ["@-webkit-keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@keyframes gui-spin{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{0%{transform:rotate(-90deg) scale(.8)}to{transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-spinner',
                templateUrl: 'spinner.component.html',
                styleUrls: [
                    './spinner.ngx.scss',
                    './themes/spinner.material.ngx.scss',
                    './themes/spinner.dark.ngx.scss'
                ],
                host: {
                    '[class.gui-spinner]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9zcGlubmVycy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvc3Bpbm5lcnMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFpQnRELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBSzFELFlBQVksVUFBc0IsRUFDL0IsUUFBbUI7UUFDckIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs0RkFaVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjs7O1FDbkJuQyw4QkFHcUI7UUFDcEIsbUJBR3NCO1FBSHRCLDhCQUdzQjtRQUNyQiw0QkFRUztRQUNWLGlCQUFNO1FBQ04sOEJBR3NCO1FBQ3JCLDRCQVFTO1FBQ1YsaUJBQU07UUFDUCxpQkFBTTs7UUEvQkwsOENBQThCLCtCQUFBO1FBSTdCLGVBQThCO1FBQTlCLDhDQUE4QiwrQkFBQTtRQUs3QixlQUF3QztRQUF4QyxxREFBd0Msd0NBQUEsMkJBQUEscUJBQUE7UUFEeEMsMEJBQVk7UUFVYixlQUE4QjtRQUE5Qiw4Q0FBOEIsK0JBQUE7UUFLN0IsZUFBd0M7UUFBeEMscURBQXdDLHdDQUFBLDJCQUFBLHFCQUFBO1FBRHhDLDBCQUFZOzt1RkRKRixzQkFBc0I7Y0FkbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQixvQ0FBb0M7b0JBQ3BDLGdDQUFnQztpQkFDaEM7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLHFCQUFxQixFQUFFLE1BQU07aUJBQzdCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQztxRkFJQSxLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNwaW5uZXIgfSBmcm9tICcuLi9hYnN0cmFjdC1zcGlubmVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3Bpbm5lcicsXG5cdHRlbXBsYXRlVXJsOiAnc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3NwaW5uZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zcGlubmVyLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc3Bpbm5lci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3Bpbm5lcl0nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU3Bpbm5lckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3Bpbm5lciB7XG5cblx0QElucHV0KClcblx0Y29sb3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0c3VwZXIubmdPbkluaXQoKTtcblx0fVxufVxuIiwiPGRpdlxuXHRbc3R5bGUuaGVpZ2h0LnB4XT1cImNpcmNsZVNpemVcIlxuXHRbc3R5bGUud2lkdGgucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdGNsYXNzPVwiZ3VpLXNwaW5uZXJcIj5cblx0PHN2Z1xuXHRcdFtzdHlsZS5oZWlnaHQucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdFx0W3N0eWxlLndpZHRoLnB4XT1cImNpcmNsZVNpemVcIlxuXHRcdGNsYXNzPVwiY2lyY2xlLW91dGVyXCI+XG5cdFx0PGNpcmNsZVxuXHRcdFx0W2F0dHIucl09XCJyXCJcblx0XHRcdFtzdHlsZS5zdHJva2UtZGFzaGFycmF5XT1cImNyb3BwZWRDaXJjbGVcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS1kYXNob2Zmc2V0XT1cImNpcmN1bWZlcmVuY2VcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS13aWR0aF09XCJ3aWR0aFwiXG5cdFx0XHRbc3R5bGUuc3Ryb2tlXT1cImNvbG9yXCJcblx0XHRcdGN4PVwiNTAlXCJcblx0XHRcdGN5PVwiNTAlXCI+XG5cdFx0PC9jaXJjbGU+XG5cdDwvc3ZnPlxuXHQ8c3ZnXG5cdFx0W3N0eWxlLmhlaWdodC5weF09XCJjaXJjbGVTaXplXCJcblx0XHRbc3R5bGUud2lkdGgucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdFx0Y2xhc3M9XCJjaXJjbGUtaW5uZXJcIj5cblx0XHQ8Y2lyY2xlXG5cdFx0XHRbYXR0ci5yXT1cInJcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS1kYXNoYXJyYXldPVwiY3JvcHBlZENpcmNsZVwiXG5cdFx0XHRbc3R5bGUuc3Ryb2tlLWRhc2hvZmZzZXRdPVwiY2lyY3VtZmVyZW5jZVwiXG5cdFx0XHRbc3R5bGUuc3Ryb2tlLXdpZHRoXT1cIndpZHRoXCJcblx0XHRcdFtzdHlsZS5zdHJva2VdPVwiY29sb3JcIlxuXHRcdFx0Y3g9XCI1MCVcIlxuXHRcdFx0Y3k9XCI1MCVcIj5cblx0XHQ8L2NpcmNsZT5cblx0PC9zdmc+XG48L2Rpdj5cbiJdfQ==