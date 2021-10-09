/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../../common/stream/observable/hermes.observable';
/**
 * @template T
 * @param {?} source$
 * @return {?}
 */
export function fromRxJsObservable(source$) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return observer.next(value); }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return observer.error(error); }), (/**
         * @return {?}
         */
        function () { return observer.complete(); }));
        return (/**
         * @return {?}
         */
        function () { return subscription.unsubscribe(); });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1yeGpzLW9ic2VydmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9yeGpzL2Zyb20tcnhqcy1vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7O0FBR3BGLE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxPQUFzQjtJQUMzRCxPQUFPLElBQUksZ0JBQWdCOzs7O0lBQUMsVUFBQyxRQUFROztZQUM5QixZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVM7Ozs7UUFDckMsVUFBQyxLQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQjs7OztRQUNsQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCOzs7UUFDckMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBbkIsQ0FBbUIsRUFDekI7UUFDRDs7O1FBQU8sY0FBTSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQztJQUN6QyxDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SeEpzT2JzZXJ2YWJsZTxUPihzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2UkLnN1YnNjcmliZShcblx0XHRcdCh2YWx1ZTogVCkgPT4gb2JzZXJ2ZXIubmV4dCh2YWx1ZSksXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdCk7XG5cdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9KTtcbn1cbiJdfQ==