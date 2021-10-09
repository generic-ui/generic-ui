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
                if (operation(value)) {
                    observer.next(value);
                }
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFekQsTUFBTSxVQUFVLFlBQVksQ0FBSSxTQUFrQztJQUNqRTs7OztJQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFOztrQkFFaEMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLFFBQVE7Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7WUFDRixDQUFDLEVBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNGaWx0ZXI8VD4ob3BlcmF0aW9uOiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXHRyZXR1cm4gKHNvdXJjZSkgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3Iob2JzZXJ2ZXIsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAob3BlcmF0aW9uKHZhbHVlKSkge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcikuZ2V0RmluYWxpemUoKVxuXHRcdH0pO1xuXHR9O1xufVxuIl19