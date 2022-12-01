import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@generic-ui/fabric";
export class FilterMenuActiveFiltersComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.removedFilter = new EventEmitter();
        this.addClassToHost('gui-py-8');
    }
    remove(filter) {
        this.removedFilter.emit(filter.getFilterId());
    }
    getSelectorName() {
        return 'gui-filter-menu-active-filters';
    }
}
FilterMenuActiveFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuActiveFiltersComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuActiveFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: { activeFilters: "activeFilters" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: `

		<div *ngIf="activeFilters && activeFilters.length > 0"
			 class=""
			 style="border-top: 1px dashed; border-bottom: 1px dashed">

			<h4>Active filters:</h4>

			<div *ngFor="let filter of activeFilters"
				 class="gui-flex gui-justify-between ">

				<div>
				<span [gui-tooltip]="'Column name ' + filter.getFieldName()">
					{{filter.getFieldName()}}
				</span>

					<span [gui-tooltip]="'Filter type ' + filter.getFilterTypeName()">
					{{filter.getFilterTypeName()}}
				</span>

					<span [gui-tooltip]="'Value ' + filter.getValue()">
					{{filter.getValue()}}
				</span>
				</div>


				<button (click)="remove(filter)">Remove</button>
			</div>

		</div>

		<br/>
		<br/>
		<br/>

	`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterMenuActiveFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-menu-active-filters][activeFilters]',
                    template: `

		<div *ngIf="activeFilters && activeFilters.length > 0"
			 class=""
			 style="border-top: 1px dashed; border-bottom: 1px dashed">

			<h4>Active filters:</h4>

			<div *ngFor="let filter of activeFilters"
				 class="gui-flex gui-justify-between ">

				<div>
				<span [gui-tooltip]="'Column name ' + filter.getFieldName()">
					{{filter.getFieldName()}}
				</span>

					<span [gui-tooltip]="'Filter type ' + filter.getFilterTypeName()">
					{{filter.getFilterTypeName()}}
				</span>

					<span [gui-tooltip]="'Value ' + filter.getValue()">
					{{filter.getValue()}}
				</span>
				</div>


				<button (click)="remove(filter)">Remove</button>
			</div>

		</div>

		<br/>
		<br/>
		<br/>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { activeFilters: [{
                type: Input
            }], removedFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvYWN0aXZlLWZpbHRlcnMvZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdFQUFnRSxDQUFDOzs7O0FBNkMvRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsYUFBYTtJQVFsRSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFJNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQXlCO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQzs7NkhBbkJXLGdDQUFnQztpSEFBaEMsZ0NBQWdDLDBNQXZDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUNUOzJGQUlXLGdDQUFnQztrQkF6QzVDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG9EQUFvRDtvQkFDOUQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1DVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lHQUlBLGFBQWE7c0JBRFosS0FBSztnQkFJTixhQUFhO3NCQURaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2lkL2ZpbHRlci5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnNdW2FjdGl2ZUZpbHRlcnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgKm5nSWY9XCJhY3RpdmVGaWx0ZXJzICYmIGFjdGl2ZUZpbHRlcnMubGVuZ3RoID4gMFwiXG5cdFx0XHQgY2xhc3M9XCJcIlxuXHRcdFx0IHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IGRhc2hlZDsgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZFwiPlxuXG5cdFx0XHQ8aDQ+QWN0aXZlIGZpbHRlcnM6PC9oND5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGFjdGl2ZUZpbHRlcnNcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuIFwiPlxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInQ29sdW1uIG5hbWUgJyArIGZpbHRlci5nZXRGaWVsZE5hbWUoKVwiPlxuXHRcdFx0XHRcdHt7ZmlsdGVyLmdldEZpZWxkTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidGaWx0ZXIgdHlwZSAnICsgZmlsdGVyLmdldEZpbHRlclR5cGVOYW1lKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRGaWx0ZXJUeXBlTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidWYWx1ZSAnICsgZmlsdGVyLmdldFZhbHVlKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRWYWx1ZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShmaWx0ZXIpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGJyLz5cblx0XHQ8YnIvPlxuXHRcdDxici8+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdHJlbW92ZWRGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlcklkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHktOCcpO1xuXHR9XG5cblx0cmVtb3ZlKGZpbHRlcjogQWN0aXZlRmlsdGVyTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZWRGaWx0ZXIuZW1pdChmaWx0ZXIuZ2V0RmlsdGVySWQoKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMnO1xuXHR9XG59XG4iXX0=