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
var FabricDatePickerComponent = /** @class */ (function () {
    function FabricDatePickerComponent(inlineDialogService, datePickerService, formBuilder) {
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
    FabricDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
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
            this.datePickerService.observeSelectedDate()
                .pipe(distinctUntilChanged())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.dateSelected.emit(date);
                _this.inlineDialogService.close();
            }));
        this.observeDayChanges();
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
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.openDatePicker = /**
     * @return {?}
     */
    function () {
        this.inlineDialogService.open(this.datePickerRef, FabricDatePickerCalendarComponent);
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
            this.datePickerForm.controls['date'].valueChanges
                .pipe(distinctUntilChanged(), debounceTime(1000), map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return _this.parse(day); })))
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
        else
            return this.pickedDate;
    };
    FabricDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker',
                    template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input formControlName='date'\n\t\t\t   [value]=\"pickedDate| date: 'd/M/yyyy'\">\n\t</form>\n\t<div class=\"gui-date-picker-icon\" (click)=\"openDatePicker()\"></div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-date-picker{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gui-date-picker input{border-style:solid;border-width:0 0 1px;border-color:#999;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA+SURBVDhPY0AD/6E0PoCihhFKE6MRG2BkgjLIBhQbAAPkeAGsZ+C9gG4AyFkwTBQYjYXBYADFmQlKkwsYGAB1FwsOS8cZnAAAAABJRU5ErkJggg==);height:16px;width:16px;margin-left:-16px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerComponent.ctorParameters = function () { return [
        { type: FabricInlineDialogService },
        { type: FabricDatePickerService },
        { type: FormBuilder }
    ]; };
    FabricDatePickerComponent.propDecorators = {
        datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
        selectDate: [{ type: Input }],
        dateSelected: [{ type: Output }]
    };
    return FabricDatePickerComponent;
}());
export { FabricDatePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkosT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHdkU7SUEwQkMsbUNBQW9CLG1CQUE4QyxFQUN2RCxpQkFBMEMsRUFDMUMsV0FBd0I7UUFGZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCO1FBQ3ZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFYbkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBYWpDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixD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Ozs7OztJQUMvRCxzREFBa0Q7Ozs7O0lBQ2xELGdEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWxzL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnZGF0ZVBpY2tlcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRkYXRlUGlja2VyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdERhdGU6IERhdGU7XG5cblx0QE91dHB1dCgpXG5cdGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRkYXRlUGlja2VyRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBpY2tlZERhdGU6IERhdGU7XG5cblx0ZGF0ZVBpY2tlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRkYXRlUGlja2VyRGF5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRcdCdkYXRlJzogWycnXVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3REYXRlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5vYnNlcnZlU2VsZWN0ZWREYXRlKClcblx0XHRcdFx0LnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5waWNrZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuZGF0ZVNlbGVjdGVkLmVtaXQoZGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHR0aGlzLm9ic2VydmVEYXlDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJEYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cblx0b3BlbkRhdGVQaWNrZXIoKSB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4odGhpcy5kYXRlUGlja2VyUmVmLCBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlRGF5Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJEYXlTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyRm9ybS5jb250cm9sc1snZGF0ZSddLnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDEwMDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXAoKGRheTogc3RyaW5nKSA9PiB0aGlzLnBhcnNlKGRheSkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGRheTogRGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRheSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB7XG5cdFx0aWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJiAodmFsdWUuaW5jbHVkZXMoJy8nKSkpIHtcblx0XHRcdGNvbnN0IHN0ciA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IHllYXIgPSArc3RyWzJdLFxuXHRcdFx0XHRtb250aCA9ICtzdHJbMV0gLSAxLFxuXHRcdFx0XHRkYXRlID0gK3N0clswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGlja2VkRGF0ZTtcblx0fVxuXG59XG5cbiJdfQ==