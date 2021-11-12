import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../../../common/cdk/component/check.input';
export class FieldSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.fieldSelected = new EventEmitter();
    }
    ngOnChanges(changes) {
        ifChanged(changes.fields, () => {
            this.fieldsAsOptions = this.fields.map((field) => {
                return {
                    name: field.getFieldId().toString(),
                    value: field.getName()
                };
            });
        });
    }
    onFieldSelected(fieldId) {
        const field = this.fields.find((field) => field.getFieldId().toString() === fieldId.name);
        this.fieldSelected.emit(field);
    }
    getSelectorName() {
        return 'gui-field-selector';
    }
}
FieldSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-field-selector][fields]',
                template: `
		<gui-select (optionChanged)="onFieldSelected($event)"
					[options]="fieldsAsOptions"
					[placeholder]="'Select column'">
		</gui-select>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FieldSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
];
FieldSelectorComponent.propDecorators = {
    fields: [{ type: Input }],
    fieldSelected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQWE1RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQVV4RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUxuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBTW5ELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEQsT0FBTztvQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtvQkFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7aUJBQ3RCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUF3QjtRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzs7WUE3Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRTs7Ozs7RUFLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQWxCNEMsVUFBVTs7O3FCQXFCckQsS0FBSzs0QkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmllbGQtc2VsZWN0b3JdW2ZpZWxkc10nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cIm9uRmllbGRTZWxlY3RlZCgkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJmaWVsZHNBc09wdGlvbnNcIlxuXHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IGNvbHVtbidcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IFJlYWRvbmx5QXJyYXk8RmllbGRSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWVsZFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWVsZFJlYWRNb2RlbD4oKTtcblxuXHRmaWVsZHNBc09wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEZpZWxkU2VsZWN0b3JDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5maWVsZHMsICgpID0+IHtcblx0XHRcdHRoaXMuZmllbGRzQXNPcHRpb25zID0gdGhpcy5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5hbWU6IGZpZWxkLmdldEZpZWxkSWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdHZhbHVlOiBmaWVsZC5nZXROYW1lKClcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdGVkKGZpZWxkSWQ6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHMuZmluZCgoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKSA9PiBmaWVsZC5nZXRGaWVsZElkKCkudG9TdHJpbmcoKSA9PT0gZmllbGRJZC5uYW1lKTtcblxuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWVsZC1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==