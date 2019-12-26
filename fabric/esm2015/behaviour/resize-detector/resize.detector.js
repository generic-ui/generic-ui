/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, Subject } from 'rxjs';
import { filter, takeUntil, throttleTime } from 'rxjs/operators';
import * as elementResizeDetectorMaker_ from 'element-resize-detector';
/** @type {?} */
const elementResizeDetectorMaker = elementResizeDetectorMaker_;
export class ResizeDetector {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.throttleTime = 25;
        this.unsubscribe$ = new Subject();
        if (isPlatformBrowser(this.platformId)) {
            this.elementResizeDetector = elementResizeDetectorMaker({
                strategy: 'scroll'
            });
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    observe(element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const producer = (/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                this.elementResizeDetector.listenTo(element, (/**
                 * @param {?} htmlElement
                 * @return {?}
                 */
                function (htmlElement) {
                    observer.next(htmlElement);
                }));
            });
            /** @type {?} */
            const source$ = new Observable(producer);
            return source$.pipe(throttleTime(this.throttleTime), filter((/**
             * @param {?} f
             * @return {?}
             */
            (f) => f !== undefined)), takeUntil(this.unsubscribe$));
        }
        return of(element);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    destroy(element) {
        if (this.elementResizeDetector) {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.elementResizeDetector.uninstall(element);
        }
    }
}
ResizeDetector.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResizeDetector.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.throttleTime;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.elementResizeDetector;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYmVoYXZpb3VyL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxLQUFLLDJCQUEyQixNQUFNLHlCQUF5QixDQUFDOztNQUVqRSwwQkFBMEIsR0FBRywyQkFBMkI7QUFHOUQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFRMUIsWUFBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFOaEQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFJbEIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3BDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsR0FBRywwQkFBMEIsQ0FBQztnQkFDdkQsUUFBUSxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFvQjtRQUUzQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ2pDLFFBQVE7Ozs7WUFBRyxDQUFDLFFBQStCLEVBQUUsRUFBRTtnQkFFcEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFFLFVBQVMsV0FBd0I7b0JBQzdFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ0osQ0FBQyxDQUFBOztrQkFFSyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRXhDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDL0IsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFDLEVBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCLENBQUM7U0FDRjtRQUVELE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQW9CO1FBQzNCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7O1lBN0NELFVBQVU7Ozs7NENBU0csTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7SUFOL0Isc0NBQTBCOzs7OztJQUUxQiwrQ0FBbUM7Ozs7O0lBRW5DLHNDQUFxQzs7Ozs7SUFFekIsb0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlcl8gZnJvbSAnZWxlbWVudC1yZXNpemUtZGV0ZWN0b3InO1xuXG5jb25zdCBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlciA9IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyXztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZURldGVjdG9yIHtcblxuXHRwcml2YXRlIHRocm90dGxlVGltZSA9IDI1O1xuXG5cdHByaXZhdGUgZWxlbWVudFJlc2l6ZURldGVjdG9yOiBhbnk7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yID0gZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXIoe1xuXHRcdFx0XHRzdHJhdGVneTogJ3Njcm9sbCdcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9ic2VydmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBPYnNlcnZhYmxlPEhUTUxFbGVtZW50PiB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgcHJvZHVjZXIgPSAob2JzZXJ2ZXI6IE9ic2VydmVyPEhUTUxFbGVtZW50PikgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yLmxpc3RlblRvKGVsZW1lbnQsIGZ1bmN0aW9uKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQoaHRtbEVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHNvdXJjZSQgPSBuZXcgT2JzZXJ2YWJsZShwcm9kdWNlcik7XG5cblx0XHRcdHJldHVybiBzb3VyY2UkLnBpcGUoXG5cdFx0XHRcdHRocm90dGxlVGltZSh0aGlzLnRocm90dGxlVGltZSksXG5cdFx0XHRcdGZpbHRlcigoZikgPT4gZiAhPT0gdW5kZWZpbmVkKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2YoZWxlbWVudCk7XG5cdH1cblxuXHRkZXN0cm95KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yKSB7XG5cdFx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHRcdFx0dGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IudW5pbnN0YWxsKGVsZW1lbnQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=