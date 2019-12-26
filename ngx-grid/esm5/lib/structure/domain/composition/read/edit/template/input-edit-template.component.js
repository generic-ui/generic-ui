/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EditCommunicationComponent } from '../edit-communication.component';
/**
 * @abstract
 * @template T
 */
var InputEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputEditTemplateComponent, _super);
    function InputEditTemplateComponent(formBuilder) {
        var _a;
        var _this = _super.call(this) || this;
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
        fromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        /** @type {?} */
        var keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
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
            .pipe(filter((/**
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
        this.filterForm
            .controls[this.filterFieldName]
            .valueChanges
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
    InputEditTemplateComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC90ZW1wbGF0ZS9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFHN0U7SUFBNEQsc0RBQTZCO0lBU3hGLG9DQUE4QixXQUF3Qjs7UUFBdEQsWUFDQyxpQkFBTyxTQUlQO1FBTDZCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjdDLHFCQUFlLEdBQUcsUUFBUSxDQUFDO1FBSW5DLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLEdBQUMsS0FBSSxDQUFDLGVBQWUsSUFBRyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQzs7SUFDSixDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsb0RBQWU7OztJQUFmO1FBQUEsaUJBcUNDOztZQXBDTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7YUFDN0IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQzs7WUFFRSxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFL0MsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxjQUFjLEVBQWpDLENBQWlDLEVBQUMsRUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQS9CLENBQStCLEVBQUMsRUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsWUFBeUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxtREFBYzs7OztJQUF0QjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM5QixZQUFZO2FBQ1osSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3hCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxvREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBVTtRQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzsyQkFyRkEsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBc0ZyQyxpQ0FBQztDQUFBLEFBeEZELENBQTRELDBCQUEwQixHQXdGckY7U0F4RnFCLDBCQUEwQjs7O0lBRS9DLDhDQUNxQjs7SUFFckIsZ0RBQXNCOztJQUV0QixxREFBb0M7Ozs7O0lBRWQsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PFQ+IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcblx0aW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRbdGhpcy5maWx0ZXJGaWVsZE5hbWVdOiBbJyddXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJGb3JtLmdldCh0aGlzLmZpbHRlckZpZWxkTmFtZSkuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMuZm9jdXNGaWVsZChpbnB1dEVsZW1lbnQpO1xuXG5cdFx0dGhpcy5lbWl0VmFsdWVDaGFuZ2UoaW5wdXRFbGVtZW50LnZhbHVlKTtcblxuXHRcdGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdibHVyJylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAna2V5dXAnKTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRU5URVJfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVTQ19LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGZvY3VzRmllbGQoaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZvY3VzKSB7XG5cdFx0XHRpbnB1dEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LmNvbnRyb2xzW3RoaXMuZmlsdGVyRmllbGROYW1lXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0VmFsdWVDaGFuZ2UodmFsdWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRWYWx1ZUNoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWVDaGFuZ2VzKSB7XG5cdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==