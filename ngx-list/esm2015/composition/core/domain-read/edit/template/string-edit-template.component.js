import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { InputEditTemplateComponent } from './input-edit-template.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class StringEditTemplateComponent extends InputEditTemplateComponent {
    constructor(changeDetectorRef, elementRef, fb) {
        super(changeDetectorRef, elementRef, fb);
    }
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    }
    getSelectorName() {
        return 'gui-string-edit';
    }
}
StringEditTemplateComponent.ɵfac = function StringEditTemplateComponent_Factory(t) { return new (t || StringEditTemplateComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StringEditTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StringEditTemplateComponent, selectors: [["gui-string-edit"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "formGroup"], ["type", "type", 1, "gui-input", 3, "formControlName"], ["input", ""]], template: function StringEditTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelement(1, "input", 1, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.filterForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.filterFieldName);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], encapsulation: 2, changeDetection: 0 });
__decorate([
    Override
], StringEditTemplateComponent.prototype, "focusField", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StringEditTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'gui-string-edit',
                template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="type" class="gui-input"/>
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FormBuilder }]; }, { focusField: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvdGVtcGxhdGUvc3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdySCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQWU3RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsMEJBQWtDO0lBRWxGLFlBQVksaUJBQW9DLEVBQzdDLFVBQXNCLEVBQ3RCLEVBQWU7UUFDakIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0QsVUFBVSxDQUFDLFlBQWlCO1FBRTNCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7O3NHQW5CVywyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQVJ0QywrQkFBK0I7UUFDOUIsOEJBQWlGO1FBQ2xGLGlCQUFPOztRQUZELDBDQUF3QjtRQUNmLGVBQW1DO1FBQW5DLHFEQUFtQzs7QUFnQm5EO0lBREMsUUFBUTs2REFPUjt1RkFmVywyQkFBMkI7Y0FadkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDO3VIQVVBLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cmluZy1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0PGlucHV0ICNpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIHR5cGU9XCJ0eXBlXCIgY2xhc3M9XCJndWktaW5wdXRcIi8+XG5cdFx0PC9mb3JtPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0ZmI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYsIGZiKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRmb2N1c0ZpZWxkKGlucHV0RWxlbWVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5mb2N1cykge1xuXHRcdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHRpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cmluZy1lZGl0Jztcblx0fVxufVxuIl19