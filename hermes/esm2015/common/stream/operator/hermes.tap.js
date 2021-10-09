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
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                operation(value);
                observer.next(value);
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFekQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxTQUE2QjtJQUN6RDs7OztJQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFOztrQkFFaEMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLFFBQVE7Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzVGFwPFQ+KG9wZXJhdGlvbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG5cdHJldHVybiAoc291cmNlKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHN1YnNjcmliZXJGb3JPcGVyYXRvcihvYnNlcnZlciwgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdG9wZXJhdGlvbih2YWx1ZSk7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=