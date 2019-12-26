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
var elementResizeDetectorMaker = elementResizeDetectorMaker_;
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector(platformId) {
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
    ResizeDetector.prototype.observe = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var producer = (/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                _this.elementResizeDetector.listenTo(element, (/**
                 * @param {?} htmlElement
                 * @return {?}
                 */
                function (htmlElement) {
                    observer.next(htmlElement);
                }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYmVoYXZpb3VyL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxLQUFLLDJCQUEyQixNQUFNLHlCQUF5QixDQUFDOztJQUVqRSwwQkFBMEIsR0FBRywyQkFBMkI7QUFFOUQ7SUFTQyx3QkFBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFOaEQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFJbEIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3BDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsR0FBRywwQkFBMEIsQ0FBQztnQkFDdkQsUUFBUSxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxPQUFvQjtRQUE1QixpQkFvQkM7UUFsQkEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUNqQyxRQUFROzs7O1lBQUcsVUFBQyxRQUErQjtnQkFFaEQsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFFLFVBQVMsV0FBd0I7b0JBQzdFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ0osQ0FBQyxDQUFBOztnQkFFSyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRXhDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDL0IsTUFBTTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLFNBQVMsRUFBZixDQUFlLEVBQUMsRUFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUIsQ0FBQztTQUNGO1FBRUQsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBb0I7UUFDM0IsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDOztnQkE3Q0QsVUFBVTs7OztnREFTRyxNQUFNLFNBQUMsV0FBVzs7SUFzQ2hDLHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E5Q1ksY0FBYzs7Ozs7O0lBRTFCLHNDQUEwQjs7Ozs7SUFFMUIsK0NBQW1DOzs7OztJQUVuQyxzQ0FBcUM7Ozs7O0lBRXpCLG9DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXJfIGZyb20gJ2VsZW1lbnQtcmVzaXplLWRldGVjdG9yJztcblxuY29uc3QgZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXIgPSBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlcl87XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNpemVEZXRlY3RvciB7XG5cblx0cHJpdmF0ZSB0aHJvdHRsZVRpbWUgPSAyNTtcblxuXHRwcml2YXRlIGVsZW1lbnRSZXNpemVEZXRlY3RvcjogYW55O1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3RvciA9IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyKHtcblx0XHRcdFx0c3RyYXRlZ3k6ICdzY3JvbGwnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvYnNlcnZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxIVE1MRWxlbWVudD4ge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IHByb2R1Y2VyID0gKG9ic2VydmVyOiBPYnNlcnZlcjxIVE1MRWxlbWVudD4pID0+IHtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3Rvci5saXN0ZW5UbyhlbGVtZW50LCBmdW5jdGlvbihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KGh0bWxFbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBzb3VyY2UkID0gbmV3IE9ic2VydmFibGUocHJvZHVjZXIpO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlJC5waXBlKFxuXHRcdFx0XHR0aHJvdHRsZVRpbWUodGhpcy50aHJvdHRsZVRpbWUpLFxuXHRcdFx0XHRmaWx0ZXIoKGYpID0+IGYgIT09IHVuZGVmaW5lZCksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9mKGVsZW1lbnQpO1xuXHR9XG5cblx0ZGVzdHJveShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3Rvcikge1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0XHRcdHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yLnVuaW5zdGFsbChlbGVtZW50KTtcblx0XHR9XG5cdH1cblxufVxuIl19