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
ResizeDetector.ɵfac = function ResizeDetector_Factory(t) { return new (t || ResizeDetector)(i0.ɵɵinject(PLATFORM_ID)); };
ResizeDetector.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ResizeDetector, factory: ResizeDetector.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResizeDetector, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZ0I5QyxNQUFNLE9BQU8sY0FBYztJQUUxQixZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUN4RCxDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQW9CO1FBRXRCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBRXZDLE9BQU8sa0JBQWtCLENBQ3hCLENBQ0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7Z0JBRTFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7b0JBRTFELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFaEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQ0Y7aUJBQ0MsSUFBSSxDQUNKLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FDaEIsQ0FDRixDQUFDO1NBRUY7UUFFRCxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBb0I7SUFDNUIsQ0FBQzs7NEVBcENXLGNBQWMsY0FFTixXQUFXO29FQUZuQixjQUFjLFdBQWQsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFVBQVU7O3NCQUdHLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgaGVybWVzRW1wdHksIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBjb25zdCBSZXNpemVPYnNlcnZlcjogYW55O1xuXG5leHBvcnQgdHlwZSBPYnNlcnZlZFNpemUgPSB7XG5cdGJvdHRvbTogbnVtYmVyO1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0bGVmdDogbnVtYmVyO1xuXHRyaWdodDogbnVtYmVyO1xuXHR0b3A6IG51bWJlcjtcblx0d2lkdGg6IG51bWJlcjtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNpemVEZXRlY3RvciB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0fVxuXG5cdG9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGVybWVzT2JzZXJ2YWJsZTxPYnNlcnZlZFNpemU+IHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cblx0XHRcdHJldHVybiBmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRcdChcblx0XHRcdFx0XHRuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXM6IGFueSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdGlmIChlbnRyaWVzICYmIGVudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdG9ic2VydmVyLm5leHQoZW50cmllc1swXS5jb250ZW50UmVjdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gKCkgPT4gcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdHRocm90dGxlVGltZSgyNSlcblx0XHRcdFx0XHQpXG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhlcm1lc0VtcHR5KCk7XG5cdH1cblxuXHRkZXN0cm95KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cdH1cblxufVxuIl19