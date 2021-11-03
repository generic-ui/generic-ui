import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["formRef"];
const _c1 = ["gui-filter-value", ""];
export class FilterValueComponent extends SmartComponent {
    constructor(detector, elementRef, formBuilder) {
        super(detector, elementRef);
        this.formBuilder = formBuilder;
        this.valueChanged = new EventEmitter();
        const controlsConfig = {};
        controlsConfig[FilterValueComponent.FORM_FILTER_VALUE] = '';
        this.filterForm = this.formBuilder.group(controlsConfig);
    }
    ngOnInit() {
        this.filterForm
            .controls[FilterValueComponent.FORM_FILTER_VALUE]
            .valueChanges
            // .pipe(
            // 	this.takeUntil()
            // )
            .subscribe((value) => {
            this.valueChanged.emit(value);
        });
    }
    getSelectorName() {
        return 'gui-filter-value';
    }
}
FilterValueComponent.FORM_FILTER_VALUE = 'filterValue';
FilterValueComponent.ɵfac = function FilterValueComponent_Factory(t) { return new (t || FilterValueComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FormBuilder)); };
FilterValueComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterValueComponent, selectors: [["div", "gui-filter-value", ""]], viewQuery: function FilterValueComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formRef = _t.first);
    } }, outputs: { valueChanged: "valueChanged" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c1, decls: 3, vars: 1, consts: [[3, "formGroup"], ["formRef", ""], ["formControlName", "filterValue"]], template: function FilterValueComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.filterForm);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterValueComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-filter-value]',
                templateUrl: './filter-value.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FormBuilder }]; }, { formRef: [{
            type: ViewChild,
            args: ['formRef', { static: false }]
        }], valueChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7Ozs7QUFTckYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7SUFZdkQsWUFBWSxRQUEyQixFQUNwQyxVQUFzQixFQUNMLFdBQXdCO1FBQzNDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFEVCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU41QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTakMsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDaEQsWUFBWTtZQUNiLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsSUFBSTthQUNILFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOztBQW5DdUIsc0NBQWlCLEdBQUcsYUFBYSxDQUFDO3dGQUY5QyxvQkFBb0I7dUVBQXBCLG9CQUFvQjs7Ozs7O1FDWmpDLGtDQUM0QjtRQUUzQiwyQkFBc0M7UUFDdkMsaUJBQU87O1FBSEosMENBQXdCOzt1RkRXZCxvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzt1SEFNQSxPQUFPO2tCQUROLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUl2QyxZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci12YWx1ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9GSUxURVJfVkFMVUUgPSAnZmlsdGVyVmFsdWUnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRAT3V0cHV0KClcblx0dmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXG5cdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tGaWx0ZXJWYWx1ZUNvbXBvbmVudC5GT1JNX0ZJTFRFUl9WQUxVRV0gPSAnJztcblxuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQvLyAucGlwZShcblx0XHRcdC8vIFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0Ly8gKVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci12YWx1ZSc7XG5cdH1cblxufVxuIiwiPGZvcm0gI2Zvcm1SZWZcblx0ICBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblxuXHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlsdGVyVmFsdWVcIi8+XG48L2Zvcm0+XG4iXX0=