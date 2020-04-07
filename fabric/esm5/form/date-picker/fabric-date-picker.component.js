/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, skip, take, takeUntil } from 'rxjs/operators';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
var FabricDatePickerComponent = /** @class */ (function () {
    function FabricDatePickerComponent(fabricDatePickerInlineDialogService, datePickerService, formBuilder, changeDetectorRef) {
        this.fabricDatePickerInlineDialogService = fabricDatePickerInlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.openDialog = false;
        this.onlyDialog = false;
        this.dateSelected = new EventEmitter();
        this.dialogOpened = new EventEmitter();
        this.unsub$ = new Subject();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
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
        if (changes.onlyDialog !== null) {
            this.inputDisabled = this.onlyDialog ? 'disabled' : '';
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
        this.datePickerSubscription =
            this.datePickerService
                .observeSelectedDate()
                .pipe(take(1), distinctUntilChanged(), takeUntil(this.unsub$))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.dateSelected.emit(date);
            }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(skip(1), takeUntil(this.unsub$))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.pickedDate = date;
            _this.dateSelected.emit(date);
            _this.changeDetectorRef.detectChanges();
            _this.fabricDatePickerInlineDialogService.close();
        }));
        this.fabricDatePickerInlineDialogService
            .onOpened()
            .pipe(skip(1), takeUntil(this.unsub$))
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
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
        this.unsub$.next();
        this.unsub$.complete();
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
        this.fabricDatePickerInlineDialogService.open(this.parentElement, FabricDatePickerCalendarComponent);
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
        this.datePickerDaySubscription =
            this.datePickerForm
                .controls['date']
                .valueChanges
                .pipe(distinctUntilChanged(), 
            // debounceTime(1000),
            map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return _this.parse(day); })), takeUntil(this.unsub$))
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
            var year = +str[2];
            /** @type {?} */
            var month = +str[1] - 1;
            /** @type {?} */
            var date = +str[0];
            return new Date(year, month, date);
        }
        else {
            return this.pickedDate;
        }
    };
    FabricDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker',
                    template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input [attr.disabled]=\"inputDisabled\"\n\t\t\t   [name]=name\n\t\t\t   [value]=\"pickedDate | date: 'dd/MM/yyyy'\"\n\t\t\t   class=\"gui-date-picker-input\"\n\t\t\t   formControlName='date'\n\t\t\t   gui-input>\n\t</form>\n\t<div (click)=\"openDatePicker()\" class=\"gui-date-picker-icon\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-date-picker{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gui-date-picker input{background:0 0;font-family:Arial;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker input:disabled{color:#333}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);position:absolute;right:0;height:16px;width:16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-input{background:0 0}.gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerComponent.ctorParameters = function () { return [
        { type: FabricDatePickerInlineDialogService },
        { type: FabricDatePickerService },
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
    FabricDatePickerComponent.propDecorators = {
        datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
        parentElement: [{ type: Input }],
        selectDate: [{ type: Input }],
        name: [{ type: Input }],
        openDialog: [{ type: Input }],
        onlyDialog: [{ type: Input }],
        dateSelected: [{ type: Output }],
        dialogOpened: [{ type: Output }]
    };
    return FabricDatePickerComponent;
}());
export { FabricDatePickerComponent };
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.parentElement;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.name;
    /** @type {?} */
    FabricDatePickerComponent.prototype.openDialog;
    /** @type {?} */
    FabricDatePickerComponent.prototype.onlyDialog;
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
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.unsub$;
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
    FabricDatePickerComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHakc7SUErQ0MsbUNBQTZCLG1DQUF3RSxFQUNqRixpQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsaUJBQW9DO1FBSDNCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDakYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBekJ4RCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xD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QUksQ0FBQyxVQUFVLENBQUM7U0FDdkI7SUFDRixDQUFDOztnQkFwS0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDBaQUFrRDtvQkFLbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBWlEsbUNBQW1DO2dCQURuQyx1QkFBdUI7Z0JBTHZCLFdBQVc7Z0JBWm5CLGlCQUFpQjs7O2dDQWlDaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBR3pDLEtBQUs7NkJBR0wsS0FBSzt1QkFHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsS0FBSzsrQkFHTCxNQUFNOytCQUdOLE1BQU07O0lBcUlSLGdDQUFDO0NBQUEsQUF0S0QsSUFzS0M7U0E1SlkseUJBQXlCOzs7SUFFckMsa0RBQzBCOztJQUUxQixrREFDMEI7O0lBRTFCLCtDQUNpQjs7SUFFakIseUNBQ2E7O0lBRWIsK0NBQzRCOztJQUU1QiwrQ0FDNEI7O0lBRTVCLGlEQUNrQzs7SUFFbEMsaURBQ2tDOztJQUVsQyxtREFBMEI7O0lBRTFCLCtDQUFpQjs7SUFFakIsa0RBQStCOztJQUUvQiwyREFBcUM7O0lBQ3JDLDhEQUF3Qzs7Ozs7SUFFeEMsMkNBQXdDOzs7OztJQUU1Qix3RUFBeUY7Ozs7O0lBQ2xHLHNEQUEyRDs7Ozs7SUFDM0QsZ0RBQXlDOzs7OztJQUN6QyxzREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNraXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0ZGF0ZVBpY2tlclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRwYXJlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdG9wZW5EaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRvbmx5RGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0ZGlhbG9nT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGRhdGVQaWNrZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGlja2VkRGF0ZTogRGF0ZTtcblxuXHRpbnB1dERpc2FibGVkOiAnZGlzYWJsZWQnIHwgJyc7XG5cblx0ZGF0ZVBpY2tlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRkYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0XHQnZGF0ZSc6IFsnJ11cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdERhdGUpIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKHRoaXMuc2VsZWN0RGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMub25seURpYWxvZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5pbnB1dERpc2FibGVkID0gdGhpcy5vbmx5RGlhbG9nID8gJ2Rpc2FibGVkJyA6ICcnO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHRcdC5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3ViJClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdChkYXRlOiBEYXRlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRlU2VsZWN0ZWQuZW1pdChkYXRlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0c2tpcCgxKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWIkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBpY2tlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5mYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRcdFx0Lm9uT3BlbmVkKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YiQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dPcGVuZWQuZW1pdChvcGVuZWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKHRoaXMub3BlbkRpYWxvZykge1xuXHRcdFx0dGhpcy5vcGVuRGF0ZVBpY2tlcigpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMuZGF0ZVBpY2tlckRheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG5cdFx0dGhpcy51bnN1YiQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWIkLmNvbXBsZXRlKCk7XG5cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRvcGVuRGF0ZVBpY2tlcigpIHtcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5kYXRlUGlja2VyUmVmO1xuXHRcdH1cblx0XHR0aGlzLmZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4odGhpcy5wYXJlbnRFbGVtZW50LCBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRGF5Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJEYXlTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyRm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ2RhdGUnXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdFx0Ly8gZGVib3VuY2VUaW1lKDEwMDApLFxuXHRcdFx0XHRcdG1hcCgoZGF5OiBzdHJpbmcpID0+IHRoaXMucGFyc2UoZGF5KSksXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWIkKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0KGRheTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQoZGF5KTtcblx0XHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2UodmFsdWU6IHN0cmluZyk6IERhdGUge1xuXHRcdGlmICgodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgJiYgKHZhbHVlLmluY2x1ZGVzKCcvJykpKSB7XG5cdFx0XHRjb25zdCBzdHIgPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG5cdFx0XHRjb25zdCB5ZWFyID0gK3N0clsyXSxcblx0XHRcdFx0bW9udGggPSArc3RyWzFdIC0gMSxcblx0XHRcdFx0ZGF0ZSA9ICtzdHJbMF07XG5cblx0XHRcdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnBpY2tlZERhdGU7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl19