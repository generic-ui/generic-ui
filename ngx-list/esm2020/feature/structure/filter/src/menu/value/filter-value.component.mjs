import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/component/src/smart-component';
import { fromRxJsObservable } from '@generic-ui/hermes';
import { GuiEffects } from '../../../../../gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../gui-angular/effect/gui.effects";
import * as i2 from "@angular/forms";
export class FilterValueComponent extends SmartComponent {
    constructor(detector, elementRef, effects, formBuilder) {
        super(detector, elementRef);
        this.effects = effects;
        this.formBuilder = formBuilder;
        this.valueChanged = new EventEmitter();
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
}
FilterValueComponent.FORM_FILTER_VALUE = 'filterValue';
FilterValueComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterValueComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.GuiEffects }, { token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FilterValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterValueComponent, selector: "div[gui-filter-value]", outputs: { valueChanged: "valueChanged" }, providers: [
        GuiEffects
    ], viewQueries: [{ propertyName: "formRef", first: true, predicate: ["formRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n", dependencies: [{ kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterValueComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9tZW51L3ZhbHVlL2ZpbHRlci12YWx1ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS92YWx1ZS9maWx0ZXItdmFsdWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBWTNFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjO0lBWXZELFlBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxPQUFtQixFQUNuQixXQUF3QjtRQUMzQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRlQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVA1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVakMsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU87YUFDVixRQUFRLENBQ1IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQzVCLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNELENBQUM7SUFDSixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7SUFFTyxxQkFBcUI7UUFFNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDNUIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQ2hELFlBQVksQ0FBQztRQUVmLE9BQU8sa0JBQWtCLENBQ3hCLE1BQU0sQ0FDTixDQUFDO0lBQ0gsQ0FBQzs7QUE3Q3VCLHNDQUFpQixHQUFHLGFBQWEsQ0FBQztrSEFGOUMsb0JBQW9CO3NHQUFwQixvQkFBb0IsMkZBSnJCO1FBQ1YsVUFBVTtLQUNWLHlHQU02QixVQUFVLG9EQ3JCekMsMEdBS0E7NEZEWWEsb0JBQW9CO2tCQVRoQyxTQUFTOytCQUNDLHVCQUF1QixtQkFFaEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVixVQUFVO3FCQUNWO29MQU9RLE9BQU87c0JBRGYsU0FBUzt1QkFBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSXpELFlBQVk7c0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aUVmZmVjdHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ndWktYW5ndWxhci9lZmZlY3QvZ3VpLmVmZmVjdHMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXZhbHVlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpRWZmZWN0c1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclZhbHVlQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fRklMVEVSX1ZBTFVFID0gJ2ZpbHRlclZhbHVlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IGZvcm1SZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBPdXRwdXQoKVxuXHR2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlZmZlY3RzOiBHdWlFZmZlY3RzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdID0gJyc7XG5cblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZWZmZWN0c1xuXHRcdFx0LnJlZ2lzdGVyKFxuXHRcdFx0XHR0aGlzLnNlbGVjdEZpbHRlckZvcm1WYWx1ZSgpLFxuXHRcdFx0XHQodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci12YWx1ZSc7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEZpbHRlckZvcm1WYWx1ZSgpOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgdmFsdWUkID0gdGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzO1xuXG5cdFx0cmV0dXJuIGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdHZhbHVlJFxuXHRcdCk7XG5cdH1cblxufVxuIiwiPGZvcm0gI2Zvcm1SZWZcblx0ICBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblxuXHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlsdGVyVmFsdWVcIi8+XG48L2Zvcm0+XG4iXX0=