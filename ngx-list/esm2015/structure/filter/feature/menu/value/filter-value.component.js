/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class FilterValueComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
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
}
FilterValueComponent.FORM_FILTER_VALUE = 'filterValue';
FilterValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-filter-value',
                template: `

		<form #formRef
			  [formGroup]="filterForm">

			<input formControlName="filterValue"/>
		</form>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-filter-value]': `"true"`
                }
            }] }
];
/** @nocollapse */
FilterValueComponent.ctorParameters = () => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvdmFsdWUvZmlsdGVyLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBbUJ4RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBWWhDLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnJELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7WUFNN0IsY0FBYyxHQUFHLEVBQUU7UUFDdkIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUNoRCxZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztBQTVCdUIsc0NBQWlCLEdBQUcsYUFBYSxDQUFDOztZQWxCMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7OztFQU9UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLDBCQUEwQixFQUFFLFFBQVE7aUJBQ3BDO2FBQ0Q7Ozs7WUFsQlEsV0FBVzs7O3NCQXVCbEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBR3RDLE1BQU07Ozs7Ozs7SUFMUCx1Q0FBMEQ7O0lBRTFELHVDQUNvQjs7SUFFcEIsNENBQ2tDOztJQUVsQywwQ0FBc0I7Ozs7O0lBRVYsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpbHRlci12YWx1ZScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0ICBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblxuXHRcdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZpbHRlclZhbHVlXCIvPlxuXHRcdDwvZm9ybT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1maWx0ZXItdmFsdWVdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclZhbHVlQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT1JNX0ZJTFRFUl9WQUxVRSA9ICdmaWx0ZXJWYWx1ZSc7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRmb3JtUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBPdXRwdXQoKVxuXHR2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cblx0XHRsZXQgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tGaWx0ZXJWYWx1ZUNvbXBvbmVudC5GT1JNX0ZJTFRFUl9WQUxVRV0gPSAnJztcblxuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbRmlsdGVyVmFsdWVDb21wb25lbnQuRk9STV9GSUxURVJfVkFMVUVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQvLyAucGlwZShcblx0XHRcdC8vIFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0Ly8gKVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==