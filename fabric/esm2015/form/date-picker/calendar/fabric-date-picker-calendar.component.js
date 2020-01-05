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
export class FabricDatePickerCalendarComponent {
    /**
     * @param {?} datePickerService
     * @param {?} datePickerWeeks
     * @param {?} datePickerYears
     */
    constructor(datePickerService, datePickerWeeks, datePickerYears) {
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
    ngOnChanges(changes) {
        if (changes.minYear || changes.maxYear) {
            this.years = this.datePickerYears.getYears(this.selectedYear);
        }
        if (changes.selectDate) {
            this.calculateDatePickerData();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.monthSubscription =
            this.datePickerService.observeDateMonth().subscribe((/**
             * @param {?} month
             * @return {?}
             */
            (month) => this.selectedMonth = month));
        this.yearSubscription =
            this.datePickerService.observeDateYear().subscribe((/**
             * @param {?} year
             * @return {?}
             */
            (year) => this.selectedYear = year));
        this.selectedDateSubscription =
            this.datePickerService.observeSelectedDate().subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.selectDate = date;
                this.selectedYear = date.getFullYear();
                this.selectedMonth = date.getMonth();
            }));
        this.calculateDatePickerData();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.monthSubscription.unsubscribe();
        this.yearSubscription.unsubscribe();
        this.selectedDateSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    calculateDatePickerData() {
        this.selectedMonthName = months[this.selectedMonth];
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.selectedYear, this.selectedMonth);
        this.years = this.datePickerYears.getYears(this.selectedYear);
    }
    /**
     * @return {?}
     */
    prevCard() {
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
    }
    /**
     * @return {?}
     */
    nextCard() {
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelect(date) {
        this.datePickerService.dateSelected(date);
        this.selectDate = date;
    }
    /**
     * @return {?}
     */
    switchViewedList() {
        event.stopPropagation();
        if (this.enableMonthSelection) {
            return 'monthList';
        }
        if (this.enableYearSelection) {
            return 'yearsList';
        }
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            return 'daysList';
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    displayMonthDays(day) {
        return day === this.selectedMonth;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isDateSelected(day) {
        if (this.selectDate) {
            return day.getDate() === this.selectDate.getDate() &&
                day.getMonth() === this.selectDate.getMonth() &&
                day.getFullYear() === this.selectDate.getFullYear();
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isCurrentDay(day) {
        return day.getDate() === this.currentDay.getDate() &&
            day.getMonth() === this.currentDay.getMonth() &&
            day.getFullYear() === this.currentDay.getFullYear();
    }
    /**
     * @param {?} month
     * @return {?}
     */
    isCurrentMonth(month) {
        return month === this.currentDay.getMonth() &&
            this.selectedYear === this.currentDay.getFullYear();
    }
    /**
     * @param {?} month
     * @return {?}
     */
    isSelectedMonth(month) {
        if (this.selectDate) {
            return this.selectDate.getMonth() === month &&
                this.selectDate.getFullYear() === this.selectedYear;
        }
    }
    /**
     * @param {?} year
     * @return {?}
     */
    isYearSelected(year) {
        if (this.selectDate) {
            return year === this.selectedYear;
        }
    }
    /**
     * @param {?} year
     * @return {?}
     */
    isCurrentYear(year) {
        return this.currentDay.getFullYear() === year;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    selectYear(year) {
        this.selectedYear = year;
        this.enableYearSelection = false;
        this.enableMonthSelection = true;
        this.calculateDatePickerData();
    }
    /**
     * @param {?} month
     * @return {?}
     */
    selectMonth(month) {
        this.selectedMonth = month;
        this.enableMonthSelection = false;
        this.calculateDatePickerData();
    }
    /**
     * @return {?}
     */
    showMonthsList() {
        this.enableMonthSelection = !this.enableMonthSelection;
    }
    /**
     * @return {?}
     */
    showYearsList() {
        this.enableMonthSelection = false;
        this.enableYearSelection = !this.enableYearSelection;
    }
    /**
     * @return {?}
     */
    getDisplayedYearRange() {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    }
}
FabricDatePickerCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-toggle',
                template: "<div class=\"gui-date-picker-container\">\n\t<div [ngSwitch]=\"switchViewedList()\">\n\n\t\t<div *ngSwitchCase=\"'daysList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showMonthsList()\"\n\t\t\t\t\t class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedMonthName}} {{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<th *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">\n\t\t\t\t\t\t<span>{{dayOfTheWeek}}</span>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr *ngFor=\"let week of weeks\">\n\n\t\t\t\t\t<td *ngFor=\"let day of week\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t\t\t\t[class.gui-date-picker-current-day]=\"isCurrentDay(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-day]=\"isDateSelected(day)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-day\">\n\t\t\t\t<span (click)=\"onSelect(day)\">\n\t\t\t\t\t{{day.getDate()}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'monthList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div (click)=\"showYearsList()\" class=\"gui-date-picker-interface-date\">\n\t\t\t\t\t{{selectedYear}}\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let quarter of quarters\">\n\t\t\t\t\t<td *ngFor=\"let month of quarter\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"isSelectedMonth(month.nr)\"\n\t\t\t\t\t\t[class.gui-date-picker-current-month]=\"isCurrentMonth(month.nr)\"\n\t\t\t\t\t\t(click)=\"selectMonth(month.nr)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t<span>\n\t\t\t\t\t{{month.name}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'yearsList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<div class=\"gui-date-picker-interface-date gui-date-picker-no-pointer\">{{getDisplayedYearRange()}}</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let yearsChunk of years\">\n\t\t\t\t\t<td *ngFor=\"let year of yearsChunk\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-year]=\"isYearSelected(year)\"\n\t\t\t\t\t\t[class.gui-date-picker-current-year]=\"isCurrentYear(year)\"\n\t\t\t\t\t\t(click)=\"selectYear(year)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-year\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{year}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-date-picker-calendar]': 'true'
                },
                styles: [".gui-date-picker-calendar{box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-date-picker-calendar .gui-date-picker-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:4px;width:250px;padding:0 0 12px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:24px 18px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-interface-date{margin:0;font-size:18px;font-weight:700;cursor:pointer;pointer-events:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface .gui-date-picker-no-pointer{cursor:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{background:0 0;border:none;font-size:18px;margin-left:12px;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table{height:250px;width:250px}.gui-date-picker-calendar .gui-date-picker-container table th{font-size:16px;text-align:center}.gui-date-picker-calendar .gui-date-picker-container table td:first-child,.gui-date-picker-calendar .gui-date-picker-container table th:first-child{padding-left:12px}.gui-date-picker-calendar .gui-date-picker-container table td:last-child,.gui-date-picker-calendar .gui-date-picker-container table th:last-child{padding-right:12px}.gui-date-picker-calendar .gui-date-picker-container table td{font-size:16px;height:31px;width:31px;text-align:center;position:relative}.gui-date-picker-calendar .gui-date-picker-container table td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day span{display:none;pointer-events:none}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year{cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year span{font-size:13px}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-month span{display:block;pointer-events:auto;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#c7e2f6}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border:1px solid #1a69a4}"]
            }] }
];
/** @nocollapse */
FabricDatePickerCalendarComponent.ctorParameters = () => [
    { type: FabricDatePickerService },
    { type: FabricDatePickerWeeks },
    { type: FabricDatePickerYears }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFlekUsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7O0lBb0I3QyxZQUFvQixpQkFBMEMsRUFDbkQsZUFBc0MsRUFDdEMsZUFBc0M7UUFGN0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUNuRCxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBcEJqRCxlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixhQUFRLEdBQXNCLFFBQVEsQ0FBQztRQUl2QyxrQkFBYSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBUTFDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0Qyx3QkFBbUIsR0FBWSxL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O29CQUNMLGtDQUFrQyxFQUFFLE1BQU07aUJBQzFDOzthQUNEOzs7O1lBaEJRLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIscUJBQXFCOzs7O0lBaUI3Qix1REFBOEI7O0lBQzlCLDBEQUE4Qjs7SUFDOUIsa0RBQTBCOztJQUMxQixxREFBdUM7O0lBQ3ZDLGtEQUE0Qjs7SUFFNUIsdURBQWlCOztJQUNqQiwwREFBa0Q7O0lBQ2xELDhEQUEwQjs7SUFDMUIseURBQXFCOzs7OztJQUVyQixxRUFBK0M7Ozs7O0lBQy9DLDhEQUF3Qzs7Ozs7SUFDeEMsNkRBQXVDOzs7OztJQUV2QyxpRUFBOEM7Ozs7O0lBQzlDLGdFQUE2Qzs7Ozs7SUFFakMsOERBQWtEOzs7OztJQUMzRCw0REFBOEM7Ozs7O0lBQzlDLDREQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGF5c09mVGhlV2VlayB9IGZyb20gJy4uL2RhdGEvZGF5cy1vZi10aGUtd2Vlayc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi9kYXRhL21vbnRocyc7XG5pbXBvcnQgeyBxdWFydGVycyB9IGZyb20gJy4uL2RhdGEvcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyV2Vla3MgfSBmcm9tICcuL3dlZWtzL2ZhYnJpYy1kYXRlLXBpY2tlci53ZWVrcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXRvZ2dsZScsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLWNhbGVuZGFyXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRkYXlzT2ZUaGVXZWVrID0gZGF5c09mVGhlV2Vlaztcblx0d2Vla3M6IEFycmF5PEFycmF5PERhdGU+Pjtcblx0cXVhcnRlcnM6IEFycmF5PEFycmF5PGFueT4+ID0gcXVhcnRlcnM7XG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRzZWxlY3REYXRlOiBEYXRlO1xuXHRzZWxlY3RlZE1vbnRoOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuXHRzZWxlY3RlZE1vbnRoTmFtZTogc3RyaW5nO1xuXHRzZWxlY3RlZFllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIG1vbnRoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cdHByaXZhdGUgeWVhclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdHByaXZhdGUgZW5hYmxlTW9udGhTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBlbmFibGVZZWFyU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgZGF0ZVBpY2tlcldlZWtzOiBGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0XHRcdHByaXZhdGUgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLm1pblllYXIgfHwgY2hhbmdlcy5tYXhZZWFyKSB7XG5cdFx0XHR0aGlzLnllYXJzID0gdGhpcy5kYXRlUGlja2VyWWVhcnMuZ2V0WWVhcnModGhpcy5zZWxlY3RlZFllYXIpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdERhdGUpIHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKTtcblx0XHR9XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubW9udGhTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5vYnNlcnZlRGF0ZU1vbnRoKCkuc3Vic2NyaWJlKChtb250aCkgPT4gdGhpcy5zZWxlY3RlZE1vbnRoID0gbW9udGgpO1xuXG5cdFx0dGhpcy55ZWFyU3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uub2JzZXJ2ZURhdGVZZWFyKCkuc3Vic2NyaWJlKCh5ZWFyKSA9PiB0aGlzLnNlbGVjdGVkWWVhciA9IHllYXIpO1xuXG5cdFx0dGhpcy5zZWxlY3RlZERhdGVTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5vYnNlcnZlU2VsZWN0ZWREYXRlKCkuc3Vic2NyaWJlKChkYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RGF0ZSA9IGRhdGU7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkTW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubW9udGhTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLnllYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKSB7XG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoTmFtZSA9IG1vbnRoc1t0aGlzLnNlbGVjdGVkTW9udGhdO1xuXHRcdHRoaXMud2Vla3MgPSB0aGlzLmRhdGVQaWNrZXJXZWVrcy5nZXREYXlzSW5Nb250aHModGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCk7XG5cdFx0dGhpcy55ZWFycyA9IHRoaXMuZGF0ZVBpY2tlclllYXJzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0fVxuXG5cdHByZXZDYXJkKCkge1xuXHRcdGlmICghdGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiAmJiAhdGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uKSB7XG5cdFx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnByZXZNb250aCh0aGlzLnNlbGVjdGVkWWVhciwgdGhpcy5zZWxlY3RlZE1vbnRoKTtcblx0XHRcdHRoaXMuY2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGVkWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkWWVhciAtIDE7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy55ZWFycyA9IHRoaXMuZGF0ZVBpY2tlclllYXJzLnByZXZZZWFyUmFuZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRuZXh0Q2FyZCgpIHtcblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5uZXh0TW9udGgodGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCk7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgKyAxO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMueWVhcnMgPSB0aGlzLmRhdGVQaWNrZXJZZWFycy5uZXh0WWVhclJhbmdlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25TZWxlY3QoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRhdGUpO1xuXHRcdHRoaXMuc2VsZWN0RGF0ZSA9IGRhdGU7XG5cdH1cblxuXHRzd2l0Y2hWaWV3ZWRMaXN0KCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24pIHtcblx0XHRcdHJldHVybiAnbW9udGhMaXN0Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuICd5ZWFyc0xpc3QnO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gJiYgIXRoaXMuZW5hYmxlWWVhclNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuICdkYXlzTGlzdCc7XG5cdFx0fVxuXG5cdH1cblxuXHRkaXNwbGF5TW9udGhEYXlzKGRheTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRheSA9PT0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuXHR9XG5cblx0aXNEYXRlU2VsZWN0ZWQoZGF5OiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHRoaXMuc2VsZWN0RGF0ZS5nZXREYXRlKCkgJiZcblx0XHRcdFx0ZGF5LmdldE1vbnRoKCkgPT09IHRoaXMuc2VsZWN0RGF0ZS5nZXRNb250aCgpICYmXG5cdFx0XHRcdGRheS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnNlbGVjdERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHR9XG5cdH1cblxuXHRpc0N1cnJlbnREYXkoZGF5OiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRheS5nZXREYXRlKCkgPT09IHRoaXMuY3VycmVudERheS5nZXREYXRlKCkgJiZcblx0XHRcdGRheS5nZXRNb250aCgpID09PSB0aGlzLmN1cnJlbnREYXkuZ2V0TW9udGgoKSAmJlxuXHRcdFx0ZGF5LmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuY3VycmVudERheS5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0aXNDdXJyZW50TW9udGgobW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb250aCA9PT0gdGhpcy5jdXJyZW50RGF5LmdldE1vbnRoKCkgJiZcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID09PSB0aGlzLmN1cnJlbnREYXkuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdGlzU2VsZWN0ZWRNb250aChtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0RGF0ZS5nZXRNb250aCgpID09PSBtb250aCAmJlxuXHRcdFx0XHR0aGlzLnNlbGVjdERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5zZWxlY3RlZFllYXI7XG5cdFx0fVxuXHR9XG5cblx0aXNZZWFyU2VsZWN0ZWQoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0RGF0ZSkge1xuXHRcdFx0cmV0dXJuIHllYXIgPT09IHRoaXMuc2VsZWN0ZWRZZWFyO1xuXHRcdH1cblx0fVxuXG5cdGlzQ3VycmVudFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudERheS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuXHR9XG5cblx0c2VsZWN0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHllYXI7XG5cdFx0dGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uID0gZmFsc2U7XG5cdFx0dGhpcy5lbmFibGVNb250aFNlbGVjdGlvbiA9IHRydWU7XG5cdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHR9XG5cblx0c2VsZWN0TW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IG1vbnRoO1xuXHRcdHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gPSBmYWxzZTtcblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRzaG93TW9udGhzTGlzdCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZU1vbnRoU2VsZWN0aW9uID0gIXRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb247XG5cdH1cblxuXHRzaG93WWVhcnNMaXN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlTW9udGhTZWxlY3Rpb24gPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZVllYXJTZWxlY3Rpb24gPSAhdGhpcy5lbmFibGVZZWFyU2VsZWN0aW9uO1xuXHR9XG5cblx0Z2V0RGlzcGxheWVkWWVhclJhbmdlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMueWVhcnNbMF1bMF0udG9TdHJpbmcoKSArICctJyArIHRoaXMueWVhcnNbNF1bdGhpcy55ZWFyc1s0XS5sZW5ndGggLSAxXS50b1N0cmluZygpO1xuXHR9XG5cbn1cbiJdfQ==