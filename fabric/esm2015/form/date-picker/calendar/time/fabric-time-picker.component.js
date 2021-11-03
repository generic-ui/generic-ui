import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricTimeValues } from '../../models/fabric-time-values';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../fabric-date-picker.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../../general/button/button/button.component";
import * as i5 from "../../../../common/icons/arrow-icon/fabric-arrow-icon.component";
import * as i6 from "../../../input/input.component";
function FabricTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeTimeItem("hours", ctx_r3.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 6);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_1_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeTimeItem("hours", -ctx_r5.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r0.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r0.Direction.BOTTOM);
} }
function FabricTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.changeTimeItem("minutes", ctx_r6.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 7);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_2_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeTimeItem("minutes", -ctx_r8.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r1.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r1.Direction.BOTTOM);
} }
function FabricTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.changeTimeItem("seconds", ctx_r9.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "gui-arrow-icon", 5);
    i0.ɵɵlistener("click", function FabricTimePickerComponent_div_3_Template_gui_arrow_icon_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.changeTimeItem("seconds", -ctx_r11.steps); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("direction", ctx_r2.Direction.TOP);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("direction", ctx_r2.Direction.BOTTOM);
} }
export class FabricTimePickerComponent extends FabricReactive {
    constructor(formBuilder, datePickerService) {
        super();
        this.formBuilder = formBuilder;
        this.datePickerService = datePickerService;
        this.steps = 1;
        this.Direction = Direction;
        this.FabricDatePickerComposition = FabricDatePickerComposition;
        this.form = this.formBuilder.group({
            hours: [''],
            minutes: [''],
            seconds: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes.selectedDate) {
            if (this.selectedDate) {
            }
        }
    }
    ngOnInit() {
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
            this.form
                .controls['hours']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((hour) => {
                const minHour = this.isMeridian() ? 1 : 0, maxHour = this.isMeridian() ? 12 : 23;
                if (hour > maxHour || hour < minHour) {
                    this.form.controls['hours'].setValue(minHour);
                }
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
            this.form
                .controls['minutes']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((value) => {
                this.controlFormItemValue(value, 'minutes', 'hours');
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
            this.form
                .controls['seconds']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((value) => {
                this.controlFormItemValue(value, 'seconds', 'minutes');
                this.changeSelectedDate();
            });
        }
        this.setTimeFromSelectedDate();
    }
    changeTimeItem(formControlName, steps) {
        const value = this.form.controls[formControlName].value + steps;
        this.form.controls[formControlName].setValue(value);
    }
    changeSelectedDateTime() {
        this.datePickerService.next();
    }
    isActive(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    isMeridian() {
        return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
    }
    isOnlyTimePicker() {
        return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
    }
    changeSelectedDate() {
        const hours = this.form.controls['hours'].value, minutes = this.form.controls['minutes'].value, seconds = this.form.controls['seconds'].value, timeValues = new FabricTimeValues(hours, minutes, seconds);
        this.datePickerService.changeTime(timeValues, this.selectedDate);
    }
    controlFormItemValue(value, observedFormControlName, incFormControlName) {
        if (value > 59) {
            const timeItemValue = this.form.controls[incFormControlName].value, incTimeItemValue = timeItemValue + 1;
            this.form.controls[incFormControlName].setValue(incTimeItemValue);
            this.form.controls[observedFormControlName].setValue(0o0);
        }
        else if (value < 0) {
            this.form.controls[observedFormControlName].setValue(0);
        }
    }
    setTimeFromSelectedDate() {
        const hours = this.selectedDate.getHours(), minutes = this.selectedDate.getMinutes(), seconds = this.selectedDate.getSeconds();
        this.form.controls['hours'].setValue(hours);
        this.form.controls['minutes'].setValue(minutes);
        this.form.controls['seconds'].setValue(seconds);
    }
}
FabricTimePickerComponent.ɵfac = function FabricTimePickerComponent_Factory(t) { return new (t || FabricTimePickerComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.FabricDatePickerService)); };
FabricTimePickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricTimePickerComponent, selectors: [["gui-time-picker"]], hostVars: 2, hostBindings: function FabricTimePickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("only-time-picker", ctx.isOnlyTimePicker());
    } }, inputs: { selectedDate: "selectedDate", datePickerComposition: "datePickerComposition" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["class", "gui-time-picker-item", 4, "ngIf"], [1, "gui-time-picker-button-wrapper", 3, "click"], ["gui-button", "", 3, "outline"], [1, "gui-time-picker-item"], [1, "gui-date-picker-arrow", 3, "direction", "click"], ["formControlName", "hours", "gui-input", "", "maxlength", "2"], ["formControlName", "minutes", "gui-input", "", "maxlength", "2", "type", "number"], ["formControlName", "seconds", "gui-input", "", "maxlength", "2", "type", "number"]], template: function FabricTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, FabricTimePickerComponent_div_1_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(2, FabricTimePickerComponent_div_2_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(3, FabricTimePickerComponent_div_3_Template, 4, 2, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵlistener("click", function FabricTimePickerComponent_Template_div_click_4_listener() { return ctx.changeSelectedDateTime(); });
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵtext(6, " Ok ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_HOURS));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_MINUTES));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActive(ctx.datePickerComposition, ctx.FabricDatePickerComposition.TIME_PICKER_SECONDS));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("outline", true);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgIf, i4.FabricButtonComponent, i5.FabricArrowIconComponent, i1.DefaultValueAccessor, i6.FabricInputComponent, i1.NgControlStatus, i1.FormControlName, i1.MaxLengthValidator, i1.NumberValueAccessor], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-time-picker',
                templateUrl: './fabric-time-picker.component.html',
                host: {
                    '[class.only-time-picker]': 'isOnlyTimePicker()'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.FabricDatePickerService }]; }, { selectedDate: [{
            type: Input
        }], datePickerComposition: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3RpbWUvZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3RpbWUvZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7O0lDSnpGLDhCQUMrQjtJQUM5Qix5Q0FFa0M7SUFGbEIsb01BQXdCLE9BQU8sbUJBQVM7SUFFdEIsaUJBQWlCO0lBRW5ELDJCQUVrQjtJQUVsQix5Q0FFa0M7SUFGbEIsb01BQXdCLE9BQU8sb0JBQVU7SUFFdkIsaUJBQWlCO0lBQ3BELGlCQUFNOzs7SUFWRCxlQUEyQjtJQUEzQixnREFBMkI7SUFRM0IsZUFBOEI7SUFBOUIsbURBQThCOzs7O0lBSW5DLDhCQUMrQjtJQUM5Qix5Q0FFa0M7SUFGbEIsb01BQXdCLFNBQVMsbUJBQVM7SUFFeEIsaUJBQWlCO0lBRW5ELDJCQUdrQjtJQUVsQix5Q0FFa0M7SUFGbEIsb01BQXdCLFNBQVMs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dXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1RpbWVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10aW1lLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5vbmx5LXRpbWUtcGlja2VyXSc6ICdpc09ubHlUaW1lUGlja2VyKCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRzdGVwczogbnVtYmVyID0gMTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiA9IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6IFsnJ10sXG5cdFx0XHRtaW51dGVzOiBbJyddLFxuXHRcdFx0c2Vjb25kczogWycnXVxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUykpIHtcblx0XHRcdHRoaXMuZm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ2hvdXJzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChob3VyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtaW5Ib3VyID0gdGhpcy5pc01lcmlkaWFuKCkgPyAxIDogMCxcblx0XHRcdFx0XHRcdG1heEhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEyIDogMjM7XG5cblx0XHRcdFx0XHRpZiAoaG91ciA+IG1heEhvdXIgfHwgaG91ciA8IG1pbkhvdXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS5zZXRWYWx1ZShtaW5Ib3VyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snbWludXRlcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdtaW51dGVzJywgJ2hvdXJzJyk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snc2Vjb25kcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdzZWNvbmRzJywgJ21pbnV0ZXMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRUaW1lRnJvbVNlbGVjdGVkRGF0ZSgpO1xuXHR9XG5cblx0Y2hhbmdlVGltZUl0ZW0oZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHN0ZXBzOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdLnZhbHVlICsgc3RlcHM7XG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0Y2hhbmdlU2VsZWN0ZWREYXRlVGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm5leHQoKTtcblx0fVxuXG5cdGlzQWN0aXZlKGFjdGl2ZUNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24sIGNoZWNrZWRDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhKGFjdGl2ZUNvbXBvc2l0aW9uICYgY2hlY2tlZENvbXBvc2l0aW9uKTtcblx0fVxuXG5cdGlzTWVyaWRpYW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTik7XG5cdH1cblxuXHRpc09ubHlUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uICYgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnZhbHVlLFxuXHRcdFx0bWludXRlcyA9IHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnZhbHVlLFxuXHRcdFx0c2Vjb25kcyA9IHRoaXMuZm9ybS5jb250cm9sc1snc2Vjb25kcyddLnZhbHVlLFxuXHRcdFx0dGltZVZhbHVlcyA9IG5ldyBGYWJyaWNUaW1lVmFsdWVzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuY2hhbmdlVGltZSh0aW1lVmFsdWVzLCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnRyb2xGb3JtSXRlbVZhbHVlKHZhbHVlOiBudW1iZXIsIG9ic2VydmVkRm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIGluY0Zvcm1Db250cm9sTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlID4gNTkpIHtcblx0XHRcdGNvbnN0IHRpbWVJdGVtVmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS52YWx1ZSxcblx0XHRcdFx0aW5jVGltZUl0ZW1WYWx1ZSA9IHRpbWVJdGVtVmFsdWUgKyAxO1xuXG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZShpbmNUaW1lSXRlbVZhbHVlKTtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tvYnNlcnZlZEZvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoMG8wKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW29ic2VydmVkRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSgwKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0SG91cnMoKSxcblx0XHRcdG1pbnV0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNaW51dGVzKCksXG5cdFx0XHRzZWNvbmRzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0U2Vjb25kcygpO1xuXG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKGhvdXJzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZXMnXS5zZXRWYWx1ZShtaW51dGVzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZHMnXS5zZXRWYWx1ZShzZWNvbmRzKTtcblx0fVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG5cblx0PGRpdiAqbmdJZj1cImlzQWN0aXZlKGRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTKVwiXG5cdFx0IGNsYXNzPVwiZ3VpLXRpbWUtcGlja2VyLWl0ZW1cIj5cblx0XHQ8Z3VpLWFycm93LWljb24gKGNsaWNrKT1cImNoYW5nZVRpbWVJdGVtKCdob3VycycsIHN0ZXBzKVwiXG5cdFx0XHRcdFx0XHRbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5UT1BcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj48L2d1aS1hcnJvdy1pY29uPlxuXG5cdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cImhvdXJzXCJcblx0XHRcdCAgIGd1aS1pbnB1dFxuXHRcdFx0ICAgbWF4bGVuZ3RoPVwiMlwiPlxuXG5cdFx0PGd1aS1hcnJvdy1pY29uIChjbGljayk9XCJjaGFuZ2VUaW1lSXRlbSgnaG91cnMnLCAtc3RlcHMpXCJcblx0XHRcdFx0XHRcdFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLkJPVFRPTVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPjwvZ3VpLWFycm93LWljb24+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKm5nSWY9XCJpc0FjdGl2ZShkYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTKVwiXG5cdFx0IGNsYXNzPVwiZ3VpLXRpbWUtcGlja2VyLWl0ZW1cIj5cblx0XHQ8Z3VpLWFycm93LWljb24gKGNsaWNrKT1cImNoYW5nZVRpbWVJdGVtKCdtaW51dGVzJywgc3RlcHMpXCJcblx0XHRcdFx0XHRcdFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLlRPUFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPjwvZ3VpLWFycm93LWljb24+XG5cblx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibWludXRlc1wiXG5cdFx0XHQgICBndWktaW5wdXRcblx0XHRcdCAgIG1heGxlbmd0aD1cIjJcIlxuXHRcdFx0ICAgdHlwZT1cIm51bWJlclwiPlxuXG5cdFx0PGd1aS1hcnJvdy1pY29uIChjbGljayk9XCJjaGFuZ2VUaW1lSXRlbSgnbWludXRlcycsIC1zdGVwcylcIlxuXHRcdFx0XHRcdFx0W2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uQk9UVE9NXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+PC9ndWktYXJyb3ctaWNvbj5cblx0PC9kaXY+XG5cblx0PGRpdiAqbmdJZj1cImlzQWN0aXZlKGRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX1NFQ09ORFMpXCJcblx0XHQgY2xhc3M9XCJndWktdGltZS1waWNrZXItaXRlbVwiPlxuXHRcdDxndWktYXJyb3ctaWNvbiAoY2xpY2spPVwiY2hhbmdlVGltZUl0ZW0oJ3NlY29uZHMnLCBzdGVwcylcIlxuXHRcdFx0XHRcdFx0W2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uVE9QXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+PC9ndWktYXJyb3ctaWNvbj5cblxuXHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRzXCJcblx0XHRcdCAgIGd1aS1pbnB1dFxuXHRcdFx0ICAgbWF4bGVuZ3RoPVwiMlwiXG5cdFx0XHQgICB0eXBlPVwibnVtYmVyXCI+XG5cblx0XHQ8Z3VpLWFycm93LWljb24gKGNsaWNrKT1cImNoYW5nZVRpbWVJdGVtKCdzZWNvbmRzJywgLXN0ZXBzKVwiXG5cdFx0XHRcdFx0XHRbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5CT1RUT01cIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj48L2d1aS1hcnJvdy1pY29uPlxuXHQ8L2Rpdj5cblxuPC9mb3JtPlxuXG48ZGl2IChjbGljayk9XCJjaGFuZ2VTZWxlY3RlZERhdGVUaW1lKClcIlxuXHQgY2xhc3M9XCJndWktdGltZS1waWNrZXItYnV0dG9uLXdyYXBwZXJcIj5cblx0PGJ1dHRvbiBbb3V0bGluZV09XCJ0cnVlXCIgZ3VpLWJ1dHRvbj5cblx0XHRPa1xuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuIl19