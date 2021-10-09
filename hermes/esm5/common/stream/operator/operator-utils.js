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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL29wZXJhdG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7QUFFOUUsTUFBTSxVQUFVLHFCQUFxQixDQUNwQyxRQUEyQixFQUMzQixJQUF5QixFQUN6QixRQUFxQjs7UUFFakIsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7SUFBQyxVQUFDLENBQUk7UUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUE7O1FBQ0QsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7OztJQUFDO1FBQ2xDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0JBQWdCLENBQUM7UUFDM0IsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLOzs7O1FBQUUsVUFBQyxDQUFNLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFBO1FBQ3BDLFFBQVEsRUFBRSxVQUFVO0tBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBSSxRQUEyQjtJQUNwRSxPQUFPLElBQUksZ0JBQWdCLENBQUM7UUFDM0IsSUFBSTs7OztRQUFFLFVBQUMsQ0FBSSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQTtRQUNoQyxLQUFLOzs7O1FBQUUsVUFBQyxDQUFNLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFBO1FBQ3BDLFFBQVE7OztRQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQW5CLENBQW1CLENBQUE7S0FDbkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2ZXInO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVyRm9yT3BlcmF0b3I8VD4oXG5cdG9ic2VydmVyOiBIZXJtZXNPYnNlcnZlcjxUPixcblx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0Y29tcGxldGU/OiAoKSA9PiB2b2lkKTogSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0bGV0IG5leHRGbiA9IG5leHQgPyBuZXh0IDogKHY6IFQpID0+IHtcblx0XHRcdG9ic2VydmVyLm5leHQodik7XG5cdFx0fSxcblx0XHRjb21wbGV0ZUZuID0gY29tcGxldGUgPyBjb21wbGV0ZSA6ICgpID0+IHtcblx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0fTtcblxuXHRyZXR1cm4gbmV3IEhlcm1lc1N1YnNjcmliZXIoe1xuXHRcdG5leHQ6IG5leHRGbixcblx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0Y29tcGxldGU6IGNvbXBsZXRlRm5cblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVyRnJvbU9ic2VydmVyPFQ+KG9ic2VydmVyOiBIZXJtZXNPYnNlcnZlcjxUPik6IEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXHRyZXR1cm4gbmV3IEhlcm1lc1N1YnNjcmliZXIoe1xuXHRcdG5leHQ6ICh2OiBUKSA9PiBvYnNlcnZlci5uZXh0KHYpLFxuXHRcdGVycm9yOiAoZTogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlKSxcblx0XHRjb21wbGV0ZTogKCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHR9KTtcbn1cbiJdfQ==