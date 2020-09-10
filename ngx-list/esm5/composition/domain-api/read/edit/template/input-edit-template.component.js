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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUc3RTtJQUE0RCxzREFBNkI7SUFTeEYsb0NBQThCLFdBQXdCOztRQUF0RCxZQUNDLGlCQUFPLFNBSVA7UUFMNkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFGN0MscUJBQWUsR0FBRyxRQUFRLENBQUM7UUFJbkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsR0FBQyxLQUFJLENBQUMsZUFBZSxJQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDOztJQUNKLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7SUFDRixDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxvREFBZTs7O0lBQWY7UUFBQSxpQkFxQ0M7O1lBcENNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDOztZQUVFLE1BQU0sR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUUvQyxNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSSxDQUFDLGNBQWMsRUFBakMsQ0FBaUMsRUFBQyxFQUNyRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsRUFBQyxFQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxZQUF5QjtRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDOzs7OztJQUVPLG1EQUFjOzs7O0lBQXRCO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQzlCLFlBQVk7YUFDWixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDeEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLG9EQUFlOzs7OztJQUF2QixVQUF3QixLQUFVO1FBQ2pDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7OzJCQXJGQSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFzRnJDLGlDQUFDO0NBQUEsQUF4RkQsQ0FBNEQsMEJBQTBCLEdBd0ZyRjtTQXhGcUIsMEJBQTBCOzs7SUFFL0MsOENBQ3FCOztJQUVyQixnREFBc0I7O0lBRXRCLHFEQUFvQzs7Ozs7SUFFZCxpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiB7XG5cblx0QFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckZvcm0uZ2V0KHRoaXMuZmlsdGVyRmllbGROYW1lKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5mb2N1c0ZpZWxkKGlucHV0RWxlbWVudCk7XG5cblx0XHR0aGlzLmVtaXRWYWx1ZUNoYW5nZShpbnB1dEVsZW1lbnQudmFsdWUpO1xuXG5cdFx0ZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2JsdXInKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGtleXVwJCA9IGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRVNDX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Zm9jdXNGaWVsZChpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZm9jdXMpIHtcblx0XHRcdGlucHV0RWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbdGhpcy5maWx0ZXJGaWVsZE5hbWVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXRWYWx1ZUNoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFZhbHVlQ2hhbmdlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZUNoYW5nZXMpIHtcblx0XHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQodmFsdWUpO1xuXHRcdH1cblx0fVxufVxuIl19