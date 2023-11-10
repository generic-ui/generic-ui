import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromRxJsObservable, hermesEmpty } from '@generic-ui/hermes';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ResizeDetector {
    platformId;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDetector, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDetector });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDetector, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbW1vbi9jZGsvc3JjL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZ0I5QyxNQUFNLE9BQU8sY0FBYztJQUVlO0lBQXpDLFlBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQ3hELENBQUM7SUFFRCxFQUFFLENBQUMsT0FBb0I7UUFFdEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdkMsT0FBTyxrQkFBa0IsQ0FDeEIsQ0FDQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtnQkFFMUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtvQkFFMUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUN0QztnQkFDRixDQUFDLENBQUMsQ0FBQztnQkFFSCxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FDRjtpQkFDQyxJQUFJLENBQ0osWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUNoQixDQUNGLENBQUM7U0FFRjtRQUVELE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFvQjtJQUM1QixDQUFDO3dHQXBDVyxjQUFjLGtCQUVOLFdBQVc7NEdBRm5CLGNBQWM7OzRGQUFkLGNBQWM7a0JBRDFCLFVBQVU7OzBCQUdHLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgaGVybWVzRW1wdHksIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBjb25zdCBSZXNpemVPYnNlcnZlcjogYW55O1xuXG5leHBvcnQgdHlwZSBPYnNlcnZlZFNpemUgPSB7XG5cdGJvdHRvbTogbnVtYmVyO1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0bGVmdDogbnVtYmVyO1xuXHRyaWdodDogbnVtYmVyO1xuXHR0b3A6IG51bWJlcjtcblx0d2lkdGg6IG51bWJlcjtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaXplRGV0ZWN0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhlcm1lc09ic2VydmFibGU8T2JzZXJ2ZWRTaXplPiB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRyZXR1cm4gZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0bmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzOiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KGVudHJpZXNbMF0uY29udGVudFJlY3QpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0aHJvdHRsZVRpbWUoMjUpXG5cdFx0XHRcdFx0KVxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBoZXJtZXNFbXB0eSgpO1xuXHR9XG5cblx0ZGVzdHJveShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHR9XG5cbn1cbiJdfQ==