import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../filter/core/api/filter.command-invoker";
import * as i2 from "@angular/forms";
import * as i3 from "../../../../core/api/structure.id";
import * as i4 from "@angular/common";
import * as i5 from "@generic-ui/fabric";
const _c0 = ["gui-structure-header-filters", "", "columns", ""];
function StructureHeaderFiltersComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "button", 3);
    i0.ɵɵlistener("click", function StructureHeaderFiltersComponent_ng_container_0_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.turnOnFilterMode(); });
    i0.ɵɵtext(2, "Add Filter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    i0.ɵɵstyleProp("width", cell_r3.width, "px");
} }
function StructureHeaderFiltersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StructureHeaderFiltersComponent_ng_container_0_div_1_Template, 3, 2, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.columns);
} }
const _c1 = function () { return ["has value", "is the same as", "starts with", "ends with"]; };
function StructureHeaderFiltersComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "gui-select", 4);
    i0.ɵɵelementStart(2, "form", 5);
    i0.ɵɵelement(3, "input", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function StructureHeaderFiltersComponent_ng_container_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clearFilters(); });
    i0.ɵɵtext(5, "Clear All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 7);
    i0.ɵɵlistener("click", function StructureHeaderFiltersComponent_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.turnOffFilterMode(); });
    i0.ɵɵtext(7, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", i0.ɵɵpureFunction0(4, _c1))("selected", "has value");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.filterForm);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", ctx_r1.filterFieldName);
} }
export class StructureHeaderFiltersComponent extends PureComponent {
    constructor(structureFilterCommandService, formBuilder, cd, elementRef, structureId) {
        super(elementRef);
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.structureId = structureId;
        this.closed = new EventEmitter();
        this.filterFieldName = 'phrase';
        this.filterMode = false;
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    ngOnInit() {
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((f) => {
            this.filter(f[this.filterFieldName]);
        });
    }
    filter(phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        // this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    }
    clearFilters() {
        this.filterForm.reset();
    }
    turnOnFilterMode() {
        this.filterMode = true;
        this.cd.detectChanges();
    }
    turnOffFilterMode() {
        this.filterMode = false;
        this.cd.detectChanges();
    }
    getSelectorName() {
        return '';
    }
}
StructureHeaderFiltersComponent.ɵfac = function StructureHeaderFiltersComponent_Factory(t) { return new (t || StructureHeaderFiltersComponent)(i0.ɵɵdirectiveInject(i1.FilterCommandInvoker), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.StructureId)); };
StructureHeaderFiltersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureHeaderFiltersComponent, selectors: [["div", "gui-structure-header-filters", "", "columns", ""]], inputs: { columns: "columns" }, outputs: { closed: "closed" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 3, "width", 4, "ngFor", "ngForOf"], [1, "gui-header-cell", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis"], [3, "click"], [3, "options", "selected"], [3, "formGroup"], ["type", "text", "gui-input", "", 3, "formControlName"], ["gui-button", "", 3, "click"]], template: function StructureHeaderFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureHeaderFiltersComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, StructureHeaderFiltersComponent_ng_container_1_Template, 8, 5, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.filterMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filterMode);
    } }, directives: [i4.NgIf, i4.NgForOf, i5.FabricSelectComponent, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.FormGroupDirective, i5.FabricInputComponent, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i5.FabricButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureHeaderFiltersComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-header-filters][columns]',
                template: `

		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell gui-flex gui-justify-between
\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border
\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis">

				<!--				<gui-structure-header-filter [column]="cell">-->
				<!--				</gui-structure-header-filter>-->

				<button (click)="turnOnFilterMode()">Add Filter</button>

			</div>

		</ng-container>

		<ng-container *ngIf="filterMode">

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'">

			</gui-select>

			<form [formGroup]="filterForm">
				<input type="text" [formControlName]="filterFieldName" gui-input/>
			</form>

			<button gui-button (click)="clearFilters()">Clear All</button>
			<button gui-button (click)="turnOffFilterMode()">Close</button>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.FilterCommandInvoker }, { type: i2.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i3.StructureId }]; }, { columns: [{
            type: Input
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTFKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7OztJQVNoRiw4QkFJMkQ7SUFLMUQsaUNBQXFDO0lBQTdCLHlOQUE0QjtJQUFDLDBCQUFVO0lBQUEsaUJBQVM7SUFFekQsaUJBQU07OztJQVZKLDRDQUE2Qjs7O0lBSGhDLDZCQUFrQztJQUVqQywrRkFXTTtJQUVQLDBCQUFlOzs7SUFiUSxlQUFVO0lBQVYsd0NBQVU7Ozs7O0lBZWpDLDZCQUFpQztJQUVoQyxnQ0FFYTtJQUViLCtCQUErQjtJQUM5QiwyQkFBa0U7SUFDbkUsaUJBQU87SUFFUCxpQ0FBNEM7SUFBekIsOE1BQXdCO0lBQUMseUJBQVM7SUFBQSxpQkFBUztJQUM5RCxpQ0FBaUQ7SUFBOUIsbU5BQTZCO0lBQUMscUJBQUs7SUFBQSxpQkFBUztJQUVoRSwwQkFBZTs7O0lBWEYsZUFBdUU7SUFBdkUsb0RBQXVFLHlCQUFBO0lBSTdFLGVBQXdCO0lBQXhCLDZDQUF3QjtJQUNWLGVBQW1DO0lBQW5DLHdEQUFtQzs7QUFZMUQsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGFBQWE7SUFjakUsWUFBNkIsNkJBQW1ELEVBQzVELFdBQXdCLEVBQ3hCLEVBQXFCLEVBQ3RDLFVBQXNCLEVBQ0wsV0FBd0I7UUFDM0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTFUsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFzQjtRQUM1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUVyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVo1QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV6QixvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUlwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBUTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVTthQUNiLFlBQVk7WUFDYixTQUFTO1lBQ1Qsb0JBQW9CO1lBQ3BCLElBQUk7YUFDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCw2R0FBNkc7SUFDOUcsQ0FBQztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OzhHQTlEVywrQkFBK0I7a0ZBQS9CLCtCQUErQjtRQXBDMUMsa0dBZWU7UUFFZixrR0FhZTs7UUE5QkEsc0NBQWlCO1FBaUJqQixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGQW1CcEIsK0JBQStCO2NBeEMzQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQztvTEFJQSxPQUFPO2tCQUROLEtBQUs7WUFJTixNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnNdW2NvbHVtbnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlsdGVyTW9kZVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjZWxsIG9mIGNvbHVtbnNcIlxuXHRcdFx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNlbGwud2lkdGhcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLWNlbGwgZ3VpLWZsZXggZ3VpLWp1c3RpZnktYmV0d2VlblxuXFx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cXHQgZ3VpLWxlYWRpbmctNCBndWktd2hpdGVzcGFjZS1ub3dyYXAgZ3VpLW92ZXJmbG93LWVsbGlwc2lzXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlciBbY29sdW1uXT1cImNlbGxcIj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXI+LS0+XG5cblx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwidHVybk9uRmlsdGVyTW9kZSgpXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiWydoYXMgdmFsdWUnLCAnaXMgdGhlIHNhbWUgYXMnLCAnc3RhcnRzIHdpdGgnLCAnZW5kcyB3aXRoJ11cIiBbc2VsZWN0ZWRdPVwiJ2hhcyB2YWx1ZSdcIj5cblxuXHRcdFx0PC9ndWktc2VsZWN0PlxuXG5cdFx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIiBndWktaW5wdXQvPlxuXHRcdFx0PC9mb3JtPlxuXG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24gKGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+Q2xlYXIgQWxsPC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24gKGNsaWNrKT1cInR1cm5PZmZGaWx0ZXJNb2RlKClcIj5DbG9zZTwvYnV0dG9uPlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRmaWx0ZXJNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQvLyAucGlwZShcblx0XHRcdC8vIGRlYm91bmNlVGltZSg1MDApXG5cdFx0XHQvLyApXG5cdFx0XHQuc3Vic2NyaWJlKChmKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyKGZbdGhpcy5maWx0ZXJGaWVsZE5hbWVdKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQgfHwgcGhyYXNlID09PSBudWxsKSB7XG5cdFx0XHRwaHJhc2UgPSAnJztcblx0XHR9XG5cblx0XHQvLyB0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLmFkZEZpbHRlcih0aGlzLmNvbHVtbnNbMF0uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHR0dXJuT25GaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IHRydWU7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHR0dXJuT2ZmRmlsdGVyTW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxufVxuIl19