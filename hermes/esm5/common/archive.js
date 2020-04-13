/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, ReplaySubject } from 'rxjs';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Archive = /** @class */ (function () {
    function Archive(value) {
        if (value) {
            this.archive$ = new BehaviorSubject(value);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
    /**
     * @return {?}
     */
    Archive.prototype.onValue = /**
     * @return {?}
     */
    function () {
        return this.archive$.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Archive.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.archive$.next(value);
    };
    return Archive;
}());
/**
 * @abstract
 * @template T
 */
export { Archive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFM0U7Ozs7O0lBSUMsaUJBQXNCLEtBQVM7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQzs7OztJQUVELHlCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHNCQUFJOzs7O0lBQUosVUFBSyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVGLGNBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7Ozs7Ozs7OztJQWxCQSwyQkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFyY2hpdmU8VD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IFN1YmplY3Q8VD47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlPzogVCkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cdFx0fVxuXHR9XG5cblx0b25WYWx1ZSgpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUkLm5leHQodmFsdWUpO1xuXHR9XG5cbn1cbiJdfQ==