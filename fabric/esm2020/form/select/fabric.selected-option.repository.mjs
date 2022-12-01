import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricSelectedOptionsRepository {
    constructor() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    onSelectedOption() {
        return this.selectedOption$.asObservable();
    }
    next(option) {
        this.selectedOption$.next(option);
    }
}
FabricSelectedOptionsRepository.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricSelectedOptionsRepository, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricSelectedOptionsRepository.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricSelectedOptionsRepository });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricSelectedOptionsRepository, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLnNlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L2ZhYnJpYy5zZWxlY3RlZC1vcHRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSWpELE1BQU0sT0FBTywrQkFBK0I7SUFENUM7UUFHa0Isb0JBQWUsR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7S0FVekU7SUFSQSxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksQ0FBQyxNQUF1QjtRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs0SEFWVywrQkFBK0I7Z0lBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUQzQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8R3VpU2VsZWN0T3B0aW9uPigxKTtcblxuXHRvblNlbGVjdGVkT3B0aW9uKCk6IE9ic2VydmFibGU8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24kLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24kLm5leHQob3B0aW9uKTtcblx0fVxuXG59XG4iXX0=