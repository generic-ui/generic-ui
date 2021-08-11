/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
var FilterValueComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterValueComponent, _super);
    function FilterValueComponent(detector, elementRef, formBuilder) {
        var _this = _super.call(this, detector, elementRef) || this;
        _this.formBuilder = formBuilder;
        _this.valueChanged = new EventEmitter();
        /** @type {?} */
        var controlsConfig = {};
        controlsConfig[FilterValueComponent.FORM_FILTER_VALUE] = '';
        _this.filterForm = _this.formBuilder.group(controlsConfig);
        return _this;
    }
    /**
     * @return {?}
     */
    FilterValueComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (value) {
            _this.valueChanged.emit(value);
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    FilterValueComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-filter-value';
    };
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
    FilterValueComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FormBuilder }
    ]; };
    FilterValueComponent.propDecorators = {
        formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }],
        valueChanged: [{ type: Output }]
    };
    return FilterValueComponent;
}(SmartComponent));
export { FilterValueComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHckY7SUFNMEMsZ0RBQWM7SUFZdkQsOEJBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxXQUF3QjtRQUY1QyxZQUdDLGtCQUFNLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FNM0I7UUFQbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFONUMsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQVM3QixjQUFjLEdBQUcsRUFBRTtRQUN2QixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFNUQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs7SUFDMUQsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDaEQsWUFBWTtZQUNiLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsSUFBSTthQUNILFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLDhDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDO0lBbkN1QixzQ0FBaUIsR0FBRyxhQUFhLENBQUM7O2dCQVIxRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsb0hBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWxCQSxpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBTUYsV0FBVzs7OzBCQWVsQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsrQkFHdEMsTUFBTTs7SUFnQ1IsMkJBQUM7Q0FBQSxBQTdDRCxDQU0wQyxjQUFjLEdBdUN2RDtTQXZDWSxvQkFBb0I7Ozs7OztJQUVoQyx1Q0FBMEQ7O0lBRTFELHVDQUNvQjs7SUFFcEIsNENBQ2tDOztJQUVsQywwQ0FBc0I7Ozs7O0lBSW5CLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdE91dHB1dCxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci12YWx1ZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9GSUxURVJfVkFMVUUgPSAnZmlsdGVyVmFsdWUnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRAT3V0cHV0KClcblx0dmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdID0gJyc7XG5cblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LmNvbnRyb2xzW0ZpbHRlclZhbHVlQ29tcG9uZW50LkZPUk1fRklMVEVSX1ZBTFVFXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0Ly8gLnBpcGUoXG5cdFx0XHQvLyBcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdmFsdWUnO1xuXHR9XG5cbn1cbiJdfQ==