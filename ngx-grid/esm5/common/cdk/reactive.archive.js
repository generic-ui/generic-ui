/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReplaySubject, BehaviorSubject } from 'rxjs';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
ReactiveArchive = /** @class */ (function () {
    function ReactiveArchive(value) {
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
    ReactiveArchive.prototype.set = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.archive$.next(value);
    };
    /**
     * @return {?}
     */
    ReactiveArchive.prototype.select = /**
     * @return {?}
     */
    function () {
        return this.archive$.asObservable();
    };
    return ReactiveArchive;
}());
/**
 * @abstract
 * @template T
 */
export { ReactiveArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactiveArchive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFM0U7Ozs7O0lBSUMseUJBQXNCLEtBQVM7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCw2QkFBRzs7OztJQUFILFVBQUksS0FBUTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQzs7Ozs7Ozs7Ozs7SUFsQkEsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZUFyY2hpdmU8VD4ge1xuXG5cdHByaXZhdGUgYXJjaGl2ZSQ6IFN1YmplY3Q8VD47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlPzogVCkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5hcmNoaXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFyY2hpdmUkID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHNlbGVjdCgpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG59XG4iXX0=