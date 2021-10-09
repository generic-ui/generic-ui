/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T, R
 * @param {?} convert
 * @return {?}
 */
export function hermesMap(convert) {
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
            let index = 0;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                observer.next(convert(value, index++));
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLm1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFJekQsTUFBTSxVQUFVLFNBQVMsQ0FBTyxPQUF1QztJQUV0RTs7OztJQUFPLENBQUMsTUFBMkIsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7UUFBSSxDQUFDLFFBQTZCLEVBQUUsRUFBRTs7Z0JBQzVELEtBQUssR0FBRyxDQUFDOztrQkFFUCxVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUTs7OztZQUFFLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc01hcDxULCBSPihjb252ZXJ0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIpOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcblxuXHRyZXR1cm4gKHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxSPigob2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPGFueT4pID0+IHtcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3Iob2JzZXJ2ZXIsICh2YWx1ZTogVCkgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KGNvbnZlcnQodmFsdWUsIGluZGV4KyspKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19