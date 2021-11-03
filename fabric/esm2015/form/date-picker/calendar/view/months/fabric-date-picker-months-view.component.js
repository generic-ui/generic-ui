import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { monthsPerQuarters } from '../../../data/months-per-quarters';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
export class FabricDatePickerMonthsViewComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
        this.monthsPerQuarters = monthsPerQuarters;
    }
    isMonth(date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    }
    selectMonth(month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    }
}
FabricDatePickerMonthsViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-months-view',
                template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FabricDatePickerMonthsViewComponent.ctorParameters = () => [
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerCalendarViewService }
];
FabricDatePickerMonthsViewComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeYear: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcvbW9udGhzL2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBUXJGLE1BQU0sT0FBTyxtQ0FBbUM7SUFZL0MsWUFBNkIsZUFBZ0QsRUFDekQsbUJBQXdEO1FBRC9DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUN6RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBTDVFLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXJCLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBSS9DLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBVSxFQUFFLEtBQWE7UUFDaEMsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQTdCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMGpCQUE0RDtnQkFDNUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7WUFSUSwrQkFBK0I7WUFGL0IsbUNBQW1DOzs7MkJBYTFDLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9udGhzUGVyUXVhcnRlcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL21vbnRocy1wZXItcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXItbW9udGhzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlWWVhcjogbnVtYmVyO1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdHJlYWRvbmx5IG1vbnRoc1BlclF1YXJ0ZXJzID0gbW9udGhzUGVyUXVhcnRlcnM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UpIHtcblx0fVxuXG5cdGlzTW9udGgoZGF0ZTogRGF0ZSwgbW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBGYWJyaWNEYXRlVXRpbHMuaXNNb250aChkYXRlLCBtb250aCwgdGhpcy5hY3RpdmVZZWFyKTtcblx0fVxuXG5cdHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RNb250aChtb250aCk7XG5cdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHR9XG59XG4iXX0=