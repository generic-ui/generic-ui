import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../structure/field/domain/field/data/data-type';
import * as i0 from "@angular/core";
import * as i1 from "./template/string-edit-template.component";
import * as i2 from "./template/number-edit-template.component";
import * as i3 from "./template/boolean-edit-template.component";
import * as i4 from "./template/date-edit-template.component";
export class EditTemplatesComponent {
    getTemplate(dataType) {
        switch (dataType) {
            case DataType.STRING:
                return this.stringTemplate;
            case DataType.NUMBER:
                return this.numberTemplate;
            case DataType.BOOLEAN:
                return this.booleanTemplate;
            case DataType.DATE:
                return this.dateTemplate;
            default:
                return this.emptyTemplate;
        }
    }
}
EditTemplatesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EditTemplatesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EditTemplatesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EditTemplatesComponent, selector: "ng-component", viewQueries: [{ propertyName: "stringTemplate", first: true, predicate: ["string"], descendants: true, read: TemplateRef, static: true }, { propertyName: "numberTemplate", first: true, predicate: ["number"], descendants: true, read: TemplateRef, static: true }, { propertyName: "booleanTemplate", first: true, predicate: ["boolean"], descendants: true, read: TemplateRef, static: true }, { propertyName: "dateTemplate", first: true, predicate: ["date"], descendants: true, read: TemplateRef, static: true }, { propertyName: "emptyTemplate", first: true, predicate: ["empty"], descendants: true, read: TemplateRef, static: true }], ngImport: i0, template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent">
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent">
			</gui-date-edit>
		</ng-template>

		<ng-template #empty>

		</ng-template>

	`, isInline: true, components: [{ type: i1.StringEditTemplateComponent, selector: "gui-string-edit" }, { type: i2.NumberEditTemplateComponent, selector: "gui-number-edit" }, { type: i3.BooleanEditTemplateComponent, selector: "gui-boolean-edit" }, { type: i4.DateEditTemplateComponent, selector: "gui-date-edit" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EditTemplatesComponent, decorators: [{
            type: Component,
            args: [{
                    template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus">
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent">
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent">
			</gui-date-edit>
		</ng-template>

		<ng-template #empty>

		</ng-template>

	`
                }]
        }], propDecorators: { stringTemplate: [{
                type: ViewChild,
                args: ['string', { read: TemplateRef, static: true }]
            }], numberTemplate: [{
                type: ViewChild,
                args: ['number', { read: TemplateRef, static: true }]
            }], booleanTemplate: [{
                type: ViewChild,
                args: ['boolean', { read: TemplateRef, static: true }]
            }], dateTemplate: [{
                type: ViewChild,
                args: ['date', { read: TemplateRef, static: true }]
            }], emptyTemplate: [{
                type: ViewChild,
                args: ['empty', { read: TemplateRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7OztBQWdDaEYsTUFBTSxPQUFPLHNCQUFzQjtJQWlCbEMsV0FBVyxDQUFDLFFBQWtCO1FBRTdCLFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRTdCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQjtnQkFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7SUFDRixDQUFDOztvSEFwQ1csc0JBQXNCO3dHQUF0QixzQkFBc0IseUlBRUwsV0FBVyxpSEFHWCxXQUFXLG1IQUdWLFdBQVcsNkdBR2QsV0FBVywrR0FHVixXQUFXLDJDQTFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJUOzRGQUVXLHNCQUFzQjtrQkE3QmxDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCVDtpQkFDRDs4QkFJQSxjQUFjO3NCQURiLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl4RCxjQUFjO3NCQURiLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl4RCxlQUFlO3NCQURkLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl6RCxZQUFZO3NCQURYLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl0RCxhQUFhO3NCQURaLFNBQVM7dUJBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiPlxuXHRcdFx0PGd1aS1zdHJpbmctZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1zdHJpbmctZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCI+XG5cdFx0XHQ8Z3VpLW51bWJlci1lZGl0IFt2YWx1ZUNoYW5nZXNdPVwidmFsdWVDaGFuZ2VzXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3N0YXR1c109XCJzdGF0dXNcIiBbZm9jdXNdPVwiZm9jdXNcIj5cblx0XHRcdDwvZ3VpLW51bWJlci1lZGl0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Jvb2xlYW4gbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCI+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiBsZXQtcGFyZW50PVwicGFyZW50XCI+XG5cdFx0XHQ8Z3VpLWRhdGUtZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCIgW3BhcmVudF09XCJwYXJlbnRcIj5cblx0XHRcdDwvZ3VpLWRhdGUtZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNlbXB0eT5cblxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCdzdHJpbmcnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0c3RyaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Jvb2xlYW4nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9vbGVhblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2VtcHR5JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGVtcHR5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKGRhdGFUeXBlKSB7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHJpbmdUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvb2xlYW5UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmVtcHR5VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==