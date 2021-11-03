import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerService {
    constructor() {
        this.selectedDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.selectedDate);
    }
    observeSelectedDate() {
        return this.selectedDate$.asObservable();
    }
    dateSelected(date) {
        this.selectedDate = new Date(date.getTime());
        this.setSelectedDateTime();
        this.selectedDate$.next(this.selectedDate);
    }
    changeTime(timeValues, date) {
        this.selectedTime = timeValues;
        if (!this.selectedDate) {
            this.selectedDate = date;
        }
        this.setSelectedDateTime();
    }
    next() {
        this.dateSelected(this.selectedDate);
    }
    setSelectedDateTime() {
        if (this.selectedTime) {
            this.selectedDate.setHours(this.selectedTime.hours);
            this.selectedDate.setMinutes(this.selectedTime.minutes);
            this.selectedDate.setSeconds(this.selectedTime.seconds);
        }
    }
}
FabricDatePickerService.ɵfac = function FabricDatePickerService_Factory(t) { return new (t || FabricDatePickerService)(); };
FabricDatePickerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDatePickerService, factory: FabricDatePickerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDatePickerService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBSW5ELE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHUyxpQkFBWSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFJdkIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0ErQnhFO0lBN0JBLG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFVO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBNEIsRUFBRSxJQUFVO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sbUJBQW1CO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RDtJQUNGLENBQUM7OzhGQXBDVyx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lVmFsdWVzIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFRpbWU6IEZhYnJpY1RpbWVWYWx1ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZERhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cblx0b2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpOiBPYnNlcnZhYmxlPERhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZERhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0ZGF0ZVNlbGVjdGVkKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblx0XHR0aGlzLnNldFNlbGVjdGVkRGF0ZVRpbWUoKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRjaGFuZ2VUaW1lKHRpbWVWYWx1ZXM6IEZhYnJpY1RpbWVWYWx1ZXMsIGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVGltZSA9IHRpbWVWYWx1ZXM7XG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdH1cblx0XHR0aGlzLnNldFNlbGVjdGVkRGF0ZVRpbWUoKTtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTZWxlY3RlZERhdGVUaW1lKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkVGltZSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUuc2V0SG91cnModGhpcy5zZWxlY3RlZFRpbWUuaG91cnMpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUuc2V0TWludXRlcyh0aGlzLnNlbGVjdGVkVGltZS5taW51dGVzKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldFNlY29uZHModGhpcy5zZWxlY3RlZFRpbWUuc2Vjb25kcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=