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
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectedDate) {
            if (this.selectedDate) {
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        this.setTimeFromSelectedDate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvdGltZS9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFZMUYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7Ozs7O0lBZ0I1RCxZQUE2QixXQUF3QixFQUNqQyxpQkFBMEM7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQVQ5RCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFdEIsZ0NBQTJCLEdBQUcsMkJBQTJCLENBQUM7UUFLekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ3RCO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUM3RixJQUFJLENBQUMsSUFBSTtpQkFDUCxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixZQUFZO2lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3RCLFNBQVM7Ozs7WUFBQyxDQUFDLElBQVksRUFBRSxFQUFFOztzQkFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztzQkFDeEMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUV0QyxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksSUFBSSxHQUFHLE9BQU8sRUFBRTtvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQy9GLElBQUksQ0FBQyxJQUFJO2lCQUNQLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFlBQVk7aUJBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEIsU0FBUzs7OztZQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQy9GLElBQUksQ0FBQyxJQUFJO2lCQUNQLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFlBQVk7aUJBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEIsU0FBUzs7OztZQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLGVBQXVCLEVBQUUsS0FBYTs7Y0FDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsaUJBQThDLEVBQUUsa0JBQStDO1FBQ3ZHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU8sa0JBQWtCOztjQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSzs7Y0FDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUs7O2NBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLOztjQUM3QyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUUzRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsdUJBQStCLEVBQUUsa0JBQTBCO1FBQ3RHLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTs7a0JBQ1QsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSzs7a0JBQ2pFLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxDQUFDO1lBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUQ7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDRixDQUFDOzs7OztJQUVPLHVCQUF1Qjs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOztjQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7O2NBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFySUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHMrREFBZ0Q7Z0JBQ2hELElBQUksRUFBRTtvQkFDTCwwQkFBMEIsRUFBRSxvQkFBb0I7aUJBQ2hEO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQWhCUSxXQUFXO1lBR1gsdUJBQXVCOzs7MkJBZ0I5QixLQUFLO29DQUdMLEtBQUs7Ozs7SUFITixpREFDbUI7O0lBRW5CLDBEQUNtRDs7SUFFbkQsMENBQWtCOztJQUVsQix5Q0FBZ0I7O0lBRWhCLDhDQUFzQjs7SUFFdEIsZ0VBQTBEOzs7OztJQUU5QyxnREFBeUM7Ozs7O0lBQ2xELHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lVmFsdWVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhYnJpYy10aW1lLXZhbHVlcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktdGltZS1waWNrZXInLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLm9ubHktdGltZS1waWNrZXJdJzogJ2lzT25seVRpbWVQaWNrZXIoKSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGRhdGVQaWNrZXJDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uO1xuXG5cdHN0ZXBzOiBudW1iZXIgPSAxO1xuXG5cdGZvcm06IEZvcm1Hcm91cDtcblxuXHREaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cblx0RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uID0gRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGVQaWNrZXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRob3VyczogWycnXSxcblx0XHRcdG1pbnV0ZXM6IFsnJ10sXG5cdFx0XHRzZWNvbmRzOiBbJyddXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZERhdGUpIHtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snaG91cnMnXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKGhvdXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1pbkhvdXIgPSB0aGlzLmlzTWVyaWRpYW4oKSA/IDEgOiAwLFxuXHRcdFx0XHRcdFx0bWF4SG91ciA9IHRoaXMuaXNNZXJpZGlhbigpID8gMTIgOiAyMztcblxuXHRcdFx0XHRcdGlmIChob3VyID4gbWF4SG91ciB8fCBob3VyIDwgbWluSG91cikge1xuXHRcdFx0XHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKG1pbkhvdXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01JTlVURVMpKSB7XG5cdFx0XHR0aGlzLmZvcm1cblx0XHRcdFx0LmNvbnRyb2xzWydtaW51dGVzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZSwgJ21pbnV0ZXMnLCAnaG91cnMnKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNlbGVjdGVkRGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX1NFQ09ORFMpKSB7XG5cdFx0XHR0aGlzLmZvcm1cblx0XHRcdFx0LmNvbnRyb2xzWydzZWNvbmRzJ11cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZSwgJ3NlY29uZHMnLCAnbWludXRlcycpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2VsZWN0ZWREYXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk7XG5cdH1cblxuXHRjaGFuZ2VUaW1lSXRlbShmb3JtQ29udHJvbE5hbWU6IHN0cmluZywgc3RlcHM6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0udmFsdWUgKyBzdGVwcztcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHRjaGFuZ2VTZWxlY3RlZERhdGVUaW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubmV4dCgpO1xuXHR9XG5cblx0aXNBY3RpdmUoYWN0aXZlQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiwgY2hlY2tlZENvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEoYWN0aXZlQ29tcG9zaXRpb24gJiBjaGVja2VkQ29tcG9zaXRpb24pO1xuXHR9XG5cblx0aXNNZXJpZGlhbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01FUklESUFOKTtcblx0fVxuXG5cdGlzT25seVRpbWVQaWNrZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24gJiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uREFURV9QSUNLRVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VTZWxlY3RlZERhdGUoKTogdm9pZCB7XG5cdFx0Y29uc3QgaG91cnMgPSB0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXJzJ10udmFsdWUsXG5cdFx0XHRtaW51dGVzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydtaW51dGVzJ10udmFsdWUsXG5cdFx0XHRzZWNvbmRzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmRzJ10udmFsdWUsXG5cdFx0XHR0aW1lVmFsdWVzID0gbmV3IEZhYnJpY1RpbWVWYWx1ZXMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyU2VydmljZS5jaGFuZ2VUaW1lKHRpbWVWYWx1ZXMsIHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWU6IG51bWJlciwgb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWU6IHN0cmluZywgaW5jRm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgPiA1OSkge1xuXHRcdFx0Y29uc3QgdGltZUl0ZW1WYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1tpbmNGb3JtQ29udHJvbE5hbWVdLnZhbHVlLFxuXHRcdFx0XHRpbmNUaW1lSXRlbVZhbHVlID0gdGltZUl0ZW1WYWx1ZSArIDE7XG5cblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tpbmNGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKGluY1RpbWVJdGVtVmFsdWUpO1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW29ic2VydmVkRm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSgwbzApO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKDApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0VGltZUZyb21TZWxlY3RlZERhdGUoKTogdm9pZCB7XG5cdFx0Y29uc3QgaG91cnMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRIb3VycygpLFxuXHRcdFx0bWludXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1pbnV0ZXMoKSxcblx0XHRcdHNlY29uZHMgPSB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRTZWNvbmRzKCk7XG5cblx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXJzJ10uc2V0VmFsdWUoaG91cnMpO1xuXHRcdHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnNldFZhbHVlKG1pbnV0ZXMpO1xuXHRcdHRoaXMuZm9ybS5jb250cm9sc1snc2Vjb25kcyddLnNldFZhbHVlKHNlY29uZHMpO1xuXHR9XG59XG4iXX0=