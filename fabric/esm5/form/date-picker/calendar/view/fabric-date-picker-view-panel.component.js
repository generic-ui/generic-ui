/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../models/fabric-calendar-view';
import { FabricDatePickerCalendarViewService } from '../fabric-date-picker-calendar-view.service';
import { FabricCalendarCardView } from '../../models/fabric-calendar-card-view';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricDatePickerYears } from '../years/fabric-date-picker.years';
import { months } from '../../data/months';
import { FabricDatePickerCalendarService } from '../fabric-date-picker-calendar.service';
import { FabricDatePickerYearsService } from '../years/fabric-date-picker-years.service';
var FabricDatePickerViewPanelComponent = /** @class */ (function () {
    function FabricDatePickerViewPanelComponent(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
        this.calendarViewService = calendarViewService;
        this.calendarService = calendarService;
        this.datePickerYearsService = datePickerYearsService;
        this.datePickerYears = datePickerYears;
        this.Direction = Direction;
        this.FabricCalendarCardView = FabricCalendarCardView;
    }
    /**
     * @return {?}
     */
    FabricDatePickerViewPanelComponent.prototype.getDisplayedDate = /**
     * @return {?}
     */
    function () {
        switch (this.fabricCalendarView) {
            case FabricCalendarView.DAYS:
                return months[this.activeMonth] + " " + this.activeYear;
            case FabricCalendarView.MONTHS:
                return months[this.activeMonth] + " " + this.activeYear;
            case FabricCalendarView.YEARS:
                return "" + this.getDisplayedYearRange();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerViewPanelComponent.prototype.switchCalendarView = /**
     * @return {?}
     */
    function () {
        switch (this.fabricCalendarView) {
            case FabricCalendarView.DAYS:
                this.calendarViewService.switchView(FabricCalendarView.YEARS);
                break;
            case FabricCalendarView.MONTHS:
                this.calendarViewService.switchView(FabricCalendarView.DAYS);
                break;
            case FabricCalendarView.YEARS:
                this.calendarViewService.switchView(FabricCalendarView.DAYS);
                break;
        }
    };
    /**
     * @param {?} cardView
     * @return {?}
     */
    FabricDatePickerViewPanelComponent.prototype.switchCard = /**
     * @param {?} cardView
     * @return {?}
     */
    function (cardView) {
        /** @type {?} */
        var next = cardView === FabricCalendarCardView.NEXT;
        /** @type {?} */
        var inc = next ? 1 : -1;
        /** @type {?} */
        var selectedYear = this.activeYear + inc;
        /** @type {?} */
        var years = next ?
            this.datePickerYears.nextYearRange(this.activeYear)
            : this.datePickerYears.prevYearRange(this.activeYear);
        switch (this.fabricCalendarView) {
            case FabricCalendarView.DAYS:
                this.handleMonthChange(next);
                break;
            case FabricCalendarView.MONTHS:
                this.calendarService.selectYear(selectedYear);
                break;
            case FabricCalendarView.YEARS:
                this.datePickerYearsService.next(years);
                break;
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerViewPanelComponent.prototype.getDisplayedYearRange = /**
     * @return {?}
     */
    function () {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    };
    /**
     * @private
     * @param {?} next
     * @return {?}
     */
    FabricDatePickerViewPanelComponent.prototype.handleMonthChange = /**
     * @private
     * @param {?} next
     * @return {?}
     */
    function (next) {
        if (next) {
            this.calendarService.nextMonth(this.activeYear, this.activeMonth);
        }
        else {
            this.calendarService.prevMonth(this.activeYear, this.activeMonth);
        }
    };
    FabricDatePickerViewPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-view-panel',
                    template: "\n\t\t<div class=\"gui-date-picker-view-panel\">\n\n\t\t\t<div (click)=\"switchCalendarView()\"\n\t\t\t\t class=\"gui-date-picker-view-panel-date\">\n\t\t\t\t{{getDisplayedDate()}}\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-date-picker-arrows\">\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.LEFT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.PREV)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\n\t\t\t\t<gui-arrow-icon [direction]=\"Direction.RIGHT\"\n\t\t\t\t\t\t\t\t(click)=\"switchCard(FabricCalendarCardView.NEXT)\"\n\t\t\t\t\t\t\t\tclass=\"gui-date-picker-arrow\">\n\t\t\t\t</gui-arrow-icon>\n\t\t\t</div>\n\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerViewPanelComponent.ctorParameters = function () { return [
        { type: FabricDatePickerCalendarViewService },
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerYearsService },
        { type: FabricDatePickerYears }
    ]; };
    FabricDatePickerViewPanelComponent.propDecorators = {
        fabricCalendarView: [{ type: Input }],
        selectedDate: [{ type: Input }],
        activeMonth: [{ type: Input }],
        activeYear: [{ type: Input }],
        years: [{ type: Input }]
    };
    return FabricDatePickerViewPanelComponent;
}());
export { FabricDatePickerViewPanelComponent };
if (false) {
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.fabricCalendarView;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.activeMonth;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.activeYear;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.Direction;
    /** @type {?} */
    FabricDatePickerViewPanelComponent.prototype.FabricCalendarCardView;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerViewPanelComponent.prototype.calendarViewService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerViewPanelComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerViewPanelComponent.prototype.datePickerYearsService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerViewPanelComponent.prototype.datePickerYears;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV6RjtJQWdEQyw0Q0FBNkIsbUJBQXdELEVBQ2pFLGVBQWdELEVBQ2hELHNCQUFvRCxFQUNwRCxlQUFzQztRQUg3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBQ2pFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVAxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBT2hELENBQUM7Ozs7SUFFRCw2REFBZ0I7OztJQUFoQjtRQUNDLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBRWhDLEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDM0IsT0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFJLElBQUksQ0FBQyxVQUFZLENBQUM7WUFFekQsS0FBSyxrQkFBa0IsQ0FBQyxNQUFNO2dCQUM3QixPQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQUksSUFBSSxDQUFDLFVBQVksQ0FBQztZQUV6RCxLQUFLLGtCQUFrQixDQUFDLEtBQUs7Z0JBQzVCLE9BQU8sS0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUksQ0FBQztTQUMxQztJQUVGLENBQUM7Ozs7SUFFRCwrREFBa0I7OztJQUFsQjtRQUNDLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBRWhDLEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsTUFBTTtZQUVQLEtBQUssa0JBQWtCLENBQUMsTUFBTTtnQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsTUFBTTtZQUVQLEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7Ozs7SUFFRCx1REFBVTs7OztJQUFWLFVBQVcsUUFBZ0M7O1lBQ3BDLElBQUksR0FBRyxRQUFRLEtBQUssc0JBQXNCLENBQUMsSUFBSTs7WUFDcEQsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUc7O1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdkQsUUFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFFaEMsS0FBSyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFFUCxLQUFLLGtCQUFrQixDQUFDLE1BQU07Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBRVAsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLO2dCQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7O0lBRUQsa0VBQXFCOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0YsQ0FBQzs7Ozs7O0lBRU8sOERBQWlCOzs7OztJQUF6QixVQUEwQixJQUFhO1FBQ3RDLElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7Z0JBekhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsMnFCQXFCVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWxDUSxtQ0FBbUM7Z0JBS25DLCtCQUErQjtnQkFDL0IsNEJBQTRCO2dCQUg1QixxQkFBcUI7OztxQ0FrQzVCLEtBQUs7K0JBR0wsS0FBSzs4QkFHTCxLQUFLOzZCQUdMLEtBQUs7d0JBR0wsS0FBSzs7SUFpRlAseUNBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQS9GWSxrQ0FBa0M7OztJQUU5QyxnRUFDdUM7O0lBRXZDLDBEQUNtQjs7SUFFbkIseURBQ29COztJQUVwQix3REFDbUI7O0lBRW5CLG1EQUM0Qjs7SUFFNUIsdURBQXNCOztJQUV0QixvRUFBZ0Q7Ozs7O0lBRXBDLGlFQUF5RTs7Ozs7SUFDbEYsNkRBQWlFOzs7OztJQUNqRSxvRUFBcUU7Ozs7O0lBQ3JFLDZEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci12aWV3JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhckNhcmRWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci1jYXJkLXZpZXcnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4uL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi8uLi9kYXRhL21vbnRocyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB9IGZyb20gJy4uL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXZpZXctcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItdmlldy1wYW5lbFwiPlxuXG5cdFx0XHQ8ZGl2IChjbGljayk9XCJzd2l0Y2hDYWxlbmRhclZpZXcoKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci12aWV3LXBhbmVsLWRhdGVcIj5cblx0XHRcdFx0e3tnZXREaXNwbGF5ZWREYXRlKCl9fVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dzXCI+XG5cdFx0XHRcdDxndWktYXJyb3ctaWNvbiBbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5MRUZUXCJcblx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwic3dpdGNoQ2FyZChGYWJyaWNDYWxlbmRhckNhcmRWaWV3LlBSRVYpXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPlxuXHRcdFx0XHQ8L2d1aS1hcnJvdy1pY29uPlxuXG5cdFx0XHRcdDxndWktYXJyb3ctaWNvbiBbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5SSUdIVFwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cInN3aXRjaENhcmQoRmFicmljQ2FsZW5kYXJDYXJkVmlldy5ORVhUKVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj5cblx0XHRcdFx0PC9ndWktYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZhYnJpY0NhbGVuZGFyVmlldzogRmFicmljQ2FsZW5kYXJWaWV3O1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVNb250aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZVllYXI6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR5ZWFyczogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcgPSBGYWJyaWNDYWxlbmRhckNhcmRWaWV3O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyc1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMpIHtcblxuXHR9XG5cblx0Z2V0RGlzcGxheWVkRGF0ZSgpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAodGhpcy5mYWJyaWNDYWxlbmRhclZpZXcpIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuREFZUzpcblx0XHRcdFx0cmV0dXJuIGAke21vbnRoc1t0aGlzLmFjdGl2ZU1vbnRoXX0gJHt0aGlzLmFjdGl2ZVllYXJ9YDtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHRyZXR1cm4gYCR7bW9udGhzW3RoaXMuYWN0aXZlTW9udGhdfSAke3RoaXMuYWN0aXZlWWVhcn1gO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0cmV0dXJuIGAke3RoaXMuZ2V0RGlzcGxheWVkWWVhclJhbmdlKCl9YDtcblx0XHR9XG5cblx0fVxuXG5cdHN3aXRjaENhbGVuZGFyVmlldygpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuREFZUyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHN3aXRjaENhcmQoY2FyZFZpZXc6IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcpOiB2b2lkIHtcblx0XHRjb25zdCBuZXh0ID0gY2FyZFZpZXcgPT09IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcuTkVYVCxcblx0XHRcdGluYyA9IG5leHQgPyAxIDogLTEsXG5cdFx0XHRzZWxlY3RlZFllYXIgPSB0aGlzLmFjdGl2ZVllYXIgKyBpbmMsXG5cdFx0XHR5ZWFycyA9IG5leHQgP1xuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJZZWFycy5uZXh0WWVhclJhbmdlKHRoaXMuYWN0aXZlWWVhcilcblx0XHRcdFx0OiB0aGlzLmRhdGVQaWNrZXJZZWFycy5wcmV2WWVhclJhbmdlKHRoaXMuYWN0aXZlWWVhcik7XG5cblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHRoaXMuaGFuZGxlTW9udGhDaGFuZ2UobmV4dCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdFllYXIoc2VsZWN0ZWRZZWFyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTOlxuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJZZWFyc1NlcnZpY2UubmV4dCh5ZWFycyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGdldERpc3BsYXllZFllYXJSYW5nZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnllYXJzWzBdWzBdLnRvU3RyaW5nKCkgKyAnLScgKyB0aGlzLnllYXJzWzRdW3RoaXMueWVhcnNbNF0ubGVuZ3RoIC0gMV0udG9TdHJpbmcoKTtcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlTW9udGhDaGFuZ2UobmV4dDogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChuZXh0KSB7XG5cdFx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5uZXh0TW9udGgodGhpcy5hY3RpdmVZZWFyLCB0aGlzLmFjdGl2ZU1vbnRoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jYWxlbmRhclNlcnZpY2UucHJldk1vbnRoKHRoaXMuYWN0aXZlWWVhciwgdGhpcy5hY3RpdmVNb250aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=