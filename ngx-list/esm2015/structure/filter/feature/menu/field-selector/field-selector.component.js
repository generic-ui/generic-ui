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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQWE1RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQVV4RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUxuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFNL0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUVyRCxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNoRCxPQUFPO29CQUNOLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUNuQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtpQkFDdEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQXdCO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7OztZQTdDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFOzs7OztFQUtUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBbEI0QyxVQUFVOzs7cUJBcUJyRCxLQUFLOzRCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5tb2RlbCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmllbGQtc2VsZWN0b3JdW2ZpZWxkc10nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cIm9uRmllbGRTZWxlY3RlZCgkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJmaWVsZHNBc09wdGlvbnNcIlxuXHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IGNvbHVtbidcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IFJlYWRvbmx5QXJyYXk8RmllbGRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpZWxkU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkTW9kZWw+KCk7XG5cblx0ZmllbGRzQXNPcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+O1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxGaWVsZFNlbGVjdG9yQ29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuZmllbGRzLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmZpZWxkc0FzT3B0aW9ucyA9IHRoaXMuZmllbGRzLm1hcCgoZmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuYW1lOiBmaWVsZC5nZXRGaWVsZElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHR2YWx1ZTogZmllbGQuZ2V0TmFtZSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3RlZChmaWVsZElkOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoKGZpZWxkOiBGaWVsZE1vZGVsKSA9PiBmaWVsZC5nZXRGaWVsZElkKCkudG9TdHJpbmcoKSA9PT0gZmllbGRJZC5uYW1lKTtcblxuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWVsZC1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==