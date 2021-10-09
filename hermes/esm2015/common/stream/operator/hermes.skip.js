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
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (index >= valuesNumber) {
                    observer.next(value);
                }
                index++;
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNraXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5za2lwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUd6RCxNQUFNLFVBQVUsVUFBVSxDQUFJLFlBQW9CO0lBRWpEOzs7O0lBQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUVqQixPQUFPLElBQUksZ0JBQWdCOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUVsQyxLQUFLLEdBQUcsQ0FBQzs7a0JBRVAsVUFBVSxHQUFHLHFCQUFxQixDQUFDLFFBQVE7Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7b0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO2dCQUVELEtBQUssRUFBRSxDQUFDO1lBQ1QsQ0FBQyxFQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNTa2lwPFQ+KHZhbHVlc051bWJlcjogbnVtYmVyKTogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG5cblx0cmV0dXJuIChzb3VyY2UpID0+IHtcblxuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3Iob2JzZXJ2ZXIsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggPj0gdmFsdWVzTnVtYmVyKSB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=