import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerYearsService {
    years$ = new Subject();
    onYears() {
        return this.years$.asObservable();
    }
    next(years) {
        this.years$.next(years);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerYearsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerYearsService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerYearsService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzNDLE1BQU0sT0FBTyw0QkFBNEI7SUFFdkIsTUFBTSxHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO0lBRTlELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksQ0FBQyxLQUEyQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO3VHQVZXLDRCQUE0QjsyR0FBNUIsNEJBQTRCOzsyRkFBNUIsNEJBQTRCO2tCQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB5ZWFycyQgPSBuZXcgU3ViamVjdDxBcnJheTxBcnJheTxudW1iZXI+Pj4oKTtcblxuXHRvblllYXJzKCk6IE9ic2VydmFibGU8QXJyYXk8QXJyYXk8bnVtYmVyPj4+IHtcblx0XHRyZXR1cm4gdGhpcy55ZWFycyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KHllYXJzOiBBcnJheTxBcnJheTxudW1iZXI+Pik6IHZvaWQge1xuXHRcdHRoaXMueWVhcnMkLm5leHQoeWVhcnMpO1xuXHR9XG5cbn1cbiJdfQ==