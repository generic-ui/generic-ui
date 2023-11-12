import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerCalendarViewService {
    activeView$ = new Subject();
    onActiveView() {
        return this.activeView$.asObservable();
    }
    switchView(viewName) {
        this.activeView$.next(viewName);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sbUNBQW1DO0lBRXZDLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztJQUV4RCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBNEI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzt1R0FWVyxtQ0FBbUM7MkdBQW5DLG1DQUFtQzs7MkZBQW5DLG1DQUFtQztrQkFEL0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB7XG5cblx0cHJpdmF0ZSBhY3RpdmVWaWV3JCA9IG5ldyBTdWJqZWN0PEZhYnJpY0NhbGVuZGFyVmlldz4oKTtcblxuXHRvbkFjdGl2ZVZpZXcoKTogT2JzZXJ2YWJsZTxGYWJyaWNDYWxlbmRhclZpZXc+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVWaWV3JC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHN3aXRjaFZpZXcodmlld05hbWU6IEZhYnJpY0NhbGVuZGFyVmlldyk6IHZvaWQge1xuXHRcdHRoaXMuYWN0aXZlVmlldyQubmV4dCh2aWV3TmFtZSk7XG5cdH1cblxufVxuIl19