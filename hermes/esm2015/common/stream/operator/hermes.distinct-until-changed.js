/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T
 * @param {?=} compareFn
 * @return {?}
 */
export function hermesDistinctUntilChanged(compareFn) {
    /** @type {?} */
    const compare = compareFn ? compareFn : defaultCompareFn;
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let previousValue = null;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (previousValue === null || !compare(previousValue, value)) {
                    previousValue = value;
                    observer.next(value);
                }
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function defaultCompareFn(a, b) {
    return a === b;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmRpc3RpbmN0LXVudGlsLWNoYW5nZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5kaXN0aW5jdC11bnRpbC1jaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFFM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUd6RCxNQUFNLFVBQVUsMEJBQTBCLENBQUksU0FBdUM7O1VBRTlFLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0lBRXhEOzs7O0lBQU8sQ0FBQyxNQUEyQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFJLENBQUMsUUFBNkIsRUFBRSxFQUFFOztnQkFFNUQsYUFBYSxHQUFNLElBQUk7O2tCQUVyQixVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUTs7OztZQUFFLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBRS9ELElBQUksYUFBYSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQzdELGFBQWEsR0FBRyxLQUFLLENBQUE7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0YsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELFNBQVMsZ0JBQWdCLENBQUksQ0FBSSxFQUFFLENBQUk7SUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmVyJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZDxUPihjb21wYXJlRm4/OiAob25lOiBULCB0d286IFQpID0+IGJvb2xlYW4pOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcblxuXHRjb25zdCBjb21wYXJlID0gY29tcGFyZUZuID8gY29tcGFyZUZuIDogZGVmYXVsdENvbXBhcmVGbjtcblxuXHRyZXR1cm4gKHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxUPigob2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPGFueT4pID0+IHtcblxuXHRcdFx0bGV0IHByZXZpb3VzVmFsdWU6IFQgPSBudWxsO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWU6IFQpID0+IHtcblxuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSA9PT0gbnVsbCB8fCAhY29tcGFyZShwcmV2aW91c1ZhbHVlLCB2YWx1ZSkpIHtcblx0XHRcdFx0XHRwcmV2aW91c1ZhbHVlID0gdmFsdWVcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlRm48VD4oYTogVCwgYjogVCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYSA9PT0gYjtcbn1cbiJdfQ==