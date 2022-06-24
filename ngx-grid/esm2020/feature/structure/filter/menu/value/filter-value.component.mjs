import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
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
FilterValueComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterValueComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FilterValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FilterValueComponent, selector: "div[gui-filter-value]", outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n", directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-value]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FormBuilder }]; }, propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }], valueChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0SixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQVNsRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQVl2RCxZQUFZLFFBQTJCLEVBQ3BDLFVBQXNCLEVBQ0wsV0FBd0I7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQURULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTjVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVNqQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUNoRCxZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O0FBbkN1QixzQ0FBaUIsR0FBRyxhQUFjLENBQUE7a0hBRjlDLG9CQUFvQjtzR0FBcEIsb0JBQW9CLHVMQUlGLFVBQVUsb0RDaEJ6QywwR0FLQTs0RkRPYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0MsdUJBQXVCLG1CQUVoQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzJKQU81QixPQUFPO3NCQURmLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUl6RCxZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci12YWx1ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9GSUxURVJfVkFMVUUgPSAnZmlsdGVyVmFsdWUnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgZm9ybVJlZj86IEVsZW1lbnRSZWY7XG5cblx0QE91dHB1dCgpXG5cdHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdID0gJyc7XG5cblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LmNvbnRyb2xzW0ZpbHRlclZhbHVlQ29tcG9uZW50LkZPUk1fRklMVEVSX1ZBTFVFXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0Ly8gLnBpcGUoXG5cdFx0XHQvLyBcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdmFsdWUnO1xuXHR9XG5cbn1cbiIsIjxmb3JtICNmb3JtUmVmXG5cdCAgW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cblx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZpbHRlclZhbHVlXCIvPlxuPC9mb3JtPlxuIl19