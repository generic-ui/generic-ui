import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
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
FilterTypeSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-type-selector][filterTypes]',
                template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FilterTypeSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
];
FilterTypeSelectorComponent.propDecorators = {
    filterTypes: [{ type: Input }],
    filterTypeSelected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQVluRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsYUFBYTtJQVk3RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBuQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUV0RCx5QkFBb0IsR0FBbUMsRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBRyxJQUFJLENBQUM7SUFJaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUErQztRQUUxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBRXhDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMzRCxPQUFPO29CQUNOLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTtpQkFDdkIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBdUI7UUFFckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUEyQixFQUFFLEVBQUU7WUFDeEUsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzs7WUFoREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELDJNQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFkNEMsVUFBVTs7OzBCQWlCckQsS0FBSztpQ0FHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXR5cGUtc2VsZWN0b3JdW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlclR5cGVzOiBSZWFkb25seUFycmF5PEZpbHRlclR5cGVNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpbHRlclR5cGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyVHlwZUlkPigpO1xuXG5cdGZpbHRlclR5cGVzQXNPcHRpb25zOiBSZWFkb25seUFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXTtcblxuXHRkaXNhYmxlZCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudD4pIHtcblxuXHRcdHRoaXMuaWZDaGFuZ2VkKGNoYW5nZXMuZmlsdGVyVHlwZXMsICgpID0+IHtcblxuXHRcdFx0dGhpcy5maWx0ZXJUeXBlc0FzT3B0aW9ucyA9IHRoaXMuZmlsdGVyVHlwZXMubWFwKChmaWx0ZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuYW1lOiBmaWx0ZXIuZ2V0SWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdHZhbHVlOiBmaWx0ZXIuZ2V0TmFtZSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZmlsdGVyVHlwZXNBc09wdGlvbnMubGVuZ3RoID09PSAwO1xuXHRcdH0pO1xuXHR9XG5cblx0b25TZWxlY3RDaGFuZ2Uob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlclR5cGUgPSB0aGlzLmZpbHRlclR5cGVzLmZpbmQoKGZpbHRlclR5cGU6IEZpbHRlclR5cGVNb2RlbCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZpbHRlclR5cGUuZ2V0SWQoKS50b1N0cmluZygpID09PSBvcHRpb24ubmFtZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZVNlbGVjdGVkLmVtaXQoZmlsdGVyVHlwZS5nZXRJZCgpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcic7XG5cdH1cblxufVxuIl19