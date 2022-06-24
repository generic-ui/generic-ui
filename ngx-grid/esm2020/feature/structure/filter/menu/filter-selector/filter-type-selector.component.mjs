import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
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
FilterTypeSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterTypeSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FilterTypeSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: { filterTypes: "filterTypes" }, outputs: { filterTypeSelected: "filterTypeSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n", components: [{ type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-type-selector][filterTypes]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { filterTypes: [{
                type: Input
            }], filterTypeSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxSSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7OztBQVloRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsYUFBYTtJQVk3RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBuQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUV0RCx5QkFBb0IsR0FBbUMsRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBRyxJQUFJLENBQUM7SUFJaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUErQztRQUUxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBRXhDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMzRCxPQUFPO29CQUNOLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTtpQkFDdkIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBdUI7UUFFckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUEyQixFQUFFLEVBQUU7WUFDeEUsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzt5SEExQ1csMkJBQTJCOzZHQUEzQiwyQkFBMkIsNk5DZnhDLGlNQUtBOzRGRFVhLDJCQUEyQjtrQkFOdkMsU0FBUzsrQkFDQyw0Q0FBNEMsbUJBRXJDLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7aUdBS3JDLFdBQVc7c0JBRFYsS0FBSztnQkFJTixrQkFBa0I7c0JBRGpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclR5cGVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvdHlwZS9maWx0ZXItdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXR5cGUtc2VsZWN0b3JdW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlclR5cGVzOiBSZWFkb25seUFycmF5PEZpbHRlclR5cGVNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpbHRlclR5cGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyVHlwZUlkPigpO1xuXG5cdGZpbHRlclR5cGVzQXNPcHRpb25zOiBSZWFkb25seUFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXTtcblxuXHRkaXNhYmxlZCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudD4pIHtcblxuXHRcdHRoaXMuaWZDaGFuZ2VkKGNoYW5nZXMuZmlsdGVyVHlwZXMsICgpID0+IHtcblxuXHRcdFx0dGhpcy5maWx0ZXJUeXBlc0FzT3B0aW9ucyA9IHRoaXMuZmlsdGVyVHlwZXMubWFwKChmaWx0ZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuYW1lOiBmaWx0ZXIuZ2V0SWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdHZhbHVlOiBmaWx0ZXIuZ2V0TmFtZSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZmlsdGVyVHlwZXNBc09wdGlvbnMubGVuZ3RoID09PSAwO1xuXHRcdH0pO1xuXHR9XG5cblx0b25TZWxlY3RDaGFuZ2Uob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlclR5cGUgPSB0aGlzLmZpbHRlclR5cGVzLmZpbmQoKGZpbHRlclR5cGU6IEZpbHRlclR5cGVNb2RlbCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZpbHRlclR5cGUuZ2V0SWQoKS50b1N0cmluZygpID09PSBvcHRpb24ubmFtZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZVNlbGVjdGVkLmVtaXQoZmlsdGVyVHlwZS5nZXRJZCgpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcic7XG5cdH1cblxufVxuIiwiPGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwib25TZWxlY3RDaGFuZ2UoJGV2ZW50KVwiXG5cdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0W29wdGlvbnNdPVwiZmlsdGVyVHlwZXNBc09wdGlvbnNcIlxuXHRcdFx0W3BsYWNlaG9sZGVyXT1cIidTZWxlY3QgZmlsdGVyIHR5cGUnXCI+XG48L2d1aS1zZWxlY3Q+XG4iXX0=