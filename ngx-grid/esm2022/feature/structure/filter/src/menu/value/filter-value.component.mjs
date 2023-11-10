import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/component/src/smart-component';
import { fromRxJsObservable } from '@generic-ui/hermes';
import { GuiEffects } from '../../../../../gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../gui-angular/effect/gui.effects";
import * as i2 from "@angular/forms";
export class FilterValueComponent extends SmartComponent {
    effects;
    formBuilder;
    static FORM_FILTER_VALUE = 'filterValue';
    formRef;
    valueChanged = new EventEmitter();
    filterForm;
    constructor(detector, elementRef, effects, formBuilder) {
        super(detector, elementRef);
        this.effects = effects;
        this.formBuilder = formBuilder;
        const controlsConfig = {};
        controlsConfig[FilterValueComponent.FORM_FILTER_VALUE] = '';
        this.filterForm = this.formBuilder.group(controlsConfig);
    }
    ngOnInit() {
        this.effects
            .register(this.selectFilterFormValue(), (value) => {
            this.valueChanged.emit(value);
        });
    }
    getSelectorName() {
        return 'gui-filter-value';
    }
    selectFilterFormValue() {
        const value$ = this.filterForm
            .controls[FilterValueComponent.FORM_FILTER_VALUE]
            .valueChanges;
        return fromRxJsObservable(value$);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterValueComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.GuiEffects }, { token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FilterValueComponent, selector: "div[gui-filter-value]", outputs: { valueChanged: "valueChanged" }, providers: [
            GuiEffects
        ], viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n", dependencies: [{ kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-value]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiEffects
                    ], template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.GuiEffects }, { type: i2.FormBuilder }]; }, propDecorators: { formRef: [{
                type: ViewChild,
                args: ['formRef', { read: ElementRef, static: false }]
            }], valueChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9tZW51L3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS92YWx1ZS9maWx0ZXItdmFsdWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBYTNFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjO0lBY25DO0lBQ0E7SUFiWixNQUFNLENBQVUsaUJBQWlCLEdBQUcsYUFBYSxDQUFDO0lBR2pELE9BQU8sQ0FBYztJQUc5QixZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVsQyxVQUFVLENBQVk7SUFFdEIsWUFBWSxRQUEyQixFQUNwQyxVQUFzQixFQUNMLE9BQW1CLEVBQ25CLFdBQXdCO1FBQzNDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFGVCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRzNDLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUMxQixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPO2FBQ1YsUUFBUSxDQUNSLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUM1QixDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FDRCxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDO0lBRU8scUJBQXFCO1FBRTVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO2FBQzVCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUNoRCxZQUFZLENBQUM7UUFFZixPQUFPLGtCQUFrQixDQUN4QixNQUFhLENBQ2IsQ0FBQztJQUNILENBQUM7d0dBL0NXLG9CQUFvQjs0RkFBcEIsb0JBQW9CLDJGQUpyQjtZQUNWLFVBQVU7U0FDVix5R0FNNkIsVUFBVSxvREN0QnpDLDBHQUtBOzs0RkRhYSxvQkFBb0I7a0JBVGhDLFNBQVM7K0JBQ0MsdUJBQXVCLG1CQUVoQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFVBQVU7cUJBQ1Y7b0xBT1EsT0FBTztzQkFEZixTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJekQsWUFBWTtzQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgR3VpRWZmZWN0cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS1hbmd1bGFyL2VmZmVjdC9ndWkuZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItdmFsdWVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci12YWx1ZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlFZmZlY3RzXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9GSUxURVJfVkFMVUUgPSAnZmlsdGVyVmFsdWUnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgZm9ybVJlZj86IEVsZW1lbnRSZWY7XG5cblx0QE91dHB1dCgpXG5cdHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVmZmVjdHM6IEd1aUVmZmVjdHMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXG5cdFx0Y29uc3QgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tGaWx0ZXJWYWx1ZUNvbXBvbmVudC5GT1JNX0ZJTFRFUl9WQUxVRV0gPSAnJztcblxuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5lZmZlY3RzXG5cdFx0XHQucmVnaXN0ZXIoXG5cdFx0XHRcdHRoaXMuc2VsZWN0RmlsdGVyRm9ybVZhbHVlKCksXG5cdFx0XHRcdCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLXZhbHVlJztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0RmlsdGVyRm9ybVZhbHVlKCk6IEhlcm1lc09ic2VydmFibGU8c3RyaW5nPiB7XG5cblx0XHRjb25zdCB2YWx1ZSQgPSB0aGlzLmZpbHRlckZvcm1cblx0XHRcdC5jb250cm9sc1tGaWx0ZXJWYWx1ZUNvbXBvbmVudC5GT1JNX0ZJTFRFUl9WQUxVRV1cblx0XHRcdC52YWx1ZUNoYW5nZXM7XG5cblx0XHRyZXR1cm4gZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0dmFsdWUkIGFzIGFueVxuXHRcdCk7XG5cdH1cblxufVxuIiwiPGZvcm0gI2Zvcm1SZWZcblx0ICBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblxuXHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlsdGVyVmFsdWVcIi8+XG48L2Zvcm0+XG4iXX0=