import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricDatePickerYearsService {
    constructor() {
        this.years$ = new Subject();
    }
    onYears() {
        return this.years$.asObservable();
    }
    next(years) {
        this.years$.next(years);
    }
}
FabricDatePickerYearsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerYearsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerYearsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerYearsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerYearsService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzNDLE1BQU0sT0FBTyw0QkFBNEI7SUFEekM7UUFHa0IsV0FBTSxHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO0tBVTlEO0lBUkEsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQTJCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O3lIQVZXLDRCQUE0Qjs2SEFBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHllYXJzJCA9IG5ldyBTdWJqZWN0PEFycmF5PEFycmF5PG51bWJlcj4+PigpO1xuXG5cdG9uWWVhcnMoKTogT2JzZXJ2YWJsZTxBcnJheTxBcnJheTxudW1iZXI+Pj4ge1xuXHRcdHJldHVybiB0aGlzLnllYXJzJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHQoeWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+KTogdm9pZCB7XG5cdFx0dGhpcy55ZWFycyQubmV4dCh5ZWFycyk7XG5cdH1cblxufVxuIl19