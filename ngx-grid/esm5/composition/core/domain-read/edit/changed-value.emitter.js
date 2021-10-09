/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesReplaySubject } from '@generic-ui/hermes';
/**
 * @template T
 */
var /**
 * @template T
 */
ChangedValueEmitter = /** @class */ (function () {
    function ChangedValueEmitter() {
        this.subject$ = new HermesReplaySubject(1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ChangedValueEmitter.prototype.emit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject$.next(value);
    };
    /**
     * @return {?}
     */
    ChangedValueEmitter.prototype.on = /**
     * @return {?}
     */
    function () {
        return this.subject$.toObservable();
    };
    return ChangedValueEmitter;
}());
/**
 * @template T
 */
export { ChangedValueEmitter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFM0U7Ozs7SUFJQztRQUZRLGFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFJLENBQUMsQ0FBQyxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsa0NBQUk7Ozs7SUFBSixVQUFLLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZ0NBQUU7OztJQUFGO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRiwwQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7Ozs7O0lBWkEsdUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzUmVwbGF5U3ViamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VkVmFsdWVFbWl0dGVyPFQ+IHtcblxuXHRwcml2YXRlIHN1YmplY3QkID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3Q8VD4oMSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRlbWl0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdG9uKCk6IEhlcm1lc09ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=