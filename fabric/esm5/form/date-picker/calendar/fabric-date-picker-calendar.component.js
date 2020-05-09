/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { daysOfTheWeek } from '../model/days-of-the-week';
import { months } from '../model/months';
import { quarters } from '../model/quarters';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
var FabricDatePickerCalendarComponent = /** @class */ (function () {
    function FabricDatePickerCalendarComponent(datePickerService, datePickerWeeks, datePickerYears, changeDetectorRef) {
        this.datePickerService = datePickerService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
        this.changeDetectorRef = changeDetectorRef;
        this.currentDay = new Date();
        this.daysOfTheWeek = daysOfTheWeek;
        this.quarters = quarters;
        this.selectedMonth = new Date().getMonth() + 1;
        this.enableMonthSelection = false;
        this.enableYearSelection = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.minYear || changes.maxYear) {
            this.years = this.datePickerYears.getYears(this.selectedYear);
        }
        if (changes.selectDate) {
            this.calculateDatePickerData();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.monthSubscription =
            this.datePickerService.observeDateMonth().subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return _this.selectedMonth = month; }));
        this.yearSubscription =
            this.datePickerService.observeDateYear().subscribe((/**
             * @param {?} year
             * @return {?}
             */
            function (year) { return _this.selectedYear = year; }));
        this.selectedDateSubscription =
            this.datePickerService.observeSelectedDate().subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.selectDate = date;
                _this.selectedYear = date.getFullYear();
                _this.selectedMonth = date.getMonth();
            }));
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.monthSubscription.unsubscribe();
        this.yearSubscription.unsubscribe();
        this.selectedDateSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
     * @return {?}
     */
    function () {
        this.selectedMonthName = months[this.selectedMonth];
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.selectedYear, this.selectedMonth);
        this.years = this.datePickerYears.getYears(this.selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.prevCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.prevMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear - 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.prevYearRange();
        }
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.nextCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.nextMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear + 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.nextYearRange();
        }
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.onSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectDate = date;
        this.changeDetectorRef.detectChanges();
        this.datePickerService.dateSelected(date);
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.switchViewedList = /**
     * @return {?}
     */
    function () {
        if (event) {
            event.stopPropagation();
        }
        if (this.enableMonthSelection) {
            return 'monthList';
        }
        if (this.enableYearSelection) {
            return 'yearsList';
        }
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            return 'daysList';
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.displayMonthDays = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day === this.selectedMonth;
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isDateSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (this.selectDate) {
            return day.getDate() === this.selectDate.getDate() &&
                day.getMonth() === this.selectDate.getMonth() &&
                day.getFullYear() === this.selectDate.getFullYear();
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day.getDate() === this.currentDay.getDate() &&
            day.getMonth() === this.currentDay.getMonth() &&
            day.getFullYear() === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return month === this.currentDay.getMonth() &&
            this.selectedYear === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isSelectedMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (this.selectDate) {
            return this.selectDate.getMonth() === month &&
                this.selectDate.getFullYear() === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isYearSelected = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (this.selectDate) {
            return year === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return this.currentDay.getFullYear() === year;
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.selectedYear = year;
        this.enableYearSelection = false;
        this.enableMonthSelection = true;
        this.calculateDatePickerData();
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.selectedMonth = month;
        this.enableMonthSelection = false;
        this.calculateDatePickerData();
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showMonthsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = !this.enableMonthSelection;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showYearsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = false;
        this.enableYearSelection = !this.enableYearSelection;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.getDisplayedYearRange = /**
     * @return {?}
     */
    function () {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    };
    FabricDatePickerCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-toggle',
                    template: "<div class=\"gui-date-picker-container\">\n\t<div [ngSwitch]=\"switchViewedList()\">\n\n\t\t<div *ngSwitchCase=\"'daysList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showMonthsList()\"\n\t\t\t\t\t class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedMonthName}} {{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<th *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">\n\t\t\t\t\t\t<span>{{dayOfTheWeek}}</span>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr *ngFor=\"let week of weeks\">\n\n\t\t\t\t\t<td *ngFor=\"let day of week\"\n\t\t\t\t\t\t[class.gui-date-picker-current-day]=\"isCurrentDay(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-day]=\"isDateSelected(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t\t\t\tclass=\"gui-date-picker-day\">\n\t\t\t\t<span (click)=\"onSelect(day)\">\n\t\t\t\t\t{{day.getDate()}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'monthList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showYearsList()\" class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let quarter of quarters\">\n\t\t\t\t\t<td (click)=\"selectMonth(month.nr)\"\n\t\t\t\t\t\t*ngFor=\"let month of quarter\"\n\t\t\t\t\t\t[class.gui-date-picker-current-month]=\"isCurrentMonth(month.nr)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"isSelectedMonth(month.nr)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t<span>\n\t\t\t\t\t{{month.name}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'yearsList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div class=\"gui-date-picker-interface-date gui-date-picker-no-pointer\">{{getDisplayedYearRange()}}</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let yearsChunk of years\">\n\t\t\t\t\t<td (click)=\"selectYear(year)\"\n\t\t\t\t\t\t*ngFor=\"let year of yearsChunk\"\n\t\t\t\t\t\t[class.gui-date-picker-current-year]=\"isCurrentYear(year)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-year]=\"isYearSelected(year)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-year\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{year}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    },
                    styles: [".gui-date-picker-calendar{box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-date-picker-calendar .gui-date-picker-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:4px;width:250px;padding:0 0 12px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px 18px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-interface-date{margin:0;font-size:18px;font-weight:700;cursor:pointer;pointer-events:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-no-pointer{cursor:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{background:0 0;border:none;font-size:18px;margin-left:12px;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table{height:250px;width:250px}.gui-date-picker-calendar .gui-date-picker-container table th{font-size:16px;text-align:center}.gui-date-picker-calendar .gui-date-picker-container table td:first-child,.gui-date-picker-calendar .gui-date-picker-container table th:first-child{padding-left:12px}.gui-date-picker-calendar .gui-date-picker-container table td:last-child,.gui-date-picker-calendar .gui-date-picker-container table th:last-child{padding-right:12px}.gui-date-picker-calendar .gui-date-picker-container table td{font-size:16px;height:31px;width:31px;text-align:center;position:relative}.gui-date-picker-calendar .gui-date-picker-container table td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day span{display:none;pointer-events:none}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year{cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year span{font-size:13px}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-month span{display:block;pointer-events:auto;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#c7e2f6}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border:1px solid #1a69a4}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears },
        { type: ChangeDetectorRef }
    ]; };
    return FabricDatePickerCalendarComponent;
}());
export { FabricDatePickerCalendarComponent };
if (false) {
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.currentDay;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.daysOfTheWeek;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.weeks;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.quarters;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonth;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonthName;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.selectedDateSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.monthSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.yearSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableMonthSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableYearSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerWeeks;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerYears;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHekU7SUFnQ0MsMkNBQW9CLGlCQUEwQyxFQUNuRCxlQUFzQyxFQUN0QyxlQUFzQyxFQUN0QyxpQkFBb0M7UUFIM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUNuRCxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQ3RDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFyQi9DLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLGFBQVEsR0FBc0IsUUFBUSxDQUFDO1FBSXZDLGtCQUFhLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFRMUMseUJBQW9C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Ozs7SUFFakMsOERBQWtEOzs7OztJQUMzRCw0REFBOEM7Ozs7O0lBQzlDLDREQUE4Qzs7Ozs7SUFDOUMsOERBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGF5c09mVGhlV2VlayB9IGZyb20gJy4uL21vZGVsL2RheXMtb2YtdGhlLXdlZWsnO1xuaW1wb3J0IHsgbW9udGhzIH0gZnJvbSAnLi4vbW9kZWwvbW9udGhzJztcbmltcG9ydCB7IHF1YXJ0ZXJzIH0gZnJvbSAnLi4vbW9kZWwvcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyV2Vla3MgfSBmcm9tICcuL3dlZWtzL2ZhYnJpYy1kYXRlLXBpY2tlci53ZWVrcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXRvZ2dsZScsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLWNhbGVuZGFyXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRkYXlzT2ZUaGVXZWVrID0gZGF5c09mVGhlV2Vlaztcblx0d2Vla3M6IEFycmF5PEFycmF5PERhdGU+Pjtcblx0cXVhcnRlcnM6IEFycmF5PEFycmF5PGFueT4+ID0gcXVhcnRlcnM7XG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRzZWxlY3REYXRlOiBEYXRlO1xuXHRzZWxlY3RlZE1vbnRoOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuXHRzZWxlY3RlZE1vbnRoTmFtZTogc3RyaW5nO1xuXHRzZWxlY3RlZFllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIG1vbnRoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cdHByaXZhdGUgeWVhclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdHByaXZhdGUgZW5hYmxlTW9udGhTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBlbmFibGVZZWFyU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgZGF0ZVBpY2tlcldlZWtzOiBGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0XHRcdHByaXZhdGUgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5taW5ZZWFyIHx8IGNoYW5nZXMubWF4WWVhcikge1xuXHRcdFx0dGhpcy55ZWFycyA9IHRoaXMuZGF0ZVBpY2tlclllYXJzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3REYXRlKSB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vbnRoU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uub2JzZXJ2ZURhdGVNb250aCgpLnN1YnNjcmliZSgobW9udGgpID0+IHRoaXMuc2VsZWN0ZWRNb250aCA9IG1vbnRoKTtcblxuXHRcdHRoaXMueWVhclN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm9ic2VydmVEYXRlWWVhcigpLnN1YnNjcmliZSgoeWVhcikgPT4gdGhpcy5zZWxlY3RlZFllYXIgPSB5ZWFyKTtcblxuXHRcdHRoaXMuc2VsZWN0ZWREYXRlU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpLnN1YnNjcmliZSgoZGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdERhdGUgPSBkYXRlO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLm1vbnRoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy55ZWFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aE5hbWUgPSBtb250aHNbdGhpcy5zZWxlY3RlZE1vbnRoXTtcblx0XHR0aGlzLndlZWtzID0gdGhpcy5kYXRlUGlja2VyV2Vla3MuZ2V0RGF5c0luTW9udGhzKHRoaXMuc2VsZWN0ZWRZZWFyLCB0aGlzLnNlbGVjdGVkTW9udGgpO1xuXHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5nZXRZZWFycyh0aGlzLnNlbGVjdGVkWWVhcik7XG5cdH1cblxuXHRwcmV2Q2FyZCgpIHtcblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5wcmV2TW9udGgodGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCk7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgLSAxO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5wcmV2WWVhclJhbmdlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZXh0Q2FyZCgpIHtcblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5uZXh0TW9udGgodGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCk7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgKyAxO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5uZXh0WWVhclJhbmdlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvblNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3REYXRlID0gZGF0ZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXRlKTtcblx0fVxuXG5cdHN3aXRjaFZpZXdlZExpc3QoKSB7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gJ21vbnRoTGlzdCc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHJldHVybiAneWVhcnNMaXN0Jztcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uICYmICF0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHJldHVybiAnZGF5c0xpc3QnO1xuXHRcdH1cblx0fVxuXG5cdGRpc3BsYXlNb250aERheXMoZGF5OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF5ID09PSB0aGlzLnNlbGVjdGVkTW9udGg7XG5cdH1cblxuXHRpc0RhdGVTZWxlY3RlZChkYXk6IERhdGUpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5zZWxlY3REYXRlKSB7XG5cdFx0XHRyZXR1cm4gZGF5LmdldERhdGUoKSA9PT0gdGhpcy5zZWxlY3REYXRlLmdldERhdGUoKSAmJlxuXHRcdFx0XHRkYXkuZ2V0TW9udGgoKSA9PT0gdGhpcy5zZWxlY3REYXRlLmdldE1vbnRoKCkgJiZcblx0XHRcdFx0ZGF5LmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuc2VsZWN0RGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdH1cblx0fVxuXG5cdGlzQ3VycmVudERheShkYXk6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF5LmdldERhdGUoKSA9PT0gdGhpcy5jdXJyZW50RGF5LmdldERhdGUoKSAmJlxuXHRcdFx0ZGF5LmdldE1vbnRoKCkgPT09IHRoaXMuY3VycmVudERheS5nZXRNb250aCgpICYmXG5cdFx0XHRkYXkuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5jdXJyZW50RGF5LmdldEZ1bGxZZWFyKCk7XG5cdH1cblxuXHRpc0N1cnJlbnRNb250aChtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG1vbnRoID09PSB0aGlzLmN1cnJlbnREYXkuZ2V0TW9udGgoKSAmJlxuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPT09IHRoaXMuY3VycmVudERheS5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0aXNTZWxlY3RlZE1vbnRoKG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5zZWxlY3REYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3REYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoICYmXG5cdFx0XHRcdHRoaXMuc2VsZWN0RGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnNlbGVjdGVkWWVhcjtcblx0XHR9XG5cdH1cblxuXHRpc1llYXJTZWxlY3RlZCh5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5zZWxlY3REYXRlKSB7XG5cdFx0XHRyZXR1cm4geWVhciA9PT0gdGhpcy5zZWxlY3RlZFllYXI7XG5cdFx0fVxuXHR9XG5cblx0aXNDdXJyZW50WWVhcih5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50RGF5LmdldEZ1bGxZZWFyKCkgPT09IHllYXI7XG5cdH1cblxuXHRzZWxlY3RZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0geWVhcjtcblx0XHR0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24gPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uID0gdHJ1ZTtcblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRzZWxlY3RNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gbW9udGg7XG5cdFx0dGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiA9IGZhbHNlO1xuXHRcdHRoaXMuY2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHNob3dNb250aHNMaXN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gPSAhdGhpcy5lbmFibGVNb250aFNlbGVjdGlvbjtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHNob3dZZWFyc0xpc3QoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiA9IGZhbHNlO1xuXHRcdHRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbiA9ICF0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb247XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRnZXREaXNwbGF5ZWRZZWFyUmFuZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy55ZWFyc1swXVswXS50b1N0cmluZygpICsgJy0nICsgdGhpcy55ZWFyc1s0XVt0aGlzLnllYXJzWzRdLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG5cdH1cblxufVxuIl19