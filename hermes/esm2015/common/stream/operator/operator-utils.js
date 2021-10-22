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
    const nextFn = next ? next : (/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        observer.next(v);
    });
    /** @type {?} */
    const completeFn = complete ? complete : (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3ItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL29wZXJhdG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7QUFFOUUsTUFBTSxVQUFVLHFCQUFxQixDQUNwQyxRQUEyQixFQUMzQixJQUF5QixFQUN6QixRQUFxQjs7VUFFZixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztJQUFDLENBQUMsQ0FBSSxFQUFFLEVBQUU7UUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUE7O1VBQ0QsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7OztJQUFDLEdBQUcsRUFBRTtRQUN2QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdCQUFnQixDQUFDO1FBQzNCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSzs7OztRQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLFFBQVEsRUFBRSxVQUFVO0tBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBSSxRQUEyQjtJQUNwRSxPQUFPLElBQUksZ0JBQWdCLENBQUM7UUFDM0IsSUFBSTs7OztRQUFFLENBQUMsQ0FBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLEtBQUs7Ozs7UUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxRQUFROzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7S0FDbkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2ZXInO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVyRm9yT3BlcmF0b3I8VD4oXG5cdG9ic2VydmVyOiBIZXJtZXNPYnNlcnZlcjxUPixcblx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0Y29tcGxldGU/OiAoKSA9PiB2b2lkKTogSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0Y29uc3QgbmV4dEZuID0gbmV4dCA/IG5leHQgOiAodjogVCkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIubmV4dCh2KTtcblx0XHR9LFxuXHRcdGNvbXBsZXRlRm4gPSBjb21wbGV0ZSA/IGNvbXBsZXRlIDogKCkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHR9O1xuXG5cdHJldHVybiBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0bmV4dDogbmV4dEZuLFxuXHRcdGVycm9yOiAoZTogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlKSxcblx0XHRjb21wbGV0ZTogY29tcGxldGVGblxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZXJGcm9tT2JzZXJ2ZXI8VD4ob2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPFQ+KTogSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cdHJldHVybiBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0bmV4dDogKHY6IFQpID0+IG9ic2VydmVyLm5leHQodiksXG5cdFx0ZXJyb3I6IChlOiBhbnkpID0+IG9ic2VydmVyLmVycm9yKGUpLFxuXHRcdGNvbXBsZXRlOiAoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdH0pO1xufVxuIl19