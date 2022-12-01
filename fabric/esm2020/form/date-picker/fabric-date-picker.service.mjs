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
FabricDatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBSW5ELE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHUyxpQkFBWSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFJdkIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0ErQnhFO0lBN0JBLG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFVO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBNEIsRUFBRSxJQUFVO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sbUJBQW1CO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RDtJQUNGLENBQUM7O29IQXBDVyx1QkFBdUI7d0hBQXZCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lVmFsdWVzIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFRpbWU/OiBGYWJyaWNUaW1lVmFsdWVzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWREYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zZWxlY3RlZERhdGUpO1xuXG5cdG9ic2VydmVTZWxlY3RlZERhdGUoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGRhdGVTZWxlY3RlZChkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG5cdFx0dGhpcy5zZXRTZWxlY3RlZERhdGVUaW1lKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUkLm5leHQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0Y2hhbmdlVGltZSh0aW1lVmFsdWVzOiBGYWJyaWNUaW1lVmFsdWVzLCBkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFRpbWUgPSB0aW1lVmFsdWVzO1xuXHRcdGlmICghdGhpcy5zZWxlY3RlZERhdGUpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTZWxlY3RlZERhdGVUaW1lKCk7XG5cdH1cblxuXHRuZXh0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVNlbGVjdGVkKHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2VsZWN0ZWREYXRlVGltZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZFRpbWUpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldEhvdXJzKHRoaXMuc2VsZWN0ZWRUaW1lLmhvdXJzKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldE1pbnV0ZXModGhpcy5zZWxlY3RlZFRpbWUubWludXRlcyk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkRGF0ZS5zZXRTZWNvbmRzKHRoaXMuc2VsZWN0ZWRUaW1lLnNlY29uZHMpO1xuXHRcdH1cblx0fVxufVxuIl19