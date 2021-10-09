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
            default:
                return '';
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
            default:
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
            default:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV6RjtJQWdEQyw0Q0FBNkIsbUJBQXdELEVBQ2pFLGVBQWdELEVBQ2hELHNCQUFvRCxFQUNwRCxlQUFzQztRQUg3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBQ2pFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVAxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBT2hELENBQUM7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O1NBQ2xFO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7O2dCQWxJRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLDJxQkFxQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFsQ1EsbUNBQW1DO2dCQUtuQywrQkFBK0I7Z0JBQy9CLDRCQUE0QjtnQkFINUIscUJBQXFCOzs7cUNBa0M1QixLQUFLOytCQUdMLEtBQUs7OEJBR0wsS0FBSzs2QkFHTCxLQUFLO3dCQUdMLEtBQUs7O0lBMEZQLHlDQUFDO0NBQUEsQUFuSUQsSUFtSUM7U0F4R1ksa0NBQWtDOzs7SUFFOUMsZ0VBQ3VDOztJQUV2QywwREFDbUI7O0lBRW5CLHlEQUNvQjs7SUFFcEIsd0RBQ21COztJQUVuQixtREFDNEI7O0lBRTVCLHVEQUFzQjs7SUFFdEIsb0VBQWdEOzs7OztJQUVwQyxpRUFBeUU7Ozs7O0lBQ2xGLDZEQUFpRTs7Ozs7SUFDakUsb0VBQXFFOzs7OztJQUNyRSw2REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJDYXJkVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItY2FyZC12aWV3JztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuaW1wb3J0IHsgbW9udGhzIH0gZnJvbSAnLi4vLi4vZGF0YS9tb250aHMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UgfSBmcm9tICcuLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci12aWV3LXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLXZpZXctcGFuZWxcIj5cblxuXHRcdFx0PGRpdiAoY2xpY2spPVwic3dpdGNoQ2FsZW5kYXJWaWV3KClcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItdmlldy1wYW5lbC1kYXRlXCI+XG5cdFx0XHRcdHt7Z2V0RGlzcGxheWVkRGF0ZSgpfX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93c1wiPlxuXHRcdFx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uTEVGVFwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cInN3aXRjaENhcmQoRmFicmljQ2FsZW5kYXJDYXJkVmlldy5QUkVWKVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj5cblx0XHRcdFx0PC9ndWktYXJyb3ctaWNvbj5cblxuXHRcdFx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uUklHSFRcIlxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJzd2l0Y2hDYXJkKEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcuTkVYVClcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+XG5cdFx0XHRcdDwvZ3VpLWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyVmlld1BhbmVsQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmYWJyaWNDYWxlbmRhclZpZXc6IEZhYnJpY0NhbGVuZGFyVmlldztcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlTW9udGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVZZWFyOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0eWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRGYWJyaWNDYWxlbmRhckNhcmRWaWV3ID0gRmFicmljQ2FsZW5kYXJDYXJkVmlldztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyWWVhcnNTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyczogRmFicmljRGF0ZVBpY2tlclllYXJzKSB7XG5cblx0fVxuXG5cdGdldERpc3BsYXllZERhdGUoKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHJldHVybiBgJHttb250aHNbdGhpcy5hY3RpdmVNb250aF19ICR7dGhpcy5hY3RpdmVZZWFyfWA7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUzpcblx0XHRcdFx0cmV0dXJuIGAke21vbnRoc1t0aGlzLmFjdGl2ZU1vbnRoXX0gJHt0aGlzLmFjdGl2ZVllYXJ9YDtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlM6XG5cdFx0XHRcdHJldHVybiBgJHt0aGlzLmdldERpc3BsYXllZFllYXJSYW5nZSgpfWA7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0fVxuXG5cdHN3aXRjaENhbGVuZGFyVmlldygpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuREFZUyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzd2l0Y2hDYXJkKGNhcmRWaWV3OiBGYWJyaWNDYWxlbmRhckNhcmRWaWV3KTogdm9pZCB7XG5cdFx0Y29uc3QgbmV4dCA9IGNhcmRWaWV3ID09PSBGYWJyaWNDYWxlbmRhckNhcmRWaWV3Lk5FWFQsXG5cdFx0XHRpbmMgPSBuZXh0ID8gMSA6IC0xLFxuXHRcdFx0c2VsZWN0ZWRZZWFyID0gdGhpcy5hY3RpdmVZZWFyICsgaW5jLFxuXHRcdFx0eWVhcnMgPSBuZXh0ID9cblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyWWVhcnMubmV4dFllYXJSYW5nZSh0aGlzLmFjdGl2ZVllYXIpXG5cdFx0XHRcdDogdGhpcy5kYXRlUGlja2VyWWVhcnMucHJldlllYXJSYW5nZSh0aGlzLmFjdGl2ZVllYXIpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmZhYnJpY0NhbGVuZGFyVmlldykge1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTOlxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vbnRoQ2hhbmdlKG5leHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RZZWFyKHNlbGVjdGVkWWVhcik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyWWVhcnNTZXJ2aWNlLm5leHQoeWVhcnMpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RGlzcGxheWVkWWVhclJhbmdlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMueWVhcnNbMF1bMF0udG9TdHJpbmcoKSArICctJyArIHRoaXMueWVhcnNbNF1bdGhpcy55ZWFyc1s0XS5sZW5ndGggLSAxXS50b1N0cmluZygpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYW5kbGVNb250aENoYW5nZShuZXh0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKG5leHQpIHtcblx0XHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLm5leHRNb250aCh0aGlzLmFjdGl2ZVllYXIsIHRoaXMuYWN0aXZlTW9udGgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5wcmV2TW9udGgodGhpcy5hY3RpdmVZZWFyLCB0aGlzLmFjdGl2ZU1vbnRoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==