/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { monthsPerQuarters } from '../../../data/months-per-quarters';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
export class FabricDatePickerMonthsViewComponent {
    /**
     * @param {?} calendarService
     * @param {?} calendarViewService
     */
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
        this.monthsPerQuarters = monthsPerQuarters;
    }
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    isMonth(date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    selectMonth(month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    }
}
FabricDatePickerMonthsViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-months-view',
                template: "<table class=\"gui-date-picker-view-padding gui-date-picker-view-border-top\">\n\t<tr *ngFor=\"let quarter of monthsPerQuarters\">\n\t\t<td (click)=\"selectMonth(month.nr)\"\n\t\t\t*ngFor=\"let month of quarter\"\n\t\t\t[class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t[class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{month.name}}\n\t\t\t\t\t</span>\n\t\t</td>\n\t</tr>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricDatePickerMonthsViewComponent.ctorParameters = () => [
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerCalendarViewService }
];
FabricDatePickerMonthsViewComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeYear: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerMonthsViewComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerMonthsViewComponent.prototype.activeYear;
    /** @type {?} */
    FabricDatePickerMonthsViewComponent.prototype.currentDay;
    /** @type {?} */
    FabricDatePickerMonthsViewComponent.prototype.monthsPerQuarters;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerMonthsViewComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerMonthsViewComponent.prototype.calendarViewService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdmlldy9tb250aHMvZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBUXJGLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7O0lBWS9DLFlBQTZCLGVBQWdELEVBQ3pELG1CQUF3RDtRQUQvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUM7UUFDekQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQztRQUw1RSxlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQixzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUkvQyxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBVSxFQUFFLEtBQWE7UUFDaEMsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUE3QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDBnQkFBNEQ7Z0JBQzVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQVJRLCtCQUErQjtZQUYvQixtQ0FBbUM7OzsyQkFhMUMsS0FBSzt5QkFHTCxLQUFLOzs7O0lBSE4sMkRBQ21COztJQUVuQix5REFDbUI7O0lBRW5CLHlEQUE4Qjs7SUFFOUIsZ0VBQStDOzs7OztJQUVuQyw4REFBaUU7Ozs7O0lBQzFFLGtFQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9udGhzUGVyUXVhcnRlcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL21vbnRocy1wZXItcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXItbW9udGhzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlWWVhcjogbnVtYmVyO1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdHJlYWRvbmx5IG1vbnRoc1BlclF1YXJ0ZXJzID0gbW9udGhzUGVyUXVhcnRlcnM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UpIHtcblx0fVxuXG5cdGlzTW9udGgoZGF0ZTogRGF0ZSwgbW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBGYWJyaWNEYXRlVXRpbHMuaXNNb250aChkYXRlLCBtb250aCwgdGhpcy5hY3RpdmVZZWFyKTtcblx0fVxuXG5cdHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RNb250aChtb250aCk7XG5cdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHR9XG59XG4iXX0=