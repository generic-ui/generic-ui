import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../filter/src/active-filters/active-filter-list.component";
import * as i2 from "@generic-ui/fabric";
export class ActiveFilterMenuComponent {
}
ActiveFilterMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ActiveFilterMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ActiveFilterMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: ActiveFilterMenuComponent, selector: "ng-component", ngImport: i0, template: `

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
	`, isInline: true, dependencies: [{ kind: "component", type: i1.ActiveFilterListComponent, selector: "div[gui-active-filter-list]" }, { kind: "component", type: i2.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ActiveFilterMenuComponent, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9jb3VudGVyL2ZpbHRlci9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUF3QjFDLE1BQU0sT0FBTyx5QkFBeUI7O3NIQUF6Qix5QkFBeUI7MEdBQXpCLHlCQUF5QixvREFyQjNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJUOzJGQUVXLHlCQUF5QjtrQkF0QnJDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJUO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGgzPkFjdGl2ZSBmaWx0ZXJzPC9oMz5cblxuXHRcdDxkaXYgZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdD48L2Rpdj5cblxuXHRcdDxkaXY+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFt0ZXh0XT1cInRydWVcIj5cblx0XHRcdFx0Q2FuY2VsXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiPlxuXHRcdFx0XHRDbGVhciBBbGxcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQge1xufVxuIl19