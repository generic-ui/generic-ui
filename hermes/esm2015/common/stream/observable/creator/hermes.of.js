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
export function hermesOf(...args) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    observer => {
        args.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            observer.next(value);
        }));
        observer.complete();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLm9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXhELE1BQU0sVUFBVSxRQUFRLENBQUksR0FBRyxJQUFjO0lBRTVDLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7SUFBSSxRQUFRLENBQUMsRUFBRTtRQUV6QyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQyxFQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uL2hlcm1lcy5vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc09mPFQ+KC4uLmFyZ3M6IEFycmF5PFQ+KTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcblxuXHRcdGFyZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHR9KTtcblxuXHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdH0pO1xufVxuIl19