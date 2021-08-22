/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
export class FabricDatePickerYearsComponent {
    /**
     * @param {?} calendarService
     * @param {?} calendarViewService
     */
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    selectYear(year) {
        this.calendarService.selectYear(year);
        this.calendarViewService.switchView(FabricCalendarView.MONTHS);
    }
    /**
     * @param {?} date
     * @param {?} year
     * @return {?}
     */
    isYear(date, year) {
        if (date) {
            return date.getFullYear() === year;
        }
    }
}
FabricDatePickerYearsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-years-view',
                template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let yearsChunk of years\"\n\t\t class=\"gui-display-grid gui-grid-cols-5\">\n\t\t<div (click)=\"selectYear(year)\"\n\t\t\t *ngFor=\"let year of yearsChunk\"\n\t\t\t [class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t [class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-year\">\n\t\t\t{{year}}\n\t\t</div>\n\t</div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricDatePickerYearsComponent.ctorParameters = () => [
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerCalendarViewService }
];
FabricDatePickerYearsComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    years: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricDatePickerYearsComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerYearsComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerYearsComponent.prototype.currentDay;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYearsComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYearsComponent.prototype.calendarViewService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdmlldy95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQVFyRyxNQUFNLE9BQU8sOEJBQThCOzs7OztJQVUxQyxZQUE2QixlQUFnRCxFQUN6RCxtQkFBd0Q7UUFEL0Msb0JBQWUsR0FBZixlQUFlLENBQWlDO1FBQ3pELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUM7UUFINUUsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFJOUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBWTtRQUM5QixJQUFJLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQztTQUNuQztJQUNGLENBQUM7OztZQTdCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsMmhCQUFzRDtnQkFDdEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBUlEsK0JBQStCO1lBQy9CLG1DQUFtQzs7OzJCQVUxQyxLQUFLO29CQUdMLEtBQUs7Ozs7SUFITixzREFDbUI7O0lBRW5CLCtDQUM0Qjs7SUFFNUIsb0RBQThCOzs7OztJQUVsQix5REFBaUU7Ozs7O0lBQzFFLDZEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci12aWV3JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXIteWVhcnMtdmlldycsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0eWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlKSB7XG5cdH1cblxuXHRzZWxlY3RZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdFllYXIoeWVhcik7XG5cdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUyk7XG5cdH1cblxuXHRpc1llYXIoZGF0ZTogRGF0ZSwgeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKGRhdGUpIHtcblx0XHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXI7XG5cdFx0fVxuXHR9XG59XG4iXX0=