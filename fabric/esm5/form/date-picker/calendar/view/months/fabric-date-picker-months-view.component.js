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
var FabricDatePickerMonthsViewComponent = /** @class */ (function () {
    function FabricDatePickerMonthsViewComponent(calendarService, calendarViewService) {
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
    FabricDatePickerMonthsViewComponent.prototype.isMonth = /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    function (date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerMonthsViewComponent.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    };
    FabricDatePickerMonthsViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-months-view',
                    template: "<table class=\"gui-date-picker-view-padding gui-date-picker-view-border-top\">\n\t<tr *ngFor=\"let quarter of monthsPerQuarters\">\n\t\t<td (click)=\"selectMonth(month.nr)\"\n\t\t\t*ngFor=\"let month of quarter\"\n\t\t\t[class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t[class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{month.name}}\n\t\t\t\t\t</span>\n\t\t</td>\n\t</tr>\n</table>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerMonthsViewComponent.ctorParameters = function () { return [
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService }
    ]; };
    FabricDatePickerMonthsViewComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeYear: [{ type: Input }]
    };
    return FabricDatePickerMonthsViewComponent;
}());
export { FabricDatePickerMonthsViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdmlldy9tb250aHMvZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXJGO0lBa0JDLDZDQUE2QixlQUFnRCxFQUN6RCxtQkFBd0Q7UUFEL0Msb0JBQWUsR0FBZixlQUFlLENBQWlDO1FBQ3pELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUM7UUFMNUUsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFFckIsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFJL0MsQ0FBQzs7Ozs7O0lBRUQscURBQU87Ozs7O0lBQVAsVUFBUSxJQUFVLEVBQUUsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCx5REFBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQTdCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsMGdCQUE0RDtvQkFDNUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFSUSwrQkFBK0I7Z0JBRi9CLG1DQUFtQzs7OytCQWExQyxLQUFLOzZCQUdMLEtBQUs7O0lBbUJQLDBDQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F4QlksbUNBQW1DOzs7SUFFL0MsMkRBQ21COztJQUVuQix5REFDbUI7O0lBRW5CLHlEQUE4Qjs7SUFFOUIsZ0VBQStDOzs7OztJQUVuQyw4REFBaUU7Ozs7O0lBQzFFLGtFQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9udGhzUGVyUXVhcnRlcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL21vbnRocy1wZXItcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXItbW9udGhzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlWWVhcjogbnVtYmVyO1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdHJlYWRvbmx5IG1vbnRoc1BlclF1YXJ0ZXJzID0gbW9udGhzUGVyUXVhcnRlcnM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UpIHtcblx0fVxuXG5cdGlzTW9udGgoZGF0ZTogRGF0ZSwgbW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBGYWJyaWNEYXRlVXRpbHMuaXNNb250aChkYXRlLCBtb250aCwgdGhpcy5hY3RpdmVZZWFyKTtcblx0fVxuXG5cdHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RNb250aChtb250aCk7XG5cdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHR9XG59XG4iXX0=