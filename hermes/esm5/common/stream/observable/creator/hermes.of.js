/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../hermes.observable';
/**
 * @template T
 * @param {...?} args
 * @return {?}
 */
export function hermesOf() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        args.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            observer.next(value);
        }));
        observer.complete();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLm9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sVUFBVSxRQUFRO0lBQUksY0FBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLHlCQUFpQjs7SUFFNUMsT0FBTyxJQUFJLGdCQUFnQjs7OztJQUFJLFVBQUEsUUFBUTtRQUV0QyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNPZjxUPiguLi5hcmdzOiBBcnJheTxUPik6IEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XG5cblx0XHRhcmdzLmZvckVhY2godmFsdWUgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0fSk7XG5cblx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHR9KTtcbn1cbiJdfQ==