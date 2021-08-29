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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RKLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHckY7SUFNMEMsZ0RBQWM7SUFZdkQsOEJBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxXQUF3QjtRQUY1QyxZQUdDLGtCQUFNLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FNM0I7UUFQbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFONUMsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQVMzQixjQUFjLEdBQUcsRUFBRTtRQUN6QixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFNUQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs7SUFDMUQsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDaEQsWUFBWTtZQUNiLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsSUFBSTthQUNILFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLDhDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDO0lBbkN1QixzQ0FBaUIsR0FBRyxhQUFhLENBQUM7O2dCQVIxRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsb0hBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVhpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFDakUsV0FBVzs7OzBCQWVsQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsrQkFHdEMsTUFBTTs7SUFnQ1IsMkJBQUM7Q0FBQSxBQTdDRCxDQU0wQyxjQUFjLEdBdUN2RDtTQXZDWSxvQkFBb0I7Ozs7OztJQUVoQyx1Q0FBMEQ7O0lBRTFELHVDQUNvQjs7SUFFcEIsNENBQ2tDOztJQUVsQywwQ0FBc0I7Ozs7O0lBSW5CLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXZhbHVlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJWYWx1ZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT1JNX0ZJTFRFUl9WQUxVRSA9ICdmaWx0ZXJWYWx1ZSc7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRmb3JtUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBPdXRwdXQoKVxuXHR2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cblx0XHRjb25zdCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW0ZpbHRlclZhbHVlQ29tcG9uZW50LkZPUk1fRklMVEVSX1ZBTFVFXSA9ICcnO1xuXG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC5jb250cm9sc1tGaWx0ZXJWYWx1ZUNvbXBvbmVudC5GT1JNX0ZJTFRFUl9WQUxVRV1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC8vIC5waXBlKFxuXHRcdFx0Ly8gXHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQvLyApXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLXZhbHVlJztcblx0fVxuXG59XG4iXX0=