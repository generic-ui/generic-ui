import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../models/fabric-calendar-view';
import { FabricCalendarCardView } from '../../models/fabric-calendar-card-view';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { months } from '../../data/months';
import * as i0 from "@angular/core";
import * as i1 from "../fabric-date-picker-calendar-view.service";
import * as i2 from "../fabric-date-picker-calendar.service";
import * as i3 from "../years/fabric-date-picker-years.service";
import * as i4 from "../years/fabric-date-picker.years";
import * as i5 from "../../../../common/icons/arrow-icon/fabric-arrow-icon.component";
export class FabricDatePickerViewPanelComponent {
    constructor(calendarViewService, calendarService, datePickerYearsService, datePickerYears) {
        this.calendarViewService = calendarViewService;
        this.calendarService = calendarService;
        this.datePickerYearsService = datePickerYearsService;
        this.datePickerYears = datePickerYears;
        this.Direction = Direction;
        this.FabricCalendarCardView = FabricCalendarCardView;
    }
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
    switchCard(cardView) {
        const next = cardView === FabricCalendarCardView.NEXT, inc = next ? 1 : -1, selectedYear = this.activeYear + inc, years = next ?
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
    getDisplayedYearRange() {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    }
    handleMonthChange(next) {
        if (next) {
            this.calendarService.nextMonth(this.activeYear, this.activeMonth);
        }
        else {
            this.calendarService.prevMonth(this.activeYear, this.activeMonth);
        }
    }
}
FabricDatePickerViewPanelComponent.ɵfac = function FabricDatePickerViewPanelComponent_Factory(t) { return new (t || FabricDatePickerViewPanelComponent)(i0.ɵɵdirectiveInject(i1.FabricDatePickerCalendarViewService), i0.ɵɵdirectiveInject(i2.FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(i3.FabricDatePickerYearsService), i0.ɵɵdirectiveInject(i4.FabricDatePickerYears)); };
FabricDatePickerViewPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerViewPanelComponent, selectors: [["gui-date-picker-view-panel"]], inputs: { fabricCalendarView: "fabricCalendarView", selectedDate: "selectedDate", activeMonth: "activeMonth", activeYear: "activeYear", years: "years" }, decls: 6, vars: 3, consts: [[1, "gui-date-picker-view-panel"], [1, "gui-date-picker-view-panel-date", 3, "click"], [1, "gui-date-picker-arrows"], [1, "gui-date-picker-arrow", 3, "direction", "click"]], template: function FabricDatePickerViewPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_div_click_1_listener() { return ctx.switchCalendarView(); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "gui-arrow-icon", 3);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_4_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.PREV); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "gui-arrow-icon", 3);
        i0.ɵɵlistener("click", function FabricDatePickerViewPanelComponent_Template_gui_arrow_icon_click_5_listener() { return ctx.switchCard(ctx.FabricCalendarCardView.NEXT); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.getDisplayedDate(), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("direction", ctx.Direction.LEFT);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("direction", ctx.Direction.RIGHT);
    } }, directives: [i5.FabricArrowIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerViewPanelComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.FabricDatePickerCalendarViewService }, { type: i2.FabricDatePickerCalendarService }, { type: i3.FabricDatePickerYearsService }, { type: i4.FabricDatePickerYears }]; }, { fabricCalendarView: [{
            type: Input
        }], selectedDate: [{
            type: Input
        }], activeMonth: [{
            type: Input
        }], activeYear: [{
            type: Input
        }], years: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdmlldy9mYWJyaWMtZGF0ZS1waWNrZXItdmlldy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztBQStCM0MsTUFBTSxPQUFPLGtDQUFrQztJQXFCOUMsWUFBNkIsbUJBQXdELEVBQ2pFLGVBQWdELEVBQ2hELHNCQUFvRCxFQUNwRCxlQUFzQztRQUg3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFDO1FBQ2pFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQztRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVAxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBT2hELENBQUM7SUFFRCxnQkFBZ0I7UUFDZixRQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUVoQyxLQUFLLGtCQUFrQixDQUFDLElBQUk7Z0JBQzNCLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FB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MEM7UUFEckMsNEdBQVMsd0JBQW9CLElBQUM7UUFFbEMsWUFDRDtRQUFBLGlCQUFNO1FBRU4sOEJBQW9DO1FBQ25DLHlDQUVrQztRQUQ5Qix1SEFBUywrQ0FBdUMsSUFBQztRQUVyRCxpQkFBaUI7UUFFakIseUNBRWtDO1FBRDlCLHVIQUFTLCtDQUF1QyxJQUFDO1FBRXJELGlCQUFpQjtRQUNsQixpQkFBTTtRQUVQLGlCQUFNOztRQWZKLGVBQ0Q7UUFEQyx1REFDRDtRQUdpQixlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFLNUIsZUFBNkI7UUFBN0IsK0NBQTZCOzt1RkFXcEMsa0NBQWtDO2NBM0I5QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQlQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DO21OQUlBLGtCQUFrQjtrQkFEakIsS0FBSztZQUlOLFlBQVk7a0JBRFgsS0FBSztZQUlOLFdBQVc7a0JBRFYsS0FBSztZQUlOLFVBQVU7a0JBRFQsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci12aWV3JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhckNhcmRWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci1jYXJkLXZpZXcnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4uL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi8uLi9kYXRhL21vbnRocyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB9IGZyb20gJy4uL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXZpZXctcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItdmlldy1wYW5lbFwiPlxuXG5cdFx0XHQ8ZGl2IChjbGljayk9XCJzd2l0Y2hDYWxlbmRhclZpZXcoKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci12aWV3LXBhbmVsLWRhdGVcIj5cblx0XHRcdFx0e3tnZXREaXNwbGF5ZWREYXRlKCl9fVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dzXCI+XG5cdFx0XHRcdDxndWktYXJyb3ctaWNvbiBbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5MRUZUXCJcblx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwic3dpdGNoQ2FyZChGYWJyaWNDYWxlbmRhckNhcmRWaWV3LlBSRVYpXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPlxuXHRcdFx0XHQ8L2d1aS1hcnJvdy1pY29uPlxuXG5cdFx0XHRcdDxndWktYXJyb3ctaWNvbiBbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5SSUdIVFwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cInN3aXRjaENhcmQoRmFicmljQ2FsZW5kYXJDYXJkVmlldy5ORVhUKVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj5cblx0XHRcdFx0PC9ndWktYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZhYnJpY0NhbGVuZGFyVmlldzogRmFicmljQ2FsZW5kYXJWaWV3O1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRhY3RpdmVNb250aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZVllYXI6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR5ZWFyczogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcgPSBGYWJyaWNDYWxlbmRhckNhcmRWaWV3O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJZZWFyc1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMpIHtcblxuXHR9XG5cblx0Z2V0RGlzcGxheWVkRGF0ZSgpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAodGhpcy5mYWJyaWNDYWxlbmRhclZpZXcpIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuREFZUzpcblx0XHRcdFx0cmV0dXJuIGAke21vbnRoc1t0aGlzLmFjdGl2ZU1vbnRoXX0gJHt0aGlzLmFjdGl2ZVllYXJ9YDtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuTU9OVEhTOlxuXHRcdFx0XHRyZXR1cm4gYCR7bW9udGhzW3RoaXMuYWN0aXZlTW9udGhdfSAke3RoaXMuYWN0aXZlWWVhcn1gO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5ZRUFSUzpcblx0XHRcdFx0cmV0dXJuIGAke3RoaXMuZ2V0RGlzcGxheWVkWWVhclJhbmdlKCl9YDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHR9XG5cblx0c3dpdGNoQ2FsZW5kYXJWaWV3KCk6IHZvaWQge1xuXHRcdHN3aXRjaCAodGhpcy5mYWJyaWNDYWxlbmRhclZpZXcpIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuREFZUzpcblx0XHRcdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3Lk1PTlRIUzpcblx0XHRcdFx0dGhpcy5jYWxlbmRhclZpZXdTZXJ2aWNlLnN3aXRjaFZpZXcoRmFicmljQ2FsZW5kYXJWaWV3LkRBWVMpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNDYWxlbmRhclZpZXcuWUVBUlM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHN3aXRjaENhcmQoY2FyZFZpZXc6IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcpOiB2b2lkIHtcblx0XHRjb25zdCBuZXh0ID0gY2FyZFZpZXcgPT09IEZhYnJpY0NhbGVuZGFyQ2FyZFZpZXcuTkVYVCxcblx0XHRcdGluYyA9IG5leHQgPyAxIDogLTEsXG5cdFx0XHRzZWxlY3RlZFllYXIgPSB0aGlzLmFjdGl2ZVllYXIgKyBpbmMsXG5cdFx0XHR5ZWFycyA9IG5leHQgP1xuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJZZWFycy5uZXh0WWVhclJhbmdlKHRoaXMuYWN0aXZlWWVhcilcblx0XHRcdFx0OiB0aGlzLmRhdGVQaWNrZXJZZWFycy5wcmV2WWVhclJhbmdlKHRoaXMuYWN0aXZlWWVhcik7XG5cblx0XHRzd2l0Y2ggKHRoaXMuZmFicmljQ2FsZW5kYXJWaWV3KSB7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM6XG5cdFx0XHRcdHRoaXMuaGFuZGxlTW9udGhDaGFuZ2UobmV4dCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFM6XG5cdFx0XHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdFllYXIoc2VsZWN0ZWRZZWFyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljQ2FsZW5kYXJWaWV3LllFQVJTOlxuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJZZWFyc1NlcnZpY2UubmV4dCh5ZWFycyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRnZXREaXNwbGF5ZWRZZWFyUmFuZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy55ZWFyc1swXVswXS50b1N0cmluZygpICsgJy0nICsgdGhpcy55ZWFyc1s0XVt0aGlzLnllYXJzWzRdLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZU1vbnRoQ2hhbmdlKG5leHQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAobmV4dCkge1xuXHRcdFx0dGhpcy5jYWxlbmRhclNlcnZpY2UubmV4dE1vbnRoKHRoaXMuYWN0aXZlWWVhciwgdGhpcy5hY3RpdmVNb250aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnByZXZNb250aCh0aGlzLmFjdGl2ZVllYXIsIHRoaXMuYWN0aXZlTW9udGgpO1xuXHRcdH1cblx0fVxufVxuIl19