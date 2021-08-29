/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
var FabricDatePickerCompositionService = /** @class */ (function () {
    function FabricDatePickerCompositionService() {
        this.datePickerFormat$ = new BehaviorSubject(FabricDatePickerCompositionService.DEFAULT_COMPOSITION);
    }
    /**
     * @return {?}
     */
    FabricDatePickerCompositionService.prototype.onComposition = /**
     * @return {?}
     */
    function () {
        return this.datePickerFormat$.asObservable();
    };
    /**
     * @param {?} datePipeOptions
     * @return {?}
     */
    FabricDatePickerCompositionService.prototype.next = /**
     * @param {?} datePipeOptions
     * @return {?}
     */
    function (datePipeOptions) {
        this.datePickerFormat$.next(this.getComposition(datePipeOptions));
    };
    /**
     * @private
     * @param {?} datePipeOptions
     * @return {?}
     */
    FabricDatePickerCompositionService.prototype.getComposition = /**
     * @private
     * @param {?} datePipeOptions
     * @return {?}
     */
    function (datePipeOptions) {
        /** @type {?} */
        var composition;
        /** @type {?} */
        var timerPicker = datePipeOptions.timePicker;
        /** @type {?} */
        var showHours = timerPicker.hours;
        /** @type {?} */
        var showMinutes = timerPicker.minutes;
        /** @type {?} */
        var showSeconds = timerPicker.seconds;
        /** @type {?} */
        var isMeridian = timerPicker.meridian;
        /** @type {?} */
        var showDatePicker = datePipeOptions.datePicker === undefined ? true : datePipeOptions.datePicker;
        /** @type {?} */
        var showTimePicker = showHours || showMinutes || showSeconds;
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
        return composition;
    };
    FabricDatePickerCompositionService.DEFAULT_COMPOSITION = FabricDatePickerComposition.DATE_PICKER;
    FabricDatePickerCompositionService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerCompositionService;
}());
export { FabricDatePickerCompositionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCompositionService.DEFAULT_COMPOSITION;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCompositionService.prototype.datePickerFormat$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHdEY7SUFBQTtRQUlrQixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBOEIsa0NBQWtDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQWdEL0ksQ0FBQzs7OztJQTlDQSwwREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGlEQUFJOzs7O0lBQUosVUFBSyxlQUF3QztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFTywyREFBYzs7Ozs7SUFBdEIsVUFBdUIsZUFBd0M7O1lBRTFELFdBQXdDOztZQUMzQyxXQUFXLEdBQUcsZUFBZSxDQUFDLFVBQVU7O1lBRW5DLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSzs7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPOztZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU87O1lBQ2pDLFVBQVUsR0FBRyxXQUFXLENBQUMsUUFBUTs7WUFDakMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVOztZQUM3RixjQUFjLEdBQUcsU0FBUyxJQUFJLFdBQVcsSUFBSSxXQUFXO1FBRXpELElBQUksY0FBYyxFQUFFO1lBQ25CLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsV0FBVyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDbkIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxXQUFXLENBQUM7U0FDcEU7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNmLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsb0JBQW9CLENBQUM7U0FDN0U7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNkLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsaUJBQWlCLENBQUM7U0FDMUU7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDO1NBQzVFO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQztTQUM1RTtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFqRHVCLHNEQUFtQixHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQzs7Z0JBRnRGLFVBQVU7O0lBb0RYLHlDQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFksa0NBQWtDOzs7Ozs7SUFDOUMsdURBQXNGOzs7OztJQUV0RiwrREFBOEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1vcHRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2Uge1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTVBPU0lUSU9OID0gRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckZvcm1hdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbj4oRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZS5ERUZBVUxUX0NPTVBPU0lUSU9OKTtcblxuXHRvbkNvbXBvc2l0aW9uKCk6IE9ic2VydmFibGU8RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZVBpY2tlckZvcm1hdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KGRhdGVQaXBlT3B0aW9uczogRmFicmljRGF0ZVBpY2tlck9wdGlvbnMpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtYXQkLm5leHQodGhpcy5nZXRDb21wb3NpdGlvbihkYXRlUGlwZU9wdGlvbnMpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9zaXRpb24oZGF0ZVBpcGVPcHRpb25zOiBGYWJyaWNEYXRlUGlja2VyT3B0aW9ucyk6IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB7XG5cblx0XHRsZXQgY29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbixcblx0XHRcdHRpbWVyUGlja2VyID0gZGF0ZVBpcGVPcHRpb25zLnRpbWVQaWNrZXI7XG5cblx0XHRjb25zdCBzaG93SG91cnMgPSB0aW1lclBpY2tlci5ob3Vycyxcblx0XHRcdHNob3dNaW51dGVzID0gdGltZXJQaWNrZXIubWludXRlcyxcblx0XHRcdHNob3dTZWNvbmRzID0gdGltZXJQaWNrZXIuc2Vjb25kcyxcblx0XHRcdGlzTWVyaWRpYW4gPSB0aW1lclBpY2tlci5tZXJpZGlhbixcblx0XHRcdHNob3dEYXRlUGlja2VyID0gZGF0ZVBpcGVPcHRpb25zLmRhdGVQaWNrZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBkYXRlUGlwZU9wdGlvbnMuZGF0ZVBpY2tlcixcblx0XHRcdHNob3dUaW1lUGlja2VyID0gc2hvd0hvdXJzIHx8IHNob3dNaW51dGVzIHx8IHNob3dTZWNvbmRzO1xuXG5cdFx0aWYgKHNob3dEYXRlUGlja2VyKSB7XG5cdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSO1xuXHRcdH1cblxuXHRcdGlmIChzaG93VGltZVBpY2tlcikge1xuXHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUjtcblx0XHR9XG5cblx0XHRpZiAoaXNNZXJpZGlhbikge1xuXHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTjtcblx0XHR9XG5cblx0XHRpZiAoc2hvd0hvdXJzKSB7XG5cdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTO1xuXHRcdH1cblxuXHRcdGlmIChzaG93TWludXRlcykge1xuXHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTO1xuXHRcdH1cblxuXHRcdGlmIChzaG93U2Vjb25kcykge1xuXHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wb3NpdGlvbjtcblx0fVxufVxuIl19