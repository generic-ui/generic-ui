import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "gui-card-content-block-item": a0 }; };
function FabricCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.isContentBlockEnabled()));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", block_r1, " ");
} }
const _c1 = function (a0) { return { "gui-card-img": a0 }; };
const _c2 = function (a0) { return { "gui-card-title": a0 }; };
const _c3 = function (a0) { return { "gui-card-content-block": a0 }; };
const _c4 = ["*"];
export class FabricCardComponent {
    constructor() {
        this.contentBlock = [];
    }
    isTitleEnabled() {
        return !!this.title;
    }
    isImgEnabled() {
        return !!this.image;
    }
    isContentBlockEnabled() {
        return !!this.contentBlock;
    }
}
FabricCardComponent.ɵfac = function FabricCardComponent_Factory(t) { return new (t || FabricCardComponent)(); };
FabricCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCardComponent, selectors: [["gui-card"]], hostVars: 2, hostBindings: function FabricCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-card", true);
    } }, inputs: { title: "title", image: "image", alt: "alt", contentBlock: "contentBlock" }, ngContentSelectors: _c4, decls: 9, vars: 13, consts: [[1, "gui-card-body"], [1, "gui-card-image-wrapper"], [3, "ngClass", "alt", "src"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "gui-content"]], template: function FabricCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, FabricCardComponent_div_6_Template, 2, 4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵprojection(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("alt", ctx.alt);
        i0.ɵɵpropertyInterpolate("src", ctx.image, i0.ɵɵsanitizeUrl);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx.isImgEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c2, ctx.isTitleEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx.isContentBlockEnabled()));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.contentBlock);
    } }, directives: [i1.NgClass, i1.NgForOf], styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:bold;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#d6d6d6;border-top-style:solid;border-top-width:1px;padding:12px 20px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#d6d6d6;border-bottom-style:solid;border-bottom-width:1px}.gui-card .gui-card-body .gui-content{padding:0 20px}\n", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCardComponent, [{
        type: Component,
        args: [{
                selector: 'gui-card',
                templateUrl: './card.component.html',
                styleUrls: [
                    './card.ngx.scss',
                    './themes/card.material.ngx.scss',
                    './themes/card.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-card]': 'true'
                }
            }]
    }], null, { title: [{
            type: Input
        }], image: [{
            type: Input
        }], alt: [{
            type: Input
        }], contentBlock: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNZM0YsOEJBRXNFO0lBQ3JFLFlBQ0Q7SUFBQSxpQkFBTTs7OztJQUZMLG9GQUFvRTtJQUNwRSxlQUNEO0lBREMseUNBQ0Q7Ozs7OztBREFGLE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUEwQkMsaUJBQVksR0FBa0IsRUFBRSxDQUFDO0tBYWpDO0lBWEEsY0FBYztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1QixDQUFDOztzRkF4QlcsbUJBQW1CO3NFQUFuQixtQkFBbUI7Ozs7UUNoQmhDLDhCQUEyQjtRQUUxQiw4QkFBb0M7UUFDbkMseUJBQ2lDO1FBQ2xDLGlCQUFNO1FBRU4sOEJBQXNEO1FBQ3JELFlBQ0Q7UUFBQSxpQkFBTTtRQUVOLDhCQUFxRTtRQUNwRSxvRUFJTTtRQUNQLGlCQUFNO1FBRU4sOEJBQXlCO1FBQ3hCLGtCQUF5QjtRQUMxQixpQkFBTTtRQUNQLGlCQUFNOztRQWxCRixlQUFhO1FBQWIsd0NBQWE7UUFBQyw0REFBZTtRQUQxQix3RUFBNEM7UUFJN0MsZUFBZ0Q7UUFBaEQsMEVBQWdEO1FBQ3BELGVBQ0Q7UUFEQywwQ0FDRDtRQUVLLGVBQStEO1FBQS9ELGtGQUErRDtRQUVoRCxlQUFlO1FBQWYsMENBQWU7O3VGREd2QixtQkFBbUI7Y0FkL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUU7b0JBQ1YsaUJBQWlCO29CQUNqQixpQ0FBaUM7b0JBQ2pDLDZCQUE2QjtpQkFDN0I7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsa0JBQWtCLEVBQUUsTUFBTTtpQkFDMUI7YUFDRDtnQkFJQSxLQUFLO2tCQURKLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixHQUFHO2tCQURGLEtBQUs7WUFJTixZQUFZO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNhcmQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2NhcmQubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jYXJkLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2FyZC5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNhcmRdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljQ2FyZENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dGl0bGU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRpbWFnZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGFsdDogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNvbnRlbnRCbG9jazogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdGlzVGl0bGVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMudGl0bGU7XG5cdH1cblxuXHRpc0ltZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5pbWFnZTtcblx0fVxuXG5cdGlzQ29udGVudEJsb2NrRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmNvbnRlbnRCbG9jaztcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1jYXJkLWJvZHlcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWNhcmQtaW1hZ2Utd3JhcHBlclwiPlxuXHRcdDxpbWcgW25nQ2xhc3NdPVwieydndWktY2FyZC1pbWcnOiBpc0ltZ0VuYWJsZWQoKX1cIlxuXHRcdFx0IGFsdD1cInt7YWx0fX1cIiBzcmM9XCJ7e2ltYWdlfX1cIi8+XG5cdDwvZGl2PlxuXG5cdDxkaXYgW25nQ2xhc3NdPVwieydndWktY2FyZC10aXRsZSc6IGlzVGl0bGVFbmFibGVkKCl9XCI+XG5cdFx0e3t0aXRsZX19XG5cdDwvZGl2PlxuXG5cdDxkaXYgW25nQ2xhc3NdPVwieydndWktY2FyZC1jb250ZW50LWJsb2NrJzogaXNDb250ZW50QmxvY2tFbmFibGVkKCl9XCI+XG5cdFx0PGRpdlxuXHRcdFx0Km5nRm9yPVwibGV0IGJsb2NrIG9mIGNvbnRlbnRCbG9ja1wiXG5cdFx0XHRbbmdDbGFzc109XCJ7J2d1aS1jYXJkLWNvbnRlbnQtYmxvY2staXRlbSc6IGlzQ29udGVudEJsb2NrRW5hYmxlZCgpfVwiPlxuXHRcdFx0e3tibG9ja319XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJndWktY29udGVudFwiPlxuXHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==