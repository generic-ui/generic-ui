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
                template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQVluRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsYUFBYTtJQVk3RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBuQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUV0RCx5QkFBb0IsR0FBbUMsRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBRyxJQUFJLENBQUM7SUFJaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUErQztRQUUxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBRXhDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMzRCxPQUFPO29CQUNOLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRTtpQkFDdkIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBdUI7UUFFckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUErQixFQUFFLEVBQUU7WUFDNUUsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzs7WUFoREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELDJNQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFkNEMsVUFBVTs7OzBCQWlCckQsS0FBSztpQ0FHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXR5cGUtc2VsZWN0b3JdW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlclR5cGVzOiBSZWFkb25seUFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWx0ZXJUeXBlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlclR5cGVJZD4oKTtcblxuXHRmaWx0ZXJUeXBlc0FzT3B0aW9uczogUmVhZG9ubHlBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW107XG5cblx0ZGlzYWJsZWQgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQ+KSB7XG5cblx0XHR0aGlzLmlmQ2hhbmdlZChjaGFuZ2VzLmZpbHRlclR5cGVzLCAoKSA9PiB7XG5cblx0XHRcdHRoaXMuZmlsdGVyVHlwZXNBc09wdGlvbnMgPSB0aGlzLmZpbHRlclR5cGVzLm1hcCgoZmlsdGVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bmFtZTogZmlsdGVyLmdldElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHR2YWx1ZTogZmlsdGVyLmdldE5hbWUoKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmZpbHRlclR5cGVzQXNPcHRpb25zLmxlbmd0aCA9PT0gMDtcblx0XHR9KTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlID0gdGhpcy5maWx0ZXJUeXBlcy5maW5kKChmaWx0ZXJUeXBlOiBGaWx0ZXJUeXBlUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyVHlwZS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IG9wdGlvbi5uYW1lO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlU2VsZWN0ZWQuZW1pdChmaWx0ZXJUeXBlLmdldElkKCkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yJztcblx0fVxuXG59XG4iXX0=