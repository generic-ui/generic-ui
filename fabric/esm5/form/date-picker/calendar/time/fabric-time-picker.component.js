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
            hours: [''],
            minutes: [''],
            seconds: ['']
        });
        return _this;
    }
    /**
     * @return {?}
     */
    FabricTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setTimeFromSelectedDate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdGltZS9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzFGO0lBUytDLHFEQUFjO0lBZ0I1RCxtQ0FBNkIsV0FBd0IsRUFDakMsaUJBQTBDO1FBRDlELFlBRUMsaUJBQU8sU0FNUDtRQVI0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBVDlELFdBQUssR0FBVyxDQUFDLENBQUM7UUFJbEIsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixpQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUt6RCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQzs7SUFDSixDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO1FBQUEsaUJBdUNDO1FBdENBLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUM3RixJQUFJLENBQUMsSUFBSTtpQkFDUCxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixZQUFZO2lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3RCLFNBQVM7Ozs7WUFBQyxVQUFDLElBQVk7O29CQUNqQixPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUN4QyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBRXRDLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO29CQUNyQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzlDO2dCQUNELEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDL0YsSUFBSSxDQUFDLElBQUk7aUJBQ1AsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsWUFBWTtpQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUN0QixTQUFTOzs7O1lBQUMsVUFBQyxLQUFhO2dCQUN4QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUMvRixJQUFJLENBQUMsSUFBSTtpQkFDUCxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixZQUFZO2lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3RCLFNBQVM7Ozs7WUFBQyxVQUFDLEtBQWE7Z0JBQ3hCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsa0RBQWM7Ozs7O0lBQWQsVUFBZSxlQUF1QixFQUFFLEtBQWE7O1lBQzlDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELDBEQUFzQjs7O0lBQXRCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELDRDQUFROzs7OztJQUFSLFVBQVMsaUJBQThDLEVBQUUsa0JBQStDO1FBQ3ZHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsOENBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7SUFFRCxvREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUVPLHNEQUFrQjs7OztJQUExQjs7WUFDTyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSzs7WUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUs7O1lBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLOztZQUM3QyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUUzRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7Ozs7SUFFTyx3REFBb0I7Ozs7Ozs7SUFBNUIsVUFBNkIsS0FBYSxFQUFFLHVCQUErQixFQUFFLGtCQUEwQjtRQUN0RyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7O2dCQUNULGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUs7O2dCQUNqRSxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsQ0FBQztZQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUcsQ0FBQyxDQUFDO1NBQzFEO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0YsQ0FBQzs7Ozs7SUFFTywyREFBdUI7Ozs7SUFBL0I7O1lBQ08sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOztZQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7O1lBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkE5SEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHMrREFBZ0Q7b0JBQ2hELElBQUksRUFBRTt3QkFDTCwwQkFBMEIsRUFBRSxvQkFBb0I7cUJBQ2hEO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBaEJRLFdBQVc7Z0JBR1gsdUJBQXVCOzs7K0JBZ0I5QixLQUFLO3dDQUdMLEtBQUs7O0lBaUhQLGdDQUFDO0NBQUEsQUEvSEQsQ0FTK0MsY0FBYyxHQXNINUQ7U0F0SFkseUJBQXlCOzs7SUFFckMsaURBQ21COztJQUVuQiwwREFDbUQ7O0lBRW5ELDBDQUFrQjs7SUFFbEIseUNBQWdCOztJQUVoQiw4Q0FBc0I7O0lBRXRCLGdFQUEwRDs7Ozs7SUFFOUMsZ0RBQXlDOzs7OztJQUNsRCxzREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1RpbWVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10aW1lLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3Mub25seS10aW1lLXBpY2tlcl0nOiAnaXNPbmx5VGltZVBpY2tlcigpJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUaW1lUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGRhdGVQaWNrZXJDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uO1xuXG5cdHN0ZXBzOiBudW1iZXIgPSAxO1xuXG5cdGZvcm06IEZvcm1Hcm91cDtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uID0gRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRob3VyczogWycnXSxcblx0XHRcdG1pbnV0ZXM6IFsnJ10sXG5cdFx0XHRzZWNvbmRzOiBbJyddXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk7XG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUykpIHtcblx0XHRcdHRoaXMuZm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ2hvdXJzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChob3VyOiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtaW5Ib3VyID0gdGhpcy5pc01lcmlkaWFuKCkgPyAxIDogMCxcblx0XHRcdFx0XHRcdG1heEhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEyIDogMjM7XG5cblx0XHRcdFx0XHRpZiAoaG91ciA+IG1heEhvdXIgfHwgaG91ciA8IG1pbkhvdXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS5zZXRWYWx1ZShtaW5Ib3VyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snbWludXRlcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdtaW51dGVzJywgJ2hvdXJzJyk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snc2Vjb25kcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdzZWNvbmRzJywgJ21pbnV0ZXMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VUaW1lSXRlbShmb3JtQ29udHJvbE5hbWU6IHN0cmluZywgc3RlcHM6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0udmFsdWUgKyBzdGVwcztcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHRjaGFuZ2VTZWxlY3RlZERhdGVUaW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubmV4dCgpO1xuXHR9XG5cblx0aXNBY3RpdmUoYWN0aXZlQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiwgY2hlY2tlZENvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEoYWN0aXZlQ29tcG9zaXRpb24gJiBjaGVja2VkQ29tcG9zaXRpb24pO1xuXHR9XG5cblx0aXNNZXJpZGlhbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01FUklESUFOKTtcblx0fVxuXG5cdGlzT25seVRpbWVQaWNrZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24gJiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uREFURV9QSUNLRVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VTZWxlY3RlZERhdGUoKTogdm9pZCB7XG5cdFx0Y29uc3QgaG91cnMgPSB0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXJzJ10udmFsdWUsXG5cdFx0XHRtaW51dGVzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGVzJ10udmFsdWUsXG5cdFx0XHRzZWNvbmRzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmRzJ10udmFsdWUsXG5cdFx0XHR0aW1lVmFsdWVzID0gbmV3IEZhYnJpY1RpbWVWYWx1ZXMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5jaGFuZ2VUaW1lKHRpbWVWYWx1ZXMsIHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWU6IG51bWJlciwgb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWU6IHN0cmluZywgaW5jRm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgPiA1OSkge1xuXHRcdFx0Y29uc3QgdGltZUl0ZW1WYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1tpbmNGb3JtQ29udHJvbE5hbWVdLnZhbHVlLFxuXHRcdFx0XHRpbmNUaW1lSXRlbVZhbHVlID0gdGltZUl0ZW1WYWx1ZSArIDE7XG5cblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tpbmNGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKGluY1RpbWVJdGVtVmFsdWUpO1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW29ic2VydmVkRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSgwbzApO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKDApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0VGltZUZyb21TZWxlY3RlZERhdGUoKTogdm9pZCB7XG5cdFx0Y29uc3QgaG91cnMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRIb3VycygpLFxuXHRcdFx0bWludXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1pbnV0ZXMoKSxcblx0XHRcdHNlY29uZHMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRTZWNvbmRzKCk7XG5cblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXJzJ10uc2V0VmFsdWUoaG91cnMpO1xuXHRcdHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnNldFZhbHVlKG1pbnV0ZXMpO1xuXHRcdHRoaXMuZm9ybS5jb250cm9sc1snc2Vjb25kcyddLnNldFZhbHVlKHNlY29uZHMpO1xuXHR9XG59XG4iXX0=