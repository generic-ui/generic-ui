import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
import * as i0 from "@angular/core";
export class FabricDatePickerCompositionService {
    constructor() {
        this.datePickerFormat$ = new BehaviorSubject(FabricDatePickerComposition.DATE_PICKER);
    }
    onComposition() {
        return this.datePickerFormat$.asObservable();
    }
    next(datePipeOptions) {
        this.datePickerFormat$.next(this.getComposition(datePipeOptions));
    }
    getComposition(datePipeOptions) {
        const removeDoubles = datePipeOptions.split(':').join(' '), removeDash = removeDoubles.split('/').join(' '), removeDot = removeDash.split('.').join(' '), removeComa = removeDot.split(',').join(' '), formatArray = removeComa.split(' ');
        let composition;
        formatArray.forEach((formatItem) => {
            const isDays = formatItem.toLowerCase().includes('d'), isMonths = formatItem.includes('M'), isYears = formatItem.toLowerCase().includes('y'), showHours = formatItem.toLowerCase().includes('h'), showMinutes = formatItem.includes('m'), showSeconds = formatItem.toLowerCase().includes('s'), isMeridian = formatItem.includes('h'), showDatePicker = isDays || isMonths || isYears, showTimePicker = showHours || showMinutes || showSeconds;
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
        });
        return composition;
    }
}
FabricDatePickerCompositionService.ɵfac = function FabricDatePickerCompositionService_Factory(t) { return new (t || FabricDatePickerCompositionService)(); };
FabricDatePickerCompositionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerCompositionService, factory: FabricDatePickerCompositionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerCompositionService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBR3RGLE1BQU0sT0FBTyxrQ0FBa0M7SUFEL0M7UUFHa0Isc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQThCLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBeUQvSDtJQXZEQSxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksQ0FBQyxlQUF1QjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU8sY0FBYyxDQUFDLGVBQXVCO1FBQzdDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN6RCxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQy9DLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDM0MsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUMzQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxJQUFJLFdBQXdDLENBQUM7UUFFN0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtZQUMxQyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNwRCxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDbkMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ2hELFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNsRCxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDdEMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ3BELFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNyQyxjQUFjLEdBQUcsTUFBTSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQzlDLGNBQWMsR0FBRyxTQUFTLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQztZQUUxRCxJQUFJLGNBQWMsRUFBRTtnQkFDbkIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxXQUFXLENBQUM7YUFDcEU7WUFFRCxJQUFJLGNBQWMsRUFBRTtnQkFDbkIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxXQUFXLENBQUM7YUFDcEU7WUFFRCxJQUFJLFVBQVUsRUFBRTtnQkFDZixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLG9CQUFvQixDQUFDO2FBQzdFO1lBRUQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2QsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQzthQUMxRTtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNoQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDO2FBQzVFO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2hCLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsbUJBQW1CLENBQUM7YUFDNUU7UUFFRixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7O29IQTFEVyxrQ0FBa0M7d0ZBQWxDLGtDQUFrQyxXQUFsQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUQ5QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gfSBmcm9tICcuL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyRm9ybWF0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uPihGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uREFURV9QSUNLRVIpO1xuXG5cdG9uQ29tcG9zaXRpb24oKTogT2JzZXJ2YWJsZTxGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlUGlja2VyRm9ybWF0JC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHQoZGF0ZVBpcGVPcHRpb25zOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGVQaWNrZXJGb3JtYXQkLm5leHQodGhpcy5nZXRDb21wb3NpdGlvbihkYXRlUGlwZU9wdGlvbnMpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9zaXRpb24oZGF0ZVBpcGVPcHRpb25zOiBzdHJpbmcpOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24ge1xuXHRcdGNvbnN0IHJlbW92ZURvdWJsZXMgPSBkYXRlUGlwZU9wdGlvbnMuc3BsaXQoJzonKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVEYXNoID0gcmVtb3ZlRG91Ymxlcy5zcGxpdCgnLycpLmpvaW4oJyAnKSxcblx0XHRcdHJlbW92ZURvdCA9IHJlbW92ZURhc2guc3BsaXQoJy4nKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVDb21hID0gcmVtb3ZlRG90LnNwbGl0KCcsJykuam9pbignICcpLFxuXHRcdFx0Zm9ybWF0QXJyYXkgPSByZW1vdmVDb21hLnNwbGl0KCcgJyk7XG5cblx0XHRsZXQgY29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRcdGZvcm1hdEFycmF5LmZvckVhY2goKGZvcm1hdEl0ZW06IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgaXNEYXlzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkJyksXG5cdFx0XHRcdGlzTW9udGhzID0gZm9ybWF0SXRlbS5pbmNsdWRlcygnTScpLFxuXHRcdFx0XHRpc1llYXJzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd5JyksXG5cdFx0XHRcdHNob3dIb3VycyA9IGZvcm1hdEl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaCcpLFxuXHRcdFx0XHRzaG93TWludXRlcyA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ20nKSxcblx0XHRcdFx0c2hvd1NlY29uZHMgPSBmb3JtYXRJdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3MnKSxcblx0XHRcdFx0aXNNZXJpZGlhbiA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ2gnKSxcblx0XHRcdFx0c2hvd0RhdGVQaWNrZXIgPSBpc0RheXMgfHwgaXNNb250aHMgfHwgaXNZZWFycyxcblx0XHRcdFx0c2hvd1RpbWVQaWNrZXIgPSBzaG93SG91cnMgfHwgc2hvd01pbnV0ZXMgfHwgc2hvd1NlY29uZHM7XG5cblx0XHRcdGlmIChzaG93RGF0ZVBpY2tlcikge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1RpbWVQaWNrZXIpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzTWVyaWRpYW4pIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dIb3Vycykge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd01pbnV0ZXMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1NlY29uZHMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGNvbXBvc2l0aW9uO1xuXHR9XG59XG4iXX0=