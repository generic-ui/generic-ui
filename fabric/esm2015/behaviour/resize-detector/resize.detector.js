/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, throttleTime } from 'rxjs/operators';
import * as elementResizeDetectorMaker_ from 'element-resize-detector';
/** @type {?} */
const elementResizeDetectorMaker = elementResizeDetectorMaker_;
export class ResizeDetector {
    constructor() {
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
    observe(element) {
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
    /**
     * @param {?} element
     * @return {?}
     */
    destroy(element) {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.elementResizeDetector.uninstall(element);
    }
}
ResizeDetector.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResizeDetector.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYmVoYXZpb3VyL3Jlc2l6ZS1kZXRlY3Rvci9yZXNpemUuZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxLQUFLLDJCQUEyQixNQUFNLHlCQUF5QixDQUFDOztNQUVqRSwwQkFBMEIsR0FBRywyQkFBMkI7QUFHOUQsTUFBTSxPQUFPLGNBQWM7SUFRMUI7UUFOUSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUlsQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLDBCQUEwQixDQUFDO1lBQ3ZELFFBQVEsRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQW9COztjQUVyQixRQUFROzs7O1FBQUcsQ0FBQyxRQUErQixFQUFFLEVBQUU7WUFFcEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUUsVUFBUyxXQUF3QjtnQkFDN0UsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQTs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDO1FBRXhDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDL0IsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFDLEVBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFvQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFyQ0QsVUFBVTs7Ozs7Ozs7O0lBR1Ysc0NBQTBCOzs7OztJQUUxQiwrQ0FBbUM7Ozs7O0lBRW5DLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlcl8gZnJvbSAnZWxlbWVudC1yZXNpemUtZGV0ZWN0b3InO1xuXG5jb25zdCBlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlciA9IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyXztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2l6ZURldGVjdG9yIHtcblxuXHRwcml2YXRlIHRocm90dGxlVGltZSA9IDI1O1xuXG5cdHByaXZhdGUgZWxlbWVudFJlc2l6ZURldGVjdG9yOiBhbnk7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZWxlbWVudFJlc2l6ZURldGVjdG9yID0gZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXIoe1xuXHRcdFx0c3RyYXRlZ3k6ICdzY3JvbGwnXG5cdFx0fSk7XG5cdH1cblxuXHRvYnNlcnZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxIVE1MRWxlbWVudD4ge1xuXG5cdFx0Y29uc3QgcHJvZHVjZXIgPSAob2JzZXJ2ZXI6IE9ic2VydmVyPEhUTUxFbGVtZW50PikgPT4ge1xuXG5cdFx0XHR0aGlzLmVsZW1lbnRSZXNpemVEZXRlY3Rvci5saXN0ZW5UbyhlbGVtZW50LCBmdW5jdGlvbihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChodG1sRWxlbWVudCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc291cmNlJCA9IG5ldyBPYnNlcnZhYmxlKHByb2R1Y2VyKTtcblxuXHRcdHJldHVybiBzb3VyY2UkLnBpcGUoXG5cdFx0XHR0aHJvdHRsZVRpbWUodGhpcy50aHJvdHRsZVRpbWUpLFxuXHRcdFx0ZmlsdGVyKChmKSA9PiBmICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdCk7XG5cdH1cblxuXHRkZXN0cm95KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdFx0dGhpcy5lbGVtZW50UmVzaXplRGV0ZWN0b3IudW5pbnN0YWxsKGVsZW1lbnQpO1xuXHR9XG5cbn1cbiJdfQ==