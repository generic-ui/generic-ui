import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToggleButtonGroupService {
    toggleButtonId$ = new Subject();
    ngOnDestroy() {
        // this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ToggleButtonGroupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ToggleButtonGroupService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ToggleButtonGroupService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvYnV0dG9uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQixlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQUV6RCxXQUFXO1FBQ1YsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7dUdBZlcsd0JBQXdCOzJHQUF4Qix3QkFBd0I7OzJGQUF4Qix3QkFBd0I7a0JBRnBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZUJ1dHRvbklkJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHQvLyB0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KCk7XG5cdFx0dGhpcy50b2dnbGVCdXR0b25JZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9ic2VydmVUb2dnbGVkQnV0dG9uKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudG9nZ2xlQnV0dG9uSWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0dG9nZ2xlQnV0dG9uKGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KGlkKTtcblx0fVxufVxuIl19