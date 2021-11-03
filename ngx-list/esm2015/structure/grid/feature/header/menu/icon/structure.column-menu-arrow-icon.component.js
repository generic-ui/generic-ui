import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
const _c0 = ["gui-structure-column-menu-arrow-icon", ""];
export class StructureColumnMenuArrowIconComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.rotateDeg = 90;
    }
    getSelectorName() {
        return 'gui-structure-column-menu-arrow-icon';
    }
}
StructureColumnMenuArrowIconComponent.ɵfac = function StructureColumnMenuArrowIconComponent_Factory(t) { return new (t || StructureColumnMenuArrowIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureColumnMenuArrowIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnMenuArrowIconComponent, selectors: [["div", "gui-structure-column-menu-arrow-icon", ""]], inputs: { rotateDeg: "rotateDeg", sort: "sort" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 5, vars: 4, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 10.04 11.72"], ["x1", "5.02", "y1", "2.15", "x2", "5.02", "y2", "10.97", 1, "cls-1"], ["x1", "5.02", "y1", "0.75", "x2", "9.29", "y2", "5.02", 1, "cls-1"], ["x1", "5.02", "y1", "0.75", "x2", "0.75", "y2", "5.02", 1, "cls-1"]], template: function StructureColumnMenuArrowIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 0);
        i0.ɵɵelement(2, "line", 1);
        i0.ɵɵelement(3, "line", 2);
        i0.ɵɵelement(4, "line", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("transform", "rotate(" + ctx.rotateDeg + "deg)");
        i0.ɵɵclassProp("gui-structure-column-menu-sort-icon", ctx.sort);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnMenuArrowIconComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-column-menu-arrow-icon]',
                template: `
		<div [style.transform]="'rotate(' + rotateDeg + 'deg)'"
			 [class.gui-structure-column-menu-sort-icon]="sort">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
				<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
			</svg>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { rotateDeg: [{
            type: Input
        }], sort: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7O0FBa0J0RixNQUFNLE9BQU8scUNBQXNDLFNBQVEsYUFBYTtJQVF2RSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQU5uQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBT3ZCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0NBQXNDLENBQUM7SUFDL0MsQ0FBQzs7MEhBZFcscUNBQXFDO3dGQUFyQyxxQ0FBcUM7UUFaaEQsMkJBQ3FEO1FBQ3BELG1CQUFrRTtRQUFsRSw4QkFBa0U7UUFDakUsMEJBQThEO1FBQzlELDBCQUE2RDtRQUM3RCwwQkFBNkQ7UUFDOUQsaUJBQU07UUFDUCxpQkFBTTs7UUFQRCwrREFBa0Q7UUFDckQsK0RBQWtEOzt1RkFXekMscUNBQXFDO2NBZmpELFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkNBQTJDO2dCQUNyRCxRQUFRLEVBQUU7Ozs7Ozs7OztFQVNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2REFJQSxTQUFTO2tCQURSLEtBQUs7WUFJTixJQUFJO2tCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW3N0eWxlLnRyYW5zZm9ybV09XCIncm90YXRlKCcgKyByb3RhdGVEZWcgKyAnZGVnKSdcIlxuXHRcdFx0IFtjbGFzcy5ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LXNvcnQtaWNvbl09XCJzb3J0XCI+XG5cdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjA0IDExLjcyXCI+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjIuMTVcIiB4Mj1cIjUuMDJcIiB5Mj1cIjEwLjk3XCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCI5LjI5XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRyb3RhdGVEZWc6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uJztcblx0fVxufVxuIl19