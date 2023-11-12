import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
export class FilterMenuActiveFiltersComponent extends PureComponent {
    activeFilters;
    removedFilter = new EventEmitter();
    constructor(elementRef) {
        super(elementRef);
        this.addClassToHost('gui-py-8');
    }
    remove(filter) {
        this.removedFilter.emit(filter.getFilterId());
    }
    getSelectorName() {
        return 'gui-filter-menu-active-filters';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FilterMenuActiveFiltersComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: { activeFilters: "activeFilters" }, outputs: { removedFilter: "removedFilter" }, usesInheritance: true, ngImport: i0, template: `./filter-menu-active-filters.component.html`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FilterMenuActiveFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-menu-active-filters][activeFilters]',
                    template: `./filter-menu-active-filters.component.html`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { activeFilters: [{
                type: Input
            }], removedFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvYWN0aXZlLWZpbHRlcnMvZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQVVuRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsYUFBYTtJQUdsRSxhQUFhLENBQTRCO0lBR3pDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO0lBRTdDLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUF5QjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGdDQUFnQyxDQUFDO0lBQ3pDLENBQUM7dUdBbkJXLGdDQUFnQzsyRkFBaEMsZ0NBQWdDLDBNQUpsQyw2Q0FBNkM7OzJGQUkzQyxnQ0FBZ0M7a0JBTjVDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG9EQUFvRDtvQkFDOUQsUUFBUSxFQUFFLDZDQUE2QztvQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzsrRUFJQSxhQUFhO3NCQURaLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9pZC9maWx0ZXIuaWQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1tZW51LWFjdGl2ZS1maWx0ZXJzXVthY3RpdmVGaWx0ZXJzXScsXG5cdHRlbXBsYXRlOiBgLi9maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVBY3RpdmVGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0YWN0aXZlRmlsdGVycyE6IEFycmF5PEFjdGl2ZUZpbHRlck1vZGVsPjtcblxuXHRAT3V0cHV0KClcblx0cmVtb3ZlZEZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVySWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1weS04Jyk7XG5cdH1cblxuXHRyZW1vdmUoZmlsdGVyOiBBY3RpdmVGaWx0ZXJNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlZEZpbHRlci5lbWl0KGZpbHRlci5nZXRGaWx0ZXJJZCgpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycyc7XG5cdH1cbn1cbiJdfQ==