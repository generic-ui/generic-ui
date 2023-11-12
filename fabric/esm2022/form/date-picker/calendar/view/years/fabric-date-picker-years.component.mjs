import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import * as i0 from "@angular/core";
import * as i1 from "../../fabric-date-picker-calendar.service";
import * as i2 from "../../fabric-date-picker-calendar-view.service";
import * as i3 from "@angular/common";
export class FabricDatePickerYearsComponent {
    calendarService;
    calendarViewService;
    selectedDate;
    years = [];
    currentDay = new Date();
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerYearsComponent, deps: [{ token: i1.FabricDatePickerCalendarService }, { token: i2.FabricDatePickerCalendarViewService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricDatePickerYearsComponent, selector: "gui-date-picker-years-view", inputs: { selectedDate: "selectedDate", years: "years" }, ngImport: i0, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerYearsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-years-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.FabricDatePickerCalendarService }, { type: i2.FabricDatePickerCalendarViewService }], propDecorators: { selectedDate: [{
                type: Input
            }], years: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQVUxRSxNQUFNLE9BQU8sOEJBQThCO0lBVWI7SUFDVDtJQVJwQixZQUFZLENBQVE7SUFHcEIsS0FBSyxHQUF5QixFQUFFLENBQUM7SUFFakMsVUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFFOUIsWUFBNkIsZUFBZ0QsRUFDekQsbUJBQXdEO1FBRC9DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUN6RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO0lBQzVFLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVSxFQUFFLElBQVk7UUFDOUIsSUFBSSxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUM7U0FDbkM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7dUdBeEJXLDhCQUE4QjsyRkFBOUIsOEJBQThCLDRIQ1gzQyxpaEJBWUE7OzJGRERhLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDQyw0QkFBNEIsaUJBRXZCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07c0pBSy9DLFlBQVk7c0JBRFgsS0FBSztnQkFJTixLQUFLO3NCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXllYXJzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU/OiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlKSB7XG5cdH1cblxuXHRzZWxlY3RZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdFllYXIoeWVhcik7XG5cdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUyk7XG5cdH1cblxuXHRpc1llYXIoZGF0ZTogRGF0ZSwgeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKGRhdGUpIHtcblx0XHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXI7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtcm93cy1nYXAtOCBndWktcHktNiBndWktZGF0ZS1waWNrZXItdmlldy1ib3JkZXItdG9wXCI+XG5cdDxkaXYgKm5nRm9yPVwibGV0IHllYXJzQ2h1bmsgb2YgeWVhcnNcIlxuXHRcdCBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtY29scy01XCI+XG5cdFx0PGRpdiAoY2xpY2spPVwic2VsZWN0WWVhcih5ZWFyKVwiXG5cdFx0XHQgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNDaHVua1wiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1jdXJyZW50LXllYXJdPVwiaXNZZWFyKGN1cnJlbnREYXksIHllYXIpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLXNlbGVjdGVkLXllYXJdPVwiaXNZZWFyKHNlbGVjdGVkRGF0ZSwgeWVhcilcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWNlbGwgZ3VpLWRhdGUtcGlja2VyLXllYXJcIj5cblx0XHRcdHt7eWVhcn19XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=