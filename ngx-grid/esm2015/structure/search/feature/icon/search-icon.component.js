import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../common/cdk/component/icon-component';
import * as i0 from "@angular/core";
const _c0 = ["gui-search-icon", ""];
export class SearchIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-search-icon';
    }
}
SearchIconComponent.ɵfac = function SearchIconComponent_Factory(t) { return new (t || SearchIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SearchIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchIconComponent, selectors: [["div", "gui-search-icon", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "10.231", "height", "10.601", "viewBox", "0 0 10.231 10.601", 1, "gui-search-icon-svg"], ["x2", "1.77", "y2", "1.77", "transform", "translate(7.4 7.77)", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5"], ["cx", "4.02", "cy", "4.02", "r", "4.02", "transform", "translate(0.5 0.5)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"]], template: function SearchIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "line", 1);
        i0.ɵɵelement(2, "circle", 2);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchIconComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-search-icon]',
                template: `
		<svg class="gui-search-icon-svg" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
			<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
				  stroke-linejoin="round" stroke-width="1.5"/>
			<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1"
					stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvaWNvbi9zZWFyY2gtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFnQmhGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJELFlBQVksVUFBc0IsRUFDL0IsaUJBQW9DO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7O3NGQVRXLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FBVjlCLG1CQUErSDtRQUEvSCw4QkFBK0g7UUFDOUgsMEJBQytDO1FBQy9DLDRCQUM4RDtRQUMvRCxpQkFBTTs7dUZBS0ssbUJBQW1CO2NBYi9CLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9pY29uLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zZWFyY2gtaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzdmcgY2xhc3M9XCJndWktc2VhcmNoLWljb24tc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAuMjMxXCIgaGVpZ2h0PVwiMTAuNjAxXCIgdmlld0JveD1cIjAgMCAxMC4yMzEgMTAuNjAxXCI+XG5cdFx0XHQ8bGluZSB4Mj1cIjEuNzdcIiB5Mj1cIjEuNzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNy40IDcuNzcpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0ICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cblx0XHRcdDxjaXJjbGUgY3g9XCI0LjAyXCIgY3k9XCI0LjAyXCIgcj1cIjQuMDJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNSlcIiBzdHJva2Utd2lkdGg9XCIxXCJcblx0XHRcdFx0XHRzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwibm9uZVwiLz5cblx0XHQ8L3N2Zz5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoSWNvbkNvbXBvbmVudCBleHRlbmRzIEljb25Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWFyY2gtaWNvbic7XG5cdH1cbn1cbiJdfQ==