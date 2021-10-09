/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T
 * @param {?} valuesNumber
 * @return {?}
 */
export function hermesSkip(valuesNumber) {
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
            var index = 0;
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (index >= valuesNumber) {
                    observer.next(value);
                }
                index++;
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNraXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5za2lwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUd6RCxNQUFNLFVBQVUsVUFBVSxDQUFJLFlBQW9CO0lBRWpEOzs7O0lBQU8sVUFBQyxNQUFNO1FBRWIsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFDLFVBQUEsUUFBUTs7Z0JBRS9CLEtBQUssR0FBRyxDQUFDOztnQkFFUCxVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUTs7OztZQUFFLFVBQUMsS0FBSztnQkFDeEQsSUFBSSxLQUFLLElBQUksWUFBWSxFQUFFO29CQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQjtnQkFFRCxLQUFLLEVBQUUsQ0FBQztZQUNULENBQUMsRUFBQztZQUVGLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVyRm9yT3BlcmF0b3IgfSBmcm9tICcuL29wZXJhdG9yLXV0aWxzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzU2tpcDxUPih2YWx1ZXNOdW1iZXI6IG51bWJlcik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXG5cdHJldHVybiAoc291cmNlKSA9PiB7XG5cblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ID49IHZhbHVlc051bWJlcikge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19