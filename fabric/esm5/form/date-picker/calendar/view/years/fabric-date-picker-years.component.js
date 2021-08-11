/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDatePickerCalendarService } from '../../fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from '../../fabric-date-picker-calendar-view.service';
var FabricDatePickerYearsComponent = /** @class */ (function () {
    function FabricDatePickerYearsComponent(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYearsComponent.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.calendarService.selectYear(year);
        this.calendarViewService.switchView(FabricCalendarView.MONTHS);
    };
    /**
     * @param {?} date
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYearsComponent.prototype.isYear = /**
     * @param {?} date
     * @param {?} year
     * @return {?}
     */
    function (date, year) {
        if (date) {
            return date.getFullYear() === year;
        }
    };
    FabricDatePickerYearsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-years-view',
                    template: "<table class=\"gui-date-picker-view-padding gui-date-picker-view-border-top\">\n\t<tr *ngFor=\"let yearsChunk of years\">\n\t\t<td (click)=\"selectYear(year)\"\n\t\t\t*ngFor=\"let year of yearsChunk\"\n\t\t\t[class.gui-date-picker-current-year]=\"isYear(currentDay, year)\"\n\t\t\t[class.gui-date-picker-selected-year]=\"isYear(selectedDate, year)\"\n\t\t\tclass=\"gui-date-picker-year\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{year}}\n\t\t\t\t\t</span>\n\t\t</td>\n\t</tr>\n</table>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerYearsComponent.ctorParameters = function () { return [
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService }
    ]; };
    FabricDatePickerYearsComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        years: [{ type: Input }]
    };
    return FabricDatePickerYearsComponent;
}());
export { FabricDatePickerYearsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdmlldy95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVyRztJQWdCQyx3Q0FBNkIsZUFBZ0QsRUFDekQsbUJBQXdEO1FBRC9DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUN6RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBSDVFLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBSTlCLENBQUM7Ozs7O0lBRUQsbURBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFRCwrQ0FBTTs7Ozs7SUFBTixVQUFPLElBQVUsRUFBRSxJQUFZO1FBQzlCLElBQUksSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7Z0JBN0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QywyZUFBc0Q7b0JBQ3RELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBUlEsK0JBQStCO2dCQUMvQixtQ0FBbUM7OzsrQkFVMUMsS0FBSzt3QkFHTCxLQUFLOztJQW1CUCxxQ0FBQztDQUFBLEFBOUJELElBOEJDO1NBeEJZLDhCQUE4Qjs7O0lBRTFDLHNEQUNtQjs7SUFFbkIsK0NBQzRCOztJQUU1QixvREFBOEI7Ozs7O0lBRWxCLHlEQUFpRTs7Ozs7SUFDMUUsNkRBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhclZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLXZpZXcnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci15ZWFycy12aWV3Jyxcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyWWVhcnNDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHR5ZWFyczogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0Y3VycmVudERheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UpIHtcblx0fVxuXG5cdHNlbGVjdFllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Uuc2VsZWN0WWVhcih5ZWFyKTtcblx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTKTtcblx0fVxuXG5cdGlzWWVhcihkYXRlOiBEYXRlLCB5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcjtcblx0XHR9XG5cdH1cbn1cbiJdfQ==