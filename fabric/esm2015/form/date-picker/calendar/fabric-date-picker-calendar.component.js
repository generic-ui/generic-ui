/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
import { FabricReactive } from '../../../common/fabric-reactive';
import { FabricCalendarView } from '../models/fabric-calendar-view';
import { FabricDatePickerCalendarViewService } from './fabric-date-picker-calendar-view.service';
import { FabricDatePickerCalendarService } from './fabric-date-picker-calendar.service';
import { FabricDatePickerYearsService } from './years/fabric-date-picker-years.service';
import { FabricDatePickerCompositionService } from '../fabric-date-picker-composition.service';
import { FabricDatePickerComposition } from '../models/fabric-date-picker-composition';
export class FabricDatePickerCalendarComponent extends FabricReactive {
    /**
     * @param {?} datePickerService
     * @param {?} datePickerFormatService
     * @param {?} datePickerWeeks
     * @param {?} datePickerYears
     * @param {?} datePickerYearsService
     * @param {?} calendarService
     * @param {?} calendarViewService
     * @param {?} changeDetectorRef
     */
    constructor(datePickerService, datePickerFormatService, datePickerWeeks, datePickerYears, datePickerYearsService, calendarService, calendarViewService, changeDetectorRef) {
        super();
        this.datePickerService = datePickerService;
        this.datePickerFormatService = datePickerFormatService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
        this.datePickerYearsService = datePickerYearsService;
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.changeDetectorRef = changeDetectorRef;
        this.FabricDatePickerComposition = FabricDatePickerComposition;
        this.FabricCalendarView = FabricCalendarView;
        this.fabricCalendarView = FabricCalendarView.DAYS;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerFormatService
            .onComposition()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} datePickerComposition
         * @return {?}
         */
        (datePickerComposition) => {
            this.datePickerComposition = datePickerComposition;
        }));
        this.calendarService
            .onActiveMonth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        (month) => {
            this.activeMonth = month;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        }));
        this.calendarService
            .onActiveYear()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} year
         * @return {?}
         */
        (year) => {
            this.activeYear = year;
            this.calculateDatePickerData();
            this.changeDetectorRef.detectChanges();
        }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            this.selectedDate = date;
            this.activeYear = date.getFullYear();
            this.activeMonth = date.getMonth();
        }));
        this.datePickerYearsService
            .onYears()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} years
         * @return {?}
         */
        (years) => {
            this.years = years;
            this.changeDetectorRef.detectChanges();
        }));
        this.calendarViewService
            .onActiveView()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fabricCalendarView
         * @return {?}
         */
        (fabricCalendarView) => {
            this.fabricCalendarView = fabricCalendarView;
            this.changeDetectorRef.detectChanges();
        }));
        this.calculateDatePickerData();
    }
    /**
     * @return {?}
     */
    getCalendarView() {
        if (event) {
            event.stopPropagation();
        }
        return this.fabricCalendarView;
    }
    /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    isVisible(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    /**
     * @private
     * @return {?}
     */
    calculateDatePickerData() {
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
        this.years = this.datePickerYears.getYears(this.activeYear);
    }
}
FabricDatePickerCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-toggle',
                template: "<div class=\"gui-date-picker-container\">\n\n\t<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-view-panel>\n\n\t\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t\t</gui-date-picker-days-view>\n\n\n\t\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t\t</gui-date-picker-months-view>\n\n\n\t\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t\t</gui-date-picker-years-view>\n\n\t\t</ng-container>\n\n\t</ng-container>\n\n\t<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n\n</div>\n",
                host: {
                    '[class.gui-date-picker-calendar]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,'Helvetica Neue',sans-serif}.gui-date-picker-calendar table{border-collapse:collapse;border-spacing:0;height:258px;table-layout:fixed;width:252px}.gui-date-picker-calendar th{font-size:13px;font-weight:400;height:31px;text-align:center}.gui-date-picker-calendar td{font-size:13px;position:relative;text-align:center;z-index:0}.gui-date-picker-calendar td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar td::before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-calendar td::after{background:0 0;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-calendar td:hover::after{background:#e6e6e6}.gui-date-picker-container{border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-day span{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month span{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year span{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day::before,.gui-date-picker-month.gui-date-picker-current-month::before,.gui-date-picker-year.gui-date-picker-current-year::before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-year.gui-date-picker-selected-year span{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day::after,.gui-date-picker-month.gui-date-picker-selected-month::after,.gui-date-picker-year.gui-date-picker-selected-year::after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.66667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-inner-spin-button,.gui-time-picker-item input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-header::after{background:#999;content:'';display:block;height:1px;left:0;position:absolute;width:100%}.gui-date-picker-header-divider{height:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:700;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover::after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:24px;z-index:-1}"]
            }] }
];
/** @nocollapse */
FabricDatePickerCalendarComponent.ctorParameters = () => [
    { type: FabricDatePickerService },
    { type: FabricDatePickerCompositionService },
    { type: FabricDatePickerWeeks },
    { type: FabricDatePickerYears },
    { type: FabricDatePickerYearsService },
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerCalendarViewService },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * Cells representing days in weeks of the active month.
     * @type {?}
     */
    FabricDatePickerCalendarComponent.prototype.weeks;
    /**
     * Year cells displayed in years view.
     * @type {?}
     */
    FabricDatePickerCalendarComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.activeMonth;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.activeYear;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.datePickerComposition;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.FabricDatePickerComposition;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.FabricCalendarView;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.fabricCalendarView;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerFormatService;
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
    FabricDatePickerCalendarComponent.prototype.datePickerYearsService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.calendarViewService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFldkYsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGNBQWM7Ozs7Ozs7Ozs7O0lBc0JwRSxZQUE2QixpQkFBMEMsRUFDbkQsdUJBQTJELEVBQzNELGVBQXNDLEVBQ3RDLGVBQXNDLEVBQ3RDLHNCQUFvRCxFQUNwRCxlQUFnRCxFQUNoRCxtQkFBd0QsRUFDeEQsaUJBQW9DO1FBQ3ZELEtBQUssRUFB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NUUsNERBQXVEOzs7OztJQUN2RCw0REFBdUQ7Ozs7O0lBQ3ZELG1FQUFxRTs7Ozs7SUFDckUsNERBQWlFOzs7OztJQUNqRSxnRUFBeUU7Ozs7O0lBQ3pFLDhEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJXZWVrcyB9IGZyb20gJy4vd2Vla3MvZmFicmljLWRhdGUtcGlja2VyLndlZWtzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4veWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhclZpZXcgfSBmcm9tICcuLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLXZpZXcnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB9IGZyb20gJy4veWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4uL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLWNhbGVuZGFyXSc6ICd0cnVlJ1xuXHR9LFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0LyoqIENlbGxzIHJlcHJlc2VudGluZyBkYXlzIGluIHdlZWtzIG9mIHRoZSBhY3RpdmUgbW9udGguICovXG5cdHdlZWtzOiBBcnJheTxBcnJheTxEYXRlPj47XG5cblx0LyoqIFllYXIgY2VsbHMgZGlzcGxheWVkIGluIHllYXJzIHZpZXcuICovXG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0YWN0aXZlTW9udGg6IG51bWJlcjtcblxuXHRhY3RpdmVZZWFyOiBudW1iZXI7XG5cblx0ZGF0ZVBpY2tlckNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uID0gRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uO1xuXG5cdEZhYnJpY0NhbGVuZGFyVmlldyA9IEZhYnJpY0NhbGVuZGFyVmlldztcblxuXHRmYWJyaWNDYWxlbmRhclZpZXc6IEZhYnJpY0NhbGVuZGFyVmlldyA9IEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJGb3JtYXRTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJXZWVrczogRmFicmljRGF0ZVBpY2tlcldlZWtzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyczogRmFicmljRGF0ZVBpY2tlclllYXJzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyc1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtYXRTZXJ2aWNlXG5cdFx0XHQub25Db21wb3NpdGlvbigpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZVBpY2tlckNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24gPSBkYXRlUGlja2VyQ29tcG9zaXRpb247XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlXG5cdFx0XHQub25BY3RpdmVNb250aCgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgobW9udGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZU1vbnRoID0gbW9udGg7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlRGF0ZVBpY2tlckRhdGEoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlXG5cdFx0XHQub25BY3RpdmVZZWFyKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh5ZWFyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVZZWFyID0geWVhcjtcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZVxuXHRcdFx0Lm9ic2VydmVTZWxlY3RlZERhdGUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGRhdGU6IERhdGUpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdFx0XHR0aGlzLmFjdGl2ZVllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdHRoaXMuYWN0aXZlTW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclllYXJzU2VydmljZVxuXHRcdFx0Lm9uWWVhcnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PikgPT4ge1xuXHRcdFx0XHR0aGlzLnllYXJzID0geWVhcnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Vcblx0XHRcdC5vbkFjdGl2ZVZpZXcoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZhYnJpY0NhbGVuZGFyVmlldzogRmFicmljQ2FsZW5kYXJWaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3ID0gZmFicmljQ2FsZW5kYXJWaWV3O1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHR9XG5cblx0Z2V0Q2FsZW5kYXJWaWV3KCk6IEZhYnJpY0NhbGVuZGFyVmlldyB7XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNDYWxlbmRhclZpZXc7XG5cdH1cblxuXHRpc1Zpc2libGUoYWN0aXZlQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiwgY2hlY2tlZENvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEoYWN0aXZlQ29tcG9zaXRpb24gJiBjaGVja2VkQ29tcG9zaXRpb24pO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpOiB2b2lkIHtcblx0XHR0aGlzLndlZWtzID0gdGhpcy5kYXRlUGlja2VyV2Vla3MuZ2V0RGF5c0luTW9udGhzKHRoaXMuYWN0aXZlWWVhciwgdGhpcy5hY3RpdmVNb250aCk7XG5cdFx0dGhpcy55ZWFycyA9IHRoaXMuZGF0ZVBpY2tlclllYXJzLmdldFllYXJzKHRoaXMuYWN0aXZlWWVhcik7XG5cdH1cbn1cbiJdfQ==