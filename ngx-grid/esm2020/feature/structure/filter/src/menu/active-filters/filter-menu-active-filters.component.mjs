import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
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
FilterMenuActiveFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuActiveFiltersComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuActiveFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: { activeFilters: "activeFilters" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: `./filter-menu-active-filters.component.html`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuActiveFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-menu-active-filters][activeFilters]',
                    template: `./filter-menu-active-filters.component.html`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { activeFilters: [{
                type: Input
            }], removedFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvYWN0aXZlLWZpbHRlcnMvZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQVVuRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsYUFBYTtJQVFsRSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFJNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQXlCO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQzs7OEhBbkJXLGdDQUFnQztrSEFBaEMsZ0NBQWdDLDBNQUpsQyw2Q0FBNkM7NEZBSTNDLGdDQUFnQztrQkFONUMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxRQUFRLEVBQUUsNkNBQTZDO29CQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lHQUlBLGFBQWE7c0JBRFosS0FBSztnQkFJTixhQUFhO3NCQURaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2lkL2ZpbHRlci5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnNdW2FjdGl2ZUZpbHRlcnNdJyxcblx0dGVtcGxhdGU6IGAuL2ZpbHRlci1tZW51LWFjdGl2ZS1maWx0ZXJzLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUFjdGl2ZUZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVGaWx0ZXJzITogQXJyYXk8QWN0aXZlRmlsdGVyTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRyZW1vdmVkRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxGaWx0ZXJJZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXB5LTgnKTtcblx0fVxuXG5cdHJlbW92ZShmaWx0ZXI6IEFjdGl2ZUZpbHRlck1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVkRmlsdGVyLmVtaXQoZmlsdGVyLmdldEZpbHRlcklkKCkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci1tZW51LWFjdGl2ZS1maWx0ZXJzJztcblx0fVxufVxuIl19