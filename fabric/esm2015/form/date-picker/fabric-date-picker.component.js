/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FabricInlineDialogService } from '../modals/inline-dialog/fabric-inline-dialog.service';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
export class FabricDatePickerComponent {
    /**
     * @param {?} inlineDialogService
     * @param {?} datePickerService
     * @param {?} formBuilder
     */
    constructor(inlineDialogService, datePickerService, formBuilder) {
        this.inlineDialogService = inlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.dateSelected = new EventEmitter();
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerSubscription =
            this.datePickerService.observeSelectedDate()
                .pipe(distinctUntilChanged())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.pickedDate = date;
                this.dateSelected.emit(date);
                this.inlineDialogService.close();
            }));
        this.observeDayChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        this.inlineDialogService.open(this.datePickerRef, FabricDatePickerCalendarComponent);
    }
    /**
     * @private
     * @return {?}
     */
    observeDayChanges() {
        this.datePickerDaySubscription =
            this.datePickerForm.controls['date'].valueChanges
                .pipe(distinctUntilChanged(), debounceTime(1000), map((/**
             * @param {?} day
             * @return {?}
             */
            (day) => this.parse(day))))
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
            const year = +str[2];
            /** @type {?} */
            const month = +str[1] - 1;
            /** @type {?} */
            const date = +str[0];
            return new Date(year, month, date);
        }
        else
            return this.pickedDate;
    }
}
FabricDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker',
                template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input gui-input formControlName='date'\n\t\t\t   [value]=\"pickedDate| date: 'd/M/yyyy'\">\n\t</form>\n\t<div class=\"gui-date-picker-icon\" (click)=\"openDatePicker()\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gui-date-picker input{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);height:16px;width:16px;margin-left:-16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
            }] }
];
/** @nocollapse */
FabricDatePickerComponent.ctorParameters = () => [
    { type: FabricInlineDialogService },
    { type: FabricDatePickerService },
    { type: FormBuilder }
];
FabricDatePickerComponent.propDecorators = {
    datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
    selectDate: [{ type: Input }],
    dateSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.inlineDialogService;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkosT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFZdkUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBa0JyQyxZQUFvQixtQkFBOEMsRUFDdkQsaUJBQTBDLEVBQzFDLFdBQXdCO1FBRmYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjtRQUN2RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWG5DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWFqQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ1osQ0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUks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ZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL21vZGFscy9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1kYXRlLXBpY2tlci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZVBpY2tlcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdERhdGU6IERhdGU7XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRkYXRlUGlja2VyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBpY2tlZERhdGU6IERhdGU7XG5cblx0ZGF0ZVBpY2tlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRkYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRcdCdkYXRlJzogWycnXVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdFx0LnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5waWNrZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHR0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJEYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cblx0b3BlbkRhdGVQaWNrZXIoKSB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4odGhpcy5kYXRlUGlja2VyUmVmLCBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRGF5Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJEYXlTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyRm9ybS5jb250cm9sc1snZGF0ZSddLnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDEwMDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXAoKGRheTogc3RyaW5nKSA9PiB0aGlzLnBhcnNlKGRheSkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGRheTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRheSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG5cdFx0aWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJiAodmFsdWUuaW5jbHVkZXMoJy8nKSkpIHtcblx0XHRcdGNvbnN0IHN0ciA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IHllYXIgPSArc3RyWzJdLFxuXHRcdFx0XHRtb250aCA9ICtzdHJbMV0gLSAxLFxuXHRcdFx0XHRkYXRlID0gK3N0clswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0fVxuXG59XG5cbiJdfQ==