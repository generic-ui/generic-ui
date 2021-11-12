import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
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
FilterMenuActiveFiltersComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
FilterMenuActiveFiltersComponent.ctorParameters = () => [
    { type: ElementRef }
];
FilterMenuActiveFiltersComponent.propDecorators = {
    activeFilters: [{ type: Input }],
    removedFilter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9hY3RpdmUtZmlsdGVycy9maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBNkNuRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsYUFBYTtJQVFsRSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFJNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQTZCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQzs7O1lBNURELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0RBQW9EO2dCQUM5RCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBN0M0QyxVQUFVOzs7NEJBZ0RyRCxLQUFLOzRCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnNdW2FjdGl2ZUZpbHRlcnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgKm5nSWY9XCJhY3RpdmVGaWx0ZXJzICYmIGFjdGl2ZUZpbHRlcnMubGVuZ3RoID4gMFwiXG5cdFx0Y2xhc3M9XCJcIlxuXHRcdHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IGRhc2hlZDsgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZFwiPlxuXG5cdFx0XHQ8aDQ+QWN0aXZlIGZpbHRlcnM6PC9oND5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGFjdGl2ZUZpbHRlcnNcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuIFwiPlxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInQ29sdW1uIG5hbWUgJyArIGZpbHRlci5nZXRGaWVsZE5hbWUoKVwiPlxuXHRcdFx0XHRcdHt7ZmlsdGVyLmdldEZpZWxkTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidGaWx0ZXIgdHlwZSAnICsgZmlsdGVyLmdldEZpbHRlclR5cGVOYW1lKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRGaWx0ZXJUeXBlTmFtZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidWYWx1ZSAnICsgZmlsdGVyLmdldFZhbHVlKClcIj5cblx0XHRcdFx0XHR7e2ZpbHRlci5nZXRWYWx1ZSgpfX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShmaWx0ZXIpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGJyLz5cblx0XHQ8YnIvPlxuXHRcdDxici8+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRyZW1vdmVkRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxGaWx0ZXJJZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXB5LTgnKTtcblx0fVxuXG5cdHJlbW92ZShmaWx0ZXI6IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlZEZpbHRlci5lbWl0KGZpbHRlci5nZXRGaWx0ZXJJZCgpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycyc7XG5cdH1cbn1cbiJdfQ==