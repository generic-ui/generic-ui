import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { monthsPerQuarters } from '../../../data/months-per-quarters';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
import * as i0 from "@angular/core";
import * as i1 from "../../fabric-date-picker-calendar.service";
import * as i2 from "../../fabric-date-picker-calendar-view.service";
import * as i3 from "@angular/common";
function FabricDatePickerMonthsViewComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function FabricDatePickerMonthsViewComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const month_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.selectMonth(month_r3.nr); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-month", ctx_r2.isMonth(ctx_r2.currentDay, month_r3.nr))("gui-date-picker-selected-month", ctx_r2.isMonth(ctx_r2.selectedDate, month_r3.nr));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r3.name, " ");
} }
function FabricDatePickerMonthsViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_div_1_Template, 2, 5, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quarter_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", quarter_r1);
} }
export class FabricDatePickerMonthsViewComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
        this.monthsPerQuarters = monthsPerQuarters;
    }
    isMonth(date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    }
    selectMonth(month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    }
}
FabricDatePickerMonthsViewComponent.ɵfac = function FabricDatePickerMonthsViewComponent_Factory(t) { return new (t || FabricDatePickerMonthsViewComponent)(i0.ɵɵdirectiveInject(i1.FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(i2.FabricDatePickerCalendarViewService)); };
FabricDatePickerMonthsViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerMonthsViewComponent, selectors: [["gui-date-picker-months-view"]], inputs: { selectedDate: "selectedDate", activeYear: "activeYear" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-3", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-3"], ["class", "gui-date-picker-cell gui-date-picker-month", 3, "gui-date-picker-current-month", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-month", 3, "click"]], template: function FabricDatePickerMonthsViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricDatePickerMonthsViewComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.monthsPerQuarters);
    } }, directives: [i3.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerMonthsViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-months-view',
                templateUrl: 'fabric-date-picker-months-view.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FabricDatePickerCalendarService }, { type: i2.FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
            type: Input
        }], activeYear: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcvbW9udGhzL2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L21vbnRocy9mYWJyaWMtZGF0ZS1waWNrZXItbW9udGhzLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7O0lDRm5GLDhCQUlxRDtJQUpoRCxtUkFBK0I7SUFLbkMsWUFDRDtJQUFBLGlCQUFNOzs7O0lBSkosK0ZBQXFFLG9GQUFBO0lBR3RFLGVBQ0Q7SUFEQyw4Q0FDRDs7O0lBUkQsOEJBQzJDO0lBQzFDLDBGQU1NO0lBQ1AsaUJBQU07OztJQU5lLGVBQVU7SUFBVixvQ0FBVTs7QURTaEMsTUFBTSxPQUFPLG1DQUFtQztJQVkvQyxZQUE2QixlQUFnRCxFQUN6RCxtQkFBd0Q7UUFEL0Msb0JBQWUsR0FBZixlQUFlLENBQWlDO1FBQ3pELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUM7UUFMNUUsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFFckIsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFJL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFVLEVBQUUsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7c0hBdkJXLG1DQUFtQztzRkFBbkMsbUNBQW1DO1FDYmhELDhCQUEyRjtRQUMxRixvRkFTTTtRQUNQLGlCQUFNOztRQVZvQixlQUFvQjtRQUFwQiwrQ0FBb0I7O3VGRFlqQyxtQ0FBbUM7Y0FOL0MsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQztvSUFJQSxZQUFZO2tCQURYLEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1vbnRoc1BlclF1YXJ0ZXJzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9tb250aHMtcGVyLXF1YXJ0ZXJzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNDYWxlbmRhclZpZXcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmFicmljLWNhbGVuZGFyLXZpZXcnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9kYXRlLXV0aWxzL2ZhYnJpYy1kYXRlLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLW1vbnRocy12aWV3Jyxcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtZGF0ZS1waWNrZXItbW9udGhzLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyTW9udGhzVmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZVllYXI6IG51bWJlcjtcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRyZWFkb25seSBtb250aHNQZXJRdWFydGVycyA9IG1vbnRoc1BlclF1YXJ0ZXJzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlKSB7XG5cdH1cblxuXHRpc01vbnRoKGRhdGU6IERhdGUsIG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRmFicmljRGF0ZVV0aWxzLmlzTW9udGgoZGF0ZSwgbW9udGgsIHRoaXMuYWN0aXZlWWVhcik7XG5cdH1cblxuXHRzZWxlY3RNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Uuc2VsZWN0TW9udGgobW9udGgpO1xuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTKTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtcm93cy1nYXAtOCBndWktcHktNiBndWktZGF0ZS1waWNrZXItdmlldy1ib3JkZXItdG9wXCI+XG5cdDxkaXYgKm5nRm9yPVwibGV0IHF1YXJ0ZXIgb2YgbW9udGhzUGVyUXVhcnRlcnNcIlxuXHRcdCBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtY29scy0zXCI+XG5cdFx0PGRpdiAoY2xpY2spPVwic2VsZWN0TW9udGgobW9udGgubnIpXCJcblx0XHRcdCAqbmdGb3I9XCJsZXQgbW9udGggb2YgcXVhcnRlclwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1jdXJyZW50LW1vbnRoXT1cImlzTW9udGgoY3VycmVudERheSwgbW9udGgubnIpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLXNlbGVjdGVkLW1vbnRoXT1cImlzTW9udGgoc2VsZWN0ZWREYXRlLCBtb250aC5ucilcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWNlbGwgZ3VpLWRhdGUtcGlja2VyLW1vbnRoXCI+XG5cdFx0XHR7e21vbnRoLm5hbWV9fVxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19