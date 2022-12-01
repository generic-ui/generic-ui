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
        let composition = FabricDatePickerComposition.NONE;
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
FabricDatePickerCompositionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCompositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerCompositionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCompositionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCompositionService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBR3RGLE1BQU0sT0FBTyxrQ0FBa0M7SUFEL0M7UUFHa0Isc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQThCLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBeUQvSDtJQXZEQSxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksQ0FBQyxlQUF1QjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU8sY0FBYyxDQUFDLGVBQXVCO1FBQzdDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN6RCxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQy9DLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDM0MsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUMzQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxJQUFJLFdBQVcsR0FBZ0MsMkJBQTJCLENBQUMsSUFBSSxDQUFDO1FBRWhGLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDMUMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDcEQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ25DLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNoRCxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDbEQsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ3RDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNwRCxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDckMsY0FBYyxHQUFHLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxFQUM5QyxjQUFjLEdBQUcsU0FBUyxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUM7WUFFMUQsSUFBSSxjQUFjLEVBQUU7Z0JBQ25CLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsV0FBVyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxjQUFjLEVBQUU7Z0JBQ25CLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsV0FBVyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2YsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQzthQUM3RTtZQUVELElBQUksU0FBUyxFQUFFO2dCQUNkLFdBQVcsR0FBRyxXQUFXLEdBQUcsMkJBQTJCLENBQUMsaUJBQWlCLENBQUM7YUFDMUU7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQzthQUM1RTtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNoQixXQUFXLEdBQUcsV0FBVyxHQUFHLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDO2FBQzVFO1FBRUYsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzsrSEExRFcsa0NBQWtDO21JQUFsQyxrQ0FBa0M7MkZBQWxDLGtDQUFrQztrQkFEOUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckZvcm1hdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbj4oRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSKTtcblxuXHRvbkNvbXBvc2l0aW9uKCk6IE9ic2VydmFibGU8RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZVBpY2tlckZvcm1hdCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KGRhdGVQaXBlT3B0aW9uczogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlUGlja2VyRm9ybWF0JC5uZXh0KHRoaXMuZ2V0Q29tcG9zaXRpb24oZGF0ZVBpcGVPcHRpb25zKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbXBvc2l0aW9uKGRhdGVQaXBlT3B0aW9uczogc3RyaW5nKTogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIHtcblx0XHRjb25zdCByZW1vdmVEb3VibGVzID0gZGF0ZVBpcGVPcHRpb25zLnNwbGl0KCc6Jykuam9pbignICcpLFxuXHRcdFx0cmVtb3ZlRGFzaCA9IHJlbW92ZURvdWJsZXMuc3BsaXQoJy8nKS5qb2luKCcgJyksXG5cdFx0XHRyZW1vdmVEb3QgPSByZW1vdmVEYXNoLnNwbGl0KCcuJykuam9pbignICcpLFxuXHRcdFx0cmVtb3ZlQ29tYSA9IHJlbW92ZURvdC5zcGxpdCgnLCcpLmpvaW4oJyAnKSxcblx0XHRcdGZvcm1hdEFycmF5ID0gcmVtb3ZlQ29tYS5zcGxpdCgnICcpO1xuXG5cdFx0bGV0IGNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gPSBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uTk9ORTtcblxuXHRcdGZvcm1hdEFycmF5LmZvckVhY2goKGZvcm1hdEl0ZW06IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgaXNEYXlzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkJyksXG5cdFx0XHRcdGlzTW9udGhzID0gZm9ybWF0SXRlbS5pbmNsdWRlcygnTScpLFxuXHRcdFx0XHRpc1llYXJzID0gZm9ybWF0SXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd5JyksXG5cdFx0XHRcdHNob3dIb3VycyA9IGZvcm1hdEl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaCcpLFxuXHRcdFx0XHRzaG93TWludXRlcyA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ20nKSxcblx0XHRcdFx0c2hvd1NlY29uZHMgPSBmb3JtYXRJdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3MnKSxcblx0XHRcdFx0aXNNZXJpZGlhbiA9IGZvcm1hdEl0ZW0uaW5jbHVkZXMoJ2gnKSxcblx0XHRcdFx0c2hvd0RhdGVQaWNrZXIgPSBpc0RheXMgfHwgaXNNb250aHMgfHwgaXNZZWFycyxcblx0XHRcdFx0c2hvd1RpbWVQaWNrZXIgPSBzaG93SG91cnMgfHwgc2hvd01pbnV0ZXMgfHwgc2hvd1NlY29uZHM7XG5cblx0XHRcdGlmIChzaG93RGF0ZVBpY2tlcikge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLkRBVEVfUElDS0VSO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1RpbWVQaWNrZXIpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzTWVyaWRpYW4pIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NRVJJRElBTjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNob3dIb3Vycykge1xuXHRcdFx0XHRjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uIHwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX0hPVVJTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd01pbnV0ZXMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9NSU5VVEVTO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvd1NlY29uZHMpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24gPSBjb21wb3NpdGlvbiB8IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGNvbXBvc2l0aW9uO1xuXHR9XG59XG4iXX0=