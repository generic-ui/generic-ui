import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class FilterTypeSelectorComponent extends PureComponent {
    filterTypes;
    filterTypeSelected = new EventEmitter();
    filterTypesAsOptions = [];
    disabled = true;
    constructor(elementRef) {
        super(elementRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterTypeSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: { filterTypes: "filterTypes" }, outputs: { filterTypeSelected: "filterTypeSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-type-selector][filterTypes]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"onSelectChange($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[options]=\"filterTypesAsOptions\"\n\t\t\t[placeholder]=\"'Select filter type'\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { filterTypes: [{
                type: Input
            }], filterTypeSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9tZW51L2ZpbHRlci1zZWxlY3Rvci9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7O0FBWW5GLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxhQUFhO0lBRzdELFdBQVcsQ0FBaUM7SUFHNUMsa0JBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFFdEQsb0JBQW9CLEdBQTJCLEVBQUUsQ0FBQztJQUVsRCxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBRWhCLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBK0M7UUFFMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUV4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDM0QsT0FBTztvQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtvQkFDL0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUU7aUJBQ3ZCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQXVCO1FBRXJDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBMkIsRUFBRSxFQUFFO1lBQ3hFLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzt3R0ExQ1csMkJBQTJCOzRGQUEzQiwyQkFBMkIsNk5DZnhDLGlNQUtBOzs0RkRVYSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0MsNENBQTRDLG1CQUVyQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO2lHQUtyQyxXQUFXO3NCQURWLEtBQUs7Z0JBSU4sa0JBQWtCO3NCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3B1cmUtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXR5cGUtc2VsZWN0b3JdW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlclR5cGVzOiBSZWFkb25seUFycmF5PEZpbHRlclR5cGVNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpbHRlclR5cGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyVHlwZUlkPigpO1xuXG5cdGZpbHRlclR5cGVzQXNPcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW107XG5cblx0ZGlzYWJsZWQgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQ+KSB7XG5cblx0XHR0aGlzLmlmQ2hhbmdlZChjaGFuZ2VzLmZpbHRlclR5cGVzLCAoKSA9PiB7XG5cblx0XHRcdHRoaXMuZmlsdGVyVHlwZXNBc09wdGlvbnMgPSB0aGlzLmZpbHRlclR5cGVzLm1hcCgoZmlsdGVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bmFtZTogZmlsdGVyLmdldElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHR2YWx1ZTogZmlsdGVyLmdldE5hbWUoKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmZpbHRlclR5cGVzQXNPcHRpb25zLmxlbmd0aCA9PT0gMDtcblx0XHR9KTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlID0gdGhpcy5maWx0ZXJUeXBlcy5maW5kKChmaWx0ZXJUeXBlOiBGaWx0ZXJUeXBlTW9kZWwpID0+IHtcblx0XHRcdHJldHVybiBmaWx0ZXJUeXBlLmdldElkKCkudG9TdHJpbmcoKSA9PT0gb3B0aW9uLm5hbWU7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmZpbHRlclR5cGVTZWxlY3RlZC5lbWl0KGZpbHRlclR5cGUuZ2V0SWQoKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLXR5cGUtc2VsZWN0b3InO1xuXHR9XG5cbn1cbiIsIjxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIlxuXHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFtvcHRpb25zXT1cImZpbHRlclR5cGVzQXNPcHRpb25zXCJcblx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IGZpbHRlciB0eXBlJ1wiPlxuPC9ndWktc2VsZWN0PlxuIl19