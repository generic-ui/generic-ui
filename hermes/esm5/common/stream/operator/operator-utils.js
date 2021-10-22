/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
/**
 * @template T
 * @param {?} observer
 * @param {?=} next
 * @param {?=} complete
 * @return {?}
 */
export function subscriberForOperator(observer, next, complete) {
    /** @type {?} */
    var nextFn = next ? next : (/**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        observer.next(v);
    });
    /** @type {?} */
    var completeFn = complete ? complete : (/**
     * @return {?}
     */
    function () {
        observer.complete();
    });
    return new HermesSubscriber({
        next: nextFn,
        error: (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return observer.error(e); }),
        complete: completeFn
    });
}
/**
 * @template T
 * @param {?} observer
 * @return {?}
 */
export function subscriberFromObserver(observer) {
    return new HermesSubscriber({
        next: (/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return observer.next(v); }),
        error: (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return observer.error(e); }),
        complete: (/**
         * @return {?}
         */
        function () { return observer.complete(); })
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL29wZXJhdG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7QUFFOUUsTUFBTSxVQUFVLHFCQUFxQixDQUNwQyxRQUEyQixFQUMzQixJQUF5QixFQUN6QixRQUFxQjs7UUFFZixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztJQUFDLFVBQUMsQ0FBSTtRQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQTs7UUFDRCxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O0lBQUM7UUFDbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQTtJQUVGLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztRQUMzQixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUs7Ozs7UUFBRSxVQUFDLENBQU0sSUFBSyxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUE7UUFDcEMsUUFBUSxFQUFFLFVBQVU7S0FDcEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFJLFFBQTJCO0lBQ3BFLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztRQUMzQixJQUFJOzs7O1FBQUUsVUFBQyxDQUFJLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFBO1FBQ2hDLEtBQUs7Ozs7UUFBRSxVQUFDLENBQU0sSUFBSyxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUE7UUFDcEMsUUFBUTs7O1FBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQTtLQUNuQyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZlcic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZXJGb3JPcGVyYXRvcjxUPihcblx0b2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPFQ+LFxuXHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblxuXHRjb25zdCBuZXh0Rm4gPSBuZXh0ID8gbmV4dCA6ICh2OiBUKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KHYpO1xuXHRcdH0sXG5cdFx0Y29tcGxldGVGbiA9IGNvbXBsZXRlID8gY29tcGxldGUgOiAoKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH07XG5cblx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRuZXh0OiBuZXh0Rm4sXG5cdFx0ZXJyb3I6IChlOiBhbnkpID0+IG9ic2VydmVyLmVycm9yKGUpLFxuXHRcdGNvbXBsZXRlOiBjb21wbGV0ZUZuXG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlckZyb21PYnNlcnZlcjxUPihvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8VD4pOiBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRuZXh0OiAodjogVCkgPT4gb2JzZXJ2ZXIubmV4dCh2KSxcblx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0Y29tcGxldGU6ICgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0fSk7XG59XG4iXX0=