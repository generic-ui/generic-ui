import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
import * as i0 from "@angular/core";
export class FabricProgressSpinnerComponent extends AbstractSpinner {
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.value = 0;
        this.animationsDisabled = true;
        this.secondCircleDisabled = true;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.calculateValuePercentage(this.circumference, this.value);
        if (this.mode === SpinnerMode.Spin) {
            this.animationsDisabled = false;
            this.secondCircleDisabled = false;
            this.value = 0;
            this.circumference = this.croppedCircle;
        }
        if (this.animationsDisabled) {
            this.addClass('gui-animations-disabled');
        }
        else {
            this.removeClass('gui-animations-disabled');
        }
        if (this.secondCircleDisabled) {
            this.addClass('gui-second-circle-disabled');
        }
        else {
            this.removeClass('gui-second-circle-disabled');
        }
    }
    ngOnInit() {
        this.calculateValuePercentage(this.circumference, this.value);
    }
    calculateValuePercentage(circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    }
}
FabricProgressSpinnerComponent.ɵfac = function FabricProgressSpinnerComponent_Factory(t) { return new (t || FabricProgressSpinnerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricProgressSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricProgressSpinnerComponent, selectors: [["gui-progress-spinner"]], inputs: { value: "value", mode: "mode", color: "color" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 30, consts: [[1, "gui-progress-spinner"], [1, "circle-outer"], ["cx", "50%", "cy", "50%"], [1, "circle-inner"]], template: function FabricProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵstyleProp("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.valuePercentage)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.circleSize, "px")("width", ctx.circleSize, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("stroke-dasharray", ctx.croppedCircle)("stroke-dashoffset", ctx.circumference)("stroke-width", ctx.width)("stroke", ctx.color);
        i0.ɵɵattribute("r", ctx.r);
    } }, styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:gui-spin-reverse 2s infinite linear forwards reverse}.gui-progress-spinner .circle-outer{-webkit-animation:gui-spin 2s infinite linear forwards;animation:gui-spin 2s infinite linear forwards}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer{-webkit-animation:none;animation:none}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}\n", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}\n", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-progress-spinner',
                templateUrl: './progress-spinner.component.html',
                styleUrls: [
                    './progress-spinner.ngx.scss',
                    './themes/progress-spinner.material.ngx.scss',
                    './themes/progress-spinner.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { value: [{
            type: Input
        }], mode: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9zcGlubmVycy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvc3Bpbm5lcnMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUErQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQWE3QyxNQUFNLE9BQU8sOEJBQStCLFNBQVEsZUFBZTtJQWlCbEUsWUFBWSxVQUFzQixFQUMvQixRQUFtQjtRQUNyQixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBaEI3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBUWxCLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyx5QkFBb0IsR0FBWSxJQUFJLENBQUM7SUFPckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLHdCQUF3QixDQUFDLGFBQXFCLEVBQUUsS0FBYTtRQUN0RSxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsR0FBRyxDQUFDLEtBQUssR0FBRyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7NEdBckRXLDhCQUE4QjtpRkFBOUIsOEJBQThCO1FDaEIzQyw4QkFHOEI7UUFDN0IsbUJBR3NCO1FBSHRCLDhCQUdzQjtRQUNyQiw0QkFRUztRQUNWLGlCQUFNO1FBQ04sOEJBR3NCO1FBQ3JCLDRCQVFTO1FBQ1YsaUJBQU07UUFDUCxpQkFBTTs7UUEvQkwsOENBQThCLCtCQUFBO1FBSTdCLGVBQThCO1FBQTlCLDhDQUE4QiwrQkFBQTtRQUs3QixlQUF3QztRQUF4QyxxREFBd0MsMENBQUEsMkJBQUEscUJBQUE7UUFEeEMsMEJBQVk7UUFVYixlQUE4QjtRQUE5Qiw4Q0FBOEIsK0JBQUE7UUFLN0IsZUFBd0M7UUFBeEMscURBQXdDLHdDQUFBLDJCQUFBLHFCQUFBO1FBRHhDLDBCQUFZOzt1RkRQRiw4QkFBOEI7Y0FYMUMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRTtvQkFDViw2QkFBNkI7b0JBQzdCLDZDQUE2QztvQkFDN0MseUNBQXlDO2lCQUN6QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7cUZBSUEsS0FBSztrQkFESixLQUFLO1lBSU4sSUFBSTtrQkFESCxLQUFLO1lBSU4sS0FBSztrQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Bpbm5lciB9IGZyb20gJy4uL2Fic3RyYWN0LXNwaW5uZXInO1xuaW1wb3J0IHsgU3Bpbm5lck1vZGUgfSBmcm9tICcuL3NwaW5uZXItbW9kZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wcm9ncmVzcy1zcGlubmVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9wcm9ncmVzcy1zcGlubmVyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcHJvZ3Jlc3Mtc3Bpbm5lci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLXNwaW5uZXIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXIgPSAwO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IFNwaW5uZXJNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0YW5pbWF0aW9uc0Rpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRzZWNvbmRDaXJjbGVEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0dmFsdWVQZXJjZW50YWdlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cblx0XHRpZiAodGhpcy5tb2RlID09PSBTcGlubmVyTW9kZS5TcGluKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGlvbnNEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZWNvbmRDaXJjbGVEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNyb3BwZWRDaXJjbGU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYW5pbWF0aW9uc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlY29uZENpcmNsZURpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKGNpcmN1bWZlcmVuY2U6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMudmFsdWVQZXJjZW50YWdlID0gY2lyY3VtZmVyZW5jZSAtICh2YWx1ZSAqIGNpcmN1bWZlcmVuY2UgLyAxMDApO1xuXHR9XG59XG4iLCI8ZGl2XG5cdFtzdHlsZS5oZWlnaHQucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdFtzdHlsZS53aWR0aC5weF09XCJjaXJjbGVTaXplXCJcblx0Y2xhc3M9XCJndWktcHJvZ3Jlc3Mtc3Bpbm5lclwiPlxuXHQ8c3ZnXG5cdFx0W3N0eWxlLmhlaWdodC5weF09XCJjaXJjbGVTaXplXCJcblx0XHRbc3R5bGUud2lkdGgucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdFx0Y2xhc3M9XCJjaXJjbGUtb3V0ZXJcIj5cblx0XHQ8Y2lyY2xlXG5cdFx0XHRbYXR0ci5yXT1cInJcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS1kYXNoYXJyYXldPVwiY2lyY3VtZmVyZW5jZVwiXG5cdFx0XHRbc3R5bGUuc3Ryb2tlLWRhc2hvZmZzZXRdPVwidmFsdWVQZXJjZW50YWdlXCJcblx0XHRcdFtzdHlsZS5zdHJva2Utd2lkdGhdPVwid2lkdGhcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZV09XCJjb2xvclwiXG5cdFx0XHRjeD1cIjUwJVwiXG5cdFx0XHRjeT1cIjUwJVwiPlxuXHRcdDwvY2lyY2xlPlxuXHQ8L3N2Zz5cblx0PHN2Z1xuXHRcdFtzdHlsZS5oZWlnaHQucHhdPVwiY2lyY2xlU2l6ZVwiXG5cdFx0W3N0eWxlLndpZHRoLnB4XT1cImNpcmNsZVNpemVcIlxuXHRcdGNsYXNzPVwiY2lyY2xlLWlubmVyXCI+XG5cdFx0PGNpcmNsZVxuXHRcdFx0W2F0dHIucl09XCJyXCJcblx0XHRcdFtzdHlsZS5zdHJva2UtZGFzaGFycmF5XT1cImNyb3BwZWRDaXJjbGVcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS1kYXNob2Zmc2V0XT1cImNpcmN1bWZlcmVuY2VcIlxuXHRcdFx0W3N0eWxlLnN0cm9rZS13aWR0aF09XCJ3aWR0aFwiXG5cdFx0XHRbc3R5bGUuc3Ryb2tlXT1cImNvbG9yXCJcblx0XHRcdGN4PVwiNTAlXCJcblx0XHRcdGN5PVwiNTAlXCI+XG5cdFx0PC9jaXJjbGU+XG5cdDwvc3ZnPlxuPC9kaXY+XG4iXX0=