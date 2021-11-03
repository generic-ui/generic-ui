import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../../common/cdk/component/icon-component';
import * as i0 from "@angular/core";
const _c0 = ["gui-filter-icon", ""];
export class FilterIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-filter-icon';
    }
}
FilterIconComponent.ɵfac = function FilterIconComponent_Factory(t) { return new (t || FilterIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FilterIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterIconComponent, selectors: [["div", "gui-filter-icon", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 4, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 10.32 7.23"], ["x1", "9.57", "y1", "0.75", "x2", "0.75", "y2", "0.75", 1, "cls-1"], ["x1", "8.14", "y1", "3.62", "x2", "2.18", "y2", "3.62", 1, "cls-1"], ["x1", "6.71", "y1", "6.48", "x2", "3.62", "y2", "6.48", 1, "cls-1"]], template: function FilterIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "line", 1);
        i0.ɵɵelement(2, "line", 2);
        i0.ɵɵelement(3, "line", 3);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterIconComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-filter-icon]',
                template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQWNuRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxZQUFZLFVBQXNCLEVBQy9CLGlCQUFvQztRQUN0QyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOztzRkFUVyxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQVQ5QixtQkFBaUU7UUFBakUsOEJBQWlFO1FBQ2hFLDBCQUE2RDtRQUM3RCwwQkFBNkQ7UUFDN0QsMEJBQTZEO1FBQzlELGlCQUFNOzt1RkFLSyxtQkFBbUI7Y0FaL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvaWNvbi1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMC4zMiA3LjIzXCI+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI5LjU3XCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCIwLjc1XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiOC4xNFwiIHkxPVwiMy42MlwiIHgyPVwiMi4xOFwiIHkyPVwiMy42MlwiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjYuNzFcIiB5MT1cIjYuNDhcIiB4Mj1cIjMuNjJcIiB5Mj1cIjYuNDhcIi8+XG5cdFx0PC9zdmc+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLWljb24nO1xuXHR9XG59XG4iXX0=