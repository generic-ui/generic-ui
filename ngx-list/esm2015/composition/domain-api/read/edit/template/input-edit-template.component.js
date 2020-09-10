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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBRzdFLE1BQU0sT0FBZ0IsMEJBQThCLFNBQVEsMEJBQTZCOzs7OztJQVN4RixZQUE4QixXQUF3QjtRQUNyRCxLQUFLLEVBQUUsQ0FBQztRQURxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY3QyxvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUluQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7YUFDN0IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7O2NBRUUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBRS9DLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUMsRUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUVKLE1BQU07YUFDSixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUMsRUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFlBQXlCO1FBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNyQixJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQzlCLFlBQVk7YUFDWixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsS0FBVTtRQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7dUJBckZBLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBQXBDLDhDQUNxQjs7SUFFckIsZ0RBQXNCOztJQUV0QixxREFBb0M7Ozs7O0lBRWQsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PFQ+IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8VD4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcblx0aW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRbdGhpcy5maWx0ZXJGaWVsZE5hbWVdOiBbJyddXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJGb3JtLmdldCh0aGlzLmZpbHRlckZpZWxkTmFtZSkuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMuZm9jdXNGaWVsZChpbnB1dEVsZW1lbnQpO1xuXG5cdFx0dGhpcy5lbWl0VmFsdWVDaGFuZ2UoaW5wdXRFbGVtZW50LnZhbHVlKTtcblxuXHRcdGZyb21FdmVudChpbnB1dEVsZW1lbnQsICdibHVyJylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAna2V5dXAnKTtcblxuXHRcdGtleXVwJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoZTogYW55KSA9PiBlLmtleUNvZGUgPT09IHRoaXMuRU5URVJfS0VZX0NPREUpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRrZXl1cCRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGU6IGFueSkgPT4gZS5rZXlDb2RlID09PSB0aGlzLkVTQ19LRVlfQ09ERSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGZvY3VzRmllbGQoaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZvY3VzKSB7XG5cdFx0XHRpbnB1dEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LmNvbnRyb2xzW3RoaXMuZmlsdGVyRmllbGROYW1lXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0VmFsdWVDaGFuZ2UodmFsdWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRWYWx1ZUNoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWVDaGFuZ2VzKSB7XG5cdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==