/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
var FabricDatePickerCompositionService = /** @class */ (function () {
    function FabricDatePickerCompositionService() {
        this.datePickerFormat$ = new BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
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
        var removeDoubles = datePipeOptions.split(':').join(' ');
        /** @type {?} */
        var removeDash = removeDoubles.split('/').join(' ');
        /** @type {?} */
        var removeDot = removeDash.split('.').join(' ');
        /** @type {?} */
        var removeComa = removeDot.split(',').join(' ');
        /** @type {?} */
        var formatArray = removeComa.split(' ');
        /** @type {?} */
        var composition;
        formatArray.forEach((/**
         * @param {?} formatItem
         * @return {?}
         */
        function (formatItem) {
            /** @type {?} */
            var isDays = formatItem.toLowerCase().includes('d');
            /** @type {?} */
            var isMonths = formatItem.includes('M');
            /** @type {?} */
            var isYears = formatItem.toLowerCase().includes('y');
            /** @type {?} */
            var showHours = formatItem.toLowerCase().includes('h');
            /** @type {?} */
            var showMinutes = formatItem.includes('m');
            /** @type {?} */
            var showSeconds = formatItem.toLowerCase().includes('s');
            /** @type {?} */
            var isMeridian = formatItem.includes('h');
            /** @type {?} */
            var showDatePicker = isDays || isMonths || isYears;
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
        }));
        return composition;
    };
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
    FabricDatePickerCompositionService.prototype.datePickerFormat$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFdEY7SUFBQTtRQUdrQixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBOEIsMkJBQTJCLENBQUMsV0FBVyxDQUFDLENBQUM7SUF5RGhJLENBQUM7Ozs7SUF2REEsMERBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxpREFBSTs7OztJQUFKLFVBQUssZUFBdUI7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sMkRBQWM7Ozs7O0lBQXRCLFVBQXVCLGVBQXVCOztZQUN2QyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUN6RCxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUMvQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUMzQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUMzQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBRWhDLFdBQXdDO1FBRTVDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxVQUFrQjs7Z0JBQ2hDLE1BQU0sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3BELFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ25DLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ2hELFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ2xELFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3RDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3BELFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3JDLGNBQWMsR0FBRyxNQUFNLElBQUksUUFBUSxJQUFJLE9BQU87O2dCQUM5QyxjQUFjLEdBQUcsU0FBUyxJQUFJLFdBQVcsSUFBSSxXQUFXO1lBRXpELElBQUksY0FBYyxFQUFFO2dCQUNuQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQzthQUNwRTtZQUVELElBQUksY0FBYyxFQUFFO2dCQUNuQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQzthQUNwRTtZQUVELElBQUksVUFBVSxFQUFFO2dCQUNmLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsb0JBQW9CLENBQUM7YUFDN0U7WUFFRCxJQUFJLFNBQVMsRUFBRTtnQkFDZCxXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDO2FBQzFFO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2hCLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsbUJBQW1CLENBQUM7YUFDNUU7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQzthQUM1RTtRQUVGLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQzs7Z0JBM0RELFVBQVU7O0lBNERYLHlDQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksa0NBQWtDOzs7Ozs7SUFFOUMsK0RBQStIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gfSBmcm9tICcuL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyRm9ybWF0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uPihGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uREFURV9QSUNLRVIpO1xuXG5cdG9uQ29tcG9zaXRpb24oKTogT2JzZXJ2YWJsZTxGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlUGlja2VyRm9ybWF0JC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHQoZGF0ZVBpcGVPcHRpb25zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtYXQkLm5leHQodGhpcy5nZXRDb21wb3NpdGlvbihkYXRlUGlwZU9wdGlvbnMpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9zaXRpb24oZGF0ZVBpcGVPcHRpb25zOiBzdHJpbmcpOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24ge1xuXHRcdGNvbnN0IHJlbW92ZURvdWJsZXMgPSBkYXRlUGlwZU9wdGlvbnMuc3BsaXQoJzonKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVEYXNoID0gcmVtb3ZlRG91Ymxlcy5zcGxpdCgnLycpLmpvaW4oJyAnKSxcblx0XHRcdHJlbW92ZURvdCA9IHJlbW92ZURhc2guc3BsaXQoJy4nKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVDb21hID0gcmVtb3ZlRG90LnNwbGl0KCcsJykuam9pbignICcpLFxuXHRcdFx0Zm9ybWF0QXJyYXkgPSByZW1vdmVDb21hLnNwbGl0KCcgJyk7XG5cblx0XHRsZXQgY29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRcdGZvcm1hdEFycmF5LmZvckVhY2goKGZvcm1hdEl0ZW06IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgaXNEYXlzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkJyksXG5cdFx0XHRcdGlzTW9udGhzID0gZm9ybWF0SXRlbS5pbmNsdWRlcygnTScpLFxuXHRcdFx0XHRpc1llYXJzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd5JyksXG5cdFx0XHRcdHNob3dIb3VycyA9IGZvcm1hdEl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaCcpLFxuXHRcdFx0XHRzaG93TWludXRlcyA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ20nKSxcblx0XHRcdFx0c2hvd1NlY29uZHMgPSBmb3JtYXRJdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3MnKSxcblx0XHRcdFx0aXNNZXJpZGlhbiA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ2gnKSxcblx0XHRcdFx0c2hvd0RhdGVQaWNrZXIgPSBpc0RheXMgfHwgaXNNb250aHMgfHwgaXNZZWFycyxcblx0XHRcdFx0c2hvd1RpbWVQaWNrZXIgPSBzaG93SG91cnMgfHwgc2hvd01pbnV0ZXMgfHwgc2hvd1NlY29uZHM7XG5cblx0XHRcdGlmIChzaG93RGF0ZVBpY2tlcikge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1RpbWVQaWNrZXIpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzTWVyaWRpYW4pIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dIb3Vycykge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd01pbnV0ZXMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1NlY29uZHMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGNvbXBvc2l0aW9uO1xuXHR9XG59XG4iXX0=