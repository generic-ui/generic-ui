import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromRxJsObservable, hermesEmpty } from '@generic-ui/hermes';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
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
ResizeDetector.decorators = [
    { type: Injectable }
];
ResizeDetector.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQjlDLE1BQU0sT0FBTyxjQUFjO0lBRTFCLFlBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQ3hELENBQUM7SUFFRCxFQUFFLENBQUMsT0FBb0I7UUFFdEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdkMsT0FBTyxrQkFBa0IsQ0FDeEIsQ0FDQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtnQkFFMUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtvQkFFMUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUN0QztnQkFDRixDQUFDLENBQUMsQ0FBQztnQkFFSCxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FDRjtpQkFDQyxJQUFJLENBQ0osWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUNoQixDQUNGLENBQUM7U0FFRjtRQUVELE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFvQjtJQUM1QixDQUFDOzs7WUFyQ0QsVUFBVTs7OzRDQUdHLE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBoZXJtZXNFbXB0eSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIGNvbnN0IFJlc2l6ZU9ic2VydmVyOiBhbnk7XG5cbmV4cG9ydCB0eXBlIE9ic2VydmVkU2l6ZSA9IHtcblx0Ym90dG9tOiBudW1iZXI7XG5cdGhlaWdodDogbnVtYmVyO1xuXHRsZWZ0OiBudW1iZXI7XG5cdHJpZ2h0OiBudW1iZXI7XG5cdHRvcDogbnVtYmVyO1xuXHR3aWR0aDogbnVtYmVyO1xuXHR4OiBudW1iZXI7XG5cdHk6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZURldGVjdG9yIHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIZXJtZXNPYnNlcnZhYmxlPE9ic2VydmVkU2l6ZT4ge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0cmV0dXJuIGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0KFxuXHRcdFx0XHRcdG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllczogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGVudHJpZXMgJiYgZW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dChlbnRyaWVzWzBdLmNvbnRlbnRSZWN0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGhyb3R0bGVUaW1lKDI1KVxuXHRcdFx0XHRcdClcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gaGVybWVzRW1wdHkoKTtcblx0fVxuXG5cdGRlc3Ryb3koZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0fVxuXG59XG4iXX0=