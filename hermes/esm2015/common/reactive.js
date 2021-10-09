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
export class Reactive {
    /**
     * @protected
     */
    constructor() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    /**
     * @protected
     * @template T
     * @return {?}
     */
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    /**
     * @protected
     * @return {?}
     */
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    /**
     * @protected
     * @return {?}
     */
    isNotStopped() {
        return !((/** @type {?} */ (this.hermesUnsubscribe$))).isCompleted;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.hermesUnsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLE1BQU0sT0FBZ0IsUUFBUTs7OztJQUk3QjtRQUZpQix1QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBR2hFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRVMsU0FBUztRQUNsQixPQUFPLFNBQVMsQ0FDZixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDekMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRVMsaUJBQWlCO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRVMsWUFBWTtRQUNyQixPQUFPLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsa0JBQWtCLEVBQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN0RCxDQUFDO0NBRUQ7Ozs7OztJQTVCQSxzQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhlcm1lc1N1YmplY3QgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5zdWJqZWN0JztcbmltcG9ydCB7IGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlLXVudGlsJztcbmltcG9ydCB7IHRvUnhKc09ic2VydmFibGUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9yeGpzL3RvLXJ4anMtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB0YWtlVW50aWw8VD4oKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcblx0XHRyZXR1cm4gdGFrZVVudGlsKFxuXHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJClcblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGlzTm90U3RvcHBlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCBhcyBhbnkpLmlzQ29tcGxldGVkO1xuXHR9XG5cbn1cbiJdfQ==