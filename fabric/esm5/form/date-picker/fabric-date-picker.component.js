/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, skip, take } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
import { FabricReactive } from '../../common/fabric-reactive';
import { Theme } from '../../themes/theme';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
var FabricDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDatePickerComponent, _super);
    function FabricDatePickerComponent(fabricDatePickerInlineDialogService, datePickerService, datePickerCompositionService, formBuilder, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        _this.datePickerService = datePickerService;
        _this.datePickerCompositionService = datePickerCompositionService;
        _this.formBuilder = formBuilder;
        _this.changeDetectorRef = changeDetectorRef;
        _this.openDialog = false;
        _this.onlyDialog = false;
        _this.datePipeOptions = 'dd/MM/yyyy';
        _this.dateSelected = new EventEmitter();
        _this.dialogOpened = new EventEmitter();
        _this.datePickerForm = formBuilder.group({
            'date': ['']
        });
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
        if (changes.onlyDialog) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : ''; // todo !== null ??
        }
        if (changes.datePipeOptions) {
            this.datePickerCompositionService.next(this.datePipeOptions);
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerService
            .observeSelectedDate()
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.pickedDate = date;
            _this.emitSelectedDate(date);
        }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.pickedDate = date;
            _this.emitSelectedDate(date);
            _this.changeDetectorRef.detectChanges();
            _this.closeDatePicker();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), this.takeUntil())
            .subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
            _this.dialogOpened.emit(opened);
        }));
        this.observeDayChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.openDialog) {
            this.openDatePicker();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.fabricDatePickerInlineDialogService.close();
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.openDatePicker = /**
     * @return {?}
     */
    function () {
        if (!this.parentElement) {
            this.parentElement = this.datePickerRef;
        }
        this.fabricDatePickerInlineDialogService
            .open(this.parentElement, FabricDatePickerCalendarComponent, this.theme);
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.closeDatePicker = /**
     * @return {?}
     */
    function () {
        this.fabricDatePickerInlineDialogService.close();
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerComponent.prototype.emitSelectedDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.dateSelected.emit(date);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerComponent.prototype.observeDayChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerForm
            .controls['date']
            .valueChanges
            .pipe(distinctUntilChanged(), debounceTime(1500), map((/**
         * @param {?} day
         * @return {?}
         */
        function (day) { return _this.parse(day); })), this.takeUntil())
            .subscribe((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            _this.datePickerService.dateSelected(day);
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FabricDatePickerComponent.prototype.parse = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            /** @type {?} */
            var str = value.split('/');
            /** @type {?} */
            var dateValues = this.getDateValues(str);
            /** @type {?} */
            var dateHasAllValues = dateValues && dateValues.length === 3;
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
    };
    /**
     * @private
     * @param {?} dateValues
     * @return {?}
     */
    FabricDatePickerComponent.prototype.getDateValues = /**
     * @private
     * @param {?} dateValues
     * @return {?}
     */
    function (dateValues) {
        if (this.datePipeOptions.includes('/')) {
            /** @type {?} */
            var dateFormatParts = this.datePipeOptions.toLowerCase().split('/');
            /** @type {?} */
            var year_1;
            /** @type {?} */
            var month_1;
            /** @type {?} */
            var day_1;
            dateFormatParts.forEach((/**
             * @param {?} datePart
             * @param {?} i
             * @return {?}
             */
            function (datePart, i) {
                if (datePart.includes('d')) {
                    day_1 = +dateValues[i];
                }
                if (datePart.includes('m')) {
                    month_1 = +dateValues[i] - 1;
                }
                if (datePart.includes('y')) {
                    year_1 = +dateValues[i];
                }
            }));
            return [year_1, month_1, day_1];
        }
    };
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
    FabricDatePickerComponent.ctorParameters = function () { return [
        { type: FabricDatePickerInlineDialogService },
        { type: FabricDatePickerService },
        { type: FabricDatePickerCompositionService },
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
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
    return FabricDatePickerComponent;
}(FabricReactive));
export { FabricDatePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFOUY7SUFXK0MscURBQWM7SUFzQzVELG1DQUE2QixtQ0FBd0UsRUFDakYsaUJBQTBDLEVBQzFDLDRCQUFnRSxFQUNoRSxXQUF3QixFQUN4QixpQkFBb0M7UUFKeEQsWUFLQyxpQkFBTyxTQUtQO1FBVjRCLHlDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUMxQyxrQ0FBNEIsR0FB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QU8sQ0FBQyxNQUFJLEVBQUUsT0FBSyxFQUFFLEtBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBRUYsQ0FBQzs7Z0JBak5ELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpZkFBa0Q7b0JBTWxELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQWhCUSxtQ0FBbUM7Z0JBRG5DLHVCQUF1QjtnQkFLdkIsa0NBQWtDO2dCQVRsQyxXQUFXO2dCQVpuQixpQkFBaUI7OztnQ0FvQ2hCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dDQUd6QyxLQUFLO3dCQUdMLEtBQUs7NkJBR0wsS0FBSzt1QkFHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsS0FBSztrQ0FHTCxLQUFLOytCQUdMLE1BQU07K0JBR04sTUFBTTs7SUEwS1IsZ0NBQUM7Q0FBQSxBQWxORCxDQVcrQyxjQUFjLEdBdU01RDtTQXZNWSx5QkFBeUI7OztJQUVyQyxrREFDMEI7O0lBRTFCLGtEQUMwQjs7SUFFMUIsMENBQ2E7O0lBRWIsK0NBQ2lCOztJQUVqQix5Q0FDYTs7SUFFYiwrQ0FDNEI7O0lBRTVCLCtDQUM0Qjs7SUFFNUIsb0RBQ3VDOztJQUV2QyxpREFDa0M7O0lBRWxDLGlEQUNrQzs7SUFFbEMsbURBQTBCOztJQUUxQiwrQ0FBaUI7O0lBRWpCLGtEQUErQjs7Ozs7SUFFbkIsd0VBQXlGOzs7OztJQUNsRyxzREFBMkQ7Ozs7O0lBQzNELGlFQUFpRjs7Ozs7SUFDakYsZ0RBQXlDOzs7OztJQUN6QyxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNraXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy5kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRhdGUtcGlja2VyLmRhcmsubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtZGF0ZS1waWNrZXIubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdkYXRlUGlja2VyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGRhdGVQaWNrZXJSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0cGFyZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogVGhlbWU7XG5cblx0QElucHV0KClcblx0c2VsZWN0RGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0b3BlbkRpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdG9ubHlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlwZU9wdGlvbnM6IHN0cmluZyA9ICdkZC9NTS95eXl5JztcblxuXHRAT3V0cHV0KClcblx0ZGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRkaWFsb2dPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0ZGF0ZVBpY2tlckZvcm06IEZvcm1Hcm91cDtcblxuXHRwaWNrZWREYXRlOiBEYXRlO1xuXG5cdGlucHV0RGlzYWJsZWQ6ICdkaXNhYmxlZCcgfCAnJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHQnZGF0ZSc6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5vbmx5RGlhbG9nKSB7XG5cdFx0XHR0aGlzLmlucHV0RGlzYWJsZWQgPSB0aGlzLm9ubHlEaWFsb2cgPyAnZGlzYWJsZWQnIDogJyc7IC8vIHRvZG8gIT09IG51bGwgPz9cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5kYXRlUGlwZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZS5uZXh0KHRoaXMuZGF0ZVBpcGVPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGlja2VkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0dGhpcy5lbWl0U2VsZWN0ZWREYXRlKGRhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZW1pdFNlbGVjdGVkRGF0ZShkYXRlKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlRGF0ZVBpY2tlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9uT3BlbmVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dPcGVuZWQuZW1pdChvcGVuZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKHRoaXMub3BlbkRpYWxvZykge1xuXHRcdFx0dGhpcy5vcGVuRGF0ZVBpY2tlcigpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0b3BlbkRhdGVQaWNrZXIoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtcblx0XHRcdHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZGF0ZVBpY2tlclJlZjtcblx0XHR9XG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9wZW4oXG5cdFx0XHRcdHRoaXMucGFyZW50RWxlbWVudCxcblx0XHRcdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdFx0XHR0aGlzLnRoZW1lXG5cdFx0XHQpO1xuXHR9XG5cblx0Y2xvc2VEYXRlUGlja2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdFNlbGVjdGVkRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZURheUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydkYXRlJ11cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUoMTUwMCksXG5cdFx0XHRcdG1hcCgoZGF5OiBzdHJpbmcpID0+IHRoaXMucGFyc2UoZGF5KSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChkYXk6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXkpO1xuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2UodmFsdWU6IHN0cmluZyk6IERhdGUgeyAvLyBUT0RPXG5cblx0XHRpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpICYmICh2YWx1ZS5pbmNsdWRlcygnLycpKSkge1xuXHRcdFx0Y29uc3Qgc3RyID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuXHRcdFx0Y29uc3QgZGF0ZVZhbHVlcyA9IHRoaXMuZ2V0RGF0ZVZhbHVlcyhzdHIpLFxuXHRcdFx0XHRkYXRlSGFzQWxsVmFsdWVzID0gZGF0ZVZhbHVlcyAmJiBkYXRlVmFsdWVzLmxlbmd0aCA9PT0gMztcblxuXHRcdFx0aWYgKGRhdGVIYXNBbGxWYWx1ZXMpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZXNbMF0sIGRhdGVWYWx1ZXNbMV0sIGRhdGVWYWx1ZXNbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldERhdGVWYWx1ZXMoZGF0ZVZhbHVlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PG51bWJlcj4geyAvLyBUT0RPXG5cdFx0aWYgKHRoaXMuZGF0ZVBpcGVPcHRpb25zLmluY2x1ZGVzKCcvJykpIHtcblx0XHRcdGNvbnN0IGRhdGVGb3JtYXRQYXJ0cyA9IHRoaXMuZGF0ZVBpcGVPcHRpb25zLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy8nKTtcblxuXHRcdFx0bGV0IHllYXIsXG5cdFx0XHRcdG1vbnRoLFxuXHRcdFx0XHRkYXk7XG5cblx0XHRcdGRhdGVGb3JtYXRQYXJ0cy5mb3JFYWNoKChkYXRlUGFydDogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRpZiAoZGF0ZVBhcnQuaW5jbHVkZXMoJ2QnKSkge1xuXHRcdFx0XHRcdGRheSA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRhdGVQYXJ0LmluY2x1ZGVzKCdtJykpIHtcblx0XHRcdFx0XHRtb250aCA9ICtkYXRlVmFsdWVzW2ldIC0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlUGFydC5pbmNsdWRlcygneScpKSB7XG5cdFx0XHRcdFx0eWVhciA9ICtkYXRlVmFsdWVzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XTtcblx0XHR9XG5cblx0fVxufVxuXG4iXX0=