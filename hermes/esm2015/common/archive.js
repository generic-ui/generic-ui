/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, ReplaySubject } from 'rxjs';
/**
 * @abstract
 * @template T
 */
export class Archive {
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
     * @return {?}
     */
    on() {
        return this.archive$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.archive$.next(value);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFM0UsTUFBTSxPQUFnQixPQUFPOzs7OztJQUk1QixZQUFzQixLQUFTO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7Ozs7SUFFRCxFQUFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBRUQ7Ozs7OztJQWxCQSwyQkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFyY2hpdmU8VD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IFN1YmplY3Q8VD47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlPzogVCkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cdFx0fVxuXHR9XG5cblx0b24oKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHZhbHVlKTtcblx0fVxuXG59XG4iXX0=