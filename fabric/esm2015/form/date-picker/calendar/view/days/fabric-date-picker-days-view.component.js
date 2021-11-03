import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { daysOfTheWeek } from '../../../data/days-of-the-week';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../fabric-date-picker.service";
import * as i2 from "@angular/common";
function FabricDatePickerDaysViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayOfTheWeek_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(dayOfTheWeek_r2);
} }
function FabricDatePickerDaysViewComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function FabricDatePickerDaysViewComponent_div_3_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const day_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectDate(day_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("gui-date-picker-current-day", ctx_r4.isDate(ctx_r4.currentDay, day_r5))("gui-date-picker-selected-day", ctx_r4.isDate(ctx_r4.selectedDate, day_r5))("gui-date-picker-selected-month", ctx_r4.displayMonthDays(day_r5.getMonth()));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r5.getDate(), " ");
} }
function FabricDatePickerDaysViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, FabricDatePickerDaysViewComponent_div_3_div_1_Template, 2, 7, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", week_r3);
} }
export class FabricDatePickerDaysViewComponent {
    constructor(datePickerService) {
        this.datePickerService = datePickerService;
        this.daysOfTheWeek = daysOfTheWeek;
        this.currentDay = new Date();
    }
    selectDate(date) {
        this.datePickerService.dateSelected(date);
    }
    isDate(comparedDate, date) {
        return FabricDateUtils.areDatesSame(comparedDate, date);
    }
    displayMonthDays(month) {
        return month === this.activeMonth;
    }
}
FabricDatePickerDaysViewComponent.ɵfac = function FabricDatePickerDaysViewComponent_Factory(t) { return new (t || FabricDatePickerDaysViewComponent)(i0.ɵɵdirectiveInject(i1.FabricDatePickerService)); };
FabricDatePickerDaysViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricDatePickerDaysViewComponent, selectors: [["gui-date-picker-days-view"]], inputs: { selectedDate: "selectedDate", activeMonth: "activeMonth", weeks: "weeks" }, decls: 4, vars: 2, consts: [[1, "gui-display-grid", "gui-grid-rows-gap-8", "gui-py-6"], [1, "gui-display-grid", "gui-grid-cols-7", "gui-py-4", "gui-date-picker-header"], [4, "ngFor", "ngForOf"], ["class", "gui-display-grid gui-grid-cols-7", 4, "ngFor", "ngForOf"], [1, "gui-display-grid", "gui-grid-cols-7"], ["class", "gui-date-picker-cell gui-date-picker-day", 3, "gui-date-picker-current-day", "gui-date-picker-selected-day", "gui-date-picker-selected-month", "click", 4, "ngFor", "ngForOf"], [1, "gui-date-picker-cell", "gui-date-picker-day", 3, "click"]], template: function FabricDatePickerDaysViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, FabricDatePickerDaysViewComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FabricDatePickerDaysViewComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.daysOfTheWeek);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.weeks);
    } }, directives: [i2.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerDaysViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-date-picker-days-view',
                templateUrl: 'fabric-date-picker-days-view.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FabricDatePickerService }]; }, { selectedDate: [{
            type: Input
        }], activeMonth: [{
            type: Input
        }], weeks: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2RheXMvZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L2RheXMvZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7OztJQ0RuRiwyQkFBZ0Q7SUFBQSxZQUFnQjtJQUFBLGlCQUFNOzs7SUFBdEIsZUFBZ0I7SUFBaEIscUNBQWdCOzs7O0lBTWhFLDhCQUttRDtJQUw5Qyx5UUFBeUI7SUFNN0IsWUFDRDtJQUFBLGlCQUFNOzs7O0lBTEosdUZBQTZELDRFQUFBLDhFQUFBO0lBSTlELGVBQ0Q7SUFEQyxpREFDRDs7O0lBVkQsOEJBQzJDO0lBRTFDLHdGQU9NO0lBRVAsaUJBQU07OztJQVJhLGVBQU87SUFBUCxpQ0FBTzs7QURFM0IsTUFBTSxPQUFPLGlDQUFpQztJQWU3QyxZQUE2QixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUp2RSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUc5QixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQWtCLEVBQUUsSUFBVTtRQUNwQyxPQUFPLGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQzs7a0hBNUJXLGlDQUFpQztvRkFBakMsaUNBQWlDO1FDWjlDLDhCQUEyRDtRQUUxRCw4QkFBOEU7UUFDN0Usa0ZBQXNFO1FBQ3ZFLGlCQUFNO1FBRU4sa0ZBWU07UUFDUCxpQkFBTTs7UUFoQjBCLGVBQWdCO1FBQWhCLDJDQUFnQjtRQUd6QixlQUFRO1FBQVIsbUNBQVE7O3VGRE1sQixpQ0FBaUM7Y0FON0MsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzswRUFJQSxZQUFZO2tCQURYLEtBQUs7WUFJTixXQUFXO2tCQURWLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGF5c09mVGhlV2VlayB9IGZyb20gJy4uLy4uLy4uL2RhdGEvZGF5cy1vZi10aGUtd2Vlayc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9kYXRlLXV0aWxzL2ZhYnJpYy1kYXRlLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLWRheXMtdmlldycsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJEYXlzVmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZU1vbnRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2Vla3M6IEFycmF5PEFycmF5PERhdGU+PjtcblxuXHRkYXlzT2ZUaGVXZWVrID0gZGF5c09mVGhlV2VlaztcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSkge1xuXHR9XG5cblx0c2VsZWN0RGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5kYXRlU2VsZWN0ZWQoZGF0ZSk7XG5cdH1cblxuXHRpc0RhdGUoY29tcGFyZWREYXRlOiBEYXRlLCBkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIEZhYnJpY0RhdGVVdGlscy5hcmVEYXRlc1NhbWUoY29tcGFyZWREYXRlLCBkYXRlKTtcblx0fVxuXG5cdGRpc3BsYXlNb250aERheXMobW9udGg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb250aCA9PT0gdGhpcy5hY3RpdmVNb250aDtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtcm93cy1nYXAtOCBndWktcHktNlwiPlxuXG5cdDxkaXYgY2xhc3M9XCJndWktZGlzcGxheS1ncmlkIGd1aS1ncmlkLWNvbHMtNyBndWktcHktNCBndWktZGF0ZS1waWNrZXItaGVhZGVyXCI+XG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgZGF5T2ZUaGVXZWVrIG9mIGRheXNPZlRoZVdlZWtcIj57e2RheU9mVGhlV2Vla319PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIlxuXHRcdCBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtY29scy03XCI+XG5cblx0XHQ8ZGl2IChjbGljayk9XCJzZWxlY3REYXRlKGRheSlcIlxuXHRcdFx0ICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla1wiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1jdXJyZW50LWRheV09XCJpc0RhdGUoY3VycmVudERheSwgZGF5KVwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1zZWxlY3RlZC1kYXldPVwiaXNEYXRlKHNlbGVjdGVkRGF0ZSwgZGF5KVwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1zZWxlY3RlZC1tb250aF09XCJkaXNwbGF5TW9udGhEYXlzKGRheS5nZXRNb250aCgpKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktZGF0ZS1waWNrZXItY2VsbCBndWktZGF0ZS1waWNrZXItZGF5XCI+XG5cdFx0XHR7e2RheS5nZXREYXRlKCl9fVxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=