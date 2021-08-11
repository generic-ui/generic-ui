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
export class FabricDatePickerViewPanelComponent {
    /**
     * @param {?} calendarViewService
     * @param {?} calendarService
     * @param {?} datePickerYearsService
     * @param {?} datePickerYears
     */
    constructor(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
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
    getDisplayedDate() {
        switch (this.fabricCalendarView) {
            case FabricCalendarView.DAYS:
                return `${months[this.activeMonth]} ${this.activeYear}`;
            case FabricCalendarView.MONTHS:
                return `${months[this.activeMonth]} ${this.activeYear}`;
            case FabricCalendarView.YEARS:
                return `${this.getDisplayedYearRange()}`;
        }
    }
    /**
     * @return {?}
     */
    switchCalendarView() {
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
        }
    }
    /**
     * @param {?} cardView
     * @return {?}
     */
    switchCard(cardView) {
        /** @type {?} */
        const next = cardView === FabricCalendarCardView.NEXT;
        /** @type {?} */
        const inc = next ? 1 : -1;
        /** @type {?} */
        const selectedYear = this.activeYear + inc;
        /** @type {?} */
        const years = next ?
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
        }
    }
    /**
     * @return {?}
     */
    getDisplayedYearRange() {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    }
    /**
     * @private
     * @param {?} next
     * @return {?}
     */
    handleMonthChange(next) {
        if (next) {
            this.calendarService.nextMonth(this.activeYear, this.activeMonth);
        }
        else {
            this.calendarService.prevMonth(this.activeYear, this.activeMonth);
        }
    }
}
FabricDatePickerViewPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-date-picker-view-panel',
                template: `
		<div class="gui-date-picker-view-panel">

			<div (click)="switchCalendarView()"
				 class="gui-date-picker-view-panel-date">
				{{getDisplayedDate()}}
			</div>

			<div class="gui-date-picker-arrows">
				<gui-arrow-icon [direction]="Direction.LEFT"
								(click)="switchCard(FabricCalendarCardView.PREV)"
								class="gui-date-picker-arrow">
				</gui-arrow-icon>

				<gui-arrow-icon [direction]="Direction.RIGHT"
								(click)="switchCard(FabricCalendarCardView.NEXT)"
								class="gui-date-picker-arrow">
				</gui-arrow-icon>
			</div>

		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricDatePickerViewPanelComponent.ctorParameters = () => [
    { type: FabricDatePickerCalendarViewService },
    { type: FabricDatePickerCalendarService },
    { type: FabricDatePickerYearsService },
    { type: FabricDatePickerYears }
];
FabricDatePickerViewPanelComponent.propDecorators = {
    fabricCalendarView: [{ type: Input }],
    selectedDate: [{ type: Input }],
    activeMonth: [{ type: Input }],
    activeYear: [{ type: Input }],
    years: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQTZCekYsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7OztJQXFCOUMsWUFBNkIsbUJBQXdELEVBQ2pFLGVBQWdELEVBQ2hELHNCQUFvRCxFQUNwRCxlQUFzQztRQUg3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBQ2pFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVAxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLDJCQUFzQixHQUFH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LENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7OztZQXpIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQlQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBbENRLG1DQUFtQztZQUtuQywrQkFBK0I7WUFDL0IsNEJBQTRCO1lBSDVCLHFCQUFxQjs7O2lDQWtDNUIsS0FBSzsyQkFHTCxLQUFLOzBCQUdMLEtBQUs7eUJBR0wsS0FBSztvQkFHTCxLQUFLOzs7O0lBWk4sZ0VBQ3VDOztJQUV2QywwREFDbUI7O0lBRW5CLHlEQUNvQjs7SUFFcEIsd0RBQ21COztJQUVuQixtREFDNEI7O0lBRTVCLHVEQUFzQjs7SUFFdEIsb0VBQWdEOzs7OztJQUVwQyxpRUFBeUU7Ozs7O0lBQ2xGLDZEQUFpRTs7Ozs7SUFDakUsb0VBQXFFOzs7OztJQUNyRSw2REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJDYXJkVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItY2FyZC12aWV3JztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuaW1wb3J0IHsgbW9udGhzIH0gZnJvbSAnLi4vLi4vZGF0YS9tb250aHMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UgfSBmcm9tICcuLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1kYXRlLXBpY2tlci12aWV3LXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLXZpZXctcGFuZWxcIj5cblxuXHRcdFx0PGRpdiAoY2xpY2spPVwic3dpdGNoQ2FsZW5kYXJWaWV3KClcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItdmlldy1wYW5lbC1kYXRlXCI+XG5cdFx0XHRcdHt7Z2V0RGlzcGxheWVkRGF0ZSgpfX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93c1wiPlxuXHRcdFx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uTEVGVFwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cInN3aXRjaENhcmQoRmFicmljQ2FsZW5kYXJDYXJkVmlldy5QUkVWKVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj5cblx0XHRcdFx0PC9ndWktYXJyb3ctaWNvbj5cblxuXHRcdFx0XHQ8Z3VpLWFycm93LWljb24gW2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uUklHSFRcIlxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJzd2l0Y2hDYXJkKEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcuTkVYVClcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+XG5cdFx0XHRcdDwvZ3VpLWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyVmlld1BhbmVsQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmYWJyaWNDYWxlbmRhclZpZXc6IEZhYnJpY0NhbGVuZGFyVmlldztcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0YWN0aXZlTW9udGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVZZWFyOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0eWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRGYWJyaWNDYWxlbmRhckNhcmRWaWV3ID0gRmFicmljQ2FsZW5kYXJDYXJkVmlldztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyWWVhcnNTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyczogRmFicmljRGF0ZVBpY2tlclllYXJzKSB7XG5cblx0fVxuXG5cdGdldERpc3BsYXllZERhdGUoKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHJldHVybiBgJHttb250aHNbdGhpcy5hY3RpdmVNb250aF19ICR7dGhpcy5hY3RpdmVZZWFyfWA7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUzpcblx0XHRcdFx0cmV0dXJuIGAke21vbnRoc1t0aGlzLmFjdGl2ZU1vbnRoXX0gJHt0aGlzLmFjdGl2ZVllYXJ9YDtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlM6XG5cdFx0XHRcdHJldHVybiBgJHt0aGlzLmdldERpc3BsYXllZFllYXJSYW5nZSgpfWA7XG5cdFx0fVxuXG5cdH1cblxuXHRzd2l0Y2hDYWxlbmRhclZpZXcoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmZhYnJpY0NhbGVuZGFyVmlldykge1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlMpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuREFZUyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzd2l0Y2hDYXJkKGNhcmRWaWV3OiBGYWJyaWNDYWxlbmRhckNhcmRWaWV3KTogdm9pZCB7XG5cdFx0Y29uc3QgbmV4dCA9IGNhcmRWaWV3ID09PSBGYWJyaWNDYWxlbmRhckNhcmRWaWV3Lk5FWFQsXG5cdFx0XHRpbmMgPSBuZXh0ID8gMSA6IC0xLFxuXHRcdFx0c2VsZWN0ZWRZZWFyID0gdGhpcy5hY3RpdmVZZWFyICsgaW5jLFxuXHRcdFx0eWVhcnMgPSBuZXh0ID9cblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyWWVhcnMubmV4dFllYXJSYW5nZSh0aGlzLmFjdGl2ZVllYXIpXG5cdFx0XHRcdDogdGhpcy5kYXRlUGlja2VyWWVhcnMucHJldlllYXJSYW5nZSh0aGlzLmFjdGl2ZVllYXIpO1xuXG5cdFx0c3dpdGNoICh0aGlzLmZhYnJpY0NhbGVuZGFyVmlldykge1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTOlxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vbnRoQ2hhbmdlKG5leHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RZZWFyKHNlbGVjdGVkWWVhcik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0dGhpcy5kYXRlUGlja2VyWWVhcnNTZXJ2aWNlLm5leHQoeWVhcnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRnZXREaXNwbGF5ZWRZZWFyUmFuZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy55ZWFyc1swXVswXS50b1N0cmluZygpICsgJy0nICsgdGhpcy55ZWFyc1s0XVt0aGlzLnllYXJzWzRdLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZU1vbnRoQ2hhbmdlKG5leHQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAobmV4dCkge1xuXHRcdFx0dGhpcy5jYWxlbmRhclNlcnZpY2UubmV4dE1vbnRoKHRoaXMuYWN0aXZlWWVhciwgdGhpcy5hY3RpdmVNb250aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnByZXZNb250aCh0aGlzLmFjdGl2ZVllYXIsIHRoaXMuYWN0aXZlTW9udGgpO1xuXHRcdH1cblx0fVxufVxuIl19