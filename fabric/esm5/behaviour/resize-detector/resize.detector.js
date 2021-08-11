/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, Subject } from 'rxjs';
import { filter, takeUntil, throttleTime } from 'rxjs/operators';
// import * as elementResizeDetectorMaker_ from 'element-resize-detector';
//
// const elementResizeDetectorMaker = elementResizeDetectorMaker_;
// const elementResizeDetectorMaker = require('element-resize-detector');
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector(platformId) {
        this.platformId = platformId;
        this.throttleTime = 25;
        this.unsubscribe$ = new Subject();
        if (isPlatformBrowser(this.platformId)) {
            // this.elementResizeDetector = elementResizeDetectorMaker({
            // 	strategy: 'scroll'
            // });
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.observe = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var producer = (/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                // this.elementResizeDetector.listenTo(element, function(htmlElement: HTMLElement) {
                // 	observer.next(htmlElement);
                // });
            });
            /** @type {?} */
            var source$ = new Observable(producer);
            return source$.pipe(throttleTime(this.throttleTime), filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f !== undefined; })), takeUntil(this.unsubscribe$));
        }
        return of(element);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.destroy = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.elementResizeDetector) {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.elementResizeDetector.uninstall(element);
        }
    };
    ResizeDetector.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResizeDetector.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return ResizeDetector;
}());
export { ResizeDetector };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYmVoYXZpb3VyL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBUWpFO0lBU0Msd0JBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBTmhELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWxCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdwQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2Qyw0REFBNEQ7WUFDNUQsc0JBQXNCO1lBQ3RCLE1BQU07U0FDTjtJQUNGLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQW9CO1FBRTNCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDakMsUUFBUTs7OztZQUFHLFVBQUMsUUFBK0I7Z0JBRWhELG9GQUFvRjtnQkFDcEYsK0JBQStCO2dCQUMvQixNQUFNO1lBQ1AsQ0FBQyxDQUFBOztnQkFFSyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRXhDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDL0IsTUFBTTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLFNBQVMsRUFBZixDQUFlLEVBQUMsRUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUIsQ0FBQztTQUNGO1FBRUQsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBb0I7UUFDM0IsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDOztnQkE3Q0QsVUFBVTs7OztnREFTRyxNQUFNLFNBQUMsV0FBVzs7SUFzQ2hDLHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E5Q1ksY0FBYzs7Ozs7O0lBRTFCLHNDQUEwQjs7Ozs7SUFFMUIsK0NBQW1DOzs7OztJQUVuQyxzQ0FBcUM7Ozs7O0lBRXpCLG9DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gaW1wb3J0ICogYXMgZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXJfIGZyb20gJ2VsZW1lbnQtcmVzaXplLWRldGVjdG9yJztcbi8vXG4vLyBjb25zdCBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlciA9IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyXztcblxuLy8gY29uc3QgZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXIgPSByZXF1aXJlKCdlbGVtZW50LXJlc2l6ZS1kZXRlY3RvcicpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaXplRGV0ZWN0b3Ige1xuXG5cdHByaXZhdGUgdGhyb3R0bGVUaW1lID0gMjU7XG5cblx0cHJpdmF0ZSBlbGVtZW50UmVzaXplRGV0ZWN0b3I6IGFueTtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Ly8gdGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IgPSBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlcih7XG5cdFx0XHQvLyBcdHN0cmF0ZWd5OiAnc2Nyb2xsJ1xuXHRcdFx0Ly8gfSk7XG5cdFx0fVxuXHR9XG5cblx0b2JzZXJ2ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE9ic2VydmFibGU8SFRNTEVsZW1lbnQ+IHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBwcm9kdWNlciA9IChvYnNlcnZlcjogT2JzZXJ2ZXI8SFRNTEVsZW1lbnQ+KSA9PiB7XG5cblx0XHRcdFx0Ly8gdGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IubGlzdGVuVG8oZWxlbWVudCwgZnVuY3Rpb24oaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdC8vIFx0b2JzZXJ2ZXIubmV4dChodG1sRWxlbWVudCk7XG5cdFx0XHRcdC8vIH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3Qgc291cmNlJCA9IG5ldyBPYnNlcnZhYmxlKHByb2R1Y2VyKTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZSQucGlwZShcblx0XHRcdFx0dGhyb3R0bGVUaW1lKHRoaXMudGhyb3R0bGVUaW1lKSxcblx0XHRcdFx0ZmlsdGVyKChmKSA9PiBmICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvZihlbGVtZW50KTtcblx0fVxuXG5cdGRlc3Ryb3koZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IpIHtcblx0XHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdFx0XHR0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3Rvci51bmluc3RhbGwoZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==