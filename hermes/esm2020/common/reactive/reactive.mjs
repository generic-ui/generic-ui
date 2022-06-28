import { HermesSubject } from '../stream/core/observable/hermes.subject';
import { hermesTakeUntil } from '../stream/core/operator/hermes.take-until';
import { toRxJsObservable } from '../stream/infrastructure/rxjs/to-rxjs-observable';
import { takeUntil } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Reactive {
    constructor() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    isNotStopped() {
        return !this.hermesUnsubscribe$.isCompleted;
    }
}
Reactive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: Reactive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Reactive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: Reactive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: Reactive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3JlYWN0aXZlL3JlYWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBZ0IsUUFBUTtJQUk3QjtRQUZpQix1QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBR2hFLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVTLFNBQVM7UUFDbEIsT0FBTyxTQUFTLENBQ2YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRVMsaUJBQWlCO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVTLFlBQVk7UUFDckIsT0FBTyxDQUFFLElBQUksQ0FBQyxrQkFBMEIsQ0FBQyxXQUFXLENBQUM7SUFDdEQsQ0FBQzs7cUdBNUJvQixRQUFRO3lHQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi4vc3RyZWFtL2NvcmUvb3BlcmF0b3IvaGVybWVzLnRha2UtdW50aWwnO1xuaW1wb3J0IHsgdG9SeEpzT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N0cmVhbS9pbmZyYXN0cnVjdHVyZS9yeGpzL3RvLXJ4anMtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB0YWtlVW50aWw8VD4oKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcblx0XHRyZXR1cm4gdGFrZVVudGlsKFxuXHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJClcblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGlzTm90U3RvcHBlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCBhcyBhbnkpLmlzQ29tcGxldGVkO1xuXHR9XG5cbn1cbiJdfQ==