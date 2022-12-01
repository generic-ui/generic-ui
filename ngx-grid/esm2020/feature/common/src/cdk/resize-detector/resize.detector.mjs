import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromRxJsObservable, hermesEmpty } from '@generic-ui/hermes';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ResizeDetector {
    constructor(platformId) {
        this.platformId = platformId;
    }
    on(element) {
        if (isPlatformBrowser(this.platformId)) {
            return fromRxJsObservable((new Observable((observer) => {
                const resizeObserver = new ResizeObserver((entries) => {
                    if (entries && entries.length > 0) {
                        observer.next(entries[0].contentRect);
                    }
                });
                resizeObserver.observe(element);
                return () => resizeObserver.disconnect();
            }))
                .pipe(throttleTime(25)));
        }
        return hermesEmpty();
    }
    destroy(element) {
    }
}
ResizeDetector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ResizeDetector, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
ResizeDetector.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ResizeDetector });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ResizeDetector, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZ0I5QyxNQUFNLE9BQU8sY0FBYztJQUUxQixZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUN4RCxDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQW9CO1FBRXRCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBRXZDLE9BQU8sa0JBQWtCLENBQ3hCLENBQ0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7Z0JBRTFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7b0JBRTFELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFaEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQ0Y7aUJBQ0MsSUFBSSxDQUNKLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FDaEIsQ0FDRixDQUFDO1NBRUY7UUFFRCxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBb0I7SUFDNUIsQ0FBQzs7MkdBcENXLGNBQWMsa0JBRU4sV0FBVzsrR0FGbkIsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOzswQkFHRyxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIGhlcm1lc0VtcHR5LCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgY29uc3QgUmVzaXplT2JzZXJ2ZXI6IGFueTtcblxuZXhwb3J0IHR5cGUgT2JzZXJ2ZWRTaXplID0ge1xuXHRib3R0b206IG51bWJlcjtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdGxlZnQ6IG51bWJlcjtcblx0cmlnaHQ6IG51bWJlcjtcblx0dG9wOiBudW1iZXI7XG5cdHdpZHRoOiBudW1iZXI7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZURldGVjdG9yIHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIZXJtZXNPYnNlcnZhYmxlPE9ic2VydmVkU2l6ZT4ge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0cmV0dXJuIGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0KFxuXHRcdFx0XHRcdG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllczogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGVudHJpZXMgJiYgZW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dChlbnRyaWVzWzBdLmNvbnRlbnRSZWN0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGhyb3R0bGVUaW1lKDI1KVxuXHRcdFx0XHRcdClcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gaGVybWVzRW1wdHkoKTtcblx0fVxuXG5cdGRlc3Ryb3koZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0fVxuXG59XG4iXX0=