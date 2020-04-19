/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EditCommunicationComponent } from '../edit-communication.component';
/**
 * @abstract
 * @template T
 */
export class InputEditTemplateComponent extends EditCommunicationComponent {
    /**
     * @protected
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        super();
        this.formBuilder = formBuilder;
        this.filterFieldName = 'phrase';
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value !== undefined) {
            this.filterForm.get(this.filterFieldName).setValue(this.value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.inputRef.nativeElement;
        this.focusField(inputElement);
        this.emitValueChange(inputElement.value);
        fromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        /** @type {?} */
        const keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ENTER_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ESC_KEY_CODE)), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.cancel();
        }));
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
        }
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.filterForm
            .controls[this.filterFieldName]
            .valueChanges
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.emitValueChange(value);
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    emitValueChange(value) {
        if (this.valueChanges) {
            this.valueChanges.emit(value);
        }
    }
}
InputEditTemplateComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['input', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2VkaXQvdGVtcGxhdGUvaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFHN0UsTUFBTSxPQUFnQiwwQkFBOEIsU0FBUSwwQkFBNkI7Ozs7O0lBU3hGLFlBQThCLFdBQXdCO1FBQ3JELEtBQUssRUFBRSxDQUFDO1FBRHFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjdDLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBSW5DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNSLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzthQUM3QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQzs7Y0FFRSxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFFL0MsTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBQyxFQUNyRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosTUFBTTthQUNKLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBQyxFQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsWUFBeUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3JCLElBQUksQ0FBQyxVQUFVO2FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDOUIsWUFBWTthQUNaLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFVO1FBQ2pDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozt1QkFyRkEsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFBcEMsOENBQ3FCOztJQUVyQixnREFBc0I7O0lBRXRCLHFEQUFvQzs7Ozs7SUFFZCxpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxUPiB7XG5cblx0QFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckZvcm0uZ2V0KHRoaXMuZmlsdGVyRmllbGROYW1lKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5mb2N1c0ZpZWxkKGlucHV0RWxlbWVudCk7XG5cblx0XHR0aGlzLmVtaXRWYWx1ZUNoYW5nZShpbnB1dEVsZW1lbnQudmFsdWUpO1xuXG5cdFx0ZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2JsdXInKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGtleXVwJCA9IGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRVNDX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Zm9jdXNGaWVsZChpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZm9jdXMpIHtcblx0XHRcdGlucHV0RWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbdGhpcy5maWx0ZXJGaWVsZE5hbWVdXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXRWYWx1ZUNoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFZhbHVlQ2hhbmdlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZUNoYW5nZXMpIHtcblx0XHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQodmFsdWUpO1xuXHRcdH1cblx0fVxufVxuIl19