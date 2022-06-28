import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
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
FilterMenuActiveFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuActiveFiltersComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuActiveFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: { activeFilters: "activeFilters" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: `

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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterMenuActiveFiltersComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9hY3RpdmUtZmlsdGVycy9maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUE2Q2hGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxhQUFhO0lBUWxFLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSG5CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUk1QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBeUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQ0FBZ0MsQ0FBQztJQUN6QyxDQUFDOzs2SEFuQlcsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MsME1BdkNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQ1Q7MkZBSVcsZ0NBQWdDO2tCQXpDNUMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7aUdBSUEsYUFBYTtzQkFEWixLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpL2lkL2ZpbHRlci5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnNdW2FjdGl2ZUZpbHRlcnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgKm5nSWY9XCJhY3RpdmVGaWx0ZXJzICYmIGFjdGl2ZUZpbHRlcnMubGVuZ3RoID4gMFwiXG5cdFx0XHQgY2xhc3M9XCJcIlxuXHRcdFx0IHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IGRhc2hlZDsgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZFwiPlxuXG5cdFx0XHQ8aDQ+QWN0aXZlIGZpbHRlcnM6PC9oND5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGFjdGl2ZUZpbHRlcnNcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuIFwiPlxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInQ29sdW1uIG5hbWUgJyArIGZpbHRlci5nZXRGaWVsZE5hbWUoKVwiPlxuXHRcdFx0XHRcdHt7ZmlsdGVyLmdldEZpZWxkTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidGaWx0ZXIgdHlwZSAnICsgZmlsdGVyLmdldEZpbHRlclR5cGVOYW1lKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRGaWx0ZXJUeXBlTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidWYWx1ZSAnICsgZmlsdGVyLmdldFZhbHVlKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRWYWx1ZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShmaWx0ZXIpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGJyLz5cblx0XHQ8YnIvPlxuXHRcdDxici8+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdHJlbW92ZWRGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlcklkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHktOCcpO1xuXHR9XG5cblx0cmVtb3ZlKGZpbHRlcjogQWN0aXZlRmlsdGVyTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZWRGaWx0ZXIuZW1pdChmaWx0ZXIuZ2V0RmlsdGVySWQoKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMnO1xuXHR9XG59XG4iXX0=