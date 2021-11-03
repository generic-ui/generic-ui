import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { InputEditTemplateComponent } from './input-edit-template.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NumberEditTemplateComponent extends InputEditTemplateComponent {
    constructor(changeDetectorRef, elementRef, fb) {
        super(changeDetectorRef, elementRef, fb);
    }
    getSelectorName() {
        return 'gui-number-edit';
    }
}
NumberEditTemplateComponent.ɵfac = function NumberEditTemplateComponent_Factory(t) { return new (t || NumberEditTemplateComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FormBuilder)); };
NumberEditTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NumberEditTemplateComponent, selectors: [["gui-number-edit"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "formGroup"], ["type", "number", 1, "gui-input", 3, "formControlName"], ["input", ""]], template: function NumberEditTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelement(1, "input", 1, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.filterForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.filterFieldName);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.NumberValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberEditTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'gui-number-edit',
                template: `

		<form [formGroup]="filterForm">
			<input #input [formControlName]="filterFieldName" type="number" class="gui-input"/>
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFlN0UsTUFBTSxPQUFPLDJCQUE0QixTQUFRLDBCQUFrQztJQUVsRixZQUFZLGlCQUFvQyxFQUM3QyxVQUFzQixFQUN0QixFQUFlO1FBQ2pCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOztzR0FWVywyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQVJ0QywrQkFBK0I7UUFDOUIsOEJBQW1GO1FBQ3BGLGlCQUFPOztRQUZELDBDQUF3QjtRQUNmLGVBQW1DO1FBQW5DLHFEQUFtQzs7dUZBT3ZDLDJCQUEyQjtjQVp2QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7RUFNVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbnVtYmVyLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0XHQ8aW5wdXQgI2lucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZ3VpLWlucHV0XCIvPlxuXHRcdDwvZm9ybT5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxudW1iZXI+IHtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGZiOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmLCBmYik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbnVtYmVyLWVkaXQnO1xuXHR9XG59XG4iXX0=