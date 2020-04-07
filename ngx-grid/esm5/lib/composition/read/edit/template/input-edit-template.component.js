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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvdGVtcGxhdGUvaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRzdFO0lBQTRELHNEQUE2QjtJQVN4RixvQ0FBOEIsV0FBd0I7O1FBQXRELFlBQ0MsaUJBQU8sU0FJUDtRQUw2QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY3QyxxQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUluQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztZQUN2QyxHQUFDLEtBQUksQ0FBQyxlQUFlLElBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7O0lBQ0osQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDtJQUNGLENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUFBLGlCQXFDQzs7WUFwQ00sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtRQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7O1lBRUUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBRS9DLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFJLENBQUMsY0FBYyxFQUFqQyxDQUFpQyxFQUFDLEVBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUVKLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFJLENBQUMsWUFBWSxFQUEvQixDQUErQixFQUFDLEVBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsK0NBQVU7Ozs7SUFBVixVQUFXLFlBQXlCO1FBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7O0lBRU8sbURBQWM7Ozs7SUFBdEI7UUFBQSxpQkFVQztRQVRBLElBQUksQ0FBQyxVQUFVO2FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDOUIsWUFBWTthQUNaLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBYTtZQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sb0RBQWU7Ozs7O0lBQXZCLFVBQXdCLEtBQVU7UUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7MkJBckZBLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXNGckMsaUNBQUM7Q0FBQSxBQXhGRCxDQUE0RCwwQkFBMEIsR0F3RnJGO1NBeEZxQiwwQkFBMEI7OztJQUUvQyw4Q0FDcUI7O0lBRXJCLGdEQUFzQjs7SUFFdEIscURBQW9DOzs7OztJQUVkLGlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxUPiBleHRlbmRzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IHtcblxuXHRAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGlucHV0UmVmOiBFbGVtZW50UmVmO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAncGhyYXNlJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyRm9ybS5nZXQodGhpcy5maWx0ZXJGaWVsZE5hbWUpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmZvY3VzRmllbGQoaW5wdXRFbGVtZW50KTtcblxuXHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGlucHV0RWxlbWVudC52YWx1ZSk7XG5cblx0XHRmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAnYmx1cicpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmb2N1c0ZpZWxkKGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mb2N1cykge1xuXHRcdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC5jb250cm9sc1t0aGlzLmZpbHRlckZpZWxkTmFtZV1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0VmFsdWVDaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbHVlQ2hhbmdlcykge1xuXHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=