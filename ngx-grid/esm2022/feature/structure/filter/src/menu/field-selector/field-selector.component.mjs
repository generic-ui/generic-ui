import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import { ifChanged } from '../../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
export class FieldSelectorComponent extends PureComponent {
    fields;
    fieldSelected = new EventEmitter();
    fieldsAsOptions;
    constructor(elementRef) {
        super(elementRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FieldSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: { fields: "fields" }, outputs: { fieldSelected: "fieldSelected" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `./field-selector.component.html`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FieldSelectorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-field-selector][fields]',
                    template: `./field-selector.component.html`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { fields: [{
                type: Input
            }], fieldSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFRNUUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFHeEQsTUFBTSxDQUE2QjtJQUduQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUUvQyxlQUFlLENBQXlCO0lBRXhDLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEQsT0FBTztvQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtvQkFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7aUJBQ3RCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUF3QjtRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDO3VHQWxDVyxzQkFBc0I7MkZBQXRCLHNCQUFzQiw4TEFKeEIsaUNBQWlDOzsyRkFJL0Isc0JBQXNCO2tCQU5sQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7K0VBSUEsTUFBTTtzQkFETCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9hcGkvbW9kZWwvZmllbGQubW9kZWwnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvY2hlY2suaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpZWxkLXNlbGVjdG9yXVtmaWVsZHNdJyxcblx0dGVtcGxhdGU6IGAuL2ZpZWxkLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkcyE6IFJlYWRvbmx5QXJyYXk8RmllbGRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpZWxkU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkTW9kZWw+KCk7XG5cblx0ZmllbGRzQXNPcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+O1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxGaWVsZFNlbGVjdG9yQ29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuZmllbGRzLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmZpZWxkc0FzT3B0aW9ucyA9IHRoaXMuZmllbGRzLm1hcCgoZmllbGQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuYW1lOiBmaWVsZC5nZXRGaWVsZElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHR2YWx1ZTogZmllbGQuZ2V0TmFtZSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3RlZChmaWVsZElkOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoKGZpZWxkOiBGaWVsZE1vZGVsKSA9PiBmaWVsZC5nZXRGaWVsZElkKCkudG9TdHJpbmcoKSA9PT0gZmllbGRJZC5uYW1lKTtcblxuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWVsZC1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==