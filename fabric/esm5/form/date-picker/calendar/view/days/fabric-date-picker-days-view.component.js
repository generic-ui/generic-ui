/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { daysOfTheWeek } from '../../../data/days-of-the-week';
import { FabricDatePickerService } from '../../../fabric-date-picker.service';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
var FabricDatePickerDaysViewComponent = /** @class */ (function () {
    function FabricDatePickerDaysViewComponent(datePickerService) {
        this.datePickerService = datePickerService;
        this.daysOfTheWeek = daysOfTheWeek;
        this.currentDay = new Date();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerDaysViewComponent.prototype.selectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.datePickerService.dateSelected(date);
    };
    /**
     * @param {?} comparedDate
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerDaysViewComponent.prototype.isDate = /**
     * @param {?} comparedDate
     * @param {?} date
     * @return {?}
     */
    function (comparedDate, date) {
        return FabricDateUtils.areDatesSame(comparedDate, date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerDaysViewComponent.prototype.displayMonthDays = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return month === this.activeMonth;
    };
    FabricDatePickerDaysViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-days-view',
                    template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerDaysViewComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService }
    ]; };
    FabricDatePickerDaysViewComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        activeMonth: [{ type: Input }],
        weeks: [{ type: Input }]
    };
    return FabricDatePickerDaysViewComponent;
}());
export { FabricDatePickerDaysViewComponent };
if (false) {
    /** @type {?} */
    FabricDatePickerDaysViewComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerDaysViewComponent.prototype.activeMonth;
    /** @type {?} */
    FabricDatePickerDaysViewComponent.prototype.weeks;
    /** @type {?} */
    FabricDatePickerDaysViewComponent.prototype.daysOfTheWeek;
    /** @type {?} */
    FabricDatePickerDaysViewComponent.prototype.currentDay;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerDaysViewComponent.prototype.datePickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcvZGF5cy9mYWJyaWMtZGF0ZS1waWNrZXItZGF5cy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVyRjtJQXFCQywyQ0FBNkIsaUJBQTBDO1FBQTFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFKdkUsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFHOUIsQ0FBQzs7Ozs7SUFFRCxzREFBVTs7OztJQUFWLFVBQVcsSUFBVTtRQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGtEQUFNOzs7OztJQUFOLFVBQU8sWUFBa0IsRUFBRSxJQUFVO1FBQ3BDLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCw0REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTtRQUM3QixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ25DLENBQUM7O2dCQWxDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMseXZCQUEwRDtvQkFDMUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFSUSx1QkFBdUI7OzsrQkFXOUIsS0FBSzs4QkFHTCxLQUFLO3dCQUdMLEtBQUs7O0lBcUJQLHdDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E3QlksaUNBQWlDOzs7SUFFN0MseURBQ21COztJQUVuQix3REFDb0I7O0lBRXBCLGtEQUMwQjs7SUFFMUIsMERBQThCOztJQUU5Qix1REFBOEI7Ozs7O0lBRWxCLDhEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkYXlzT2ZUaGVXZWVrIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9kYXlzLW9mLXRoZS13ZWVrJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXItZGF5cy12aWV3Jyxcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtZGF0ZS1waWNrZXItZGF5cy12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckRheXNWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlTW9udGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3ZWVrczogQXJyYXk8QXJyYXk8RGF0ZT4+O1xuXG5cdGRheXNPZlRoZVdlZWsgPSBkYXlzT2ZUaGVXZWVrO1xuXG5cdGN1cnJlbnREYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlKSB7XG5cdH1cblxuXHRzZWxlY3REYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmRhdGVTZWxlY3RlZChkYXRlKTtcblx0fVxuXG5cdGlzRGF0ZShjb21wYXJlZERhdGU6IERhdGUsIGRhdGU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRmFicmljRGF0ZVV0aWxzLmFyZURhdGVzU2FtZShjb21wYXJlZERhdGUsIGRhdGUpO1xuXHR9XG5cblx0ZGlzcGxheU1vbnRoRGF5cyhtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG1vbnRoID09PSB0aGlzLmFjdGl2ZU1vbnRoO1xuXHR9XG59XG4iXX0=