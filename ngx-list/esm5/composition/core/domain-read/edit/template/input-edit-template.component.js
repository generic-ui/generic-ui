/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, ViewChild } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromRxJsObservable, hermesFilter, hermesFromEvent } from '@generic-ui/hermes';
/**
 * @abstract
 * @template T
 */
var InputEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputEditTemplateComponent, _super);
    function InputEditTemplateComponent(changeDetectorRef, elementRef, formBuilder) {
        var _a;
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formBuilder = formBuilder;
        _this.filterFieldName = 'phrase';
        _this.filterForm = _this.formBuilder.group((_a = {},
            _a[_this.filterFieldName] = [''],
            _a));
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value !== undefined) {
            this.filterForm.get(this.filterFieldName).setValue(this.value);
        }
    };
    /**
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeChanges();
    };
    /**
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputElement = this.inputRef.nativeElement;
        this.focusField(inputElement);
        this.emitValueChange(inputElement.value);
        hermesFromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        /** @type {?} */
        var keyup$ = hermesFromEvent(inputElement, 'keyup');
        keyup$
            .pipe(hermesFilter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ENTER_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        keyup$
            .pipe(hermesFilter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ESC_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.cancel();
        }));
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    InputEditTemplateComponent.prototype.focusField = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        if (this.focus) {
            inputElement.focus();
        }
    };
    /**
     * @private
     * @return {?}
     */
    InputEditTemplateComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        fromRxJsObservable(this.filterForm
            .controls[this.filterFieldName]
            .valueChanges)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.emitValueChange(value);
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    InputEditTemplateComponent.prototype.emitValueChange = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.valueChanges) {
            this.valueChanges.emit(value);
        }
    };
    InputEditTemplateComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['input', { static: true },] }]
    };
    return InputEditTemplateComponent;
}(EditCommunicationComponent));
export { InputEditTemplateComponent };
if (false) {
    /** @type {?} */
    InputEditTemplateComponent.prototype.inputRef;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterForm;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    InputEditTemplateComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    InputEditTemplateComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBcUIsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUd2RjtJQUE0RCxzREFBNkI7SUFTeEYsb0NBQXVDLGlCQUFvQyxFQUNwRSxVQUFzQixFQUNMLFdBQXdCOztRQUZoRCxZQUdDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUlwQztRQVBzQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRW5ELGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnZDLHFCQUFlLEdBQUcsUUFBUSxDQUFDO1FBTW5DLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLEdBQUMsS0FBSSxDQUFDLGVBQWUsSUFBRyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQzs7SUFDSixDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxPQUFtRDtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsb0RBQWU7OztJQUFmO1FBQUEsaUJBcUNDOztZQXBDTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsZUFBZSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7YUFDbkMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQzs7WUFFRSxNQUFNLEdBQUcsZUFBZSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFckQsTUFBTTthQUNKLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxjQUFjLEVBQWpDLENBQWlDLEVBQUMsRUFDM0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQS9CLENBQStCLEVBQUMsRUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsWUFBeUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxtREFBYzs7OztJQUF0QjtRQUFBLGlCQVlDO1FBWEEsa0JBQWtCLENBQ2pCLElBQUksQ0FBQyxVQUFVO2FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDOUIsWUFBWSxDQUNkO2FBQ0MsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3hCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxvREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBVTtRQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzsyQkF6RkEsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBMEZyQyxpQ0FBQztDQUFBLEFBNUZELENBQTRELDBCQUEwQixHQTRGckY7U0E1RnFCLDBCQUEwQjs7O0lBRS9DLDhDQUNxQjs7SUFFckIsZ0RBQXNCOztJQUV0QixxREFBb0M7Ozs7O0lBRWQsdURBQXFEOzs7OztJQUVwRSxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIGhlcm1lc0ZpbHRlciwgaGVybWVzRnJvbUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiB7XG5cblx0QFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxhbnk+Pikge1xuXHRcdGlmIChjaGFuZ2VzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyRm9ybS5nZXQodGhpcy5maWx0ZXJGaWVsZE5hbWUpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmZvY3VzRmllbGQoaW5wdXRFbGVtZW50KTtcblxuXHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGlucHV0RWxlbWVudC52YWx1ZSk7XG5cblx0XHRoZXJtZXNGcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAnYmx1cicpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gaGVybWVzRnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmb2N1c0ZpZWxkKGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mb2N1cykge1xuXHRcdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpIHtcblx0XHRmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdFx0LmNvbnRyb2xzW3RoaXMuZmlsdGVyRmllbGROYW1lXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0VmFsdWVDaGFuZ2UodmFsdWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRWYWx1ZUNoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWVDaGFuZ2VzKSB7XG5cdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==