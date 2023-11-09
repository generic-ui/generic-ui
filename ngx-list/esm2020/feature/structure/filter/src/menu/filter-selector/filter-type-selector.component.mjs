import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class FilterTypeSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.filterTypeSelected = new EventEmitter();
        this.filterTypesAsOptions = [];
        this.disabled = true;
    }
    ngOnChanges(changes) {
        this.ifChanged(changes.filterTypes, () => {
            this.filterTypesAsOptions = this.filterTypes.map((filter) => {
                return {
                    name: filter.getId().toString(),
                    value: filter.getName()
                };
            });
            this.disabled = this.filterTypesAsOptions.length === 0;
        });
    }
    onSelectChange(option) {
        const filterType = this.filterTypes.find((filterType) => {
            return filterType.getId().toString() === option.name;
        });
        this.filterTypeSelected.emit(filterType.getId());
    }
    getSelectorName() {
        return 'gui-filter-type-selector';
    }
}
FilterTypeSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterTypeSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterTypeSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: { filterTypes: "filterTypes" }, outputs: { filterTypeSelected: "filterTypeSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-type-selector][filterTypes]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { filterTypes: [{
                type: Input
            }], filterTypeSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9tZW51L2ZpbHRlci1zZWxlY3Rvci9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7O0FBWW5GLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxhQUFhO0lBWTdELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBUG5CLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRXRELHlCQUFvQixHQUEyQixFQUFFLENBQUM7UUFFbEQsYUFBUSxHQUFHLElBQUksQ0FBQztJQUloQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQStDO1FBRTFELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFFeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzNELE9BQU87b0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQy9CLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFO2lCQUN2QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUVyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQTJCLEVBQUUsRUFBRTtZQUN4RSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7O3lIQTFDVywyQkFBMkI7NkdBQTNCLDJCQUEyQiw2TkNmeEMsaU1BS0E7NEZEVWEsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNDLDRDQUE0QyxtQkFFckMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTtpR0FLckMsV0FBVztzQkFEVixLQUFLO2dCQUlOLGtCQUFrQjtzQkFEakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvdHlwZS9maWx0ZXItdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yXVtmaWx0ZXJUeXBlc10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWx0ZXJUeXBlczogUmVhZG9ubHlBcnJheTxGaWx0ZXJUeXBlTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWx0ZXJUeXBlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlclR5cGVJZD4oKTtcblxuXHRmaWx0ZXJUeXBlc0FzT3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdO1xuXG5cdGRpc2FibGVkID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8RmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50Pikge1xuXG5cdFx0dGhpcy5pZkNoYW5nZWQoY2hhbmdlcy5maWx0ZXJUeXBlcywgKCkgPT4ge1xuXG5cdFx0XHR0aGlzLmZpbHRlclR5cGVzQXNPcHRpb25zID0gdGhpcy5maWx0ZXJUeXBlcy5tYXAoKGZpbHRlcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5hbWU6IGZpbHRlci5nZXRJZCgpLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0dmFsdWU6IGZpbHRlci5nZXROYW1lKClcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRpc2FibGVkID0gdGhpcy5maWx0ZXJUeXBlc0FzT3B0aW9ucy5sZW5ndGggPT09IDA7XG5cdFx0fSk7XG5cdH1cblxuXHRvblNlbGVjdENoYW5nZShvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZSA9IHRoaXMuZmlsdGVyVHlwZXMuZmluZCgoZmlsdGVyVHlwZTogRmlsdGVyVHlwZU1vZGVsKSA9PiB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyVHlwZS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IG9wdGlvbi5uYW1lO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlU2VsZWN0ZWQuZW1pdChmaWx0ZXJUeXBlLmdldElkKCkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yJztcblx0fVxuXG59XG4iLCI8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJvblNlbGVjdENoYW5nZSgkZXZlbnQpXCJcblx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRbb3B0aW9uc109XCJmaWx0ZXJUeXBlc0FzT3B0aW9uc1wiXG5cdFx0XHRbcGxhY2Vob2xkZXJdPVwiJ1NlbGVjdCBmaWx0ZXIgdHlwZSdcIj5cbjwvZ3VpLXNlbGVjdD5cbiJdfQ==