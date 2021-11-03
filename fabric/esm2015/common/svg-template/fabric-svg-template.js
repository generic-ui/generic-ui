import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["svgEl"];
export class FabricSvgTemplate {
    // todo sanitize
    ngAfterViewInit() {
        this.svgRef.nativeElement.innerHTML = this.svg;
    }
}
FabricSvgTemplate.ɵfac = function FabricSvgTemplate_Factory(t) { return new (t || FabricSvgTemplate)(); };
FabricSvgTemplate.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricSvgTemplate, selectors: [["gui-svg-template"]], viewQuery: function FabricSvgTemplate_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgRef = _t.first);
    } }, inputs: { svg: "svg" }, decls: 2, vars: 0, consts: [["svgEl", ""]], template: function FabricSvgTemplate_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricSvgTemplate, [{
        type: Component,
        args: [{
                selector: 'gui-svg-template',
                template: `
		<div #svgEl></div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { svgRef: [{
            type: ViewChild,
            args: ['svgEl', { static: false }]
        }], svg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXN2Zy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9jb21tb24vc3ZnLXRlbXBsYXRlL2ZhYnJpYy1zdmctdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBVW5JLE1BQU0sT0FBTyxpQkFBaUI7SUFPOUIsZ0JBQWdCO0lBQ2YsZUFBZTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7O2tGQVZXLGlCQUFpQjtvRUFBakIsaUJBQWlCOzs7Ozs7UUFMNUIsK0JBQWtCOzt1RkFLUCxpQkFBaUI7Y0FSN0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7RUFFVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Z0JBR0EsTUFBTTtrQkFETCxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFJckMsR0FBRztrQkFERixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN2Zy10ZW1wbGF0ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjc3ZnRWw+PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1N2Z1RlbXBsYXRlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ3N2Z0VsJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHN2Z1JlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRzdmc6IHN0cmluZztcblxuLy8gdG9kbyBzYW5pdGl6ZVxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zdmdSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnN2Zztcblx0fVxufVxuIl19