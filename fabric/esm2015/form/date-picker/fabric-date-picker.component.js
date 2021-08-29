/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip, take } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
import { FabricReactive } from '../../common/fabric-reactive';
import { Theme } from '../../themes/theme';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
export class FabricDatePickerComponent extends FabricReactive {
    /**
     * @param {?} fabricDatePickerInlineDialogService
     * @param {?} datePickerService
     * @param {?} datePickerCompositionService
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     */
    constructor(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        super();
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.datePickerCompositionService = datePickerCompositionService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.datePickerOptions = {
            format: 'dd/MM/yyyy'
        };
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectedDate) {
            this.datePickerService.dateSelected(this.selectedDate);
        }
        if (changes.datePickerOptions) {
            this.datePickerCompositionService.next(this.datePickerOptions);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.pickedDate = date;
        }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.pickedDate = date;
            this.emitSelectedDate(date);
            this.changeDetectorRef.detectChanges();
            this.closeDatePicker();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), this.takeUntil())
            .subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            this.dialogOpened.emit(opened);
        }));
        this.observeDayChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.openDialog) {
            this.openDatePicker();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.fabricDatePickerInlineDialogService.close();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        if (!this.parentElement) {
            this.parentElement = this.datePickerRef;
        }
        this.fabricDatePickerInlineDialogService
            .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
    }
    /**
     * @return {?}
     */
    closeDatePicker() {
        this.fabricDatePickerInlineDialogService.close();
    }
    /**
     * @return {?}
     */
    selectDate() {
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    emitSelectedDate(date) {
        this.dateSelected.emit(date);
    }
    /**
     * @private
     * @return {?}
     */
    observeDayChanges() {
        this.datePickerForm
            .controls['date']
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(1500), this.takeUntil())
            .subscribe((/**
         * @param {?} day
         * @return {?}
         */
        (day) => {
            this.datePickerService.dateSelected(day);
        }));
    }
}
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker\n\t (click)=\"openDatePicker()\"\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePickerOptions.format\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon class=\"gui-date-picker-icon\"></gui-date-picker-icon>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;position:relative}.gui-date-picker input,.gui-date-picker-calendar input{background:0 0;border-radius:0;border-width:0 0 1px;font-family:Arial;font-size:14px;padding:4px}.gui-date-picker input:disabled,.gui-date-picker-calendar input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon,.gui-date-picker-calendar .gui-date-picker-icon{cursor:pointer;position:absolute;right:0}", ".gui-dark .gui-input{background:0 0;color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-arrow-icon:hover::after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-cell:hover::after{background:#757575}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year{color:#333}.gui-dark .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day::after,.gui-dark .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month::after,.gui-dark .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year::after{background:#dfb8e6}", ".gui-material .gui-date-picker-calendar .gui-date-picker-day.gui-date-picker-selected-day::after,.gui-material .gui-date-picker-calendar .gui-date-picker-month.gui-date-picker-selected-month::after,.gui-material .gui-date-picker-calendar .gui-date-picker-year.gui-date-picker-selected-year::after{background:#6200ee}"]
            }] }
];
/** @nocollapse */
FabricDatePickerComponent.ctorParameters = () => [
    { type: FabricDatePickerInlineDialogService },
    { type: FabricDatePickerService },
    { type: FabricDatePickerCompositionService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
FabricDatePickerComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
    parentElement: [{ type: Input }],
    theme: [{ type: Input }],
    selectedDate: [{ type: Input }],
    name: [{ type: Input }],
    openDialog: [{ type: Input }],
    datePickerOptions: [{ type: Input }],
    dateSelected: [{ type: Output }],
    dialogOpened: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.parentElement;
    /** @type {?} */
    FabricDatePickerComponent.prototype.theme;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerOptions;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dialogOpened;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDateString;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.fabricDatePickerInlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.datePickerCompositionService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBYzlGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7OztJQXFDNUQsWUFBNkIsbUNBQXdFLEVBQ2pGLGlCQUEwQyxFQUMxQyw0QkFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBTG9CLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUMxQyxp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K0NBQWlCOztJQUVqQixxREFBeUI7Ozs7O0lBRWIsd0VBQXlGOzs7OztJQUNsRyxzREFBMkQ7Ozs7O0lBQzNELGlFQUFpRjs7Ozs7SUFDakYsZ0RBQXlDOzs7OztJQUN6QyxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBza2lwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMuZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLWRhdGUtcGlja2VyLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlUGlja2VyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogVGhlbWU7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRvcGVuRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGF0ZVBpY2tlck9wdGlvbnM6IEZhYnJpY0RhdGVQaWNrZXJPcHRpb25zID0ge1xuXHRcdGZvcm1hdDogJ2RkL01NL3l5eXknXG5cdH07XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0ZGlhbG9nT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGRhdGVQaWNrZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGlja2VkRGF0ZTogRGF0ZTtcblxuXHRwaWNrZWREYXRlU3RyaW5nOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZTogRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFx0J2RhdGUnOiBbJyddXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmRhdGVQaWNrZXJPcHRpb25zKSB7XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UubmV4dCh0aGlzLmRhdGVQaWNrZXJPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VEYXRlUGlja2VyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub25PcGVuZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ09wZW5lZC5lbWl0KG9wZW5lZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5vcGVuRGlhbG9nKSB7XG5cdFx0XHR0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRvcGVuRGF0ZVBpY2tlcigpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmO1xuXHRcdH1cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub3Blbihcblx0XHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0XHRcdHRoaXMudGhlbWVcblx0XHRcdCk7XG5cdH1cblxuXHRjbG9zZURhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0c2VsZWN0RGF0ZSgpOiB2b2lkIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWREYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVTZWxlY3RlZC5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRGF5Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbJ2RhdGUnXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdGRlYm91bmNlVGltZSgxNTAwKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRheTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRheSk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cbn1cblxuIl19