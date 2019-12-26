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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC90ZW1wbGF0ZS9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUc3RSxNQUFNLE9BQWdCLDBCQUE4QixTQUFRLDBCQUE2Qjs7Ozs7SUFTeEYsWUFBOEIsV0FBd0I7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFEcUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGN0Msb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFJbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtRQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO2FBQzdCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDOztjQUVFLE1BQU0sR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUUvQyxNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFDLEVBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixNQUFNO2FBQ0osSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFDLEVBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxZQUF5QjtRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM5QixZQUFZO2FBQ1osSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQVU7UUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7O3VCQXJGQSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUFwQyw4Q0FDcUI7O0lBRXJCLGdEQUFzQjs7SUFFdEIscURBQW9DOzs7OztJQUVkLGlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxUPiBleHRlbmRzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PFQ+IHtcblxuXHRAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGlucHV0UmVmOiBFbGVtZW50UmVmO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAncGhyYXNlJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyRm9ybS5nZXQodGhpcy5maWx0ZXJGaWVsZE5hbWUpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmZvY3VzRmllbGQoaW5wdXRFbGVtZW50KTtcblxuXHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGlucHV0RWxlbWVudC52YWx1ZSk7XG5cblx0XHRmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAnYmx1cicpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0Y29uc3Qga2V5dXAkID0gZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2tleXVwJyk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FU0NfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmb2N1c0ZpZWxkKGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mb2N1cykge1xuXHRcdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC5jb250cm9sc1t0aGlzLmZpbHRlckZpZWxkTmFtZV1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0VmFsdWVDaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbHVlQ2hhbmdlcykge1xuXHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=