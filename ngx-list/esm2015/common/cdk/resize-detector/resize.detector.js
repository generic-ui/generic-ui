/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromRxJsObservable, hermesEmpty } from '@generic-ui/hermes';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
export class ResizeDetector {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    on(element) {
        if (isPlatformBrowser(this.platformId)) {
            return fromRxJsObservable((new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const resizeObserver = new ResizeObserver((/**
                 * @param {?} entries
                 * @return {?}
                 */
                (entries) => {
                    if (entries && entries.length > 0) {
                        observer.next(entries[0].contentRect);
                    }
                }));
                resizeObserver.observe(element);
                return (/**
                 * @return {?}
                 */
                () => resizeObserver.disconnect());
            })))
                .pipe(throttleTime(25)));
        }
        return hermesEmpty();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    destroy(element) {
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
    ResizeDetector.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0I5QyxNQUFNLE9BQU8sY0FBYzs7OztJQUUxQixZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUN4RCxDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxPQUFvQjtRQUV0QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUV2QyxPQUFPLGtCQUFrQixDQUN4QixDQUNDLElBQUksVUFBVTs7OztZQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFOztzQkFFcEMsY0FBYyxHQUFHLElBQUksY0FBYzs7OztnQkFBQyxDQUFDLE9BQVksRUFBRSxFQUFFO29CQUUxRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3RDO2dCQUNGLENBQUMsRUFBQztnQkFFRixjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoQzs7O2dCQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBQztZQUMxQyxDQUFDLEVBQUMsQ0FDRjtpQkFDQyxJQUFJLENBQ0osWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUNoQixDQUNGLENBQUM7U0FFRjtRQUVELE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBb0I7SUFDNUIsQ0FBQzs7O1lBckNELFVBQVU7Ozs7NENBR0csTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7SUFBbkIsb0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBoZXJtZXNFbXB0eSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIGNvbnN0IFJlc2l6ZU9ic2VydmVyOiBhbnk7XG5cbmV4cG9ydCB0eXBlIE9ic2VydmVkU2l6ZSA9IHtcblx0Ym90dG9tOiBudW1iZXI7XG5cdGhlaWdodDogbnVtYmVyO1xuXHRsZWZ0OiBudW1iZXI7XG5cdHJpZ2h0OiBudW1iZXI7XG5cdHRvcDogbnVtYmVyO1xuXHR3aWR0aDogbnVtYmVyO1xuXHR4OiBudW1iZXI7XG5cdHk6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZURldGVjdG9yIHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIZXJtZXNPYnNlcnZhYmxlPE9ic2VydmVkU2l6ZT4ge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblxuXHRcdFx0cmV0dXJuIGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0KFxuXHRcdFx0XHRcdG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllczogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGVudHJpZXMgJiYgZW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dChlbnRyaWVzWzBdLmNvbnRlbnRSZWN0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGhyb3R0bGVUaW1lKDI1KVxuXHRcdFx0XHRcdClcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gaGVybWVzRW1wdHkoKTtcblx0fVxuXG5cdGRlc3Ryb3koZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0fVxuXG59XG4iXX0=