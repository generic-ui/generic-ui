import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerCalendarService {
    activeMonth$ = new Subject();
    activeYear$ = new Subject();
    onActiveMonth() {
        return this.activeMonth$.asObservable();
    }
    onActiveYear() {
        return this.activeYear$.asObservable();
    }
    nextMonth(year, month) {
        if (month === 11) {
            this.activeYear$.next(year + 1);
            this.selectMonth(0);
        }
        else {
            this.selectMonth(month + 1);
        }
    }
    prevMonth(year, month) {
        if (month === 0) {
            this.activeYear$.next(year - 1);
            this.selectMonth(11);
        }
        else {
            this.selectMonth(month - 1);
        }
    }
    selectYear(year) {
        this.activeYear$.next(year);
    }
    selectMonth(month) {
        this.activeMonth$.next(month);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzNDLE1BQU0sT0FBTywrQkFBK0I7SUFFMUIsWUFBWSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFFckMsV0FBVyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFFckQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBRUQsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7dUdBdENXLCtCQUErQjsyR0FBL0IsK0JBQStCOzsyRkFBL0IsK0JBQStCO2tCQUQzQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVNb250aCQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVZZWFyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRvbkFjdGl2ZU1vbnRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlTW9udGgkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0b25BY3RpdmVZZWFyKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlWWVhciQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1vbnRoID09PSAxMSkge1xuXHRcdFx0dGhpcy5hY3RpdmVZZWFyJC5uZXh0KHllYXIgKyAxKTtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgobW9udGggKyAxKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2TW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1vbnRoID09PSAwKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZVllYXIkLm5leHQoeWVhciAtIDEpO1xuXHRcdFx0dGhpcy5zZWxlY3RNb250aCgxMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0TW9udGgobW9udGggLSAxKTtcblx0XHR9XG5cdH1cblxuXHRzZWxlY3RZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlWWVhciQubmV4dCh5ZWFyKTtcblx0fVxuXG5cdHNlbGVjdE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFjdGl2ZU1vbnRoJC5uZXh0KG1vbnRoKTtcblx0fVxufVxuIl19