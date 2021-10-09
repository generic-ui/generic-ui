/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, skip, take } from 'rxjs/operators';
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
        this.onlyDialog = false;
        this.datePipeOptions = 'dd/MM/yyyy';
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
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
        if (changes.onlyDialog) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : ''; // todo !== null ??
        }
        if (changes.datePipeOptions) {
            this.datePickerCompositionService.next(this.datePipeOptions);
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
            this.emitSelectedDate(date);
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
            .pipe(distinctUntilChanged(), debounceTime(1500), map((/**
         * @param {?} day
         * @return {?}
         */
        (day) => this.parse(day))), this.takeUntil())
            .subscribe((/**
         * @param {?} day
         * @return {?}
         */
        (day) => {
            this.datePickerService.dateSelected(day);
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            /** @type {?} */
            const str = value.split('/');
            /** @type {?} */
            const dateValues = this.getDateValues(str);
            /** @type {?} */
            const dateHasAllValues = dateValues && dateValues.length === 3;
            if (dateHasAllValues) {
                return new Date(dateValues[0], dateValues[1], dateValues[2]);
            }
            else {
                return this.pickedDate;
            }
        }
        else {
            return this.pickedDate;
        }
    }
    /**
     * @private
     * @param {?} dateValues
     * @return {?}
     */
    getDateValues(dateValues) {
        if (this.datePipeOptions.includes('/')) {
            /** @type {?} */
            const dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
            /** @type {?} */
            let year;
            /** @type {?} */
            let month;
            /** @type {?} */
            let day;
            dateFormatParts.forEach((/**
             * @param {?} datePart
             * @param {?} i
             * @return {?}
             */
            (datePart, i) => {
                if (datePart.includes('d')) {
                    day = +dateValues[i];
                }
                if (datePart.includes('m')) {
                    month = +dateValues[i] - 1;
                }
                if (datePart.includes('y')) {
                    year = +dateValues[i];
                }
            }));
            return [year, month, day];
        }
    }
}
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker\n\t class=\"gui-date-picker\">\n\n\t<form [formGroup]=\"datePickerForm\">\n\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: datePipeOptions\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input\n\t\t\t   readonly>\n\t</form>\n\n\t<gui-date-picker-icon (click)=\"openDatePicker()\"\n\t\t\t\t\t\t  class=\"gui-date-picker-icon\">\n\t</gui-date-picker-icon>\n\n</div>\n",
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
    selectDate: [{ type: Input }],
    name: [{ type: Input }],
    openDialog: [{ type: Input }],
    onlyDialog: [{ type: Input }],
    datePipeOptions: [{ type: Input }],
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
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.onlyDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePipeOptions;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dialogOpened;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.inputDisabled;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQWE5RixNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYzs7Ozs7Ozs7SUFzQzVELFlBQTZCLG1DQUF3RSxFQUNqRixpQkFBMEMsRUFDMUMsNEJBQWdFLEVBQ2hFLFdBQXdCLEVBQ3hCLGlCQUFvQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQUxvQix3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ2pGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FB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SUFFRixDQUFDOzs7WUFqTkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGlmQUFrRDtnQkFNbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7OztZQWhCUSxtQ0FBbUM7WUFEbkMsdUJBQXVCO1lBS3ZCLGtDQUFrQztZQVRsQyxXQUFXO1lBWm5CLGlCQUFpQjs7OzRCQW9DaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NEJBR3pDLEtBQUs7b0JBR0wsS0FBSzt5QkFHTCxLQUFLO21CQUdMLEtBQUs7eUJBR0wsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLEtBQUs7MkJBR0wsTUFBTTsyQkFHTixNQUFNOzs7O0lBM0JQLGtEQUMwQjs7SUFFMUIsa0RBQzBCOztJQUUxQiwwQ0FDYTs7SUFFYiwrQ0FDaUI7O0lBRWpCLHlDQUNhOztJQUViLCtDQUM0Qjs7SUFFNUIsK0NBQzRCOztJQUU1QixvREFDdUM7O0lBRXZDLGlEQUNrQzs7SUFFbEMsaURBQ2tDOztJQUVsQyxtREFBMEI7O0lBRTFCLCtDQUFpQjs7SUFFakIsa0RBQStCOzs7OztJQUVuQix3RUFBeUY7Ozs7O0lBQ2xHLHNEQUEyRDs7Ozs7SUFDM0QsaUVBQWlGOzs7OztJQUNqRixnREFBeUM7Ozs7O0lBQ3pDLHNEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2tpcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtZGF0ZS1waWNrZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIuZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5tYXRlcmlhbC5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0ZGF0ZVBpY2tlclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRwYXJlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lOiBUaGVtZTtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3REYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRvcGVuRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0b25seURpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRhdGVQaXBlT3B0aW9uczogc3RyaW5nID0gJ2RkL01NL3l5eXknO1xuXG5cdEBPdXRwdXQoKVxuXHRkYXRlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGRpYWxvZ09wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRkYXRlUGlja2VyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBpY2tlZERhdGU6IERhdGU7XG5cblx0aW5wdXREaXNhYmxlZDogJ2Rpc2FibGVkJyB8ICcnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRcdCdkYXRlJzogWycnXVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3REYXRlKSB7XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZCh0aGlzLnNlbGVjdERhdGUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLm9ubHlEaWFsb2cpIHtcblx0XHRcdHRoaXMuaW5wdXREaXNhYmxlZCA9IHRoaXMub25seURpYWxvZyA/ICdkaXNhYmxlZCcgOiAnJzsgLy8gdG9kbyAhPT0gbnVsbCA/P1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmRhdGVQaXBlT3B0aW9ucykge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLm5leHQodGhpcy5kYXRlUGlwZU9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChkYXRlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWNrZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHR0aGlzLmVtaXRTZWxlY3RlZERhdGUoZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VEYXRlUGlja2VyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub25PcGVuZWQoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ09wZW5lZC5lbWl0KG9wZW5lZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMub2JzZXJ2ZURheUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5vcGVuRGlhbG9nKSB7XG5cdFx0XHR0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRvcGVuRGF0ZVBpY2tlcigpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmO1xuXHRcdH1cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdFx0XHQub3Blbihcblx0XHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50LFxuXHRcdFx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0XHRcdHRoaXMudGhlbWVcblx0XHRcdCk7XG5cdH1cblxuXHRjbG9zZURhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0U2VsZWN0ZWREYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVTZWxlY3RlZC5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRGF5Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtXG5cdFx0XHQuY29udHJvbHNbJ2RhdGUnXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdGRlYm91bmNlVGltZSgxNTAwKSxcblx0XHRcdFx0bWFwKChkYXk6IHN0cmluZykgPT4gdGhpcy5wYXJzZShkYXkpKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRheTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRheSk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7IC8vIFRPRE9cblxuXHRcdGlmICgodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgJiYgKHZhbHVlLmluY2x1ZGVzKCcvJykpKSB7XG5cdFx0XHRjb25zdCBzdHIgPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG5cdFx0XHRjb25zdCBkYXRlVmFsdWVzID0gdGhpcy5nZXREYXRlVmFsdWVzKHN0ciksXG5cdFx0XHRcdGRhdGVIYXNBbGxWYWx1ZXMgPSBkYXRlVmFsdWVzICYmIGRhdGVWYWx1ZXMubGVuZ3RoID09PSAzO1xuXG5cdFx0XHRpZiAoZGF0ZUhhc0FsbFZhbHVlcykge1xuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlc1swXSwgZGF0ZVZhbHVlc1sxXSwgZGF0ZVZhbHVlc1syXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5waWNrZWREYXRlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5waWNrZWREYXRlO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0RGF0ZVZhbHVlcyhkYXRlVmFsdWVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8bnVtYmVyPiB7IC8vIFRPRE9cblx0XHRpZiAodGhpcy5kYXRlUGlwZU9wdGlvbnMuaW5jbHVkZXMoJy8nKSkge1xuXHRcdFx0Y29uc3QgZGF0ZUZvcm1hdFBhcnRzID0gdGhpcy5kYXRlUGlwZU9wdGlvbnMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLycpO1xuXG5cdFx0XHRsZXQgeWVhcixcblx0XHRcdFx0bW9udGgsXG5cdFx0XHRcdGRheTtcblxuXHRcdFx0ZGF0ZUZvcm1hdFBhcnRzLmZvckVhY2goKGRhdGVQYXJ0OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGlmIChkYXRlUGFydC5pbmNsdWRlcygnZCcpKSB7XG5cdFx0XHRcdFx0ZGF5ID0gK2RhdGVWYWx1ZXNbaV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZGF0ZVBhcnQuaW5jbHVkZXMoJ20nKSkge1xuXHRcdFx0XHRcdG1vbnRoID0gK2RhdGVWYWx1ZXNbaV0gLSAxO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRhdGVQYXJ0LmluY2x1ZGVzKCd5JykpIHtcblx0XHRcdFx0XHR5ZWFyID0gK2RhdGVWYWx1ZXNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldO1xuXHRcdH1cblxuXHR9XG59XG5cbiJdfQ==