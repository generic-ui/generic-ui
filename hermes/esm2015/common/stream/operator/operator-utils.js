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
    let nextFn = next ? next : (/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        observer.next(v);
    });
    /** @type {?} */
    let completeFn = complete ? complete : (/**
     * @return {?}
     */
    () => {
        observer.complete();
    });
    return new HermesSubscriber({
        next: nextFn,
        error: (/**
         * @param {?} e
         * @return {?}
         */
        (e) => observer.error(e)),
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
        (v) => observer.next(v)),
        error: (/**
         * @param {?} e
         * @return {?}
         */
        (e) => observer.error(e)),
        complete: (/**
         * @return {?}
         */
        () => observer.complete())
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL29wZXJhdG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7QUFFOUUsTUFBTSxVQUFVLHFCQUFxQixDQUNwQyxRQUEyQixFQUMzQixJQUF5QixFQUN6QixRQUFxQjs7UUFFakIsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7SUFBQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFBOztRQUNELFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7SUFBQyxHQUFHLEVBQUU7UUFDdkMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQTtJQUVGLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztRQUMzQixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUs7Ozs7UUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxRQUFRLEVBQUUsVUFBVTtLQUNwQixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUksUUFBMkI7SUFDcEUsT0FBTyxJQUFJLGdCQUFnQixDQUFDO1FBQzNCLElBQUk7Ozs7UUFBRSxDQUFDLENBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxLQUFLOzs7O1FBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsUUFBUTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0tBQ25DLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmVyJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlckZvck9wZXJhdG9yPFQ+KFxuXHRvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8VD4sXG5cdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdGxldCBuZXh0Rm4gPSBuZXh0ID8gbmV4dCA6ICh2OiBUKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KHYpO1xuXHRcdH0sXG5cdFx0Y29tcGxldGVGbiA9IGNvbXBsZXRlID8gY29tcGxldGUgOiAoKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH07XG5cblx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRuZXh0OiBuZXh0Rm4sXG5cdFx0ZXJyb3I6IChlOiBhbnkpID0+IG9ic2VydmVyLmVycm9yKGUpLFxuXHRcdGNvbXBsZXRlOiBjb21wbGV0ZUZuXG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlckZyb21PYnNlcnZlcjxUPihvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8VD4pOiBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRuZXh0OiAodjogVCkgPT4gb2JzZXJ2ZXIubmV4dCh2KSxcblx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0Y29tcGxldGU6ICgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0fSk7XG59XG4iXX0=