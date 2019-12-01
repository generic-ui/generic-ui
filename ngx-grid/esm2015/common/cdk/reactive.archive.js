/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReplaySubject, BehaviorSubject } from 'rxjs';
/**
 * @abstract
 * @template T
 */
export class ReactiveArchive {
    /**
     * @protected
     * @param {?=} value
     */
    constructor(value) {
        if (value) {
            this.archive$ = new BehaviorSubject(value);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.archive$.next(value);
    }
    /**
     * @return {?}
     */
    select() {
        return this.archive$.asObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactiveArchive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFM0UsTUFBTSxPQUFnQixlQUFlOzs7OztJQUlwQyxZQUFzQixLQUFTO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQVE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBRUQ7Ozs7OztJQWxCQSxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlQXJjaGl2ZTxUPiB7XG5cblx0cHJpdmF0ZSBhcmNoaXZlJDogU3ViamVjdDxUPjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWU/OiBUKSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYXJjaGl2ZSQgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcblx0XHR9XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0c2VsZWN0KCk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cbn1cbiJdfQ==