/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
export class FabricDatePickerCompositionService {
    constructor() {
        this.datePickerFormat$ = new BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
    }
    /**
     * @return {?}
     */
    onComposition() {
        return this.datePickerFormat$.asObservable();
    }
    /**
     * @param {?} datePipeOptions
     * @return {?}
     */
    next(datePipeOptions) {
        this.datePickerFormat$.next(this.getComposition(datePipeOptions));
    }
    /**
     * @private
     * @param {?} datePipeOptions
     * @return {?}
     */
    getComposition(datePipeOptions) {
        /** @type {?} */
        const removeDoubles = datePipeOptions.split(':').join(' ');
        /** @type {?} */
        const removeDash = removeDoubles.split('/').join(' ');
        /** @type {?} */
        const removeDot = removeDash.split('.').join(' ');
        /** @type {?} */
        const removeComa = removeDot.split(',').join(' ');
        /** @type {?} */
        const formatArray = removeComa.split(' ');
        /** @type {?} */
        let composition;
        formatArray.forEach((/**
         * @param {?} formatItem
         * @return {?}
         */
        (formatItem) => {
            /** @type {?} */
            const isDays = formatItem.toLowerCase().includes('d');
            /** @type {?} */
            const isMonths = formatItem.includes('M');
            /** @type {?} */
            const isYears = formatItem.toLowerCase().includes('y');
            /** @type {?} */
            const showHours = formatItem.toLowerCase().includes('h');
            /** @type {?} */
            const showMinutes = formatItem.includes('m');
            /** @type {?} */
            const showSeconds = formatItem.toLowerCase().includes('s');
            /** @type {?} */
            const isMeridian = formatItem.includes('h');
            /** @type {?} */
            const showDatePicker = isDays || isMonths || isYears;
            /** @type {?} */
            const showTimePicker = showHours || showMinutes || showSeconds;
            if (showDatePicker) {
                composition = composition | FabricDatePickerComposition.DATE_PICKER;
            }
            if (showTimePicker) {
                composition = composition | FabricDatePickerComposition.TIME_PICKER;
            }
            if (isMeridian) {
                composition = composition | FabricDatePickerComposition.TIME_PICKER_MERIDIAN;
            }
            if (showHours) {
                composition = composition | FabricDatePickerComposition.TIME_PICKER_HOURS;
            }
            if (showMinutes) {
                composition = composition | FabricDatePickerComposition.TIME_PICKER_MINUTES;
            }
            if (showSeconds) {
                composition = composition | FabricDatePickerComposition.TIME_PICKER_SECONDS;
            }
        }));
        return composition;
    }
}
FabricDatePickerCompositionService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCompositionService.prototype.datePickerFormat$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHdEYsTUFBTSxPQUFPLGtDQUFrQztJQUQvQztRQUdrQixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBOEIsMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUM7SUF5RGhJLENBQUM7Ozs7SUF2REEsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGVBQXVCO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxlQUF1Qjs7Y0FDdkMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Y0FDekQsVUFBVSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Y0FDL0MsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Y0FDM0MsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Y0FDM0MsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUVoQyxXQUF3QztRQUU1QyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLENBQUMsVUFBa0IsRUFBRSxFQUFFOztrQkFDcEMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDcEQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDbkMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDaEQsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDbEQsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDdEMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDcEQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztrQkFDckMsY0FBYyxHQUFHLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTzs7a0JBQzlDLGNBQWMsR0FBRyxTQUFTLElBQUksV0FBVyxJQUFJLFdBQVc7WUFFekQsSUFBSSxjQUFjLEVBQUU7Z0JBQ25CLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsV0FBVyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxjQUFjLEVBQUU7Z0JBQ25CLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsV0FBVyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2YsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQzthQUM3RTtZQUVELElBQUksU0FBUyxFQUFFO2dCQUNkLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsaUJBQWlCLENBQUM7YUFDMUU7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQzthQUM1RTtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNoQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDO2FBQzVFO1FBRUYsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzs7WUEzREQsVUFBVTs7Ozs7OztJQUdWLCtEQUErSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckZvcm1hdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbj4oRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSKTtcblxuXHRvbkNvbXBvc2l0aW9uKCk6IE9ic2VydmFibGU8RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZVBpY2tlckZvcm1hdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KGRhdGVQaXBlT3B0aW9uczogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybWF0JC5uZXh0KHRoaXMuZ2V0Q29tcG9zaXRpb24oZGF0ZVBpcGVPcHRpb25zKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbXBvc2l0aW9uKGRhdGVQaXBlT3B0aW9uczogc3RyaW5nKTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIHtcblx0XHRjb25zdCByZW1vdmVEb3VibGVzID0gZGF0ZVBpcGVPcHRpb25zLnNwbGl0KCc6Jykuam9pbignICcpLFxuXHRcdFx0cmVtb3ZlRGFzaCA9IHJlbW92ZURvdWJsZXMuc3BsaXQoJy8nKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVEb3QgPSByZW1vdmVEYXNoLnNwbGl0KCcuJykuam9pbignICcpLFxuXHRcdFx0cmVtb3ZlQ29tYSA9IHJlbW92ZURvdC5zcGxpdCgnLCcpLmpvaW4oJyAnKSxcblx0XHRcdGZvcm1hdEFycmF5ID0gcmVtb3ZlQ29tYS5zcGxpdCgnICcpO1xuXG5cdFx0bGV0IGNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0XHRmb3JtYXRBcnJheS5mb3JFYWNoKChmb3JtYXRJdGVtOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGlzRGF5cyA9IGZvcm1hdEl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZCcpLFxuXHRcdFx0XHRpc01vbnRocyA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ00nKSxcblx0XHRcdFx0aXNZZWFycyA9IGZvcm1hdEl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygneScpLFxuXHRcdFx0XHRzaG93SG91cnMgPSBmb3JtYXRJdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2gnKSxcblx0XHRcdFx0c2hvd01pbnV0ZXMgPSBmb3JtYXRJdGVtLmluY2x1ZGVzKCdtJyksXG5cdFx0XHRcdHNob3dTZWNvbmRzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzJyksXG5cdFx0XHRcdGlzTWVyaWRpYW4gPSBmb3JtYXRJdGVtLmluY2x1ZGVzKCdoJyksXG5cdFx0XHRcdHNob3dEYXRlUGlja2VyID0gaXNEYXlzIHx8IGlzTW9udGhzIHx8IGlzWWVhcnMsXG5cdFx0XHRcdHNob3dUaW1lUGlja2VyID0gc2hvd0hvdXJzIHx8IHNob3dNaW51dGVzIHx8IHNob3dTZWNvbmRzO1xuXG5cdFx0XHRpZiAoc2hvd0RhdGVQaWNrZXIpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5EQVRFX1BJQ0tFUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dUaW1lUGlja2VyKSB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uID0gY29tcG9zaXRpb24gfCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc01lcmlkaWFuKSB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uID0gY29tcG9zaXRpb24gfCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfTUVSSURJQU47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzaG93SG91cnMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dNaW51dGVzKSB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uID0gY29tcG9zaXRpb24gfCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfTUlOVVRFUztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dTZWNvbmRzKSB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uID0gY29tcG9zaXRpb24gfCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfU0VDT05EUztcblx0XHRcdH1cblxuXHRcdH0pO1xuXHRcdHJldHVybiBjb21wb3NpdGlvbjtcblx0fVxufVxuIl19