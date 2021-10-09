/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T
 * @return {?}
 */
export function hermesToArray() {
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
            var values = [];
            /** @type {?} */
            var subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                values.push(value);
            }), (/**
             * @return {?}
             */
            function () {
                if (values.length > 0) {
                    observer.next(values);
                }
                observer.complete();
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRvLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudG8tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHekQsTUFBTSxVQUFVLGFBQWE7SUFFNUI7Ozs7SUFBTyxVQUFDLE1BQTJCO1FBQ2xDLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7UUFBVyxVQUFDLFFBQVE7O2dCQUV4QyxNQUFNLEdBQWEsRUFBRTs7Z0JBRXJCLFVBQVUsR0FDZixxQkFBcUIsQ0FDcEIsUUFBUTs7OztZQUNSLFVBQUMsS0FBUTtnQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUM7OztZQUNEO2dCQUNDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQ0Q7WUFFRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1RvQXJyYXk8VD4oKTogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBBcnJheTxUPj4ge1xuXG5cdHJldHVybiAoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PFQ+Pigob2JzZXJ2ZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgdmFsdWVzOiBBcnJheTxUPiA9IFtdO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID1cblx0XHRcdFx0c3Vic2NyaWJlckZvck9wZXJhdG9yPGFueT4oXG5cdFx0XHRcdFx0b2JzZXJ2ZXIsXG5cdFx0XHRcdFx0KHZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZXMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=