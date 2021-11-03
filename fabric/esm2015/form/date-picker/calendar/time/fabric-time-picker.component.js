import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricDatePickerService } from '../../fabric-date-picker.service';
import { FabricTimeValues } from '../../models/fabric-time-values';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
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
FabricTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-time-picker',
                template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n",
                host: {
                    '[class.only-time-picker]': 'isOnlyTimePicker()'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FabricTimePickerComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: FabricDatePickerService }
];
FabricTimePickerComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    datePickerComposition: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3RpbWUvZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFZMUYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFnQjVELFlBQTZCLFdBQXdCLEVBQ2pDLGlCQUEwQztRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBVDlELFVBQUssR0FBVyxDQUFDLENBQUM7UUFJbEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixnQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUt6RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDLEVBQUUs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LFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxRDthQUFNLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDtJQUNGLENBQUM7SUFFTyx1QkFBdUI7UUFDOUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQXJJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscytEQUFrRDtnQkFDbEQsSUFBSSxFQUFFO29CQUNMLDBCQUEwQixFQUFFLG9CQUFvQjtpQkFDaEQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7WUFoQlEsV0FBVztZQUdYLHVCQUF1Qjs7OzJCQWdCOUIsS0FBSztvQ0FHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1RpbWVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10aW1lLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5vbmx5LXRpbWUtcGlja2VyXSc6ICdpc09ubHlUaW1lUGlja2VyKCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRzdGVwczogbnVtYmVyID0gMTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiA9IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6IFsnJ10sXG5cdFx0XHRtaW51dGVzOiBbJyddLFxuXHRcdFx0c2Vjb25kczogWycnXVxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUykpIHtcblx0XHRcdHRoaXMuZm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ2hvdXJzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChob3VyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtaW5Ib3VyID0gdGhpcy5pc01lcmlkaWFuKCkgPyAxIDogMCxcblx0XHRcdFx0XHRcdG1heEhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEyIDogMjM7XG5cblx0XHRcdFx0XHRpZiAoaG91ciA+IG1heEhvdXIgfHwgaG91ciA8IG1pbkhvdXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS5zZXRWYWx1ZShtaW5Ib3VyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snbWludXRlcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdtaW51dGVzJywgJ2hvdXJzJyk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snc2Vjb25kcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdzZWNvbmRzJywgJ21pbnV0ZXMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRUaW1lRnJvbVNlbGVjdGVkRGF0ZSgpO1xuXHR9XG5cblx0Y2hhbmdlVGltZUl0ZW0oZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHN0ZXBzOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdLnZhbHVlICsgc3RlcHM7XG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0Y2hhbmdlU2VsZWN0ZWREYXRlVGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm5leHQoKTtcblx0fVxuXG5cdGlzQWN0aXZlKGFjdGl2ZUNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24sIGNoZWNrZWRDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhKGFjdGl2ZUNvbXBvc2l0aW9uICYgY2hlY2tlZENvbXBvc2l0aW9uKTtcblx0fVxuXG5cdGlzTWVyaWRpYW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTik7XG5cdH1cblxuXHRpc09ubHlUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uICYgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnZhbHVlLFxuXHRcdFx0bWludXRlcyA9IHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnZhbHVlLFxuXHRcdFx0c2Vjb25kcyA9IHRoaXMuZm9ybS5jb250cm9sc1snc2Vjb25kcyddLnZhbHVlLFxuXHRcdFx0dGltZVZhbHVlcyA9IG5ldyBGYWJyaWNUaW1lVmFsdWVzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuY2hhbmdlVGltZSh0aW1lVmFsdWVzLCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnRyb2xGb3JtSXRlbVZhbHVlKHZhbHVlOiBudW1iZXIsIG9ic2VydmVkRm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIGluY0Zvcm1Db250cm9sTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlID4gNTkpIHtcblx0XHRcdGNvbnN0IHRpbWVJdGVtVmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS52YWx1ZSxcblx0XHRcdFx0aW5jVGltZUl0ZW1WYWx1ZSA9IHRpbWVJdGVtVmFsdWUgKyAxO1xuXG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZShpbmNUaW1lSXRlbVZhbHVlKTtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tvYnNlcnZlZEZvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoMG8wKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW29ic2VydmVkRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSgwKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0SG91cnMoKSxcblx0XHRcdG1pbnV0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNaW51dGVzKCksXG5cdFx0XHRzZWNvbmRzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0U2Vjb25kcygpO1xuXG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKGhvdXJzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZXMnXS5zZXRWYWx1ZShtaW51dGVzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZHMnXS5zZXRWYWx1ZShzZWNvbmRzKTtcblx0fVxufVxuIl19