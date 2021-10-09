/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromRxJsObservable, hermesEmpty } from '@generic-ui/hermes';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector(platformId) {
        this.platformId = platformId;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.on = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platformId)) {
            return fromRxJsObservable((new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var resizeObserver = new ResizeObserver((/**
                 * @param {?} entries
                 * @return {?}
                 */
                function (entries) {
                    if (entries && entries.length > 0) {
                        observer.next(entries[0].contentRect);
                    }
                }));
                resizeObserver.observe(element);
                return (/**
                 * @return {?}
                 */
                function () { return resizeObserver.disconnect(); });
            })))
                .pipe(throttleTime(25)));
        }
        return hermesEmpty();
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
    ResizeDetector.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZTlDO0lBR0Msd0JBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQ3hELENBQUM7Ozs7O0lBRUQsMkJBQUU7Ozs7SUFBRixVQUFHLE9BQW9CO1FBRXRCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBRXZDLE9BQU8sa0JBQWtCLENBQ3hCLENBQ0MsSUFBSSxVQUFVOzs7O1lBQUMsVUFBQyxRQUF1Qjs7b0JBRWhDLGNBQWMsR0FBRyxJQUFJLGNBQWM7Ozs7Z0JBQUMsVUFBQyxPQUFZO29CQUV0RCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3RDO2dCQUNGLENBQUMsRUFBQztnQkFFRixjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoQzs7O2dCQUFPLGNBQU0sT0FBQSxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQTNCLENBQTJCLEVBQUM7WUFDMUMsQ0FBQyxFQUFDLENBQ0Y7aUJBQ0MsSUFBSSxDQUNKLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FDaEIsQ0FDRixDQUFDO1NBRUY7UUFFRCxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQW9CO0lBQzVCLENBQUM7O2dCQXJDRCxVQUFVOzs7O2dEQUdHLE1BQU0sU0FBQyxXQUFXOztJQW9DaEMscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXRDWSxjQUFjOzs7Ozs7SUFFZCxvQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIGhlcm1lc0VtcHR5LCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgY29uc3QgUmVzaXplT2JzZXJ2ZXI6IGFueTtcblxuZXhwb3J0IHR5cGUgT2JzZXJ2ZWRTaXplID0ge1xuXHRib3R0b206IG51bWJlcjtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdGxlZnQ6IG51bWJlcjtcblx0cmlnaHQ6IG51bWJlcjtcblx0dG9wOiBudW1iZXI7XG5cdHdpZHRoOiBudW1iZXI7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaXplRGV0ZWN0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhlcm1lc09ic2VydmFibGU8T2JzZXJ2ZWRTaXplPiB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG5cdFx0XHRyZXR1cm4gZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0bmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzOiBhbnkpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KGVudHJpZXNbMF0uY29udGVudFJlY3QpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0aHJvdHRsZVRpbWUoMjUpXG5cdFx0XHRcdFx0KVxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBoZXJtZXNFbXB0eSgpO1xuXHR9XG5cblx0ZGVzdHJveShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHR9XG5cbn1cbiJdfQ==