/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, ViewChild } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import { fromRxJsObservable, hermesFilter, hermesFromEvent } from '@generic-ui/hermes';
/**
 * @abstract
 * @template T
 */
export class InputEditTemplateComponent extends EditCommunicationComponent {
    /**
     * @protected
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} formBuilder
     */
    constructor(changeDetectorRef, elementRef, formBuilder) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
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
        hermesFromEvent(inputElement, 'blur')
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        /** @type {?} */
        const keyup$ = hermesFromEvent(inputElement, 'keyup');
        keyup$
            .pipe(hermesFilter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ENTER_KEY_CODE)), this.hermesTakeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
        keyup$
            .pipe(hermesFilter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.keyCode === this.ESC_KEY_CODE)), this.hermesTakeUntil())
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
        fromRxJsObservable(this.filterForm
            .controls[this.filterFieldName]
            .valueChanges)
            .pipe(this.hermesTakeUntil())
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
    InputEditTemplateComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    InputEditTemplateComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFxQixVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBR3ZGLE1BQU0sT0FBZ0IsMEJBQThCLFNBQVEsMEJBQTZCOzs7Ozs7O0lBU3hGLFlBQXVDLGlCQUFvQyxFQUNwRSxVQUFzQixFQUNMLFdBQXdCO1FBQy9DLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKdkMsb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFNbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFtRDtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtRQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDOztjQUVFLE1BQU0sR0FBRyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUVyRCxNQUFNO2FBQ0osSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFDLEVBQzNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixNQUFNO2FBQ0osSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFDLEVBQ3pELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxZQUF5QjtRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsa0JBQWtCLENBQ2pCLElBQUksQ0FBQyxVQUFVO2FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDOUIsWUFBWSxDQUNkO2FBQ0MsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQVU7UUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7O3VCQXpGQSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUFwQyw4Q0FDcUI7O0lBRXJCLGdEQUFzQjs7SUFFdEIscURBQW9DOzs7OztJQUVkLHVEQUFxRDs7Ozs7SUFFcEUsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBoZXJtZXNGaWx0ZXIsIGhlcm1lc0Zyb21FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PFQ+IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcblx0aW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0XHRcdCAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRbdGhpcy5maWx0ZXJGaWVsZE5hbWVdOiBbJyddXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8SW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8YW55Pj4pIHtcblx0XHRpZiAoY2hhbmdlcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckZvcm0uZ2V0KHRoaXMuZmlsdGVyRmllbGROYW1lKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5mb2N1c0ZpZWxkKGlucHV0RWxlbWVudCk7XG5cblx0XHR0aGlzLmVtaXRWYWx1ZUNoYW5nZShpbnB1dEVsZW1lbnQudmFsdWUpO1xuXG5cdFx0aGVybWVzRnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2JsdXInKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGtleXVwJCA9IGhlcm1lc0Zyb21FdmVudChpbnB1dEVsZW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0a2V5dXAkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChlOiBhbnkpID0+IGUua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRVNDX0tFWV9DT0RFKSxcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Zm9jdXNGaWVsZChpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZm9jdXMpIHtcblx0XHRcdGlucHV0RWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKSB7XG5cdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHRcdC5jb250cm9sc1t0aGlzLmZpbHRlckZpZWxkTmFtZV1cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0VmFsdWVDaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbHVlQ2hhbmdlcykge1xuXHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=