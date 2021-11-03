import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricTooltipComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    correctPosition() {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    }
}
FabricTooltipComponent.ɵfac = function FabricTooltipComponent_Factory(t) { return new (t || FabricTooltipComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FabricTooltipComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricTooltipComponent, selectors: [["ng-component"]], hostVars: 6, hostBindings: function FabricTooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.left, "px")("top", ctx.top, "px");
        i0.ɵɵclassProp("gui-tooltip", true);
    } }, decls: 1, vars: 1, template: function FabricTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:normal;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTooltipComponent, [{
        type: Component,
        args: [{
                template: `
		{{text}}
	`,
                host: {
                    '[class.gui-tooltip]': 'true',
                    '[style.left.px]': 'left',
                    '[style.top.px]': 'top'
                },
                styleUrls: ['./fabric-tooltip.ngx.scss'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZWxHLE1BQU0sT0FBTyxzQkFBc0I7SUFLbEMsWUFBNkIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNuRCxDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3hELENBQUM7OzRGQVZXLHNCQUFzQjt5RUFBdEIsc0JBQXNCOzs7O1FBWGpDLFlBQ0Q7O1FBREMseUNBQ0Q7O3VGQVVZLHNCQUFzQjtjQWJsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFOztFQUVUO2dCQUNELElBQUksRUFBRTtvQkFDTCxxQkFBcUIsRUFBRSxNQUFNO29CQUM3QixpQkFBaUIsRUFBRSxNQUFNO29CQUN6QixnQkFBZ0IsRUFBRSxLQUFLO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0e3t0ZXh0fX1cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRvb2x0aXBdJzogJ3RydWUnLFxuXHRcdCdbc3R5bGUubGVmdC5weF0nOiAnbGVmdCcsXG5cdFx0J1tzdHlsZS50b3AucHhdJzogJ3RvcCdcblx0fSxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXRvb2x0aXAubmd4LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVG9vbHRpcENvbXBvbmVudCB7XG5cdHRleHQ6IHN0cmluZztcblx0bGVmdDogbnVtYmVyO1xuXHR0b3A6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0fVxuXG5cdGNvcnJlY3RQb3NpdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnRvcCAtPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdH1cblxufVxuIl19