import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "@angular/common";
const _c0 = ["gui-field-selector", "", "fields", ""];
function FieldSelectorComponent_gui_dropdown_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-dropdown-item", 1);
    i0.ɵɵlistener("click", function FieldSelectorComponent_gui_dropdown_item_2_Template_gui_dropdown_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const field_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelectChange(field_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r1.getName(), " ");
} }
export class FieldSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.fieldSelected = new EventEmitter();
    }
    onSelectChange(field) {
        this.fieldSelected.emit(field);
    }
    getSelectorName() {
        return 'gui-field-selector';
    }
}
FieldSelectorComponent.ɵfac = function FieldSelectorComponent_Factory(t) { return new (t || FieldSelectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FieldSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldSelectorComponent, selectors: [["div", "gui-field-selector", "", "fields", ""]], inputs: { fields: "fields" }, outputs: { fieldSelected: "fieldSelected" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FieldSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, " Field: ");
        i0.ɵɵelementStart(1, "gui-dropdown");
        i0.ɵɵtemplate(2, FieldSelectorComponent_gui_dropdown_item_2_Template, 2, 1, "gui-dropdown-item", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.fields);
    } }, directives: [i1.FabricDropdownComponent, i2.NgForOf, i1.DropdownItemComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-field-selector][fields]',
                template: `

		Field:

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let field of fields"
							   (click)="onSelectChange(field)">
				{{field.getName()}}
			</gui-dropdown-item>
		</gui-dropdown>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { fields: [{
            type: Input
        }], fieldSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7SUFTaEYsNENBQ3VDO0lBQWhDLDJSQUErQjtJQUNyQyxZQUNEO0lBQUEsaUJBQW9COzs7SUFEbkIsZUFDRDtJQURDLG1EQUNEOztBQU9ILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBUXhELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSG5CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFJbkQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFxQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7OzRGQWxCVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQWJqQyx3QkFFQTtRQUFBLG9DQUFjO1FBQ2IsbUdBR29CO1FBQ3JCLGlCQUFlOztRQUp1QixlQUFTO1FBQVQsb0NBQVM7O3VGQVVwQyxzQkFBc0I7Y0FqQmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzZEQUlBLE1BQU07a0JBREwsS0FBSztZQUlOLGFBQWE7a0JBRFosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmllbGQtc2VsZWN0b3JdW2ZpZWxkc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0RmllbGQ6XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIlxuXHRcdFx0XHRcdFx0XHQgICAoY2xpY2spPVwib25TZWxlY3RDaGFuZ2UoZmllbGQpXCI+XG5cdFx0XHRcdHt7ZmllbGQuZ2V0TmFtZSgpfX1cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogUmVhZG9ubHlBcnJheTxGaWVsZFJlYWRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpZWxkU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkUmVhZE1vZGVsPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWVsZC1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==