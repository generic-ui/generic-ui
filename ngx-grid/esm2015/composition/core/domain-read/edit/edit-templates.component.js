import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
import * as i1 from "./template/string-edit-template.component";
import * as i2 from "./template/number-edit-template.component";
import * as i3 from "./template/boolean-edit-template.component";
import * as i4 from "./template/date-edit-template.component";
const _c0 = ["string"];
const _c1 = ["number"];
const _c2 = ["boolean"];
const _c3 = ["date"];
const _c4 = ["empty"];
function EditTemplatesComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-string-edit", 5);
} if (rf & 2) {
    const valueChanges_r10 = ctx.valueChanges;
    const value_r11 = ctx.value;
    const status_r12 = ctx.status;
    const focus_r13 = ctx.focus;
    i0.ɵɵproperty("valueChanges", valueChanges_r10)("value", value_r11)("status", status_r12)("focus", focus_r13);
} }
function EditTemplatesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-number-edit", 5);
} if (rf & 2) {
    const valueChanges_r14 = ctx.valueChanges;
    const value_r15 = ctx.value;
    const status_r16 = ctx.status;
    const focus_r17 = ctx.focus;
    i0.ɵɵproperty("valueChanges", valueChanges_r14)("value", value_r15)("status", status_r16)("focus", focus_r17);
} }
function EditTemplatesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-boolean-edit", 5);
} if (rf & 2) {
    const valueChanges_r18 = ctx.valueChanges;
    const value_r19 = ctx.value;
    const status_r20 = ctx.status;
    const focus_r21 = ctx.focus;
    i0.ɵɵproperty("valueChanges", valueChanges_r18)("value", value_r19)("status", status_r20)("focus", focus_r21);
} }
function EditTemplatesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-date-edit", 6);
} if (rf & 2) {
    const valueChanges_r22 = ctx.valueChanges;
    const value_r23 = ctx.value;
    const status_r24 = ctx.status;
    const focus_r25 = ctx.focus;
    const parent_r26 = ctx.parent;
    i0.ɵɵproperty("valueChanges", valueChanges_r22)("value", value_r23)("status", status_r24)("focus", focus_r25)("parent", parent_r26);
} }
function EditTemplatesComponent_ng_template_8_Template(rf, ctx) { }
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
EditTemplatesComponent.ɵfac = function EditTemplatesComponent_Factory(t) { return new (t || EditTemplatesComponent)(); };
EditTemplatesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditTemplatesComponent, selectors: [["ng-component"]], viewQuery: function EditTemplatesComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, TemplateRef);
        i0.ɵɵviewQuery(_c1, 7, TemplateRef);
        i0.ɵɵviewQuery(_c2, 7, TemplateRef);
        i0.ɵɵviewQuery(_c3, 7, TemplateRef);
        i0.ɵɵviewQuery(_c4, 7, TemplateRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stringTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numberTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.booleanTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emptyTemplate = _t.first);
    } }, decls: 10, vars: 0, consts: [["string", ""], ["number", ""], ["boolean", ""], ["date", ""], ["empty", ""], [3, "valueChanges", "value", "status", "focus"], [3, "valueChanges", "value", "status", "focus", "parent"]], template: function EditTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EditTemplatesComponent_ng_template_0_Template, 1, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, EditTemplatesComponent_ng_template_2_Template, 1, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, EditTemplatesComponent_ng_template_4_Template, 1, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, EditTemplatesComponent_ng_template_6_Template, 1, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, EditTemplatesComponent_ng_template_8_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.StringEditTemplateComponent, i2.NumberEditTemplateComponent, i3.BooleanEditTemplateComponent, i4.DateEditTemplateComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditTemplatesComponent, [{
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
    }], null, { stringTemplate: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7Ozs7Ozs7OztJQU9yRixxQ0FDa0I7Ozs7OztJQURELCtDQUE2QixvQkFBQSxzQkFBQSxvQkFBQTs7O0lBSzlDLHFDQUNrQjs7Ozs7O0lBREQsK0NBQTZCLG9CQUFBLHNCQUFBLG9CQUFBOzs7SUFLOUMsc0NBQ21COzs7Ozs7SUFERCwrQ0FBNkIsb0JBQUEsc0JBQUEsb0JBQUE7OztJQUsvQyxtQ0FDZ0I7Ozs7Ozs7SUFERCwrQ0FBNkIsb0JBQUEsc0JBQUEsb0JBQUEsc0JBQUE7OztBQVUvQyxNQUFNLE9BQU8sc0JBQXNCO0lBaUJsQyxXQUFXLENBQUMsUUFBa0I7UUFFN0IsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFN0IsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCO2dCQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjtJQUNGLENBQUM7OzRGQXBDVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjsrQkFFTCxXQUFXOytCQUdYLFdBQVc7K0JBR1YsV0FBVzsrQkFHZCxXQUFXOytCQUdWLFdBQVc7Ozs7Ozs7OztRQXhDdEMsd0hBR2M7UUFFZCx3SEFHYztRQUVkLHdIQUdjO1FBRWQsd0hBR2M7UUFFZCx3SEFFYzs7dUZBSUgsc0JBQXNCO2NBN0JsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCVDthQUNEO2dCQUlBLGNBQWM7a0JBRGIsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJeEQsY0FBYztrQkFEYixTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUl4RCxlQUFlO2tCQURkLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSXpELFlBQVk7a0JBRFgsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJdEQsYUFBYTtrQkFEWixTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiPlxuXHRcdFx0PGd1aS1zdHJpbmctZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1zdHJpbmctZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCI+XG5cdFx0XHQ8Z3VpLW51bWJlci1lZGl0IFt2YWx1ZUNoYW5nZXNdPVwidmFsdWVDaGFuZ2VzXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3N0YXR1c109XCJzdGF0dXNcIiBbZm9jdXNdPVwiZm9jdXNcIj5cblx0XHRcdDwvZ3VpLW51bWJlci1lZGl0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Jvb2xlYW4gbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCI+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiBsZXQtcGFyZW50PVwicGFyZW50XCI+XG5cdFx0XHQ8Z3VpLWRhdGUtZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCIgW3BhcmVudF09XCJwYXJlbnRcIj5cblx0XHRcdDwvZ3VpLWRhdGUtZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNlbXB0eT5cblxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCdzdHJpbmcnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0c3RyaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Jvb2xlYW4nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9vbGVhblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2VtcHR5JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGVtcHR5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKGRhdGFUeXBlKSB7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHJpbmdUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvb2xlYW5UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmVtcHR5VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==