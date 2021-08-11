/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricDatePickerService } from '../../fabric-date-picker.service';
import { FabricTimeValues } from '../../models/fabric-time-values';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
var FabricTimePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricTimePickerComponent, _super);
    function FabricTimePickerComponent(formBuilder, datePickerService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.datePickerService = datePickerService;
        _this.steps = 1;
        _this.Direction = Direction;
        _this.FabricDatePickerComposition = FabricDatePickerComposition;
        _this.form = _this.formBuilder.group({
            hours: '',
            minutes: '',
            seconds: ''
        });
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricTimePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectedDate) {
            if (this.selectedDate) {
            }
        }
    };
    /**
     * @return {?}
     */
    FabricTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
            this.form
                .controls['hours']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} hour
             * @return {?}
             */
            function (hour) {
                /** @type {?} */
                var minHour = _this.isMeridian() ? 1 : 0;
                /** @type {?} */
                var maxHour = _this.isMeridian() ? 12 : 23;
                if (hour > maxHour || hour < minHour) {
                    _this.form.controls['hours'].setValue(minHour);
                }
                _this.changeSelectedDate();
            }));
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
            this.form
                .controls['minutes']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.controlFormItemValue(value, 'minutes', 'hours');
                _this.changeSelectedDate();
            }));
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
            this.form
                .controls['seconds']
                .valueChanges
                .pipe(this.takeUntil())
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.controlFormItemValue(value, 'seconds', 'minutes');
                _this.changeSelectedDate();
            }));
        }
        this.setTimeFromSelectedDate();
    };
    /**
     * @param {?} formControlName
     * @param {?} steps
     * @return {?}
     */
    FabricTimePickerComponent.prototype.changeTimeItem = /**
     * @param {?} formControlName
     * @param {?} steps
     * @return {?}
     */
    function (formControlName, steps) {
        /** @type {?} */
        var value = this.form.controls[formControlName].value + steps;
        this.form.controls[formControlName].setValue(value);
    };
    /**
     * @return {?}
     */
    FabricTimePickerComponent.prototype.changeSelectedDateTime = /**
     * @return {?}
     */
    function () {
        this.datePickerService.next();
    };
    /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    FabricTimePickerComponent.prototype.isActive = /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    function (activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    };
    /**
     * @return {?}
     */
    FabricTimePickerComponent.prototype.isMeridian = /**
     * @return {?}
     */
    function () {
        return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
    };
    /**
     * @return {?}
     */
    FabricTimePickerComponent.prototype.isOnlyTimePicker = /**
     * @return {?}
     */
    function () {
        return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
    };
    /**
     * @private
     * @return {?}
     */
    FabricTimePickerComponent.prototype.changeSelectedDate = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hours = this.form.controls['hours'].value;
        /** @type {?} */
        var minutes = this.form.controls['minutes'].value;
        /** @type {?} */
        var seconds = this.form.controls['seconds'].value;
        /** @type {?} */
        var timeValues = new FabricTimeValues(hours, minutes, seconds);
        this.datePickerService.changeTime(timeValues, this.selectedDate);
    };
    /**
     * @private
     * @param {?} value
     * @param {?} observedFormControlName
     * @param {?} incFormControlName
     * @return {?}
     */
    FabricTimePickerComponent.prototype.controlFormItemValue = /**
     * @private
     * @param {?} value
     * @param {?} observedFormControlName
     * @param {?} incFormControlName
     * @return {?}
     */
    function (value, observedFormControlName, incFormControlName) {
        if (value > 59) {
            /** @type {?} */
            var timeItemValue = this.form.controls[incFormControlName].value;
            /** @type {?} */
            var incTimeItemValue = timeItemValue + 1;
            this.form.controls[incFormControlName].setValue(incTimeItemValue);
            this.form.controls[observedFormControlName].setValue(0);
        }
        else if (value < 0) {
            this.form.controls[observedFormControlName].setValue(0);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricTimePickerComponent.prototype.setTimeFromSelectedDate = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hours = this.selectedDate.getHours();
        /** @type {?} */
        var minutes = this.selectedDate.getMinutes();
        /** @type {?} */
        var seconds = this.selectedDate.getSeconds();
        this.form.controls['hours'].setValue(hours);
        this.form.controls['minutes'].setValue(minutes);
        this.form.controls['seconds'].setValue(seconds);
    };
    FabricTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-time-picker',
                    template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n",
                    host: {
                        '[class.only-time-picker]': 'isOnlyTimePicker()'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricTimePickerComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: FabricDatePickerService }
    ]; };
    FabricTimePickerComponent.propDecorators = {
        selectedDate: [{ type: Input }],
        datePickerComposition: [{ type: Input }]
    };
    return FabricTimePickerComponent;
}(FabricReactive));
export { FabricTimePickerComponent };
if (false) {
    /** @type {?} */
    FabricTimePickerComponent.prototype.selectedDate;
    /** @type {?} */
    FabricTimePickerComponent.prototype.datePickerComposition;
    /** @type {?} */
    FabricTimePickerComponent.prototype.steps;
    /** @type {?} */
    FabricTimePickerComponent.prototype.form;
    /** @type {?} */
    FabricTimePickerComponent.prototype.Direction;
    /** @type {?} */
    FabricTimePickerComponent.prototype.FabricDatePickerComposition;
    /**
     * @type {?}
     * @private
     */
    FabricTimePickerComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    FabricTimePickerComponent.prototype.datePickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdGltZS9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzFGO0lBUytDLHFEQUFjO0lBZ0I1RCxtQ0FBNkIsV0FBd0IsRUFDakMsaUJBQTBDO1FBRDlELFlBRUMsaUJBQU8sU0FNUDtRQVI0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBVDlELFdBQUssR0FBVyxDQUFDLENBQUM7UUFJbEIsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixpQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUt6RCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xDLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNYLENBQUMsQ0FBQzs7SUFDSixDQUFDOzs7OztJ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aURBQ21COztJQUVuQiwwREFDbUQ7O0lBRW5ELDBDQUFrQjs7SUFFbEIseUNBQWdCOztJQUVoQiw4Q0FBc0I7O0lBRXRCLGdFQUEwRDs7Ozs7SUFFOUMsZ0RBQXlDOzs7OztJQUNsRCxzREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljVGltZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtdGltZS12YWx1ZXMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRpbWUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5vbmx5LXRpbWUtcGlja2VyXSc6ICdpc09ubHlUaW1lUGlja2VyKCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRzdGVwczogbnVtYmVyID0gMTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiA9IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6ICcnLFxuXHRcdFx0bWludXRlczogJycsXG5cdFx0XHRzZWNvbmRzOiAnJ1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUykpIHtcblx0XHRcdHRoaXMuZm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ2hvdXJzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChob3VyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtaW5Ib3VyID0gdGhpcy5pc01lcmlkaWFuKCkgPyAxIDogMCxcblx0XHRcdFx0XHRcdG1heEhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEyIDogMjM7XG5cblx0XHRcdFx0XHRpZiAoaG91ciA+IG1heEhvdXIgfHwgaG91ciA8IG1pbkhvdXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS5zZXRWYWx1ZShtaW5Ib3VyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snbWludXRlcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdtaW51dGVzJywgJ2hvdXJzJyk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snc2Vjb25kcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdzZWNvbmRzJywgJ21pbnV0ZXMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRUaW1lRnJvbVNlbGVjdGVkRGF0ZSgpO1xuXHR9XG5cblx0Y2hhbmdlVGltZUl0ZW0oZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHN0ZXBzOiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdLnZhbHVlICsgc3RlcHM7XG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0Y2hhbmdlU2VsZWN0ZWREYXRlVGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm5leHQoKTtcblx0fVxuXG5cdGlzQWN0aXZlKGFjdGl2ZUNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24sIGNoZWNrZWRDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhKGFjdGl2ZUNvbXBvc2l0aW9uICYgY2hlY2tlZENvbXBvc2l0aW9uKTtcblx0fVxuXG5cdGlzTWVyaWRpYW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTik7XG5cdH1cblxuXHRpc09ubHlUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uICYgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnZhbHVlLFxuXHRcdFx0bWludXRlcyA9IHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnZhbHVlLFxuXHRcdFx0c2Vjb25kcyA9IHRoaXMuZm9ybS5jb250cm9sc1snc2Vjb25kcyddLnZhbHVlLFxuXHRcdFx0dGltZVZhbHVlcyA9IG5ldyBGYWJyaWNUaW1lVmFsdWVzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuY2hhbmdlVGltZSh0aW1lVmFsdWVzLCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnRyb2xGb3JtSXRlbVZhbHVlKHZhbHVlOiBudW1iZXIsIG9ic2VydmVkRm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIGluY0Zvcm1Db250cm9sTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlID4gNTkpIHtcblx0XHRcdGNvbnN0IHRpbWVJdGVtVmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS52YWx1ZSxcblx0XHRcdFx0aW5jVGltZUl0ZW1WYWx1ZSA9IHRpbWVJdGVtVmFsdWUgKyAxO1xuXG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbaW5jRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZShpbmNUaW1lSXRlbVZhbHVlKTtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tvYnNlcnZlZEZvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoMG8wKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW29ic2VydmVkRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSgwKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGhvdXJzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0SG91cnMoKSxcblx0XHRcdG1pbnV0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRNaW51dGVzKCksXG5cdFx0XHRzZWNvbmRzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0U2Vjb25kcygpO1xuXG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKGhvdXJzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZXMnXS5zZXRWYWx1ZShtaW51dGVzKTtcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZHMnXS5zZXRWYWx1ZShzZWNvbmRzKTtcblx0fVxufVxuIl19