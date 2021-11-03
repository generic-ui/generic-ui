import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
export class FabricDatePickerYearsComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
    }
    selectYear(year) {
        this.calendarService.selectYear(year);
        this.calendarViewService.switchView(FabricCalendarView.MONTHS);
    }
    isYear(date, year) {
        if (date) {
            return date.getFullYear() === year;
        }
        return false;
    }
}
FabricDatePickerYearsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-years-view',
                template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FabricDatePickerYearsComponent.ctorParameters = () => [
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerCalendarViewService }
];
FabricDatePickerYearsComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    years: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQVFyRyxNQUFNLE9BQU8sOEJBQThCO0lBVTFDLFlBQTZCLGVBQWdELEVBQ3pELG1CQUF3RDtRQUQvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUM7UUFDekQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQztRQUg1RSxlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUk5QixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxJQUFZO1FBQzlCLElBQUksSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDJoQkFBc0Q7Z0JBQ3RELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O1lBUlEsK0JBQStCO1lBQy9CLG1DQUFtQzs7OzJCQVUxQyxLQUFLO29CQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXllYXJzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFyc0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclZpZXdTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSkge1xuXHR9XG5cblx0c2VsZWN0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RZZWFyKHllYXIpO1xuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFMpO1xuXHR9XG5cblx0aXNZZWFyKGRhdGU6IERhdGUsIHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGlmIChkYXRlKSB7XG5cdFx0XHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiJdfQ==