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
export function hermesFilter(operation) {
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
                if (operation(value)) {
                    observer.next(value);
                }
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFekQsTUFBTSxVQUFVLFlBQVksQ0FBSSxTQUFrQztJQUNqRTs7OztJQUFPLFVBQUMsTUFBTTtRQUNiLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7UUFBQyxVQUFBLFFBQVE7O2dCQUU3QixVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUTs7OztZQUFFLFVBQUMsS0FBSztnQkFDeEQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0YsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzRmlsdGVyPFQ+KG9wZXJhdGlvbjogKHZhbHVlOiBhbnkpID0+IGJvb2xlYW4pOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcblx0cmV0dXJuIChzb3VyY2UpID0+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKG9wZXJhdGlvbih2YWx1ZSkpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKClcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==