import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToggleButtonGroupService {
    constructor() {
        this.toggleButtonId$ = new Subject();
    }
    ngOnDestroy() {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
}
ToggleButtonGroupService.ɵfac = function ToggleButtonGroupService_Factory(t) { return new (t || ToggleButtonGroupService)(); };
ToggleButtonGroupService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToggleButtonGroupService, factory: ToggleButtonGroupService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToggleButtonGroupService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvYnV0dG9uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLHdCQUF3QjtJQUZyQztRQUlrQixvQkFBZSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0tBY2xFO0lBWkEsV0FBVztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0JBQW9CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0dBZlcsd0JBQXdCOzhFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FGcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9nZ2xlQnV0dG9uSWQkOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uSWQkLm5leHQoKTtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b2JzZXJ2ZVRvZ2dsZWRCdXR0b24oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy50b2dnbGVCdXR0b25JZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHR0b2dnbGVCdXR0b24oaWQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uSWQkLm5leHQoaWQpO1xuXHR9XG59XG4iXX0=