/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject } from './stream/observable/hermes.subject';
import { hermesTakeUntil } from './stream/operator/hermes.take-until';
import { toRxJsObservable } from '../infrastructure/rxjs/to-rxjs-observable';
import { takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
Reactive = /** @class */ (function () {
    function Reactive() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    Reactive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe();
    };
    /**
     * @protected
     * @template T
     * @return {?}
     */
    Reactive.prototype.takeUntil = /**
     * @protected
     * @template T
     * @return {?}
     */
    function () {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.hermesUnsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.hermesTakeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.isNotStopped = /**
     * @protected
     * @return {?}
     */
    function () {
        return !((/** @type {?} */ (this.hermesUnsubscribe$))).isCompleted;
    };
    return Reactive;
}());
/**
 * @abstract
 */
export { Reactive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.hermesUnsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDOzs7O0lBSUM7UUFGaUIsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUdoRSxDQUFDOzs7O0lBRUQsOEJBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRVMsNEJBQVM7Ozs7O0lBQW5CO1FBQ0MsT0FBTyxTQUFTLENBQ2YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQ3pDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLG9DQUFpQjs7OztJQUEzQjtRQUNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFUyxrQ0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRVMsK0JBQVk7Ozs7SUFBdEI7UUFDQyxPQUFPLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsa0JBQWtCLEVBQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN0RCxDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7SUE1QkEsc0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5pbXBvcnQgeyBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZS11bnRpbCc7XG5pbXBvcnQgeyB0b1J4SnNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvcnhqcy90by1yeGpzLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzVW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdGFrZVVudGlsPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG5cdFx0cmV0dXJuIHRha2VVbnRpbChcblx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpXG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNVbnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNUYWtlVW50aWwoKTogYW55IHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBpc05vdFN0b3BwZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQgYXMgYW55KS5pc0NvbXBsZXRlZDtcblx0fVxuXG59XG4iXX0=