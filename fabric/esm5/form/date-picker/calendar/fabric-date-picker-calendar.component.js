/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { daysOfTheWeek } from '../data/days-of-the-week';
import { months } from '../data/months';
import { quarters } from '../data/quarters';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
var FabricDatePickerCalendarComponent = /** @class */ (function () {
    function FabricDatePickerCalendarComponent(datePickerService, datePickerWeeks, datePickerYears) {
        this.datePickerService = datePickerService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
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
        this.datePickerService.dateSelected(date);
        this.selectDate = date;
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
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showMonthsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = !this.enableMonthSelection;
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
                    styles: [".gui-date-picker-calendar{box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-date-picker-calendar .gui-date-picker-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:4px;width:250px;padding:0 0 12px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:24px 18px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-interface-date{margin:0;font-size:18px;font-weight:700;cursor:pointer;pointer-events:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-no-pointer{cursor:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{background:0 0;border:none;font-size:18px;margin-left:12px;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table{height:250px;width:250px}.gui-date-picker-calendar .gui-date-picker-container table th{font-size:16px;text-align:center}.gui-date-picker-calendar .gui-date-picker-container table td:first-child,.gui-date-picker-calendar .gui-date-picker-container table th:first-child{padding-left:12px}.gui-date-picker-calendar .gui-date-picker-container table td:last-child,.gui-date-picker-calendar .gui-date-picker-container table th:last-child{padding-right:12px}.gui-date-picker-calendar .gui-date-picker-container table td{font-size:16px;height:31px;width:31px;text-align:center;position:relative}.gui-date-picker-calendar .gui-date-picker-container table td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day span{display:none;pointer-events:none}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year{cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year span{font-size:13px}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-month span{display:block;pointer-events:auto;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#c7e2f6}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border:1px solid #1a69a4}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHekU7SUFnQ0MsMkNBQW9CLGlCQUEwQyxFQUNuRCxlQUFzQyxFQUN0QyxlQUFzQztRQUY3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBQ25ELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFwQmpELGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLGFBQVEsR0FBc0IsUUFBUSxDQUFDO1FBSXZDLGtCQUFhLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFRMUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztJQUs3QyxDQUFDOzs7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QU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvRixDQUFDOztnQkFuTUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGkyRkFBeUQ7b0JBSXpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLGtDQUFrQyxFQUFFLE1BQU07cUJBQzFDOztpQkFDRDs7OztnQkFoQlEsdUJBQXVCO2dCQUN2QixxQkFBcUI7Z0JBQ3JCLHFCQUFxQjs7SUF3TTlCLHdDQUFDO0NBQUEsQUFyTUQsSUFxTUM7U0F6TFksaUNBQWlDOzs7SUFFN0MsdURBQThCOztJQUM5QiwwREFBOEI7O0lBQzlCLGtEQUEwQjs7SUFDMUIscURBQXVDOztJQUN2QyxrREFBNEI7O0lBRTVCLHVEQUFpQjs7SUFDakIsMERBQWtEOztJQUNsRCw4REFBMEI7O0lBQzFCLHlEQUFxQjs7Ozs7SUFFckIscUVBQStDOzs7OztJQUMvQyw4REFBd0M7Ozs7O0lBQ3hDLDZEQUF1Qzs7Ozs7SUFFdkMsaUVBQThDOzs7OztJQUM5QyxnRUFBNkM7Ozs7O0lBRWpDLDhEQUFrRDs7Ozs7SUFDM0QsNERBQThDOzs7OztJQUM5Qyw0REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGRheXNPZlRoZVdlZWsgfSBmcm9tICcuLi9kYXRhL2RheXMtb2YtdGhlLXdlZWsnO1xuaW1wb3J0IHsgbW9udGhzIH0gZnJvbSAnLi4vZGF0YS9tb250aHMnO1xuaW1wb3J0IHsgcXVhcnRlcnMgfSBmcm9tICcuLi9kYXRhL3F1YXJ0ZXJzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1jYWxlbmRhcl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0ZGF5c09mVGhlV2VlayA9IGRheXNPZlRoZVdlZWs7XG5cdHdlZWtzOiBBcnJheTxBcnJheTxEYXRlPj47XG5cdHF1YXJ0ZXJzOiBBcnJheTxBcnJheTxhbnk+PiA9IHF1YXJ0ZXJzO1xuXHR5ZWFyczogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0c2VsZWN0RGF0ZTogRGF0ZTtcblx0c2VsZWN0ZWRNb250aDogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcblx0c2VsZWN0ZWRNb250aE5hbWU6IHN0cmluZztcblx0c2VsZWN0ZWRZZWFyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZERhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSBtb250aFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIHllYXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRwcml2YXRlIGVuYWJsZU1vbnRoU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgZW5hYmxlWWVhclNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVBpY2tlclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRhdGVQaWNrZXJXZWVrczogRmFicmljRGF0ZVBpY2tlcldlZWtzLFxuXHRcdFx0XHRwcml2YXRlIGRhdGVQaWNrZXJZZWFyczogRmFicmljRGF0ZVBpY2tlclllYXJzKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5taW5ZZWFyIHx8IGNoYW5nZXMubWF4WWVhcikge1xuXHRcdFx0dGhpcy55ZWFycyA9IHRoaXMuZGF0ZVBpY2tlclllYXJzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWxlY3REYXRlKSB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vbnRoU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uub2JzZXJ2ZURhdGVNb250aCgpLnN1YnNjcmliZSgobW9udGgpID0+IHRoaXMuc2VsZWN0ZWRNb250aCA9IG1vbnRoKTtcblxuXHRcdHRoaXMueWVhclN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm9ic2VydmVEYXRlWWVhcigpLnN1YnNjcmliZSgoeWVhcikgPT4gdGhpcy5zZWxlY3RlZFllYXIgPSB5ZWFyKTtcblxuXHRcdHRoaXMuc2VsZWN0ZWREYXRlU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpLnN1YnNjcmliZSgoZGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdERhdGUgPSBkYXRlO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLm1vbnRoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy55ZWFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aE5hbWUgPSBtb250aHNbdGhpcy5zZWxlY3RlZE1vbnRoXTtcblx0XHR0aGlzLndlZWtzID0gdGhpcy5kYXRlUGlja2VyV2Vla3MuZ2V0RGF5c0luTW9udGhzKHRoaXMuc2VsZWN0ZWRZZWFyLCB0aGlzLnNlbGVjdGVkTW9udGgpO1xuXHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5nZXRZZWFycyh0aGlzLnNlbGVjdGVkWWVhcik7XG5cdH1cblxuXHRwcmV2Q2FyZCgpIHtcblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5wcmV2TW9udGgodGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCk7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgLSAxO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5wcmV2WWVhclJhbmdlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmV4dENhcmQoKSB7XG5cdFx0aWYgKCF0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uICYmICF0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubmV4dE1vbnRoKHRoaXMuc2VsZWN0ZWRZZWFyLCB0aGlzLnNlbGVjdGVkTW9udGgpO1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyICsgMTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uKSB7XG5cdFx0XHR0aGlzLnllYXJzID0gdGhpcy5kYXRlUGlja2VyWWVhcnMubmV4dFllYXJSYW5nZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9uU2VsZWN0KGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXRlKTtcblx0XHR0aGlzLnNlbGVjdERhdGUgPSBkYXRlO1xuXHR9XG5cblx0c3dpdGNoVmlld2VkTGlzdCgpIHtcblxuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24pIHtcblx0XHRcdHJldHVybiAnbW9udGhMaXN0Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuICd5ZWFyc0xpc3QnO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuICdkYXlzTGlzdCc7XG5cdFx0fVxuXG5cdH1cblxuXHRkaXNwbGF5TW9udGhEYXlzKGRheTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRheSA9PT0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuXHR9XG5cblx0aXNEYXRlU2VsZWN0ZWQoZGF5OiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHRoaXMuc2VsZWN0RGF0ZS5nZXREYXRlKCkgJiZcblx0XHRcdFx0ZGF5LmdldE1vbnRoKCkgPT09IHRoaXMuc2VsZWN0RGF0ZS5nZXRNb250aCgpICYmXG5cdFx0XHRcdGRheS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnNlbGVjdERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHR9XG5cdH1cblxuXHRpc0N1cnJlbnREYXkoZGF5OiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHRoaXMuY3VycmVudERheS5nZXREYXRlKCkgJiZcblx0XHRcdGRheS5nZXRNb250aCgpID09PSB0aGlzLmN1cnJlbnREYXkuZ2V0TW9udGgoKSAmJlxuXHRcdFx0ZGF5LmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuY3VycmVudERheS5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0aXNDdXJyZW50TW9udGgobW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb250aCA9PT0gdGhpcy5jdXJyZW50RGF5LmdldE1vbnRoKCkgJiZcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID09PSB0aGlzLmN1cnJlbnREYXkuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdGlzU2VsZWN0ZWRNb250aChtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0RGF0ZS5nZXRNb250aCgpID09PSBtb250aCAmJlxuXHRcdFx0XHR0aGlzLnNlbGVjdERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5zZWxlY3RlZFllYXI7XG5cdFx0fVxuXHR9XG5cblx0aXNZZWFyU2VsZWN0ZWQoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIHllYXIgPT09IHRoaXMuc2VsZWN0ZWRZZWFyO1xuXHRcdH1cblx0fVxuXG5cdGlzQ3VycmVudFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudERheS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuXHR9XG5cblx0c2VsZWN0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHllYXI7XG5cdFx0dGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uID0gZmFsc2U7XG5cdFx0dGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiA9IHRydWU7XG5cdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHR9XG5cblx0c2VsZWN0TW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IG1vbnRoO1xuXHRcdHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gPSBmYWxzZTtcblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRzaG93TW9udGhzTGlzdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uID0gIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb247XG5cdH1cblxuXHRzaG93WWVhcnNMaXN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24gPSAhdGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uO1xuXHR9XG5cblx0Z2V0RGlzcGxheWVkWWVhclJhbmdlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMueWVhcnNbMF1bMF0udG9TdHJpbmcoKSArICctJyArIHRoaXMueWVhcnNbNF1bdGhpcy55ZWFyc1s0XS5sZW5ndGggLSAxXS50b1N0cmluZygpO1xuXHR9XG5cbn1cbiJdfQ==