/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, throttleTime } from 'rxjs/operators';
import * as elementResizeDetectorMaker_ from 'element-resize-detector';
/** @type {?} */
var elementResizeDetectorMaker = elementResizeDetectorMaker_;
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector() {
        this.throttleTime = 25;
        this.unsubscribe$ = new Subject();
        this.elementResizeDetector = elementResizeDetectorMaker({
            strategy: 'scroll'
        });
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
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.elementResizeDetector.uninstall(element);
    };
    ResizeDetector.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResizeDetector.ctorParameters = function () { return []; };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYmVoYXZpb3VyL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxLQUFLLDJCQUEyQixNQUFNLHlCQUF5QixDQUFDOztJQUVqRSwwQkFBMEIsR0FBRywyQkFBMkI7QUFFOUQ7SUFTQztRQU5RLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWxCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsMEJBQTBCLENBQUM7WUFDdkQsUUFBUSxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBb0I7UUFBNUIsaUJBZ0JDOztZQWRNLFFBQVE7Ozs7UUFBRyxVQUFDLFFBQStCO1lBRWhELEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFFLFVBQVMsV0FBd0I7Z0JBQzdFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLENBQUE7O1lBRUssT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUV4QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQy9CLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxTQUFTLEVBQWYsQ0FBZSxFQUFDLEVBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxPQUFvQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFyQ0QsVUFBVTs7OztJQXVDWCxxQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdENZLGNBQWM7Ozs7OztJQUUxQixzQ0FBMEI7Ozs7O0lBRTFCLCtDQUFtQzs7Ozs7SUFFbkMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyXyBmcm9tICdlbGVtZW50LXJlc2l6ZS1kZXRlY3Rvcic7XG5cbmNvbnN0IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyID0gZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXJfO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaXplRGV0ZWN0b3Ige1xuXG5cdHByaXZhdGUgdGhyb3R0bGVUaW1lID0gMjU7XG5cblx0cHJpdmF0ZSBlbGVtZW50UmVzaXplRGV0ZWN0b3I6IGFueTtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IgPSBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlcih7XG5cdFx0XHRzdHJhdGVneTogJ3Njcm9sbCdcblx0XHR9KTtcblx0fVxuXG5cdG9ic2VydmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBPYnNlcnZhYmxlPEhUTUxFbGVtZW50PiB7XG5cblx0XHRjb25zdCBwcm9kdWNlciA9IChvYnNlcnZlcjogT2JzZXJ2ZXI8SFRNTEVsZW1lbnQ+KSA9PiB7XG5cblx0XHRcdHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yLmxpc3RlblRvKGVsZW1lbnQsIGZ1bmN0aW9uKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KGh0bWxFbGVtZW50KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBzb3VyY2UkID0gbmV3IE9ic2VydmFibGUocHJvZHVjZXIpO1xuXG5cdFx0cmV0dXJuIHNvdXJjZSQucGlwZShcblx0XHRcdHRocm90dGxlVGltZSh0aGlzLnRocm90dGxlVGltZSksXG5cdFx0XHRmaWx0ZXIoKGYpID0+IGYgIT09IHVuZGVmaW5lZCksXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0KTtcblx0fVxuXG5cdGRlc3Ryb3koZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0XHR0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3Rvci51bmluc3RhbGwoZWxlbWVudCk7XG5cdH1cblxufVxuIl19