import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import * as i0 from "@angular/core";
import * as i1 from "../../fabric-date-picker-calendar.service";
import * as i2 from "../../fabric-date-picker-calendar-view.service";
import * as i3 from "@angular/common";
function FabricDatePickerYearsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function FabricDatePickerYearsComponent_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const year_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.selectYear(year_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-year", ctx_r2.isYear(ctx_r2.currentDay, year_r3))("gui-date-picker-selected-year", ctx_r2.isYear(ctx_r2.selectedDate, year_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", year_r3, " ");
} }
function FabricDatePickerYearsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_div_1_Template, 2, 5, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const yearsChunk_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", yearsChunk_r1);
} }
export class FabricDatePickerYearsComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.currentDay = new Date();
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
}
FabricDatePickerYearsComponent.ɵfac = function FabricDatePickerYearsComponent_Factory(t) { return new (t || FabricDatePickerYearsComponent)(i0.ɵɵdirectiveInject(i1.FabricDatePickerCalendarService), i0.ɵɵdirectiveInject(i2.FabricDatePickerCalendarViewService)); };
FabricDatePickerYearsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerYearsComponent, selectors: [["gui-date-picker-years-view"]], inputs: { selectedDate: "selectedDate", years: "years" }, decls: 2, vars: 1, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6", "gui-date-picker-view-border-top"], ["class", "gui-display-grid gui-grid-cols-5", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-5"], ["class", "gui-date-picker-cell gui-date-picker-year", 3, "gui-date-picker-current-year", "gui-date-picker-selected-year", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-year", 3, "click"]], template: function FabricDatePickerYearsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FabricDatePickerYearsComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.years);
    } }, directives: [i3.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerYearsComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-years-view',
                templateUrl: 'fabric-date-picker-years.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FabricDatePickerCalendarService }, { type: i2.FabricDatePickerCalendarViewService }]; }, { selectedDate: [{
            type: Input
        }], years: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0lDRXhFLDhCQUlvRDtJQUovQyx3UUFBMEI7SUFLOUIsWUFDRDtJQUFBLGlCQUFNOzs7O0lBSkoseUZBQStELDhFQUFBO0lBR2hFLGVBQ0Q7SUFEQyx3Q0FDRDs7O0lBUkQsOEJBQzJDO0lBQzFDLHFGQU1NO0lBQ1AsaUJBQU07OztJQU5jLGVBQWE7SUFBYix1Q0FBYTs7QURPbEMsTUFBTSxPQUFPLDhCQUE4QjtJQVUxQyxZQUE2QixlQUFnRCxFQUN6RCxtQkFBd0Q7UUFEL0Msb0JBQWUsR0FBZixlQUFlLENBQWlDO1FBQ3pELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUM7UUFINUUsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFJOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBWTtRQUM5QixJQUFJLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQztTQUNuQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7NEdBeEJXLDhCQUE4QjtpRkFBOUIsOEJBQThCO1FDWDNDLDhCQUEyRjtRQUMxRiwrRUFTTTtRQUNQLGlCQUFNOztRQVZ1QixlQUFRO1FBQVIsbUNBQVE7O3VGRFV4Qiw4QkFBOEI7Y0FOMUMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQztvSUFJQSxZQUFZO2tCQURYLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXllYXJzLXZpZXcnLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFyc0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyU2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclZpZXdTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSkge1xuXHR9XG5cblx0c2VsZWN0WWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RZZWFyKHllYXIpO1xuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5NT05USFMpO1xuXHR9XG5cblx0aXNZZWFyKGRhdGU6IERhdGUsIHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGlmIChkYXRlKSB7XG5cdFx0XHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktZGlzcGxheS1ncmlkIGd1aS1ncmlkLXJvd3MtZ2FwLTggZ3VpLXB5LTYgZ3VpLWRhdGUtcGlja2VyLXZpZXctYm9yZGVyLXRvcFwiPlxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCB5ZWFyc0NodW5rIG9mIHllYXJzXCJcblx0XHQgY2xhc3M9XCJndWktZGlzcGxheS1ncmlkIGd1aS1ncmlkLWNvbHMtNVwiPlxuXHRcdDxkaXYgKGNsaWNrKT1cInNlbGVjdFllYXIoeWVhcilcIlxuXHRcdFx0ICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHllYXJzQ2h1bmtcIlxuXHRcdFx0IFtjbGFzcy5ndWktZGF0ZS1waWNrZXItY3VycmVudC15ZWFyXT1cImlzWWVhcihjdXJyZW50RGF5LCB5ZWFyKVwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1zZWxlY3RlZC15ZWFyXT1cImlzWWVhcihzZWxlY3RlZERhdGUsIHllYXIpXCJcblx0XHRcdCBjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1jZWxsIGd1aS1kYXRlLXBpY2tlci15ZWFyXCI+XG5cdFx0XHR7e3llYXJ9fVxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19