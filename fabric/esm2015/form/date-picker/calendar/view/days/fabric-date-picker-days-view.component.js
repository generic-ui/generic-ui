/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { daysOfTheWeek } from '../../../data/days-of-the-week';
import { FabricDatePickerService } from '../../../fabric-date-picker.service';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
export class FabricDatePickerDaysViewComponent {
    /**
     * @param {?} datePickerService
     */
    constructor(datePickerService) {
        this.datePickerService = datePickerService;
        this.daysOfTheWeek = daysOfTheWeek;
        this.currentDay = new Date();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        this.datePickerService.dateSelected(date);
    }
    /**
     * @param {?} comparedDate
     * @param {?} date
     * @return {?}
     */
    isDate(comparedDate, date) {
        return FabricDateUtils.areDatesSame(comparedDate, date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    displayMonthDays(month) {
        return month === this.activeMonth;
    }
}
FabricDatePickerDaysViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-days-view',
                template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6\">\n\n\t<div class=\"gui-display-grid gui-grid-cols-7 gui-py-4 gui-date-picker-header\">\n\t\t<div *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">{{dayOfTheWeek}}</div>\n\t</div>\n\n\t<div *ngFor=\"let week of weeks\"\n\t\t class=\"gui-display-grid gui-grid-cols-7\">\n\n\t\t<div (click)=\"selectDate(day)\"\n\t\t\t *ngFor=\"let day of week\"\n\t\t\t [class.gui-date-picker-current-day]=\"isDate(currentDay, day)\"\n\t\t\t [class.gui-date-picker-selected-day]=\"isDate(selectedDate, day)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-day\">\n\t\t\t{{day.getDate()}}\n\t\t</div>\n\n\t</div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricDatePickerDaysViewComponent.ctorParameters = () => [
    { type: FabricDatePickerService }
];
FabricDatePickerDaysViewComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    activeMonth: [{ type: Input }],
    weeks: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcvZGF5cy9mYWJyaWMtZGF0ZS1waWNrZXItZGF5cy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQVFyRixNQUFNLE9BQU8saUNBQWlDOzs7O0lBZTdDLFlBQTZCLGlCQUEwQztRQUExQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBSnZFLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBRzlCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBa0IsRUFBRSxJQUFVO1FBQ3BDLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQzs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx5dkJBQTBEO2dCQUMxRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFSUSx1QkFBdUI7OzsyQkFXOUIsS0FBSzswQkFHTCxLQUFLO29CQUdMLEtBQUs7Ozs7SUFOTix5REFDbUI7O0lBRW5CLHdEQUNvQjs7SUFFcEIsa0RBQzBCOztJQUUxQiwwREFBOEI7O0lBRTlCLHVEQUE4Qjs7Ozs7SUFFbEIsOERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRheXNPZlRoZVdlZWsgfSBmcm9tICcuLi8uLi8uLi9kYXRhL2RheXMtb2YtdGhlLXdlZWsnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZGF0ZS11dGlscy9mYWJyaWMtZGF0ZS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci1kYXlzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci1kYXlzLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyRGF5c1ZpZXdDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVNb250aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdlZWtzOiBBcnJheTxBcnJheTxEYXRlPj47XG5cblx0ZGF5c09mVGhlV2VlayA9IGRheXNPZlRoZVdlZWs7XG5cblx0Y3VycmVudERheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UpIHtcblx0fVxuXG5cdHNlbGVjdERhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZGF0ZVNlbGVjdGVkKGRhdGUpO1xuXHR9XG5cblx0aXNEYXRlKGNvbXBhcmVkRGF0ZTogRGF0ZSwgZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBGYWJyaWNEYXRlVXRpbHMuYXJlRGF0ZXNTYW1lKGNvbXBhcmVkRGF0ZSwgZGF0ZSk7XG5cdH1cblxuXHRkaXNwbGF5TW9udGhEYXlzKG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gbW9udGggPT09IHRoaXMuYWN0aXZlTW9udGg7XG5cdH1cbn1cbiJdfQ==