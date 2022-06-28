import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../../common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
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
FieldSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
FieldSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: { fields: "fields" }, outputs: { fieldSelected: "fieldSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<gui-select (optionChanged)="onFieldSelected($event)"
					[options]="fieldsAsOptions"
					[placeholder]="'Select column'">
		</gui-select>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldSelectorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-field-selector][fields]',
                    template: `
		<gui-select (optionChanged)="onFieldSelected($event)"
					[options]="fieldsAsOptions"
					[placeholder]="'Select column'">
		</gui-select>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { fields: [{
                type: Input
            }], fieldSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxSSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFJaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFhekUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFVeEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBTS9DLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEQsT0FBTztvQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtvQkFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7aUJBQ3RCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUF3QjtRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzttSEFsQ1csc0JBQXNCO3VHQUF0QixzQkFBc0IsOExBVHhCOzs7OztFQUtUOzJGQUlXLHNCQUFzQjtrQkFYbEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxRQUFRLEVBQUU7Ozs7O0VBS1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQztpR0FJQSxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL21vZGVsL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWVsZC1zZWxlY3Rvcl1bZmllbGRzXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwib25GaWVsZFNlbGVjdGVkKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cImZpZWxkc0FzT3B0aW9uc1wiXG5cdFx0XHRcdFx0W3BsYWNlaG9sZGVyXT1cIidTZWxlY3QgY29sdW1uJ1wiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogUmVhZG9ubHlBcnJheTxGaWVsZE1vZGVsPjtcblxuXHRAT3V0cHV0KClcblx0ZmllbGRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmllbGRNb2RlbD4oKTtcblxuXHRmaWVsZHNBc09wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEZpZWxkU2VsZWN0b3JDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5maWVsZHMsICgpID0+IHtcblx0XHRcdHRoaXMuZmllbGRzQXNPcHRpb25zID0gdGhpcy5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5hbWU6IGZpZWxkLmdldEZpZWxkSWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdHZhbHVlOiBmaWVsZC5nZXROYW1lKClcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdGVkKGZpZWxkSWQ6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHMuZmluZCgoZmllbGQ6IEZpZWxkTW9kZWwpID0+IGZpZWxkLmdldEZpZWxkSWQoKS50b1N0cmluZygpID09PSBmaWVsZElkLm5hbWUpO1xuXG5cdFx0dGhpcy5maWVsZFNlbGVjdGVkLmVtaXQoZmllbGQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpZWxkLXNlbGVjdG9yJztcblx0fVxufVxuIl19