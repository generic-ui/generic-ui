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
            default:
                return '';
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
            default:
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
            default:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQTZCekYsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7OztJQXFCOUMsWUFBNkIsbUJBQXdELEVBQ2pFLGVBQWdELEVBQ2hELHNCQUFvRCxFQUNwRCxlQUFzQztRQUg3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBQ2pFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVAxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLDJCQUFzQixHQUFH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QUMsQ0FBQztTQUNsRTthQUFNO1lBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzs7WUFsSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcUJUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQWxDUSxtQ0FBbUM7WUFLbkMsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUg1QixxQkFBcUI7OztpQ0FrQzVCLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7b0JBR0wsS0FBSzs7OztJQVpOLGdFQUN1Qzs7SUFFdkMsMERBQ21COztJQUVuQix5REFDb0I7O0lBRXBCLHdEQUNtQjs7SUFFbkIsbURBQzRCOztJQUU1Qix1REFBc0I7O0lBRXRCLG9FQUFnRDs7Ozs7SUFFcEMsaUVBQXlFOzs7OztJQUNsRiw2REFBaUU7Ozs7O0lBQ2pFLG9FQUFxRTs7Ozs7SUFDckUsNkRBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhclZpZXcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLXZpZXcnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLWNhcmQtdmlldyc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi4veWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzJztcbmltcG9ydCB7IG1vbnRocyB9IGZyb20gJy4uLy4uL2RhdGEvbW9udGhzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIH0gZnJvbSAnLi4veWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZGF0ZS1waWNrZXItdmlldy1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci12aWV3LXBhbmVsXCI+XG5cblx0XHRcdDxkaXYgKGNsaWNrKT1cInN3aXRjaENhbGVuZGFyVmlldygpXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLXZpZXctcGFuZWwtZGF0ZVwiPlxuXHRcdFx0XHR7e2dldERpc3BsYXllZERhdGUoKX19XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd3NcIj5cblx0XHRcdFx0PGd1aS1hcnJvdy1pY29uIFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLkxFRlRcIlxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJzd2l0Y2hDYXJkKEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcuUFJFVilcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+XG5cdFx0XHRcdDwvZ3VpLWFycm93LWljb24+XG5cblx0XHRcdFx0PGd1aS1hcnJvdy1pY29uIFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLlJJR0hUXCJcblx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwic3dpdGNoQ2FyZChGYWJyaWNDYWxlbmRhckNhcmRWaWV3Lk5FWFQpXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPlxuXHRcdFx0XHQ8L2d1aS1hcnJvdy1pY29uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclZpZXdQYW5lbENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZmFicmljQ2FsZW5kYXJWaWV3OiBGYWJyaWNDYWxlbmRhclZpZXc7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZU1vbnRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YWN0aXZlWWVhcjogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0RmFicmljQ2FsZW5kYXJDYXJkVmlldyA9IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclZpZXdTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzU2VydmljZTogRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyWWVhcnM6IEZhYnJpY0RhdGVQaWNrZXJZZWFycykge1xuXG5cdH1cblxuXHRnZXREaXNwbGF5ZWREYXRlKCk6IHN0cmluZyB7XG5cdFx0c3dpdGNoICh0aGlzLmZhYnJpY0NhbGVuZGFyVmlldykge1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTOlxuXHRcdFx0XHRyZXR1cm4gYCR7bW9udGhzW3RoaXMuYWN0aXZlTW9udGhdfSAke3RoaXMuYWN0aXZlWWVhcn1gO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFM6XG5cdFx0XHRcdHJldHVybiBgJHttb250aHNbdGhpcy5hY3RpdmVNb250aF19ICR7dGhpcy5hY3RpdmVZZWFyfWA7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTOlxuXHRcdFx0XHRyZXR1cm4gYCR7dGhpcy5nZXREaXNwbGF5ZWRZZWFyUmFuZ2UoKX1gO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdH1cblxuXHRzd2l0Y2hDYWxlbmRhclZpZXcoKTogdm9pZCB7XG5cdFx0c3dpdGNoICh0aGlzLmZhYnJpY0NhbGVuZGFyVmlldykge1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlMpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHR0aGlzLmNhbGVuZGFyVmlld1NlcnZpY2Uuc3dpdGNoVmlldyhGYWJyaWNDYWxlbmRhclZpZXcuREFZUyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0c3dpdGNoQ2FyZChjYXJkVmlldzogRmFicmljQ2FsZW5kYXJDYXJkVmlldyk6IHZvaWQge1xuXHRcdGNvbnN0IG5leHQgPSBjYXJkVmlldyA9PT0gRmFicmljQ2FsZW5kYXJDYXJkVmlldy5ORVhULFxuXHRcdFx0aW5jID0gbmV4dCA/IDEgOiAtMSxcblx0XHRcdHNlbGVjdGVkWWVhciA9IHRoaXMuYWN0aXZlWWVhciArIGluYyxcblx0XHRcdHllYXJzID0gbmV4dCA/XG5cdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclllYXJzLm5leHRZZWFyUmFuZ2UodGhpcy5hY3RpdmVZZWFyKVxuXHRcdFx0XHQ6IHRoaXMuZGF0ZVBpY2tlclllYXJzLnByZXZZZWFyUmFuZ2UodGhpcy5hY3RpdmVZZWFyKTtcblxuXHRcdHN3aXRjaCAodGhpcy5mYWJyaWNDYWxlbmRhclZpZXcpIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuREFZUzpcblx0XHRcdFx0dGhpcy5oYW5kbGVNb250aENoYW5nZShuZXh0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUzpcblx0XHRcdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Uuc2VsZWN0WWVhcihzZWxlY3RlZFllYXIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlM6XG5cdFx0XHRcdHRoaXMuZGF0ZVBpY2tlclllYXJzU2VydmljZS5uZXh0KHllYXJzKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGdldERpc3BsYXllZFllYXJSYW5nZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnllYXJzWzBdWzBdLnRvU3RyaW5nKCkgKyAnLScgKyB0aGlzLnllYXJzWzRdW3RoaXMueWVhcnNbNF0ubGVuZ3RoIC0gMV0udG9TdHJpbmcoKTtcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlTW9udGhDaGFuZ2UobmV4dDogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChuZXh0KSB7XG5cdFx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5uZXh0TW9udGgodGhpcy5hY3RpdmVZZWFyLCB0aGlzLmFjdGl2ZU1vbnRoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jYWxlbmRhclNlcnZpY2UucHJldk1vbnRoKHRoaXMuYWN0aXZlWWVhciwgdGhpcy5hY3RpdmVNb250aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=