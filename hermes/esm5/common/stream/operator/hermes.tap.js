/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T
 * @param {?} operation
 * @return {?}
 */
export function hermesTap(operation) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                operation(value);
                observer.next(value);
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFekQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxTQUE2QjtJQUN6RDs7OztJQUFPLFVBQUMsTUFBTTtRQUNiLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7UUFBQyxVQUFBLFFBQVE7O2dCQUU3QixVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUTs7OztZQUFFLFVBQUMsS0FBSztnQkFDeEQsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLENBQUMsRUFBQztZQUVGLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVyRm9yT3BlcmF0b3IgfSBmcm9tICcuL29wZXJhdG9yLXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1RhcDxUPihvcGVyYXRpb246ICh2YWx1ZTogVCkgPT4gdm9pZCk6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXHRyZXR1cm4gKHNvdXJjZSkgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3Iob2JzZXJ2ZXIsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRvcGVyYXRpb24odmFsdWUpO1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19