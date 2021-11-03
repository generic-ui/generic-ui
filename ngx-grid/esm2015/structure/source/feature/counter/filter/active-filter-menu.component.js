import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../filter/feature/active-filters/active-filter-list.component";
import * as i2 from "@generic-ui/fabric";
export class ActiveFilterMenuComponent {
}
ActiveFilterMenuComponent.ɵfac = function ActiveFilterMenuComponent_Factory(t) { return new (t || ActiveFilterMenuComponent)(); };
ActiveFilterMenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveFilterMenuComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [["gui-active-filter-list", ""], ["gui-button", "", 3, "text"], ["gui-button", "", 3, "outline", "primary"]], template: function ActiveFilterMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1, "Active filters");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "div", 0);
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵtext(5, " Cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵtext(7, " Clear All ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("text", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("outline", true)("primary", true);
    } }, directives: [i1.ActiveFilterListComponent, i2.FabricButtonComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFilterMenuComponent, [{
        type: Component,
        args: [{
                template: `

		<h3>Active filters</h3>

		<div gui-active-filter-list></div>

		<div>

			<button gui-button
					[text]="true">
				Cancel
			</button>

			<button gui-button
					[outline]="true"
					[primary]="true">
				Clear All
			</button>
		</div>
	`
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvdXJjZS9mZWF0dXJlL2NvdW50ZXIvZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXdCMUMsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FBbkJwQywwQkFBSTtRQUFBLDhCQUFjO1FBQUEsaUJBQUs7UUFFdkIseUJBQWtDO1FBRWxDLDJCQUFLO1FBRUosaUNBQ2dCO1FBQ2Ysd0JBQ0Q7UUFBQSxpQkFBUztRQUVULGlDQUVtQjtRQUNsQiwyQkFDRDtRQUFBLGlCQUFTO1FBQ1YsaUJBQU07O1FBVEgsZUFBYTtRQUFiLDJCQUFhO1FBS2IsZUFBZ0I7UUFBaEIsOEJBQWdCLGlCQUFBOzt1RkFPUix5QkFBeUI7Y0F0QnJDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQlQ7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxoMz5BY3RpdmUgZmlsdGVyczwvaDM+XG5cblx0XHQ8ZGl2IGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbdGV4dF09XCJ0cnVlXCI+XG5cdFx0XHRcdENhbmNlbFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtvdXRsaW5lXT1cInRydWVcIlxuXHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIj5cblx0XHRcdFx0Q2xlYXIgQWxsXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IHtcbn1cbiJdfQ==