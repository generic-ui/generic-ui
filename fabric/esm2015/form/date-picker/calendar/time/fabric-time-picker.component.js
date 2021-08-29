/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricDatePickerService } from '../../fabric-date-picker.service';
import { FabricTimeValues } from '../../models/fabric-time-values';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
export class FabricTimePickerComponent extends FabricReactive {
    /**
     * @param {?} formBuilder
     * @param {?} datePickerService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
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
            (hour) => {
                /** @type {?} */
                const minHour = this.isMeridian() ? 1 : 0;
                /** @type {?} */
                const maxHour = this.isMeridian() ? 12 : 23;
                if (hour > maxHour || hour < minHour) {
                    this.form.controls['hours'].setValue(minHour);
                }
                this.changeSelectedDate();
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
            (value) => {
                this.controlFormItemValue(value, 'minutes', 'hours');
                this.changeSelectedDate();
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
            (value) => {
                this.controlFormItemValue(value, 'seconds', 'minutes');
                this.changeSelectedDate();
            }));
        }
    }
    /**
     * @param {?} formControlName
     * @param {?} steps
     * @return {?}
     */
    changeTimeItem(formControlName, steps) {
        /** @type {?} */
        const value = this.form.controls[formControlName].value + steps;
        this.form.controls[formControlName].setValue(value);
    }
    /**
     * @return {?}
     */
    changeSelectedDateTime() {
        this.datePickerService.next();
    }
    /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    isActive(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    /**
     * @return {?}
     */
    isMeridian() {
        return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
    }
    /**
     * @return {?}
     */
    isOnlyTimePicker() {
        return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
    }
    /**
     * @private
     * @return {?}
     */
    changeSelectedDate() {
        /** @type {?} */
        const hours = this.form.controls['hours'].value;
        /** @type {?} */
        const minutes = this.form.controls['minutes'].value;
        /** @type {?} */
        const seconds = this.form.controls['seconds'].value;
        /** @type {?} */
        const timeValues = new FabricTimeValues(hours, minutes, seconds);
        this.datePickerService.changeTime(timeValues, this.selectedDate);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} observedFormControlName
     * @param {?} incFormControlName
     * @return {?}
     */
    controlFormItemValue(value, observedFormControlName, incFormControlName) {
        if (value > 59) {
            /** @type {?} */
            const timeItemValue = this.form.controls[incFormControlName].value;
            /** @type {?} */
            const incTimeItemValue = timeItemValue + 1;
            this.form.controls[incFormControlName].setValue(incTimeItemValue);
            this.form.controls[observedFormControlName].setValue(0o0);
        }
        else if (value < 0) {
            this.form.controls[observedFormControlName].setValue(0);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setTimeFromSelectedDate() {
        /** @type {?} */
        const hours = this.selectedDate.getHours();
        /** @type {?} */
        const minutes = this.selectedDate.getMinutes();
        /** @type {?} */
        const seconds = this.selectedDate.getSeconds();
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
            }] }
];
/** @nocollapse */
FabricTimePickerComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: FabricDatePickerService }
];
FabricTimePickerComponent.propDecorators = {
    selectedDate: [{ type: Input }],
    datePickerComposition: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdGltZS9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFZMUYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7Ozs7O0lBZ0I1RCxZQUE2QixXQUF3QixFQUNqQyxpQkFBMEM7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQVQ5RCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFdEIsZ0NBQTJCLEdBQUcsMkJBQTJCLENBQUM7UUFLekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUM3RixJQUFJLENBQUMsSUFBSTtpQkFDUCxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixZQUFZO2lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3RCLFNBQVM7Ozs7WUFBQyxDQUFDLElBQVksRUFBRSxFQUFFOztzQkFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztzQkFDeEMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUV0QyxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksSUFBSSxHQUFHLE9BQU8sRUFBRTtvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQy9GLElBQUksQ0FBQyxJQUFJO2lCQUNQLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFlBQVk7aUJBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEIsU0FBUzs7OztZQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQy9GLElBQUksQ0FBQyxJQUFJO2lCQUNQLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFlBQVk7aUJBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEIsU0FBUzs7OztZQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLGVBQXVCLEVBQUUsS0FBYTs7Y0FDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsaUJBQThDLEVBQUUsa0JBQStDO1FBQ3ZHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU8sa0JBQWtCOztjQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSzs7Y0FDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUs7O2NBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLOztjQUM3QyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUUzRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsdUJBQStCLEVBQUUsa0JBQTBCO1FBQ3RHLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTs7a0JBQ1QsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSzs7a0JBQ2pFLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxDQUFDO1lBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUQ7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDRixDQUFDOzs7OztJQUVPLHVCQUF1Qjs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOztjQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7O2NBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE5SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHMrREFBZ0Q7Z0JBQ2hELElBQUksRUFBRTtvQkFDTCwwQkFBMEIsRUFBRSxvQkFBb0I7aUJBQ2hEO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQWhCUSxXQUFXO1lBR1gsdUJBQXVCOzs7MkJBZ0I5QixLQUFLO29DQUdMLEtBQUs7Ozs7SUFITixpREFDbUI7O0lBRW5CLDBEQUNtRDs7SUFFbkQsMENBQWtCOztJQUVsQix5Q0FBZ0I7O0lBRWhCLDhDQUFzQjs7SUFFdEIsZ0VBQTBEOzs7OztJQUU5QyxnREFBeUM7Ozs7O0lBQ2xELHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljVGltZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtdGltZS12YWx1ZXMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXRpbWUtcGlja2VyJyxcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5vbmx5LXRpbWUtcGlja2VyXSc6ICdpc09ubHlUaW1lUGlja2VyKCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU6IERhdGU7XG5cblx0QElucHV0KClcblx0ZGF0ZVBpY2tlckNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0c3RlcHM6IG51bWJlciA9IDE7XG5cblx0Zm9ybTogRm9ybUdyb3VwO1xuXG5cdERpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuXHRGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gPSBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdGhvdXJzOiBbJyddLFxuXHRcdFx0bWludXRlczogWycnXSxcblx0XHRcdHNlY29uZHM6IFsnJ11cblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2V0VGltZUZyb21TZWxlY3RlZERhdGUoKTtcblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snaG91cnMnXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGhvdXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1pbkhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEgOiAwLFxuXHRcdFx0XHRcdFx0bWF4SG91ciA9IHRoaXMuaXNNZXJpZGlhbigpID8gMTIgOiAyMztcblxuXHRcdFx0XHRcdGlmIChob3VyID4gbWF4SG91ciB8fCBob3VyIDwgbWluSG91cikge1xuXHRcdFx0XHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKG1pbkhvdXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01JTlVURVMpKSB7XG5cdFx0XHR0aGlzLmZvcm1cblx0XHRcdFx0LmNvbnRyb2xzWydtaW51dGVzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZSwgJ21pbnV0ZXMnLCAnaG91cnMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX1NFQ09ORFMpKSB7XG5cdFx0XHR0aGlzLmZvcm1cblx0XHRcdFx0LmNvbnRyb2xzWydzZWNvbmRzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZSwgJ3NlY29uZHMnLCAnbWludXRlcycpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2VsZWN0ZWREYXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVRpbWVJdGVtKGZvcm1Db250cm9sTmFtZTogc3RyaW5nLCBzdGVwczogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXS52YWx1ZSArIHN0ZXBzO1xuXHRcdHRoaXMuZm9ybS5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdGNoYW5nZVNlbGVjdGVkRGF0ZVRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5uZXh0KCk7XG5cdH1cblxuXHRpc0FjdGl2ZShhY3RpdmVDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBjaGVja2VkQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIShhY3RpdmVDb21wb3NpdGlvbiAmIGNoZWNrZWRDb21wb3NpdGlvbik7XG5cdH1cblxuXHRpc01lcmlkaWFuKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWN0aXZlKHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfTUVSSURJQU4pO1xuXHR9XG5cblx0aXNPbmx5VGltZVBpY2tlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiAmIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5EQVRFX1BJQ0tFUik7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVNlbGVjdGVkRGF0ZSgpOiB2b2lkIHtcblx0XHRjb25zdCBob3VycyA9IHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS52YWx1ZSxcblx0XHRcdG1pbnV0ZXMgPSB0aGlzLmZvcm0uY29udHJvbHNbJ21pbnV0ZXMnXS52YWx1ZSxcblx0XHRcdHNlY29uZHMgPSB0aGlzLmZvcm0uY29udHJvbHNbJ3NlY29uZHMnXS52YWx1ZSxcblx0XHRcdHRpbWVWYWx1ZXMgPSBuZXcgRmFicmljVGltZVZhbHVlcyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmNoYW5nZVRpbWUodGltZVZhbHVlcywgdGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZTogbnVtYmVyLCBvYnNlcnZlZEZvcm1Db250cm9sTmFtZTogc3RyaW5nLCBpbmNGb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSA+IDU5KSB7XG5cdFx0XHRjb25zdCB0aW1lSXRlbVZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW2luY0Zvcm1Db250cm9sTmFtZV0udmFsdWUsXG5cdFx0XHRcdGluY1RpbWVJdGVtVmFsdWUgPSB0aW1lSXRlbVZhbHVlICsgMTtcblxuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW2luY0Zvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoaW5jVGltZUl0ZW1WYWx1ZSk7XG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKDBvMCk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tvYnNlcnZlZEZvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoMCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRUaW1lRnJvbVNlbGVjdGVkRGF0ZSgpOiB2b2lkIHtcblx0XHRjb25zdCBob3VycyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldEhvdXJzKCksXG5cdFx0XHRtaW51dGVzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TWludXRlcygpLFxuXHRcdFx0c2Vjb25kcyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldFNlY29uZHMoKTtcblxuXHRcdHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS5zZXRWYWx1ZShob3Vycyk7XG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGVzJ10uc2V0VmFsdWUobWludXRlcyk7XG5cdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmRzJ10uc2V0VmFsdWUoc2Vjb25kcyk7XG5cdH1cbn1cbiJdfQ==