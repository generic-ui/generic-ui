import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerCalendarViewService {
    constructor() {
        this.activeView$ = new Subject();
    }
    onActiveView() {
        return this.activeView$.asObservable();
    }
    switchView(viewName) {
        this.activeView$.next(viewName);
    }
}
FabricDatePickerCalendarViewService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerCalendarViewService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDatePickerCalendarViewService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sbUNBQW1DO0lBRGhEO1FBR1MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztLQVV4RDtJQVJBLFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUE0QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnSUFWVyxtQ0FBbUM7b0lBQW5DLG1DQUFtQzsyRkFBbkMsbUNBQW1DO2tCQUQvQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFicmljQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi4vbW9kZWxzL2ZhYnJpYy1jYWxlbmRhci12aWV3JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGFjdGl2ZVZpZXckID0gbmV3IFN1YmplY3Q8RmFicmljQ2FsZW5kYXJWaWV3PigpO1xuXG5cdG9uQWN0aXZlVmlldygpOiBPYnNlcnZhYmxlPEZhYnJpY0NhbGVuZGFyVmlldz4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZVZpZXckLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c3dpdGNoVmlldyh2aWV3TmFtZTogRmFicmljQ2FsZW5kYXJWaWV3KTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVWaWV3JC5uZXh0KHZpZXdOYW1lKTtcblx0fVxuXG59XG4iXX0=