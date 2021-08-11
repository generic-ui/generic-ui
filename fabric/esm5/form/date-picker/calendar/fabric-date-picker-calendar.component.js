/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var FabricDatePickerCalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDatePickerCalendarComponent, _super);
    function FabricDatePickerCalendarComponent(datePickerService, datePickerFormatService, datePickerWeeks, datePickerYears, datePickerYearsService, calendarService, calendarViewService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.datePickerService = datePickerService;
        _this.datePickerFormatService = datePickerFormatService;
        _this.datePickerWeeks = datePickerWeeks;
        _this.datePickerYears = datePickerYears;
        _this.datePickerYearsService = datePickerYearsService;
        _this.calendarService = calendarService;
        _this.calendarViewService = calendarViewService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.FabricDatePickerComposition = FabricDatePickerComposition;
        _this.FabricCalendarView = FabricCalendarView;
        _this.fabricCalendarView = FabricCalendarView.DAYS;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerFormatService
            .onComposition()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} datePickerComposition
         * @return {?}
         */
        function (datePickerComposition) {
            _this.datePickerComposition = datePickerComposition;
        }));
        this.calendarService
            .onActiveMonth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            _this.activeMonth = month;
            _this.calculateDatePickerData();
            _this.changeDetectorRef.detectChanges();
        }));
        this.calendarService
            .onActiveYear()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            _this.activeYear = year;
            _this.calculateDatePickerData();
            _this.changeDetectorRef.detectChanges();
        }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.selectedDate = date;
            _this.activeYear = date.getFullYear();
            _this.activeMonth = date.getMonth();
        }));
        this.datePickerYearsService
            .onYears()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} years
         * @return {?}
         */
        function (years) {
            _this.years = years;
            _this.changeDetectorRef.detectChanges();
        }));
        this.calendarViewService
            .onActiveView()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fabricCalendarView
         * @return {?}
         */
        function (fabricCalendarView) {
            _this.fabricCalendarView = fabricCalendarView;
            _this.changeDetectorRef.detectChanges();
        }));
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.getCalendarView = /**
     * @return {?}
     */
    function () {
        if (event) {
            event.stopPropagation();
        }
        return this.fabricCalendarView;
    };
    /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isVisible = /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    function (activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
     * @private
     * @return {?}
     */
    function () {
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
        this.years = this.datePickerYears.getYears(this.activeYear);
    };
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
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerCompositionService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears },
        { type: FabricDatePickerYearsService },
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService },
        { type: ChangeDetectorRef }
    ]; };
    return FabricDatePickerCalendarComponent;
}(FabricReactive));
export { FabricDatePickerCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3ZGO0lBWXVELDZEQUFjO0lBc0JwRSwyQ0FBNkIsaUJBQTBDLEVBQ25ELHVCQUEyRCxFQUMzRCxlQUFzQyxFQUN0QyxlQUFzQyxFQUN0QyxzQkFBb0QsRUFDcEQsZUFBZ0QsRUFDaEQsbUJBQXdELEVBQ3hELGlCQUFvQztRQVB4RCxZQVFDLGlCQUFPLFNBQ1A7UUFUNEIsdUJBQWlCLEdB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QUEyRDs7Ozs7SUFDcEUsb0VBQTRFOzs7OztJQUM1RSw0REFBdUQ7Ozs7O0lBQ3ZELDREQUF1RDs7Ozs7SUFDdkQsbUVBQXFFOzs7OztJQUNyRSw0REFBaUU7Ozs7O0lBQ2pFLGdFQUF5RTs7Ozs7SUFDekUsOERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIH0gZnJvbSAnLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXRvZ2dsZScsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZGF0ZS1waWNrZXItY2FsZW5kYXJdJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHQvKiogQ2VsbHMgcmVwcmVzZW50aW5nIGRheXMgaW4gd2Vla3Mgb2YgdGhlIGFjdGl2ZSBtb250aC4gKi9cblx0d2Vla3M6IEFycmF5PEFycmF5PERhdGU+PjtcblxuXHQvKiogWWVhciBjZWxscyBkaXNwbGF5ZWQgaW4geWVhcnMgdmlldy4gKi9cblx0eWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRhY3RpdmVNb250aDogbnVtYmVyO1xuXG5cdGFjdGl2ZVllYXI6IG51bWJlcjtcblxuXHRkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gPSBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0RmFicmljQ2FsZW5kYXJWaWV3ID0gRmFicmljQ2FsZW5kYXJWaWV3O1xuXG5cdGZhYnJpY0NhbGVuZGFyVmlldzogRmFicmljQ2FsZW5kYXJWaWV3ID0gRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckZvcm1hdFNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlcldlZWtzOiBGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzU2VydmljZTogRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm1hdFNlcnZpY2Vcblx0XHRcdC5vbkNvbXBvc2l0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiA9IGRhdGVQaWNrZXJDb21wb3NpdGlvbjtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Vcblx0XHRcdC5vbkFjdGl2ZU1vbnRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChtb250aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlTW9udGggPSBtb250aDtcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Vcblx0XHRcdC5vbkFjdGl2ZVllYXIoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHllYXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZVllYXIgPSB5ZWFyO1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdHRoaXMuYWN0aXZlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dGhpcy5hY3RpdmVNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyWWVhcnNTZXJ2aWNlXG5cdFx0XHQub25ZZWFycygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoeWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+KSA9PiB7XG5cdFx0XHRcdHRoaXMueWVhcnMgPSB5ZWFycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZVxuXHRcdFx0Lm9uQWN0aXZlVmlldygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmFicmljQ2FsZW5kYXJWaWV3OiBGYWJyaWNDYWxlbmRhclZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy5mYWJyaWNDYWxlbmRhclZpZXcgPSBmYWJyaWNDYWxlbmRhclZpZXc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRnZXRDYWxlbmRhclZpZXcoKTogRmFicmljQ2FsZW5kYXJWaWV3IHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZhYnJpY0NhbGVuZGFyVmlldztcblx0fVxuXG5cdGlzVmlzaWJsZShhY3RpdmVDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBjaGVja2VkQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIShhY3RpdmVDb21wb3NpdGlvbiAmIGNoZWNrZWRDb21wb3NpdGlvbik7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk6IHZvaWQge1xuXHRcdHRoaXMud2Vla3MgPSB0aGlzLmRhdGVQaWNrZXJXZWVrcy5nZXREYXlzSW5Nb250aHModGhpcy5hY3RpdmVZZWFyLCB0aGlzLmFjdGl2ZU1vbnRoKTtcblx0XHR0aGlzLnllYXJzID0gdGhpcy5kYXRlUGlja2VyWWVhcnMuZ2V0WWVhcnModGhpcy5hY3RpdmVZZWFyKTtcblx0fVxufVxuIl19