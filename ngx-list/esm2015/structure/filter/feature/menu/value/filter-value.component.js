/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export class FilterValueComponent extends SmartComponent {
    /**
     * @param {?} detector
     * @param {?} elementRef
     * @param {?} formBuilder
     */
    constructor(detector, elementRef, formBuilder) {
        super(detector, elementRef);
        this.formBuilder = formBuilder;
        this.valueChanged = new EventEmitter();
        /** @type {?} */
        let controlsConfig = {};
        controlsConfig[FilterValueComponent.FORM_FILTER_VALUE] = '';
        this.filterForm = this.formBuilder.group(controlsConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterForm
            .controls[FilterValueComponent.FORM_FILTER_VALUE]
            .valueChanges
            // .pipe(
            // 	this.takeUntil()
            // )
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.valueChanged.emit(value);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-filter-value';
    }
}
FilterValueComponent.FORM_FILTER_VALUE = 'filterValue';
FilterValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-value]',
                template: "<form #formRef\n\t  [formGroup]=\"filterForm\">\n\n\t<input formControlName=\"filterValue\"/>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FilterValueComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FormBuilder }
];
FilterValueComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }],
    valueChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterValueComponent.FORM_FILTER_VALUE;
    /** @type {?} */
    FilterValueComponent.prototype.formRef;
    /** @type {?} */
    FilterValueComponent.prototype.valueChanged;
    /** @type {?} */
    FilterValueComponent.prototype.filterForm;
    /**
     * @type {?}
     * @private
     */
    FilterValueComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQVNyRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYzs7Ozs7O0lBWXZELFlBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxXQUF3QjtRQUMzQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRFQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFONUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQVM3QixjQUFjLEdBQUcsRUFBRTtRQUN2QixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxVQUFVO2FBQ2IsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQ2hELFlBQVk7WUFDYixTQUFTO1lBQ1Qsb0JBQW9CO1lBQ3BCLElBQUk7YUFDSCxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O0FBbkN1QixzQ0FBaUIsR0FBRyxhQUFhLENBQUM7O1lBUjFELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxvSEFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWxCQSxpQkFBaUI7WUFFakIsVUFBVTtZQU1GLFdBQVc7OztzQkFlbEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBR3RDLE1BQU07Ozs7Ozs7SUFMUCx1Q0FBMEQ7O0lBRTFELHVDQUNvQjs7SUFFcEIsNENBQ2tDOztJQUVsQywwQ0FBc0I7Ozs7O0lBSW5CLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdE91dHB1dCxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci12YWx1ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9GSUxURVJfVkFMVUUgPSAnZmlsdGVyVmFsdWUnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRAT3V0cHV0KClcblx0dmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdID0gJyc7XG5cblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LmNvbnRyb2xzW0ZpbHRlclZhbHVlQ29tcG9uZW50LkZPUk1fRklMVEVSX1ZBTFVFXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0Ly8gLnBpcGUoXG5cdFx0XHQvLyBcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdmFsdWUnO1xuXHR9XG5cbn1cbiJdfQ==