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
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const values = [];
            /** @type {?} */
            const subscriber = subscriberForOperator(observer, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                values.push(value);
            }), (/**
             * @return {?}
             */
            () => {
                if (values.length > 0) {
                    observer.next(values);
                }
                observer.complete();
            }));
            return source.subscribe(subscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRvLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudG8tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHekQsTUFBTSxVQUFVLGFBQWE7SUFFNUI7Ozs7SUFBTyxDQUFDLE1BQTJCLEVBQUUsRUFBRTtRQUN0QyxPQUFPLElBQUksZ0JBQWdCOzs7O1FBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7a0JBRTVDLE1BQU0sR0FBYSxFQUFFOztrQkFFckIsVUFBVSxHQUNmLHFCQUFxQixDQUNwQixRQUFROzs7O1lBQ1IsQ0FBQyxLQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUM7OztZQUNELEdBQUcsRUFBRTtnQkFDSixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUNEO1lBRUYsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNUb0FycmF5PFQ+KCk6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgQXJyYXk8VD4+IHtcblxuXHRyZXR1cm4gKHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxBcnJheTxUPj4oKG9ic2VydmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IHZhbHVlczogQXJyYXk8VD4gPSBbXTtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9XG5cdFx0XHRcdHN1YnNjcmliZXJGb3JPcGVyYXRvcjxhbnk+KFxuXHRcdFx0XHRcdG9ic2VydmVyLFxuXHRcdFx0XHRcdCh2YWx1ZTogVCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWVzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19